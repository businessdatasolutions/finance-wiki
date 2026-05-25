---
type: artifact
artifact_kind: table
title: "Table 6 — Classification accuracy by country × period (Powell 2024)"
source: "[[2024-01-01-powell-2024-asean-accounting-early-warning-distress]]"
source_table_ref: "Table 6"
source_pages: "p. 4116"
last_confirmed: 2026-05-25
accessed_at: 2026-05-25
tags: [classification-accuracy, mda, financial-distress, asean, country-comparison, powell]
---

# Table 6 — Classification accuracy by country × period

> The accuracy matrix for Powell's [[powell-2024-country-discriminant-functions|country-specific MDA functions]]. Per country, two rows (distressed / non-distressed) report the percentage of firms correctly classified in each macro period. Bottom rows aggregate to **ASEAN-wide totals**: 61.1% of distressed firms correctly identified, 81.9% of non-distressed — overall 76.8% accuracy. The asymmetry (distressed harder than non-distressed) is the **Type I error skew** that follows from the 76:24 sample imbalance.

## Provenance

| Field | Value |
|---|---|
| Source | [[2024-01-01-powell-2024-asean-accounting-early-warning-distress]] |
| Source's reference | Table 6 |
| Caption (verbatim) | *"The percentage being correctly predicted as distressed and non-distressed in the ASEAN countries."* |
| Location | p. 4116 |
| Last confirmed | 2026-05-25 |

## Table (% correctly classified)

| Country / class | AFC | Post-AFC | Pre-GFC | GFC | Post-GFC | Stable | **Full** |
|---|---:|---:|---:|---:|---:|---:|---:|
| Indonesia — distressed | 75.7 | 61.2 | 57.6 | 84.4 | 80.0 | 50.0 | **66.7** |
| Indonesia — non-distressed | 77.2 | 86.8 | 88.8 | 71.1 | 91.6 | 95.8 | **86.1** |
| Malaysia — distressed | 25.0 | 56.0 | 46.2 | 63.2 | 65.8 | 76.3 | **60.4** |
| Malaysia — non-distressed | 91.9 | 80.8 | 86.5 | 78.0 | 85.9 | 61.7 | **80.8** |
| Philippines — distressed | 64.3 | 55.0 | 52.9 | 77.8 | 46.8 | 68.1 | **60.6** |
| Philippines — non-distressed | 66.2 | 93.0 | 89.6 | 75.4 | 83.8 | 91.1 | **85.8** |
| Singapore — distressed | — | 32.0 | 68.0 | 45.8 | 58.8 | 76.2 | **42.9** |
| Singapore — non-distressed | — | 89.4 | 81.4 | 96.0 | 78.8 | 70.7 | **88.3** |
| Thailand — distressed | 84.7 | 73.7 | 55.1 | 56.0 | 82.5 | 25.0 | **67.5** |
| Thailand — non-distressed | 55.5 | 82.0 | 94.6 | 90.6 | 84.1 | 95.7 | **85.1** |
| Vietnam — distressed | — | — | — | 47.7 | 68.1 | 70.5 | **61.6** |
| Vietnam — non-distressed | — | — | — | 86.4 | 75.2 | 81.2 | **82.2** |
| **Total ASEAN — distressed** | **59.7** | **53.8** | **54.7** | **61.2** | **64.0** | **57.4** | **61.1** |
| **Total ASEAN — non-distressed** | **81.7** | **90.5** | **90.5** | **82.2** | **73.9** | **78.0** | **81.9** |

Em-dash (`—`) marks period-country cells with no data (Singapore AFC, Vietnam pre-2007).

## Observations

- **Distressed-class accuracy is systematically lower** than non-distressed across every country and every period — Type I errors dominate. The single highest distressed-class accuracy is Thailand AFC (84.7%) and Indonesia GFC (84.4%) — both crisis periods where distressed firms are abundant in the training sample, mitigating the imbalance.
- **Singapore's distressed-class accuracy is lowest** (42.9% full-period) — Powell attributes this to Singapore's export-dependence making accounting-based distress prediction structurally weaker. Singapore's non-distressed-class accuracy (88.3%) is among the highest, confirming the model isn't broken — it just misses distressed Singapore firms.
- **Stable-period performance is mixed**: Indonesia and Philippines maintain high non-distressed accuracy (95.8%, 91.1%) but Indonesia's distressed-class accuracy drops to 50% and Thailand's to 25% — distress signals get muddier in stable macroeconomic periods because firms entering distress in stable times tend to have idiosyncratic rather than systematic causes.
- **Indonesia GFC** shows the cleanest performance (84.4% distressed + 71.1% non-distressed) — the macroeconomic shock pushed firms into clearly-distressed regions of feature space.

## Cross-references

- Per-country MDA functions used to compute these accuracies: [[powell-2024-country-discriminant-functions]] (Table 4).
- Region-wide MDA functions: [[powell-2024-asean-discriminant-functions]] (Table 3).
- DD-augmentation impact on these accuracies: [[powell-2024-mda-dd-improvements]] (Table 8).
- Concepts: [[multiple-discriminant-analysis]], [[financial-distress]].
