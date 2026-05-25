---
type: concept
title: Common-size statements
aliases:
  - common-size financial statements
  - common-size balance sheet
  - common-size income statement
  - vertical analysis
  - common-base year statements
  - horizontal analysis
  - trend statements
confidence: 0.75
last_confirmed: 2026-05-25
source_count: 1
accessed_at: 2026-05-25
tags: [common-size-statements, financial-statement-standardisation, vertical-analysis, horizontal-analysis, trend-analysis, percentage-statements, financial-statement-analysis, ratio-analysis, financial-ratio-analysis]
relationships:
  - type: part-of
    target: financial-ratio-analysis
    via: "Common-size statements and ratio analysis are the two standardisation techniques Ross §3.2-3.3 pairs together"
---

# Common-size statements

A **standardisation technique** that expresses every line item of a financial statement as a percentage of a common denominator — total assets for the balance sheet, total sales for the income statement — so statements from firms of different sizes, in different currencies, or in different fiscal periods become directly comparable.

Codified pedagogically in [[2019-01-01-ross-2019-fundamentals-ch3-financial-statements|Ross/Westerfield/Jordan 2019 §3.2]]. Where [[financial-ratio-analysis|ratio analysis]] standardises by computing dimensionless ratios *between* line items, common-size statements standardise the line items themselves, preserving statement structure.

## The three variants

### Variant 1 — Common-size statements (vertical analysis)

Every balance-sheet item as % of total assets. Every income-statement item as % of sales. Worked example from Prufrock Corporation 2018:

| Income statement | % of sales |
|---|---:|
| Sales | 100.0% |
| Cost of goods sold | 58.2% |
| Depreciation | 11.9% |
| EBIT | 29.9% |
| Interest paid | 6.1% |
| Taxable income | 23.8% |
| Taxes (21%) | 5.0% |
| **Net income** | **18.8%** |

Reading vertically: 58 cents of every sales dollar goes to COGS; 12 cents to depreciation; 6 cents to interest; 5 cents to tax; 19 cents to bottom-line. Direct comparison with a peer's common-size IS isolates which cost lines differ.

### Variant 2 — Common-base year statements (horizontal analysis / trend analysis)

Every item indexed to its base-year value (base = 1.00). Reading horizontally: how has *this* item grown? Prufrock 2017 inventory = $393M; 2018 = $422M; 2018-indexed = 422/393 = 1.07. Inventory grew 7%.

This variant answers "how is this firm changing over time?" — strictly within-firm.

### Variant 3 — Combined common-size + base year

Apply the base-year index to the common-size series. Disentangles **ratio-growth** from **firm-growth**. Prufrock 2017 cash = 2.5% of total assets; 2018 = 4.0% of total assets; combined index = 4.0 / 2.5 = 1.61 (cash holdings as a *share* of assets grew 61%). The straight base-year index for cash alone is 146/84 = 1.74 (a 74% nominal increase). The combined view says: 61 percentage points of the 74-point cash growth is *re-weighting toward cash*; the remaining 13 points is *overall firm growth* (total assets grew 8% from $3,373M to $3,636M).

Full reproduction of Prufrock's combined analysis is in [[2019-01-01-ross-2019-fundamentals-ch3-financial-statements|Ross §3.2 Table 3.7]].

## Why this matters

The Ross chapter pairs common-size statements with ratio analysis because they answer different questions about the *same* financial statements:

| Question | Tool |
|---|---|
| "What does the firm look like, structurally, relative to its peers?" | Common-size statements (vertical) |
| "How is the firm evolving over time?" | Common-base year (horizontal) |
| "Is the change in this line item firm-growth or composition-shift?" | Combined |
| "How does this firm's *behaviour* (margins, turnover, leverage) compare?" | Ratio analysis |

A common-size income statement is structurally richer than a profit-margin ratio (the latter is a single point; the former is the whole P&L expressed as percentages). A profit-margin ratio is more comparable across hundreds of firms (a table of numbers, not a stack of statements).

## Application to the wiki's distress literature

Distress-prediction papers in the wiki rarely *name* common-size statements as a technique, but they routinely **apply** them when assembling cross-firm training samples:

- [[2024-01-01-powell-2024-asean-accounting-early-warning-distress|Powell 2024]]'s MDA on 720 ASEAN firms necessarily normalises balance-sheet items across firms of very different absolute sizes — the same operation as common-size standardisation.
- [[2022-11-28-altman-2023-omega-score-sme-default|Altman 2023]]'s recalibration on 2,040 Croatian SMEs assumes the financial-statement variables enter the discriminant function as ratios; this is the ratio-analysis-equivalent of common-size statements (one-dimensional rather than full-statement).
- [[2020-01-01-habib-2020-distress-determinants-consequences-review|Habib 2020]]'s catalogued empirical studies almost universally use ratio-form inputs (operationally identical to common-size IS items when the denominator is total sales or total assets).
- The **RMA Annual Statement Studies** (Tables 3.12 / 3.13 in Ross §3.5) — the canonical industry-benchmark dataset — *is* a common-size dataset: every line is expressed as % of assets or % of sales, then aggregated by firm-size quartile.

The technique is the **invisible scaffolding** of cross-firm distress modelling; this concept page names it so the wiki's downstream sources can cite it.

## Caveats

- **Common-size is structure-preserving but loses scale information.** A small firm with 25% gross margin and a huge firm with 25% gross margin look identical in common-size form; the volume difference is invisible.
- **The denominator matters.** Some traditions use total revenue rather than total sales (these differ when "other income" is non-trivial). Document the choice.
- **Base-year choice is consequential.** A crisis year as base distorts every subsequent ratio reading; a peak year does the opposite. Per Ross §3.2 worked example, the chapter uses an arbitrary "first year of the available data" convention.
- **Doesn't fix the GAAP/IFRS problem.** A common-size IS still uses each firm's own accounting choices for revenue recognition, depreciation, inventory valuation — see [[financial-ratio-analysis]] §Structural limits.

## Sources

- [[2019-01-01-ross-2019-fundamentals-ch3-financial-statements]] — Ross/Westerfield/Jordan §3.2. The canonical pedagogical reference for all three variants (common-size, common-base-year, combined) with Prufrock as the worked example and Tables 3.5–3.7 as the artifacts.

## Related concepts

- [[financial-ratio-analysis]] — the sister standardisation technique. Ross §3.2 (common-size) and §3.3 (ratios) are taught together for this reason.
- [[dupont-identity]] — the canonical ROE decomposition; can be derived from common-size IS items (profit margin = bottom-line common-size cell × 100).
- [[financial-distress]] — distress models routinely use common-size-equivalent inputs.

## Debates and supersession

No supersession. The technique is structurally simple, computationally trivial, and pedagogically stable. Modern extensions (e.g. *index-number analysis*, *trend Z-scores*) add layers on top but do not retire the underlying common-size operation.
