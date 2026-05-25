---
type: concept
title: Multiple Discriminant Analysis (MDA)
aliases:
  - MDA
  - Discriminant analysis
  - Multivariate discriminant analysis
confidence: 0.85
last_confirmed: 2026-05-25
source_count: 2
accessed_at: 2026-05-25
tags: [multiple-discriminant-analysis, classification, financial-distress, altman-z-score, statistical-methods]
relationships: []
---

# Multiple Discriminant Analysis (MDA)

A statistical classification technique that produces a **linear combination of predictor variables** maximising between-group separation while minimising within-group variance. In the financial-distress literature, MDA is the foundational technique for **two-group classification** (distressed vs. non-distressed) that produced the [[altman-z-score]] and remains the dominant accounting-based-prediction methodology.

## The discriminant function

For each firm $i$ with predictor vector $x_i = (x_{i1}, \ldots, x_{ik})$:

```
Z_i = c_0 + c_1 x_{i1} + c_2 x_{i2} + ... + c_k x_{ik}
```

Coefficients $c_0, \ldots, c_k$ are chosen to maximise the **Mahalanobis distance** between the centroids of the distressed and non-distressed groups. The output $Z_i$ is then compared to a threshold — classify as distressed if $Z_i$ falls on one side, non-distressed on the other.

## Variable selection via stepwise MDA

The most common implementation (used by [[2024-01-01-powell-2024-asean-accounting-early-warning-distress|Powell et al. 2024]]):

1. Start from a candidate set of financial ratios (Powell starts from 14 candidates across profitability / liquidity / leverage).
2. **Wilks's lambda** computed per ratio — smaller λ means greater between-group separation.
3. Forward-step the ratio with the smallest λ into the model.
4. Apply an **F-test entry probability** (typically 0.5) to decide whether the addition is statistically significant.
5. Apply an **F-test exclusion probability** (typically 0.10) to decide whether previously-added ratios should be removed.
6. Repeat until no further additions or removals satisfy the criteria.
7. Apply a **chi-square test** to the final discriminant function's overall significance.

The result is a parsimonious discriminant function — typically 3–6 ratios — that produces an interpretable, deployable distress score.

## Strengths

- **Closed-form, interpretable, computable from public financial statements.**
- Performance comparable to logit and probit on most samples (Bellovary et al. 2007 review: no significant accuracy difference among MDA, logit, probit; Altman et al. 2017).
- Empirically robust across decades (1968 → 2024).

## Limitations

- **Cross-context portability is weak.** [[2024-01-01-powell-2024-asean-accounting-early-warning-distress|Powell et al. 2024]] empirically establishes that MDA discriminant-function coefficients vary substantially across countries and across economic periods. Grice-Ingram 2001 documents 26 % accuracy drop when Altman's original is applied out-of-sample.
- **Assumes multivariate normality of predictors** — violated in practice by financial ratios with heavy-tailed distributions. The literature accepts this violation in exchange for interpretability.
- **Static** — single-period MDA does not capture the time-dynamic evolution of distress.
- **Equal-cost classification** — does not differentiate Type I (miss a distressed firm) from Type II (false alarm on a healthy firm), unless explicit cost-weights are added.

## Variants in the corpus

- **MDA as originally implemented**: [[altman-z-score]], 1968.
- **MDA with country-period-specific recalibration**: [[2024-01-01-powell-2024-asean-accounting-early-warning-distress|Powell 2024]] — 38 country × period discriminant functions for ASEAN.
- **MDA applied to LASSO-selected variables**: [[2022-11-28-altman-2023-omega-score-sme-default|Altman 2023]] — LASSO is used to *select* the variables from 164 candidates; MDA then constructs the [[omega-score]] from the LASSO-selected subset. The combination retains MDA's interpretability while letting modern variable-selection methods drive the choice of inputs.

## Compared to other distress-classification methods

| Method | Interpretability | Class-imbalance handling | Cross-context portability |
|---|---|---|---|
| **MDA** | High | Poor without manual weighting | Weak (Grice-Ingram 2001) |
| **Logit / Probit** | High | Moderate | Comparable to MDA |
| **Hazard / Survival** | Medium | Naturally handles censoring | Moderate |
| **Random forest** | Low | Moderate (class weights) | Better |
| **XGBoost** | Low | Better (scale_pos_weight) | Better |
| **XGBOD (SSL-enhanced)** | Low | **Best** (Hajek 2024) | Best |

The interpretability vs. accuracy tradeoff is the core design tension in this corpus: [[2022-11-28-altman-2023-omega-score-sme-default|Altman 2023]] documents an explicit AUC gap between Omega Score (MDA-based, 87.2) and XGBoost (90.3) on the same data — the 3-point gap is the price paid for interpretability.

## Sources

- [[2022-11-28-altman-2023-omega-score-sme-default]] — uses MDA on LASSO-selected variables to build the Omega Score.
- [[2024-01-01-powell-2024-asean-accounting-early-warning-distress]] — applies MDA across 6 ASEAN countries and 7 economic periods.

## Related concepts

- [[altman-z-score]] — the original MDA-derived distress score.
- [[omega-score]] — the most recent MDA-derived distress score (LASSO + MDA hybrid).
- [[financial-distress]] — the binary outcome MDA discriminates.

## Debates and supersession

MDA has *not* been superseded as the interpretable benchmark — every distress-prediction paper still reports Z-score performance as a baseline. **However**, for raw predictive accuracy, ML methods ([[2024-06-22-hajek-2024-distress-prediction-annual-reports|Hajek 2024]] XGBOD AUC 0.9864) outperform MDA on imbalanced samples. The field's resolution: use MDA as the interpretable, audit-friendly baseline; use ML when accuracy on the minority class matters more than coefficient interpretation.
