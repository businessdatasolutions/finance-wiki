---
type: concept
title: "Document-AI ingestion options: Mistral Document AI vs Landing AI ADE"
aliases:
  - Mistral OCR vs Landing AI
  - Document processing for ingestion
  - Mistral Document AI vs ADE
  - OCR pipeline options
confidence: 0.7
last_confirmed: 2026-05-29
source_count: 0
accessed_at: 2026-05-29
tags: [document-processing, ocr, ingestion, tooling, mistral, landing-ai, pipeline, acquire-phase]
relationships: []
---

# Document-AI ingestion options: Mistral Document AI vs Landing AI ADE

A tooling-evaluation concept (meta, not finance-domain): which managed document-processing service should replace the wiki's current PDF→markdown converters (`marker` / `pdftotext` / MarkItDown) at the [Acquire](../../CLAUDE.md#acquire) step of ingestion. Two candidates were assessed against the wiki's actual needs — faithful tables, located figures, and intact appendices, the three things the current converters lose per [Check 4](../../CLAUDE.md#check-4--visual-inventory-what-visuals-does-the-source-carry-and-did-the-conversion-preserve-them) and [Check 5](../../CLAUDE.md#check-5--appendix-inventory-what-does-the-appendix-contain-and-how-should-it-be-reproduced).

> **Provenance note.** This page is backed by vendor documentation, not by ingested `wiki/sources/` pages, so `source_count: 0` is deliberate (external citations live in [§Sources](#sources)). Confidence is 0.7 — a single, well-grounded evaluation against primary docs, not yet validated by a hands-on A/B test on the corpus.

## The one-sentence difference

**Mistral Document AI** is an OCR-first engine that turns a document into clean markdown through one endpoint, cheaply and at scale; **Landing AI ADE** (Agentic Document Extraction) is a document-*intelligence* platform that parses into grounded, chunk-level structured data (every element carries a page + coordinate box) and adds schema-driven extraction, classification, sectioning, and splitting on top.

Put differently: Mistral is a near-drop-in upgrade for "PDF → markdown"; Landing AI is a richer "PDF → structured-knowledge-object" system whose extra fidelity costs more money and more integration code.

## MECE comparison

The seven dimensions below are mutually exclusive (positioning / function / output / operations / cost / integration-effort / wiki-value) and collectively cover the decision.

### A. Positioning and architecture

| | Mistral Document AI | Landing AI ADE |
|---|---|---|
| Vendor | Mistral AI (France / EU) | Landing AI (US; EU region available) |
| Core model | `mistral-ocr-latest` (OCR 3) | DPT-2 — "Document Pre-Trained Transformer" (+ DPT-2 mini, preview) |
| Mental model | Single OCR endpoint + optional LLM annotation layer | Multi-API pipeline; **Parse** is the mandatory first step, others compose on top |
| Surface area | One call: `client.ocr.process` / `POST /v1/ocr` | Five APIs: Parse, Extract, Classify, Section, Split |

### B. Functional capabilities

These are the distinct jobs each system can do. Overlap is real for OCR/parse; they diverge sharply above that.

| Capability | Mistral | Landing AI |
|---|---|---|
| Text OCR + reading order | Yes | Yes |
| Table recovery | Yes — `table_format` = `null` / `markdown` / `html` (OCR 2512+) | Yes — "agentic table captioning": merged cells, no-gridline, cross-page tables reconstructed as one |
| Figure / chart handling | Returned as image bounding boxes + placeholders; optional **bbox annotation** captions each figure via a vision LLM | Chunk-typed (figure/logo/barcode/QR/signature/stamp/ID card); figure captions, with **custom caption prompts** |
| Header/footer split | Yes — `extract_header` / `extract_footer` | Via chunk types / sectioning |
| Structured field extraction | **Annotations**: `document_annotation` returns whole-doc JSON against a Pydantic/Zod/JSON schema | **Extract**: schema-driven, unlimited schema size, semantic field matching (`x-alternativeNames`), format control |
| Document QnA | Yes (Document QnA) | Not a first-class endpoint (build on Extract/Parse) |
| Classification | Via annotations/schema | **Classify** API (0.5 cr/page), independent of Parse |
| Table of contents / sectioning | Not native | **Section** API → hierarchical TOC with chunk refs |
| Multi-doc separation | Not native | **Split** API (e.g. batched KYC) |
| Confidence scores | Yes — page or word granularity | Yes — confidence scoring on all plans |
| Visual grounding (page + coordinates per element) | Image bboxes only | **Yes, for every chunk** — the standout capability |

### C. Output and fidelity

Both emit markdown. The difference is what travels *with* the markdown.

- **Mistral** returns a per-page `markdown` string plus `images`, `tables`, `hyperlinks`, `header`/`footer`, `dimensions`, and `confidence_scores`. Images/tables are swapped for placeholders (`![img-0.jpeg]`, `[tbl-3.html]`) that you map back from the side arrays. This is markdown-native and lands almost exactly in the shape the [Acquire contract](../../CLAUDE.md#acquire) expects.
- **Landing AI** returns markdown *and* a hierarchical JSON where each chunk carries its type, text, and **grounding** (page number + bounding box). It claims 99.16% on the DocVQA benchmark and pins results to dated model snapshots (`dpt-2-20260410`, etc.) for reproducibility. The grounding is what makes verbatim, *located* reproduction trivial.

For this wiki specifically, grounding maps directly onto two schema obligations: the `## Visual content` requirement to record each visual's `Location: p. NN`, and the `## Distinctive artifacts` discipline of reproducing load-bearing tables with cell-level provenance.

### D. Operational characteristics

| | Mistral | Landing AI |
|---|---|---|
| Input formats | PDF, PPTX, DOCX, images (png/jpeg/avif…) | PDF, images, text docs, presentations, **spreadsheets** |
| Languages | Multilingual | Multilingual + handwriting |
| Scale | Batch API (async, 50% cheaper); upload or URL or base64 | Async Parse Jobs, directory parsing, concurrency |
| Snapshot pinning | `-latest` vs dated model | `dpt-2-latest` vs dated snapshots |
| Deployment | Cloud API; also Azure AI Foundry; enterprise self-host | Cloud; Snowflake native app; VPC / on-prem (Enterprise) |
| Privacy / compliance | EU vendor (data-residency appeal) | SOC 2 Type II; HIPAA + ZDR (Team+); EU region endpoint |

### E. Commercial (cost)

| | Mistral OCR 3 | Landing AI ADE |
|---|---|---|
| Model | Flat per-page | Credit-based; $1 ≈ 100 credits (Explore) / 110 (Team) |
| Parse / OCR | **$2 / 1,000 pages** ($0.002/pg); **$1 / 1,000 pages** batch ($0.001/pg) | DPT-2 **3 credits/page ≈ $0.03/pg**; DPT-2 mini 1.5 cr ≈ $0.015/pg |
| Structured extraction | Annotations invoke a vision LLM — extra token cost on top of OCR | Extract = (input chars ÷ 5,000 + output chars ÷ 1,000) credits |
| Other | — | Classify 0.5 cr/pg; Section/Split char-based; ZDR +1 cr/pg |
| Free tier | API trial credits | 1,000 free credits (~333 DPT-2 pages), expire 90 days |

**Concrete:** a typical 20-page paper costs Mistral ≈ **$0.04** (or $0.02 batched) for OCR; Landing AI ≈ **$0.60** for Parse alone on Explore. Mistral is roughly **15–30× cheaper per page** for the raw conversion. Landing AI's premium buys grounding and table fidelity, not raw throughput.

### F. Integration effort into this wiki

The integration target is the [Acquire phase](../../CLAUDE.md#acquire): a converter that lands `raw/<type>/<slug>.md` with the canonical frontmatter contract, keeping the original PDF in `raw/assets/`.

- **Mistral — LOW effort.** One endpoint, one API key, markdown out. A ~50-line script (`scripts/acquire-mistral-ocr.mjs`) calling `/v1/ocr` with `table_format="markdown"` is a near-drop-in replacement for the `marker` call. Page/word confidence scores feed the wiki's [honest-scoping](../../CLAUDE.md#check-3--honest-scoping-in-the-source-page) discipline for free. Image bboxes can be written into `raw/assets/`. EU residency, no plan negotiation. Estimate: **half a day** to a working converter; a day to wire confidence + image side-arrays into the Process step.
- **Landing AI — MEDIUM effort.** The clean Python/TypeScript libraries make Parse itself easy, but the value is in the chunk JSON, so you write a mapper from grounded chunks → the wiki's `## Visual content` (location-stamped) and `## Distinctive artifacts` (located tables) sections. Section API output maps to page structure; Split could pre-separate multi-doc PDFs. More surface to learn, plus credit budgeting and the 90-day free-credit clock. Estimate: **2–3 days** for a parse+grounding-aware converter that genuinely exploits the extra data (less if you only consume the markdown, but then you're paying 15–30× for capability you discard).

### G. Value added to the wiki

The wiki's documented pain is figure/table/appendix fidelity — exactly what `marker`/`pdftotext` lose. Both services materially beat that baseline. Where they sit differently:

- **Mistral** delivers the biggest *value-per-effort-per-dollar*: clean markdown tables (`table_format`), header/footer separation, and confidence scores, at trivial cost and trivial integration. It directly raises baseline table fidelity across every ingest with almost no friction. It does **not** give located figures (coordinates) out of the box.
- **Landing AI** delivers the biggest *value-per-page* on the hard cases: cross-page table reconstruction, merged-cell tables, and per-chunk grounding (page + box). For the table- and appendix-dense [financial-distress paper cluster](../index.md#academic-papers--financial-distress-prediction) — where the wiki already maintains dozens of verbatim `type: artifact` table reproductions ([[hajek-2024-bertopic-risk-categories]], [[powell-2024-country-discriminant-functions]], [[altman-2023-prediction-performance-comparison]]) — grounding is the difference between transcribing a table by hand and getting it located and reconstructed automatically.

## Recommendation (weighted to pipeline fit)

**Adopt Mistral Document AI as the default Acquire converter; pilot Landing AI ADE on the hardest table/appendix-dense papers.**

Rationale: the wiki's Acquire contract is markdown-native, the bulk corpus is moderately-complex PDFs, and cost/effort minimisation matters for a one-person knowledge base. Mistral is the cleanest drop-in — half a day of work, ~$0.001–0.002/page, EU residency, immediate uplift in table fidelity and honest-scoping signals. That is the best *fit for the existing pipeline*.

Landing AI is not "lose" — it is the right tool for the 10–20% of sources where verbatim, located table/appendix reproduction is the whole point (the distress-prediction cluster). The disciplined move is to spend the 1,000 free credits (~333 pages) A/B-testing Parse-with-grounding against the current `marker` output on two or three table-heavy papers (e.g. Powell 2024's 38 country-period discriminant functions, Altman 2023's 164-variable appendix). If grounding measurably cuts the manual effort of building [`## Distinctive artifacts`](../../CLAUDE.md#artifacts) and [`## Appendix content`](../../CLAUDE.md#appendix-content-extraction), promote Landing AI to a **premium tier** invoked per-source, not as the default.

Phased plan:

1. **Now** — Mistral OCR script at Acquire; keep `marker` as fallback. Wire `table_format=markdown` + page-confidence into the Process honest-scoping step.
2. **Pilot** — Landing AI free credits on 2–3 artifact-heavy papers; compare table/appendix fidelity and hand-effort against Mistral output.
3. **Decide** — if the grounding payoff is real, add a per-source "premium parse" path (Landing AI) the ingestor chooses for table/appendix-dense sources; otherwise stay all-Mistral.

## Open questions

- Does Mistral OCR 3's `table_format="html"` round-trip cleanly into Quartz-rendered markdown, or does it need post-processing?
- Real annotation cost: `document_annotation` invokes a vision LLM — what does that add per page in practice versus the flat OCR rate?
- Does Landing AI's chunk grounding survive a mapper into the wiki's `## Visual content` "Location: p. NN" format without manual cleanup?
- Could a hybrid run (Mistral for text/markdown + Landing AI grounding only for tables) beat either alone on cost-adjusted fidelity?

## Sources

External vendor documentation (not ingested `wiki/sources/` pages):

- Mistral Document AI — Introduction, OCR Processor, Annotations: https://docs.mistral.ai/studio-api/document-processing/overview
- Mistral OCR 3 pricing ($2/1k standard, $1/1k batch): https://mistral.ai/pricing/ and https://mistral.ai/news/mistral-ocr-3/
- Landing AI ADE — Overview, Extract, Parsing Models (DPT-2): https://docs.landing.ai/ade/ade-overview
- Landing AI ADE — Pricing & Billing (credit costs): https://docs.landing.ai/ade/ade-pricing

## Related pages

- [CLAUDE.md §Acquire](../../CLAUDE.md#acquire) — the integration target.
- [CLAUDE.md §Visual content extraction](../../CLAUDE.md#visual-content-extraction) and [§Appendix content extraction](../../CLAUDE.md#appendix-content-extraction) — the fidelity disciplines these tools would serve.
- [[sme-distress-predictor-variables]] — the kind of 164-row appendix catalogue that benefits most from high-fidelity parsing.

## Debates and supersession

Single-evaluation page; no contradicting sources yet. The recommendation is provisional on the Landing AI pilot (step 2 above) — a hands-on fidelity test could move the decision toward a Landing-AI-default or a hybrid. Re-confirm after any pilot, and supersede this page if the wiki's converter is actually swapped.
