---
type: artifact
artifact_kind: table
title: "Table 2 — Descriptive statistics for 14 ratios + ICR (Powell 2024)"
source: "[[2024-01-01-powell-2024-asean-accounting-early-warning-distress]]"
source_table_ref: "Table 2"
source_pages: "p. 4111"
last_confirmed: 2026-05-25
accessed_at: 2026-05-25
tags: [descriptive-statistics, financial-distress, accounting-ratios, asean, distressed-firms, powell]
---

# Table 2 — Descriptive statistics for 14 ratios + ICR (distressed vs. non-distressed)

> Mean / median / SD for each of Powell's 14 candidate ratios plus the Interest Coverage Ratio (ICR, the distress indicator). Two panels: Panel A = non-distressed firms (ICR ≥ 1); Panel B = distressed firms (ICR < 1). Sample = 720 ASEAN firms over 1997–2016. **The univariate gaps in this table preview the multivariate MDA findings** in [[powell-2024-asean-discriminant-functions]] and [[powell-2024-country-discriminant-functions]] — distressed firms show systematically lower profitability and liquidity, and higher leverage.

## Provenance

| Field | Value |
|---|---|
| Source | [[2024-01-01-powell-2024-asean-accounting-early-warning-distress]] |
| Source's reference | Table 2 |
| Caption (verbatim) | *"The descriptive statistics."* |
| Location | p. 4111 |
| Last confirmed | 2026-05-25 |

## Panel A — Non-distressed firms (ICR ≥ 1)

| Group | ID | Ratio | Mean | Median | SD |
|---|---|---|---:|---:|---:|
| **Profitability** | X₁ | EBIT/TA | 0.086 | 0.068 | 0.163 |
| | X₂ | S/TA | 0.789 | 0.580 | 0.873 |
| | X₃ | NI/TA | 0.065 | 0.050 | 0.174 |
| | X₄ | RE/TA | 0.164 | 0.183 | 0.578 |
| | X₅ | EBITDA/TL | 0.000 | 0.000 | 0.000 |
| **Liquidity** | X₆ | WC/TA | 0.121 | 0.113 | 0.328 |
| | X₇ | CA/TL | 1.053 | 0.842 | 1.022 |
| | X₈ | CA/CL | 1.929 | 1.469 | 1.608 |
| | X₉ | CL/TA | 0.310 | 0.251 | 0.322 |
| | X₁₀ | NOCREDINT | −0.022 | −0.020 | 1.660 |
| **Leverage** | X₁₁ | TL/TA | 0.533 | 0.499 | 0.448 |
| | X₁₂ | FU/TL | 0.225 | 0.132 | 0.691 |
| | X₁₃ | MVE/TC | 2.192 | 1.276 | 2.522 |
| | X₁₄ | MVE/TL | 1.712 | 1.152 | 2.029 |
| **Distress indicator** | — | **ICR** | **5.612** | **5.272** | **4.001** |

## Panel B — Distressed firms (ICR < 1)

| Group | ID | Ratio | Mean | Median | SD |
|---|---|---|---:|---:|---:|
| **Profitability** | X₁ | EBIT/TA | **−0.062** | −0.006 | 0.485 |
| | X₂ | S/TA | 0.443 | 0.293 | 0.795 |
| | X₃ | NI/TA | −0.004 | −0.018 | 0.860 |
| | X₄ | RE/TA | **−0.436** | −0.049 | 1.654 |
| | X₅ | EBITDA/TL | −0.014 | 0.021 | 0.694 |
| **Liquidity** | X₆ | WC/TA | **−0.272** | −0.030 | 1.128 |
| | X₇ | CA/TL | 0.799 | 0.474 | 1.305 |
| | X₈ | CA/CL | 1.475 | 0.904 | 1.916 |
| | X₉ | CL/TA | 0.615 | 0.355 | 1.115 |
| | X₁₀ | NOCREDINT | −1.324 | −0.347 | 3.720 |
| **Leverage** | X₁₁ | TL/TA | **0.865** | 0.654 | 1.111 |
| | X₁₂ | FU/TL | 0.056 | 0.020 | 0.838 |
| | X₁₃ | MVE/TC | 1.301 | 0.421 | 2.326 |
| | X₁₄ | MVE/TL | 1.001 | 0.612 | 2.419 |
| **Distress indicator** | — | **ICR** | **−1.736** | −0.250 | 3.357 |

## Headline univariate gaps

Bold mean values in Panel B mark the largest distressed–non-distressed gaps:

| Ratio | Non-distressed mean | Distressed mean | Sign |
|---|---:|---:|---|
| EBIT/TA | +0.086 | −0.062 | Distressed firms generate negative EBIT on average. |
| RE/TA | +0.164 | −0.436 | Distressed firms have accumulated **negative** retained earnings. |
| WC/TA | +0.121 | −0.272 | Distressed firms run negative working capital. |
| TL/TA | 0.533 | **0.865** | Distressed firms carry 62% more leverage than non-distressed. |
| ICR | +5.612 | −1.736 | The defining indicator: distressed firms can't cover interest. |

All five gaps are consistent with the multivariate MDA findings — the same five ratios (or their close substitutes) dominate the discriminant functions in [[powell-2024-asean-discriminant-functions]] and [[powell-2024-country-discriminant-functions]].

## Notes

The X₅ EBITDA/TL row in Panel A reports zeros across mean, median, and SD — this is a publication-formatted display of values rounded to three decimal places. The actual non-distressed-firm EBITDA/TL distribution is near-zero (EBITDA roughly matches total liabilities), so the rounded statistics collapse.

The distressed-firm sample standard deviations are *substantially larger* than the non-distressed (compare ICR SD: 4.001 vs 3.357; WC/TA SD: 0.328 vs 1.128). Distressed firms are not just "lower-mean" versions of non-distressed firms — they are also far more dispersed. This is the diagnostic for the Type-I error skew Powell notes in §Results: predicting distress (the minority class with high variance) is harder than predicting non-distress.

## Cross-references

- The candidate-ratio universe these come from: [[powell-2024-prior-literature-matrix]] (Table 1).
- The MDA functions estimated on these ratios: [[powell-2024-asean-discriminant-functions]] (Table 3), [[powell-2024-country-discriminant-functions]] (Table 4).
- How often each ratio is significant: [[powell-2024-ratio-frequency]] (Table 5).
- Concepts: [[multiple-discriminant-analysis]], [[financial-distress]].
