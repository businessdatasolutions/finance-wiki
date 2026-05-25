---
name: scientific-papers-processing
description: Use when ingesting a scientific paper (PDF, preprint, conference proceeding, journal article) into the wiki — i.e. when a `.pdf` lands in `raw/papers/` or `raw/assets/`, or the user says "ingest this paper", "process this paper", "read this paper into the wiki", "summarise this PDF for the wiki", or shares an arXiv / DOI / journal URL and wants a wiki source page. Combines Keshav's three-pass reading method with the wiki's Acquire+Process schema so the depth of reading is bounded by the paper's relevance and the resulting source page carries the full lifecycle contract.
---

# scientific-papers-processing

The disciplined workflow for turning a scientific paper into a wiki source page. The reading depth follows Keshav's three-pass method ([`HowtoReadPaper.pdf`](HowtoReadPaper.pdf)); the body skeleton follows the IMRaD structure ([`Research-Paper-Structure.png.webp`](Research-Paper-Structure.png.webp)); the file paths, frontmatter, and step ordering follow CLAUDE.md §Ingest.

## When to use

- A `.pdf` of a paper lands in `raw/papers/`, `raw/assets/`, or is dragged into the conversation.
- The user shares an arXiv URL, DOI, or publisher link and asks for the paper to be ingested.
- The user asks to "read", "summarise", "process", or "review" a paper for the wiki — fetch and read first, *then* summarise.
- A paper is cited in another source's `references:` and the user wants to chase it down.

When **not** to use:

- The "paper" is a blog post, white paper, or industry report — those go through the `articles/` or `reports/` raw subfolders with lighter conventions, not this skill.
- The user wants a one-off question answered *about* a paper they're holding and is not asking for a wiki page. Use `/wq` or read the PDF inline instead.
- A paper has already been ingested and the user is updating its source page — go straight to the existing page; do not re-run Acquire.

## The two-phase shape (matches CLAUDE.md §Ingest)

```
ACQUIRE                                            PROCESS
─────────────────────                              ──────────────────────────────────────
PDF / URL ──► convert ──► raw/papers/<slug>.md ──► 3-pass read ──► wiki/sources/<YYYY-MM-DD>-<slug>.md
                                                       │
                                                       └► touch concepts/entities/threads as needed
```

Acquire **only** touches `raw/`. Process **only** writes `wiki/`. They can run in the same session (the umbrella `ingest` op in `log.md`) or be split across sessions (then log Acquire as `acquire | …` and Process later as `ingest | …`).

## Phase 1 — Acquire

### 1.1 Identify the source

Capture, before converting:

- **Authors** (exact spelling, all of them, in source order — first author identity is load-bearing for the page slug).
- **Title** (verbatim — colons matter, subtitles matter).
- **Year of publication** (the date that goes in the slug prefix; use the official publication date, not the preprint date, unless the wiki page is explicitly about the preprint).
- **Venue** (journal name + volume/issue, or conference name + year, or `arXiv:NNNN.NNNNN`).
- **DOI** if available; else canonical URL.

### 1.2 Convert PDF → markdown

Per CLAUDE.md §Acquire step 2: papers must be converted to markdown *before* landing in `raw/papers/`. Conversion options, in order of fidelity:

```bash
# Best: preserves structure, equations, tables, figure captions
marker_single <input.pdf> --output_dir raw/papers/ --output_format markdown

# Good fallback for text-heavy papers
markitdown <input.pdf> > raw/papers/<slug>.md

# Last resort — loses formatting
pdftotext -layout <input.pdf> - > raw/papers/<slug>.md
```

Keep the original PDF at `raw/assets/<slug>.pdf` for reference (figures, equation rendering, page-number citations).

### 1.3 Slug naming

Slugify the **first-author surname + year + first-3–4 content words**, lowercase, ASCII, hyphen-separated. Examples:

| Paper | Slug |
|---|---|
| Keshav (2007), *How to Read a Paper* | `keshav-2007-how-to-read-a-paper` |
| Vaswani et al. (2017), *Attention Is All You Need* | `vaswani-2017-attention-is-all-you-need` |
| Dell'Acqua et al. (2026), *Navigating the Jagged Technological Frontier* | `dellacqua-2026-jagged-technological-frontier` |

The raw file lives at `raw/papers/<slug>.md`. The wiki source page filename will use the **publication date** prefix per CLAUDE.md: `wiki/sources/<YYYY-MM-DD>-<slug>.md`.

### 1.4 Acquire-time frontmatter contract

The converted markdown must carry a YAML header — Process reads this during pre-flight. Minimum fields:

```yaml
---
title: <verbatim title>
authors:
  - <Surname, Initial.> (first author)
  - <…>
year: <YYYY>
publication_date: <YYYY-MM-DD>   # ISO; use publication date, not preprint date
venue: <journal / conference / arXiv id>
doi: <10.xxxx/...>               # if available
url: <canonical URL>             # journal page, arXiv abs page, or institutional repo
pdf: <relative path to raw/assets/...pdf>
page_count: <integer>            # actual PDF page count
notes: |
  <provenance: marker_single / pdftotext / human-edited; OCR quality; figures missing; etc.>
---
```

If conversion produced a clean file but the YAML header isn't there, **prepend it by hand** before moving to Phase 2. The header is the contract between Acquire and Process; Process refuses to write a source page without it.

## Phase 2 — Process

### 2.1 Pre-flight checks (CLAUDE.md §Verifying sources before ingest)

Before reading further, run all four checks. **Surface any failure to the user before continuing.**

| Check | Test | Failure action |
|---|---|---|
| **Scope** | Highest TOC page reference ≤ actual PDF page count? Filename matches `*-sample.pdf` / `L-NNNNNNNN-pdf*.pdf` / generic `download.pdf`? | If TOC > pages, you have an excerpt or sample. Stop and ask the user whether to ingest as partial or wait for the full file. |
| **Identity** | Cover/title page authors + title match the filename's claimed identity? | If mismatch (e.g. `Mitchell-Dino-2011.pdf` actually contains Dell'Acqua 2026), flag the mismatch. The slug names the *actual* content; `raw:` frontmatter records the literal filename; note the mismatch in the source page body + log. |
| **Honest scoping** | Will the source page's `length:` field state what was *actually read* (not the nominal full length)? | If you only read pp. 1–15, say so. Front matter + intro + framework only? Say so. Never claim "full ingest" when the body chapters were skipped. |
| **Visual inventory** | How many figures / tables / equations / diagrams does the source carry, and did the markdown conversion preserve them? `pdftotext -layout` drops images entirely; `marker` keeps them as referenced assets but figure semantics may need recovery. | If visuals were lost in conversion, plan to read the original PDF in `raw/assets/<slug>.pdf` directly via Pass 2 (which already covers figures + tables). State the visual count in the pre-write summary so the user can confirm scope of the `## Visual content` section. See [CLAUDE.md §Check 4](../../../CLAUDE.md#check-4--visual-inventory-what-visuals-does-the-source-carry-and-did-the-conversion-preserve-them) and [§Visual content extraction](../../../CLAUDE.md#visual-content-extraction). |

### 2.2 The three-pass read (Keshav, 2007)

The pass depth is bounded by the paper's *relevance* to the wiki, not by completeness for its own sake. Keshav's method:

**Pass 1 — Bird's-eye view (5–10 min). Always run.**

1. Read title, abstract, introduction.
2. Read section + subsection headings (skip body).
3. Read conclusions.
4. Glance over references — mentally tick those already in the wiki.

At the end of Pass 1, answer the **five Cs**:

1. **Category** — measurement / analysis / prototype / position / survey / framework.
2. **Context** — which other wiki sources is this related to? Which theoretical bases?
3. **Correctness** — assumptions defensible?
4. **Contributions** — main claims, in one sentence each.
5. **Clarity** — well-written? Equations rigorous? Figures honest (error bars, axis labels)?

**Decision gate:** Decide depth:

- Outside wiki scope → write a minimal Pass-1-only source page (length: `"~N pages (Pass 1 only — abstract, intro, conclusions read; body deferred)"`) so the paper is *findable* if it later becomes relevant. Confidence stays modest (0.7 default).
- Adjacent to wiki interests → continue to Pass 2.
- Core to current threads → continue to Pass 2, plan for Pass 3.

**Pass 2 — Content grasp (up to 1 hour). Run when paper is adjacent/core.**

1. Read figures + tables with care. Are axes labelled? Error bars? Sample sizes? Statistical significance noted? *Common figure mistakes separate excellent from shoddy work — flag them in the source page body.*
2. Read methods + results in full. Skim proofs.
3. Mark unread references that look central — add them to a "Citations to chase" list in the source page body.
4. You should now be able to summarise the paper to someone else with supporting evidence.

If you can't summarise at the end of Pass 2: either the subject matter is genuinely unfamiliar (note this honestly — confidence cap at 0.7 until a Pass 3 or a second source corroborates), or the paper is poorly written (flag this in the source page).

**Pass 3 — Virtual re-implementation (4–5 hours novice / 1 hour expert). Run only for core/load-bearing papers.**

1. Re-create the work mentally: same assumptions, same data, what would *you* have concluded?
2. Challenge every assumption in every statement.
3. Identify implicit assumptions, missing citations, weak experimental controls.
4. Jot down future-work ideas — these may become `wiki/threads/` entries.

A Pass-3-read paper supports a confidence of 0.85+ and is candidate material for the page's `## Debates and supersession` section if it contradicts or refines an existing wiki claim.

### 2.3 Discuss key takeaways with the user

Per CLAUDE.md §Process step 2: before writing the source page, surface the headline findings in a short response. Format:

```markdown
**Pre-write summary of `<slug>`:**

- **Five Cs:** Category = …, Context = …, Correctness = …, Contributions = …, Clarity = …
- **Headline finding:** <one sentence>
- **Visual inventory:** ~N figures, M tables, K equations — conversion fidelity: clean / partial / images-stripped (PDF read planned for §Visual content)
- **W&W cells in play:** <list, or "none — outside W&W lens">
- **Concepts/entities I'll touch:** [[concept-a]], [[concept-b]], [[Author Name]]
- **Neighbour-source candidates (preview):** [[source-X]], [[source-Y]] — full scan in step 5
- **Proposed confidence:** 0.XX (rationale: …)
- **Read depth:** Pass 1 / Pass 2 / Pass 3
```

Wait for user confirmation (or, in auto mode, the user's standing approval per session) before writing the source page.

### 2.4 Write the source page

File: `wiki/sources/<publication_date>-<slug>.md`.

Frontmatter contract (mirrors CLAUDE.md §Lifecycle + the video-source convention, adapted for papers):

```yaml
---
type: source
kind: paper
title: "<verbatim title — quote if it contains a colon>"
author:                          # array, even for solo papers
  - "<First Author Surname, Initial.>"
  - "<…>"
url: "<DOI URL or canonical URL>"
date_published: <YYYY-MM-DD>
length: "~N pages (Pass X — what was actually read)"
venue: "<journal/conference/arXiv>"
doi: "<10.xxxx/...>"             # optional but encouraged
citation_key: "<firstauthor_YYYY_firstkeyword>"  # BibTeX handle; lowercase, underscores
raw: "../../raw/papers/<slug>.md"
pdf: "../../raw/assets/<slug>.pdf"
confidence: 0.70-0.95            # per Lifecycle rules
last_confirmed: <today YYYY-MM-DD>
source_count: 1                  # this page itself is one source; concept pages aggregate
accessed_at: <today YYYY-MM-DD>
tags: [<topic-1>, <topic-2>, ...]
dynamic_capabilities:            # optional; per W&W vocabulary
  - <bucket>/<cell>
relationships:                   # added in step 5 after neighbour-source-scan
  - type: <vocabulary>
    target: <slug>
    via: "<one-line nuance>"
---
```

Body skeleton (IMRaD-aligned, with the Keshav five Cs woven in):

```markdown
# <Title>

> <Abstract verbatim, as a blockquote. This is the paper's own framing,
> shown before the wiki's interpretation overlays it.>

## TL;DR

<2–4 sentences. The headline finding + the one thing a wiki reader needs to remember.>

## Citation

**APA (7th edition):**

> <Rendered APA string — see §2.4a for construction rules.>

**BibTeX:**

```bibtex
@<entry-type>{<citation_key>,
  author  = {<Surname1, First1 and Surname2, First2 and ...>},
  title   = {<Title>},
  year    = {<YYYY>},
  ...
}
```

## What was actually ingested

<State the read depth honestly. If Pass 1 only, say so. If Pass 2 covered methods
but skimmed proofs, say so. This is the "honest scoping" check operationalised.>

## Context (WHY)

<Why was this paper written? What does the introduction frame as the problem?
What theoretical bases ground the work? Which other wiki sources is it adjacent to?>

## Methods (HOW)

<What did the authors do? Study design, dataset, N, instruments, analytical
technique. For theoretical papers: framework, propositions, scope conditions.>

## Results (WHAT)

<What did they find? Reference specific figures by number. Note effect sizes,
confidence intervals, statistical significance where reported.>

## Visual content

<Exhaustive accessibility-quality catalogue of every visual in the paper —
figures, tables, equations, flow diagrams, photos, screenshots, illustrations.
One entry per visual, in source order, each with: heading (`### Figure N — …`),
**Type:**, **Caption (verbatim):** if present, **Location:** page or section,
followed by a prose description (50–200 words for substantive visuals, 20–50
for incidental ones) covering layout, axes/scales, headline values, trends,
visual encoding, annotations, and what the visual is arguing. Entries for
load-bearing visuals can be terser and end with `→ reproduced in § Distinctive
artifacts`. See [CLAUDE.md §Visual content extraction](../../../CLAUDE.md#visual-content-extraction)
for the full contract. If the paper genuinely has no visuals, write
`> No visuals in source.` instead of omitting the section.>

## Distinctive artifacts

<The paper's named taxonomies, key tables, headline figures, named equations,
cause-effect diagrams, and named scores — reproduced where reasonable.
Enumerate taxonomies as lists or markdown tables; transcribe formulae as
blockquotes or fenced code; reproduce flow diagrams as Mermaid blocks where
the structure is clear from the source. This is the structural home for
D3 of [quality-rubric.md](../../.claude/skills/scientific-papers-processing/quality-rubric.md)
and the answer to "what does this paper show that the prose summary cannot
replace?". Distinguish distinctive artifacts (named scores, headline tables,
argument-carrying diagrams) from incidental ones (correlation heatmaps,
descriptive-statistics tables, reference lists) — only the former belong here.
Visuals reproduced here should also appear (as descriptions) in `## Visual
content` above — the catalogue is exhaustive, the reproductions are selective.>

## Discussion / Significance (SO WHAT)

<What does it mean for the wiki's current claims? Does it support, refine,
contradict, or supersede an existing concept page? Limitations the authors
acknowledge; limitations they don't.>

## Citations to chase

<References from the paper that look central but aren't yet in the wiki.
This is the seed list for follow-on Acquire sessions.>

## Linked entities and concepts

<Wikilinks to every entity and concept page this source touches. Authors
go in `author:` frontmatter; if any author is a second-source mention, this
is where the new entity page gets linked — per CLAUDE.md §Author-entity
promotion. Dangling (first-mention) authors are listed here under
"**Dangling** (single-source mention, deferred): …".>

## Source-to-source relationships

<Wikilinks to neighbour sources surfaced by the scan in step 5. Each
relationship in `relationships:` frontmatter must appear here as a body
wikilink with at least one sentence of context — per CLAUDE.md
§Body-wikilink rule.>
```

### 2.4a Construct the APA + BibTeX citation (mandatory)

Every paper source page **must** carry both an APA 7th-edition reference and a BibTeX entry in its `## Citation` section. The two are derived mechanically from the acquire-time frontmatter (`authors`, `title`, `year`, `venue`, `doi`, `url`, plus volume/issue/pages when present) — no creative work needed once the metadata is captured correctly.

**Citation key convention.** `<first-author-surname>_<year>_<first-content-keyword>`, lowercase, ASCII, underscores. Matches the slug pattern so BibTeX handle and file slug stay aligned. Examples:

| Paper | `citation_key` |
|---|---|
| Keshav (2007), *How to Read a Paper* | `keshav_2007_read_paper` |
| Vaswani et al. (2017), *Attention Is All You Need* | `vaswani_2017_attention` |
| Dell'Acqua et al. (2026), *Navigating the Jagged Technological Frontier* | `dellacqua_2026_jagged_frontier` |

**APA 7th-edition rules** (the four templates that cover ~95% of papers):

| Type | Template |
|---|---|
| **Journal article (with DOI)** | `Author, A. A., & Author, B. B. (YYYY). Title of the article. *Journal Name*, *Volume*(Issue), pp–pp. https://doi.org/...` |
| **Journal article (no DOI, online)** | `... Title. *Journal Name*, *Volume*(Issue), pp–pp. <URL>` |
| **Conference proceeding** | `Author, A. A. (YYYY). Title of the paper. In *Proceedings of the Conference Name* (pp. pp–pp). Publisher. https://doi.org/...` |
| **arXiv / preprint** | `Author, A. A., & Author, B. B. (YYYY). Title of the paper. *arXiv*. https://doi.org/10.48550/arXiv.NNNN.NNNNN` |

APA mechanics — keep these right:

- **Authors:** `Surname, F. M.` (initials with periods, no full first names). Up to 20 authors are listed in full, separated by commas with `, &` before the last. For 21+ authors: list first 19, then `…`, then final author.
- **Year:** in parentheses; `(YYYY)` for published works, `(YYYY, Month DD)` for preprints when only an upload date exists.
- **Title:** sentence case (only first word + proper nouns + first word after a colon are capitalised). Italicise journal title and volume number, **not** issue or pages.
- **DOI:** always as a clickable URL `https://doi.org/<DOI>`; no `DOI:` prefix. If the paper has a DOI, use it — even if you accessed via a PDF.
- **Single-author papers:** no `&`. Two authors: `Surname, F., & Surname, F.`. Three to twenty: comma-separated with `, &` before the last.

**BibTeX entry types** (pick the right one — wrong type breaks reference managers):

| Source | Entry type | Required fields |
|---|---|---|
| Peer-reviewed journal article | `@article` | `author, title, journal, year, volume, number, pages, doi` |
| Conference paper | `@inproceedings` | `author, title, booktitle, year, pages, publisher, doi` |
| Book | `@book` | `author, title, year, publisher, address, isbn` |
| Book chapter | `@incollection` | `author, title, booktitle, editor, year, pages, publisher` |
| arXiv preprint | `@misc` (or `@unpublished`) | `author, title, year, eprint, archivePrefix={arXiv}, primaryClass, doi` |
| Tech report / working paper | `@techreport` | `author, title, institution, year, number` |

BibTeX mechanics — keep these right:

- **Author field:** `Surname1, First1 and Surname2, First2 and ...` — the literal word `and` separates authors (not commas, not `&`).
- **Title field:** wrap in `{...}` to preserve case (`title = {Attention Is All You Need}`). BibTeX otherwise lowercases titles in many styles.
- **Special characters:** escape with backslash (`\&`, `\%`, `\_`). Accented characters: prefer Unicode literals (`Sørensen`) — modern engines handle them, and the wiki is UTF-8 throughout.
- **DOI field:** the bare DOI only (`10.xxxx/...`), without the `https://doi.org/` prefix — reference managers add that themselves.
- **Pages:** double-hyphen (`pages = {1--15}`) — BibTeX renders the en-dash from `--`.

**Worked example — journal article with DOI:**

```
APA: Dell'Acqua, F., McFowland III, E., Mollick, E. R., Lifshitz-Assaf, H., Kellogg, K. C.,
     Rajendran, S., Krayer, L., Candelon, F., & Lakhani, K. R. (2026). Navigating the jagged
     technological frontier: Field experimental evidence of the effects of AI on knowledge
     worker productivity and quality. *Academy of Management Journal*, *69*(2), 412–447.
     https://doi.org/10.5465/amj.2024.0124
```

```bibtex
@article{dellacqua_2026_jagged_frontier,
  author  = {Dell'Acqua, Fabrizio and McFowland III, Edward and Mollick, Ethan R. and
             Lifshitz-Assaf, Hila and Kellogg, Katherine C. and Rajendran, Saran and
             Krayer, Lisa and Candelon, François and Lakhani, Karim R.},
  title   = {{Navigating the Jagged Technological Frontier: Field Experimental Evidence of
             the Effects of AI on Knowledge Worker Productivity and Quality}},
  journal = {Academy of Management Journal},
  year    = {2026},
  volume  = {69},
  number  = {2},
  pages   = {412--447},
  doi     = {10.5465/amj.2024.0124}
}
```

**Worked example — arXiv preprint:**

```
APA: Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N.,
     Kaiser, Ł., & Polosukhin, I. (2017). Attention is all you need. *arXiv*.
     https://doi.org/10.48550/arXiv.1706.03762
```

```bibtex
@misc{vaswani_2017_attention,
  author        = {Vaswani, Ashish and Shazeer, Noam and Parmar, Niki and Uszkoreit, Jakob
                   and Jones, Llion and Gomez, Aidan N. and Kaiser, Łukasz and Polosukhin, Illia},
  title         = {{Attention Is All You Need}},
  year          = {2017},
  eprint        = {1706.03762},
  archivePrefix = {arXiv},
  primaryClass  = {cs.CL},
  doi           = {10.48550/arXiv.1706.03762}
}
```

**When metadata is missing.** If a field genuinely cannot be recovered (no DOI, unknown pages, missing volume), state `n.d.` for year, `n.p.` for pages, and omit the field rather than fabricating. Note the gap in the source page's `notes:` provenance field so a future ingest can fix it.

### 2.5 Tag `dynamic_capabilities:` (W&W microfoundations)

Encouraged, not forced. If the paper is about LLM internals, quantisation mechanics, or any other domain outside the Warner & Wäger lens — skip the field. Otherwise pick from the closed vocabulary on `[[concepts/warner-wager-process-model]]`. Every cell named in frontmatter needs at least one body sentence saying *how* the paper touches it (the body-twin rule).

### 2.5b Self-score against the quality rubric

Before running the neighbour-source scan and the catalogue updates, score the just-written source page against [`quality-rubric.md`](quality-rubric.md). Two-step:

**Step 1 — Mechanical floor.** Run the floor scorer in read-only mode for the just-written page:

```sh
node scripts/quality-source-page.mjs --page <slug>
```

It reports a per-dimension floor (D1–D5) plus a total normalised to the 0.65 / 0.85 thresholds. The floor is the **lower bound** for each dimension — a judgment score may exceed it, but not silently fall below it.

**Step 2 — Judgment overlay.** Open [`quality-rubric.md`](quality-rubric.md) and fill in the `## Quality review` body block at the bottom of the source page, after `## Source-to-source relationships`. Use the rubric's level anchors and worked low-quality examples (Bari / Hajek / Powell / Habib / Altman) to pattern-match each dimension. Where judgment matches the floor, copy it across; where judgment legitimately exceeds the floor, write the reason in the Notes column.

**Gate**:

- **Total ≥ 0.85** → proceed to §2.6.
- **0.65 ≤ Total < 0.85** → workable. The flagged dimensions should be addressed in this ingest where feasible (typically D3 by populating `## Distinctive artifacts`, or D4 by replacing boilerplate critique with paper-specific items). Re-score, then proceed.
- **Total < 0.65** → **do not commit**. Most likely cause: D3 floor = 0 or 1 because the paper's distinctive artifacts (named tables, figures, equations, taxonomies) are not enumerated. Fix and re-score before proceeding to §2.6.

**Optional**: commit the mechanical floor to the page's frontmatter for traceability —

```sh
node scripts/quality-source-page.mjs --page <slug> --write
```

This adds `quality_floor: {D1: …, D2: …, …}` and `quality_floor_notes: [...]`. The judgment score lives in the body block (which Quartz renders); the floor lives in frontmatter (which the lint pipeline reads).

**Eval log (automatic).** Every run of `quality-source-page.mjs` — read-only or `--write` — appends one JSONL line per page to [`logs/quality-source-pages.jsonl`](../../../logs/quality-source-pages.jsonl). Each line carries the timestamp, rubric version, all five dimension scores, the total + band, and the mechanical-floor notes. The log is the **trend record** — it answers "did Hajek's D3 actually improve after the re-ingest?" by storing the before-and-after points. Pass `--no-log` if you genuinely don't want the run captured (e.g. local experimentation).

View the log via the read-only **CLI viewer**:

```sh
node scripts/quality-log-summary.mjs                       # latest state per page (default)
node scripts/quality-log-summary.mjs --page <slug>         # full history of one page, with ↑/↓ deltas
node scripts/quality-log-summary.mjs --latest 20           # last 20 entries chronologically
node scripts/quality-log-summary.mjs --since 2026-05-01    # entries since a date
node scripts/quality-log-summary.mjs --json --page <slug>  # raw JSONL for piping into jq
```

…or generate a **self-contained HTML report** (sortable table, clickable drill-down with per-dimension sparklines, dark-mode aware, no external libs — opens directly via `file://` in any browser):

```sh
node scripts/quality-log-html.mjs                # writes logs/quality-report.html
node scripts/quality-log-html.mjs --open         # also opens in default browser
node scripts/quality-log-html.mjs --out <path>   # custom output location
```

The HTML embeds the JSONL data inline at generate-time, so re-run the generator to refresh the report.

### 2.6 Run the neighbour-source scan

Invoke the **[`neighbour-source-scan`](../neighbour-source-scan/SKILL.md) skill** — both Path A (W&W cell overlap) and Path B (shared concept-page citations). Add the resulting typed edges to `relationships:` frontmatter and write the body wikilinks. **At ≥3 candidate neighbours, surface the list before commit.**

### 2.7 Update concepts, entities, threads

For every concept or entity page touched, bump `last_confirmed` and `accessed_at` to today and recompute `source_count` + `confidence` per the Lifecycle rules. For each new author meeting the second-source promotion rule, create an entity page. If the paper contradicts an existing wiki claim, add an entry to that page's `## Debates and supersession` section.

### 2.8 Catalogue updates

- Add the new source page to `wiki/index.md` under `## Sources`, one-line summary.
- Prepend a `log.md` entry: `## [<today>] ingest | <slug>` (or `acquire | <slug>` if Process is being deferred).
- Re-run `node scripts/quality-score.mjs` for any concept page touched.
- (Optional, traceability) `node scripts/quality-source-page.mjs --write` to commit the source-page floor to frontmatter. Required only when an LLM-judgment overlay is later expected; the §2.5b in-line check is the gating decision.
- Re-embed for search: `npx @tobilu/qmd embed`.

## Pass-depth quick-reference

| Read depth | Time | Page state | Confidence ceiling |
|---|---|---|---|
| **Pass 1 only** | 5–10 min | Abstract + intro + headings + conclusions read | 0.70 (single source, light contact) |
| **Pass 2** | up to 1 hr | + figures, methods, results, citations-to-chase | 0.85 (full grasp, no re-implementation) |
| **Pass 3** | 1–5 hr | + virtual re-implementation, assumption challenge | 0.95 (deep engagement, defensible) |

A paper does not need Pass 3 to enter the wiki. A Pass-1-only paper is honest about its depth in `length:` and `## What was actually ingested`, and that's enough.

## Common mistakes

| Mistake | Fix |
|---|---|
| Reading the PDF cover-to-cover before Pass 1 | Run Pass 1 first; let the 5 Cs gate further depth. Plowing through a paper that's outside wiki scope wastes hours. |
| Claiming Pass 2 depth after only reading the abstract | `length:` lies → wiki corrodes. Be honest: "~24 pages (Pass 1 only)" is fine. |
| Treating the filename as identity | Always read the cover page. The Mitchell-Dino-2011 → Dell'Acqua-2026 precedent in CLAUDE.md is the warning. |
| Skipping pre-flight on a "famous" paper | Famous ≠ verified. Even canonical PDFs can be excerpts, mis-labelled, or OCR-mangled. |
| Forgetting the abstract blockquote | Body must open with the paper's *own* framing as a blockquote — same convention as videos opening with the YouTube description. |
| Citing figure numbers without reading figures | If a figure isn't worth opening in the PDF, it isn't worth citing. |
| Skipping enumeration of the paper's distinctive taxonomy/diagram/equation — "the prose summary covers it" | No. D3 of [`quality-rubric.md`](quality-rubric.md) explicitly requires distinctive artifacts named **and reproduced**. Tables and named diagrams are the part of the paper that survives translation worst; enumeration is cheap. The `## Distinctive artifacts` section is the structural home — populate it, don't paraphrase it away. |
| Trusting the markdown conversion when figures are missing — "if it isn't in the markdown, the paper doesn't have it" | No. `pdftotext -layout` drops every image; `marker` keeps assets but the figure's argumentative meaning isn't in the asset name. Always cross-check figure/table count against the original PDF in `raw/assets/` during pre-flight Check 4. Read the PDF directly if the conversion is lossy. |
| Skipping `## Visual content` because "the figures aren't important to my summary" | No. The section is a contract, not a summary-quality call. Describe every visual, briefly if it's incidental — the catalogue is the value, not your judgement of importance. Use `> No visuals in source.` only when the source genuinely carries none. |
| Describing only the headline figure and using "see paper for the rest" | The section is exhaustive, not selective. Incidental visuals get short descriptions (20–50 words); load-bearing ones get full descriptions (50–200 words) plus reproduction in `## Distinctive artifacts`. |
| Skipping neighbour-source-scan because "this paper is obviously isolated" | Run grep first, intuition second. The MGI ↔ FTSG bridge incident is the warning. |
| Promoting every author to an entity on first sight | Apply the second-source rule. List first-time authors under **Dangling** in the source page; only promote on the second source citing them. |
| Re-acquiring without updating the source page | Re-acquisition replaces the raw file but does **not** touch the wiki page until Process re-runs. If you re-acquired (better OCR, full version replacing a sample), schedule Process. |
| Skipping the `## Citation` section because "the URL is enough" | APA + BibTeX are **mandatory** per §2.4a. The URL alone doesn't survive transcription into a paper, slide deck, or reference manager. |
| Writing BibTeX with `&` between authors | BibTeX uses the literal word `and`. `&` is reserved and must be escaped (`\&`) when it appears inside a field value. |
| Lowercasing a BibTeX title field | Wrap it in `{...}` so styles don't down-case `LLM` to `llm` or strip the case from a proper noun. |
| APA `et al.` on the first cite | APA 7th lists up to 20 authors in full on the reference page. `et al.` belongs in *in-text* citations, not in the reference. |

## Red flags — STOP and re-check

- *"This paper is the same as the filename claims"* — verify with the cover page, not the intuition.
- *"The TOC references chapter 12 but the PDF only has 30 pages"* — you have a sample. Surface to user.
- *"I'll write the source page now and run the neighbour scan later"* — neighbour scan is step 5 of Process *before* index/log updates. Catching omissions after commit is more painful than catching them in the scan.
- *"The paper is outside wiki scope so I'll skip writing the source page"* — write it anyway, Pass 1 only. Future-you may discover it became relevant.
- *"I'll mark this Pass 2 because I read most of it"* — *most* is not *Pass 2*. Pass 2 has a specific definition (figures read with care, methods + results in full). Be honest.
- *"The DOI link in frontmatter is enough; I can skip the rendered APA/BibTeX"* — no. The body `## Citation` section is mandatory per §2.4a. Citations are an output of the wiki, not just metadata.
- *"I don't know the volume/issue, I'll leave it blank in BibTeX"* — fine, **but** note the gap in `notes:` so a future ingest can fix it. Silent omissions corrode reference-manager imports months later.
- *"D3 is 0 but the prose summary is thorough — close enough"* — no. The rubric's worked anchors show this is the exact failure mode it was built to catch. A thorough prose summary that omits Table 4's taxonomy or Figure 3's flow diagram still scores **D3 = 0**, and the total falls below 0.65. Populate `## Distinctive artifacts`.
- *"The markdown conversion has no images, so the paper must be text-only"* — no. `pdftotext -layout` drops all images silently; `marker` keeps them but the asset names hide the figure semantics. Open the original PDF in `raw/assets/` during pre-flight Check 4 and count visuals there. The `## Visual content` section is built from the PDF, not the conversion.
- *"I'll skip `## Visual content` and just populate `## Distinctive artifacts`"* — no. The two serve different needs: Visual content is the **exhaustive accessibility catalogue** (every visual described); Distinctive artifacts is the **selective reproduction** (load-bearing visuals recreated as wiki-native content). A load-bearing visual appears in both — described once, reproduced once.

## Related skills and references

- **Reading discipline:** [`HowtoReadPaper.pdf`](HowtoReadPaper.pdf) — S. Keshav, *How to Read a Paper*, ACM SIGCOMM CCR 2007. The three-pass method this skill operationalises.
- **Body skeleton:** [`Research-Paper-Structure.png.webp`](Research-Paper-Structure.png.webp) — IMRaD anatomy: Title/Abstract → Intro (WHY) → Methods (HOW) → Results (WHAT) → Discussion (SO WHAT) → References.
- **Quality rubric:** [`quality-rubric.md`](quality-rubric.md) — five-dimension source-page scoring instrument (D1 Five Cs / D2 IMRaD / D3 Distinctive artifacts / D4 Critical reading / D5 Pass-3 markers). Invoked at §2.5b before catalogue updates. Mechanical floor computed by [`scripts/quality-source-page.mjs`](../../../scripts/quality-source-page.mjs); judgment overlay filled in as a `## Quality review` body block on each source page.
- **Schema contract:** [`CLAUDE.md`](../../../CLAUDE.md) — §Ingest, §Verifying sources before ingest, §Lifecycle, §Author-entity promotion, §Dynamic-capabilities tagging.
- **Neighbour-scan:** [`neighbour-source-scan`](../neighbour-source-scan/SKILL.md) — invoked in step 2.6.
- **Sibling acquire-time skill (videos):** [`youtube-transcript-skill`](../youtube-transcript-skill/SKILL.md) — same Acquire/Process discipline applied to a different source kind. Refer to it when the schema for video sources needs to be cross-checked against paper conventions.
- **Literature survey workflow (Keshav §3):** when ingesting *several* papers in a thematic batch, use the three-step survey method — find 3–5 recent papers via Google Scholar / arXiv, do Pass 1 on each, follow shared citations + key authors, then proceed paper-by-paper through this skill.
