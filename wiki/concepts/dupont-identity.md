---
type: concept
title: DuPont identity
aliases:
  - DuPont decomposition
  - DuPont analysis
  - DuPont model
  - DuPont framework
  - ROE decomposition
  - extended DuPont
confidence: 0.80
last_confirmed: 2026-05-25
source_count: 1
accessed_at: 2026-05-25
tags: [dupont-identity, return-on-equity, financial-ratio-analysis, profit-margin, asset-turnover, equity-multiplier, financial-leverage, ratio-decomposition, performance-attribution]
relationships:
  - type: part-of
    target: financial-ratio-analysis
    via: "DuPont is the canonical decomposition of ROE into ratio-analysis primitives"
---

# DuPont identity

A multiplicative decomposition of **return on equity (ROE)** into three operational drivers — *operating efficiency*, *asset use efficiency*, and *financial leverage* — popularised by the DuPont Corporation's internal financial-control practice in the 1920s and codified pedagogically in [[2019-01-01-ross-2019-fundamentals-ch3-financial-statements|Ross/Westerfield/Jordan 2019 §3.4]].

## The identity

```
ROE = Net income / Total equity

    = (Net income / Sales) × (Sales / Assets) × (Assets / Total equity)

    = Profit margin   ×   Total asset turnover   ×   Equity multiplier
       (Eq 3.19)            (Eq 3.18)                  (Eq 3.8)

    = Operating efficiency × Asset use efficiency × Financial leverage
```

Equivalent compact forms:

```
ROE = ROA × Equity multiplier
    = ROA × (1 + Debt-equity ratio)
```

The identity is **algebraic, not empirical** — it holds by construction. Its diagnostic value is *attributional*: given two firms (or one firm in two periods) with different ROE, the identity localises whether the difference is in margin, in turnover, or in leverage.

## Worked example (Prufrock Corporation 2018, Ross §3.4)

```
ROE = 0.1880 × 0.64 × 1.38 = 0.1646 = 16.46%

  where
    Profit margin           = 435 / 2,311 = 18.80%
    Total asset turnover    = 2,311 / 3,636 = 0.64
    Equity multiplier       = 3,636 / 2,639 = 1.38
```

The decomposition would diagnose Prufrock's modest ROE as a *low-asset-turnover* firm (0.64x — assets turn over less than once a year) compensating with healthy profit margins (18.8%) and moderate leverage (1.38x assets per dollar of equity).

## The diagnostic argument: Yahoo! vs. Alphabet 2015 (Ross §3.4, Table 3.9)

| Firm | ROE | = | Profit margin | × | Total asset turnover | × | Equity multiplier |
|---|---:|---|---:|---|---:|---|---:|
| Yahoo! | −15.0% | = | **−87.5%** | × | 0.110 | × | 1.56 |
| Alphabet | 13.6% | = | 21.8% | × | 0.509 | × | 1.23 |

The 28.6-percentage-point ROE gap is **overwhelmingly a margin event** (Yahoo! is losing $0.875 per dollar of sales). Asset turnover is also weaker (0.11 vs. 0.51) but second-order. Leverage is comparable. Without the DuPont decomposition the headline "negative ROE" tells the *whether*; with the decomposition it tells the *where*.

## The General Motors warning (Ross §3.4)

The chapter's most-cited cautionary illustration: GM's reported ROE rose from 12.1% in 1989 to 44.1% in 1993, an apparently spectacular improvement.

DuPont decomposition reveals:

- Profit margin **fell** from 3.4% to 1.8%.
- ROA **fell** from 2.4% to 1.3%.
- Equity multiplier **rose** from 4.95 to 33.62 — a 6.8× explosion.

The "improvement" was almost entirely an **accounting** event: a 1992 change in pension-liability treatment wiped out most of GM's book equity, mechanically inflating the equity multiplier. The underlying business deteriorated; the ROE spike was a denominator collapse. **The DuPont identity warns that ROE moves can be operationally meaningless** when they are leverage-driven (especially book-leverage-driven). Without decomposition, this signal is invisible.

## Extended DuPont (Ross §3.4 + Figure 3.1)

The three drivers can be further decomposed into their balance-sheet and income-statement leaves:

```
ROE
├── ROA
│   ├── Profit margin = Net income / Sales
│   │   ├── Net income = Sales − Total costs
│   │   │   └── Total costs = COGS + SG&A + R&D + Interest + Taxes
│   │   └── Sales
│   └── Total asset turnover = Sales / Total assets
│       ├── Sales
│       └── Total assets = Current assets + Fixed assets
│           └── Current assets = Cash + AR + Inventory
└── Equity multiplier = Total assets / Total equity
```

Each leaf is an actionable lever. Performance diagnosis with the extended chart can attribute an ROE change to specific operational decisions: cost control (COGS / SG&A / R&D leaves), receivables management (AR leaf), inventory management (Inventory leaf), capital-structure policy (Equity multiplier).

Faithful reproduction of Figure 3.1 (DuPont Inc 2016 financials, full numerical tree) lives in [[2019-01-01-ross-2019-fundamentals-ch3-financial-statements#artifact-3-the-extended-dupont-chart-figure-31|Ross source page §Artifact 3]].

## Why it matters for distress prediction

The DuPont decomposition is the implicit foundation under several distress-prediction moves:

- **Altman's Z-score** ([[altman-z-score]]) combines five ratios via MDA, and three of the five (EBIT/TA = operating-efficiency-with-TA-denominator, Sales/TA = asset turnover, WC/TA = liquidity-leverage hybrid) are kin to DuPont primitives.
- **The "profitability + turnover + leverage" triad** that recurs in [[2024-01-01-powell-2024-asean-accounting-early-warning-distress|Powell 2024]] and [[2026-02-04-bari-2026-us-small-business-distress-framework|Bari 2026]] tracks the DuPont decomposition's three legs, albeit operationalised differently per study.
- The diagnosis discipline DuPont teaches — *don't read ROE without decomposing it* — is directly transferable to distress diagnosis: don't read a single distress score without knowing which ratio family is driving it.

## Caveats

- **Algebraic, not causal.** The identity localises *where* an ROE change came from, not *why*. Why did margin fall? Why did leverage rise? Those questions require qualitative or further-quantitative investigation.
- **Equity-multiplier exploits.** As GM 1989-1993 illustrates, equity-multiplier expansion can be financially destructive even when it inflates ROE. Cross-firm DuPont comparisons should always state the source of leverage (organic growth vs. share buyback vs. accounting writedown).
- **Profitability ratios are book-based.** ROE and ROA are accounting rates of return, not market rates of return. The decomposition does not say anything about whether the firm is creating economic value (see [[2019-01-01-ross-2019-fundamentals-ch3-financial-statements|Ross §3.3 Profitability Measures]] caveats).

## Sources

- [[2019-01-01-ross-2019-fundamentals-ch3-financial-statements]] — Ross/Westerfield/Jordan §3.4. The canonical pedagogical reference for the identity, the GM warning, the Yahoo!/Alphabet contrast, and the Extended DuPont Chart.

## Related concepts

- [[financial-ratio-analysis]] — the umbrella concept providing the three DuPont primitives.
- [[common-size-statements]] — the sister standardisation technique (statement-level rather than ratio-level).
- [[altman-z-score]] — distress measure that combines ratios analogously, but linearly via MDA rather than multiplicatively.
- [[financial-distress]] — the analytic target the decomposition's diagnostic discipline informs.

## Debates and supersession

No supersession. The identity is algebraically exact and has been pedagogically stable for ~80 years (Donaldson Brown at DuPont, 1920s; codified in business-school curricula since the 1960s). Extensions exist (the **five-step DuPont** breaks profit margin into pre-tax margin × tax burden × interest burden) but do not retire the three-step form; they refine its rightmost leg.
