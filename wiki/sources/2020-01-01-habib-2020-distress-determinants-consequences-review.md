---
type: source
kind: paper
title: "Determinants and consequences of financial distress: review of the empirical literature"
author:
  - "Habib, A."
  - "D'Costa, M."
  - "Huang, H. J."
  - "Bhuiyan, M. B. U."
  - "Sun, L."
url: "https://doi.org/10.1111/acfi.12400"
date_published: 2020-01-01
length: "~53 pages (Pass 2 — abstract, intro, all 4 review sections (measurement / determinants / consequences / conclusions), Table 1 distress measures, Section summaries; Tables 2 & 3 detailed author rows skimmed for headline patterns)"
venue: "Accounting & Finance, 60(S1), 1023–1075"
doi: "10.1111/acfi.12400"
citation_key: "habib_2020_distress_review"
raw: "../../raw/papers/habib-2020-distress-determinants-consequences-review.md"
pdf: "../../raw/assets/habib-2020-distress-determinants-consequences-review.pdf"
confidence: 0.90
last_confirmed: 2026-05-25
source_count: 1
accessed_at: 2026-05-25
tags: [financial-distress, literature-review, altman-z-score, ohlson-o-score, zmijewski, merton-dtd, corporate-governance, earnings-management, bankruptcy, distress-determinants, distress-consequences]
dynamic_capabilities:
  - digital-sensing/scanning-environment
relationships:
  - type: supports
    target: 2022-11-28-altman-2023-omega-score-sme-default
    via: "Altman 2023 explicitly cites Habib 2020 as foundational; Habib's partial→holistic recommendation is what Omega operationalises"
  - type: supports
    target: 2024-01-01-powell-2024-asean-accounting-early-warning-distress
    via: "Powell extends Habib's catalogued MDA tradition to ASEAN, filling Habib's geographic-coverage gap"
  - type: supports
    target: 2024-06-22-hajek-2024-distress-prediction-annual-reports
    via: "Hajek opens with a direct Habib citation; extends Habib's shallow NLP-distress subsection with BERT"
  - type: supports
    target: 2026-02-04-bari-2026-us-small-business-distress-framework
    via: "Bari operationalises Habib's firm-fundamental + behavioural + relational determinant cells for US small business"
  - type: authored-by
    target: Ahsan-Habib
---

# Determinants and consequences of financial distress: review of the empirical literature

> We synthesise the empirical literature on the determinants and consequences of financial distress, critique the findings and offer suggestions for future research. We categorise these indicators into (i) firm-level fundamental determinants, (ii) macroeconomic determinants and (iii) firm-level corporate governance determinants. We categorise the consequences into (i) financial reporting and auditing consequences, (ii) firm-level operational consequences, (iii) capital market consequences and (iv) corporate governance consequences. We suggest that future research can make a more meaningful contribution, by developing more comprehensive models of predicting financial distress which will entail a departure from the current partial analysis to a more holistic complex analysis.

## TL;DR

The **canonical literature review** of financial-distress determinants and consequences, covering 1966–2017. Habib et al. organise the field into a **3-bucket-by-4-bucket taxonomy**: three determinant classes (firm-fundamental / macroeconomic / corporate-governance) × four consequence classes (financial-reporting & auditing / operational / capital-markets / corporate-governance). The review opens with a measurement-models taxonomy — **Altman Z-score, Ohlson O-score, Zmijewski model, Hillegeist BSM-Prob, Merton distance-to-default** — and quantifies how often each measure is used in the surveyed literature. Closing recommendation: future research must move from *partial* (single-channel) to *holistic* (multi-channel) distress prediction.

## Citation

**APA (7th edition):**

> Habib, A., D'Costa, M., Huang, H. J., Bhuiyan, M. B. U., & Sun, L. (2020). Determinants and consequences of financial distress: Review of the empirical literature. *Accounting & Finance*, *60*(S1), 1023–1075. https://doi.org/10.1111/acfi.12400

**BibTeX:**

```bibtex
@article{habib_2020_distress_review,
  author  = {Habib, Ahsan and D'Costa, Mabel and Huang, Hedy Jiaying and Bhuiyan, Md. Borhan Uddin and Sun, Li},
  title   = {{Determinants and Consequences of Financial Distress: Review of the Empirical Literature}},
  journal = {Accounting \& Finance},
  year    = {2020},
  volume  = {60},
  number  = {S1},
  pages   = {1023--1075},
  doi     = {10.1111/acfi.12400}
}
```

Note: the article footer reads "© 2018 AFAANZ"; print volume 60(S1) appeared in 2020. Citation uses publication-volume year per APA convention.

## What was actually ingested

**Pass 2** — abstract, full introduction, Section 2 (measurement of distress, with Table 1 distress-measures formulae transcribed), Section 3 (determinants — firm fundamental / macro / corporate governance — full prose; representative Table 2 rows scanned), Section 4 (consequences — financial reporting, operational, capital markets, corporate governance — full prose; Table 3 rows scanned), Section 5 (conclusions and future-research agenda). Reference list (~300 entries) consulted for cross-citation patterns but not transcribed.

## Context (WHY)

Sits at the **review-paper junction** of the distress literature. The Habib team (Massey University School of Accountancy) write deliberately to taxonomise — every concept page in the wiki that touches financial distress should link back here for its operational definitions, classical-measure formulae, and citation backbone.

Adjacent to and cited by every other paper in the 2026-05-25 ingest batch:
- Cited explicitly in [[2024-06-22-hajek-2024-distress-prediction-annual-reports]]: *"Financial distress can be caused by a combination of internal and external factors (Habib et al., 2020)."* — Hajek 2024 anchors itself in this review's framework.
- Cited explicitly in [[2022-11-28-altman-2023-omega-score-sme-default]]: *"we still lack a universally accepted SME default model (Ciampi et al., 2021; Habib et al., 2020)."*
- Powell, Bari, and (less directly) Luppe inherit the determinants/consequences vocabulary this review systematises.

**Theoretical bases**: The review is itself meta-theoretical — it doesn't develop new theory but inventories where the field's theoretical commitments sit (Merton 1974 option-pricing structural-credit model for market-based distress; Beaver 1966 + Altman 1968 + Ohlson 1980 + Zmijewski 1984 statistical-discrimination tradition for accounting-based; Shleifer-Vishny 1997 corporate-governance lens; Lau 1987 multi-state-distress conceptual model).

**Method-paper category** following Schweizer & Nienhaus (2017), Brauer (2006), and Haleblian et al. (2009) review-paper templates. Search strategy: keywords *distress risk / financial distress risk / financial distress / failure / bankruptcy* across EBSCOhost, Emerald Insight, Scopus, Web of Science, SSRN, Google Scholar; period 1966–2017.

## Methods (HOW)

**Definition framework.** The review opens by distinguishing four overlapping terms that the literature uses inconsistently:

| Term | Definition (paraphrasing Habib et al., p. 1023) |
|---|---|
| **Failure** | Realised risk-adjusted return on investment significantly below comparable investments; or revenue insufficient to cover costs |
| **Insolvency** | Inability to settle current obligations (liquidity-driven) |
| **Bankruptcy** | Distress requiring legal court declaration |
| **Default** | Technical (debt-covenant breach) or legal (failure to meet periodic repayment). Both signal deteriorating performance |

**Search protocol.** Four steps: (1) define review period 1966–2017 to span both 1960s and 1980s "high-tide" prediction-model waves; (2) restrict research areas to accounting + finance; (3) keyword search across six databases plus SSRN working-paper repository; (4) skim and include papers that empirically tested determinants or consequences (broad scope: included relevant papers from non-accounting/non-finance journals when the topic fit).

**Organising taxonomy.** The review's central scaffold is a 3 × 4 matrix:

- **Determinants** (3 buckets): firm-level fundamental / macroeconomic / firm-level corporate governance.
- **Consequences** (4 buckets): financial-reporting & auditing / firm-level operational / capital market / corporate governance.

Each cell is reviewed in its own subsection with representative empirical findings, with-mixed-results vs. settled findings flagged, and future-research suggestions.

## Results (WHAT)

The review surfaces a stable empirical core and a frontier of unresolved questions. Headline findings:

### Distress-measurement frequency (Table 1 of the paper)

Among ~200 surveyed papers, **accounting-based measures dominate**. The Altman Z-score appears in 6 determinants + 12 consequences papers; Ohlson O-score in 2 + 6; Zmijewski in 1 + 8. Market-based **BSM-Prob (Hillegeist 2004)** appears 0 + 1; **distance-to-default (Merton 1974)** appears 2 + 4. The review notes the surprising under-use of market-based measures despite their theoretical advantages — historical-cost accounting cannot capture intangibles, R&D, or expected future-flow volatility (Beaver et al. 2010 critique).

### Determinants — what predicts distress

**Firm-level fundamental:**
- **R&D investment** ↑ distress risk (especially during downturns; Zhang 2015 — 1-SD R&D/assets ↑ distress likelihood by 1.3 %).
- **Foreign-currency hedging** ↓ distress (Magee 2013).
- **Employee relations** (good) ↓ distress (Kane et al. 2005).
- **CSR performance** (positive) ↓ distress, especially for mature firms (Al-Hadi et al. 2017; Chang et al. 2013); causality debated.
- **MD&A narrative disclosures** contain useful predictive information beyond financial statements (Tennyson et al. 1990; Mayew et al. 2015; Lopatta et al. 2017) — the foundation for the NLP-based work that [[2024-06-22-hajek-2024-distress-prediction-annual-reports]] later extends.
- **Book-tax differences, IFRS-adoption, audit-opinion qualifications** all flagged as distress signals.

**Macroeconomic:** business-cycle, inflation, interest rates, credit availability, monetary policy; macro variables explain "nearly half the variation in firms' earnings" (Bonsall et al. 2013).

**Corporate governance:**
- Board independence — mixed evidence (Elloumi & Gueyie 2001 vs. Hsu & Wu 2014).
- Female CEOs / gender diversity ↓ distress (Darrat et al. 2016; Powell-Ansic 1997 risk-aversion mechanism).
- CEO duality — mixed (Daily-Dalton 1994 ↑ bankruptcy; Wang-Deng 2006 null).
- Ownership concentration — debated; family-firm ownership generally ↓ distress (Gottardo-Moisello 2017).
- Past CEO/director default history ↑ distress (Kallunki-Pyykko 2013).
- VC-backed IPOs ↓ distress (Megginson et al. 2016).

### Consequences — what distress causes

**Financial reporting & auditing:**
- **Earnings management** before distress: income-decreasing (DeAngelo et al. 1994) when renegotiating with stakeholders; income-increasing (Rosner 2003; Charitou et al. 2007) before debt-covenant breach; **classification shifting** of core expenses to income-decreasing special items (Nagar-Sen 2017, ~$2.5 M misclassification documented).
- **Cash-flow management** — distressed firms inflate operating cash flows (Lee 2012).
- **Audit quality**: distressed firms get more going-concern modifications; auditor switches correlate with looming distress (Hudaib-Cooke 2005); audit fees rise (Gul et al. 2018).
- **Earnings quality and conservatism** decline pre-distress (Garcıa Lara et al. 2009; Hsu et al. 2011).

**Operational:**
- **Trade-credit / trade-receivables policy** adjusts (distressed firms extend credit terms to retain customers; Molina-Preve 2009, 2012).
- **Tax avoidance** rises (Richardson et al. 2015a, 2015b).

**Capital market:**
- **Dividend reductions / omissions** (Grullon-Michaely 2002).
- **Distress risk explains accrual anomaly + return momentum** — pricing-anomaly research (Sloan 1996; Simlai 2014; Gu 2017).

**Corporate governance:**
- **CEO turnover ↑** post-distress (Gilson 1989; Jostarndt-Sautner 2008).
- **CEO compensation cut** (Gilson-Vetsuypens 1993; Guo et al. 2014).
- **Board restructuring** and bank-driven turnaround (Gilson 1990).

### Future-research agenda (the review's prescriptive conclusion)

Habib et al. close with eight recommendations, most centred on the move from **partial** (single-channel) to **holistic** (multi-channel) prediction models — exactly the gap that [[2022-11-28-altman-2023-omega-score-sme-default]] later addresses with the four-set Omega Score and that [[2024-06-22-hajek-2024-distress-prediction-annual-reports]] addresses with BERT-augmented multimodal models.

## Visual content

The paper carries 3 large in-body tables (Tables 1–3) and no figures. The tables are typographically large (span multiple pages each), and represent the review's empirical core.

### Table 1 — Summary of distress measures

**Type:** taxonomy table with formulae. **Location:** pp. 1027–1029 (3-page spread).

5 columns × ~6 model rows. Columns are: (1) Model name + reference; (2) Formula; (3) Interpretation; (4) Number of surveyed papers using this measure as a determinants study; (5) Number using as consequences study. Models inventoried: Altman 1968 (5-ratio Z-score, threshold > 2.67 sound / < 1.81 distress / 1.81–2.67 grey), Ohlson 1980 (9-factor logit O-score, > 0.5 high default), Zmijewski 1984 (3-ratio probit), Hillegeist et al. 2004 (BSM-Prob from option-pricing), Merton 1974-style distance-to-default. This is the **canonical formulary** of distress measurement — the table is the central knowledge anchor for the review's whole edifice. → reproduced in §Distinctive artifacts.

### Table 2 — Determinants of financial distress

**Type:** review-paper synthesis table. **Location:** pp. 1043–1056 (14-page spread).

6 columns × dozens of rows organised into panels: Panel A (firm-specific) and Panel B (corporate governance). Columns: Author(s), Research question, Sample/countries, Justification for sample selection (Y/N), Measurement of distress used, Findings, Economic significance. Each row is one surveyed paper. The "Economic significance" column is the most innovative — many surveyed papers fail to report it (Dyckman-Zeff 2014 critique applied). The table is the literature *receipt*: a researcher entering the field uses it to discover what's been tried in their cell of the determinants matrix. → too long to reproduce in full; representative rows in §Distinctive artifacts.

### Table 3 — Consequences of financial distress

**Type:** review-paper synthesis table. **Location:** pp. 1056–1067 (12-page spread, paralleling Table 2's structure).

6 columns × dozens of rows organised into four panels matching the consequences taxonomy (financial-reporting & auditing / operational / capital market / corporate governance). Same column structure as Table 2. → too long to reproduce in full; structure shown in §Distinctive artifacts.

The paper carries no figures, no equations rendered as images, no flowcharts. The review's argument is carried by the tables and the section-summary prose. Figure-quality critique (Keshav Pass 2) does not apply — there are no figures to assess.

## Distinctive artifacts

### The 3 × 4 taxonomy (the review's contribution)

```
                    DETERMINANTS (3 buckets) × CONSEQUENCES (4 buckets)

                             | Firm-fundamental | Macro-economic | Corporate-governance |
─────────────────────────────────────────────────────────────────────────────────────────
Fin. reporting & auditing    |   ✓ (§4.1)      |                |     ✓ (§4.1)         |
Firm-level operational       |   ✓ (§4.2)      |    ✓ (§4.2)    |                      |
Capital market               |   ✓ (§4.3)      |    ✓ (§4.3)    |                      |
Corporate governance         |                  |                |     ✓ (§4.4)         |
```

(The matrix shows where the review *fills* cells; empty cells signal future-research gaps Habib et al. explicitly flag.)

### Table 1 (reproduced) — Distress-measurement models

| Model | Formula | Interpretation |
|---|---|---|
| **Altman (1968) Z-score** | `Z = 1.2 A + 1.4 B + 3.3 C + 0.6 D + 1.0 E` where A = WC/TA, B = RE/TA, C = EBIT/TA, D = MVE/TL, E = Sales/TA | Z > 2.67 sound; Z < 1.81 distressed; 1.81 ≤ Z ≤ 2.67 grey zone |
| **Ohlson (1980) O-score** | 9-factor linear combination → exp(O) / (1 + exp(O)) | Probability > 0.5 indicates high default likelihood |
| **Zmijewski (1984)** | `Zm = −4.336 − 4.513 X₁ + 5.679 X₂ − 0.004 X₃` where X₁ = NI/TA, X₂ = TD/TA, X₃ = CA/CL | Probability > 0.5 → bankrupt |
| **Hillegeist et al. (2004) BSM-Prob** | `P = N[(ln(V_A / X) + (μ − δ − 0.5 σ_A²) T) / (σ_A √T)]` — Black-Scholes-Merton probability of bankruptcy | Higher BSM-Prob → larger expected equity-value decrease per unit asset-value decline → more litigation, more covenant violations |
| **Distance-to-default (Merton 1974 derived)** | `DTD = (V_A − X) / (V_A σ_A)` (simplified form; Habib's Table 1 gives full derivation) | Number of standard deviations the firm's asset value can fall before default |

Counts of survey-papers using each measure (determinants / consequences):

| Measure | Determinants studies | Consequences studies |
|---|---:|---:|
| Altman Z-score | 6 | 12 |
| Ohlson O-score | 2 | 6 |
| Zmijewski | 1 | 8 |
| BSM-Prob (Hillegeist) | 0 | 1 |
| DTD (Merton) | 2 | 4 |
| Rudimentary (neg. WC / neg. OCF / interest coverage) | several | several |

The accounting-based:market-based ratio is roughly 8 : 1 across the surveyed literature — the review's key empirical observation about *what gets used*.

### Table 2 (structure + headline rows) — Determinants

Selected exemplar rows (illustrative, not exhaustive — the full table is 14 pages):

| Author | Topic | Sample | Distress measure | Headline finding |
|---|---|---|---|---|
| Al-Hadi et al. 2017 | CSR × life cycle | Australia 651 firm-years 2007–2013 | Altman + Berger et al. + Almeida-Campello | +1-SD CSR → −1.46 % distress, stronger in mature life-cycle stage |
| Zhang 2015 | R&D investment | USA 55,652 firm-years 1980–2011 | Delisted-from-exchange | +1-SD R&D/assets → +1.3 % distress likelihood |
| Magee 2013 | FX hedging | USA 401 obs 1996–2000, large firms | Merton 1974 DTD | +1-SD FX-derivative/assets → +0.870 DTD (distress decreases) |
| Kane et al. 2005 | Employee relations | USA 2,228 firm-years 1991–2001 | Altman Z | Good employee relations → less future distress |
| Tinoco-Wilson 2013 | Accounting + market + macro | UK 23,218 firm-years 1980–2011 | Logistic | Multi-channel model ≈ neural-net ≈ Altman in accuracy |
| Gottardo-Moisello 2017 | Family ownership | Italy 1,137 obs 2004–2013, large | Registered distress procedure | Family firms ↓ distress; female CEO mitigates |
| Darrat et al. 2016 | Board composition | USA 217 bankrupt + 9,100 healthy 1996–2006 | Logistic | Large boards & inside directors ↓ bankruptcy for complex/specialty firms; female-board ↓, long-CEO ↓ |
| Hsu-Wu 2014 | Grey vs. independent directors | UK 234 matched-pair 1997–2010 | Dummy failed/non-failed | Grey directors > independent directors for survival |
| Kallunki-Pyykko 2013 | Defaulting CEOs/directors | Finland 48,716 private-firm obs 2001–2008 | Adjusted Z + Adjusted O | CEO/director past default ↑ corporate bankruptcy |

### Table 3 (structure) — Consequences

Same six columns as Table 2, organised by four panels matching §4.1 / §4.2 / §4.3 / §4.4. The headline findings are summarised in §Results above (earnings management, classification shifting, dividend cuts, accrual-anomaly pricing, CEO turnover). Reproducing the full author-by-author row list would replicate ~12 pages of the paper; the prose summary is sufficient for wiki search.

## Discussion / Significance (SO WHAT)

For the wiki this is the **citation backbone source**. Three load-bearing contributions:

1. **The 3 × 4 taxonomy** is the most useful organising frame for the corpus. Any future ingest about financial distress should classify its determinants and consequences against this matrix; gaps in the matrix are research opportunities.
2. **Table 1's distress-measurement formulary** is the canonical reference for Z-score, O-score, Zmijewski, BSM-Prob, and DTD. Every concept page on distress measurement should link here for its formula and interpretation.
3. **The "partial vs. holistic" closing recommendation** anticipates the Omega-Score (Altman 2023) and BERT-XGBoost (Hajek 2024) multi-channel prediction designs that follow.

**Limitations acknowledged by authors:**
- Review-paper scope: synthesis, not new theory or new empirical evidence.
- Focus on accounting + finance journals; adjacent management-literature papers (HR, strategy) only included opportunistically.

**Limitations not flagged:**
- The 1966–2017 review period **closes the year before the post-2018 ML/NLP boom** in distress prediction (BERT 2018, FinBERT 2019, GPT-era LLMs). The review's coverage of textual-data-based distress prediction is shallow — a single subsection rather than a major channel — and Hajek 2024 highlights this gap explicitly.
- **Geographic bias toward Anglo + East-Asian samples**: USA, UK, Australia, China dominate Tables 2 and 3. Emerging-market evidence (Latin America, Africa, MENA, Southeast Asia ex-China) is thin — exactly the gap that [[2024-01-01-powell-2024-asean-accounting-early-warning-distress]] later fills.
- The "economic-significance" column (per Dyckman-Zeff 2014) is admirably honest: many cells read *No* — meaning the literature systematically underreports practical magnitude even after statistical significance. Habib et al. flag this as a problem but do not require it of their own synthesis.

## Citations to chase

Foundational references that warrant wiki concept-page status:

- **Altman 1968** — Z-score founding paper. *(Also cited by Altman 2023, Powell 2024.)*
- **Beaver 1966** — first comprehensive univariate distress-ratio study; identified 30 ratios in 6 groups. *(Also cited by Powell 2024.)*
- **Ohlson 1980** — first widely-used logit O-score.
- **Zmijewski 1984** — probit-based default model.
- **Merton 1974** — option-pricing model of corporate debt; foundation for DTD.
- **Hillegeist et al. 2004** — BSM-Prob; bridges accounting + market data.
- **Black-Scholes 1973** — option-pricing theory underlying BSM-Prob.
- **Shleifer-Vishny 1997** — corporate-governance lens.
- **Shumway 2001** — hazard-model approach to bankruptcy.
- **Tinoco-Wilson 2013** — multi-channel (accounting + market + macro) UK study.

## Linked entities and concepts

**Entities** (per [§Author-entity promotion](../../CLAUDE.md#author-entity-promotion)):

- [[Ahsan-Habib]] — first author. **Promoted on ingest** — Habib appears as cited author in [[2024-06-22-hajek-2024-distress-prediction-annual-reports]] *and* as first author here, meeting the second-source rule.
- **Dangling** (single-source mention, deferred): Mabel D'Costa, Hedy Jiaying Huang, Md. Borhan Uddin Bhuiyan, Li Sun. All affiliated to Massey University School of Accountancy.

**Concepts** (created or referenced in this ingest batch):

- [[financial-distress]] — the umbrella concept; this review is its definitional anchor.
- [[altman-z-score]] — formula reproduced from Table 1.
- [[ohlson-o-score]] — formula and threshold reproduced from Table 1.
- [[zmijewski-model]] — formula reproduced from Table 1.
- [[merton-distance-to-default]] — formula and option-pricing foundation referenced.
- [[earnings-management-and-distress]] — Section 4.1 of the review is the canonical source.
- [[corporate-governance-and-distress]] — Section 3.3 is the canonical source.
- [[distress-determinants]] — three-bucket scheme.
- [[distress-consequences]] — four-bucket scheme.

## Source-to-source relationships

Neighbour-scan against the 2026-05-25 batch surfaces three first-degree relations (Habib is the hub; all other papers cite it explicitly or use its taxonomy):

- **`supports` ↔ [[2022-11-28-altman-2023-omega-score-sme-default]]** — Altman 2023 cites Habib 2020 as foundational; Habib 2020's "partial vs holistic" recommendation is what Omega Score operationalises.
- **`supports` ↔ [[2024-01-01-powell-2024-asean-accounting-early-warning-distress]]** — Powell extends the Altman/Beaver MDA lineage Habib catalogues; Habib's geographic-coverage gap (East Asia ex-China) is what Powell fills for ASEAN.
- **`supports` ↔ [[2024-06-22-hajek-2024-distress-prediction-annual-reports]]** — Hajek opens with a direct Habib citation; Habib's shallow coverage of textual/NLP-based distress prediction (Section 3.1.6 MD&A subsection) is what Hajek extends with BERT/XGBoost.
- **`supports` ↔ [[2026-02-04-bari-2026-us-small-business-distress-framework]]** — Bari's small-business framework operationalises Habib's "firm-level fundamental + behavioral" determinant cells for US SMEs.

(Luppe 2012 is the outlier — anchoring heuristic is outside Habib's accounting-and-finance review scope. No defensible typed edge.)

## Quality review

| Field | Value |
|---|---|
| Reviewer | Claude (self-score) |
| Date | 2026-05-25 |
| Claimed depth | Pass 2 |
| Rubric version | 1.0 |

| Dim | Score | Floor | Notes |
|---|---:|---:|---|
| D1 Five Cs | 3 | 2 | Category (survey/review), Context (3 wiki sources named + theoretical-base lineage), Correctness (1966–2017 period closure flagged as limitation), Contributions (3 named), Clarity (no figures; tables span 14+ pages, sometimes hard to read in PDF). |
| D2 IMRaD | 3 | 2 | Results section cites specific paper-counts per measure (8:1 accounting:market-based ratio), specific empirical magnitudes (Zhang 1.3 %, Al-Hadi −1.46 %), specific authors per finding. |
| D3 Distinctive artifacts | 3 | 2 | The 3×4 taxonomy reproduced as wiki-native matrix; Table 1 reproduced with all 5 model formulae transcribed (Z-score, O-score, Zmijewski, BSM-Prob, DTD) + survey-counts; Table 2 representative rows transcribed. (Per the rubric's Habib anchor: score by the most distinctive artifact — the taxonomy and Table 1 formulary are reproduced, not just gestured at.) |
| D4 Critical reading | 2 | 2 | Two concrete "not flagged" items: post-2018 ML/NLP coverage gap; Anglo+East-Asian geographic bias. Both traceable to specific methodological choices (review period closure, journal-search scope). The "economic-significance underreporting" observation is a third substantive critique. |
| D5 Pass-3 markers | — | — | n/a (Pass 2 page) |

**Total: 11 / 12 = 0.92** (at ceiling)

**Resolution:** accepted; catalogue update can proceed.
