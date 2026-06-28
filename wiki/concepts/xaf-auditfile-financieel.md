---
type: concept
title: "XAF — Auditfile Financieel"
aliases:
  - XAF
  - Auditfile Financieel
  - auditfile-financieel
  - Netherlands audit file
  - Dutch digital audit file
confidence: 0.70
last_confirmed: 2026-06-28
accessed_at: 2026-06-28
source_count: 2
tags:
  - xaf
  - auditfile-financieel
  - tax-compliance
  - netherlands
  - belastingdienst
  - rgs
  - saf-t
  - sbr
  - digital-audit-file
quality_score: 1
---

# XAF — Auditfile Financieel

> The Netherlands' national **digital audit-file standard**: a structured XML export of a business's complete financial administration that the **Belastingdienst** can demand on request during a *boekenonderzoek* (tax inspection). Distinct from the OECD's SAF-T. Two low-authority sources so far — [[2026-03-01-harding-2026-netherlands-xaf-4-requirements|Harding (Invoice Data Extraction, 2026)]], a vendor explainer of the standard, and [[2026-06-28-perplexity-2026-ontology-agentic-xaf-parser|a Perplexity (2026)]] engineering sketch of a parser for it; the regulatory facts are checkable against the Belastingdienst and SBR specifications.

## What it is

The Auditfile Financieel (XAF) is the Dutch standard for a machine-readable audit file, governed under the **SBR (Standard Business Reporting)** programme. Unlike a tax return, it is **reactive**: there is no filing schedule. A business must be *able to produce* a valid export on demand, covering any fiscal period within the **seven-year** Dutch retention window. The obligation applies to **every NL-registered business that keeps records** — from eenmanszaak and VOF to BV and multinational subsidiary, including KOR small-business VAT-exemption firms.

## XAF 4.0 (mandatory from 2026-01-01)

XAF 4.0 replaced XAF 3.2 (in force since 2014) on **1 January 2026**, with **no backwards compatibility** — 3.2 files are rejected from that date.

| Dimension | XAF 3.2 | XAF 4.0 |
|---|---|---|
| Data elements | ~250 | ~90 (≈⅔ reduction) |
| Chart of accounts | Any internal structure | Aligned to **RGS** (Referentie GrootboekSchema) |
| EU harmonisation | — | Structured for future **ViDA** fields |
| Backwards compatible | — | No |

**RGS alignment** is the structurally significant change: the audit file's chart-of-accounts now follows a nationally standardised reference taxonomy, letting the Belastingdienst compare ledgers across businesses regardless of accounting package. Finance teams must map their general-ledger accounts to the RGS taxonomy before a compliant export is possible.

## XAF vs SAF-T

A persistent error classifies the Netherlands as a SAF-T country. **It is not.**

- **SAF-T** (Standard Audit File for Tax) is OECD-originated, adopted by Portugal, Norway, Poland, Austria, Luxembourg (with national variation).
- **XAF** is the Dutch national standard, predating SAF-T adoption by several of those countries — same purpose, technically distinct schema.
- Other national formats: Germany **GoBD**, Sweden **SIE**, France **FEC**. Multi-jurisdiction operations must map requirements **per country**.
- XAF 4.0 is positioned for eventual EU **ViDA** harmonisation, but as of 2026 XAF and SAF-T remain separate with no merged specification. The XAF sits alongside **Peppol** e-invoicing as the two pillars of the Dutch digital-finance infrastructure roadmap.

## What the file must contain

Five categories: **header data** (entity + scope identifiers), **general-ledger structure** (RGS-aligned chart of accounts), **opening balances**, **journal entries** (every transaction with a source-document reference — the largest portion), and **sub-ledger data** (AR/AP at customer/supplier level). Because each journal entry references its originating source document, **the accuracy of the XAF is determined by the accuracy of those underlying documents** — capture-time errors (amounts, dates, VAT codes) propagate into the audit file and surface as discrepancies under inspection.

## Why the concept exists

This is the wiki's **first node in a Dutch tax / financial-administration compliance cluster**, adjacent to the existing Dutch real-estate thread (the RaboResearch reports) but distinct in subject. It exists as a seed: future sources on Peppol/NLCIUS/SI-UBL e-invoicing, ViDA, and the SAF-T/FEC comparators will attach here, and would let this page grow entity pages for the **Belastingdienst**, **RGS**, and **SBR**.

The two sources so far address XAF from different angles: [[2026-03-01-harding-2026-netherlands-xaf-4-requirements|Harding (2026)]] documents the **regulatory standard** (what XAF is, what an export must contain), while [[2026-06-28-perplexity-2026-ontology-agentic-xaf-parser|the Perplexity answer (2026)]] proposes an **engineering approach** to parsing it (an ontology + knowledge-graph + agentic-validation pipeline that `uses` this standard). The second is LLM-generated and adds tooling perspective rather than independent regulatory authority — see [§Debates](#debates-and-supersession).

## Debates and supersession

*No substantive debates yet — both sources are low-authority and address different facets.* The seeding source ([[2026-03-01-harding-2026-netherlands-xaf-4-requirements|Harding]]) is vendor content marketing (Invoice Data Extraction sells invoice-extraction tooling); the second ([[2026-06-28-perplexity-2026-ontology-agentic-xaf-parser|Perplexity]]) is an LLM-generated engineering sketch. **Neither is an authoritative regulatory reference**, so the core facts (the ~90 XAF 4.0 elements, RGS mapping, retention rules) should be re-confirmed against the Belastingdienst / SBR primary specifications. `confidence` is deliberately held at **0.70** despite `source_count: 2` — the second source adds a tooling perspective, not independent substantiation of the standard.

**One latent tension to resolve:** the Perplexity source cites Invantive's figure of "48 tables / 1110 columns" for the XAF *3.2* data model, while this page records XAF *4.0* as a simplification to ~90 data elements. These describe different versions (and different units — driver tables/columns vs. spec data-elements), but a future authoritative source should reconcile how large the 4.0 model actually is.

**Open questions for future sources:**

1. What are the exact ~90 XAF 4.0 data elements? (The source gives an approximate count, not the schema.)
2. How does the RGS mapping work in practice across the major ERP packages (Exact, Twinfield, AFAS, Unit4, SAP, Dynamics)?
3. How tightly will ViDA actually align with XAF, and on what timeline?
4. How does XAF interlock with the Dutch e-invoicing stack (Peppol / NLCIUS / SI-UBL / Digipoort)?

## Cross-references

**Sources:** [[2026-03-01-harding-2026-netherlands-xaf-4-requirements]] (regulatory standard), [[2026-06-28-perplexity-2026-ontology-agentic-xaf-parser]] (engineering / parser-design angle).

**Adjacent concepts:** [[document-ai-ingestion-options]] — loose thematic adjacency (both concern extracting structured data from financial documents), though that is a wiki-pipeline concept rather than a compliance one.
