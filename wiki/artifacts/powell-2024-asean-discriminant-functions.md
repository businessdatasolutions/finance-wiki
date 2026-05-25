---
type: artifact
artifact_kind: table
title: "Table 3 — ASEAN-wide discriminant functions across 7 periods (Powell 2024)"
source: "[[2024-01-01-powell-2024-asean-accounting-early-warning-distress]]"
source_table_ref: "Table 3"
source_pages: "p. 4112"
last_confirmed: 2026-05-25
accessed_at: 2026-05-25
tags: [discriminant-functions, mda, financial-distress, asean, accounting-ratios, regression-coefficients, powell]
---

# Table 3 — ASEAN-wide discriminant functions (Approach 1, in-sample by period)

> Powell's region-wide MDA discriminant functions, one per period. Each function maps a 5-variable subset of the [[powell-2024-prior-literature-matrix|14-ratio universe]] onto a Z-score that classifies firms as distressed (Z<0) or non-distressed (Z>0). The variable subset and coefficient signs **shift across periods** — the most striking anomaly is the Pre-GFC X₁ coefficient sign reversal (−6.969), which Powell attributes to the pre-GFC asset-price boom decoupling EBIT from distress.

## Provenance

| Field | Value |
|---|---|
| Source | [[2024-01-01-powell-2024-asean-accounting-early-warning-distress]] |
| Source's reference | Table 3 |
| Caption (verbatim) | *"The discriminant functions for the entire Association of Southeast Asian Nations (ASEAN) region (Approach 1)."* |
| Location | p. 4112 |
| Last confirmed | 2026-05-25 |

## Functions

```
Entire period:   Z = −0.157 + 6.269 X₁ + 0.226 X₂ − 0.754 X₃ + 0.335 X₄ − 1.292 X₉
AFC:             Z = +0.907 + 2.467 X₁ + 1.095 X₆ − 1.499 X₁₁
Post-AFC:        Z = +0.043 + 4.618 X₁ + 0.353 X₂ − 1.421 X₉
Pre-GFC:         Z = −0.205 − 6.969 X₁ − 0.299 X₂ + 2.471 X₃ + 1.057 X₇ + 0.778 X₁₁ + 0.007 X₁₃
GFC:             Z = −0.452 + 7.127 X₁ − 0.494 X₃ + 1.018 X₄ − 0.082 X₈
Post-GFC:        Z = −0.316 + 7.905 X₁ + 0.218 X₂ + 0.629 X₄ − 1.700 X₉
Stable period:   Z = +0.017 + 8.258 X₁ − 2.530 X₃ + 0.635 X₄ − 1.628 X₉
```

## Variable key

X₁ = EBIT/TA; X₂ = S/TA; X₃ = NI/TA; X₄ = RE/TA; X₆ = WC/TA; X₇ = CA/TL; X₈ = CA/CL; X₉ = CL/TA; X₁₁ = TL/TA; X₁₃ = MVE/TC.

## Period definitions

| Period | Years | Macro context |
|---|---|---|
| Entire period | 1997–2016 | Pooled |
| AFC | 1997–2000 | Asian Financial Crisis (Thai Bhat depreciation onward) |
| Post-AFC | 2001–2003 | Rebound, restructuring |
| Pre-GFC | 2004–2006 | Asset-price boom |
| GFC | 2007–2009 | Global Financial Crisis |
| Post-GFC | 2010–2012 | Recovery |
| Stable period | 2013–2016 | Slight economic-growth uptick |

## Notes

The X₁ (EBIT/TA) coefficient appears in **6 of 7** functions and is positive in 5 of those — confirming EBIT/TA as the most reliable ASEAN distress signal. The pre-GFC anomaly (sign flip to −6.969) is the outlier event: during the asset-price boom, high reported EBIT did not protect firms from subsequent distress because earnings quality was decoupled from cash flow.

Approach 1 (in-sample per period) outperforms Approaches 2/3 (forward-test, back-test) per the paper's §Results — confirming Grice-Ingram 2001 / Ohlson 1980 critiques that MDA functions do not transfer cleanly across macro regimes.

## Cross-references

- Per-country versions of these functions: [[powell-2024-country-discriminant-functions]] (Table 4).
- The 14-ratio universe these functions select from: [[powell-2024-prior-literature-matrix]] (Table 1).
- Univariate descriptives for these variables: [[powell-2024-descriptive-statistics]] (Table 2).
- How often each ratio appears: [[powell-2024-ratio-frequency]] (Table 5).
- Classification accuracy: [[powell-2024-classification-accuracy]] (Table 6).
- Concepts: [[multiple-discriminant-analysis]], [[altman-z-score]], [[financial-distress]].
