---
type: artifact
artifact_kind: table
title: "Table 6 — Monetary impact of Omega's prediction improvement (Altman 2023)"
source: "[[2022-11-28-altman-2023-omega-score-sme-default]]"
source_table_ref: "Table 6"
source_pages: "p. 2408"
last_confirmed: 2026-05-25
accessed_at: 2026-05-25
tags: [monetary-impact, omega-score, sme-default, economic-significance, altman, croatia, basel]
---

# Table 6 — Monetary impact of the prediction improvement

> The paper's economic-significance table — converts the AUC lift into euros. Of €274 M total defaulted debt in the test sample, the recalibrated Z′′ benchmark misclassifies €82.5 M (172 SMEs); Omega misclassifies only €66.9 M (126 SMEs). The **€15.6 M (18.9%) improvement** is the bank-and-supplier-level economic-significance figure. At the Croatian bankruptcy recovery rate of 36% (World Bank Doing Business), unrecovered amount avoided could reach €10 M.

## Provenance

| Field | Value |
|---|---|
| Source | [[2022-11-28-altman-2023-omega-score-sme-default]] |
| Source's reference | Table 6 |
| Caption (verbatim) | *"Quantifying the improved SME default prediction (monetary values)."* |
| Location | p. 2408 |
| Last confirmed | 2026-05-25 |

## Table

| Test-sample slice | SMEs | Bank-defaulted debt | Supplier-defaulted debt | Government-defaulted debt | **Total** |
|---|---:|---:|---:|---:|---:|
| SMEs defaulted (100%) | 458 | €135.3 M | €113.9 M | €24.8 M | **€274.0 M** |
| Benchmark Type-II error (37.6%) | 172 | €41.8 M | €33.7 M | €7.0 M | **€82.5 M** |
| Omega Type-II error (28%) | 126 | €32.2 M | €28.0 M | €6.7 M | **€66.9 M** |
| **Improved prediction** | **−46** | **−€9.6 M** | **−€5.7 M** | **−€0.3 M** | **−€15.6 M** |

## What the table says

**Type-II error in this context** = a defaulted SME that the model classifies as non-distressed (i.e., a missed default that becomes a written-off loan). Reducing Type-II error means catching more defaulters before they default.

- **Sample.** 458 SMEs that actually defaulted, holding €274 M in debt across bank, supplier, and government creditors. Bank debt dominates (49%); supplier debt is second (42%); government debt is small (9%).
- **Benchmark Z′′ misses 172 of 458** (37.6% Type-II error) holding €82.5 M.
- **Omega misses 126 of 458** (28.0% Type-II error) holding €66.9 M.
- **The lift is 46 SMEs and €15.6 M** — money the wider credit ecosystem would have written off using the benchmark but doesn't have to using Omega.

**Recovery-rate adjustment.** Croatia's bankruptcy recovery rate per World Bank Doing Business is ~36%. So the €15.6 M in additional defaulted debt that Omega catches *would have*, at the benchmark's identification rate, become €15.6 M × (1 − 0.36) = **€10 M unrecovered**. That €10 M is the realised credit loss Omega prevents.

## Why supplier-debt impact is most striking

Supplier-defaulted debt is €113.9 M — 42% of total — and the Omega lift recovers €5.7 M of misclassified supplier debt. This is the under-discussed channel in distress-prediction literature: most models are calibrated to *bank* loss-given-default, but the SME ecosystem loses comparable amounts to *trade-credit* counterparties when a defaulter is missed. Omega's payment-default Set 2 captures supplier-side signal that financial-statement-only models miss.

## Extrapolation note

The Discussion section extrapolates the €15.6 M figure to the Croatian SME population: if 1,000 SMEs default annually with a similar debt distribution, Omega prevents roughly **€34 M / year in misclassified defaulted debt** compared to the benchmark Z′′. This is the order-of-magnitude argument for the operational adoption of Omega over recalibrated Z-scores in Croatian banks.

## Cross-references

- The model achieving this lift: [[altman-2023-omega-score-formulas]].
- Comparative AUC numbers: [[altman-2023-prediction-performance-comparison]] (Table 5).
- Variables driving the lift: [[sme-distress-predictor-variables]].
- Concepts: [[omega-score]], [[sme-default-prediction]], [[financial-distress]].
