---
type: artifact
artifact_kind: table
title: "Appendix Table A.1 — SSL hyperparameter grid for XGBOD + 6 outlier detectors (Hajek 2024)"
source: "[[2024-06-22-hajek-2024-distress-prediction-annual-reports]]"
source_table_ref: "Appendix Table A.1"
source_pages: "p. 19 (Appendix)"
last_confirmed: 2026-05-25
accessed_at: 2026-05-25
tags: [hyperparameter-grid, xgbod, xgboost, unsupervised-outlier-detection, knn, lof, hbos, ocsvm, loda, isolation-forest, pyod, hajek, reproducibility]
---

# Appendix Table A.1 — SSL hyperparameter grid

> The hyperparameter grids used by Hajek & Munk for the semi-supervised XGBOD pipeline and its six constituent unsupervised outlier detectors. Reproducibility-grade detail: with this table plus the [[hajek-2024-financial-features|23 financial features]] + [[hajek-2024-bertopic-risk-categories|26 BERTopic topics]] + the PyOD library reference, the [[hajek-2024-model-comparison|XGBOD pipeline]] is fully reconstructable. Each row shows the grid the paper searched across; final selections are documented in source-page §Methods (estimator count = 30; tree depth = 15; learning rate = 0.1).

## Provenance

| Field | Value |
|---|---|
| Source | [[2024-06-22-hajek-2024-distress-prediction-annual-reports]] |
| Source's reference | Appendix Table A.1 |
| Caption (verbatim) | *"Settings of the SSL hyperparameters."* |
| Location | p. 19 (Appendix) |
| Implementation | PyOD library — https://github.com/yzhao062/pyod |
| Last confirmed | 2026-05-25 |

## XGBOD components

| Method | Hyperparameters (search grid) |
|---|---|
| **XGBOD** | estimator list = {KNN, LOF, HBOS, OCSVM, LODA, Isolation Forest}; *p* (selected TOS features) = {5, 10, 15, 20, 30, 50} |
| **XGBoost** (final classifier) | booster = `gbtree`; learning rate = {0.01, 0.05, 0.1, 0.2, 0.3}; gamma = 0; max depth = {3, 5, 10, 15, 20, 30}; sampling method = `uniform`; lambda = 1; alpha = 0 |

## Unsupervised outlier detectors used in XGBOD

| Method | Hyperparameters (search grid) |
|---|---|
| **KNN** (k-nearest neighbor) | k = {1, 3, 5, 10, 20, 30, 40, 50}; radius = 1.0 |
| **LOF** (local outlier factor) | k = {1, 3, 5, 10, 20, 30, 40, 50}; metric = Minkowski; contamination = proportion of outliers in training data |
| **HBOS** (histogram-based outlier detection) | number of bins = {5, 10, 15, 20, 25, 30, 50}; alpha regularizer = 0.1 |
| **OCSVM** (one-class SVM) | nu = {0.01, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.99}; RBF kernel function with gamma = 0.01 |
| **LODA** (lightweight on-line detector of anomalies) | number of bins = {5, 10, 15, 20, 25, 30, 50}; number of random cuts = 100 |
| **Isolation Forest** | number of estimators = {10, 20, 50, 70, 100, 150, 200} |

## Final configuration (after grid-search on training fold)

Per the source page §Methods:

- **30 unsupervised estimators** total — the XGBOD selection cap.
- **Max tree depth = 15** for the XGBoost classifier.
- **Learning rate = 0.1**.
- **5-fold CV** on the training fold for hyperparameter selection (nested within the outer stratified 10-fold CV of [[hajek-2024-model-comparison]]).

## Why this matters

The XGBOD pipeline is the methodological contribution of [[2024-06-22-hajek-2024-distress-prediction-annual-reports|Hajek 2024]] — it combines six fundamentally different unsupervised outlier-detection paradigms (distance-based, density-based, histogram-based, SVM-based, projection-based, isolation-based) and lets XGBoost learn a weighted combination via the TOS-selection mechanism (Ψ(TOSᵢ) — see source §Methods, Eq. 2). The grid in this table is what makes the pipeline **reproducible**: without it, the "30 unsupervised estimators" headline number is uninterpretable (30 of which kind, with what parameters?).

The choice of six detection paradigms is the paper's hedge against any single detection mechanism being biased on financial-distress data. KNN and LOF assume distance/density structure; HBOS and LODA assume distributional structure; OCSVM assumes kernel-mappable separability; Isolation Forest assumes tree-partition-isolatable outliers. By including all six, XGBOD's TOS-selection picks whichever paradigms add discriminative signal *for this dataset* — empirically demonstrated by the +AUC lift over plain XGBoost in [[hajek-2024-model-comparison]] (0.9864 vs. 0.9739).

## Cross-references

- The pipeline this grid configures: [[hajek-2024-model-comparison]] (Table 6 results).
- The feature space the pipeline runs on: [[hajek-2024-financial-features]] (x₁–x₂₃) + [[hajek-2024-bertopic-risk-categories]] (x₂₅–x₅₀).
- Statistical significance of XGBOD vs baselines: [[hajek-2024-friedman-test]] (Table 7).
- Concepts: [[xgboost-financial-applications]], [[class-imbalance-distress]].
