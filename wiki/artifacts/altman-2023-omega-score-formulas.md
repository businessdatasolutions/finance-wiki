---
type: artifact
artifact_kind: equation-block
title: "Omega Score — general form, regular (60-day), and early-warning (30-day) formulas (Altman 2023)"
source: "[[2022-11-28-altman-2023-omega-score-sme-default]]"
source_table_ref: "Tables 2 + body §Methods (formula derivation)"
source_pages: "pp. 2402–2406"
last_confirmed: 2026-05-25
accessed_at: 2026-05-25
aliases:
  - omega-score-formulas
  - omega-score-equations
tags: [omega-score, named-score, sme-default, financial-distress, mda, altman, payment-defaults, management-change]
---

# Omega Score — three formulas

> The paper's eponymous distress score, derived by MDA on LASSO-selected variables. **Regular** (60-day default) and **Early-warning** (30-day default) variants share the four-set structure but differ in variable composition and coefficients. The general form names the four variable sets that make Omega distinctive vs. classical Z-score: it adds payment-behavior, employee-related, and management-related variables to the financial-only Altman tradition.

## Provenance

| Field | Value |
|---|---|
| Source | [[2022-11-28-altman-2023-omega-score-sme-default]] |
| Source's reference | Tables 2 + §Methods |
| Location | pp. 2402–2406 |
| Last confirmed | 2026-05-25 |

## General form

```
Omega Score = Set 1 {Financial indicators}
            + Set 2 {Payment behavior variables}
            + Set 3 {Employee-related variables}
            + Set 4 {Management-related variables}
```

## Regular (60-day default) formula

```
Omega Score = Set 1 { +0.003 · Days of debtors' change
                      −0.328 · Retained earnings / Total assets
                      −0.617 · Quick ratio
                      −0.695 · Surplus dummy }
            + Set 2 { +0.621 · Number of short credit payment defaults }
            + Set 3 { +0.626 · Firing ratio
                      −0.029 · Mean employee tenure }
            + Set 4 { +0.395 · Change in management }
```

**Omega Score Groups (60-day):**

| Group | Band | Default rate (cumulative incidence) |
|---|---|---:|
| Alpha | Omega ≤ 0.007 | 15.6% |
| Beta | 0.007 < Omega ≤ 1.626 | 66.0% |
| Gamma | Omega ≥ 1.626 | **92.2%** |

## Early-warning (30-day default) formula

```
Omega Score = Set 1 { +0.154 · Days of clients' change
                      −0.299 · Personnel costs / Gross profit
                      −0.585 · Quick ratio
                      +0.002 · Days of debtors' change
                      −0.594 · Surplus dummy }
            + Set 2 { +0.798 · Number of short creditor payment defaults }
            + Set 3 { +0.583 · Firing ratio
                      −0.029 · Mean employee tenure }
```

**Omega Score Groups (30-day):**

| Group | Band | Default rate (cumulative incidence) |
|---|---|---:|
| Alpha | Omega ≤ 0.564 | 18.1% |
| Beta | 0.564 < Omega ≤ 0.931 | 60.5% |
| Gamma | Omega ≥ 0.931 | **92.4%** |

## Reading the formulas

**Sign conventions.** Positive coefficient = risk-increasing (higher Omega → higher predicted default). Negative coefficient = protective. So `−0.617 · Quick ratio` is intuitive (more liquidity, lower distress risk); `+0.621 · Payment defaults` is the dominant risk channel.

**Why the 30-day model drops `Change in management`.** A board change is a slower-acting signal — it shows up at 60-day default but is not yet evident at 30 days. The 30-day model substitutes Days of clients' change (a working-capital-pressure signal) and Personnel costs / Gross profit (a cost-margin warning).

**Why the 30-day model adds `Personnel costs / Gross profit`.** Short-horizon distress shows up as cost-margin pressure first — gross-profit compression preceding the eventual default by ~30 days. The 60-day window doesn't need this term because by 60 days the cost pressure has already produced bigger downstream signals.

**The four-set design choice** is the central contribution: Altman 1968's classical Z-score uses only Set 1 (financial). Omega adds the three behavioral sets (payment / employee / management). Empirically, payment-default count is the single largest contributor — but the management-and-employee channels each add 3–6 AUC points beyond the financial-only baseline (see [[altman-2023-hypothesis-test-performance]]).

## Cross-references

- The candidate variables Omega selects from: [[sme-distress-predictor-variables]] (164-variable Omega Score corpus catalogue).
- Default-risk thresholds + cumulative incidence: [[altman-2023-omega-score-groups]] (Table 3).
- Performance vs. Z′′ benchmark and vs. ML: [[altman-2023-prediction-performance-comparison]] (Table 5).
- Per-step hypothesis-test results showing the lift from each variable set: [[altman-2023-hypothesis-test-performance]] (Table 1).
- Monetary impact of the prediction improvement: [[altman-2023-monetary-impact]] (Table 6).
- Concepts: [[altman-z-score]], [[financial-distress]], [[multiple-discriminant-analysis]], [[omega-score]].
