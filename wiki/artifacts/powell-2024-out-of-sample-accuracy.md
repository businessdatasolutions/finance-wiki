---
type: artifact
artifact_kind: table
title: "Appendix Table C2 — Out-of-sample classification accuracy (Approaches 2 + 3) (Powell 2024)"
source: "[[2024-01-01-powell-2024-asean-accounting-early-warning-distress]]"
source_table_ref: "Appendix Table C2"
source_pages: "p. 4124"
last_confirmed: 2026-05-25
accessed_at: 2026-05-25
tags: [classification-accuracy, mda, out-of-sample, financial-distress, asean, forward-testing, back-testing, powell, chi-square]
---

# Appendix Table C2 — Out-of-sample classification accuracy

> Predictive accuracy of the [[powell-2024-out-of-sample-discriminant-functions|Approach 2 + Approach 3 out-of-sample discriminant functions]]. Six countries × 6 period-and-approach combinations, with distressed-class accuracy, non-distressed-class accuracy, and χ² significance per cell. The headline reading: **out-of-sample accuracy is substantially lower than in-sample**, confirming that MDA functions do not transfer cleanly across macro regimes. Singapore Approach 2 AFC and Singapore Approach 2 Stable Period are the only cells where χ² fails to reach significance (2.155 and 7.005 respectively).

## Provenance

| Field | Value |
|---|---|
| Source | [[2024-01-01-powell-2024-asean-accounting-early-warning-distress]] |
| Source's reference | Appendix Table C2 |
| Caption (verbatim) | *"Percentage of correct prediction rates from out-of-sample testing in multiple discriminant analysis models."* |
| Location | p. 4124 (Appendix C) |
| Last confirmed | 2026-05-25 |

## Reading the table layout

Columns 1–3 are **Approach 3 (back-testing)** — train on 2007–2016 GFC–Current data, test on 1997–2006 AFC / Post-AFC / Pre-GFC.
Columns 4–6 are **Approach 2 (forward-testing)** — train on 1997–2006 AFC–Pre-GFC data, test on 2007–2009 GFC / 2010–2012 Post-GFC / 2013–2016 Stable.

Each country row has three sub-rows: Distressed accuracy / Non-distressed accuracy / χ² statistic. Significance: `**` = p < 0.05, `***` = p < 0.01.

## Table

| Country | Class / stat | AFC (A3 back) | Post-AFC (A3 back) | Pre-GFC (A3 back) | GFC (A2 forward) | Post-GFC (A2 forward) | Stable (A2 forward) |
|---|---|---:|---:|---:|---:|---:|---:|
| **Indonesia** | Distressed | 70.1% | 63.3% | 63.6% | 75.0% | 80.0% | 50.0% |
| | Non-distressed | 78.5% | 88.5% | 84.6% | 79.8% | 92.3% | 98.9% |
| | χ² | 119.663*** | 63.820*** | 54.455*** | 28.933*** | 63.710*** | 86.883*** |
| **Malaysia** | Distressed | 31.7% | 56.0% | 46.2% | 60.5% | 73.7% | 65.8% |
| | Non-distressed | 94.8% | 85.4% | 88.4% | 80.8% | 84.1% | 68.2% |
| | χ² | 14.303*** | 34.215*** | 30.636*** | 49.480*** | 90.695*** | 15.192*** |
| **The Philippines** | Distressed | 50.0% | 51.7% | 47.1% | 85.2% | 44.7% | 46.8% |
| | Non-distressed | 60.2% | 87.4% | 91.6% | 87.5% | 87.3% | 92.9% |
| | χ² | 15.311** | 54.820*** | 33.146*** | 38.190*** | 65.561*** | 77.822*** |
| **Singapore** | Distressed | 46.4% | 52.0% | 80.0% | 75.0% | 52.9% | 61.9% |
| | Non-distressed | 91.0% | 91.8% | 78.7% | 87.9% | 78.4% | 65.7% |
| | χ² | 2.155 *(n.s.)* | 21.013*** | 29.602*** | 42.125*** | 18.569*** | 7.005 *(n.s.)* |
| **Thailand** | Distressed | 68.6% | 55.3% | 67.3% | 62.0% | 87.5% | 25.0% |
| | Non-distressed | 81.2% | 82.7% | 93.9% | 91.0% | 82.3% | 94.0% |
| | χ² | 82.333*** | 32.030*** | 72.472*** | 85.226*** | 52.855*** | 45.946*** |
| **Total ASEAN** | Distressed | 53.5% | 45.2% | 38.9% | 68.4% | 67.6% | 60.1% |
| | Non-distressed | 87.7% | 91.7% | 92.4% | 71.0% | 71.6% | 75.2% |
| | χ² | 68.709*** | 144.343*** | 13.938- | 135.048*** | 169.720*** | 146.255*** |

Vietnam is **excluded** from this table — insufficient data to build an Approach-3 model spanning AFC to Pre-GFC.

## Headline findings

**Out-of-sample accuracy is much lower than in-sample.** Compare Total ASEAN distressed-class accuracy:

| | In-sample (Approach 1) | Out-of-sample (Approach 2 + 3) |
|---|---:|---:|
| Distressed (overall) | 61.1% | 38.9–68.4% (mean ≈ 56%) |
| Non-distressed (overall) | 81.9% | 71.0–92.4% (mean ≈ 82%) |

The non-distressed class transfers reasonably well across approaches; the distressed class loses ~5–20 percentage points on average — confirming **Type I error blow-out in out-of-sample testing**, which is the Grice-Ingram 2001 critique Powell's paper validates.

**Per-country differences:**

- **Indonesia** is the most transferable — Approach 3 back-testing AFC achieves 70.1% distressed accuracy + 78.5% non-distressed, both with very high χ² (119.7). Indonesian distress signatures are stable across macro regimes.
- **Malaysia's AFC distressed accuracy drops to 31.7%** under back-testing — the worst single cell in the entire table for distressed-class accuracy among significant tests. Models trained on 2007–2016 Malaysian data don't transfer back to the AFC.
- **Singapore Approach 2 AFC** (χ² = 2.155, not significant) is the cleanest failure — Approach-2 functions estimated on AFC–Pre-GFC Singaporean data don't discriminate any better than chance on the GFC–Current test sample. The Singapore market structure changed substantially between the two periods.
- **The Philippines GFC** (Approach 2: 85.2% distressed) is the highest distressed-class accuracy out-of-sample. The 2007–2009 GFC was a clear-signal period for Philippine distressed firms.
- **Thailand Stable period** (Approach 2: 25.0% distressed) is the worst distressed-class accuracy of any significant cell. Models trained on the AFC don't transfer to the Stable period for Thailand — the distress-firm profile changed substantially over 16 years.

## What the appendix means for deployment

This appendix is what justifies the paper's central recommendation: **do not deploy any single MDA function across macro regimes**. The reduction in distressed-class accuracy from 61.1% (in-sample) to 38.9–68.4% (out-of-sample) is a 10–40% loss in the metric that matters most (catching distressed firms). The "stable period" trained models perform worst — the further the test data is from the training data in macro-regime characteristics, the worse the model degrades.

Practical implication for ASEAN credit officers: estimate MDA functions on the most recent 2–3 years of data and re-estimate annually. The temptation to use a single "stable" function across the cycle is empirically defeated by this table.

## Cross-references

- The discriminant functions whose accuracy is reported here: [[powell-2024-out-of-sample-discriminant-functions]] (Appendix Table C1).
- In-sample (Approach 1) accuracy comparison: [[powell-2024-classification-accuracy]] (Table 6).
- Country-period coefficient instability that drives this accuracy loss: [[powell-2024-country-discriminant-functions]] (Table 4).
- Concepts: [[multiple-discriminant-analysis]], [[financial-distress]].
