---
type: artifact
artifact_kind: table
title: "The 3×4 determinants × consequences taxonomy (Habib 2020)"
source: "[[2020-01-01-habib-2020-distress-determinants-consequences-review]]"
source_table_ref: "Body §4 organising frame (Tables 2 + 3 grouping)"
source_pages: "pp. 1034–1067"
last_confirmed: 2026-05-25
accessed_at: 2026-05-25
aliases:
  - habib-determinants-consequences-matrix
  - 3x4-distress-taxonomy
tags: [taxonomy, distress-determinants, distress-consequences, financial-distress, review-frame, habib, organising-frame]
---

# The 3×4 determinants × consequences taxonomy

> Habib et al.'s organising frame for the financial-distress literature. Three **determinant** categories × four **consequence** categories produce a 12-cell matrix; cells that the surveyed literature *fills* are marked ✓ with the section reference; cells that are empty signal research gaps the authors explicitly flag. This is the review's central conceptual contribution — any future paper on financial distress should classify its determinants and consequences against this matrix, and gaps in the matrix are research opportunities.

## Provenance

| Field | Value |
|---|---|
| Source | [[2020-01-01-habib-2020-distress-determinants-consequences-review]] |
| Source's reference | §4 organising frame; Tables 2 and 3 row groupings |
| Location | Body sections 4.1–4.4, pp. 1034–1067 |
| Last confirmed | 2026-05-25 |

## The matrix

|  | **Determinant: Firm-fundamental** | **Determinant: Macro-economic** | **Determinant: Corporate-governance** |
|---|:-:|:-:|:-:|
| **Consequence: Financial reporting & auditing** | ✓ §4.1 |  | ✓ §4.1 |
| **Consequence: Firm-level operational** | ✓ §4.2 | ✓ §4.2 |  |
| **Consequence: Capital market** | ✓ §4.3 | ✓ §4.3 |  |
| **Consequence: Corporate governance** |  |  | ✓ §4.4 |

Empty cells = research gaps Habib et al. explicitly flag for future work.

## Determinant categories (rows of [[habib-2020-determinants-literature-rows|Table 2]])

1. **Firm-fundamental determinants** — accounting characteristics (profitability, liquidity, leverage), R&D investment, CSR practices, operating-efficiency variables, working-capital management. The largest determinants category in the surveyed literature.
2. **Macro-economic determinants** — recessions, interest rates, industry concentration, FX volatility, monetary-policy regimes. Studies in this category typically use multi-country panels.
3. **Corporate-governance determinants** — board composition, CEO tenure, blockholder ownership, family ownership, audit-committee structure, executive compensation. The smallest determinants category but the fastest-growing.

## Consequence categories (rows of [[habib-2020-consequences-literature-rows|Table 3]])

1. **Financial reporting & auditing consequences** — earnings management, classification shifting, real activities manipulation, audit-quality response, going-concern opinions, restatement frequency.
2. **Firm-level operational consequences** — dividend cuts, capital-expenditure reductions, workforce reductions, asset sales, divestitures, employee turnover.
3. **Capital market consequences** — stock-return predictability, accrual-anomaly pricing, analyst forecast accuracy, credit-rating downgrades, equity-issuance constraints.
4. **Corporate governance consequences** — CEO turnover, board restructuring, blockholder activism, M&A activity, takeover-attempt frequency.

## Reading the matrix

- **The two "diagonal" cells** (firm-fundamental → operational; corporate-governance → governance consequences) are the densest cells — most surveyed papers study the within-channel mechanism.
- **Cross-channel cells** (e.g. firm-fundamental → financial reporting; macro-economic → capital market) are sparser but where the most novel work lives — that's where determinants in one channel produce consequences in another.
- **Empty cells matter.** The taxonomy explicitly identifies:
  - Macro-economic → financial reporting & auditing (do recessions cause earnings management spikes?)
  - Macro-economic → corporate governance consequences (do crisis periods cause governance restructuring?)
  - Corporate-governance → firm-level operational (do good boards prevent operational distress?)
  - Corporate-governance → capital market (does governance quality moderate distressed firms' equity-market access?)
  - Firm-fundamental → corporate governance (do operational shocks cause governance changes?)

## Why this taxonomy is corpus-level

A wiki page on financial distress that does *not* use this matrix is structurally weaker than one that does — because reasoning about determinants and consequences in isolation misses the cross-channel mechanism, which is where the empirical contribution of post-2018 papers (Altman 2023, Hajek 2024, Powell 2024, Bari 2026) lives.

The four downstream papers in the corpus all map to specific cells of this matrix:

| Paper | Determinant cell | Consequence cell |
|---|---|---|
| [[2022-11-28-altman-2023-omega-score-sme-default]] | Firm-fundamental + (novel) Behavioural | Operational (default) |
| [[2024-06-22-hajek-2024-distress-prediction-annual-reports]] | Firm-fundamental + (novel) Textual | Financial reporting (the risk-factor disclosure channel) |
| [[2024-01-01-powell-2024-asean-accounting-early-warning-distress]] | Firm-fundamental + Macro-economic (period dummies) | Operational (distress) |
| [[2026-02-04-bari-2026-us-small-business-distress-framework]] | Firm-fundamental + (novel) Behavioural + Relational | Operational (distress) |

## Cross-references

- The distress measurement-models catalogue this taxonomy organises: [[habib-2020-distress-measurement-models]] (Table 1).
- The determinants literature (Table 2): [[habib-2020-determinants-literature-rows]].
- The consequences literature (Table 3): [[habib-2020-consequences-literature-rows]].
- Concepts: [[financial-distress]], [[distress-determinants]], [[distress-consequences]], [[corporate-governance-and-distress]], [[earnings-management-and-distress]].
