---
type: artifact
artifact_kind: table
title: "Table 8 — Predictive improvements from adding Distance-to-Default to MDA (Powell 2024)"
source: "[[2024-01-01-powell-2024-asean-accounting-early-warning-distress]]"
source_table_ref: "Table 8"
source_pages: "p. 4118"
last_confirmed: 2026-05-25
accessed_at: 2026-05-25
tags: [distance-to-default, merton, mda-augmentation, financial-distress, asean, market-based-distress, powell]
---

# Table 8 — Δ Predictive improvement from adding Distance-to-Default (DD) to accounting MDA

> Powell's robustness check: does adding the market-based Merton **Distance-to-Default (DD)** variable to the accounting-based MDA model improve predictive accuracy? **The summary answer is no, materially** — across 6 countries × 7 periods × 2 outcome classes = 84 cells, only ~14 show positive improvements and the cross-country / cross-period averages are tiny (+0.90% distressed, +0.63% non-distressed). Some isolated cells show meaningful lift (Thailand stable +16.7% distressed; AFC +14.8% non-distressed), but most cells are zero or negative.
>
> **Source-page note:** Powell reports the full 84-cell matrix in the journal article. This artifact page **reproduces only the cells where DD was statistically significant** — the rest are zeros or no-improvement. A future re-ingest could transcribe the full grid.

## Provenance

| Field | Value |
|---|---|
| Source | [[2024-01-01-powell-2024-asean-accounting-early-warning-distress]] |
| Source's reference | Table 8 |
| Caption (verbatim) | *"Comparison of the percentage being correctly predicted as distressed and non-distressed by the accounting-based MDA model and the accounting-and-market-based MDA model."* |
| Location | p. 4118 |
| Last confirmed | 2026-05-25 |

## Cells where DD added significant predictive lift

| Country | Period | Δ Distressed accuracy | Δ Non-distressed accuracy |
|---|---|---:|---:|
| Malaysia | Stable | **+2.6%** | +2.7% |
| Malaysia | Full period | **+6.3%** | +0.0% |
| Philippines | GFC | **+3.7%** | +0.0% |
| Philippines | Post-AFC | +0.0% | +0.4% |
| Philippines | Stable | +0.0% | +0.7% |
| Singapore | Stable | **+4.8%** | +1.4% |
| Thailand | Stable | **+16.7%** | +0.0% |
| Thailand | AFC | +0.0% | **+14.8%** |
| Thailand | Post-AFC | +0.0% | **+6.4%** |

All other country × period × class cells: **no improvement** (the table reports zeros for these — DD does not improve classification beyond the accounting-only MDA model).

## Cross-country / cross-period averages

| Class | Mean Δ accuracy |
|---|---:|
| Distressed firms | **+0.90%** |
| Non-distressed firms | **+0.63%** |

## What the table means

The headline finding is **DD adds essentially nothing once the accounting-based MDA already includes MVE/TL or MVE/TC** (the market-of-equity-based leverage ratios — see [[powell-2024-prior-literature-matrix]] rows X₁₃, X₁₄). The Merton DD measure encodes asset-value volatility and distance-from-default, but most of that signal is already captured by the simpler accounting ratios.

Three cells deserve attention as genuine lift:

1. **Thailand Stable period: +16.7% distressed-class lift.** The largest single improvement. Thailand's stable-period distressed firms are *poorly* classified by accounting MDA alone (25.0% per [[powell-2024-classification-accuracy]]) — DD recovers some of the missed cases.
2. **Thailand AFC: +14.8% non-distressed lift.** A crisis-period boost for the harder class. The AFC was Thailand's defining crisis (Thai Bhat depreciation), and DD's volatility-based signal helped distinguish surviving firms from doomed ones.
3. **Malaysia Full period: +6.3% distressed lift.** A modest but consistent regional improvement.

The procurement implication: the engineering effort to compute DD (Merton option-pricing assumptions, asset-volatility estimation per Bharath-Shumway 2008) is not paid back in predictive lift for typical accounting-data contexts — except for specific country-period combinations where the accounting model is structurally weak.

## Cross-references

- The accounting-only MDA models DD augments: [[powell-2024-country-discriminant-functions]] (Table 4).
- The baseline accuracies DD attempts to improve on: [[powell-2024-classification-accuracy]] (Table 6).
- The DD formula (Merton 1974, Bharath-Shumway 2008): defined in the source page §Methods.
- Concepts: [[multiple-discriminant-analysis]], [[financial-distress]].
