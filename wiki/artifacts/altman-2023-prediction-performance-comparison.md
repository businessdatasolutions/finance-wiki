---
type: artifact
artifact_kind: table
title: "Table 5 — Z′′, Omega and ML model performance comparison (Altman 2023)"
source: "[[2022-11-28-altman-2023-omega-score-sme-default]]"
source_table_ref: "Table 5"
source_pages: "p. 2407"
last_confirmed: 2026-05-25
accessed_at: 2026-05-25
tags: [model-comparison, omega-score, random-forest, xgboost, z-score, financial-distress, interpretability-accuracy-tradeoff, altman]
---

# Table 5 — Z′′, Omega and ML model performance comparison

> The empirical core of Altman et al.'s interpretability-vs-accuracy argument. Compares the recalibrated Z′′ benchmark, the Omega Score (group + continuous), and two ML upper bounds (Random Forest, XGBoost) on the same Croatian SME test sample. XGBoost achieves the ceiling AUC of 90.3 ("outstanding"); the continuous Omega Score reaches 87.2, capturing **most of the ML lift at much higher interpretability**. The 3-point AUC gap between Omega and XGBoost is the central design trade-off the paper centres on.

## Provenance

| Field | Value |
|---|---|
| Source | [[2022-11-28-altman-2023-omega-score-sme-default]] |
| Source's reference | Table 5 |
| Caption (verbatim) | *"Prediction performance metrics: Z′′, Omega Score and machine-learning models."* |
| Location | p. 2407 |
| Last confirmed | 2026-05-25 |

## Table

| Model | AUC | Δ AUC vs benchmark | Accuracy | Specificity |
|---|---:|---:|---:|---:|
| Benchmark Z′′ (recalibrated) | 70.4 | — | 65.6 | 66.4 |
| Omega Score Groups (Alpha/Beta/Gamma) | 82.2 | +11.8 | 78.4 | 71.4 |
| **Omega Score (continuous)** | **87.2** | **+16.8** | 78.4 | 82.0 |
| Random forest | 89.0 | +18.6 | 81.4 | 79.7 |
| **XGBoost** | **90.3** | **+19.9** | 82.6 | 78.6 |

## Reading the table

1. **The recalibrated Z′′ benchmark** at 70.4 AUC is already a strong baseline — Altman 1968's original score recalibrated on Croatian data. The +16.8 lift to continuous Omega (87.2) is the paper's headline claim.
2. **Omega Groups vs continuous Omega:** the three-band categorical version (82.2) loses 5 AUC points vs the continuous score (87.2). The continuous output is preferred for risk-pricing applications; the categorical version trades AUC for explainability to non-quant credit officers.
3. **Random Forest vs XGBoost:** both nonlinear methods exceed Omega — but only by a thin margin. XGBoost's ceiling 90.3 is just 3.1 AUC points above Omega's 87.2, suggesting the structured-data signal is largely captured by linear MDA once the right variable set is included.
4. **Specificity wins for continuous Omega.** Among the three "practitioner-deployable" models (benchmark, Omega Groups, continuous Omega), the continuous Omega achieves the highest specificity (82.0) — i.e. fewest false-positive risk assignments. This is the metric a credit officer cares about: don't decline good loans.
5. **The XGBoost win is also Omega's win.** Figure 1 of the source paper shows Omega Score is XGBoost's most important feature *by a wide margin* — meaning XGBoost gets its lift not from finding *new* signal but from squeezing slightly more out of Omega's components via nonlinearity. The Omega Score remains both interpretable *and* the dominant signal.

## The interpretability-vs-accuracy trade-off

The +3.1 AUC gap between continuous Omega (87.2) and XGBoost (90.3) is the cost of interpretability. The Discussion frames this trade-off explicitly:

- For **credit scoring** (where each decision is explainable to the borrower), Omega is the right tool. The 3 AUC points cost 3 percentage points of borderline-case misclassification, but every Omega rejection has a transparent rationale.
- For **portfolio risk** (where aggregate accuracy matters and individual explanations are not required), the +3 AUC justifies XGBoost. The marginal SMEs that XGBoost catches better than Omega translate to material expected-loss savings at scale.
- For **regulatory reporting** under Basel-style internal-ratings-based approaches, Omega is preferred because the explainability requirement is statutory.

## Cross-references

- The Omega Score formulas being benchmarked: [[altman-2023-omega-score-formulas]].
- The variable selection that produced Omega: [[sme-distress-predictor-variables]].
- The default-rate thresholds: [[altman-2023-omega-score-groups]] (Table 3).
- Monetary impact of the lift: [[altman-2023-monetary-impact]] (Table 6).
- Concepts: [[omega-score]], [[altman-z-score]], [[financial-distress]], [[xgboost-financial-applications]].
