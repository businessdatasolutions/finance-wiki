---
type: artifact
artifact_kind: table
title: "Table 1 — Hypothesis-test prediction performance metrics (Altman 2023)"
source: "[[2022-11-28-altman-2023-omega-score-sme-default]]"
source_table_ref: "Table 1"
source_pages: "p. 2401"
last_confirmed: 2026-05-25
accessed_at: 2026-05-25
tags: [hypothesis-tests, lasso, omega-score, financial-distress, model-comparison, altman, payment-defaults, management-variables, employee-variables]
---

# Table 1 — Hypothesis-test prediction performance metrics

> The paper's three hypotheses tested via sequential variable-group addition. Five sequential LASSO models, each adding one variable group beyond the previous, with AUC reported at each step. **AUC climbs monotonically** as each group is added: payment-behavior variables alone deliver +6.4 AUC; management + employee variables deliver +3 AUC; the full set reaches AUC = 88.0, a **+17.6 lift** over the recalibrated Z′′ benchmark. The table is the empirical engine of the paper's central argument.

## Provenance

| Field | Value |
|---|---|
| Source | [[2022-11-28-altman-2023-omega-score-sme-default]] |
| Source's reference | Table 1 |
| Caption (verbatim) | *"Prediction performance metrics."* |
| Location | p. 2401 |
| Last confirmed | 2026-05-25 |

## Table

| # | Model | Variable groups | AUC | Δ AUC vs benchmark |
|---|---|---|---:|---:|
| (1) | Benchmark Z′′ | Financial only (recalibrated) | 70.4 | — |
| (2) | LASSO | Financial only | 79.6 | +9.2 |
| (3) | LASSO | Financial + Mgmt + Employee | 82.6 | +12.2 |
| (4) | LASSO | Financial + Payment behavior | 86.0 | +15.6 |
| (5) | **LASSO** | **Financial + Payment + Mgmt + Employee** | **88.0** | **+17.6** |

## What the table tests

The paper's three hypotheses, each tested by comparing adjacent rows:

| Hypothesis | Tested by | Evidence |
|---|---|---|
| **H1** Modern variable-selection (LASSO) improves over classical MDA | (1) vs (2) | +9.2 AUC for LASSO on the same financial-variables space. **Supported.** |
| **H2** Payment-behavior variables add predictive power | (2) vs (4) | +6.4 AUC from adding Set 2 alone. **Supported.** |
| **H3** Management + employee variables add predictive power | (2) vs (3); (4) vs (5) | +3.0 AUC from adding Sets 3+4 to financial-only; +2.0 AUC from adding Sets 3+4 to financial+payment. **Supported.** |

## Reading the AUC lifts

- **Payment-behavior is the single largest channel** (+6.4 AUC, row 4 vs row 2). This is the variable group that drives Omega Score's value-add over classical Z-score.
- **Management + employee variables add ~3 AUC each step** they are introduced. Smaller than payment-behavior but still substantial and **independent** (the +2.0 AUC from adding Mgmt+Employee to Financial+Payment shows the channels are complementary, not redundant).
- **The progression is monotone.** No variable group, when added, reduces AUC — meaning none of the three "behavioral" groups (payment, management, employee) introduces noise. This is the validity check that justifies including all of them in the final Omega Score.
- **The +17.6 AUC lift from benchmark Z′′ to full LASSO** is the paper's headline economic-significance number — translated into euros at [[altman-2023-monetary-impact]].

## Why hypothesis-test ordering matters

The paper tests **Mgmt+Employee before Payment-behavior** (row 3 before row 4) — counterintuitive given Payment-behavior turns out to be the larger channel. Reading the AUC progression, the order is justified by the *theoretical* claim of the paper: management and employee variables are the *novel* contribution (not previously in distress-prediction literature), and they need to show value-add over the financial-only baseline before the paper layers in the (less surprising) payment-behavior boost.

## Cross-references

- The variable selection from Table 2 that produced this lift: see source page §Results.
- The resulting Omega Score formulas: [[altman-2023-omega-score-formulas]].
- The performance comparison incorporating ML upper bounds: [[altman-2023-prediction-performance-comparison]] (Table 5).
- The monetary translation of this AUC lift: [[altman-2023-monetary-impact]] (Table 6).
- Variable catalogue: [[sme-distress-predictor-variables]].
- Concepts: [[omega-score]], [[financial-distress]], [[altman-z-score]].
