# Index

The catalog of every page in this wiki. Updated on every ingest. See [the design doc, §9.1](../docs/superpowers/specs/2026-04-28-llm-wiki-design.md#91-wikiindexmd) for format conventions.

Each section is flat-listed alphabetically. Once page counts grow, sections may be supplemented with Dataview blocks that auto-include pages by frontmatter `type:`.

## Sources

### Textbook chapters — corporate-finance foundations

- [[2019-01-01-ross-2019-fundamentals-ch3-financial-statements]] — Ross/Westerfield/Jordan 2019 §3. Canonical pedagogical reference for financial-statement analysis: closed vocabulary of ~22 financial ratios across 5 categories; DuPont identity; standardisation toolkit (common-size, common-base year); benchmarking taxonomy (SIC/NAICS/RMA); honest §3.5 catalogue of ratio-analysis's structural limits. Definitional backbone for every distress-prediction source in the corpus.

### Academic papers — financial-distress prediction

- [[2012-09-01-luppe-2012-anchoring-accounting-indicators]] — Luppe & Fávero 2012. Tversky-Kahneman anchoring heuristic applied to net-profit estimation; mean Anchoring Index = 0.91 across 8 companies.
- [[2020-01-01-habib-2020-distress-determinants-consequences-review]] — Habib et al. 2020. Canonical 1966–2017 literature review; 3-determinant × 4-consequence taxonomy; distress-measurement formulary (Z-score, O-score, Zmijewski, BSM-Prob, DTD).
- [[2022-11-28-altman-2023-omega-score-sme-default]] — Altman et al. 2023. Omega Score for SME default; LASSO + MDA on 2,040 Croatian SMEs; AUC 87.2 vs. recalibrated Z′′ 70.4 (+16.8 pts); €15.6M improvement in correctly-classified defaulted debt.
- [[2024-01-01-powell-2024-asean-accounting-early-warning-distress]] — Powell et al. 2024. Accounting-based MDA on 720 firms in 6 ASEAN countries (1997–2016); profitability ratios dominate; 38 country-period discriminant functions; DD adds little.
- [[2024-06-22-hajek-2024-distress-prediction-annual-reports]] — Hajek & Munk 2024. FinBERT sentiment + BERTopic 26-topic taxonomy on 10-K/20-F risk-factor sections; XGBOD SSL for class imbalance; AUC 0.9864, sensitivity 0.8616.
- [[2026-02-04-bari-2026-us-small-business-distress-framework]] — Bari 2026. Early-warning framework for US small businesses (N = 482); 7 indicator families; 6 of 7 hypotheses rejected; ΔR² 0.31→0.46; credit behaviour the largest single channel (β = +0.34).

### Practitioner CEO interviews — corporate turnaround / leadership

- [[2026-05-24-erginbilgic-2026-rolls-royce-turnaround-playbook]] — Bloomberg Podcasts (*Leaders with Francine Lacqua*), interview with Tufan Erginbilgiç. The wiki's first primary-source CEO testimony on the *response* side of financial distress: four-pillar transformation playbook + burning-platform speech protocol + resilience-before-crisis principle. Stock 10× under his tenure; McKinsey case-study designation.
- [[2026-05-19-sternfels-2026-mckinsey-leading-through-transformation]] — McKinsey Unpacked webcast (recruiting series); Bob Sternfels (McKinsey global managing partner) on leadership, AI, and the next generation at McKinsey's 2026 centennial. Brand and candidate-recruiting content; few named frameworks; useful as a baseline for what McKinsey says publicly about leadership.
- [[2026-05-26-mckinsey-2026-rewired-to-win-reimagining-enterprise-tech-ai]] — McKinsey Live webinar revisiting the book *Rewired* (Lamarre/Smaje/Zemmel, 2023) in the post-2023 generative-AI context. Hosts Lucia Rahilly + Rob Levin + Kate Smaje on the value gap between AI claims and AI outcomes; outperformer-behaviour framework (focus + capabilities + change). Yt-dlp fallback ingest.
- [[2026-05-26-mckinsey-2026-leaders-not-knowing-it-all]] — McKinsey Podcast *Leadership Shaped by Experience* (inaugural episode); Eric Kutcher interviews David Novak (former CEO + cofounder Yum! Brands). Leadership via asking-questions + recognition-as-lever; the Crystal Pepsi failure case study. Yt-dlp fallback ingest.

### Corporate governance & mission protection — Eric Ries / *Incorruptible*

- [[2026-05-26-yc-2026-defend-against-mediocrity-and-rot]] — Y Combinator's *Main Function* podcast (Garry Tan + Eric Ries, 50 min). Ries's central argument: shareholder primacy is a doctrine not a law; "financial gravity" predictably degrades successful companies; governance structures (PBC, mission-controlled boards, industrial foundations, dual-class) can resist that erosion. Live cases: Anthropic, Costco, Patagonia, Novo Nordisk, Twilio.
- [[2026-05-26-lennys-2026-anthropic-costco-patagonia-incorruptible-companies]] — Lenny's Podcast (Lenny Rachitsky + Eric Ries, 99 min). The long-form sibling to the YC episode — same author, same book, more depth on Anthropic's Long-Term Benefit Trust mechanics and the OpenAI/Anthropic divergence story. Cleaner companion transcript on Lenny's Substack.

### Industry-level competitive-strategy research

- [[2026-05-26-mckinsey-2026-next-big-arenas-of-competition]] — McKinsey Global Institute virtual event (May 12, 2026); authors Kweilin Ellingrud + Kevin Russell. Names **8 arenas of outsized growth** (AI services, semiconductors, cloud infrastructure, advanced manufacturing, robotics, next-generation energy systems, space, biopharma) and introduces **"omniscalers"** — 9 firms competing across multiple arenas at unprecedented capex scale. Most data-dense McKinsey source in the corpus.

### Methodology — system dynamics + go-to-market

- [[2026-05-26-mit-sloan-2026-systems-thinking-for-leaders]] — MIT Sloan Executive Education webinar; John Sterman (JW Forrester Professor of Management) on system dynamics for executives. The methodology side of complex-systems analysis; pairs naturally with the wiki's resilience-triptych concepts as the analytical toolkit. 58 min; yt-dlp fallback ingest.
- [[2026-05-26-yc-2026-50-founders-first-customers]] — Y Combinator S23-batch montage; 16 named startups answering "how did you get your first customer?" Network-channel dominance (~5 of 16); cold outreach (~4); viral launch as high-variance outlier (Reworkd AI). First go-to-market source in the corpus.

### Rabobank practitioner reports — Dutch real-estate / construction sectors

- [[2025-rabobank-bouw-en-vastgoedbericht-2025]] — RaboResearch 2025. Online multi-chapter publication; sub-sector deep dives (woningbouw, utiliteitsbouw, GWW, installatie, ruw-afbouw); Buildsight production forecasts 2023–2027.
- [[2025-12-11-rabobank-sectorprognoses-2025-12]] — Džambo & Treur 2025. Dutch macro + sector forecasts 2025–2027; GDP +1.7%/+1.3%/+1.3%; ICT + healthcare lead, agriculture structurally shrinking.
- [[2025-12-18-rabobank-woningcorporaties-aan-hun-limiet]] — Cooiman & van der Zanden 2025. Dutch social-housing corporations at sector-wide financial limit; WSW > €100B; Vpb burden €700M → €1.5B by 2027 under ATAD; woningtekort → 420k in 2026.
- [[2026-02-24-rabobank-vastgoed-selectief-investeren]] — Ouwehand 2026. Commercial-real-estate outlook 2026; "selectief investeren, gericht optimaliseren"; EPBD IV + overdrachtsbelasting + box 3 fiscal pivots.
- [[2026-04-14-rabobank-beter-benutten-bestaande-bebouwing]] — Smit & Dirkse 2026. Strategic pivot from nieuwbouw to "beter benutten" of existing buildings; four categories (woningdelen, splitsing, optoppen, transformatie); Rijk-target 100k optop-dwellings by 2030.

## Entities

- [[Ahsan-Habib]] — Professor at Massey University School of Accountancy; first author of the canonical 1966–2017 distress literature review; the wiki's foundational definitional reference.
- [[Edward-I-Altman]] — Professor Emeritus at NYU Stern; founder of statistical bankruptcy prediction; author of the Z-score lineage (1968 → Z′′ 1995 → Omega 2023).
- [[Eric-Ries]] — Author of *The Lean Startup* (2011) and *Incorruptible* (2026). Promoted on the 2026-05-26 ingest batch via the second-source rule (YC + Lenny's interviews). Pre-Anthropic adviser; named the "financial gravity" failure mode; seeded the wiki's [[mission-protection-via-governance]] concept.

## Concepts

- [[altman-z-score]] — The Z-score lineage (1968 → Z′ → Z′′ → International → Omega); MDA-derived accounting-based distress score; the most-cited distress measure in the empirical literature.
- [[common-size-statements]] — Statement-level standardisation technique (vertical / horizontal / combined); the sister technique to ratio analysis, used invisibly by every cross-firm distress sample assembly.
- [[corporate-turnaround]] — The **response phase** to financial distress: what management actually does once detection models say a firm is in trouble. Single-source so far (Erginbilgiç @ Rolls-Royce, 2026); seeded with the four-pillar transformation playbook + burning-platform speech protocol. Future ingests of academic turnaround literature, consulting frameworks, and comparable CEO case studies will deepen the concept.
- [[mission-protection-via-governance]] — The **prevention phase** of corporate resilience. Eric Ries's *Incorruptible* (2026) framework: four governance mechanisms (dual-class, Public Benefit Corp, mission-controlled board / long-term-benefit trust, industrial foundation) that resist the "financial gravity" pull toward mediocrity. Seeded by the YC + Lenny's interview pair; the prevention dual of [[corporate-turnaround]] and the upstream-cause concept the academic-paper detection cluster measures the downstream-effect of.
- [[document-ai-ingestion-options]] — **Meta / tooling.** MECE comparison of Mistral Document AI (OCR 3) vs Landing AI ADE as the PDF→markdown converter at the [Acquire](../CLAUDE.md#acquire) step. Mistral = cheap ($0.001–0.002/pg), markdown-native, low-effort drop-in; Landing AI = grounded chunk JSON + cross-page table reconstruction at ~15–30× the cost, higher integration effort. Recommendation: Mistral as default, pilot Landing AI on table/appendix-dense papers.
- [[dupont-identity]] — ROE decomposed into profit margin × total asset turnover × equity multiplier (= operating × asset-use × leverage efficiency); the canonical performance-attribution framework.
- [[dutch-construction-sector]] — Dutch *bouwsector* and its six sub-sectors; production-cycle 2024–2026 trough; consolidation trajectory toward 2040; krappe arbeidsmarkt + stikstof + netcongestie constraints.
- [[dutch-housing-shortage]] — Structural Dutch *woningtekort*; ~420,000 dwellings by 2026; supply-side, financing-side, demand-side causes; policy responses (Regiewet, coalitieakkoord 2026–2030, beter benutten, cooperative housing).
- [[financial-distress]] — Umbrella concept; multi-stage observable process; defined per Habib 2020 across failure / insolvency / bankruptcy / default; operationalised differently across the corpus; now includes a sectoral-distress sub-concept covering the Dutch woningcorporaties case.
- [[financial-ratio-analysis]] — Umbrella concept for the chapter-canonical closed vocabulary of ~22 financial ratios across five categories (liquidity / leverage / turnover / profitability / market value); the definitional backbone of every distress-prediction source in the corpus.
- [[multiple-discriminant-analysis]] — MDA; the linear-classification technique underlying the Z-score family; Wilks's lambda + F-test stepwise variable selection; comparable to logit/probit but with weaker cross-context portability.
- [[sme-distress-predictor-variables]] — The canonical 164-variable predictor catalogue (Altman Omega Score appendix) across 18 categories: Z-Score, Profitability, Liquidity, Leverage, balance-sheet Δs, Payment behaviour, Employee, Management, and firm-level controls; the corpus-wide reference catalogue distress-prediction papers can cite rather than re-deriving locally.

## Artifacts

v0.7 — paper-tied artifact pages (`type: artifact`). Each reproduces a single load-bearing table, figure-diagram, named equation, or instrument verbatim. Source pages' `## Distinctive artifacts` sections now catalogue these wikilinks rather than duplicating the data inline. See [CLAUDE.md §Artifacts](../CLAUDE.md#artifacts) for the schema and the concept/artifact split (paper-tied → artifact; corpus-shared → concept).

### Erginbilgiç 2026 — Rolls-Royce turnaround

- [[erginbilgic-2026-four-pillar-turnaround-playbook]] — The four jointly-necessary pillars (people / granular strategy / contract renegotiation / performance management) framed as the operational difference between *transformation* (multi-dimensional culture + business-model change) and *restructuring* (cost cutting alone). Mermaid framework.
- [[erginbilgic-2026-burning-platform-speech-protocol]] — The named-event communication protocol that launched the Rolls-Royce transformation: 4 months pre-arrival External Benchmarking → 1.5-hour internal town hall (NOT a press conference) → data-grounded mirror (Part 1) + energising vision (Part 2) in one event. Mermaid protocol.

### Ries 2026 — *Incorruptible* (mission-protection governance)

- [[ries-2026-four-mission-protection-mechanisms]] — The four governance structures Ries names in *Incorruptible* (2026) for resisting financial-gravity-driven mission erosion: Dual-class shares (weak) / Public Benefit Corp (moderate) / Mission-controlled board / Long-Term Benefit Trust (strong) / Industrial foundation (strongest). Live cases: Anthropic, Patagonia, Novo Nordisk, Costco. Mermaid diagram + per-mechanism strengths/weaknesses/case-study.

### McKinsey Global Institute 2026 — competitive arenas

- [[mgi-2026-eight-arenas-and-omniscalers]] — The 8 arenas + 9 omniscalers framework from MGI's May 2026 *The race takes off in the next big arenas of competition*. Arena definitions, cross-arena structure (AI services + semiconductors + cloud as a stack), 2024-vs-2026 update, geographic-concentration patterns. Reproduces the framework at webcast-level fidelity; the underlying report is not yet ingested.

### Altman 2023 — Omega Score

- [[altman-2023-hypothesis-test-performance]] — Table 1: 5 sequential LASSO models, AUC 70.4 → 88.0 (+17.6).
- [[altman-2023-omega-score-formulas]] — Three named formulas: general / 60-day Regular / 30-day Early-warning.
- [[altman-2023-omega-score-groups]] — Table 3: Alpha/Beta/Gamma thresholds + cumulative default incidence (Gamma 92.2%).
- [[altman-2023-prediction-performance-comparison]] — Table 5: Z′′ / Omega Groups / continuous Omega / RF / XGBoost (AUC 70.4 → 90.3).
- [[altman-2023-monetary-impact]] — Table 6: €15.6 M improvement in correctly-classified defaulted debt.

### Bari 2026 — US small-business distress

- [[bari-2026-financial-distress-process-diagram]] — Figure 3: distress as iterative feedback loop (Mermaid).
- [[bari-2026-hierarchical-regression-results]] — Tables 3–7: 7-construct regression; ΔR² +0.15; credit behaviour β = +0.34.
- [[bari-2026-indicator-family-framework]] — 7 indicator families across financial / behavioural / relational channels (Mermaid).
- [[bari-2026-demographic-distribution]] — Tables 1–2: 482-firm sample composition.

### Habib 2020 — distress determinants & consequences review

- [[habib-2020-distress-measurement-models]] — Table 1: Z-score / O-score / Zmijewski / Sudarsanam-Lai / Hillegeist BSM-Prob / Merton DTD / Campbell CHS, with usage counts.
- [[habib-2020-determinants-consequences-taxonomy]] — The 3×4 organising frame (firm-fundamental / macro-economic / corporate-governance determinants × financial reporting / firm-level operational / capital market / corporate governance consequences).
- [[habib-2020-determinants-literature-rows]] — Table 2: ~80 author rows; exemplar set transcribed; full bibliography deferred.
- [[habib-2020-consequences-literature-rows]] — Table 3: ~80 author rows; panel-level findings transcribed; full bibliography deferred.

### Hajek 2024 — NLP-augmented distress prediction

- [[hajek-2024-prior-nlp-distress-literature]] — Table 1: 17-row prior-literature matrix (Cecchini 2010 → this study).
- [[hajek-2024-financial-features]] — Table 2: 23 financial features × 8 categories.
- [[hajek-2024-bertopic-risk-categories]] — Table 4: 26-topic risk-factor taxonomy (Intellectual property, R&D, Security, Tax, Litigation, …).
- [[hajek-2024-model-comparison]] — Table 6: 11-model AUC + Sensitivity comparison; XGBOD wins on AUC + Sensitivity simultaneously.
- [[hajek-2024-friedman-test]] — Table 7: Friedman + Shafer post-hoc multi-model significance test.
- [[hajek-2024-ssl-hyperparameter-grid]] — Appendix Table A.1: SSL hyperparameter grid (XGBOD + XGBoost + 6 unsupervised detectors: KNN, LOF, HBOS, OCSVM, LODA, Isolation Forest).

### Luppe 2012 — anchoring on accounting magnitudes

- [[luppe-2012-anchoring-index-results]] — Table 2: 8-company × 3-group Anchoring Indexes; mean AI = 0.91; Apple AI = 1.38.
- [[luppe-2012-t-test-results]] — Table 4: per-company t-statistics; all p < 0.01.
- [[luppe-2012-experimental-design]] — Jacowitz-Kahneman 3-group experimental design (Mermaid); reusable across audit-risk, fair-value, transfer-pricing contexts.

### Powell 2024 — ASEAN MDA

- [[powell-2024-prior-literature-matrix]] — Table 1: 14 ratios × 15 prior MDA studies; top-endorsed = EBIT/TA, WC/TA, CA/CL, TL/TA.
- [[powell-2024-descriptive-statistics]] — Table 2: univariate distressed-vs-non-distressed gaps; EBIT/TA −0.062 vs +0.086; TL/TA 0.865 vs 0.533.
- [[powell-2024-asean-discriminant-functions]] — Table 3: 7 ASEAN-wide Z-score functions across 7 periods; Pre-GFC X₁ sign reversal.
- [[powell-2024-country-discriminant-functions]] — Table 4: 38 country-by-period discriminant functions (Indonesia, Malaysia, Philippines, Singapore, Thailand, Vietnam).
- [[powell-2024-ratio-frequency]] — Table 5: EBIT/TA dominates (33 entries); profitability ratios lead.
- [[powell-2024-classification-accuracy]] — Table 6: per-country × per-period accuracy matrix; ASEAN-wide 61.1% distressed / 81.9% non-distressed.
- [[powell-2024-mda-dd-improvements]] — Table 8: Merton DD adds only +0.90% distressed / +0.63% non-distressed accuracy on average.
- [[powell-2024-research-population]] — Appendix Table A1: listed vs. delisted company counts per ASEAN country (DataStream 2016).
- [[powell-2024-out-of-sample-discriminant-functions]] — Appendix Table C1: 12 out-of-sample MDA functions (Approaches 2 + 3, forward + back-testing).
- [[powell-2024-out-of-sample-accuracy]] — Appendix Table C2: out-of-sample classification accuracy by country × approach × period; χ² significance per cell.

## Threads

_None yet._

## Syntheses

_None yet._
