---
type: artifact
artifact_kind: table
title: "Table 2 — Anchoring Index per company (Luppe 2012)"
source: "[[2012-09-01-luppe-2012-anchoring-accounting-indicators]]"
source_table_ref: "Table 2"
source_pages: "p. 125"
last_confirmed: 2026-05-25
accessed_at: 2026-05-25
tags: [anchoring-bias, accounting-judgment, jacowitz-kahneman, behavioural-finance, experimental-results, luppe, anchoring-index]
---

# Table 2 — Anchoring Index per company

> Luppe's headline empirical artifact: the per-company Anchoring Index (AI) for eight company-profit estimation questions, measured under low-anchor and high-anchor experimental conditions vs. the calibration baseline. **Mean AI = 0.91** — the central finding. Two companies show AI > 1 (Grupo Pão de Açúcar 1.36; Apple 1.38), meaning respondents *over-shot* the high anchor; one company (Wal-Mart 0.50) shows resistance to the high anchor because it was "absurd" in magnitude.

## Provenance

| Field | Value |
|---|---|
| Source | [[2012-09-01-luppe-2012-anchoring-accounting-indicators]] |
| Source's reference | Table 2 |
| Caption (verbatim) | *"Anchoring Index per question of the experiment."* |
| Location | p. 125 |
| Last confirmed | 2026-05-25 |

## Table

| # | Question | Calibration median | Low anchor | High anchor | Low-anchor median | High-anchor median | Gen. AI | Low AI | High AI |
|---|---|---|---|---|---|---|---:|---:|---:|
| 1 | Petrobras | R$ 3 B | R$ 1 B | R$ 16 B | R$ 1 B | R$ 14.5 B | **0.85** | 0.67 | 0.88 |
| 2 | General Electric | US$ 891 M | US$ 250 M | US$ 25 B | US$ 300 M | US$ 20 B | **0.82** | 0.69 | 0.83 |
| 3 | Grupo Pão de Açúcar | R$ 412 M | R$ 30 M | R$ 1 B | R$ 50 M | R$ 1.4 B | **1.36** | 0.89 | **1.68** |
| 4 | Wal-Mart | US$ 5.5 B | US$ 250 M | US$ 100 B | US$ 400 M | US$ 50 B | **0.50** | 0.94 | 0.47 |
| 5 | CVRD | R$ 900 M | R$ 750 M | R$ 25 B | R$ 800 M | R$ 20 B | **0.74** | 0.11 | 0.76 |
| 6 | Apple Computer | US$ 991 M | US$ 100 M | US$ 10 B | US$ 250 M | US$ 14 B | **1.38** | 0.75 | **1.44** |
| 7 | TAM Linhas Aéreas | R$ 125 M | R$ 5 M | R$ 1 B | R$ 25 M | R$ 825 M | **0.87** | 0.82 | 0.88 |
| 8 | Sears | US$ 185 M | US$ 1 M | US$ 5 B | US$ 10 M | US$ 3 B | **0.75** | 0.96 | 0.74 |
| | **Mean** | | | | | | **0.91** | **0.73** | **0.96** |

The Anchoring Index formula:

```
AI = (high-anchor median − low-anchor median) / (high anchor − low anchor)
```

AI = 0 means the anchor had no effect (medians equal regardless of anchor). AI = 1 means respondents fully adopted the anchor. AI > 1 means respondents over-shot.

## Headline findings

**Mean AI = 0.91** — respondents' median estimates moved 91% of the way from low-anchor to high-anchor positions, an extreme anchoring effect for what are nominally objective accounting magnitudes.

**Two companies show AI > 1** — Grupo Pão de Açúcar (1.36) and Apple (1.38). In these cases the high-anchor median estimates *exceeded* the high anchor itself. The Apple case is especially striking: respondents told that Apple's profit was "greater than US$ 10 B" produced a median estimate of US$ 14 B — 40% beyond the anchor.

**Wal-Mart is the outlier in the opposite direction** (AI = 0.50). Body interpretation: the high anchor of US$ 100 B was implausibly large (5×–10× Wal-Mart's actual profit at that point), so respondents resisted it. This validates a boundary condition on anchoring: anchors that are clearly absurd lose their force.

**Petrobras worked example** (cited in body §Results): real 2006 net profit was R$ 26 B (≈ 1.7× the high anchor). Calibration-group median: R$ 3 B (an order of magnitude low). Anchored medians: R$ 1 B (low) vs. R$ 14.5 B (high) — a **14× swing driven purely by the arbitrary reference point**. The actual answer (R$ 26 B) lies above both anchored medians.

## The Low vs High asymmetry

| | Mean AI |
|---|---:|
| **Low AI** (low-anchor effect) | 0.96 |
| **High AI** (high-anchor effect) | 0.73 |

**Low anchors are more influential than high anchors** in this experimental context. Body interpretation: the high anchors used (some genuinely large, like US$ 100 B for Wal-Mart) were too far from the realistic range and got partially rejected. Low anchors (e.g. R$ 1 M for Sears) were closer to plausibly-low values and were absorbed more readily.

This *contradicts* Jacowitz-Kahneman 1995's symmetric anchoring claim, but the source page notes that the first author's own 2006 master's dissertation reported the same asymmetry — Luppe 2012 is treating this as a robust finding, not a fluke.

## Statistical significance

All 8 per-company t-tests reported in [[luppe-2012-t-test-results]] (Table 4) reach p < 0.01 with N = 79. Anchoring is not a marginal effect in this sample.

## Cross-references

- The t-test details for each company: [[luppe-2012-t-test-results]] (Table 4).
- The experimental design that generated the anchored vs. calibration medians: [[luppe-2012-experimental-design]] (8-company × 3-group structure).
- Concepts: [[anchoring-bias]], [[behavioural-finance]], [[accounting-judgment]].
