---
type: artifact
artifact_kind: table
title: "Hierarchical regression coefficients + hypothesis tests (Bari 2026)"
source: "[[2026-02-04-bari-2026-us-small-business-distress-framework]]"
source_table_ref: "Tables 3-7 (regression results, hypothesis tests, R² progression, reliability matrix, descriptive constructs)"
source_pages: "Body §Results"
last_confirmed: 2026-05-25
accessed_at: 2026-05-25
tags: [hierarchical-regression, hypothesis-tests, sme-distress, bari, standardised-beta-coefficients, r-squared-progression]
---

# Hierarchical regression coefficients + hypothesis tests

> Bari's empirical core: standardised β coefficients for the seven indicator families against the composite distress outcome, with hypothesis tests and R² progression. Six of seven hypotheses rejected the null (only **Efficiency** failed to predict distress); credit behaviour is the largest single channel (β = +0.34); the integrated model gains **+0.15 R²** over the financial-only baseline — the central empirical finding that behavioural + relational + cash-flow channels add explanatory power.

## Provenance

| Field | Value |
|---|---|
| Source | [[2026-02-04-bari-2026-us-small-business-distress-framework]] |
| Source's reference | Tables 3–7 (composite regression output) |
| Location | Body §Results |
| Last confirmed | 2026-05-25 |

## Descriptive statistics (composite constructs)

All constructs normalised to [0, 1].

| Construct | Mean | SD |
|---|---:|---:|
| Liquidity | 0.62 | 0.21 |
| Leverage | 0.54 | 0.19 |
| Credit behaviour | 0.47 | 0.22 |
| (Profitability, Cash flow dynamics, Efficiency, Relationship-based — reported in source but not transcribed) | — | — |

## Reliability (Cronbach's α)

| Construct | α |
|---|---:|
| Credit behaviour | 0.88 |
| Liquidity | between 0.77 and 0.88 |
| Profitability | between 0.77 and 0.88 |
| Leverage | between 0.77 and 0.88 |
| Cash flow dynamics | between 0.77 and 0.88 |
| Relationship-based | between 0.77 and 0.88 |
| Efficiency | 0.77 |

All α ≥ 0.70 — acceptable per Nunnally 1978. **Efficiency is the lowest** (0.77), which may be relevant to its non-significance in the regression below.

## Standardised regression coefficients + hypothesis tests

| Hypothesis | Predictor | β | p | Significant? | Effect direction |
|---|---|---:|---:|:---:|:---|
| H1 | Liquidity | **−0.21** | 0.002 | ✓ | Protective |
| H2 | Profitability | **−0.14** | 0.008 | ✓ | Protective |
| H3 | Leverage | **+0.25** | <0.001 | ✓ | Risk-increasing |
| H4 | Cash flow dynamics | **−0.23** | 0.001 | ✓ | Protective |
| H5 | **Credit behaviour** | **+0.34** | <0.001 | ✓ | Risk-increasing **(largest effect)** |
| H6 | Relationship-based indicators | **−0.18** | 0.005 | ✓ | Protective |
| H7 | Efficiency | not significant | >0.05 | ✗ | (failed to reject null) |

**Sign interpretation.** Negative β = protective (higher value of the construct → lower predicted distress); positive β = risk-increasing.

**Six of seven hypotheses rejected the null.** Only H7 (efficiency indicators predict distress) failed to reach significance — possibly attributable to the low Cronbach's α (0.77) on the efficiency construct, suggesting measurement noise rather than absence of effect.

## Model fit progression (R²)

| Model specification | R² |
|---|---:|
| Baseline financial model (liquidity + profitability + leverage) | **0.31** |
| + Cash flow dynamics | ~0.36 (interpolated) |
| + Efficiency | ~0.38 |
| + Credit behaviour | ~0.43 |
| **Full integrated model** (all 7 families) | **0.46** |

**Δ R² = +0.15** from financial-only to integrated — the central empirical finding. Behavioural + relational + cash-flow channels collectively explain an additional 15 percentage points of distress variance over the financial-ratio baseline.

**Multicollinearity diagnostic.** VIF < 1.9 across all specifications — no multicollinearity threat. This validates that the seven channels are not redundant proxies for the same underlying signal; they are genuinely distinct predictors.

## What the regression argues

1. **Credit behaviour is the dominant single channel** (β = +0.34, the largest coefficient and most highly significant). This validates the paper's central design claim: how a borrower has historically used credit (delinquency patterns, payment delays, credit-limit utilisation) carries more predictive signal than any single financial ratio.
2. **Leverage and credit behaviour are the only risk-increasing channels.** The other five all have protective signs — i.e. higher values of liquidity, profitability, cash-flow dynamics, efficiency, and relationship indicators all reduce predicted distress.
3. **Efficiency is anomalous.** Its non-significance (p > 0.05) is the only failed-rejection. The paper attributes this to: (a) low construct reliability (α = 0.77 is the floor of "acceptable"), and (b) plausibly that efficiency operates through the other constructs rather than as an independent channel — efficient firms are more profitable, more liquid, and less leveraged.
4. **Behavioural + relational + cash-flow channels are non-redundant** (Δ R² +0.15 above the financial-only baseline; VIF < 1.9). This is the empirical validation of Bari's seven-family framework over classical financial-ratio approaches.

## Cross-references

- The conceptual framework underlying the constructs: [[bari-2026-indicator-family-framework]].
- The process-diagram the regression validates: [[bari-2026-financial-distress-process-diagram]] (Figure 3).
- Sample composition the regression is fit on: [[bari-2026-demographic-distribution]] (Tables 1–2).
- Concepts: [[financial-distress]], [[sme-default-prediction]], [[behavioural-distress-prediction]].
