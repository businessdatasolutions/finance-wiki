---
type: artifact
artifact_kind: table
title: "Appendix Table A1 — Research-population company counts per ASEAN country (Powell 2024)"
source: "[[2024-01-01-powell-2024-asean-accounting-early-warning-distress]]"
source_table_ref: "Appendix Table A1"
source_pages: "p. 4122"
last_confirmed: 2026-05-25
accessed_at: 2026-05-25
tags: [sample-composition, asean, financial-distress, powell, datastream, listed-vs-delisted]
---

# Appendix Table A1 — Research-population company counts per ASEAN country

> Sample-composition reference for the Powell 2024 study. Listed vs. delisted counts per country across the 1997–2016 study window, sourced from DataStream (2016). The skew toward delisted firms in Singapore (143 listed vs **650 delisted**) and Thailand (563 vs **750**) reflects the long study window during which both markets had substantial delisting activity (privatisations, mergers, voluntary going-private, exchange-rule expulsions). Vietnam's small delisted count (88) reflects its later market opening (sample begins 2007).

## Provenance

| Field | Value |
|---|---|
| Source | [[2024-01-01-powell-2024-asean-accounting-early-warning-distress]] |
| Source's reference | Appendix Table A1 |
| Caption (verbatim) | *"Number of companies in the research population."* |
| Location | p. 4122 (Appendix A) |
| Data source | DataStream (2016) |
| Last confirmed | 2026-05-25 |

## Table

| Country | Number of listed companies | Number of delisted companies |
|---|---:|---:|
| Indonesia | 539 | 372 |
| Malaysia | 797 | 363 |
| The Philippines | 271 | 63 |
| Singapore | 143 | 650 |
| Thailand | 563 | 750 |
| Vietnam | 699 | 88 |

## Reading the table

- **Singapore is the outlier** — 4.5× more delisted than listed (143 vs 650). The Singapore Exchange (SGX) has historically had a high delisting rate driven by sponsor-led privatisations and merger activity. Reading [[powell-2024-classification-accuracy]] alongside this table: Singapore's distressed-class predictive accuracy is the lowest in the sample (42.9% full-period) — partly because the distressed-firm category is over-represented by delisted firms with very different underlying causes.
- **Thailand has the highest delisted count** (750) and the highest listed count among countries with strong delisting (563). The 1997 AFC originated in Thailand and produced a long wave of distress-driven delistings.
- **Vietnam is the youngest market** — 699 listed vs only 88 delisted. The Ho Chi Minh Stock Exchange opened in 2000 (HASTC followed in 2005), so the 1997 sample start is largely empty for Vietnam. Powell handles this by restricting Vietnam's sample to 2007–2016.
- **The Philippines is the smallest market** in both listed (271) and delisted (63). The PSE has historically had ~250–300 listed firms.

## What this means for sample interpretation

The 720-firm analytic sample (cited in the source page §Methods) is *not* the full research population in this table — it's a stratified subset chosen for data completeness (firms with complete accounting variables across the relevant periods). The full population shown here is ~5,000 firm-instances across the six countries; sample-selection bias toward firms with complete DataStream coverage is the principal threat to external validity, acknowledged but not formally tested in the paper.

## Cross-references

- The classification accuracy on the analytic subsample: [[powell-2024-classification-accuracy]] (Table 6).
- The per-country discriminant functions estimated on the subsample: [[powell-2024-country-discriminant-functions]] (Table 4).
- The out-of-sample (Approaches 2 + 3) versions: [[powell-2024-out-of-sample-discriminant-functions]] (Appendix Table C1), [[powell-2024-out-of-sample-accuracy]] (Appendix Table C2).
- Concepts: [[multiple-discriminant-analysis]], [[financial-distress]].
