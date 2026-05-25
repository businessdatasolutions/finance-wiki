---
type: artifact
artifact_kind: table
title: "Table 1 — Summary of related linguistic distress-prediction studies (Hajek 2024)"
source: "[[2024-06-22-hajek-2024-distress-prediction-annual-reports]]"
source_table_ref: "Table 1"
source_pages: "p. 4"
last_confirmed: 2026-05-25
accessed_at: 2026-05-25
tags: [nlp-distress-prediction, prior-literature-matrix, financial-distress, bert, finbert, word2vec, loughran-mcdonald, model-comparison]
---

# Table 1 — Summary of related linguistic distress-prediction studies

> Hajek & Munk's prior-literature matrix positioning their FinBERT + BERTopic + XGBOD pipeline against fourteen earlier studies that combined textual data with financial-distress prediction. Spans Cecchini et al. 2010 (the bag-of-words era) through Chen et al. 2023 (BERT-era) and ends with the "this study" row that the rest of the paper substantiates.

## Provenance

| Field | Value |
|---|---|
| Source | [[2024-06-22-hajek-2024-distress-prediction-annual-reports]] |
| Source's reference | Table 1 |
| Caption (verbatim) | *"Summary of financial distress prediction using financial and textual information."* |
| Location | p. 4 |
| Last confirmed | 2026-05-25 |

## Table

| Study | Data source | Methods for extracting textual features | Prediction method | Performance |
|---|---|---|---|---|
| Cecchini et al. (2010) | MD&A | bag-of-words | SVM | Acc=0.839 |
| Hajek et al. (2014) | 10-K | L&M | SVM | Acc=0.838, F1=0.834, AUC=0.891 |
| Matin et al. (2019) | annual reports of Danish companies | word2vec | CNN+LSTM | AUC=0.844 |
| Maï et al. (2019) | MD&A | word2vec | CNN | Acc=0.712, AUC=0.856 |
| Tang (2020) | 10-K | pos/neg sentiment | RNN | Acc=0.939, F1=0.934, AUC=0.936 |
| Wang et al. (2020b) | annual reports of Chinese companies | HowNet sentiment | RanSub | Acc=0.964, AUC=0.952 |
| Wang et al. (2020b) | annual reports of Chinese companies | L&M + bag-of-words | RanSub | AUC=0.961 |
| Li et al. (2021) | annual reports of Chinese companies | BERT | DNN | Acc=0.901, F1=0.896 |
| Li et al. (2021) | annual reports of Chinese companies | L&M | DNN | Acc=0.857, F1=0.852 |
| Huang, Yao et al. (2023) | MD&A | word2vec | XGBoost | Acc=0.921, F1=0.494, AUC=0.912 |
| Zhao et al. (2022) | annual reports of Chinese companies | sentiment score | CatBoost | AUC=0.976 |
| Jiang et al. (2022) | 10-K | BERT | RF | AUC=0.936 |
| Nguyen and Huynh (2022) | 10-K, MD&A | L&M | LR | AUC=0.855 |
| Hajek and Munk (2023) | Earn. conf. calls | FinBERT sentiment + emotions | LSTM | Acc=0.947, F1=0.953, AUC=0.992 |
| Chen et al. (2023) | 10-K | L&M + readability | XGBoost | Acc=0.929 |
| **This study (Hajek & Munk 2024)** | **risk-related sections of 10-K and 20-F** | **BERTopic + FinBERT sentiment** | **SSL (XGBOD)** | *(headline results in [[hajek-2024-model-comparison]])* |

**Legend** (per the paper's note): CNN = convolutional neural network; L&M = sentiment indicators from the [Loughran-McDonald](https://sraf.nd.edu/loughranmcdonald-master-dictionary/) dictionary; LR = logistic regression; LSTM = long short-term memory; RanSub = random subspace; RF = random forest; RNN = recurrent neural network; SSL = semi-supervised learning; SVM = support vector machine.

## Notes

The "this study" row deliberately moves on two new axes simultaneously: (a) the textual data source narrows from MD&A or full annual reports to **risk-related sections** specifically (10-K Item 1A, 20-F Item 3D), and (b) the modelling moves from supervised to **semi-supervised** to handle the severe class imbalance (98 distressed : 2,447 non-distressed). The performance values from this study are not summarised here — they live in the per-model comparison page.

The matrix shows the *modelling lineage*: bag-of-words (Cecchini 2010) → dictionary methods (Hajek 2014, Wang 2020b) → embeddings (Matin 2019, Maï 2019, Huang-Yao 2023) → contextualised BERT (Li 2021, Jiang 2022, Hajek-Munk 2023, this study). The performance column tracks the *empirical* upward drift over the same period — but Hajek argues in §6.4 that contextualised BERT-based features are the **first** modality that detectably exceeds the financial-only baseline (Loughran-McDonald and Word2Vec features did not).

## Cross-references

- Headline results that "this study" produces: [[hajek-2024-model-comparison]] (Table 6) and [[hajek-2024-friedman-test]] (Table 7).
- The risk-topic taxonomy the linguistic features encode: [[hajek-2024-bertopic-risk-categories]] (Table 4).
- The 23 financial features the linguistic features are joined with: [[hajek-2024-financial-features]] (Table 2).
- Concepts: [[nlp-distress-prediction]], [[bert-finbert]], [[financial-distress]].
