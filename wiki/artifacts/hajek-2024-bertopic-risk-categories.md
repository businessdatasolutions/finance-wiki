---
type: artifact
artifact_kind: table
title: "Table 4 — BERTopic 26-topic taxonomy of corporate risk-factor disclosures (Hajek 2024)"
source: "[[2024-06-22-hajek-2024-distress-prediction-annual-reports]]"
source_table_ref: "Table 4"
source_pages: "p. 11"
last_confirmed: 2026-05-25
accessed_at: 2026-05-25
aliases:
  - bertopic-risk-categories
  - hajek-2024-risk-topics
  - bertopic-26-topic-taxonomy
tags: [bertopic, risk-disclosure-taxonomy, 10-k-risk-factors, nlp-distress-prediction, topic-model, financial-distress]
relationships:
  - type: part-of
    target: nlp-distress-prediction
---

# Table 4 — BERTopic 26-topic taxonomy of corporate risk-factor disclosures

> The empirically-derived 26-topic taxonomy Hajek & Munk recovered by running BERTopic (Grootendorst 2022) on 129,168 sentences from the Risk Factor (Item 1A) and Market Risk (Item 7A) sections of 10-K and 20-F filings of 2,545 globally-listed firms in 2021. After filtering to topics with ≥1,000 occurrences, 26 topics were retained from an initial 298. Each topic is a separate input feature in the distress-prediction model (the 26 topics occupy positions x₂₅–x₅₀ of the joint feature space, alongside [[hajek-2024-financial-features]] and one FinBERT sentiment feature at x₂₄).
>
> This is **the most reusable artifact in the paper** — any future analysis of 10-K risk-factor disclosures has a ready-made categorical framework. Each topic name and its top-5 terms can be used directly as a labelling guide.

## Provenance

| Field | Value |
|---|---|
| Source | [[2024-06-22-hajek-2024-distress-prediction-annual-reports]] |
| Source's reference | Table 4 |
| Caption (verbatim) | *"Topics identified using BERTopic."* |
| Location | p. 11 |
| Last confirmed | 2026-05-25 |

## Table

| Feature ID | Topic | Top 5 terms |
|---|---|---|
| x₂₅ | **Intellectual property risk** | intellectual, patent, right, license, property |
| x₂₆ | **R&D risk** | clinical, fda, trial, approval, candidate |
| x₂₇ | **Security risk** | security, breach, information, data, unauthorized |
| x₂₈ | **Tax risk** | tax, income, deferred, jurisdiction, reform |
| x₂₉ | **Litigation risk** | litigation, proceeding, claim, legal, court |
| x₃₀ | **Currency risk** | currency, exchange, dollar, foreign, fluctuation |
| x₃₁ | **Insurance risk** | insurance, coverage, reinsurance, catastrophe, covered |
| x₃₂ | **Competitive risk** | margin, gross, competition, reduce, profit |
| x₃₃ | **Product risk** | acceptance, success, develop, introduce, product |
| x₃₄ | **Dividend risk** | dividend, common, equity, unit, pay |
| x₃₅ | **Compliance risk** | penalty, comply, criminal, civil, fine |
| x₃₆ | **Regulatory risk** | regulation, compliance, legislation, law, change |
| x₃₇ | **Personnel risk** | personnel, key, retain, qualified, attract |
| x₃₈ | **Workforce risk** | disruption, labor, stoppage, strike, work |
| x₃₉ | **Health risk** | reimbursement, care, healthcare, medicare, health |
| x₄₀ | **Liquidity risk** | financing, need, fund, capital, additional |
| x₄₁ | **Overseas business risk** | china, located, country, united, states |
| x₄₂ | **Failure management** | failure, fail, effectively, successfully, manage |
| x₄₃ | **Commercial lending risk** | commercial, loan, estate, real, loan |
| x₄₄ | **Material risk** | actually, risk, following, material, occur |
| x₄₅ | **Price risk** | stock, common, price, analyst, fluctuation |
| x₄₆ | **Data privacy risk** | information, confidential, sensitive, data, collect |
| x₄₇ | **Timing risk** | quarter, timing, quarterly, fluctuate, period |
| x₄₈ | **Intangible asset risk** | goodwill, impairment, intangible, carrying, asset |
| x₄₉ | **IT risk** | system, interruption, information, disruption, availability |
| x₅₀ | **Credit risk** | credit, counterparty, creditworthiness, risk, rating |

## Topic coherence

Coherence (`Cv`, body §6.1): **UMAP 0.712 > PCA 0.471**. UMAP-derived embeddings yielded substantially more coherent topics than PCA — justifying BERTopic's UMAP+HDBSCAN pipeline over simpler dimensionality reduction.

The similarity matrix between topics (Fig. 5, p. 12) shows clustering:

- **Compliance + Regulatory risks** form a tight pair (semantically adjacent vocabularies).
- **Security + Data privacy risks** likewise cluster (overlapping "information / data" vocabulary).
- **Intangible asset + Goodwill impairment** vocabulary overlaps with the **R&D risk** topic to a lesser extent.
- Most topics have low mutual similarity, validating BERTopic's separability across the 26 categories.

## Discriminative signal (from §Results)

Topic frequencies are distributed across distressed vs. non-distressed firms — the *most discriminating* topics for distress are:

1. **Credit risk** (x₅₀) — distressed firms allocate proportionally more risk-section text to credit-related discussion.
2. **Liquidity risk** (x₄₀) — same direction, second-strongest signal.

The SHAP feature-importance plot (Fig. 9) places these two topics among the top non-financial features in the joint model, ranking just below the strongest financial features (size, profitability, liquidity ratios, leverage).

By contrast, **R&D risk** (x₂₆) and **Intellectual property risk** (x₂₅) are the most *frequent* topics across all firms (8% and 12% of risk-section content respectively per Fig. 6) but are not strongly discriminative — they appear at comparable rates in both distressed and non-distressed firms.

## Notes

The taxonomy emerged from BERTopic's unsupervised clustering rather than from prior literature — i.e. it is a *bottom-up* category set extracted from the actual filings, not a top-down framework imposed on them. The topic names are post-hoc labels chosen by the authors to summarise each cluster's top-5 terms.

The vocabulary is biased toward 10-K filings of larger US-listed firms (the 2,545-firm sample over-represents US/foreign large-cap issuers). A future cross-corpus comparison — e.g. running the same pipeline on UK FTSE annual reports — would reveal which categories are universal and which are 10-K-specific.

## Cross-references

- The paired financial features: [[hajek-2024-financial-features]] (Table 2, 23 features).
- Headline predictive performance using these topics: [[hajek-2024-model-comparison]] (Table 6).
- Statistical significance vs. baselines: [[hajek-2024-friedman-test]] (Table 7).
- Prior literature context: [[hajek-2024-prior-nlp-distress-literature]] (Table 1).
- Concepts: [[bertopic-taxonomy]], [[risk-factor-disclosures]], [[nlp-distress-prediction]], [[bert-finbert]].
