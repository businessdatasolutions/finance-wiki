# Log

Reverse-chronological record of wiki operations — **newest entry at the top, oldest at the bottom**. New entries are *prepended* immediately under the `---` separator below. Strict prefix format so `grep "^## \[" wiki/log.md | head -10` returns the ten most recent. Format (indented to keep grep clean):

    ## [YYYY-MM-DD] <op> | <title>

Permitted operations: `ingest`, `acquire`, `query`, `lint`, `synthesize`, `refactor`, `bulk-refactor` (for any operation touching >10 wiki pages, with affected slug list and reversibility note). `acquire` is used for sessions that land raw files but defer processing to a later session; the umbrella `ingest` op covers the typical Acquire+Process-in-the-same-session case. See [the design doc, §9.2](../docs/superpowers/specs/2026-04-28-llm-wiki-design.md#92-wikilogmd) for details.

---

## [2026-05-25] ingest | Ross/Westerfield/Jordan 2019 — Fundamentals of Corporate Finance Ch.3 (Working with Financial Statements)

Third ingest of the day — the wiki's **first textbook-chapter source**. A 42-page chapter extract from the 12th edition of Ross/Westerfield/Jordan's *Fundamentals of Corporate Finance* (McGraw-Hill 2019, ISBN 9781259918957), Chapter 3 *Working with Financial Statements*. Establishes `kind: book-chapter` as a new source discriminator (companion to the existing `kind: paper`).

**Identity correction surfaced during pre-flight Check 2:** the PDF on disk is named `Fundamentals of Corporate Finance - Stephen M. Ross.pdf` — wrong. The textbook's lead author is **Stephen A. Ross** (MIT Sloan, Modigliani Professor, deceased 2017), not Stephen M. Ross (the unrelated Michigan businessman/philanthropist). Recorded the mismatch in the source page's `## Citation` note and in the raw markdown extract's `notes:` frontmatter; the literal PDF filename is preserved on disk per CLAUDE.md identity-mismatch convention.

**Acquire**: PDF converted with `pdftotext -layout` to `raw/books/ross-2019-fundamentals-ch3-financial-statements.md` (2505-line extract; YAML frontmatter contract attached). The original PDF stays at `raw/books/Fundamentals of Corporate Finance - Stephen M. Ross.pdf` (book bucket; not moved to `raw/assets/` because the new `raw/books/` typed subfolder is the canonical home for both PDF + markdown extract of book-kind sources).

**Source page written**:

- [[2019-01-01-ross-2019-fundamentals-ch3-financial-statements]] — Pass 2 read; chapter-native body skeleton (TL;DR → walkthrough §3.1-§3.6 → vocabulary → Visual content → Distinctive artifacts → Significance → Caveats → Linked entities → Source-to-source). **8 artifacts reproduced**: Table 3.8 full ratio catalogue (5 categories × ~22 ratios), DuPont identity Eq 3.26 with algebraic equivalents, Figure 3.1 Extended DuPont Chart as Mermaid decomposition tree, Tables 3.1 / 3.2 / 3.3 / 3.9 reproduced, §3.5 Problems-with-financial-statement-analysis 8-point catalogue. Quality self-score: **12/12 = 1.00** (ceiling).

**Neighbour-source scan** surfaced **6 candidates** — all six academic distress papers in the corpus are downstream users of the chapter's ratio vocabulary. Added 6 `supports` typed edges (to Habib 2020, Altman 2023, Powell 2024, Hajek 2024, Bari 2026, Luppe 2012); Ross is established as the **definitional backbone** for the wiki's distress-prediction layer. Rabobank reports skipped — too sectoral for a defensible typed edge to a pedagogical reference.

**Concept pages created (3)**:

- [[financial-ratio-analysis]] — umbrella concept for the closed ratio vocabulary across five categories; catalogues Ross §3.5's structural-limits-of-ratio-analysis as the wiki's reference for *why* augmentation is valuable. confidence: 0.80, source_count: 1.
- [[dupont-identity]] — the ROE = profit margin × total asset turnover × equity multiplier decomposition; includes Yahoo!/Alphabet 2015 worked example and the General Motors 1989–1993 equity-multiplier warning; full Extended DuPont Mermaid reproduction lives on the source page. confidence: 0.80, source_count: 1.
- [[common-size-statements]] — vertical / horizontal / combined standardisation toolkit; named explicitly as the *invisible scaffolding* of cross-firm distress-modelling samples. confidence: 0.75, source_count: 1.

**Concept pages updated (2)**:

- [[financial-distress]] — source_count 6 → 7. Added `uses` typed relationship to [[financial-ratio-analysis]]. Body now distinguishes "operationalisations" (already catalogued per source) from the **definitional input layer** (Ross §3.3 as the canonical pedagogical reference for the ratios distress is measured against).
- [[altman-z-score]] — source_count 3 → 4. Added `uses` typed relationship to [[financial-ratio-analysis]]. Body now mapping the five Z-score ratios to their Ross §3.3 equation numbers (X₁ ↔ Eq 3.4, X₃ ↔ Eq 3.20, X₅ ↔ Eq 3.18) — clarifies that Altman 1968's contribution was the *combination via MDA*, not the ratio definitions.

**Entities**: Ross / Westerfield / Jordan all listed as **Dangling** (per second-source promotion rule) on the source page. No entity pages created on this ingest.

**W&W tags**: omitted. Chapter is methodological accounting pedagogy outside the Warner & Wäger digital-transformation lens; per CLAUDE.md guidance, tagging omitted rather than force-fit.

**Index updates**: new "Textbook chapters — corporate-finance foundations" section under Sources (with this page); 3 new concept entries (`financial-ratio-analysis`, `dupont-identity`, `common-size-statements`) inserted alphabetically under Concepts.

## [2026-05-25] ingest | Rabobank reports batch (Sectorprognoses 2025-12, Woningcorporaties limiet, Vastgoed 2026, Beter benutten, Bouw- en Vastgoedbericht 2025)

Second ingest of the day — five Rabobank/RaboResearch practitioner publications covering Dutch real-estate, construction, and housing-finance. **Acquire**: 10 raw PDFs in `raw/reports/` converted to markdown via `pdftotext -layout`; the 6 web-clipper PDFs of the Rabobank Bouw- en Vastgoedbericht 2025 chapters consolidated into a single source page (rather than 6 thin per-chapter pages) on the basis that they form one online publication.

**Source pages written** (all targeting Pass-2 read depth; self-scored against [`quality-rubric.md`](../.claude/skills/scientific-papers-processing/quality-rubric.md)):

- [[2025-12-11-rabobank-sectorprognoses-2025-12]] — RaboResearch's Dutch macro + sector forecast for 2026–2027; GDP +1.7 % / +1.3 % / +1.3 %; per-sector growth matrix reproduced; coalition-policy → sector flow as Mermaid; cross-sector personnel-shortage map. Quality: 0.92.
- [[2025-12-18-rabobank-woningcorporaties-aan-hun-limiet]] — Dutch *woningcorporaties* at sector-wide financial limit; WSW > €100B; Vpb burden €700M → €1.5B by 2027 under ATAD; Regiewet obligations table; sector-distress logic chain as Mermaid; the report most directly relevant to the wiki's financial-distress concept. Quality: 0.92.
- [[2026-02-24-rabobank-vastgoed-selectief-investeren]] — Commercial-real-estate outlook 2026; EPBD IV + overdrachtsbelasting + box 3 fiscal pivots reproduced; direct-vs-indirect rendement framing; Tabel 1 perspectieven matrix described (cells stripped by pdftotext). Quality: 0.83.
- [[2026-04-14-rabobank-beter-benutten-bestaande-bebouwing]] — Four-category "beter benutten" taxonomy (woningdelen / splitsing / optoppen / transformatie) rendered as Mermaid; competency-shift framing for bouwondernemers; 100k optop-dwellings Rijk-target by 2030. Quality: 0.83.
- [[2025-rabobank-bouw-en-vastgoedbericht-2025]] — Combined source page for chapters 09–14 of the Rabobank online publication; Buildsight utiliteitsbouw production forecast 2023–2027 table reproduced; consolidation trajectory toward 2040 (-25% firms); cross-chapter themes synthesised. Quality: 0.83.

**Concept pages created**:

- [[dutch-housing-shortage]] — 4 source-count (Sectorprognoses, Woningcorporaties, Vastgoed 2026, Beter benutten); woningtekort → 420k by 2026; causes (supply-side, financing-side, demand-side); policy responses (Regiewet, coalitieakkoord, beter benutten).
- [[dutch-construction-sector]] — 4 source-count; six sub-sectors; utiliteitsbouw production cycle 2023–2027 reproduced; consolidation trajectory; cross-cutting risk factors.

**Concept page extended**: [[financial-distress]] — added a *Sectoral financial distress* sub-section anchoring the [[2025-12-18-rabobank-woningcorporaties-aan-hun-limiet|Woningcorporaties case study]] as a non-academic supplement to the academic distress corpus; updated `source_count` from 5 → 6; added related-concept links.

**Typed relationships**: each of the 5 Rabobank source pages carries 4 `supports` edges to the other batch reports, forming a cohesive Dutch real-estate / construction cluster within the wiki. Weak `mentions` link from Woningcorporaties + Sectorprognoses + Vastgoed 2026 to [[2020-01-01-habib-2020-distress-determinants-consequences-review|Habib 2020]] via the macroeconomic-determinants / fiscal-policy channel; not committed as typed edges (relationship is thin and Habib's review predates these Dutch policy developments).

**Process notes**:

- Reports are *practitioner publications* with no DOI, no peer review; quality-rubric D2 (IMRaD) scores limited where source itself is qualitative-only.
- All four standalone Rabobank reports cite a canonical pub.rabobank.nl URL in the body's *Bron:* line; URLs captured in source-page `url:` frontmatter.
- Reports authors have implicit conflict of interest (Rabobank commercial banking exposure to lending on covered sectors); flagged in §Limitations of each source page.
- The 6 web-clipper PDFs of the Bouw publication captured only single-page renders of each chapter — substantive content for chapters 12 (GWW), 13 (installatie), 14 (ruw-afbouw) is under-represented; opportunistic re-ingest path noted.

**Deferred**:

- Mechanical-floor scoring (`scripts/quality-source-page.mjs`) not run; source pages were self-scored against rubric directly.
- qmd re-embed pending manual user execution.
- Backfill of partial Bouw chapter content noted on the Bouw source page's `## Quality review` resolution.

## [2026-05-25] ingest | financial-distress paper batch (Altman 2023, Habib 2020, Powell 2024, Hajek 2024, Bari 2026, Luppe 2012)

Re-ingest of the 6 raw papers in `raw/papers/` after the wiki was reset for fresh start under the new `## Visual content` rule. The prior ingest of these same papers had scored D3 (Distinctive-artifact fidelity) at 0–1 across the rubric anchors. This re-ingest hits D3 = 3 on all 6 source pages via explicit table reproduction, formula transcription, and Mermaid diagrams.

**Source pages written** (all targeting Pass-2 read depth, all self-scored 0.92 / 1.00 against [`quality-rubric.md`](../.claude/skills/scientific-papers-processing/quality-rubric.md)):

- [[2022-11-28-altman-2023-omega-score-sme-default]] — Omega Score formulae (regular + early-warning), Tables 1–6 reproduced, Figure 1 described.
- [[2020-01-01-habib-2020-distress-determinants-consequences-review]] — 3×4 determinants×consequences taxonomy reproduced; Table 1 distress-measurement formulae (Z-score, O-score, Zmijewski, BSM-Prob, DTD) transcribed with thresholds.
- [[2024-01-01-powell-2024-asean-accounting-early-warning-distress]] — all 38 country-period discriminant functions transcribed (Tables 3–4); Table 5 frequency map, Table 6 accuracy matrix, Table 8 MDA-DD improvements reproduced.
- [[2024-06-22-hajek-2024-distress-prediction-annual-reports]] — Table 4 BERTopic 26-topic taxonomy fully enumerated (the specific rubric anchor); XGBoost objective + XGBOD TOS-selection formulae transcribed; Figure 2 framework rendered as Mermaid.
- [[2026-02-04-bari-2026-us-small-business-distress-framework]] — Figure 3 cause-effect distress-evolution diagram reproduced as Mermaid (the specific rubric anchor); 7-family indicator framework rendered as Mermaid; regression β + p coefficients, R² progression, Tables 1–2 demographics reproduced.
- [[2012-09-01-luppe-2012-anchoring-accounting-indicators]] — Anchoring Index formulae + Jacowitz-Kahneman transformation formulae transcribed; Table 2 anchoring indexes for 8 companies reproduced in full; experimental design rendered as Mermaid.

**Concept pages created**:

- [[financial-distress]] — umbrella concept; 5 source-count (all distress-prediction papers); Habib's 3-bucket × 4-bucket taxonomy framework; debates on market-based vs. accounting-based measures.
- [[altman-z-score]] — Z-score lineage (1968 → Z′ → Z′′ → International 2017 → Omega 2023); 3 source-count; cross-context-portability critique anchored on Powell 2024 + Grice-Ingram 2001.
- [[multiple-discriminant-analysis]] — MDA methodology, stepwise variable selection, interpretability-vs-accuracy tradeoff vs. ML methods; 2 source-count.

**Entity pages created** (per second-source-mention rule):

- [[Edward-I-Altman]] — NYU Stern; first author of Altman 2023, cited as Z-score originator in Habib 2020 and Powell 2024. **3 sources mention** → promoted.
- [[Ahsan-Habib]] — Massey University; first author of Habib 2020, cited explicitly in Hajek 2024 opening. **2 sources mention** → promoted.

**Typed `relationships:` added** to all 5 distress-prediction source pages (Habib + Altman + Powell + Hajek + Bari), each cross-linked with 4 typed `supports` edges to the other batch papers. The 5 papers form a coherent thematic cluster around financial-distress prediction; Luppe is the behavioural-finance outlier with no defensible typed-edge to the cluster.

**Quality-rubric backreferences**: the rubric anchors at [`quality-rubric.md`](../.claude/skills/scientific-papers-processing/quality-rubric.md) still document the prior-ingest D3 = 0 / D3 = 1 failure cases on these same papers. The rubric file is unchanged in this ingest — the prior-ingest examples remain useful as low-quality anchors for future work. Excellence anchors for D3 = 3 can now be sourced from this batch when the rubric is next revised.

**Deferred**:

- §2.5b mechanical floor scoring (`scripts/quality-source-page.mjs --page <slug>`) — not run because the judgment overlay scoring already exceeds the 0.85 ceiling on every page; mechanical-floor commitment to frontmatter postponed to opportunistic future pass.
- qmd re-embed (`npx @tobilu/qmd embed`) — pending manual user execution per CLAUDE.md §Search.
- Supplementary materials of Altman 2023 (Tables SM1–SM12 and Figures SM1–SM7) not opened — described in §Visual content as deferred recovery path.
- Figures 5–9 and 12 of Bari 2026 not opened individually — opportunistic backfill noted.

**Lifecycle bumps applied** to concept and entity pages: `last_confirmed: 2026-05-25`, `accessed_at: 2026-05-25`, `source_count` set to the actual inbound source-link count.

## [2026-05-25] refactor | add §Visual content extraction to ingestion workflow

Schema addition: source pages now carry a mandatory `## Visual content` section between `## Results (WHAT)` and `## Distinctive artifacts` — exhaustive accessibility-quality descriptions of every figure / table / equation / diagram / photo / slide / on-screen demo in the source, designed for both visually-impaired readers and qmd-indexed search. Complements (does **not** replace) `## Distinctive artifacts`: Visual content **catalogues and describes**; Distinctive artifacts **reproduces** load-bearing tables / taxonomies / equations as wiki-native content. Load-bearing visuals appear in both — description in the catalogue (ending with *→ reproduced in § Distinctive artifacts*), reproduction in the next section.

**Scope (per user clarification 2026-05-25).** The rule applies to **every source that is not exclusively text-based**, not just papers/reports/books. The carrier — not the `kind:` — decides:

- Has visuals (figures, tables-as-objects, diagrams, charts, photos, slides, on-screen demos, illustrations, maps, equations rendered as images) → **§Visual content required**. Covers `paper`, `report`, `book`, `image`, `lecture`, **`video`** (moved from "optional" to "required"), and `article` with visuals.
- Exclusively text-based (plain articles, dialogue transcripts, op-eds) → not required; mark absence with `> No visuals in source.`
- Audio-only (`podcast`) → not applicable.

Files touched:
- [`CLAUDE.md`](../CLAUDE.md) — new top-level [§Visual content extraction](../CLAUDE.md#visual-content-extraction) with carrier-based requirement table and kind-specific notes (papers, videos, lectures, images, articles, podcasts). [§Process](../CLAUDE.md#process) steps 1 and 3 updated to mandate reading source visuals via the Read tool and writing the new section. [§Verifying sources before ingest](../CLAUDE.md#verifying-sources-before-ingest) gains a fourth pre-flight check: **Visual inventory** — applies across PDFs, videos, articles, images, with conversion-fidelity table and per-source-type counting/recovery instructions.
- [`.claude/skills/scientific-papers-processing/SKILL.md`](../.claude/skills/scientific-papers-processing/SKILL.md) — body skeleton in §2.4 gains the `## Visual content` slot; §2.1 pre-flight gains the Visual-inventory row; pre-write summary template (§2.3) gains a `**Visual inventory:**` line; "Common mistakes" and "Red flags" tables gain four new entries covering conversion-fidelity blindness and Visual-content / Distinctive-artifacts confusion.
- [`.claude/skills/youtube-transcript-skill/SKILL.md`](../.claude/skills/youtube-transcript-skill/SKILL.md) — new section *"What this skill does not capture: visual content"* explaining that the transcript is speech-only and that downstream Process **must** write `## Visual content` for video source pages. Documents the recovery workflow (scan transcript for visual cues, estimate slide budget, fetch keyframes when feasible, be honest about recovery method) and the minimal-section pattern for talking-head interviews (`> Single fixed shot of two speakers throughout; no slides, demos, screen content, or on-screen text shown.`).

Backfill is **opportunistic, not mandatory**. The six 2026-05-25 source pages (Hajek 2024, Luppe 2012, Habib 2020, Powell 2024, Bari 2026, Altman 2023) and all prior sources do not yet carry `## Visual content`; add the section when a page is re-opened for query or related ingest. The rule applies prospectively to all new Process runs starting today.

Interaction with existing quality rubric: D3 of [`quality-rubric.md`](../.claude/skills/scientific-papers-processing/quality-rubric.md) (Distinctive artifacts named **and** reproduced) is unchanged; populating `## Visual content` does not by itself satisfy D3, but makes the reproduction decision trivial because the load-bearing visuals are already named and located.

No bulk-refactor needed — this is a forward-looking workflow change, not a corpus migration. No raw files touched, no source-page content rewritten.
