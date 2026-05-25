---
type: source
kind: paper
title: "Accounting-based variables as an early warning indicator of financial distress in crisis and non-crisis periods"
author:
  - "Powell, R. J."
  - "Dinh, D. V."
  - "Vu, N. T."
  - "Vo, D. H."
url: "https://doi.org/10.1002/ijfe.2864"
date_published: 2024-01-01
length: "~20 pages (Pass 2 — full read of abstract, intro, literature, research design, results; Tables 1–8 and all per-country MDA discriminant functions read row-by-row)"
venue: "International Journal of Finance & Economics, 29(4), 4105–4124"
doi: "10.1002/ijfe.2864"
citation_key: "powell_2024_asean"
raw: "../../raw/papers/powell-2024-asean-accounting-early-warning-distress.md"
pdf: "../../raw/assets/powell-2024-asean-accounting-early-warning-distress.pdf"
confidence: 0.85
last_confirmed: 2026-05-25
source_count: 1
accessed_at: 2026-05-25
tags: [asean, financial-distress, multiple-discriminant-analysis, altman-z-score, interest-coverage-ratio, early-warning, indonesia, malaysia, thailand, singapore, philippines, vietnam, asian-financial-crisis, global-financial-crisis, distance-to-default]
dynamic_capabilities:
  - digital-sensing/scanning-environment
relationships:
  - type: supports
    target: 2020-01-01-habib-2020-distress-determinants-consequences-review
    via: "Powell instantiates Habib's measurement-tradition catalogue on ASEAN; fills Habib's East-Asia-ex-China gap"
  - type: supports
    target: 2022-11-28-altman-2023-omega-score-sme-default
    via: "same Altman-MDA tradition; Powell shows ratios vary by country, Altman shows ratios alone aren't enough"
  - type: supports
    target: 2024-06-22-hajek-2024-distress-prediction-annual-reports
    via: "Hajek's class-imbalance solution (XGBOD) is a more sophisticated treatment of the imbalance Powell flags but does not address"
  - type: supports
    target: 2026-02-04-bari-2026-us-small-business-distress-framework
    via: "both find profitability+liquidity+leverage dominant; Bari's contribution is that non-financial channels add beyond"
  - type: uses
    target: sme-distress-predictor-variables
    via: "Powell's 14-ratio candidate set draws from category 1 (Altman Z-Score variables) + categories 3/5/6 (Profitability, Liquidity, Financial leverage); the management/employee channels of the catalogue are not used"
---

# Accounting-based variables as an early warning indicator of financial distress in crisis and non-crisis periods

> Financial integration in the Association of Southeast Asian Nations (ASEAN) region is a key focus of the ASEAN Economic Community. Whereas many studies focus on modelling corporate default, this paper identifies early warning indicators of financial distress before a default, using multiple discriminant analysis (MDA) models with a sample of listed and delisted companies in the ASEAN region. The analysis examines 720 companies in 10 different industries across six ASEAN countries from 1997 to 2016. The study constructs individual models for each country as well as an overall model for the entire region, using both in-sample and out-of-sample approaches. This overall model could be useful for an integrated banking system. To ensure robustness, the study also separately examines the predictive performance of the MDA models across different economic crises: the Asian financial crisis (AFC) from 1997 to 2000, the global financial crisis (GFC) from 2007 to 2009 and their pre- and post-crisis periods. We find that profitability ratios are the best indicators of financial distress in the ASEAN region, followed by liquidity and leverage ratios. In addition, our findings reveal common indicators that can be used to predict financial distress across ASEAN countries.

## TL;DR

Powell et al. apply **Multiple Discriminant Analysis (MDA)** — Altman's 1968 method — to **720 firms across six ASEAN countries** (Indonesia, Malaysia, Philippines, Singapore, Thailand, Vietnam) over 1997–2016, partitioned into six economic-cycle subperiods (AFC, post-AFC, pre-GFC, GFC, post-GFC, stable). Distress is defined as **Interest Coverage Ratio < 1** for two consecutive years (Faelten & Vitkova 2014). The headline finding: **profitability ratios — especially EBIT/TA (X1) and Retained Earnings/TA (X4) — dominate** discriminant function selection across periods and countries, followed by liquidity then leverage. A single ASEAN-wide model achieves **76.8 % combined classification accuracy** (61.1 % distressed; 81.9 % non-distressed). Adding **distance-to-default (DD)** market-based information yields only marginal gains (+0.90 % distressed / +0.63 % non-distressed averaged across periods/countries), because accounting-based MDA already absorbs a market-cap signal via MVE/TL or MVE/TA leverage ratios.

## Citation

**APA (7th edition):**

> Powell, R. J., Dinh, D. V., Vu, N. T., & Vo, D. H. (2024). Accounting-based variables as an early warning indicator of financial distress in crisis and non-crisis periods. *International Journal of Finance & Economics*, *29*(4), 4105–4124. https://doi.org/10.1002/ijfe.2864

**BibTeX:**

```bibtex
@article{powell_2024_asean,
  author  = {Powell, Robert J. and Dinh, Dung V. and Vu, Nam Thanh and Vo, Duc Hong},
  title   = {{Accounting-Based Variables as an Early Warning Indicator of Financial Distress in Crisis and Non-Crisis Periods}},
  journal = {International Journal of Finance \& Economics},
  year    = {2024},
  volume  = {29},
  number  = {4},
  pages   = {4105--4124},
  doi     = {10.1002/ijfe.2864}
}
```

## What was actually ingested

**Pass 2** — abstract, full introduction, literature review (Altman/Beaver lineage + ASEAN-specific prior studies), research design (data, variables, econometric strategies), results (single ASEAN-wide MDA, per-country MDA, period-segmented analysis, MDA+DD extension). Tables 1–8 read row-by-row; per-country discriminant functions for all six countries × seven periods transcribed.

## Context (WHY)

Sits in the **Beaver-Altman-Ohlson-Zmijewski statistical-discrimination tradition** catalogued by [[2020-01-01-habib-2020-distress-determinants-consequences-review]] §Table 1. The intellectual move is **geographic + economic-cycle disaggregation**: where Altman 1968 trained on US manufacturing in stable conditions, Powell et al. ask whether MDA discriminant functions are *stable across countries and across crisis vs. non-crisis periods*. Answer: **no — they vary substantially**, and a country-specific model outperforms a region-wide model in most cases.

The motivation is policy-driven: the **ASEAN Economic Community (AEC)** aims at financial+banking integration; a region-wide credit-risk model would support that integration if it works as well as country-specific models. Powell et al. find it does *not* — meaning AEC-wide credit-risk policy needs country-level calibration, not a single regional model.

Theoretical bases: Altman 1968 MDA + Z-score; Merton 1974 option-pricing structural-credit model (operationalised here as DD via Bharath-Shumway 2008); Beaver 1966 univariate-ratio precursor; Faelten-Vitkova 2014 ICR-based distress definition.

Adjacent wiki sources: [[2022-11-28-altman-2023-omega-score-sme-default]] (same MDA lineage, extends with non-financial variables on Croatian SMEs); [[2020-01-01-habib-2020-distress-determinants-consequences-review]] (catalogues the measurement tradition this paper instantiates).

## Methods (HOW)

**Sample.** 720 listed + delisted companies (100 listed + 20 delisted per country) across Indonesia, Malaysia, Philippines, Singapore, Thailand, Vietnam, 1997–2016. Other ASEAN members excluded for insufficient data. Financial-sector firms excluded (different balance-sheet structures). Delisting reasons researched manually — vast majority were voluntary (acquisition/privatisation); the rest were stock-exchange-requirement failures. Vietnam sample begins only 2007 (data availability).

**Distress definition.** ICR < 1 for two consecutive years → distressed (= 1); ICR ≥ 1 → non-distressed (= 0). Faelten-Vitkova 2014 threshold. In sample: 76 % non-distressed, 24 % distressed.

**Predictor variables (14 candidates).** Drawn from prior literature using a *frequency-of-prior-use* methodology (Table 1 inventories which ratios appear in Beaver 1966, Deakin 1972, Altman 1968 + 1977, Ohlson 1980, Taffler 1983, Zmijewski 1984, Izan 1984, Koh-Killough 1990, Shumway 2001, Hillegeist 2004, Beaver et al. 2005, Wu et al. 2004, Tinoco-Wilson 2013, Cultrera-Brédart 2016 — 15 prior models). All 14 are subset-matches of [[sme-distress-predictor-variables]] categories 1 (Altman Z-Score), 3 (Profitability), 5 (Liquidity), and 6 (Financial leverage) — the management/employee channels the Omega Score adds are not used here. Three groups:

| Group | Ratios |
|---|---|
| **Profitability** | X1 EBIT/TA, X2 S/TA, X3 NI/TA, X4 RE/TA, X5 EBITDA/TL |
| **Liquidity** | X6 WC/TA, X7 CA/TL, X8 CA/CL, X9 CL/TA, X10 NOCREDINT |
| **Leverage** | X11 TL/TA, X12 FU/TL, X13 MVE/TC, X14 MVE/TL |

**Econometric strategy.** Stepwise MDA with Wilks's lambda variable-selection; F-test entry probability 0.5, exclusion probability 0.10. Chi-square test for the discriminant function's overall ability to separate the two groups (95 % significance). Three approaches:

- **Approach 1** (in-sample baseline): develop discriminant function per country per period using prior-year data; one-year forecasting horizon.
- **Approach 2** (forward-test): train on 1997–2006, apply to 2007–2016.
- **Approach 3** (back-test): train on 2007–2016, apply to 1997–2006.

Six subperiods: AFC 1997–2000; post-AFC 2001–2003; pre-GFC 2004–2006; GFC 2007–2009; post-GFC 2010–2012; stable 2013–2016.

**DD extension.** Distance-to-default per Bharath-Shumway 2008 simplified Merton form, then incorporated either as the single predictor (DD-only model) or as an additional variable in stepwise MDA (MDA-DD model).

## Results (WHAT)

### The ASEAN-wide single MDA (Approach 1, full period)

```
Z = −0.157 + 6.269 X₁ + 0.226 X₂ − 0.754 X₃ + 0.335 X₄ − 1.292 X₉
```

Four of the five retained variables are profitability ratios — empirically dominating across the region. The coefficient on **X1 (EBIT/TA) = +6.269** is the largest by an order of magnitude.

**Classification accuracy (Table 7):** 61.1 % distressed correctly; 81.9 % non-distressed correctly; **76.8 % combined**; χ² = 781.5 (p < 0.01). Within Bellovary et al. 2007's 32–100 % MDA-accuracy range from the broader literature; aligns with classic Altman-style sample-similar accuracy. **Type I error (distressed predicted non-distressed) > Type II error**, owing to sample imbalance (76:24).

### Variable-frequency map (Table 5, reproduced)

Counts of how often each ratio survives stepwise selection across the 7 periods (6 sub-periods + Full period) of the region-wide model:

| Ratio | Full | AFC | Post-AFC | Pre-GFC | GFC | Post-GFC | Stable | **Total** |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| X1 EBIT/TA | 6 | 2 | 6 | 3 | 6 | 6 | 4 | **33** |
| X2 S/TA | 3 | 1 | 2 | 3 | 1 | 2 | 0 | 12 |
| X3 NI/TA | 3 | 0 | 0 | 4 | 4 | 1 | 1 | 13 |
| X4 RE/TA | 5 | 0 | 1 | 2 | 4 | 2 | 1 | **15** |
| X5 EBITDA/TL | 1 | 2 | 0 | 2 | 2 | 2 | 2 | 11 |
| X6 WC/TA | 2 | 2 | 1 | 1 | 0 | 2 | 3 | 11 |
| X9 CL/TA | 2 | 0 | 4 | 1 | 0 | 3 | 1 | 11 |
| X10 NOCREDINT | 2 | 0 | 1 | 3 | 2 | 2 | 2 | 12 |
| X11 TL/TA | 2 | 2 | 2 | 2 | 1 | 1 | 1 | 11 |

The X1 EBIT/TA total of 33 confirms it as the single most-frequently-selected ratio. Per Powell: *"EBIT/TA reflects the earning power of the company's assets … Altman 1968 believes that the survival of a company is based on its assets' earning power."* RE/TA second (cumulative profitability over time, per Routledge-Gadenne 2000).

### Per-country variation (Table 4)

Discriminant functions differ markedly by country **and** by period. Reproduced in full as a distinctive artifact below. Headline patterns:

- **Indonesia**: liquidity-dominant (WC/TA in every subperiod model except GFC).
- **Malaysia**: profitability + leverage mix.
- **Philippines**: profitability + leverage (TL/TA / CL/TA).
- **Singapore**: smallest discriminant functions (often only X1 + X4); during AFC, *no significant variables* — distress was effectively unpredictable from accounting ratios.
- **Thailand**: leverage-dominant in several periods; the largest country-specific X1 coefficient at 10.305 (GFC).
- **Vietnam**: EBITDA/TL (X5) and MVE/TL (X14) dominate — different from the regional pattern.

### Per-country predictive accuracy (Table 6, full-period column)

| Country | Distressed % | Non-distressed % | χ² |
|---|---:|---:|---|
| Indonesia | 66.7 % | 86.1 % | 298.8*** |
| Malaysia | 60.4 % | 80.8 % | 187.8*** |
| Philippines | 60.6 % | 85.8 % | 245.9*** |
| Singapore | 42.9 % | 88.3 % | 110.3*** |
| Thailand | 67.5 % | 85.1 % | 256.3*** |
| Vietnam | 61.6 % | 82.2 % | 119.8*** |
| **Total ASEAN** | **61.1 %** | **81.9 %** | **781.5***** |

Singapore's 42.9 % distressed accuracy is the outlier; Powell attributes it to Singapore's **export-market dependence** — domestic accounting indicators don't capture foreign-demand shocks. The Philippines' worst-period is post-GFC (46.8 % distressed) because of overseas-remittance-driven economy structure (Varga-Silva et al. 2009). Indonesia *outperforms* during GFC (84.4 % distressed) thanks to low export reliance and pre-GFC fiscal discipline.

### MDA + DD: marginal gains (Table 8)

Adding Merton-DD to the MDA model improves predictive performance only in a small number of cases. Averaged across all six countries and seven periods: **+0.90 % distressed / +0.63 % non-distressed**. In periods where DD *is* significant, gains average +4.74 % / +3.80 %, but most cells are 0. Theoretical interpretation: accounting-based MDA already includes MVE/TL or MVE/TA, which captures the market-cap channel that DD also represents — so DD's contribution is largely redundant (Agarwal-Taffler 2008; Doumpos et al. 2015). **Recommendation: stick with the accounting-based MDA**; DD's incremental complexity buys little.

### Approaches 2 and 3 (out-of-sample, in Appendices)

Forward-test (train 1997–2006 → test 2007–2016) and back-test (train 2007–2016 → test 1997–2006) both show predictive-accuracy degradation versus Approach 1. **Approach 1 (period-specific in-sample) outperforms generalised approaches** — confirming Grice-Ingram 2001 / Ohlson 1980 critiques of MDA cross-period transferability. The 2-lag variants also underperform the 1-lag baseline.

## Visual content

The paper carries **no figures** — the entire empirical argument is conducted via the eight tables. (No equations as images either; the discriminant functions are typeset in the body text.)

### Table 1 — Widely used accounting indicators (3-page spread)

**Type:** prior-literature matrix. **Location:** p. 4110.

15 prior-model columns × 14 ratio rows × 3 group panels (Profitability / Liquidity / Leverage). Each cell marked "X" if the prior model includes that ratio. **Total column** sums across studies — used to choose which ratios to consider for ASEAN MDA. The most frequently-used ratios are X1 EBIT/TA (7×), X6 WC/TA (7×), X8 CA/CL (7×), X11 TL/TA (7×). The methodological move is *evidence-based feature selection* — start from the ratios with the highest prior endorsement, not from a theoretical proposal. → reproduced in §Distinctive artifacts.

### Table 2 — Descriptive statistics

**Type:** two-panel numeric summary. **Location:** p. 4111.

Two panels (Non-distressed Panel A; Distressed Panel B), each with 14 ratios + ICR, three columns (Mean, Median, SD). Distressed firms show: EBIT/TA mean −0.062 vs. +0.086 non-distressed; RE/TA mean −0.436 vs. +0.164; TL/TA mean 0.865 vs. 0.533; ICR mean −1.736 vs. +5.612. The descriptive gaps preview the discriminant findings.

### Table 3 — Discriminant functions for the entire ASEAN region

**Type:** discriminant-function table. **Location:** p. 4112.

7 rows (Full period + 6 subperiods) × 1 functional-form column. → reproduced in §Distinctive artifacts.

### Table 4 — Discriminant functions for each ASEAN country

**Type:** discriminant-function table. **Location:** pp. 4114–4115 (2-page spread).

Six country panels × ≤7 period rows each. 38 country-by-period discriminant functions in total. The largest table in the paper; the per-country empirical contribution. → reproduced in §Distinctive artifacts.

### Table 5 — Frequency of financial ratios in discriminant functions

**Type:** count-summary table. **Location:** p. 4115. → reproduced in §Results above.

### Table 6 — Correct-prediction percentages by country × period

**Type:** classification-accuracy matrix. **Location:** p. 4116. → reproduced in §Results above (full-period column) and §Distinctive artifacts (matrix).

### Table 7 — Summary of discriminant models and accuracy rates

**Type:** consolidated summary. **Location:** p. 4117. Pairs Table 4 functions with their full-period accuracy. → integrated into §Results above.

### Table 8 — MDA-DD predictive-performance improvements

**Type:** Δ-improvement matrix. **Location:** p. 4118.

6 country panels × 7 period columns × 2 outcome rows (distressed / non-distressed). Mostly empty (blank = no improvement); ~12 cells positive, ~2 cells negative. Headline: marginal gains, mostly in the stable period. → reproduced selectively in §Distinctive artifacts.

## Distinctive artifacts

### ASEAN-wide discriminant functions (Table 3, reproduced)

```
Full period:    Z = −0.157 + 6.269 X₁ + 0.226 X₂ − 0.754 X₃ + 0.335 X₄ − 1.292 X₉
AFC:            Z = −0.907 + 2.467 X₁ + 1.095 X₆ − 1.499 X₁₁
Post-AFC:       Z = −0.043 + 4.618 X₁ + 0.353 X₂ − 1.421 X₉
Pre-GFC:        Z = −0.205 − 6.969 X₁ − 0.299 X₂ + 2.471 X₃ + 1.057 X₇ + 0.778 X₁₁ + 0.007 X₁₃
GFC:            Z = −0.452 + 7.127 X₁ − 0.494 X₃ + 1.018 X₄ − 0.082 X₈
Post-GFC:       Z = −0.316 + 7.905 X₁ + 0.218 X₂ + 0.629 X₄ − 1.700 X₉
Stable period:  Z = −0.017 + 8.258 X₁ − 2.530 X₃ + 0.635 X₄ − 1.628 X₉
```

(X1 = EBIT/TA, X2 = S/TA, X3 = NI/TA, X4 = RE/TA, X6 = WC/TA, X7 = CA/CL, X8 = CA/CL, X9 = CL/TA, X11 = TL/TA, X13 = MVE/TC.)

Note the AFC and pre-GFC coefficient instability — discriminant rules in crisis-period training data look meaningfully different from non-crisis-period rules. Pre-GFC's **negative** X1 coefficient (−6.969) — a sign reversal versus the rest — is the most striking anomaly; Powell attributes it to the pre-GFC asset-price boom inflating EBIT in ways that decoupled from distress.

### Per-country discriminant functions (Table 4, reproduced)

```
INDONESIA:
  Full period:   Z = −0.603 + 3.310 X₁ + 0.237 X₂ + 1.426 X₃ − 0.351 X₄ + 1.655 X₆ + 0.03 X₁₀
  AFC:           Z = −0.634 + 4.947 X₁ + 0.891 X₂ + 1.105 X₆
  Post-AFC:      Z =  0.051 + 3.593 X₁ + 1.497 X₆ + 0.04 X₁₀
  Pre-GFC:       Z = −0.405 + 6.337 X₃ + 1.433 X₆
  GFC:           Z = −0.76 + 7.598 X₁ − 0.183 X₁₀
  Post-GFC:      Z = −0.778 + 6.091 X₁ + 1.087 X₆ + 0.34 X₁₀
  Stable:        Z = −0.321 + 3.11 X₁ + 1.572 X₆ + 0.044 X₁₀

MALAYSIA:
  Full period:   Z = −0.869 + 6.315 X₁ − 3.944 X₃ + 2.698 X₄ + 0.73 X₅ + 0.199 X₁₀
  AFC:           Z =  0.167 + 2.746 X₅
  Post-AFC:      Z = −1.558 + 7.052 X₁ + 3.233 X₄ + 2.458 X₉
  Pre-GFC:       Z = −0.754 + 0.639 X₂ + 1.564 X₅ + 0.467 X₁₀
  GFC:           Z = −1.147 + 4.168 X₁ + 4.408 X₄
  Post-GFC:      Z = −0.678 + 9.148 X₁ − 0.429 X₂ + 3.377 X₄ − 1.671 X₅ + 0.609 X₁₀
  Stable:        Z = −1.436 + 0.627 X₈ + 3.21 X₁₂

PHILIPPINES:
  Full period:   Z = −0.423 + 4.801 X₁ + 0.647 X₂ + 0.23 X₄ − 1.787 X₉ + 0.883 X₁₁
  AFC:           Z = −1.767 + 3.658 X₁₁
  Post-AFC:      Z = −0.122 + 3.539 X₁ + 0.563 X₂ − 2.753 X₉ + 0.854 X₁₁
  Pre-GFC:       Z = −0.308 − 4.756 X₁ − 0.826 X₂ + 3.379 X₃ + 2.403 X₉ + 0.01 X₁₀ + 0.026 X₁₂
  GFC:           Z = −0.546 + 13.78 X₁ − 7.988 X₃ + 1.476 X₄ − 0.019 X₁₄
  Post-GFC:      Z = −0.330 − 7.183 X₁ + 2.786 X₉
  Stable:        Z = −1.836 + 10.340 X₁ + 2.370 X₆ − 0.116 X₁₀ + 2.128 X₁₁

SINGAPORE:
  Full period:   Z = −0.774 + 4.076 X₁ + 2.175 X₄
  AFC:           (no significant variables)
  Post-AFC:      Z = −0.605 + 4.088 X₁ − 2.814 X₉
  Pre-GFC:       Z = −0.784 + 4.08 X₄ + 0.187 X₁₀
  GFC:           Z = −0.859 + 8.561 X₁ + 1.865 X₃ + 1.971 X₄ − 0.968 X₅
  Post-GFC:      Z = −0.386 + 16.83 X₁ − 13.249 X₃
  Stable:        Z =  0.9 + 12.308 X₁ − 4.223 X₆

THAILAND:
  Full period:   Z = −0.112 + 8.038 X₁ + 1.003 X₆ − 0.219 X₇ − 0.367 X₁₁ − 0.021 X₁₄
  AFC:           Z = −1.289 + 2.383 X₅ + 0.372 X₈ + 0.481 X₁₃
  Post-AFC:      Z =  0.703 − 9.768 X₁ + 0.587 X₇ + 1.435 X₁₁
  Pre-GFC:       Z = −0.289 − 6.838 X₁ + 1.101 X₃ − 0.647 X₄ + 0.73 X₅ + 0.945 X₁₁
  GFC:           Z = −0.057 + 10.305 X₁ − 0.318 X₃ + 0.075 X₁₀ − 0.326 X₁₁ − 1.332 X₁₂
  Post-GFC:      Z = −0.870 + 5.885 X₁ + 3.445 X₆ − 0.336 X₈ + 0.715 X₁₁ + 2.451 X₁₂
  Stable:        Z =  0.48 − 4.273 X₅ + 0.109 X₁₄

VIETNAM (sample begins 2007):
  Full period:   Z = −0.394 − 3.172 X₅ + 0.373 X₈ + 0.819 X₁₂ + 0.161 X₁₄
  GFC:           Z = −1.208 + 0.536 X₂ − 1.735 X₅ + 0.28 X₈ + 0.169 X₁₄
  Post-GFC:      Z = −1.567 + 2.994 X₅ + 3.076 X₉ − 0.297 X₁₄
  Stable:        Z = −0.456 − 5.905 X₅ + 0.46 X₈ + 2.958 X₁₂ + 0.216 X₁₄
```

(Variables: X1 EBIT/TA, X2 S/TA, X3 NI/TA, X4 RE/TA, X5 EBITDA/TL, X6 WC/TA, X7 CA/TL, X8 CA/CL, X9 CL/TA, X10 NOCREDINT, X11 TL/TA, X12 FU/TL, X13 MVE/TC, X14 MVE/TL.)

### Classification accuracy across country × period (Table 6, full)

| Country | AFC | Post-AFC | Pre-GFC | GFC | Post-GFC | Stable | Full |
|---|---:|---:|---:|---:|---:|---:|---:|
| Indonesia distressed | 75.7 | 61.2 | 57.6 | 84.4 | 80.0 | 50.0 | **66.7** |
| Indonesia non-distressed | 77.2 | 86.8 | 88.8 | 71.1 | 91.6 | 95.8 | **86.1** |
| Malaysia distressed | 25.0 | 56.0 | 46.2 | 63.2 | 65.8 | 76.3 | **60.4** |
| Malaysia non-distressed | 91.9 | 80.8 | 86.5 | 78.0 | 85.9 | 61.7 | **80.8** |
| Philippines distressed | 64.3 | 55.0 | 52.9 | 77.8 | 46.8 | 68.1 | **60.6** |
| Philippines non-distressed | 66.2 | 93.0 | 89.6 | 75.4 | 83.8 | 91.1 | **85.8** |
| Singapore distressed | — | 32.0 | 68.0 | 45.8 | 58.8 | 76.2 | **42.9** |
| Singapore non-distressed | — | 89.4 | 81.4 | 96.0 | 78.8 | 70.7 | **88.3** |
| Thailand distressed | 84.7 | 73.7 | 55.1 | 56.0 | 82.5 | 25.0 | **67.5** |
| Thailand non-distressed | 55.5 | 82.0 | 94.6 | 90.6 | 84.1 | 95.7 | **85.1** |
| Vietnam distressed | — | — | — | 47.7 | 68.1 | 70.5 | **61.6** |
| Vietnam non-distressed | — | — | — | 86.4 | 75.2 | 81.2 | **82.2** |
| **Total ASEAN distressed** | 59.7 | 53.8 | 54.7 | 61.2 | 64.0 | 57.4 | **61.1** |
| **Total ASEAN non-distressed** | 81.7 | 90.5 | 90.5 | 82.2 | 73.9 | 78.0 | **81.9** |

### MDA-DD marginal improvements (Table 8, reproduced selectively)

| Country | When DD significant | Δ Distressed | Δ Non-distressed |
|---|---|---:|---:|
| Malaysia | Stable, Full period | +2.6 % / +6.3 % | +2.7 % |
| Philippines | GFC (+3.7 % distressed); Post-AFC (+0.4 % non); Stable (+0.7 % non) | small | small |
| Singapore | Stable (+4.8 % distressed; +1.4 % non) | small | small |
| Thailand | Stable (+16.7 % distressed); AFC (+14.8 % non); Post-AFC (+6.4 % non) | larger but isolated | larger but isolated |
| **Cross-country / cross-period average** | — | **+0.90 %** | **+0.63 %** |

## Discussion / Significance (SO WHAT)

For the wiki, three contributions land:

1. **Empirical disconfirmation of Z-score cross-context portability.** Powell et al. establish formally what Grice-Ingram 2001 and Ohlson 1980 suggested: MDA discriminant functions are *country-specific* and *period-specific*. The pre-GFC sign-reversal on X1 EBIT/TA is the cleanest single observation. A wiki-level lesson: any deployment of an off-the-shelf Z-score outside its training context needs explicit recalibration.
2. **Profitability > liquidity > leverage hierarchy** for ASEAN distress prediction, confirmed across 38 country-period discriminant functions. EBIT/TA + RE/TA together capture both current earning power and cumulative profitability — the two-channel summary Altman 1968 anticipated still holds in ASEAN 2024.
3. **Market-based DD adds little once accounting-based MDA includes MVE/TL or MVE/TA.** A practical procurement signal: the engineering effort to compute DD (option-pricing assumptions, asset-volatility estimation) is not paid back in predictive lift for typical SME credit-monitoring contexts.

**Limitations acknowledged by authors:**
- ICR-as-distress is one operationalisation; alternative thresholds may yield different functions.
- Six ASEAN countries; other ASEAN members excluded for data reasons.
- Choice-based sample bias possible (largest firms by total liabilities; Platt-Platt 2002).
- Singapore's export-dependence makes accounting-based distress prediction structurally weaker.

**Limitations not flagged:**
- **The pre-GFC X1 sign reversal is a methodological red flag** that deserves more scrutiny than the paper gives it. A discriminant model where the most-important variable's coefficient flips sign between adjacent periods has a story to tell (asset-price-driven decoupling? Stepwise selecting unstable cells?); Powell et al. flag the reversal but don't unpack it.
- **The 76:24 sample imbalance** inflates the chi-square statistic and biases the model toward Type I errors. The paper notes this but doesn't apply class-weighting or oversampling corrections — a methodological move that would be standard in [[2024-06-22-hajek-2024-distress-prediction-annual-reports]].
- **No comparison with logit/probit or with non-parametric methods** despite Powell's own literature review noting Bellovary et al. 2007 found "no significant difference in predictive accuracy among MDA, logit, probit." A genuine model race would strengthen the methodological claim.

## Citations to chase

- **Bharath, Shumway 2008** — *Forecasting Default with the Merton Distance-to-Default Model*, Rev. Financial Studies 21(3). The simplified DD operationalisation used here.
- **Faelten, Vitkova 2014** — the ICR-based distress definition.
- **Bellovary et al. 2007** — *A Review of Bankruptcy Prediction Studies: 1930–Present*, J. Financial Education 33. The benchmark predictive-accuracy range.
- **Grice, Ingram 2001** — *Tests of the Generalizability of Altman's Bankruptcy Prediction Model*, J. Business Research 54(1). The cross-context-portability critique.
- **Agarwal, Taffler 2008** — accounting-vs-market models comparison; key reference for the DD-redundancy result.
- **Ma'aji et al. 2018** — Malaysian SME MDA benchmark.
- **Dinh et al. 2021** — *Forecasting financial distress in Southeast Asia using a market-based Merton model*. The market-based-DD ASEAN precursor.

## Linked entities and concepts

**Entities** (per [§Author-entity promotion](../../CLAUDE.md#author-entity-promotion)):

- **Dangling** (single-source mention, deferred): Robert J. Powell (Edith Cowan University), Dung V. Dinh (Edith Cowan), Nam Thanh Vu (Ho Chi Minh City Open Uni), Duc Hong Vo (Ho Chi Minh City Open Uni + UWA).

(None of the four authors appears as cited author across the rest of the 2026-05-25 batch — second-source rule not met.)

**Concepts** (created or referenced in this ingest batch):

- [[financial-distress]] — definition via ICR-based threshold.
- [[multiple-discriminant-analysis]] — the method core to this paper.
- [[altman-z-score]] — the lineage Powell extends to ASEAN.
- [[interest-coverage-ratio]] — the distress operationalisation.
- [[merton-distance-to-default]] — the market-based extension tested.
- [[early-warning-systems]] — the application class.
- [[asean-distress-prediction]] — the geographic specialisation (this paper is the canonical reference).

## Source-to-source relationships

Neighbour-scan against the 2026-05-25 batch:

- **`supports` ↔ [[2020-01-01-habib-2020-distress-determinants-consequences-review]]** — Powell instantiates Habib's measurement-tradition catalogue (Z-score, Beaver-ratio lineage) on ASEAN data; Habib's geographic-coverage gap (East Asia ex-China) is what Powell fills.
- **`supports` ↔ [[2022-11-28-altman-2023-omega-score-sme-default]]** — same Altman-MDA tradition; Altman 2023's Omega Score *adds* non-financial variables to the same statistical framework Powell uses. Reading them together: Powell shows the ratio mix varies by country; Altman 2023 shows ratios alone aren't enough.
- **`supports` ↔ [[2024-06-22-hajek-2024-distress-prediction-annual-reports]]** — Hajek extends with NLP/BERT; both papers reach the boundary of structured-ratio-only models. Hajek's class-imbalance handling (SSL) is methodologically more sophisticated than Powell's, and could be back-applied here.
- **`supports` ↔ [[2026-02-04-bari-2026-us-small-business-distress-framework]]** — Bari operationalises the same firm-level + behavioural channels for US small businesses. The cross-context comparison is instructive: ASEAN listed-firm MDA vs. US small-business framework — different operational definitions of distress (ICR<1 vs. Bari's multi-impairment index), same finding that **profitability + liquidity + leverage** dominate.

