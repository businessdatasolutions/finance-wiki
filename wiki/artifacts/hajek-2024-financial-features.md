---
type: artifact
artifact_kind: table
title: "Table 2 — Financial features used for distress prediction (Hajek 2024)"
source: "[[2024-06-22-hajek-2024-distress-prediction-annual-reports]]"
source_table_ref: "Table 2"
source_pages: "p. 7"
last_confirmed: 2026-05-25
accessed_at: 2026-05-25
tags: [financial-features, financial-distress, predictor-variables, accounting-ratios, hajek, compustat]
relationships:
  - type: supports
    target: sme-distress-predictor-variables
    via: "shares categorical structure (profitability / liquidity / leverage / activity / valuation / size) with the Omega Score variable taxonomy"
---

# Table 2 — Financial features used for distress prediction

> The 23 financial features Hajek & Munk feed into XGBOD as the structured-data half of their hybrid pipeline. The 23 features map to 8 categories: company size (2), corporate reputation (1), profitability (4), activity (3), growth (1), liquidity (2), leverage (3), valuation (6). Drawn from Compustat 2021 (year-prior to outcome). The other half of the input vector is the 27 linguistic features (1 FinBERT sentiment + 26 BERTopic topic frequencies — see [[hajek-2024-bertopic-risk-categories]]).

## Provenance

| Field | Value |
|---|---|
| Source | [[2024-06-22-hajek-2024-distress-prediction-annual-reports]] |
| Source's reference | Table 2 |
| Caption (verbatim) | *"Financial features used for financial distress prediction."* |
| Location | p. 7 |
| Last confirmed | 2026-05-25 |

## Table

| Category | Feature ID | Financial indicator |
|---|---|---|
| **Company size** | x₁ | Total assets |
| Company size | x₂ | Revenues |
| **Corporate reputation** | x₃ | Shares held by institutions |
| **Profitability** | x₄ | Net income |
| Profitability | x₅ | Net profit margin |
| Profitability | x₆ | Operating margin |
| Profitability | x₇ | Return on equity |
| Profitability | x₈ | Return on assets |
| **Activity** | x₉ | Total assets to revenues |
| Activity | x₁₀ | Total assets to accounts payable |
| Activity | x₁₁ | Change in non-cash working capital |
| **Growth ability** | x₁₂ | Growth in revenues (last 3 years) |
| **Liquidity** | x₁₃ | Cash ratio |
| Liquidity | x₁₄ | Cash flow ratio |
| **Leverage** | x₁₅ | Book debt to total assets |
| Leverage | x₁₆ | Market debt to total assets |
| Leverage | x₁₇ | Interest coverage |
| **Valuation** | x₁₈ | Beta |
| Valuation | x₁₉ | Payout ratio |
| Valuation | x₂₀ | Dividend yield |
| Valuation | x₂₁ | Price to book value |
| Valuation | x₂₂ | Stock price to sales |
| Valuation | x₂₃ | Stock price to earnings |

## Notes

The feature IDs `x₁`–`x₂₃` are the structured-feature indices in the joint feature space used by XGBOD. The linguistic features occupy `x₂₄` (FinBERT sentiment) and `x₂₅`–`x₅₀` (26 BERTopic topic frequencies — see [[hajek-2024-bertopic-risk-categories]]).

The category structure overlaps substantially with the [[sme-distress-predictor-variables]] catalogue (the Altman 2023 Omega Score corpus reference) — both papers organise features into profitability / liquidity / leverage / activity / valuation / size families. Hajek's set is the *parsimonious* subset (23 features) chosen for compatibility with the linguistic-features modality; Altman 2023's set is the *comprehensive* candidate pool (164 features) tested for SME-default Lasso selection. Reading the two together: Hajek shows what a 23-feature financial baseline looks like when paired with text; Altman shows the wider universe of candidate financial variables.

The SHAP analysis (Fig. 9, source page §Results) ranks the **top contributors** as: total assets (size), net income, cash ratio, market debt to total assets, beta, growth in revenues, interest coverage, operating margin, shares held by institutions, dividend yield, revenues — i.e. all eight financial categories are represented in the top 10. The top linguistic features (credit-risk topic, liquidity-risk topic) rank below most financial features but above several financial features — confirming the *augmentation* (not replacement) claim of the paper.

## Cross-references

- The data source: Compustat 2021 fiscal-year data for the 2,545-firm sample.
- The linguistic features paired with these: [[hajek-2024-bertopic-risk-categories]] (Table 4).
- Headline performance with the joint feature space: [[hajek-2024-model-comparison]] (Table 6).
- Catalogue context: [[sme-distress-predictor-variables]] (Omega Score 164-variable reference).
- Concepts: [[financial-distress]], [[altman-z-score]].
