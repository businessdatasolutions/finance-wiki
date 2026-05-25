---
type: artifact
artifact_kind: table
title: "Appendix Table C1 — Out-of-sample MDA discriminant functions (Approaches 2 + 3) (Powell 2024)"
source: "[[2024-01-01-powell-2024-asean-accounting-early-warning-distress]]"
source_table_ref: "Appendix Table C1"
source_pages: "p. 4123"
last_confirmed: 2026-05-25
accessed_at: 2026-05-25
tags: [discriminant-functions, mda, financial-distress, asean, out-of-sample, forward-testing, back-testing, powell, robustness-check]
---

# Appendix Table C1 — Out-of-sample discriminant functions (Approaches 2 + 3)

> The robustness check for Powell's [[powell-2024-country-discriminant-functions|in-sample MDA functions (Approach 1)]]. Two out-of-sample variants estimated per country: **Approach 2** = forward-testing (train on AFC–Pre-GFC 1997–2006, test on GFC–Current 2007–2016); **Approach 3** = backward-testing (train on GFC–Current, test on AFC–Pre-GFC). 12 country-by-approach functions in total. The variable-frequency summary at the bottom shows EBIT/TA (X₁) still dominates (6 entries in both approaches), confirming that the in-sample finding is robust to out-of-sample re-estimation.

## Provenance

| Field | Value |
|---|---|
| Source | [[2024-01-01-powell-2024-asean-accounting-early-warning-distress]] |
| Source's reference | Appendix Table C1 |
| Caption (verbatim) | *"The discriminant functions from out-of-sample modelling."* |
| Location | p. 4123 (Appendix C.1) |
| Last confirmed | 2026-05-25 |

## Per-country out-of-sample discriminant functions

### Total ASEAN

```
AFC–Pre-GFC (Approach 2):  Z = −0.167 + 4.647 X₁ + 0.306 X₂ − 0.754 X₃ − 0.818 X₆ − 1.017 X₉
GFC–Current (Approach 3):  Z = −0.518 + 6.470 X₁ + 0.174 X₂ − 0.641 X₃ + 0.776 X₄ + 0.495 X₆ − 0.818 X₉
```

### Indonesia

```
AFC–Pre-GFC (Approach 2):  Z = −0.059 + 3.447 X₁ + 0.525 X₂ + 2.015 X₃ − 0.349 X₄ − 1.564 X₉ + 0.036 X₁₀
GFC–Current (Approach 3):  Z = −0.602 + 5.060 X₁ + 1.377 X₆ + 0.052 X₁₀
```

### Malaysia

```
AFC–Pre-GFC (Approach 2):  Z = −0.952 + 7.239 X₁ + 0.535 X₂ − 4.041 X₃ + 2.454 X₄ + 0.169 X₁₀
GFC–Current (Approach 3):  Z = −0.672 + 4.522 X₁ + 2.951 X₄ + 0.239 X₁₀ − 0.465 X₁₁
```

### The Philippines

```
AFC–Pre-GFC (Approach 2):  Z = −0.209 − 3.698 X₁ − 0.688 X₂ + 0.189 X₄ + 2.052 X₉
GFC–Current (Approach 3):  Z = −1.523 + 8.473 X₁ + 0.58 X₂ − 3.488 X₃ + 1.246 X₄ + 1.018 X₆ − 1.926 X₉ + 2.425 X₁₁
```

### Singapore

```
AFC–Pre-GFC (Approach 2):  Z = +1.037 + 2.31 X₁ + 2.03 X₃ − 2.949 X₁₁
GFC–Current (Approach 3):  Z = −0.957 + 11.992 X₁ + 1.771 X₄ − 1.204 X₅
```

### Thailand

```
AFC–Pre-GFC (Approach 2):  Z = −0.414 − 8.415 X₁ + 0.594 X₅ + 1.219 X₁₁ + 0.024 X₁₄
GFC–Current (Approach 3):  Z = −0.160 + 8.200 X₁ + 1.682 X₆ − 0.249 X₈ + 0.07 X₁₀ − 0.017 X₁₄
```

## Variable-frequency summary (bottom of Appendix Table C1)

| | **Profitability** ||||| **Liquidity** |||| **Leverage** ||
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| | X₁ | X₂ | X₃ | X₄ | X₅ | X₆ | X₈ | X₉ | X₁₀ | X₁₁ | X₁₄ |
| AFC–Pre-GFC (Approach 2) | **6** | 4 | 4 | 3 | 1 | 1 | 0 | 3 | 2 | 2 | 1 |
| GFC–Current (Approach 3) | **6** | 2 | 2 | 3 | 0 | 4 | 1 | 2 | 3 | 2 | 1 |

## What the appendix functions show

**X₁ EBIT/TA dominates both approaches** (6 entries each) — the headline finding from the in-sample Approach 1 is replicated out-of-sample. EBIT/TA is the single most robust ASEAN distress predictor regardless of training-window choice.

**Differences between Approaches 2 and 3:**

- **Approach 2** (forward) keeps more profitability ratios overall (X₁+X₂+X₃+X₄+X₅ = 18 entries). Crisis-period training data produces models that lean heavily on multi-channel profitability signals.
- **Approach 3** (backward) shifts toward liquidity (X₆ = 4 vs 1 in Approach 2). Models trained on the more recent post-GFC + stable-period data and then back-tested on the AFC select more working-capital-focused functions — Powell interprets this as more recent data favouring liquidity-focused distress identification.

**Coefficient stability is poor.** Compare the Total ASEAN Approach 2 (X₁ coeff = +4.647) vs Approach 3 (X₁ coeff = +6.470) — both positive but a 40% magnitude difference. The Philippines Approach 2 has X₁ coefficient **negative** (−3.698) while Approach 3 has it **positive** (+8.473). These sign and magnitude swings out-of-sample are the strongest argument the paper makes for *not* deploying any single MDA function across macro regimes.

**Singapore Approach 2 (Z = +1.037 + ...)** is the only function with a positive intercept — meaning baseline classification favours non-distress; the variables have to push the score down to classify as distressed. All other Total ASEAN / per-country functions have negative intercepts.

## Cross-references

- In-sample (Approach 1) counterparts: [[powell-2024-country-discriminant-functions]] (Table 4).
- Region-wide in-sample functions: [[powell-2024-asean-discriminant-functions]] (Table 3).
- The accuracy these out-of-sample functions deliver: [[powell-2024-out-of-sample-accuracy]] (Appendix Table C2).
- Sample-population context: [[powell-2024-research-population]] (Appendix Table A1).
- Concepts: [[multiple-discriminant-analysis]], [[financial-distress]].
