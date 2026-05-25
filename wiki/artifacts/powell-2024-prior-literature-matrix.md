---
type: artifact
artifact_kind: table
title: "Table 1 — 14 accounting indicators × 15 prior MDA studies (Powell 2024)"
source: "[[2024-01-01-powell-2024-asean-accounting-early-warning-distress]]"
source_table_ref: "Table 1"
source_pages: "p. 4110"
last_confirmed: 2026-05-25
accessed_at: 2026-05-25
tags: [prior-literature-matrix, mda, financial-distress, accounting-ratios, profitability-ratios, liquidity-ratios, leverage-ratios, powell, asean]
---

# Table 1 — 14 accounting indicators × 15 prior MDA studies

> Powell, Singh & Tan's evidence-based feature-selection matrix. 14 financial ratios (rows) × 15 prior MDA distress-prediction studies (columns), with an X marking each cell where a prior study used that ratio. The **Total** column sums prior endorsements per ratio — used by Powell to decide which ratios to seed the ASEAN stepwise regression with. Top-endorsed: EBIT/TA (7), WC/TA (7), CA/CL (7), TL/TA (7).

## Provenance

| Field | Value |
|---|---|
| Source | [[2024-01-01-powell-2024-asean-accounting-early-warning-distress]] |
| Source's reference | Table 1 |
| Caption (verbatim) | *"The widely used accounting indicators used in the multiple discriminant analysis (MDA) analysis."* |
| Location | p. 4110 |
| Last confirmed | 2026-05-25 |

## Table

X marks each cell where the column-study used the row-ratio. Total = column sums.

|  | Ratio | Beaver (1966) | Deakin (1972) | Altman (1968) | Altman et al. (1977) | Ohlson (1980) | Taffler (1983) | Zmijewski (1984) | Izan (1984) | Koh & Killough (1990) | Shumway (2001) | Hillegeist et al. (2004) | Beaver et al. (2005) | Wu et al. (2004) | Tinoco & Wilson (2013) | Cultrera & Brédart (2016) | **Total** |
|---|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| **Profitability** ||||||||||||||||||
| X₁ | EBIT/TA |  | X | X | X |  |  |  | X |  | X | X |  | X | X | X | **7** |
| X₂ | S/TA | X |  |  |  |  |  |  |  |  |  |  |  |  |  |  | **3** |
| X₃ | NI/TA |  | X |  |  | X |  | X |  |  | X | X | X |  |  | X | **6** |
| X₄ | RE/TA |  |  | X | X |  |  |  |  |  | X | X |  |  |  |  | **5** |
| X₅ | EBITDA/TL |  |  |  |  |  |  |  |  |  |  |  | X |  |  |  | **1** |
| **Liquidity** ||||||||||||||||||
| X₆ | WC/TA |  | X | X | X | X |  |  | X |  | X | X |  | X |  |  | **7** |
| X₇ | CA/CL |  |  |  |  | X | X |  |  |  |  |  |  |  |  |  | **1** |
| X₈ | CA/CL |  | X | X |  | X | X |  | X |  | X | X |  | X |  | X | **7** |
| X₉ | CL/TA |  |  |  |  | X | X |  |  |  |  |  |  |  | X |  | **2** |
| X₁₀ | NOCREDINT |  |  |  |  | X | X |  |  |  |  |  |  |  | X |  | **2** |
| **Leverage** ||||||||||||||||||
| X₁₁ | TL/TA |  | X |  |  | X | X | X |  |  | X | X | X |  | X | X | **7** |
| X₁₂ | FU/TL | X |  | X |  | X |  |  |  |  |  |  |  |  |  |  | **3** |
| X₁₃ | MVE/TC |  |  |  |  |  |  |  |  | X |  | X |  |  |  |  | **1** |
| X₁₄ | MVE/TL |  | X |  |  |  |  |  |  |  | X |  |  |  | X | X | **4** |

**Abbreviations** (per the paper's note): CA/CL = current assets/current liabilities; CA/TL = current assets/total liabilities; CL/TA = current liabilities/total assets; EBIT/TA = earnings before interest and taxes/total assets; EBITDA/TL = earnings before interest, depreciation, and amortization/total liabilities; FU/TL = funds provided by operations/total liabilities; MVE/TC = market value of equity/total capital; MVE/TL = market value of equity/total liabilities; NI/TA = net income/total assets; NOCREDINT = ratio of the no-credit interval; RE/TA = retained earnings/total assets; S/TA = total sales/total assets; TL/TA = total liabilities/total assets; WC/TA = working capital/total assets.

## Notes

The matrix encodes the entire pre-Powell MDA distress-prediction literature into one table — a corpus-level bibliographic asset. Reading row-wise: the four ratios with Total ≥ 7 (EBIT/TA, WC/TA, CA/CL, TL/TA) are the *canonical* MDA ratios that survived a half-century of empirical re-testing. Reading column-wise: each column is a separate published distress-prediction study with its idiosyncratic ratio choices — Altman (1968) uses 4 ratios; Ohlson (1980) uses 6; Hillegeist et al. (2004) uses 7; Cultrera & Brédart (2016) uses 7.

The CA/CL appears in two rows (X₇ and X₈) — this is the paper's typographic anomaly, not an error. Powell's note clarifies X₇ = CA/TL, X₈ = CA/CL — i.e. row X₇ is current assets / total liabilities (one study, Ohlson 1980, also used by Taffler 1983), distinct from X₈ which is the standard current ratio.

Powell uses this matrix as **evidence-based feature selection**: rather than proposing ratios theoretically, the ASEAN MDA stepwise regression starts from this 14-ratio prior-literature shortlist and lets data choose the subset per country × period.

## Cross-references

- Descriptive stats for these 14 ratios on the Powell sample: [[powell-2024-descriptive-statistics]] (Table 2).
- Frequency these ratios appear in the resulting MDA functions: [[powell-2024-ratio-frequency]] (Table 5).
- ASEAN-wide discriminant functions using a subset of these ratios: [[powell-2024-asean-discriminant-functions]] (Table 3).
- Per-country discriminant functions: [[powell-2024-country-discriminant-functions]] (Table 4).
- Concepts: [[multiple-discriminant-analysis]], [[financial-distress]], [[altman-z-score]].
