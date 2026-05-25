#!/usr/bin/env node
// v0.6 quality slice — mechanical floor scorer for source pages.
//
// Companion to scripts/quality-score.mjs (which scores concepts and syntheses).
// This scorer's scope is wiki/sources/*.md only — disjoint targets.
//
// Computes the MECHANICAL FLOOR for each of the five rubric dimensions
// described in .claude/skills/scientific-papers-processing/quality-rubric.md.
// The floor is a LOWER BOUND. A human or LLM reviewer fills in the judgment
// score in the source page's body `## Quality review` block; that score
// must be ≥ the floor for any given dimension.
//
// Rubric (per quality-rubric.md):
//   D1 Five Cs           - presence of ## TL;DR + ## Context (WHY)
//   D2 IMRaD skeleton    - presence of WHY/HOW/WHAT/SOWHAT sections + ≥100 words each
//   D3 Distinctive arts  - figure/table mention count + ## Distinctive artifacts section
//   D4 Critical reading  - presence of "Limitations the authors acknowledge"
//                          and "Limitations not flagged" phrases
//   D5 Pass-3 markers    - only when length: claims Pass 3; count of Pass-3 markers
//
// Total normalisation: /12 for Pass 1/2 pages; /15 for Pass 3 pages.
// Thresholds: ≥0.85 ceiling | 0.65–0.85 workable | <0.65 below floor.
//
// Usage:
//   node scripts/quality-source-page.mjs              # read-only, print scores
//   node scripts/quality-source-page.mjs --page <s>   # one page
//   node scripts/quality-source-page.mjs --write      # also commit floors to frontmatter
//
// Design choice: read-only by default (unlike quality-score.mjs which writes
// by default). Source-page scoring is judgment-adjacent — the floor numbers
// can mislead if treated as the final score, so writes must be explicit.

import { readFileSync, writeFileSync, appendFileSync, mkdirSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, basename, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, '..');
const WRITE = process.argv.includes('--write');
const NO_LOG = process.argv.includes('--no-log');
const pageArgIdx = process.argv.indexOf('--page');
const PAGE_ARG = pageArgIdx >= 0 ? process.argv[pageArgIdx + 1] : null;

const TARGET_DIR = 'wiki/sources';
const LOG_DIR = join(REPO_ROOT, 'logs');
const LOG_FILE = join(LOG_DIR, 'quality-source-pages.jsonl');
const RUBRIC_VERSION = '1.0';

function walk(dir) {
  const out = [];
  try {
    for (const name of readdirSync(dir)) {
      const p = join(dir, name);
      if (statSync(p).isDirectory()) out.push(...walk(p));
      else if (name.endsWith('.md')) out.push(p);
    }
  } catch {}
  return out;
}

// Split body into sections keyed by their H2 heading (lowercased, normalised).
// Returns { sectionKey: bodyText, ... }.
function splitSections(body) {
  const sections = {};
  const headerRe = /^(## .+)$/gm;
  const matches = [...body.matchAll(headerRe)];
  for (let i = 0; i < matches.length; i++) {
    const heading = matches[i][1].trim();
    const start = matches[i].index + matches[i][0].length;
    const end = i + 1 < matches.length ? matches[i + 1].index : body.length;
    sections[heading] = body.slice(start, end);
  }
  return sections;
}

function wordCount(s) {
  return s.split(/\s+/).filter((w) => w.length > 0).length;
}

// Find a section whose heading matches any of the given substring patterns
// (case-insensitive). Returns the section body, or null if not found.
function findSection(sections, patterns) {
  for (const heading of Object.keys(sections)) {
    const h = heading.toLowerCase();
    if (patterns.some((p) => h.includes(p.toLowerCase()))) {
      return sections[heading];
    }
  }
  return null;
}

function scoreD1(sections) {
  // D1 Five Cs floor: presence of ## TL;DR + ## Context (WHY)
  const notes = [];
  let score = 0;
  const hasTLDR = findSection(sections, ['tl;dr', 'tldr']) !== null;
  const hasContext = findSection(sections, ['context', 'why']) !== null;
  if (hasTLDR) score++;
  else notes.push('no ## TL;DR section');
  if (hasContext) score++;
  else notes.push('no ## Context (WHY) section');
  // D1=3 requires judgment (Context substance) — unreachable mechanically
  return { score: Math.min(2, score), notes, ceiling: 2 };
}

function scoreD2(sections) {
  // D2 IMRaD floor: all 4 sections present + ≥100 words each
  const notes = [];
  const why = findSection(sections, ['why', 'context']);
  const how = findSection(sections, ['how', 'methods']);
  const what = findSection(sections, ['what', 'results']);
  const sowhat = findSection(sections, ['so what', 'discussion', 'significance']);

  const present = [why, how, what, sowhat].filter((s) => s !== null).length;
  if (present === 0) {
    notes.push('no IMRaD sections detected');
    return { score: 0, notes, ceiling: 2 };
  }
  if (present < 4) {
    const missing = [];
    if (!why) missing.push('WHY/Context');
    if (!how) missing.push('HOW/Methods');
    if (!what) missing.push('WHAT/Results');
    if (!sowhat) missing.push('SO-WHAT/Discussion');
    notes.push(`missing IMRaD sections: ${missing.join(', ')}`);
    return { score: 1, notes, ceiling: 2 };
  }
  // All four present — check word counts
  const wcs = { why: wordCount(why), how: wordCount(how), what: wordCount(what), sowhat: wordCount(sowhat) };
  const thin = Object.entries(wcs).filter(([_, n]) => n < 100);
  if (thin.length > 0) {
    notes.push(`thin sections (<100 words): ${thin.map(([k, n]) => `${k}=${n}`).join(', ')}`);
    return { score: 1, notes, ceiling: 2 };
  }
  // All four substantive — floor is 2; D2=3 requires judgment on specific-result citations
  return { score: 2, notes, ceiling: 2 };
}

function scoreD3(body, sections) {
  // D3 Distinctive-artifact floor:
  //   - Count Figure N / Fig. N / Table N mentions in body
  //   - Presence of ## Distinctive artifacts section
  const notes = [];
  const figureMatches = [...body.matchAll(/\b(?:Figure|Fig\.?)\s+\d+/gi)];
  const tableMatches = [...body.matchAll(/\bTable\s+\d+/g)];
  const hasArtifactsSection = findSection(sections, ['distinctive artifacts', 'distinctive artefacts']) !== null;

  const totalMentions = figureMatches.length + tableMatches.length;

  let score;
  if (totalMentions === 0 && !hasArtifactsSection) {
    score = 0;
    notes.push('no Figure/Table mentions; no ## Distinctive artifacts section');
  } else if (!hasArtifactsSection) {
    score = 1;
    notes.push(
      `${figureMatches.length} figure mention(s), ${tableMatches.length} table mention(s); no ## Distinctive artifacts section`,
    );
  } else if (totalMentions > 0 && hasArtifactsSection) {
    score = 2;
    // No notes — passing the floor
  } else {
    // hasArtifactsSection but no mentions — borderline; treat as floor 1
    score = 1;
    notes.push('## Distinctive artifacts section exists but no Figure/Table mentions');
  }
  // D3=3 requires fidelity judgment — unreachable mechanically
  return { score, notes, ceiling: 2 };
}

function scoreD4(body) {
  // D4 Critical-reading floor: presence of "Limitations the authors acknowledge"
  // and "Limitations not flagged" phrases
  const notes = [];
  const hasAck = /limitations the authors? acknowledge/i.test(body);
  const hasNotFlagged = /limitations? not flagged/i.test(body);
  let score = 0;
  if (hasAck) score++;
  else notes.push('no "Limitations the authors acknowledge" phrase');
  if (hasNotFlagged) score++;
  else notes.push('no "Limitations not flagged" phrase');
  // D4=3 requires figure-quality-critique judgment — unreachable
  return { score, notes, ceiling: 2 };
}

function scoreD5(fm, body) {
  // D5 Pass-3 markers floor: only if length: claims Pass 3
  const length = String(fm.length || '');
  if (!/pass\s*3/i.test(length)) {
    return { score: null, notes: [], ceiling: null };
  }
  const notes = [];
  // Count phrases matching the four Pass-3 outputs
  const markers = [
    { pat: /implicit assumption/i, label: 'implicit-assumptions' },
    { pat: /missing citation/i, label: 'missing-citations' },
    { pat: /(strong|weak) points?/i, label: 'strong/weak-points' },
    { pat: /(technique|methodolog\w+) issue/i, label: 'technique-issues' },
  ];
  const hits = markers.filter((m) => m.pat.test(body));
  const score = Math.min(2, hits.length);
  if (hits.length === 0) {
    notes.push('Pass 3 claimed but no Pass-3 marker phrases detected');
  } else {
    notes.push(`Pass-3 markers detected: ${hits.map((h) => h.label).join(', ')}`);
  }
  // D5=3 unreachable mechanically (reconstruct-from-memory test)
  return { score, notes, ceiling: 2 };
}

function scorePage(file) {
  const raw = readFileSync(file, 'utf8');
  const parsed = matter(raw);
  const fm = parsed.data;
  const body = parsed.content;
  const sections = splitSections(body);

  const d1 = scoreD1(sections);
  const d2 = scoreD2(sections);
  const d3 = scoreD3(body, sections);
  const d4 = scoreD4(body);
  const d5 = scoreD5(fm, body);

  const isPass3 = d5.score !== null;
  const denominator = isPass3 ? 15 : 12;
  const numerator = d1.score + d2.score + d3.score + d4.score + (isPass3 ? d5.score : 0);
  const total = numerator / denominator;

  const notes = [];
  for (const [k, r] of [['D1', d1], ['D2', d2], ['D3', d3], ['D4', d4], ['D5', d5]]) {
    for (const n of r.notes) notes.push(`${k}: ${n}`);
  }

  // Capture depth claim verbatim (e.g. "~21 pages (Pass 2 — abstract, intro, …)"). Used in the log.
  const depthClaim = typeof fm.length === 'string' ? fm.length : null;

  return {
    file,
    slug: basename(file, '.md'),
    depthClaim,
    isPass3,
    denominator,
    floors: { D1: d1.score, D2: d2.score, D3: d3.score, D4: d4.score, D5: d5.score },
    total: Math.round(total * 100) / 100,
    notes,
  };
}

// ----- Append JSONL log lines (one per page per run) -----
function logResults(results) {
  if (NO_LOG) return { wrote: 0, skipped: true };
  try {
    if (!existsSync(LOG_DIR)) mkdirSync(LOG_DIR, { recursive: true });
  } catch (err) {
    console.warn(`\n[log] could not create ${LOG_DIR}: ${err.message} — skipping log append`);
    return { wrote: 0, error: String(err) };
  }
  const timestamp = new Date().toISOString();
  // Run-level metadata is repeated per line so individual lines remain self-describing
  // for jq queries (no need to join across files or run-level header lines).
  const runMeta = {
    ts: timestamp,
    kind: 'mechanical-floor',
    rubric_version: RUBRIC_VERSION,
    write_mode: WRITE,
    scope: PAGE_ARG ? `page:${PAGE_ARG}` : 'all',
  };
  const lines = results.map((r) => {
    const band = r.total >= 0.85 ? 'ceiling' : r.total >= 0.65 ? 'workable' : 'below-floor';
    const entry = {
      ...runMeta,
      slug: r.slug,
      path: r.file.slice(REPO_ROOT.length + 1),
      depth_claim: r.depthClaim,
      is_pass3: r.isPass3,
      denominator: r.denominator,
      scores: r.floors,
      total: r.total,
      band,
      notes: r.notes,
    };
    return JSON.stringify(entry);
  });
  try {
    appendFileSync(LOG_FILE, lines.join('\n') + '\n');
    return { wrote: lines.length, path: LOG_FILE };
  } catch (err) {
    console.warn(`\n[log] could not append to ${LOG_FILE}: ${err.message}`);
    return { wrote: 0, error: String(err) };
  }
}

// ----- Write back to frontmatter (idempotent, minimal-invasive) -----
function writeFloor(file, floors, notes) {
  let content = readFileSync(file, 'utf8');
  if (!content.startsWith('---\n')) return { wrote: false, reason: 'no frontmatter' };
  const fmEnd = content.indexOf('\n---\n', 4);
  if (fmEnd === -1) return { wrote: false, reason: 'unterminated frontmatter' };

  let fm = content.slice(4, fmEnd);
  const bodyPart = content.slice(fmEnd + 1);

  // Strip existing quality_floor and quality_floor_notes (single-line + flow-array forms)
  fm = fm.replace(/^quality_floor:[ \t].*(?:\r?\n|$)/gm, '');
  fm = fm.replace(/^quality_floor_notes:[ \t]*(?:\[[^\]]*\][ \t]*(?:\r?\n|$)|\r?\n(?:[ \t]+-.*\r?\n)+)/gm, '');

  // Build new fields — inline YAML flow object for the floors, flow array for notes
  const floorYaml = `{D1: ${floors.D1}, D2: ${floors.D2}, D3: ${floors.D3}, D4: ${floors.D4}, D5: ${floors.D5=== null ? 'null' : floors.D5}}`;
  let newFields = `quality_floor: ${floorYaml}\n`;
  if (notes.length > 0) {
    const escaped = notes.map((n) => "'" + n.replace(/'/g, "''") + "'").join(', ');
    newFields += `quality_floor_notes: [${escaped}]\n`;
  }

  const wouldBe = '---\n' + fm.trimEnd() + '\n' + newFields + bodyPart;
  if (wouldBe === content) return { wrote: false, reason: 'no-op' };

  writeFileSync(file, wouldBe);
  return { wrote: true };
}

// ----- DRIVER -----
const sourcesDir = join(REPO_ROOT, TARGET_DIR);
const candidates = walk(sourcesDir).filter((f) => !PAGE_ARG || f.includes(PAGE_ARG));

const results = candidates.map(scorePage);
results.sort((a, b) => a.total - b.total);

console.log(`${WRITE ? '' : '[READ-ONLY] '}quality-source-page.mjs — scored ${results.length} source page(s)`);
console.log('');
console.log('total | D1 D2 D3 D4 D5 | path');
console.log('------+----------------+-----');
for (const r of results) {
  const rel = r.file.slice(REPO_ROOT.length + 1);
  const f = r.floors;
  const cell = (v) => String(v === null ? '—' : v).padStart(2);
  console.log(
    `${r.total.toFixed(2)}  | ${cell(f.D1)} ${cell(f.D2)} ${cell(f.D3)} ${cell(f.D4)} ${cell(f.D5)}  | ${rel}`,
  );
}

const dist = { ge85: 0, mid: 0, lt65: 0 };
for (const r of results) {
  if (r.total >= 0.85) dist.ge85++;
  else if (r.total >= 0.65) dist.mid++;
  else dist.lt65++;
}
console.log(`\nDistribution: ≥0.85 = ${dist.ge85}, 0.65–0.85 = ${dist.mid}, <0.65 = ${dist.lt65}`);
console.log(`Pass 3 pages: ${results.filter((r) => r.isPass3).length} (denominator /15); other: ${results.filter((r) => !r.isPass3).length} (/12)`);

// Print all flagged pages with their notes
const flagged = results.filter((r) => r.notes.length > 0);
if (flagged.length > 0) {
  console.log('\nFlagged pages (mechanical-floor notes):');
  for (const r of flagged) {
    console.log(`\n  ${r.file.slice(REPO_ROOT.length + 1)} (floor total ${r.total.toFixed(2)})`);
    for (const n of r.notes) console.log(`    - ${n}`);
  }
}

if (WRITE) {
  let wrote = 0;
  let noop = 0;
  for (const r of results) {
    const { wrote: w } = writeFloor(r.file, r.floors, r.notes);
    if (w) wrote++;
    else noop++;
  }
  console.log(`\nWrites: ${wrote} changed / ${noop} unchanged.`);
} else {
  console.log('\n(Read-only run. Pass --write to commit quality_floor: + quality_floor_notes: to frontmatter.)');
}

// Append JSONL eval log (unless --no-log)
const logRes = logResults(results);
if (logRes.skipped) {
  console.log('\n[log] --no-log passed; eval log not updated.');
} else if (logRes.wrote > 0) {
  console.log(`\n[log] Appended ${logRes.wrote} entr${logRes.wrote === 1 ? 'y' : 'ies'} to ${logRes.path.slice(REPO_ROOT.length + 1)}`);
  console.log(`      View trends: node scripts/quality-log-summary.mjs [--page <slug>] [--latest N]`);
}

console.log(
  '\nReminder: floors are a LOWER BOUND. Fill in the judgment score in the source-page body `## Quality review` block per quality-rubric.md.',
);
