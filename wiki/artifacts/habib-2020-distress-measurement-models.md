---
type: artifact
artifact_kind: table
title: "Table 1 — Distress measurement models with formulas and counts (Habib 2020)"
source: "[[2020-01-01-habib-2020-distress-determinants-consequences-review]]"
source_table_ref: "Table 1"
source_pages: "pp. 1028–1033"
last_confirmed: 2026-05-25
accessed_at: 2026-05-25
tags: [distress-measurement, financial-distress, z-score, o-score, zmijewski, merton, hillegeist, campbell, sudarsanam, habib]
---

# Table 1 — Distress measurement models

> Habib's catalogue of distress-measurement formulas used across the determinants and consequences literature. Two channels: **accounting-based** (Altman Z, Ohlson O, Zmijewski, Sudarsanam-Lai Z, rudimentary signal-based classifications) and **market-based** (Hillegeist BSM-Prob, Merton DTD, Campbell et al. CHS). Counts in the final two columns track how many surveyed papers used each measure as their distress operationalisation — for **determinants** studies and **consequences** studies respectively. The accounting-based : market-based usage ratio is roughly 8:1, the review's headline empirical observation about *what the field actually uses*.

## Provenance

| Field | Value |
|---|---|
| Source | [[2020-01-01-habib-2020-distress-determinants-consequences-review]] |
| Source's reference | Table 1 |
| Caption (verbatim) | *"Models commonly used to identify financially distressed firms."* |
| Location | pp. 1028–1033 (6-page spread) |
| Last confirmed | 2026-05-25 |

## Accounting-based models

| Model | Formula | Interpretation | Determinants studies | Consequences studies |
|---|---|---|---:|---:|
| **Altman (1968) Z-score** | `Z = 1.2 A + 1.4 B + 3.3 C + 0.6 D + 1.0 E` where A = WC/TA, B = RE/TA, C = EBIT/TA, D = MVE/TL, E = Sales/TA | Z > 2.67 sound; Z < 1.81 distressed; 1.81 ≤ Z ≤ 2.67 grey zone | **6** | **12** |
| **Ohlson (1980) O-score** | 9-factor linear combination → exp(O) / (1 + exp(O)) | Probability > 0.5 indicates high default likelihood | 2 | 6 |
| **Zmijewski (1984) probit** | `Zm = −4.336 − 4.513 X₁ + 5.679 X₂ − 0.004 X₃` where X₁ = NI/TA, X₂ = TD/TA, X₃ = CA/CL | Probability > 0.5 → bankrupt | 1 | 8 |
| **Sudarsanam-Lai (2001) — Taffler's Z** | Profit-before-tax/current liabilities; Current assets/total liabilities; Current liabilities/total assets; No-credit interval | A "positive, positive, negative" definition: positive Z-scores in the two previous years and negative Z-score in the current year | 1 | 5 |
| **Distress/non-distress classification** (Giroux & Wiggins 1984; McKeown et al. 1991; Hopwood et al. 1994; Ward 1994; Mutchler & Hopwood 1997) | A company is stressed if it exhibits at least one of: (i) negative working capital, (ii) bottom-line net loss, (iii) both, (iv) negative operating cash flow, (v) both OCF and net loss | Rudimentary multi-signal classification | **13** | 9 |
| **Rudimentary indicators** | Negative working capital / negative OCF / interest coverage <1 / sample restriction by financial-distress proxy | Several papers in the review use one or more rudimentary indicators in addition to a formal model | several | several |

## Market-based models

| Model | Formula | Interpretation | Determinants studies | Consequences studies |
|---|---|---|---:|---:|
| **Hillegeist et al. (2004) BSM-Prob** | `P = N[(ln(V_A / X) + (μ − δ − 0.5 σ_A²) T) / (σ_A √T)]` — Black-Scholes-Merton probability of bankruptcy | Higher BSM-Prob → larger expected equity-value decrease per unit asset-value decline → more litigation, more covenant violations | 0 | 1 |
| **Merton (1974) Distance-to-Default (DTD)** | `DTD = (V_A − X) / (V_A σ_A)` (simplified form; Habib's Table 1 gives full Bharath-Shumway derivation) | Number of standard deviations the firm's asset value can fall before default | 2 | 4 |
| **Campbell, Hilscher & Szilagyi (2008) CHS** | `CHS = −20.26 NIMTAAVG + 1.42 TLMTA − 7.13 EXRETAVG + 1.41 SIGMA − 0.045 RSIZE − 2.13 CASHMTA + 0.075 MB − 0.058 PRICE − 9.1` ; quarterly Compustat features; failure prob = `1 / (1 + exp(−CHS))` | The authors argue their measure has "more information advantage than Z-score and O-score". Failure defined as delisting for performance, D-rating, or Chapter 7/11 filing. | 0 | 2 |

## What the counts reveal

The accounting-based : market-based usage ratio of **roughly 8 : 1** across the surveyed literature is the review's headline empirical observation about *what gets used* in practice — not because market-based models are inferior, but because:

1. **Data availability.** Accounting data exists for private and public firms; market-based models require traded equity.
2. **Researcher comfort.** Accounting ratios are interpretable; option-pricing-derived asset volatility is harder to communicate to non-finance readers.
3. **Sample-period continuity.** Z-score has been used since 1968 — fifty years of literature stability favours continued usage.
4. **Computational simplicity.** Z-score and O-score require five inputs; CHS requires nine plus quarterly updates.

The 12-paper concentration of Altman Z-score on the **consequences** side (vs. only 6 on determinants) is the second-noticeable asymmetry: consequence studies prefer Z-score precisely because they need a *cross-sectional* distress indicator at a point in time, and Z-score's thresholds are universal.

## Cross-references

- The 3×4 taxonomy this measurement catalogue feeds: [[habib-2020-determinants-consequences-taxonomy]].
- Determinants literature using these measures: [[habib-2020-determinants-literature-rows]] (Table 2).
- Consequences literature using these measures: [[habib-2020-consequences-literature-rows]] (Table 3).
- Concepts: [[altman-z-score]], [[ohlson-o-score]], [[zmijewski-model]], [[merton-distance-to-default]], [[financial-distress]].
