#!/usr/bin/env node
// v0.6 quality slice — viewer for the source-page eval log.
//
// Reads logs/quality-source-pages.jsonl (appended by quality-source-page.mjs)
// and shows trends per page over time. Read-only — never modifies the log.
//
// Usage:
//   node scripts/quality-log-summary.mjs                       # latest per page
//   node scripts/quality-log-summary.mjs --page <slug>         # full history of one page
//   node scripts/quality-log-summary.mjs --latest N            # last N entries across all pages
//   node scripts/quality-log-summary.mjs --since YYYY-MM-DD    # entries since a date (inclusive)
//   node scripts/quality-log-summary.mjs --dim D3              # focus on one dimension trend
//   node scripts/quality-log-summary.mjs --json                # raw JSONL pass-through (filtered)
//
// Flags compose: `--page foo --dim D3` shows the D3 trend for page foo.

import { readFileSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, '..');
const LOG_FILE = join(REPO_ROOT, 'logs', 'quality-source-pages.jsonl');

function arg(flag) {
  const i = process.argv.indexOf(flag);
  return i >= 0 ? process.argv[i + 1] : null;
}
function has(flag) {
  return process.argv.includes(flag);
}

const PAGE = arg('--page');
const LATEST = arg('--latest') ? parseInt(arg('--latest'), 10) : null;
const SINCE = arg('--since');
const DIM = arg('--dim'); // D1 | D2 | D3 | D4 | D5
const JSON_OUT = has('--json');

if (!existsSync(LOG_FILE)) {
  console.error(`No log yet at ${LOG_FILE.slice(REPO_ROOT.length + 1)}.`);
  console.error('Run `node scripts/quality-source-page.mjs` first to seed it.');
  process.exit(2);
}

const lines = readFileSync(LOG_FILE, 'utf8')
  .split(/\r?\n/)
  .filter((l) => l.trim().length > 0);

const entries = [];
for (const [i, line] of lines.entries()) {
  try {
    entries.push(JSON.parse(line));
  } catch (err) {
    console.warn(`[warn] line ${i + 1} not valid JSON, skipping: ${err.message}`);
  }
}

// ----- Filter -----
let filtered = entries;
if (PAGE) {
  filtered = filtered.filter((e) => e.slug && e.slug.includes(PAGE));
}
if (SINCE) {
  filtered = filtered.filter((e) => e.ts && e.ts >= SINCE);
}

if (filtered.length === 0) {
  console.log('No matching entries.');
  process.exit(0);
}

// ----- Output modes -----
if (JSON_OUT) {
  // Raw pass-through (filtered)
  for (const e of filtered) console.log(JSON.stringify(e));
  process.exit(0);
}

const fmtScore = (s) => (s === null || s === undefined ? '—' : String(s));
const fmtTotal = (t) => (typeof t === 'number' ? t.toFixed(2) : '—');
const fmtBand = (b) => (b === 'ceiling' ? '✓' : b === 'workable' ? '~' : '✗');
const shortTs = (ts) => (ts || '').slice(0, 19).replace('T', ' ');

// MODE: --latest N → flat chronological list of last N entries
if (LATEST !== null) {
  const recent = filtered.slice(-LATEST);
  console.log(`Latest ${recent.length} eval entr${recent.length === 1 ? 'y' : 'ies'} (of ${filtered.length} matched):`);
  console.log('');
  console.log('  timestamp           band  total | D1 D2 D3 D4 D5 | slug');
  console.log('  ------------------- ----  ----- + -------------- + ----');
  for (const e of recent) {
    const s = e.scores || {};
    console.log(
      `  ${shortTs(e.ts)} ${fmtBand(e.band).padStart(4)}  ${fmtTotal(e.total).padStart(5)} | ${fmtScore(s.D1).padStart(2)} ${fmtScore(s.D2).padStart(2)} ${fmtScore(s.D3).padStart(2)} ${fmtScore(s.D4).padStart(2)} ${fmtScore(s.D5).padStart(2)} | ${e.slug}`,
    );
  }
  process.exit(0);
}

// MODE: --page <slug> → full history of that page (chronological)
if (PAGE) {
  console.log(`History for "${PAGE}" (${filtered.length} eval${filtered.length === 1 ? '' : 's'}):`);
  console.log('');
  console.log('  timestamp           band  total | D1 D2 D3 D4 D5 | notes (count)');
  console.log('  ------------------- ----  ----- + -------------- + -------------');
  // sort by ts ascending so the reader sees evolution
  const sorted = [...filtered].sort((a, b) => (a.ts || '').localeCompare(b.ts || ''));
  let prevTotal = null;
  for (const e of sorted) {
    const s = e.scores || {};
    const delta =
      prevTotal === null
        ? '    '
        : e.total > prevTotal
          ? ` ↑${(e.total - prevTotal).toFixed(2)}`
          : e.total < prevTotal
            ? ` ↓${(prevTotal - e.total).toFixed(2)}`
            : '  ──';
    const notesCount = (e.notes || []).length;
    console.log(
      `  ${shortTs(e.ts)} ${fmtBand(e.band).padStart(4)}  ${fmtTotal(e.total).padStart(5)}${delta} | ${fmtScore(s.D1).padStart(2)} ${fmtScore(s.D2).padStart(2)} ${fmtScore(s.D3).padStart(2)} ${fmtScore(s.D4).padStart(2)} ${fmtScore(s.D5).padStart(2)} | ${notesCount} note${notesCount === 1 ? '' : 's'}`,
    );
    prevTotal = e.total;
  }
  // Latest notes detail
  const latest = sorted[sorted.length - 1];
  if (latest.notes && latest.notes.length > 0) {
    console.log(`\n  Latest notes (${shortTs(latest.ts)}):`);
    for (const n of latest.notes) console.log(`    - ${n}`);
  }
  // Dimension trend if --dim specified
  if (DIM) {
    console.log(`\n  ${DIM} trend:`);
    const seq = sorted
      .map((e) => (e.scores && e.scores[DIM] !== undefined ? `${shortTs(e.ts).slice(0, 10)}=${fmtScore(e.scores[DIM])}` : null))
      .filter(Boolean);
    console.log(`    ${seq.join(' → ')}`);
  }
  process.exit(0);
}

// DEFAULT MODE: latest entry per page (current state)
const latestPerPage = new Map();
for (const e of filtered) {
  const existing = latestPerPage.get(e.slug);
  if (!existing || (e.ts || '') > (existing.ts || '')) latestPerPage.set(e.slug, e);
}
const rows = [...latestPerPage.values()].sort((a, b) => (a.total ?? 0) - (b.total ?? 0));

console.log(`Latest eval per page (${rows.length} page${rows.length === 1 ? '' : 's'}, log has ${entries.length} total entr${entries.length === 1 ? 'y' : 'ies'}):`);
console.log('');
console.log('  band  total | D1 D2 D3 D4 D5 | latest ts          | slug');
console.log('  ----  ----- + -------------- + ------------------ + ----');
for (const e of rows) {
  const s = e.scores || {};
  console.log(
    `  ${fmtBand(e.band).padStart(4)}  ${fmtTotal(e.total).padStart(5)} | ${fmtScore(s.D1).padStart(2)} ${fmtScore(s.D2).padStart(2)} ${fmtScore(s.D3).padStart(2)} ${fmtScore(s.D4).padStart(2)} ${fmtScore(s.D5).padStart(2)} | ${shortTs(e.ts)} | ${e.slug}`,
  );
}

const dist = { ceiling: 0, workable: 0, belowFloor: 0 };
for (const e of rows) {
  if (e.band === 'ceiling') dist.ceiling++;
  else if (e.band === 'workable') dist.workable++;
  else dist.belowFloor++;
}
console.log(
  `\nBand distribution (latest): ✓ ceiling=${dist.ceiling}, ~ workable=${dist.workable}, ✗ below-floor=${dist.belowFloor}`,
);
console.log(
  `\nUseful queries:\n  Trend of one page:    node scripts/quality-log-summary.mjs --page <slug>\n  Last N entries:       node scripts/quality-log-summary.mjs --latest 20\n  Since a date:         node scripts/quality-log-summary.mjs --since 2026-05-01\n  Raw JSONL filtered:   node scripts/quality-log-summary.mjs --json --page <slug>`,
);
