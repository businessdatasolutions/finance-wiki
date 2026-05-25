# Index

The catalog of every page in this wiki. Updated on every ingest. See [the design doc, §9.1](../docs/superpowers/specs/2026-04-28-llm-wiki-design.md#91-wikiindexmd) for format conventions.

Each section is flat-listed alphabetically. Once page counts grow, sections may be supplemented with Dataview blocks that auto-include pages by frontmatter `type:`.

## Sources

- [[2012-09-01-luppe-2012-anchoring-accounting-indicators]] — Luppe & Fávero 2012. Tversky-Kahneman anchoring heuristic applied to net-profit estimation; mean Anchoring Index = 0.91 across 8 companies.
- [[2020-01-01-habib-2020-distress-determinants-consequences-review]] — Habib et al. 2020. Canonical 1966–2017 literature review; 3-determinant × 4-consequence taxonomy; distress-measurement formulary (Z-score, O-score, Zmijewski, BSM-Prob, DTD).
- [[2022-11-28-altman-2023-omega-score-sme-default]] — Altman et al. 2023. Omega Score for SME default; LASSO + MDA on 2,040 Croatian SMEs; AUC 87.2 vs. recalibrated Z′′ 70.4 (+16.8 pts); €15.6M improvement in correctly-classified defaulted debt.
- [[2024-01-01-powell-2024-asean-accounting-early-warning-distress]] — Powell et al. 2024. Accounting-based MDA on 720 firms in 6 ASEAN countries (1997–2016); profitability ratios dominate; 38 country-period discriminant functions; DD adds little.
- [[2024-06-22-hajek-2024-distress-prediction-annual-reports]] — Hajek & Munk 2024. FinBERT sentiment + BERTopic 26-topic taxonomy on 10-K/20-F risk-factor sections; XGBOD SSL for class imbalance; AUC 0.9864, sensitivity 0.8616.
- [[2026-02-04-bari-2026-us-small-business-distress-framework]] — Bari 2026. Early-warning framework for US small businesses (N = 482); 7 indicator families; 6 of 7 hypotheses rejected; ΔR² 0.31→0.46; credit behaviour the largest single channel (β = +0.34).

## Entities

- [[Ahsan-Habib]] — Professor at Massey University School of Accountancy; first author of the canonical 1966–2017 distress literature review; the wiki's foundational definitional reference.
- [[Edward-I-Altman]] — Professor Emeritus at NYU Stern; founder of statistical bankruptcy prediction; author of the Z-score lineage (1968 → Z′′ 1995 → Omega 2023).

## Concepts

- [[altman-z-score]] — The Z-score lineage (1968 → Z′ → Z′′ → International → Omega); MDA-derived accounting-based distress score; the most-cited distress measure in the empirical literature.
- [[financial-distress]] — Umbrella concept; multi-stage observable process; defined per Habib 2020 across failure / insolvency / bankruptcy / default; operationalised differently across the corpus.
- [[multiple-discriminant-analysis]] — MDA; the linear-classification technique underlying the Z-score family; Wilks's lambda + F-test stepwise variable selection; comparable to logit/probit but with weaker cross-context portability.

## Threads

_None yet._

## Syntheses

_None yet._
