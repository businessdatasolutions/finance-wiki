---
type: concept
title: Financial ratio analysis
aliases:
  - ratio analysis
  - financial ratios
  - financial-statement ratios
  - accounting ratios
confidence: 0.80
last_confirmed: 2026-05-25
source_count: 1
accessed_at: 2026-05-25
tags: [financial-ratio-analysis, financial-ratios, liquidity-ratios, leverage-ratios, profitability-ratios, asset-turnover, market-value-ratios, corporate-finance, dupont-identity, financial-statement-analysis]
relationships:
  - type: part-of
    target: dupont-identity
    via: "DuPont identity is the canonical decomposition built from ratio-analysis primitives (profit margin, asset turnover, equity multiplier)"
---

# Financial ratio analysis

The disciplined comparison of a firm's financial position through standardised ratios computed from its financial statements. **Ratios standardise comparison** by collapsing dollar amounts that differ across firm-size and currency into dimensionless multiples, percentages, or time periods (per [[2019-01-01-ross-2019-fundamentals-ch3-financial-statements|Ross/Westerfield/Jordan 2019 §3.3]]).

Every academic financial-distress source currently in the wiki — [[2022-11-28-altman-2023-omega-score-sme-default|Altman 2023]], [[2020-01-01-habib-2020-distress-determinants-consequences-review|Habib 2020]], [[2024-01-01-powell-2024-asean-accounting-early-warning-distress|Powell 2024]], [[2024-06-22-hajek-2024-distress-prediction-annual-reports|Hajek 2024]], [[2026-02-04-bari-2026-us-small-business-distress-framework|Bari 2026]], [[2012-09-01-luppe-2012-anchoring-accounting-indicators|Luppe 2012]] — operationalises ratios drawn from the closed vocabulary this concept catalogues. Ratio analysis is therefore the **definitional backbone** of the wiki's distress-prediction layer.

## The five ratio categories (Ross §3.3 taxonomy)

| Category | What it asks | Canonical members |
|---|---|---|
| **Short-term solvency / liquidity** | Can the firm meet near-term obligations? | Current ratio, quick (acid-test), cash, NWC-to-total-assets, interval measure |
| **Long-term solvency / financial leverage** | Can the firm meet long-term obligations? How much debt is in the capital structure? | Total debt ratio, debt-equity, equity multiplier, long-term debt ratio, times interest earned, cash coverage |
| **Asset management / turnover** | How efficiently does the firm use its assets to generate sales? | Inventory turnover, days' sales in inventory, receivables turnover, days' sales in receivables (ACP), NWC turnover, fixed-asset turnover, total-asset turnover |
| **Profitability** | How profitable is the firm? | Profit margin, ROA, ROE |
| **Market value** | What does the market think? | Price-earnings, PEG, price-sales, market-to-book, Tobin's Q, enterprise value-EBITDA |

The closed vocabulary is canonically reproduced in [[2019-01-01-ross-2019-fundamentals-ch3-financial-statements#artifact-1-table-38-reproduced-the-closed-ratio-vocabulary|Ross §3.3 Table 3.8]].

## Why ratios beat raw dollar comparisons

The dollar-amount problem: GM and Toyota are both large auto firms, but GM reports in USD and Toyota in JPY; Walmart and a local grocer both sell food but at scales differing by a factor of 10⁵. Ratios:

- **Normalise scale** — a current ratio of 1.4 means the same liquidity story for a $10M firm and a $100B firm.
- **Normalise currency** — a profit margin of 18% conveys the same operational efficiency in any currency.
- **Permit time-trend comparison** — the same firm's current ratio across 10 years tells a coherent story even as the firm grows.
- **Permit peer-group comparison** — firms in the same SIC / NAICS code can be benchmarked against each other and against industry medians (e.g. [[2019-01-01-ross-2019-fundamentals-ch3-financial-statements|Ross §3.5]] cites RMA's *Annual Statement Studies* for industry-aggregated common-size data).

## Structural limits (per Ross §3.5)

Ratio analysis has no underlying theory. There is no normative model that says *which* ratios matter most, *what* threshold separates healthy from distressed, or *which* peer-group to benchmark against. The whole enterprise is comparative:

1. **No canonical formulae.** Different texts compute the "same" ratio differently (e.g. total debt ratio: include short-term debt? include leases?). The user must document choices.
2. **Conglomerate dilution.** Multi-segment firms (GE, 3M) don't fit single-industry buckets.
3. **Cross-border GAAP heterogeneity.** Non-US firms use IFRS or local equivalents; ratios computed under different accounting standards aren't directly comparable.
4. **Within-industry heterogeneity.** Same SIC code ≠ same business model (regulated utilities can be hydroelectric / nuclear / coal — all SIC 4911 — with very different cost structures).
5. **Accounting-method heterogeneity.** FIFO vs. LIFO inventory accounting moves COGS, gross margin, and inventory turnover.
6. **Fiscal-year mismatch.** Different firms close their books at different points.
7. **Seasonality.** Q4-concentrated retailers show within-year balance-sheet swings.
8. **Transient events.** One-time asset sales distort year-over-year ratios.

Every honest distress-prediction paper acknowledges these limits. [[2020-01-01-habib-2020-distress-determinants-consequences-review|Habib 2020]]'s closing recommendation for *holistic* (multi-channel) distress models is largely a critique of ratio-only analysis as a research strategy.

## Connection to the wiki's distress literature

The chain from ratio definitions to distress prediction:

```
Ross §3.3 closed vocabulary
    │
    ├── inputs to ── [[altman-z-score]]  (5 ratios linearly combined via MDA)
    │
    ├── inputs to ── [[multiple-discriminant-analysis]]  (any ratio mix; Powell 2024 picks 5–7 by country)
    │
    ├── inputs to ── [[financial-distress]] operationalisation
    │                  (Habib 2020 cites Z, O, Zmijewski, BSM-Prob, DTD — all ratio-based or ratio-derived)
    │
    └── inputs to ── Bari 2026 financial-indicator families (7 buckets;
                       4 of them are Ross categories operationalised for small business)
```

The DuPont identity ([[dupont-identity]]) is the canonical *decomposition* built from these primitives — see that page for the ROE = profit margin × asset turnover × equity multiplier breakdown.

## Sources

- [[2019-01-01-ross-2019-fundamentals-ch3-financial-statements]] — Ross/Westerfield/Jordan §3.3. The canonical pedagogical reference for the closed ratio vocabulary, the five-category taxonomy, and the §3.5 catalogue of structural limits.

Downstream operationalisations (every paper currently in the corpus uses ratios drawn from this vocabulary; not separately enumerated as `sources` because they are *users* of the concept, not its *definers*):

- [[2020-01-01-habib-2020-distress-determinants-consequences-review|Habib 2020]] — measurement-models taxonomy + firm-fundamental determinants.
- [[2022-11-28-altman-2023-omega-score-sme-default|Altman 2023]] — Z-score and Omega Score primitives.
- [[2024-01-01-powell-2024-asean-accounting-early-warning-distress|Powell 2024]] — ASEAN MDA on traditional ratios.
- [[2024-06-22-hajek-2024-distress-prediction-annual-reports|Hajek 2024]] — structured-ratio baseline.
- [[2026-02-04-bari-2026-us-small-business-distress-framework|Bari 2026]] — seven financial-indicator families.

## Related concepts

- [[dupont-identity]] — the canonical ROE decomposition built from ratio-analysis primitives.
- [[common-size-statements]] — the sister standardisation technique (percentage statements rather than ratios).
- [[financial-distress]] — the umbrella concept ratio-based models attempt to predict.
- [[altman-z-score]] — the most-cited application of ratio analysis to distress.
- [[multiple-discriminant-analysis]] — the statistical method that combines ratios into a single score.

## Debates and supersession

No supersession — ratio analysis is foundational and is not replaced by newer techniques but *augmented* by them. The two main augmentation directions are:

1. **Machine learning and NLP additions** ([[2024-06-22-hajek-2024-distress-prediction-annual-reports|Hajek 2024]]) — FinBERT sentiment + BERTopic on 10-K risk-factor sections adds incremental AUC over a pure-ratio baseline. The ratio baseline is not retired; it is the bar to beat.
2. **Non-financial-statement variables** ([[2022-11-28-altman-2023-omega-score-sme-default|Altman 2023]] Omega Score) — payment behaviour, management characteristics, employee data. Again the ratio baseline is preserved; non-financial variables are added on top.

The wiki tracks these augmentations as **extensions** of ratio analysis, not as supersessions. The chapter's §3.5 catalogue of limitations is what makes augmentation valuable; it is not what makes ratio analysis obsolete.
