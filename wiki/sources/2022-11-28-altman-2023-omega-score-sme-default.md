---
type: source
kind: paper
title: "Revisiting SME default predictors: The Omega Score"
author:
  - "Altman, E. I."
  - "Balzano, M."
  - "Giannozzi, A."
  - "Srhoj, S."
url: "https://doi.org/10.1080/00472778.2022.2135718"
date_published: 2022-11-28
length: "~36 pages (Pass 2 — abstract, intro, methods, results, all 6 tables, Figure 1, discussion read in full; Appendix variable catalogue (pp. 2411–2417) read in full and reproduced as [[sme-distress-predictor-variables]] on 2026-05-25; Supplementary Material Tables SM1–SM12 and Figures SM1–SM7 still referenced but not opened)"
venue: "Journal of Small Business Management, 61(6), 2383–2417"
doi: "10.1080/00472778.2022.2135718"
citation_key: "altman_2023_omega"
raw: "../../raw/papers/altman-2023-omega-score-sme-default.md"
pdf: "../../raw/assets/altman-2023-omega-score-sme-default.pdf"
confidence: 0.85
last_confirmed: 2026-05-25
source_count: 1
accessed_at: 2026-05-25
tags: [sme-default, omega-score, altman-z-score, lasso, machine-learning, croatia, payment-behavior, employee-turnover, management-change, default-prediction]
dynamic_capabilities:
  - digital-sensing/scanning-environment
  - digital-seizing/strategic-decision-making
relationships:
  - type: supports
    target: 2020-01-01-habib-2020-distress-determinants-consequences-review
    via: "operationalises Habib's call for partial→holistic distress models with management+employee channels"
  - type: supports
    target: 2024-01-01-powell-2024-asean-accounting-early-warning-distress
    via: "same Altman-MDA tradition; Omega adds non-financial variables that Powell's MDA does not include"
  - type: supports
    target: 2024-06-22-hajek-2024-distress-prediction-annual-reports
    via: "parallel multi-channel argument — Altman adds structured non-financial, Hajek adds unstructured text"
  - type: supports
    target: 2026-02-04-bari-2026-us-small-business-distress-framework
    via: "both papers extend SME distress prediction beyond financial ratios; behavioural channels add R² and AUC"
  - type: authored-by
    target: Edward-I-Altman
  - type: part-of
    target: sme-distress-predictor-variables
    via: "originating source of the 164-variable predictor catalogue; the concept page reproduces the full appendix"
---

# Revisiting SME default predictors: The Omega Score

> SME default prediction is a long-standing issue in the finance and management literature. Proper estimates of the SME risk of failure can support policymakers in implementing restructuring policies, rating agencies and credit analytics firms in assessing creditworthiness, public and private investors in allocating funds, entrepreneurs in accessing funds, and managers in developing effective strategies. Drawing on the extant management literature, we argue that introducing management- and employee-related variables into SME prediction models can improve their predictive power. To test our hypotheses, we use a unique sample of SMEs and propose a novel and more accurate predictor of SME default, the Omega Score, developed by the Least Absolute Shrinkage and Selection Operator (LASSO). Results were further confirmed through other machine-learning techniques. Beyond traditional financial ratios and payment behavior variables, our findings show that the incorporation of change in management, employee turnover, and mean employee tenure significantly improve the model's predictive accuracy.

## TL;DR

Altman et al. extend the **Altman Z-score lineage** (Z → Z′′ → Omega) for SME default prediction by adding **management-related variables** (change in management) and **employee-related variables** (firing ratio, mean employee tenure) on top of traditional financial ratios and payment-behavior variables. Using LASSO on 164 candidate predictors over 2,040 Croatian SMEs (2015–2019), they construct a one-formula **Omega Score** with three risk bands (Alpha / Beta / Gamma). Omega outperforms the recalibrated Z′′-score by **+16.8 AUC points** (87.2 vs 70.4) and recovers €15.6 million of additional correctly-classified defaulted debt versus the benchmark — an 18.9 % improvement.

## Citation

**APA (7th edition):**

> Altman, E. I., Balzano, M., Giannozzi, A., & Srhoj, S. (2023). Revisiting SME default predictors: The Omega Score. *Journal of Small Business Management*, *61*(6), 2383–2417. https://doi.org/10.1080/00472778.2022.2135718

**BibTeX:**

```bibtex
@article{altman_2023_omega,
  author  = {Altman, Edward I. and Balzano, Marco and Giannozzi, Alessandro and Srhoj, Stjepan},
  title   = {{Revisiting SME Default Predictors: The Omega Score}},
  journal = {Journal of Small Business Management},
  year    = {2023},
  volume  = {61},
  number  = {6},
  pages   = {2383--2417},
  doi     = {10.1080/00472778.2022.2135718}
}
```

## What was actually ingested

**Pass 2** — full read of abstract, introduction, theoretical background + three hypotheses, methodology (sample/setting, dependent/independent variables, statistical method), results, discussion (theoretical + practical + limitations). All six in-body tables (Tables 1–6) and Figure 1 read with the markdown conversion cross-checked against the original PDF.

**Appendix backfill (2026-05-25).** The appendix variable catalogue (pp. 2411–2417, ~164 variables across 18 categories) was originally deferred and noted as untranscribed. It has since been read in full and reproduced as the standalone concept page [[sme-distress-predictor-variables]] — see [§Appendix content](#appendix-content) below. This was the trigger for the v0.5+ appendix-schema refactor (new CLAUDE.md §Check 5, §Appendix content extraction, and quality-rubric D6).

**Still deferred.** The Supplementary Material (Tables SM1–SM12 and Figures SM1–SM7) was referenced but not opened. Future re-read opportunity.

## Context (WHY)

The paper sits in the **Altman Z-score lineage**: Altman 1968 (large corporations) → Altman 1977 (Zeta) → Altman 1995 (non-listed firms via Z′′) → Altman et al. 2017 → **Omega 2023** (SMEs with non-financial variables). The intellectual move is *outward* from financial-statement-only models: prior work integrated **payment-behavior variables** (Norden & Weber 2010; Altman & Sabato 2007; Ciampi 2015), then **governance variables** (Ciampi 2015; García & Herrero 2021), and the paper argues two further channels are non-overlapping and predictive: **management-related** (board composition, change in management) and **employee-related** (turnover, tenure). The hypothesis stack is explicit:

- **H1**: payment-behavior variables improve over financial-indicators-only.
- **H2**: management-related variables further improve H1.
- **H3**: employee-related variables further improve H1.

Sits adjacent to [[2020-01-01-habib-2020-distress-determinants-consequences-review]] (which catalogues the broader determinants literature) and to [[2024-01-01-powell-2024-asean-accounting-early-warning-distress]] (which extends classical MDA to ASEAN without the management/employee layer).

**Theoretical bases**: resource-based view (human capital → competitive advantage, Coff 1997; Hitt et al. 2001), corporate-governance literature (Dowell et al. 2011), employee-mobility/turnover literature (Mawdsley & Somaya 2015; Li et al. 2021), and bounded-rationality limits of financial-statement-only credit models (Beaver et al. 2010 critique inherited via Habib 2020 review).

## Methods (HOW)

**Sample.** 2,040 Croatian SMEs over 2015–2019, drawn from six unique census datasets (FINA administrative data + payment-block records + Tax Administration data on managers/employees). 1,020 defaulted + 1,020 randomly-matched non-defaulted (Barboza et al. 2017 design). Training years 2015–2016; **out-of-sample + out-of-time test** years 2017–2018. One-year prediction horizon. Period chosen to *avoid* COVID-era policy distortions (Dörr et al. 2022 document ~25,000 zombie firms shielded by pandemic support).

**Novel outcome variable.** SME is defaulted when bank account is blocked **30 days** (early warning) or **60 days** (regular) after a payment violation — an earlier event than legal bankruptcy or Basel III 90-day default. Of bank-blocked SMEs, only 30–33 % enter formal bankruptcy procedures within two years, confirming the proposed indicator is *earlier* than failure.

**Predictor sets** (164 candidates total):

| Group | Variables | Source |
|---|---:|---|
| Financial indicators | 87 | FINA balance sheet, income statement, liquidity, leverage |
| Payment-behavior | 6 | Account-blockage frequency and duration |
| Management-related | 33 | Board gender, manager age, experience, change in management |
| Employee-related | 21 | Mean tenure, firing/hiring ratio, contract types, education share |
| Controls | 17 | Exports, R&D, intangibles, age, sector, region, year, political connections, public procurement |

**Statistical method.** Logit LASSO (Tibshirani 1996; `rlassologit` in R `hdm` package) for variable selection, fed gradually with widening sets. Selected variables then run through (i) plain logit, (ii) **Multiple Discriminant Analysis (MDA)** to construct the univariate Omega Score (deliberately returning to Altman's 1968 method for interpretability), (iii) random forest, (iv) XGBoost. **k-means clustering** on Omega Score values to derive three risk bands (Alpha / Beta / Gamma). Model selection prioritised AUC (acceptable ≥0.70, excellent ≥0.80, outstanding ≥0.90, per Paraschiv et al. 2021), then accuracy, then specificity. VIF checks throughout.

**Robustness.** Stepwise logistic regression as cross-check (similar variables selected); macro variables from US CCAR/DFAST stress-test recommendations tested (no improvement); alternative SME definitions (asset / turnover based) tested.

## Results (WHAT)

**Recalibration baseline.** Original Altman Z′′-Score yields AUC = 0.659 (60-day) / 0.672 (30-day). Recalibrating the Z′′-Score weights on the Croatian sample lifts it to AUC = 0.704 / 0.720 — the **benchmark model** for downstream comparisons.

**Hypothesis tests (Table 1).** All three hypotheses supported. AUC climbs monotonically as variable groups are added:

| Model | Variable groups | AUC | Δ AUC vs benchmark |
|---|---|---:|---:|
| (1) Benchmark Z′′ | Financial only (recalibrated) | 70.4 | – |
| (2) LASSO | Financial only | 79.6 | +9.2 |
| (3) LASSO | Financial + Mgmt + Employee | 82.6 | +12.2 |
| (4) LASSO | Financial + Payment behavior | 86.0 | +15.6 |
| (5) LASSO | Financial + Payment + Mgmt + Employee | **88.0** | **+17.6** |

**Variable selection (Table 2).** LASSO retains for the 60-day model: surplus dummy, quick ratio, days of debtors' change, days of clients' change, retained earnings / total assets, previous payment defaults (4 levels), **change in management**, **mean employee tenure**, **firing ratio**. The 30-day model swaps in personnel costs / value added and equity / total investments; drops change in management. Coefficients (relative-risk ratios; <1 = protective, >1 = risk-increasing) reveal the previous-payment-default escalation: 1-block RR ≈ 3.7; 4+ blocks RR ≈ 12.7–17.3.

**Omega Score (Table 4).** MDA on LASSO-selected variables yields a single-formula **Omega Score** achieving **AUC = 87.2** (60-day) — a **+16.8 AUC** lift over benchmark, and only 0.8 points below the much-less-interpretable full LASSO (88.0). The trade-off (slight accuracy loss for usability) is the central design choice. 30-day early-warning version: AUC = 84.4.

**ML upper bounds (Table 5).** Random forest reaches AUC = 89.0; XGBoost reaches AUC = **90.3** ("outstanding"). The Omega Score remains the most important XGBoost feature by a wide margin (see Figure 1) — meaning the score is both interpretable *and* the dominant signal even when nonlinear methods get to look at everything.

**Economic significance (Table 6).** Of €274 million total defaulted debt in the test sample, the benchmark Z′′ misclassifies €82.5 M; Omega misclassifies €66.9 M — a **€15.6 M (18.9 %) improvement** in correctly classified defaulted debt. Assuming Croatian bankruptcy recovery rate of 36 % (World Bank Doing Business), unrecovered amount could reach €10 M.

## Visual content

The paper carries 6 in-body tables (Tables 1–6) and 1 figure (Figure 1), plus referenced supplementary material (Figures SM1–SM7, Tables SM1–SM12) that this Pass 2 read did not open.

### Table 1 — Prediction performance metrics

**Type:** numeric performance table. **Location:** p. 2395.

5 columns × 9 rows. Columns are the five sequential model specifications (benchmark Z′′; financial-only LASSO; financial+mgmt+employee LASSO; financial+payment LASSO; full LASSO). Rows give AUC, Δ AUC, Accuracy, Δ Accuracy, Specificity, Δ Specificity (all in percent). The table is the empirical core of the hypothesis tests — every additional variable group adds 3–6 AUC points. → reproduced above in §Results.

### Table 2 — LASSO selected variables and logit coefficients

**Type:** regression-results table. **Location:** p. 2396.

13 selected variables × 2 columns (60-day default model | 30-day default model). Coefficients in **relative-risk ratio** form (exponentiated logit). Significance stars (* p<0.1, ** p<0.05, *** p<0.01). Most striking row: *Previous payment default (4)* with RR = 12.7 (60-day) / 17.3 (30-day) — a 4th prior block multiplies default odds 13–17 ×. The previous-payment-default ladder (1 → 2 → 3 → 4 blocks; RR = 3.7 → 5.3 → 6.5 → 12.7) is a quasi-dose-response. → key rows transcribed in §Results.

### Table 3 — Omega Score Groups and SME default counts

**Type:** cross-classification table. **Location:** p. 2397.

3 Omega-Score groups (Alpha / Beta / Gamma) × 4 columns (defaulted, non-defaulted, total, cumulative-incidence %). Shown for both 60-day and 30-day definitions. The cumulative incidence is the headline takeaway: Alpha = 15.6 % default rate; Beta = 66.0 %; Gamma = **92.2 %**. Risk-ratios (Alpha as reference): Beta = 4.23 ×, Gamma = 5.90 ×. → reproduced below in §Distinctive artifacts.

### Table 4 — Prediction performance metrics: Omega vs Z′′-Score

**Type:** numeric performance comparison. **Location:** p. 2398.

6 columns × 6 rows. The Regular (60-day) and Early-warning (30-day) versions side-by-side, each with three model variants (benchmark / Omega groups / continuous Omega Score). Reading column 3 vs column 1 gives the headline ΔAUC = +16.8 points for the regular Omega Score over recalibrated Z′′. → reproduced above in §Results.

### Table 5 — Prediction performance metrics: Z′′, Omega Score and machine-learning models

**Type:** numeric performance comparison. **Location:** p. 2402.

5 columns × 6 rows. Adds Random forest and XGBoost to the Table-4 comparison. **XGBoost AUC = 90.3** is the empirical ceiling; Omega Score at 87.2 captures most of the gain at much higher interpretability. The 3-point AUC gap between Omega and XGBoost is the interpretability-vs-accuracy trade-off the discussion centres on. → reproduced below in §Distinctive artifacts.

### Table 6 — Quantifying the improved SME default prediction (monetary values)

**Type:** monetary-impact table. **Location:** p. 2402.

3 rows (SMEs defaulted / Benchmark Type-II error / Omega Type-II error) × 4 monetary columns (bank-defaulted debt / supplier-defaulted debt / government-defaulted debt / total). Of 458 defaulted SMEs with €274 M total defaulted debt, benchmark misclassifies 172 SMEs (37.6 %) holding €82.5 M; Omega misclassifies 126 SMEs (28 %) holding €66.9 M. **Improvement = €15.6 M.** Note paragraph extrapolates to potential €10 M unrecovered debt at 36 % Croatian bankruptcy recovery rate. → reproduced below in §Distinctive artifacts.

### Figure 1 — "Important variables" from XGBoost

**Type:** horizontal bar chart. **Location:** p. 2399.

10 variables on the y-axis, ranked by XGBoost feature-importance score (x-axis, ~0 to ~0.4 scale, no explicit unit label — gain or split-fraction by convention). The **Omega Score** bar is dominant (~0.4), followed by Blockage duration (t), Mean employee tenure, Quick ratio, Interest cost / turnover, Days of debtors' change, Change in turnover, Liquid assets / current assets, Blockage duration (t−1), Days of clients' change. The chart's argument: even when XGBoost is fed all 164 variables plus the Omega Score, **Omega Score dominates** — the discriminant-analysis projection is more informative than any individual financial ratio. **Visualisation quality**: axis label missing (importance scale unitless); no error bars (single-fit feature importance has no natural CI); ranking robust to randomness of XGBoost initialisation (not shown but typical for XGBoost gain-importance on this kind of sample).

### Supplementary material (not opened during this Pass 2 read)

- **Figure SM1** — variable correlation matrix; **Table SM2** — correlated-pair retention decisions
- **Figures SM2–SM3** — jitter plots of Omega Score categories vs default
- **Figure SM4** — bar plot of default rates across Omega groups
- **Figure SM5** — example XGBoost tree (first split on Omega Score ≤ 0.548; second splits on mean tenure or quick ratio)
- **Figure SM6** — ROC curves for recalibrated Z′′ and Omega Score
- **Figure SM7** — Principal Component Analysis graphs
- **Tables SM1, SM3–SM12** — detailed performance metrics, stepwise-logit results, macro-variable robustness, NACE 1-digit industry distribution

Opportunistic recovery path if a follow-on query needs these: open the PDF supplementary URL or `raw/assets/altman-2023-omega-score-sme-default.pdf` page 17 + the Taylor & Francis SM endpoint.

## Appendix content

The paper carries a single substantive appendix at journal pp. 2411–2417 (PDF pp. 30–35). The appendix is the wiki's highest-leverage artifact from this source — it catalogues the full 164-variable candidate space that LASSO selects from to build the Omega Score. After deferral at first ingest (2026-05-25 batch), the appendix was read in full and reproduced as a standalone concept page on the same day, as the proof-of-concept for the v0.5+ appendix-schema refactor.

### Appendix — Description of the variables used

**Type:** variable-definitions (catalogue / data dictionary)
**Location:** pp. 2411–2417 (PDF pp. 30–35)
**Reproduction:** extracted to [[sme-distress-predictor-variables]]

Standalone concept page — corpus-wide reference catalogue cross-linked from [[financial-distress]] and [[altman-z-score]] (existing); intended to be cross-linked from `omega-score`, `payment-behavior-variables`, and `sme-default-prediction` when those concept pages are created (currently dangling references on this source page).

The catalogue contains **164 candidate predictor variables across 18 categories**, organised by family per the paper's Table on p. 2394: Financial = 87, Payment-behavior = 6, Management-related = 33, Employee-related = 21, Controls = 17. The 18 within-family categories are:

1. **Altman Z-Score variables** (X1–X5 + Z′′ formula + 3 zones — 5 vars)
2. **Business development** (b1–b4 — 4 vars)
3. **Profitability** (p1–p10 — 10 vars)
4. **Interest rate risk exposure** (ir1–ir2 — 2 vars)
5. **Liquidity** (l1–l12 — 12 vars)
6. **Financial leverage** (le1–le7 — 7 vars)
7. **Change in balance-sheet and P&L statement values** (Δ variables — 43 vars; uniform `log(1+x)` transformation, or inverse hyperbolic sine for negative-capable variables like retained earnings, profits)
8. **Size** (1 var; categorical 1–4 by employee count)
9. **Age** (firm age + firm age squared — 2 vars)
10. **Industry** (NACE 2-digit — 1 var)
11. **Region** (Croatian county — 1 var)
12. **Calendar year** (year dummies — 1 var)
13. **Internationalization** (3 vars: exporter, export intensity, import intensity)
14. **Innovation** (3 vars: IP dummy, IP ratio, R&D active)
15. **Relational capital / public contracts / political connections** (5 vars)
16. **Payment behavior variables** (6 vars: blockage duration / category / count, plus t-1 lags)
17. **Employee-related** (22 vars: 10 base + 12 age-interactions)
18. **Management-related** (33 vars: CEO prior/current experience, performance quartiles, change-in-management indicators, board composition counts, gender composition)

Each variable carries a code name (e.g. `l3 = Quick ratio`) and a verbatim description (e.g. *"Quick ratio = cash / current liabilities (nonfinancial)"*). The concept page reproduces every code + description pair, grouped by category, with category-overview metadata added.

**Why promoted to a standalone concept page rather than reproduced inline:** the catalogue is reusable across the financial-distress cluster — Powell 2024 uses category 1; Hajek 2024 uses categories 1, 3, 5, 6 + adds unstructured text; Bari 2026 uses categories 1, 3, 5, 6, 16; Habib 2020's review-level taxonomy mirrors several categories. A standalone concept page lets all of these cite the same canonical reference, and it's the kind of artifact an expert reader would copy out for their own analysis (replicating the LASSO selection on local data; running variable-by-variable robustness checks; building a competing distress model). This is the canonical D6 = 3 promotion move documented in `quality-rubric.md`.

**Cross-references to body claims:**
- §Methods (this page) §"Predictor sets (164 candidates total)" cites the catalogue's family totals.
- §Results (this page) §"Variable selection (Table 2)" names the 8–9 catalogue entries that survive LASSO selection in the operational Omega Score.
- The Omega Score formulas reproduced in [§Distinctive artifacts](#distinctive-artifacts) below use category 1 (Surplus dummy is part of Z-Score lineage), category 5 (Quick ratio = l3), category 7 (Δ debtors' change), category 16 (payment defaults), categories 17–18 (Firing ratio, Mean employee tenure, Change in management).

**Honest scoping:** all 164 catalogue rows transcribed verbatim from the appendix; category-overview metadata and the `log(1+x)` transformation annotation are editorial additions documented on the concept page's §Provenance.

## Distinctive artifacts

### Omega Score — general form

```
Omega Score = Set 1 {Financial indicators}
            + Set 2 {Payment behavior variables}
            + Set 3 {Employee-related variables}
            + Set 4 {Management-related variables}
```

### Omega Score — Regular (60-day default) formula

```
Omega Score = Set 1 { +0.003 · Days of debtors' change
                      −0.328 · Retained earnings / Total assets
                      −0.617 · Quick ratio
                      −0.695 · Surplus dummy }
            + Set 2 { +0.621 · Number of short credit payment defaults }
            + Set 3 { +0.626 · Firing ratio
                      −0.029 · Mean employee tenure }
            + Set 4 { +0.395 · Change in management }

Omega Score Groups:
  Alpha   (Omega Score ≤ 0.007)         — Healthy SME
  Beta    (0.007 < Omega Score ≤ 1.626) — Moderate-risk SME
  Gamma   (Omega Score ≥ 1.626)         — High-risk SME
```

### Omega Score — Early-warning (30-day default) formula

```
Omega Score = Set 1 { +0.154 · Days of clients' change
                      −0.299 · Personnel costs / Gross profit
                      −0.585 · Quick ratio
                      +0.002 · Days of debtors' change
                      −0.594 · Surplus dummy }
            + Set 2 { +0.798 · Number of short creditor payment defaults }
            + Set 3 { +0.583 · Firing ratio
                      −0.029 · Mean employee tenure }

Omega Score Groups:
  Alpha   (Omega Score ≤ 0.564)        — Healthy SME
  Beta    (0.564 < Omega Score ≤ 0.931) — Moderate-risk SME
  Gamma   (Omega Score ≥ 0.931)         — High-risk SME
```

Note the early-warning model **does not retain `Change in management`** — interpretable as: a board change is a slower-acting signal that shows up at 60-day default but not yet at 30-day. The personnel-cost / gross-profit and equity / total-investments ratios appear only in the 30-day model, consistent with shorter-horizon liquidity pressure.

### Omega Score Group thresholds + cumulative default incidence (Table 3, reproduced)

| Group | 60-day band | 60-day default rate | 30-day band | 30-day default rate |
|---|---|---:|---|---:|
| Alpha | ≤ 0.007 | 15.6 % | ≤ 0.564 | 18.1 % |
| Beta | (0.007, 1.626] | 66.0 % | (0.564, 0.931] | 60.5 % |
| Gamma | ≥ 1.626 | **92.2 %** | ≥ 0.931 | **92.4 %** |

### Table 5 (reproduced) — Z′′, Omega and ML model performance

| Model | AUC | Δ AUC | Accuracy | Specificity |
|---|---:|---:|---:|---:|
| Benchmark Z′′ (recalibrated) | 70.4 | — | 65.6 | 66.4 |
| Omega Score Groups | 82.2 | +11.8 | 78.4 | 71.4 |
| **Omega Score (continuous)** | **87.2** | **+16.8** | 78.4 | 82.0 |
| Random forest | 89.0 | +18.6 | 81.4 | 79.7 |
| XGBoost | **90.3** | **+19.9** | 82.6 | 78.6 |

### Table 6 (reproduced) — Monetary impact of the prediction improvement

| Test-sample slice | SMEs | Bank-defaulted debt | Supplier-defaulted debt | Government-defaulted debt | Total |
|---|---:|---:|---:|---:|---:|
| SMEs defaulted (100 %) | 458 | €135.3 M | €113.9 M | €24.8 M | **€274.0 M** |
| Benchmark Type-II error (37.6 %) | 172 | €41.8 M | €33.7 M | €7.0 M | €82.5 M |
| Omega Type-II error (28 %) | 126 | €32.2 M | €28.0 M | €6.7 M | €66.9 M |
| **Improved prediction** | — | — | — | — | **€15.6 M** |

## Discussion / Significance (SO WHAT)

For the wiki, three contributions land:

1. **The Z-score lineage gets a contemporary, SME-specific, interpretable update** — Omega Score is the first since Z′′ (1995) to enter the canonical pipeline (logit → AUC → MDA → ROC) with a tractable closed-form formula. The slight performance gap to XGBoost (87.2 vs 90.3 AUC) is the explicit price paid for interpretability — a useful empirical anchor when arguing build-vs-buy on ML credit-risk systems.
2. **The 30-day account-blockage outcome variable** is itself a methodological contribution: an earlier, more granular distress signal than Basel III's 90-day default or formal bankruptcy. Reusable across jurisdictions that have administrative payment-block data.
3. **Management-change and employee-turnover as default predictors** is novel within the SME-default literature (corporate-governance literature has analogues for large firms — Dowell et al. 2011; García & Herrero 2021 — but not for SMEs and not in default models). This is the paper's main empirical advance.

**Limitations acknowledged by authors:**
- Single-country (Croatia), single-period (2015–2019, stable economic conditions).
- No structural / market-based models (Merton-style DTD) — only accounting + behavioural variables.
- One-year prediction horizon only.

**Limitations not flagged:**
- The **management-change indicator is a binary signal** whose construction details (within-year vs cross-year, voluntary vs forced, CEO vs other board) affect interpretability — the table footnote does not disambiguate.
- The dependence on **Croatian administrative-data infrastructure** (FINA accounts, government payment data, Tax Administration personnel data) limits replication in jurisdictions without comparable centralised data layers. The model is methodologically portable; the *training data* is not.
- The 1:1 random matching of defaulted to non-defaulted SMEs (versus the population ratio of 1,020 : 53,000 ≈ 1.9 %) inflates apparent prevalence. Re-weighting at inference time is implied but not discussed; uncalibrated probabilities will overestimate default risk on the realistic prior.
- Figure 1's importance-axis is unlabelled — interpretable as gain by XGBoost convention but the axis should say so.

## Citations to chase

References that look central but aren't yet in the wiki:

- **Altman 1968** — *Financial Ratios, Discriminant Analysis and the Prediction of Corporate Bankruptcy*, J. Finance 23(4). The founding Z-score paper.
- **Altman, Sabato 2007** — *Modelling Credit Risk for SMEs*, Abacus 43(3). The first SME-targeted Z-score adaptation.
- **Altman et al. 2017** — *Financial Distress Prediction in an International Context: A Review and Empirical Analysis of Altman's Z-Score Model*, J. International Financial Management & Accounting 28(2). The Z′′ international validation.
- **Norden & Weber 2010** — *Credit Line Usage, Checking Account Activity, and Default Risk of Bank Borrowers*, Rev. Financial Studies 23(10). Payment-behavior-variables foundational paper.
- **Ciampi 2015** — *Corporate Governance Characteristics and Default Prediction Modeling for Small Enterprises*, J. Business Research 68(5). Governance-in-SME-default precursor.
- **García & Herrero 2021** — gender diversity on boards and bankruptcy — cited by both this paper and Powell 2024.
- **Tibshirani 1996** — original LASSO paper, J. Royal Statistical Society B 58(1).
- **Beaver 1966** — *Financial Ratios as Predictors of Failure*, J. Accounting Research 4. Pre-Altman ratio-based foundation.

## Linked entities and concepts

**Entities** (per [§Author-entity promotion](../../CLAUDE.md#author-entity-promotion) — Altman is named in this paper *and* in Habib 2020, Powell 2024, so promotion is warranted):

- [[Edward-I-Altman]] — first author, Z-score founder. **Promoted on ingest** (second-source rule met by Habib 2020 + Powell 2024 citing him as the Z-score originator).
- **Dangling** (single-source mention, deferred): Marco Balzano (Ca' Foscari Venice), Alessandro Giannozzi (Florence), Stjepan Srhoj (Split).

**Concepts** (created in this ingest batch):

- [[financial-distress]] — the umbrella concept; this paper's 30-day-block outcome variable is one operationalisation.
- [[altman-z-score]] — the Z-score lineage; this paper extends it.
- [[omega-score]] — the contribution of this paper.
- [[multiple-discriminant-analysis]] — the method Altman 1968 introduced and this paper deliberately revisits.
- [[lasso-variable-selection]] — Tibshirani 1996's LASSO; the selection workhorse here.
- [[sme-default-prediction]] — the application domain; spans this paper, Powell 2024, and parts of Bari 2026.
- [[payment-behavior-variables]] — Norden & Weber 2010 lineage; this paper validates them on Croatian SMEs.

**Concept extracted from the appendix** (added 2026-05-25 via the appendix-schema refactor):

- [[sme-distress-predictor-variables]] — the canonical 164-variable predictor catalogue, reproduced verbatim from this paper's appendix. The first D6 = 3 promotion in the corpus; serves as the cross-cluster KPI reference for downstream financial-distress papers.

## Source-to-source relationships

Surfaced by the neighbour-source scan against the 2026-05-25 batch (all 6 are co-ingest neighbours):

- **`supports` ↔ [[2020-01-01-habib-2020-distress-determinants-consequences-review]]** — Habib's review *cites this paper's authorial lineage* (Altman 1968 in Table 1 distress measures); this paper *cites Habib et al. 2020* as foundational. The relationship is mutually supportive: Habib catalogues the determinants literature; Omega Score is a contemporary empirical extension of that literature, adding the management+employee-variable channels Habib's review flags as under-explored.
- **`supports` ↔ [[2024-01-01-powell-2024-asean-accounting-early-warning-distress]]** — both papers operate in the Altman-MDA tradition, with Powell extending classical MDA to ASEAN and Omega Score extending it with non-financial variables. Powell's ICR-based distress threshold is a different operationalisation of the same underlying construct as the 30/60-day block.
- **`supports` ↔ [[2024-06-22-hajek-2024-distress-prediction-annual-reports]]** — Hajek's BERT/XGBoost pipeline is the *NLP-modality complement* to Omega's structured-data channels; both papers reach the boundary of what financial ratios alone can do and add a new channel. Hajek's class-imbalance handling via semi-supervised learning is methodologically adjacent to Altman's 1:1 matching design.
- **`supports` ↔ [[2026-02-04-bari-2026-us-small-business-distress-framework]]** — Bari's "integrated framework" of financial + cash-flow + behavioral + relational indicators echoes Omega's four-set structure; the cleanest cross-validation is that *both papers find behavioural indicators significantly improve over financial-only models*.

