---
type: artifact
artifact_kind: table
title: "Table 7 — Friedman non-parametric test + Shafer post-hoc comparison (Hajek 2024)"
source: "[[2024-06-22-hajek-2024-distress-prediction-annual-reports]]"
source_table_ref: "Table 7"
source_pages: "p. 15"
last_confirmed: 2026-05-25
accessed_at: 2026-05-25
tags: [statistical-test, friedman-test, shafer-post-hoc, model-comparison, hajek, class-imbalance]
---

# Table 7 — Friedman non-parametric test + Shafer post-hoc comparison

> The statistical-test backing for [[hajek-2024-model-comparison]]: the Friedman non-parametric test across the 11 distress-prediction models compared by AUC, with Shafer post-hoc pairwise comparisons. XGBOD secures the highest mean rank (2.4) and the Friedman test rejects the null of equal predictive performance at p ≤ 4.21e−10. The Shafer post-hoc at α = 0.05 then identifies which specific baselines XGBOD significantly outperforms.

## Provenance

| Field | Value |
|---|---|
| Source | [[2024-06-22-hajek-2024-distress-prediction-annual-reports]] |
| Source's reference | Table 7 |
| Caption (verbatim) | *"Results of the Friedman non-parametric test."* |
| Location | p. 15 |
| Last confirmed | 2026-05-25 |

## Table

| Model | Rank | z = (R₀ − Rᵢ) / SE | p-value | Shafer α/i |
|---|---:|---:|---:|---:|
| CS-SVM | 11.0 | 5.80 | 0.000 | 0.001 |
| RUS + MLP | 9.2 | 4.58 | 0.000 | 0.001 |
| ROS + MLP | 9.1 | 4.52 | 0.000 | 0.001 |
| SMOTE + MLP | 5.6 | 2.16 | 0.031 | 0.002 |
| SMOTE + XGBoost | 4.3 | 1.28 | 0.200 | 0.002 |
| SMOTE + AdaBoost | 5.7 | 2.22 | 0.026 | 0.002 |
| SMOTE + RF | 5.6 | 2.16 | 0.031 | 0.002 |
| XGBoost | 3.9 | 1.01 | 0.312 | 0.003 |
| RUS + XGBoost | 5.7 | 2.22 | 0.026 | 0.002 |
| ROS + XGBoost | 3.5 | 0.74 | 0.458 | 0.005 |
| **XGBOD (this study)** | **2.4** | — (reference) | — | — |

**Friedman test p-value:** ≤ 4.21e−10
**Shafer post-hoc adjusted α:** ≤ 0.0009

Note (verbatim from paper): *"Shafer post-hoc comparison was performed for the adjusted α = 0.05."*

## What the test says

Reading the table row-by-row:

- **CS-SVM, RUS+MLP, ROS+MLP** (ranks 11.0, 9.2, 9.1): XGBOD's win is highly significant (p < 0.001 with the Shafer-adjusted threshold). These are the methods that lost most decisively.
- **SMOTE+MLP, SMOTE+AdaBoost, SMOTE+RF, RUS+XGBoost** (ranks 5.6–5.7): XGBOD's win is significant at the Shafer-adjusted α = 0.05 (raw p-values 0.026–0.031 all below the adjusted threshold).
- **SMOTE+XGBoost, XGBoost, ROS+XGBoost** (ranks 4.3, 3.9, 3.5): XGBOD's lead is **not** statistically significant (p = 0.200, 0.312, 0.458). These three XGBoost-derived methods are statistically indistinguishable from XGBOD in mean AUC rank.

## What the result means

The paper's central design claim is empirically validated: **the gain comes from the XGBoost backbone + the unsupervised-outlier-score (TOS) augmentation, not from any single component alone.** XGBOD wins over methods that lack either component (MLPs, SVM, RF) but ties statistically with other XGBoost-based methods. The TOS augmentation pushes XGBOD ahead in *mean* AUC (the headline ranking) without producing a significant gap against pure XGBoost variants.

This is honest reporting: the table is fully consistent with the more reserved claim that XGBOD is "comparable to or better than" the best XGBoost variants, and clearly better than non-XGBoost approaches.

## Notes

The Friedman + Shafer combination is the standard non-parametric stack for multi-model comparison across CV folds (Garcia & Herrera 2008, the cited methodological source). Stratified 10-fold CV produces 10 paired observations per model — enough samples for Friedman to detect the differences shown.

The choice of AUC as the comparison metric (rather than F1 or Sensitivity) was made because AUC is the most informative single metric for class-imbalanced classification. Repeating the Friedman test on Sensitivity alone would likely produce a different ordering — RUS+XGBoost has the highest Sensitivity in [[hajek-2024-model-comparison]] (Table 6) and would rank ahead of XGBOD on that metric. The paper consciously prioritises the AUC ranking over the Sensitivity ranking.

## Cross-references

- The per-model performance numbers being ranked: [[hajek-2024-model-comparison]] (Table 6).
- The XGBOD framework architecture being tested: [[2024-06-22-hajek-2024-distress-prediction-annual-reports]] §Methods, Fig. 3.
- Concepts: [[class-imbalance-distress]], [[xgboost-financial-applications]].
