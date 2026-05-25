---
type: concept
title: Altman Z-score
aliases:
  - Z-score
  - Altman Z
  - Z' score
  - Z'' score
  - Altman Z'' score
confidence: 0.90
last_confirmed: 2026-05-25
source_count: 3
accessed_at: 2026-05-25
tags: [altman-z-score, financial-distress, multiple-discriminant-analysis, bankruptcy-prediction, financial-ratios]
relationships: []
---

# Altman Z-score

A statistical-discrimination distress-prediction measure introduced by **Edward I. Altman** in 1968 and extended through three named successors. The Z-score is the **single most widely-used distress measure** in the empirical literature ([[2020-01-01-habib-2020-distress-determinants-consequences-review|Habib 2020]] reports 6 + 12 = 18 surveyed papers using it — more than any other measure).

## Formula (Altman 1968 original)

For publicly-traded manufacturing firms:

```
Z = 1.2 X₁ + 1.4 X₂ + 3.3 X₃ + 0.6 X₄ + 1.0 X₅

where
  X₁ = Working capital / Total assets       (liquidity)
  X₂ = Retained earnings / Total assets     (cumulative profitability)
  X₃ = EBIT / Total assets                  (current operating profitability)
  X₄ = Market value of equity / Total liab. (market leverage)
  X₅ = Sales / Total assets                 (asset turnover)
```

**Thresholds**:

| Z-score range | Interpretation |
|---|---|
| Z > 2.67 | Financial soundness |
| 1.81 ≤ Z ≤ 2.67 | Grey zone — uncertain |
| Z < 1.81 | Financial distress |

The five-ratio coefficients were derived via [[multiple-discriminant-analysis]] (MDA) on a paired sample of bankrupt vs. non-bankrupt US manufacturers in the 1960s.

## The Z-score lineage (named successors)

| Year | Variant | Scope | Adjustment from Z |
|---|---|---|---|
| 1968 | **Z-score** | US publicly-traded manufacturers | Original |
| 1977 | **Zeta model** (Altman, Haldeman, Narayanan) | US firms with refined fit | 27 indicators; refined weights |
| 1995 | **Z′-score** | Non-listed firms | X₄ replaced with book value of equity |
| 1995 | **Z′′-score** | Non-listed + non-manufacturing | Removes X₅ (sales/TA), 4-ratio variant |
| 2017 | **Altman et al. international Z′′** | International validation | Country-specific recalibrations |
| 2023 | **Omega Score** ([[2022-11-28-altman-2023-omega-score-sme-default|Altman et al. 2023]]) | Croatian SMEs + non-financial vars | 4 sets: financial + payment behaviour + management + employees |

The Omega Score is the most recent named addition. See [[omega-score]] for its full formula. [[2024-01-01-powell-2024-asean-accounting-early-warning-distress|Powell et al. 2024]] applies the Altman-MDA *methodology* (not the original coefficients) to develop 38 country-specific × period-specific discriminant functions for ASEAN.

## Empirical findings on the Z-score

### Strengths

- **Most-cited distress measure** in academic and practitioner contexts.
- Closed-form, interpretable, computable from public financial statements alone.
- Sample-similar accuracy 70–90 % (Bellovary et al. 2007 review of 165 bankruptcy studies, AUC range 32–100 %).
- Robust across decades of replication.

### Limitations (corpus consensus)

- **Cross-context portability is weak.** [[2024-01-01-powell-2024-asean-accounting-early-warning-distress|Powell 2024]] empirically demonstrates that discriminant-function coefficients vary substantially across ASEAN countries and across crisis vs. non-crisis periods. Grice-Ingram 2001 reported 26 % accuracy drop when Altman's original sample-similar accuracy is tested on different periods.
- **Financial-statement only.** The score cannot incorporate payment behaviour, governance variables, employee characteristics, or textual signals — exactly the channels [[2022-11-28-altman-2023-omega-score-sme-default|Altman 2023]] and [[2024-06-22-hajek-2024-distress-prediction-annual-reports|Hajek 2024]] argue add incremental predictive value.
- **Historical-cost basis.** Cannot capture intangible assets, R&D, or expected future-flow volatility (Beaver et al. 2010 critique).
- **Static.** Not designed to capture the time-dynamic evolution of distress that [[2026-02-04-bari-2026-us-small-business-distress-framework|Bari 2026]] emphasises.

### Recalibration is standard

[[2022-11-28-altman-2023-omega-score-sme-default|Altman 2023]] recalibrates Z′′ on Croatian data: AUC rises from 0.659 (original weights) to 0.704 (recalibrated). [[2024-01-01-powell-2024-asean-accounting-early-warning-distress|Powell 2024]] builds country-specific MDA functions from scratch rather than applying Altman's original. **Practical implication**: deploying Z-score outside its training context without recalibration is a methodological mistake.

## Sources

- [[2022-11-28-altman-2023-omega-score-sme-default]] — extends the lineage with Omega Score; recalibrates Z′′ on Croatian SMEs.
- [[2020-01-01-habib-2020-distress-determinants-consequences-review]] — provides the formula + threshold + survey-count.
- [[2024-01-01-powell-2024-asean-accounting-early-warning-distress]] — applies MDA methodology to 6 ASEAN countries.

## Related concepts

- [[financial-distress]] — the broader concept Z-score measures.
- [[multiple-discriminant-analysis]] — the statistical method Z-score relies on.
- [[omega-score]] — the most recent Altman-lineage extension.
- [[ohlson-o-score]] — the logit-based alternative.
- [[merton-distance-to-default]] — the structural / option-pricing alternative.

## Debates and supersession

The 2023 introduction of [[omega-score]] does *not* supersede the Z-score for general-corporate distress prediction — Omega is SME-specific (firm size < 250 employees) and requires non-financial-statement data (FINA payment records, Tax Administration personnel data) that few jurisdictions provide. **For SMEs in jurisdictions with administrative data infrastructure, Omega supersedes Z′′**; for larger corporations or data-poor jurisdictions, Z-score remains the default. The lineage is *additive*, not *replacive*.
