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

### Rabobank practitioner reports — Dutch real-estate / construction sectors

- [[2025-rabobank-bouw-en-vastgoedbericht-2025]] — RaboResearch 2025. Online multi-chapter publication; sub-sector deep dives (woningbouw, utiliteitsbouw, GWW, installatie, ruw-afbouw); Buildsight production forecasts 2023–2027.
- [[2025-12-11-rabobank-sectorprognoses-2025-12]] — Džambo & Treur 2025. Dutch macro + sector forecasts 2025–2027; GDP +1.7%/+1.3%/+1.3%; ICT + healthcare lead, agriculture structurally shrinking.
- [[2025-12-18-rabobank-woningcorporaties-aan-hun-limiet]] — Cooiman & van der Zanden 2025. Dutch social-housing corporations at sector-wide financial limit; WSW > €100B; Vpb burden €700M → €1.5B by 2027 under ATAD; woningtekort → 420k in 2026.
- [[2026-02-24-rabobank-vastgoed-selectief-investeren]] — Ouwehand 2026. Commercial-real-estate outlook 2026; "selectief investeren, gericht optimaliseren"; EPBD IV + overdrachtsbelasting + box 3 fiscal pivots.
- [[2026-04-14-rabobank-beter-benutten-bestaande-bebouwing]] — Smit & Dirkse 2026. Strategic pivot from nieuwbouw to "beter benutten" of existing buildings; four categories (woningdelen, splitsing, optoppen, transformatie); Rijk-target 100k optop-dwellings by 2030.

## Entities

- [[Ahsan-Habib]] — Professor at Massey University School of Accountancy; first author of the canonical 1966–2017 distress literature review; the wiki's foundational definitional reference.
- [[Edward-I-Altman]] — Professor Emeritus at NYU Stern; founder of statistical bankruptcy prediction; author of the Z-score lineage (1968 → Z′′ 1995 → Omega 2023).

## Concepts

- [[altman-z-score]] — The Z-score lineage (1968 → Z′ → Z′′ → International → Omega); MDA-derived accounting-based distress score; the most-cited distress measure in the empirical literature.
- [[common-size-statements]] — Statement-level standardisation technique (vertical / horizontal / combined); the sister technique to ratio analysis, used invisibly by every cross-firm distress sample assembly.
- [[dupont-identity]] — ROE decomposed into profit margin × total asset turnover × equity multiplier (= operating × asset-use × leverage efficiency); the canonical performance-attribution framework.
- [[dutch-construction-sector]] — Dutch *bouwsector* and its six sub-sectors; production-cycle 2024–2026 trough; consolidation trajectory toward 2040; krappe arbeidsmarkt + stikstof + netcongestie constraints.
- [[dutch-housing-shortage]] — Structural Dutch *woningtekort*; ~420,000 dwellings by 2026; supply-side, financing-side, demand-side causes; policy responses (Regiewet, coalitieakkoord 2026–2030, beter benutten, cooperative housing).
- [[financial-distress]] — Umbrella concept; multi-stage observable process; defined per Habib 2020 across failure / insolvency / bankruptcy / default; operationalised differently across the corpus; now includes a sectoral-distress sub-concept covering the Dutch woningcorporaties case.
- [[financial-ratio-analysis]] — Umbrella concept for the chapter-canonical closed vocabulary of ~22 financial ratios across five categories (liquidity / leverage / turnover / profitability / market value); the definitional backbone of every distress-prediction source in the corpus.
- [[multiple-discriminant-analysis]] — MDA; the linear-classification technique underlying the Z-score family; Wilks's lambda + F-test stepwise variable selection; comparable to logit/probit but with weaker cross-context portability.
- [[sme-distress-predictor-variables]] — The canonical 164-variable predictor catalogue (Altman Omega Score appendix) across 18 categories: Z-Score, Profitability, Liquidity, Leverage, balance-sheet Δs, Payment behaviour, Employee, Management, and firm-level controls; the corpus-wide reference catalogue distress-prediction papers can cite rather than re-deriving locally.

## Threads

_None yet._

## Syntheses

_None yet._
