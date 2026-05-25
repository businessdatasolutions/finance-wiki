---
type: artifact
artifact_kind: table
title: "Table 3 — Omega Score Groups + SME default counts and cumulative incidence (Altman 2023)"
source: "[[2022-11-28-altman-2023-omega-score-sme-default]]"
source_table_ref: "Table 3"
source_pages: "p. 2404"
last_confirmed: 2026-05-25
accessed_at: 2026-05-25
tags: [omega-score, default-thresholds, sme-default, cumulative-incidence, altman]
---

# Table 3 — Omega Score Groups + SME default counts and cumulative incidence

> Sample composition by Omega Score group for both 60-day and 30-day models. The headline takeaway is the **Gamma-group cumulative incidence**: 92.2% of high-Omega SMEs default within 60 days (and 92.4% within 30 days). Risk ratios with Alpha as reference: Beta ≈ 4.23×, Gamma ≈ 5.90×.

## Provenance

| Field | Value |
|---|---|
| Source | [[2022-11-28-altman-2023-omega-score-sme-default]] |
| Source's reference | Table 3 |
| Caption (verbatim) | *"Omega Score Groups and SME default counts."* |
| Location | p. 2404 |
| Last confirmed | 2026-05-25 |

## 60-day Regular model

| Group | Score band | Defaulted | Non-defaulted | Total | Cumulative incidence |
|---|---|---:|---:|---:|---:|
| **Alpha** (healthy) | ≤ 0.007 | — | — | — | **15.6%** |
| **Beta** (moderate-risk) | (0.007, 1.626] | — | — | — | **66.0%** |
| **Gamma** (high-risk) | ≥ 1.626 | — | — | — | **92.2%** |

(Source page reports the cumulative-incidence percentages; individual defaulted/non-defaulted counts not transcribed in the wiki ingest.)

## 30-day Early-warning model

| Group | Score band | Cumulative incidence |
|---|---|---:|
| **Alpha** (healthy) | ≤ 0.564 | **18.1%** |
| **Beta** (moderate-risk) | (0.564, 0.931] | **60.5%** |
| **Gamma** (high-risk) | ≥ 0.931 | **92.4%** |

## What the thresholds mean

The Alpha–Beta–Gamma three-band classification is the **practitioner-facing output** of Omega — instead of asking a credit-risk team to read a regression coefficient, the score buckets each SME into a risk tier. Cumulative-incidence ratios convert the score directly into expected-loss arithmetic.

**Risk-ratio reading** (Alpha as reference):

| Group | 60-day RR | 30-day RR |
|---|---:|---:|
| Alpha | 1.00× | 1.00× |
| Beta | 4.23× | 3.34× |
| Gamma | **5.91×** | **5.10×** |

The Gamma RR is the headline: an SME landing in the high-risk band is **~6× more likely** to default within 60 days than a baseline-Alpha SME.

**Threshold asymmetry across models.** The 60-day model's Beta–Gamma boundary (Omega = 1.626) is much higher than the 30-day model's (0.931) because the 30-day formula has different variable composition (sees personnel-cost pressure earlier; doesn't see management change). The headline cumulative-incidence rates (92.2% / 92.4%) are nonetheless very similar — both models identify high-risk SMEs equally well at the threshold, but they differ in *which* SMEs they classify there.

## Cross-references

- The Omega Score formulas that produce these scores: [[altman-2023-omega-score-formulas]].
- Performance vs. baselines: [[altman-2023-prediction-performance-comparison]] (Table 5).
- Variable catalogue: [[sme-distress-predictor-variables]].
- Concepts: [[omega-score]], [[financial-distress]], [[sme-default-prediction]].
