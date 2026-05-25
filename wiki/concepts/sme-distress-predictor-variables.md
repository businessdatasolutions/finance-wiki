---
type: concept
title: "SME distress predictor variables (Altman Omega Score catalogue)"
aliases:
  - "Omega Score predictor variables"
  - "Altman 164-variable catalogue"
  - "SME default predictor catalogue"
  - "Omega Score variable dictionary"
confidence: 0.85
source_count: 1
last_confirmed: 2026-05-25
accessed_at: 2026-05-25
relationships:
  - type: part-of
    target: omega-score
  - type: supports
    target: sme-default-prediction
  - type: supports
    target: financial-distress
  - type: supports
    target: altman-z-score
  - type: supports
    target: payment-behavior-variables
tags: [sme-default, financial-kpis, variable-catalogue, predictor-variables, altman, omega-score, croatia, predictor-dictionary]
---

# SME distress predictor variables (Altman Omega Score catalogue)

The canonical catalogue of **164 candidate predictor variables** for SME default prediction, drawn from the appendix of [[2022-11-28-altman-2023-omega-score-sme-default|Altman et al. (2023) — *Revisiting SME default predictors: The Omega Score*]] (pp. 2411–2417). The catalogue spans 18 categories across five families: traditional financial ratios (Altman Z-Score lineage), payment-behavior, management-related, employee-related, and firm-level controls. Together these variables form the candidate space that LASSO selects from to build the [[omega-score]].

This page exists so other corpus sources can cite the catalogue rather than re-deriving the variable list locally. The Croatian provenance is preserved (the paper's training data comes from FINA administrative records, Tax Administration data, and government payment-block records), but the *variables themselves* are jurisdiction-portable: any economy with comparable administrative data layers can compute them.

## What this is

A **variable dictionary** for SME distress modelling — a research-method artifact, not a finding. The catalogue answers the question *"What is the candidate predictor space for an SME default model that goes beyond traditional financial ratios?"* The answer (per Altman et al. 2023): **164 candidates** across the categories below, organised by how they enter the [[omega-score|Omega Score]]'s four predictor sets (financial / payment-behavior / employee-related / management-related) plus the firm-level controls.

**How to use this catalogue:**
- **Replication / extension** — researchers building a new SME-distress model in any jurisdiction can start from this candidate space and select via LASSO or stepwise methods on local data.
- **Variable mapping across sources** — when comparing distress-prediction papers (Altman, Bari, Hajek, Powell, Habib, Luppe), the catalogue is the canonical reference for "did they use the same variables, or a different subset?"
- **Build vs buy decisions** — for organisations evaluating commercial credit-risk scores (Bureau van Dijk, Moody's, S&P), the catalogue names the variables those scores typically use behind the scenes.

**What this is not:**
- Not a synthesis (no debates resolved).
- Not a methodology (the LASSO + MDA pipeline lives on [[omega-score]] and [[multiple-discriminant-analysis]]).
- Not jurisdiction-specific (Croatian variable definitions are reproduced as-is; mapping to other administrative-data infrastructures is the reader's job).

## Variable categories overview

| # | Category | Variable count | Archetype | Σ family |
|---:|---|---:|---|---|
| 1 | Altman Z-Score variables (X1–X5 + Z′′) | 5 | Financial ratios (Altman lineage) | Financial |
| 2 | Business development (b1–b4) | 4 | Financial ratios | Financial |
| 3 | Profitability (p1–p10) | 10 | Financial ratios | Financial |
| 4 | Interest rate risk exposure (ir1–ir2) | 2 | Financial ratios | Financial |
| 5 | Liquidity (l1–l12) | 12 | Financial ratios | Financial |
| 6 | Financial leverage (le1–le7) | 7 | Financial ratios | Financial |
| 7 | Change in balance-sheet and P&L values (Δ X) | 43 | Year-over-year level changes | Financial |
| 8 | Size | 1 | Firm-level control | Controls |
| 9 | Age (firm age + firm age squared) | 2 | Firm-level control | Controls |
| 10 | Industry (NACE 2-digit) | 1 | Firm-level control | Controls |
| 11 | Region (Croatian county) | 1 | Firm-level control | Controls |
| 12 | Calendar year (year dummies) | 1 | Firm-level control | Controls |
| 13 | Internationalization | 3 | Firm-level control | Controls |
| 14 | Innovation | 3 | Firm-level control | Controls |
| 15 | Relational capital / public contracts / political | 5 | Firm-level control | Controls |
| 16 | Payment behavior variables | 6 | Account-blockage history | Payment-behavior |
| 17 | Employee-related variables (base + interactions) | 22 | Workforce composition + tenure + turnover | Employee-related |
| 18 | Management-related variables | 33 | CEO / board characteristics + management change | Management-related |

**Family totals** (per the paper's Table on p. 2394): Financial = 87, Payment-behavior = 6, Management-related = 33, Employee-related = 21, Controls = 17. **Grand total = 164 candidates** entering the LASSO selection stage.

**Transformation convention** — most Δ (change) variables in category 7 are computed as `log(1 + monetary_value)` (or the inverse hyperbolic sine for variables that can be negative, e.g. retained earnings, profits). This is a uniform transformation the paper applies to handle zero values and right-skew. The exact transformation per variable is noted in the description column where it differs from this default.

## Full catalogue

The dependent variable and 18 independent-variable categories, reproduced verbatim from the appendix (Altman et al. 2023, pp. 2411–2417), with category metadata added.

### Dependent variable — SME default

| Variable code | Description |
| --- | --- |
| Default 1 | Firm collects at least **30 days** payment default in period t+1. (Early-warning version.) |
| Default 2 | Firm collects at least **60 days** payment default in period t+1. (Regular version; closer to Basel III's 90-day standard but still earlier.) |

The Omega Score paper trains separate models for both definitions; the regular (60-day) model is the headline; the early-warning (30-day) model is the secondary contribution.

### Category 1 — Altman Z-Score variables

| Variable code | Description |
| --- | --- |
| X1 | (Current assets − current liabilities) / total assets |
| X2 | Retained earnings / total assets |
| X3 | Earnings before interest and taxes / total assets |
| X4 | Book value of equity / total liabilities |
| X5 | Sales / total assets |
| Z′′ | Altman Z′′-Score, calculated as: 3.25 + 6.56·X1 + 3.26·X2 + 6.72·X3 + 1.05·X4 |

**Z′′ score zones:**

| Zone | Threshold | Interpretation |
| --- | --- | --- |
| Safe Z | Z′′ > 2.99 | Healthy firm |
| Grey Z | 1.81 < Z′′ < 2.9 | Indeterminate |
| Distress Z | Z′′ < 1.81 | Distress |

The Z′′ score is itself a candidate predictor (i.e. the Omega Score model uses Z′′ as a feature, not as a benchmark to beat — though the paper *also* benchmarks against Z′′ for comparison).

### Category 2 — Business development

| Variable code | Description |
| --- | --- |
| b1 | Turnover change: (turnover_{t-1} − turnover_{t-2}) / turnover_{t-2} |
| b2 | Fixed assets variation: (fixed assets_{t-1} − fixed assets_{t-2}) / fixed assets_{t-2} |
| b3 | (Depreciation fund / fixed assets) change |
| b4 | Equity change |

### Category 3 — Profitability

| Variable code | Description |
| --- | --- |
| p1 | EBIT variation |
| p2 | (EBIT + financial profit) / (total assets − nonfinancial debt) |
| p3 | EBIT / turnover |
| p4 | (EBIT / turnover) change |
| p5 | Personnel costs / gross profit |
| p6 | Inventories change / turnover change |
| p7 | Cost of goods sold / turnover |
| p8 | Added value / fixed asset |
| p9 | EBIT / total investments |
| p10 | Depreciation rate change |

### Category 4 — Interest rate risk exposure

| Variable code | Description |
| --- | --- |
| ir1 | Interest costs / financial debt |
| ir2 | (EBIT + financial profit) / (total assets − nonfinancial debt) − (interest costs / financial debt) |

### Category 5 — Liquidity

| Variable code | Description |
| --- | --- |
| l1 | Current ratio = current assets (non-financial) / current liabilities (nonfinancial) |
| l2 | Liquid assets / current assets |
| l3 | Quick ratio = cash / current liabilities (nonfinancial) |
| l4 | EBITDA / turnover |
| l5 | (Working capital / turnover) |
| l6 | Days of clients' change; days of clients = ending receivables / (Sales / 360) |
| l7 | Days of inventories change |
| l8 | Days of debtors change |
| l9 | (EBITDA − tax) / short-term financial debt |
| l10 | (EBITDA − tax) / financial debt |
| l11 | EBITDA / interest costs |
| l12 | Net profit + amortization / short-term financial debt |

### Category 6 — Financial leverage

| Variable code | Description |
| --- | --- |
| le1 | (Financial debt − cash) / turnover |
| le2 | (Financial debt − cash) / equity |
| le3 | (Financial debt − cash) / (equity − intangible assets) |
| le4 | Short-term financial debt / financial debt |
| le5 | Equity / fixed assets |
| le6 | Interest cost / turnover |
| le7 | Equity / total investments |

### Category 7 — Change in balance-sheet and P&L statement values

All variables computed as **log(1 + monetary_value)** unless noted otherwise. Variables marked † use the **inverse hyperbolic sine** transformation to handle negative values (retained earnings, profits/losses).

**Asset-side changes (11):**

| Variable code | Description |
| --- | --- |
| Δ noncurrent assets | Change in noncurrent assets from t-1 to t |
| Δ intangible assets | Change in intangible assets from t-1 to t |
| Δ research and development costs | Change in R&D costs from t-1 to t |
| Δ value of intellectual property | Change in concessions, patents, licensees, trademarks value from t-1 to t |
| Δ current assets | Change in current assets from t-1 to t |
| Δ inventories | Change in inventories from t-1 to t |
| Δ receivables | Change in receivables from t-1 to t |
| Δ current financial assets | Change in current financial assets from t-1 to t |
| Δ cash | Change in cash from t-1 to t (cash in bank and cashier) |
| Δ assets | Change in total assets from t-1 to t |
| Δ capital and reserves | Change in capital and reserves from t-1 to t |

**Equity / retained earnings (1):**

| Variable code | Description |
| --- | --- |
| Δ retained earnings (or losses) † | Change in retained earnings (or losses) from t-1 to t (inverse hyperbolic sine) |

**Liability-side changes (14):**

| Variable code | Description |
| --- | --- |
| Δ noncurrent liabilities | Change in noncurrent liabilities from t-1 to t |
| Δ noncurrent liabilities to affiliates | Change in noncurrent liabilities to affiliates |
| Δ noncurrent liabilities for loans, deposits and similar | (as named) |
| Δ noncurrent liabilities to banks and other financial institutions | (as named) |
| Δ noncurrent liabilities to suppliers | (as named) |
| Δ noncurrent liabilities for securities | (as named) |
| Δ current liabilities | Change in current liabilities from t-1 to t |
| Δ current liabilities to affiliates | (as named) |
| Δ current liabilities for loans, deposits and similar | (as named) |
| Δ current liabilities to banks and other financial institutions | (as named) |
| Δ current liabilities to suppliers | (as named) |
| Δ current liabilities for securities | (as named) |
| Δ current liabilities on the basis of share in the result | (as named) |
| Δ other current liabilities | (as named) |

**P&L statement changes (17):**

| Variable code | Description |
| --- | --- |
| Δ deferred payment | Change in deferred payment from t-1 to t (deferred payment of expenses and income for the future period) |
| Δ revenue | Change in revenue from t-1 to t |
| Δ sales | Change in sales from t-1 to t |
| Δ material costs | Change in material costs from t-1 to t |
| Δ costs of goods sold | Change in costs of goods sold from t-1 to t |
| Δ other external costs | Change in other external costs from t-1 to t |
| Δ employee costs | Change in employee costs from t-1 to t |
| Δ depreciation | Change in depreciation from t-1 to t |
| Δ other costs | Change in other costs from t-1 to t |
| Δ financial revenue | Change in financial revenue from t-1 to t |
| Δ other financial revenue | Change in other financial revenue from t-1 to t |
| Δ profits (or loss) before taxation † | Inverse hyperbolic sine of 1+ value |
| Δ profit tax | Change in profit tax from t-1 to t |
| Δ profits (or loss) † | Inverse hyperbolic sine of 1+ value |
| Δ exports | Change in exports from t-1 to t |
| Δ imports | Change in imports from t-1 to t |
| Δ employees | Change in number of employees from t-1 to t |

### Category 8 — Size

| Variable code | Description |
| --- | --- |
| Firm size | Categorical 1–4: **1** = <10 employees, **2** = 10–49, **3** = 50–249, **4** = ≥250 |

### Category 9 — Age

| Variable code | Description |
| --- | --- |
| Firm age | Number of years the firm has been active in the market |
| Firm age squared | (Firm age)² — captures non-linear age effects |

### Category 10 — Industry

| Variable code | Description |
| --- | --- |
| NACE 2-digit | Categorical variable of NACE 2-digit sectors |

### Category 11 — Region

| Variable code | Description |
| --- | --- |
| County | Categorical variable for 21 counties in Croatia |

### Category 12 — Calendar year

| Variable code | Description |
| --- | --- |
| Year | Year dummies |

### Category 13 — Internationalization

| Variable code | Description |
| --- | --- |
| Exporter | Dummy = 1 if a firm exports, 0 otherwise |
| Export intensity | Exports / total sales |
| Import intensity | Imports / total sales |

### Category 14 — Innovation

| Variable code | Description |
| --- | --- |
| Intellectual property dummy | = 1 if firm has nonzero value of intellectual property (patents, trademarks), 0 otherwise |
| Intellectual property ratio | Intellectual property value / total assets |
| R&D active | = 1 if firm has nonzero R&D expenditures, 0 otherwise |

### Category 15 — Relational capital / public contracts / political connections

| Variable code | Description |
| --- | --- |
| Public contract | = 1 if firm received a government contract, 0 otherwise |
| Number of public contracts | Count of government contracts received |
| Public revenue | Value of public money received through government contracts |
| Political connection | = 1 if firm owner or top management connected to local/regional/national politicians (Srhoj & Dragojević 2021) |
| Donation | = 1 if firm donated funds to a political party, 0 otherwise |

### Category 16 — Payment behavior variables

| Variable code | Description |
| --- | --- |
| Blockage duration | Duration (in days) of the firm's payment default |
| Category duration | 0 = no default payment; 1 = default payment up to 7 days; 2 = 7–30 days; 3 = 30–59 days default duration |
| Category blocks | Categorical: number of times a firm has experienced default payment in a year |
| Blockage duration (t-1) | Duration (in days) of the firm's payment default in year t-1 |
| Category duration (t-1) | Same categorical mapping as `Category duration`, year t-1 |
| Category blocks (t-1) | Same categorical as `Category blocks`, year t-1 |

### Category 17 — Employee-related variables

**Base variables (10):**

| Variable code | Description |
| --- | --- |
| Share of HE | Share of employees with tertiary-level (Higher Education) education |
| Share of LE | Share of employees with primary or secondary-level (Lower Education) education |
| Share of males | Share of male employees in total number of employees |
| Share of NFC | Share of non-fixed contracts (NFC) in total number of contracts |
| Firing ratio | Employees with terminated contract in period t / total employees at t-1 |
| Hires ratio | Employees with signed contract in period t / total employees at t-1 |
| Change ratio | (Hires − firings) in period t / total employees at t-1 |
| Turnover ratio | (Hires + firings) in period t / total employees at t-1 |
| Tenure | Mean number of years employees have been at the firm |
| Employee age | Mean employee age in the firm |

**Age-interaction variables (12)** — six base employee variables interacted with firm age, then again with firm age squared:

| Variable code | Description |
| --- | --- |
| Age × turnover ratio | Firm age × turnover ratio |
| Age × firing ratio | Firm age × firing ratio |
| Age × hires ratio | Firm age × hires ratio |
| Age × change ratio | Firm age × change ratio |
| Age × tenure | Firm age × mean employee tenure |
| Age × employee age | Firm age × mean employee age |
| Age² × turnover ratio | (Firm age)² × turnover ratio |
| Age² × firing ratio | (Firm age)² × firing ratio |
| Age² × hires ratio | (Firm age)² × hires ratio |
| Age² × tenure | (Firm age)² × mean employee tenure |
| Age² × employee age | (Firm age)² × mean employee age |

### Category 18 — Management-related variables

**CEO prior experience (5):**

| Variable code | Description |
| --- | --- |
| CEO with prior managerial experience | Dummy = 1 if managers have prior managerial experience, 0 otherwise |
| CEO with prior experience in same industry | = 1 if managers have prior managerial experience in same industry as current firm |
| CEO with prior experience in SMEs | = 1 if managers have prior managerial experience with SMEs |
| CEO with prior experience in large firms | = 1 if managers do **not** have prior managerial experience with large firms (note inversion) |
| CEO managed defaulted firm | = 1 if managers have managed a defaulted firm before |

**CEO previous-firm performance quartiles (4)** — prior firm's return-on-assets position within its NACE 4-digit sector distribution at the time the manager left:

| Variable code | Description |
| --- | --- |
| CEO previous experience: low | = 1 if prior firm was in the 4th (lowest) RoA quartile |
| CEO previous experience: low medium | = 1 if prior firm was in the 3rd RoA quartile |
| CEO previous experience: medium high | = 1 if prior firm was in the 2nd RoA quartile |
| CEO previous experience: high | = 1 if prior firm was in the 1st (highest) RoA quartile |

**CEO other current experience (4):**

| Variable code | Description |
| --- | --- |
| CEO with other current experience | = 1 if managers manage another firm simultaneously |
| CEO with other current experience in same industry | = 1 if managers manage another firm in same industry simultaneously |
| CEO with other current experience in SME | = 1 if managers manage another SME simultaneously |
| CEO with other current experience in large firm | = 1 if managers manage another large firm simultaneously |

**CEO current-firm performance quartiles (5)** — current other-managed firm's RoA quartile + a defaulted-firm dummy:

| Variable code | Description |
| --- | --- |
| CEO managed current defaulted firm | = 1 if managers manage a defaulted firm simultaneously in the last two years |
| CEO current experience: low | = 1 if currently managed other firm in 4th (lowest) RoA quartile |
| CEO current experience: low medium | = 1 if in 3rd RoA quartile |
| CEO current experience: medium high | = 1 if in 2nd RoA quartile |
| CEO current experience: high | = 1 if in 1st (highest) RoA quartile |

**Management change indicators (5):**

| Variable code | Description |
| --- | --- |
| Change in management | = 1 if there was a change in management during the last two years |
| CEO mean years' experience | Mean age of all managers |
| First change in management | = 1 for the firm's **first** significant change in management (year-specific) |
| CEO swap | = 1 if top managers of a firm differ from those of the previous year |
| Any change in management | = 1 if there was any change in management during the last two years |

**Board composition counts (7):**

| Variable code | Description |
| --- | --- |
| Number of board managers and owners | Count |
| Number of managers | Count |
| Number of board chairs | Count |
| Number of deputy chairs | Count |
| Number of board members | Count |
| Number of bankruptcy officials | Count |
| Number of founders | Count |

**Gender composition (3):**

| Variable code | Description |
| --- | --- |
| All male managers | = 1 if all managers are male |
| All female board members | = 1 if all board members are female |
| Mixed gender board members | = 1 if at least one manager is male and at least one is female |

## What the Omega Score selects

LASSO selects a small subset of these 164 candidates for the operational Omega Score formula:

- **Regular (60-day) Omega Score uses 9 variables**: 4 financial (Days of debtors' change, Retained earnings/Total assets, Quick ratio, Surplus dummy) + 1 payment-behavior (Number of short credit payment defaults) + 2 employee (Firing ratio, Mean employee tenure) + 1 management (Change in management) + 1 financial (`p5` Personnel costs / Gross profit appears in the 30-day model only).
- **Early-warning (30-day) Omega Score uses 8 variables**: 5 financial (Days of clients' change, Personnel costs/Gross profit, Quick ratio, Days of debtors' change, Surplus dummy) + 1 payment-behavior + 2 employee. Notably **drops Change in management** — a slower-acting signal that shows up at 60 days but not yet at 30.

See [[omega-score]] for the full formulas with coefficients and risk-band thresholds.

## Cross-references

**Sources that use subsets of this catalogue** (to be filled in opportunistically via [§neighbour-source-scan](../../CLAUDE.md#process) as other financial-distress papers are re-opened):

- [[2022-11-28-altman-2023-omega-score-sme-default]] — the *originating* source. Uses the full 164-candidate space; LASSO selects 8–9 for the operational formula.
- [[2024-01-01-powell-2024-asean-accounting-early-warning-distress]] — uses a subset of category 1 (Altman Z-Score variables) plus its own profitability/liquidity ratios; does **not** include the management/employee channels.
- [[2024-06-22-hajek-2024-distress-prediction-annual-reports]] — uses financial ratios from categories 1, 3, 5, 6 plus its own NLP-derived risk-factor text features; non-financial channel is *unstructured* text rather than the structured management/employee variables here.
- [[2026-02-04-bari-2026-us-small-business-distress-framework]] — Bari's seven indicator families (liquidity / profitability / leverage / cash flow / efficiency / credit behaviour / relationship-based) overlap heavily with categories 1, 3, 5, 6, 16. *Map TBD via neighbour-source-scan.*
- [[2020-01-01-habib-2020-distress-determinants-consequences-review]] — does not select specific variables but its determinants taxonomy mirrors several categories here. Reviews the literature that Altman et al. (2023) are extending.
- [[2012-09-01-luppe-2012-anchoring-accounting-indicators]] — Pass-1 source; behavioural / anchoring focus rather than variable selection.

**Concepts this catalogue underpins:**

- [[financial-distress]] — the umbrella concept; this catalogue is the *operational* answer to "what variables do you measure to detect distress?"
- [[altman-z-score]] — category 1 (X1–X5 + Z′′) is the original Altman lineage; the catalogue extends it with 159 additional candidates.
- [[omega-score]] — the specific Omega Score formula uses 8–9 of these 164 variables.
- [[sme-default-prediction]] — the application domain; the catalogue is the predictor menu.
- [[payment-behavior-variables]] — category 16 is the canonical payment-behavior variable set (Norden & Weber 2010 lineage).
- [[multiple-discriminant-analysis]] — the method that maps the LASSO-selected variables to the single Omega Score formula.

## Debates and supersession

(Placeholder — open contradictions and supersession events will be recorded here as other corpus sources extend, contradict, or supersede this catalogue. Examples that could land here: a future source proposing alternative variable transformations for category 7; a study using a richer employee-tenure breakdown than the single `Tenure` variable; a jurisdiction where the management-change indicator's construction details affect predictive power differently.)

## Provenance

| Field | Value |
| --- | --- |
| Originating source | [[2022-11-28-altman-2023-omega-score-sme-default]] |
| Appendix location | pp. 2411–2416 (journal); PDF pp. 30–35 |
| Total variables | 164 (paper's count; my recount: ~158–164 depending on counting conventions, esp. CEO experience quartiles) |
| Reproduction scope | All 18 categories, all variable codes + descriptions reproduced verbatim |
| Transformation notation added | Category 7 (Δ variables) — uniform `log(1+x)` or inverse hyperbolic sine for negative-capable variables; this is implicit in the paper, made explicit here |
| Created | 2026-05-25 (Phase C of the appendix-schema refactor; see [[../log|log]]) |
