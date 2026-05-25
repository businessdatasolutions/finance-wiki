---
type: artifact
artifact_kind: table
title: "Table 6 — Classification performance of 11 distress-prediction models (Hajek 2024)"
source: "[[2024-06-22-hajek-2024-distress-prediction-annual-reports]]"
source_table_ref: "Table 6"
source_pages: "p. 14"
last_confirmed: 2026-05-25
accessed_at: 2026-05-25
tags: [model-comparison, distress-prediction, xgbod, class-imbalance, smote, auc, sensitivity, hajek]
---

# Table 6 — Classification performance of 11 distress-prediction models

> Hajek & Munk's headline benchmarking table. Eleven distress-prediction models compared on a global-firm sample (N=2,545; distressed=98, 3.9%) — XGBOD (this study) against ten prior-literature baselines. Reported metrics are mean ± SD across stratified 10-fold cross-validation. The story the table tells: **only XGBOD reaches high AUC AND high sensitivity simultaneously** — every other high-AUC model collapses on sensitivity (the metric that actually matters for distress prediction, where the cost of missing a distressed firm dominates the cost of a false alarm).

## Provenance

| Field | Value |
|---|---|
| Source | [[2024-06-22-hajek-2024-distress-prediction-annual-reports]] |
| Source's reference | Table 6 |
| Caption (verbatim) | *"Classification performance of compared methods (the best result is in bold)."* |
| Location | p. 14 |
| Last confirmed | 2026-05-25 |

## Table

| Model | Acc | F1 | AUC | Sensitivity |
|---|---:|---:|---:|---:|
| CS-SVM (Zieba et al. 2016) | 0.8039 ± 0.0844 | 0.8848 ± 0.0581 | 0.7510 ± 0.0984 | 0.7474 ± 0.2159 |
| RUS + MLP (Zhou 2013) | 0.8777 ± 0.0123 | 0.9327 ± 0.0074 | 0.9085 ± 0.0128 | 0.8563 ± 0.0770 |
| ROS + MLP (Zhou 2013) | 0.8883 ± 0.0610 | 0.9377 ± 0.0072 | 0.9055 ± 0.0103 | 0.7969 ± 0.1486 |
| SMOTE + MLP (Zhou 2013) | 0.9591 ± 0.0079 | 0.9619 ± 0.0072 | 0.9325 ± 0.0058 | 0.6300 ± 0.0455 |
| SMOTE + XGBoost (Le 2022) | 0.9739 ± 0.0049 | **0.9733 ± 0.0026** | 0.9725 ± 0.0117 | 0.6026 ± 0.0447 |
| SMOTE + AdaBoost (Faris et al. 2020) | 0.9627 ± 0.0051 | 0.9636 ± 0.0028 | 0.9630 ± 0.0102 | 0.5821 ± 0.0545 |
| SMOTE + RF (Veganzones & Séverin 2018) | 0.9702 ± 0.0039 | 0.9684 ± 0.0020 | 0.9642 ± 0.0098 | 0.5089 ± 0.0776 |
| XGBoost (Park et al. 2021) | 0.9727 ± 0.0045 | 0.9708 ± 0.0023 | 0.9739 ± 0.0111 | 0.5100 ± 0.0260 |
| RUS + XGBoost | 0.9194 ± 0.0107 | 0.9564 ± 0.0061 | 0.9657 ± 0.0109 | **0.8979 ± 0.0317** |
| ROS + XGBoost | 0.9614 ± 0.0090 | 0.9656 ± 0.0047 | 0.9762 ± 0.0260 | 0.7453 ± 0.0427 |
| **XGBOD (this study)** | **0.9749 ± 0.0078** | 0.9717 ± 0.0093 | **0.9864 ± 0.0076** | 0.8616 ± 0.0616 |

Bold values mark the best result per column (per the paper's note). XGBOD wins on Accuracy and AUC; RUS+XGBoost wins on Sensitivity; SMOTE+XGBoost wins on F1.

## What the numbers say (three interpretations)

1. **AUC and sensitivity together** — most prior methods achieve high AUC (>0.96) but at the cost of low sensitivity (<0.62 for SMOTE-based variants). The naive "high accuracy" of SMOTE + RF (0.9702 Acc) is misleading — sensitivity is only 0.51, meaning the classifier misses half the distressed firms.
2. **Random under-sampling (RUS) variants** achieve high sensitivity (0.86–0.90) but at the cost of accuracy (RUS+MLP 0.88 Acc, RUS+XGBoost 0.92 Acc).
3. **XGBOD reaches both** — AUC 0.9864 and Sensitivity 0.8616 — the design of integrating unsupervised outlier scores acts as a smart re-sampling alternative that doesn't lose information.

## Statistical significance

The pairwise McNemar test plus the Friedman + Shafer post-hoc test (see [[hajek-2024-friedman-test]]) confirms XGBOD significantly outperforms all benchmarks **except** XGBoost, SMOTE+XGBoost, and ROS+XGBoost (all of which are XGBoost-derived). Implication: the gain comes from the **XGBoost backbone + the unsupervised-outlier-score augmentation**, not from any single component alone.

## Notes

The benchmark comparison is unusually thorough — eleven models across four families (SVM, MLP, XGBoost-based, RF). Most distress-prediction papers compare fewer than half this many baselines. The use of stratified 10-fold CV with reported SDs makes the rank ordering defensible against single-fold noise.

The metric set (Acc, F1, AUC, Sensitivity) is the right combination for class-imbalanced classification: Acc alone is gameable (a "predict all non-distressed" model scores 0.961); AUC measures discrimination; Sensitivity measures false-negative recovery; F1 measures the precision-sensitivity trade-off. The paper's choice not to report Specificity is justifiable given the imbalance — Specificity is trivially high.

## Cross-references

- Statistical-test backing: [[hajek-2024-friedman-test]] (Table 7).
- The financial inputs to the joint model: [[hajek-2024-financial-features]] (Table 2).
- The linguistic inputs to the joint model: [[hajek-2024-bertopic-risk-categories]] (Table 4).
- Prior-literature predecessors: [[hajek-2024-prior-nlp-distress-literature]] (Table 1).
- Concepts: [[class-imbalance-distress]], [[xgboost-financial-applications]], [[financial-distress]].
