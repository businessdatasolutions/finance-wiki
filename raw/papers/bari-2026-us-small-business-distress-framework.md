---
title: "An Early-Warning Predictive Framework for Financial Distress in U.S. Small Businesses"
authors:
  - "Bari, M. H."
year: 2026
publication_date: 2026-02-04
venue: "Review of Applied Science and Technology, 5(1), 80-118"
doi: "10.63125/a1982t30"
url: "https://doi.org/10.63125/a1982t30"
pdf: "../assets/bari-2026-us-small-business-distress-framework.pdf"
page_count: 39
notes: |
  Converted with pdftotext -layout 26.02.0. Original filename
  "Md+Hasanujamman+Bari_rastv5i12680118.pdf" (URL-encoded download naming).
  Author full name: Md Hasanujamman Bari. Solo-author paper; affiliation
  Business Data Analyst, Price & Co., Texas, USA. Open access.
  Received 11 Nov 2025; revised 18 Dec 2025; accepted 13 Jan 2026; published 4 Feb 2026.
---

                    Review of Applied Science and Technology, February 2026, 80– 118


                   Review of                                                                        Volume: 5; Issue: 1
                                                                                                       Pages: 80– 118
                   Applied
                   Science and
                   Technology
An Early-Warning Predictive Framework for Financial Distress in
                    U.S. Small Businesses
                                          Md Hasanujamman Bari1;

           [1]. Business Data Analyst, Price & Co., Texas, USA;
                Email: hasanujamman.bari@gmail.com

Doi: 10.63125/a1982t30
Received: 11 November 2025; Revised: 18 December 2025; Accepted: 13 January 2026; Published: 04 February 2026

Abstract
This study developed and empirically evaluated an early-warning predictive framework for financial distress in
U.S. small businesses using a quantitative, time-dynamic modeling approach. The analysis was conducted on a
sample of 482 small businesses spanning manufacturing, construction, trade, professional services, and
hospitality sectors, with firms distributed across all major U.S. regions. Financial distress was defined using
multiple economically meaningful impairment indicators rather than bankruptcy alone. Descriptive results
showed notable variability across constructs, with mean liquidity of 0.62 (SD = 0.21), mean leverage of 0.54
(SD = 0.19), and mean credit behavior score of 0.47 (SD = 0.22), indicating heterogeneous financial conditions
across firms. Reliability analysis confirmed strong internal consistency, with Cronbach’s alpha values ranging
from 0.77 for efficiency indicators to 0.88 for credit behavior measures. Regression analysis revealed statistically
significant associations between financial distress and liquidity (β = −0.21, p = 0.002), profitability (β = −0.14,
p = 0.008), leverage (β = 0.25, p < 0.001), cash flow dynamics (β = −0.23, p = 0.001), credit behavior (β = 0.34,
p < 0.001), and relationship-based indicators (β = −0.18, p = 0.005). Efficiency indicators were not statistically
significant at the 5% level. Model explanatory power increased incrementally from R² = 0.31 in the baseline
financial model to R² = 0.46 in the full integrated model, while variance inflation factors remained below 1.9
across all specifications. Hypothesis testing resulted in the rejection of six out of seven null hypotheses. Overall,
the findings provide quantitative evidence that an integrated early-warning predictive framework can effectively
identify emerging financial distress among U.S. small businesses by combining financial, cash flow, behavioral,
and relational indicators.

Keywords
Financial Distress, Early-Warning System, Small Businesses, Predictive Modeling, Risk Assessment.




                                                         80
                     Review of Applied Science and Technology, February 2026, 80– 118

INTRODUCTION
Financial distress refers to a condition in which a business experiences persistent difficulty in meeting
its financial obligations through internally generated cash flows (Ashraf et al., 2019). This condition
emerges when operational revenues, liquid reserves, or access to short-term financing are insufficient
to cover routine commitments such as wages, supplier payments, interest expenses, lease obligations,
and tax liabilities. Financial distress is not synonymous with bankruptcy; rather, it represents a
progressive weakening of financial stability that can manifest long before legal insolvency occurs.
Businesses may continue operating for extended periods while distressed, often relying on delayed
payments, increased borrowing, asset liquidation, or renegotiated terms to sustain activity. From a
quantitative perspective, financial distress is observable through deteriorating liquidity positions,
declining profitability, rising leverage, inefficient asset utilization, and volatility in cash flows (Geng et
al., 2015). These characteristics reflect structural imbalances between inflows and outflows and are
commonly captured through financial ratios and behavioral indicators. Early-warning predictive
frameworks are designed to identify these imbalances at an incipient stage by translating financial and
operational signals into probabilistic assessments of distress risk. Such frameworks emphasize
prediction over diagnosis and focus on identifying firms that are likely to experience material financial
strain within a defined time horizon. At an international level, financial distress among small
businesses carries systemic relevance because small enterprises represent the dominant organizational
form in most economies and account for substantial shares of employment, production, and local
economic activity (Campa, 2019). The failure or prolonged distress of small firms disrupts labor
markets, weakens supply chains, increases credit losses for financial institutions, and reduces fiscal
revenues. Consequently, the ability to anticipate financial distress among small businesses is closely
linked to financial stability, economic resilience, and market efficiency across national contexts.
Small businesses are generally defined as independently owned enterprises operating with limited
scale, constrained resources, and concentrated ownership structures. These firms typically rely on
internal financing, bank credit, and trade credit rather than capital markets, which shapes both their
financial behavior and their vulnerability to distress. Compared to large corporations, small businesses
operate with thinner cash buffers, limited diversification, and greater exposure to idiosyncratic shocks
(Kristanti et al., 2016). Revenue volatility, cost fluctuations, and customer concentration can therefore
translate rapidly into liquidity stress. From a measurement standpoint, small business financial distress
is often more difficult to observe because financial reporting practices are less standardized, audit
requirements are limited, and accounting decisions may be influenced by tax considerations or owner
compensation strategies. As a result, traditional indicators used for publicly traded firms may not fully
capture the financial condition of small enterprises without adaptation. Internationally, these
challenges are widely recognized, and predictive models for small firm distress increasingly emphasize
cash flow dynamics, short-term obligations, and payment behavior rather than long-horizon solvency
measures alone (Delas et al., 2015). In the United States, small businesses constitute a large proportion
of employer firms and play a central role in employment generation, innovation diffusion, and regional
economic development. Their financial health is therefore closely monitored by lenders, policymakers,
and market participants. Early-warning systems for U.S. small businesses serve as analytical tools that
support credit risk management, portfolio monitoring, and internal financial planning. By providing
forward-looking assessments of distress risk, these systems enable stakeholders to identify vulnerable
firms before severe outcomes materialize. The quantitative modeling of small business distress thus
occupies a critical intersection between corporate finance, credit risk analytics, and applied
econometrics (Shaikh et al., 2018).
The development of predictive models for financial distress has its origins in quantitative analysis of
financial statements, where researchers identified systematic patterns preceding business failure. Early
empirical work demonstrated that distressed firms exhibit measurable deterioration in liquidity,
profitability, leverage, and operational efficiency prior to failure events (Shefrin, 2015). These findings
established the foundation for multivariate modeling approaches that combine multiple financial
indicators into composite risk measures. Over time, probabilistic models replaced purely classificatory
methods, allowing researchers to estimate the likelihood of distress rather than assigning firms to
binary categories. This shift reflected the recognition that financial distress is a stochastic process
                                                     81
                     Review of Applied Science and Technology, February 2026, 80– 118

influenced by firm-specific characteristics and external conditions. Subsequent advances incorporated
time dynamics, recognizing that the risk of distress evolves as firms age, grow, or experience changes
in financial structure. Hazard-based and panel-data approaches emerged to capture the conditional
nature of distress risk over time (Leung et al., 2015). These methodological developments reinforced
the importance of using longitudinal data and accounting for temporal dependencies when
constructing early-warning frameworks. At the same time, the scope of predictive inputs expanded
beyond accounting ratios to include behavioral, transactional, and relational variables. This expansion
was particularly relevant for small businesses, where payment patterns, credit utilization, and
borrowing behavior often change more rapidly than formal financial statements. Quantitative distress
modeling thus evolved into a multidisciplinary field combining insights from accounting, finance,
statistics, and risk management (Cooper, 2015). These foundations inform the design of modern early-
warning predictive frameworks that seek to balance accuracy, interpretability, and operational
feasibility.

                        Figure 1: Early-Warning Financial Distress Framework




In the context of U.S. small businesses, the information environment presents distinct challenges that
shape predictive framework design (Brown & Lee, 2019). Many small firms do not produce frequent or
audited financial statements, limiting the availability of standardized accounting data. Consequently,
early-warning systems often rely on alternative indicators derived from credit relationships,
transaction histories, and operational metrics. Payment delinquencies, line-of-credit utilization rates,
overdraft frequency, and changes in borrowing behavior can provide timely signals of emerging
financial stress. Relationship-based information accumulated through repeated interactions with
lenders also plays a critical role, as long-term relationships tend to reveal gradual shifts in risk that are
not immediately visible in static financial snapshots (Gupta et al., 2018). Quantitative models that
incorporate such relational variables have demonstrated improved sensitivity to early-stage distress.
Additionally, small business distress is influenced by firm age, size, and industry affiliation, as younger
firms may face different financial constraints than more established enterprises. Industry-specific
operating cycles further affect cash flow timing and working capital requirements, making sectoral
differentiation essential for accurate prediction. These factors highlight the need for early-warning
frameworks that are tailored to the structural characteristics of small businesses rather than adapted
directly from large-firm models (La Rocca et al., 2019). The U.S. economic environment adds further
complexity through regional variation, regulatory structures, and exposure to macroeconomic
fluctuations. Effective predictive systems must therefore integrate firm-level indicators with contextual
information to capture both idiosyncratic and common sources of financial stress.

                                                     82
                    Review of Applied Science and Technology, February 2026, 80– 118

Outcome definition represents a critical component of early-warning predictive frameworks for small
business distress. While legal bankruptcy provides a clear endpoint, it captures only a subset of
economically meaningful distress events (Lev, 2018). Many small businesses experience prolonged
financial strain without entering formal insolvency proceedings, exiting instead through voluntary
closure, asset liquidation, or informal restructuring. Quantitative frameworks that rely solely on
bankruptcy labels may therefore underestimate distress prevalence and delay detection. Alternative
outcomes such as severe payment delinquency, loan charge-offs, repeated covenant violations, or
sustained negative cash flows offer broader representations of distress. Selecting appropriate
prediction horizons is equally important, as short horizons emphasize immediate liquidity risk while
longer horizons reflect structural solvency concerns (Hommel & Bican, 2020). Early-warning systems
typically focus on horizons that align with managerial and credit decision cycles, enabling timely
intervention. From a modeling standpoint, these choices influence class imbalance, estimation bias, and
validation strategies. Distress events are relatively rare in many datasets, requiring careful handling to
ensure reliable probability estimates. Time-based validation, out-of-sample testing, and performance
metrics that assess both discrimination and calibration are essential components of robust framework
evaluation. These methodological considerations are particularly salient in small business contexts,
where sample composition and data availability can vary substantially across sectors and regions (Yang
& Zhang, 2020).

                        Figure 2: Predicting Small Business Financial Distress




Predictor selection determines whether an early-warning framework identifies distress at an actionable
stage. Liquidity measures capture the firm’s capacity to meet short-term obligations and often serve as
the earliest indicators of stress (Schoen, 2017). Profitability measures reflect the sustainability of
operations and the ability to generate internal funds. Leverage indicators measure financial risk
exposure and sensitivity to earnings fluctuations. Efficiency and working-capital metrics capture
operational effectiveness and cash conversion dynamics. For small businesses, changes in these
indicators may carry more information than their absolute levels, as rapid deterioration often precedes
distress. Behavioral predictors derived from credit usage, repayment history, and transaction activity
provide additional insight into near-term pressure (Balogun et al., 2016). These variables are
particularly valuable because they update frequently and reflect real-time financial behavior.
Combining financial, behavioral, and contextual predictors enables a layered approach to distress
detection that improves early-warning capability. Quantitative frameworks must also address data

                                                   83
                     Review of Applied Science and Technology, February 2026, 80– 118

quality issues, including missing values, reporting lags, and measurement noise. Appropriate
preprocessing and transformation strategies are therefore integral to model performance (Guizani,
2017). The predictive value of indicators ultimately depends on their ability to capture the underlying
financial processes that lead to distress, reinforcing the importance of theory-informed variable
construction.
Modeling approaches for early-warning prediction vary in complexity and interpretability. Traditional
statistical models offer transparency and ease of implementation, making them suitable for
environments where explain ability is essential (Koo et al., 2017). Time-to-event models provide a
dynamic perspective by estimating conditional distress probabilities as firm characteristics evolve.
More flexible machine learning techniques capture nonlinear relationships and complex interactions
among predictors, often improving predictive accuracy in heterogeneous datasets. For small business
distress, nonlinear effects are common, as the impact of financial ratios may depend on scale, liquidity
buffers, or industry norms. At the same time, predictive frameworks intended for operational use must
balance accuracy with stability and interpretability to maintain user confidence (Dichev et al., 2016).
Calibration, robustness checks, and performance monitoring are therefore integral to deployment. An
early-warning predictive framework for financial distress in U.S. small businesses can thus be
conceptualized as an integrated quantitative system that defines distress outcomes, constructs leading
indicators, estimates probabilistic risk using appropriate models, and evaluates performance under
realistic conditions (Rauch & Wende, 2015). This conceptualization situates early-warning prediction
as a systematic analytical process grounded in quantitative finance and applied risk modeling rather
than a purely descriptive exercise.
The primary objective of this study is to develop and empirically validate an early-warning predictive
framework capable of identifying financial distress among U.S. small businesses before the onset of
severe or irreversible financial outcomes. This objective centers on constructing a quantitatively robust
system that translates observable firm-level financial and behavioral indicators into probabilistic
assessments of distress risk over a defined forecasting horizon. The framework aims to capture the
dynamic and process-oriented nature of financial distress by focusing on early-stage signals such as
liquidity compression, deteriorating cash flow capacity, rising short-term leverage, and inefficiencies
in working-capital management rather than relying solely on terminal events such as bankruptcy. A
key objective is to tailor the predictive structure to the unique characteristics of small businesses in the
United States, including limited financial reporting frequency, reliance on bank and trade credit,
concentrated ownership, and heightened sensitivity to operational volatility. The study seeks to
operationalize distress in a manner that reflects economically meaningful conditions relevant to small
firms, such as persistent payment delinquency, sustained inability to service obligations, or significant
erosion of operating margins, thereby improving the relevance of prediction outcomes. Another
objective is to evaluate the predictive accuracy, stability, and calibration of the proposed framework
using appropriate quantitative performance metrics that reflect real-world deployment conditions,
including class imbalance and temporal variation. By systematically examining the contribution of
liquidity, profitability, leverage, efficiency, and behavioral indicators, the study aims to identify which
categories of predictors provide the strongest early-warning capability in a small business context. The
overarching objective is to establish a transparent, data-driven framework that enhances the timely
identification of financially vulnerable small businesses, supporting informed risk assessment and
decision-making within credit, financial monitoring, and enterprise management environments.
LITERATURE REVIEW
The literature on financial distress prediction constitutes a substantial body of quantitative research
that spans corporate finance, accounting, econometrics, and risk analytics. This literature has primarily
focused on identifying measurable indicators that precede firm failure and translating those indicators
into predictive models capable of estimating distress likelihood with acceptable accuracy (Cleofas-
Sánchez et al., 2016). Over time, the focus has shifted from descriptive analyses of failed firms toward
probabilistic, data-driven frameworks that emphasize early detection rather than post-event
classification. Within this evolution, early-warning systems have emerged as structured approaches
that integrate financial ratios, behavioral signals, and temporal dynamics to anticipate distress before
irreversible outcomes occur. While this research tradition has generated extensive insights for large and
                                                    84
                     Review of Applied Science and Technology, February 2026, 80– 118

publicly traded firms, its direct applicability to small businesses remains limited due to fundamental
differences in scale, data availability, financing structures, and operational volatility. Small businesses
operate within a distinct financial environment characterized by limited access to capital markets,
reliance on short-term credit instruments, and heightened sensitivity to cash flow disruptions (Xu et
al., 2015). As a result, the mechanisms through which financial distress develops in small firms differ
materially from those observed in larger corporations. Existing studies often apply generalized distress
models to small business samples without adequately addressing these structural differences, leading
to concerns regarding predictive validity and early-warning effectiveness. Furthermore, much of the
prior literature emphasizes terminal outcomes such as bankruptcy, which may fail to capture
economically meaningful distress states common among small enterprises, including persistent
delinquency, informal restructuring, or gradual operational decline. The literature review in this study
therefore synthesizes and evaluates prior quantitative research through the specific lens of early-
warning prediction for U.S. small businesses (Steinker et al., 2016). It examines how distress has been
defined, measured, and modeled, evaluates the strengths and limitations of existing predictive
approaches, and identifies methodological patterns relevant to small-firm contexts. This review
provides the analytical foundation for developing a tailored early-warning predictive framework that
reflects the financial realities, data constraints, and risk dynamics of U.S. small businesses.
Conceptual Foundations of Financial Distress
Financial distress is widely conceptualized in the scholarly literature as a dynamic and cumulative
process rather than a singular or discrete event. Rather than emerging instantaneously, distress
develops through a sequence of deteriorating financial conditions that progressively constrain a firm’s
operational flexibility and financial capacity (Nigam & Boughanmi, 2017). This process-oriented view
recognizes that businesses often experience prolonged periods of weakening liquidity, declining
operating performance, and increasing reliance on external financing before reaching any formal failure
threshold. Such deterioration may be subtle in its early stages, marked by increasing cash flow
volatility, shrinking operating margins, delayed payments to suppliers, or a growing mismatch
between short-term obligations and available liquid resources. As financial strain intensifies, firms may
resort to compensatory mechanisms such as short-term borrowing, asset liquidation, or renegotiation
of obligations, further embedding distress into their financial structure (Ashraf et al., 2019). The
literature emphasizes that these adjustments do not resolve distress but often shift its manifestation
across financial accounts and time periods. Conceptualizing financial distress as a process allows
researchers to observe intermediate states of vulnerability that precede overt failure, thereby expanding
the analytical focus beyond terminal outcomes. This perspective also acknowledges heterogeneity in
distress trajectories, as firms differ in their speed of deterioration, resilience, and capacity to absorb
shocks. Some firms exhibit rapid collapse following a short period of stress, while others persist in
distressed states for extended durations (Schweizer & Nienhaus, 2017). Treating distress as a process
therefore aligns conceptual definitions with observed financial behavior and supports analytical
frameworks that prioritize temporal evolution rather than static classification. This foundational view
underpins early-warning research by framing distress as observable, measurable, and progressive,
rather than binary and retrospective.
A critical distinction in the literature separates financial distress from related but non-identical concepts
such as technical default, economic failure, and legal insolvency. Financial distress refers to a condition
of impaired financial functioning in which a firm struggle to meet obligations through normal
operations (Curl et al., 2018). Technical default, by contrast, occurs when contractual terms are violated,
such as breaching debt covenants or missing scheduled payments, even if the firm remains operational.
Economic failure reflects a situation in which a firm’s revenues no longer cover total costs, including
opportunity costs, rendering continued operation economically inefficient. Legal insolvency represents
a formal status recognized by judicial or administrative proceedings, often involving bankruptcy or
court-supervised restructuring. These concepts occupy different positions along the distress continuum
and are not interchangeable (Altman, 2018). A firm may be financially distressed without being legally
insolvent, and many small businesses exit the market without ever entering formal insolvency
processes. The literature consistently notes that equating distress with bankruptcy alone obscures a
wide range of economically significant outcomes, particularly for small firms that may avoid legal
                                                     85
                     Review of Applied Science and Technology, February 2026, 80– 118

proceedings due to cost, stigma, or limited asset bases. Distinguishing among these states allows
researchers to specify outcomes more precisely and to align empirical measures with theoretical
constructs (Tevel et al., 2015). This differentiation is especially relevant in quantitative modeling, where
outcome definitions directly influence estimation, classification accuracy, and interpretability. By
separating distress from its legal and contractual manifestations, the literature establishes a conceptual
framework that supports broader and more nuanced measurement strategies.

                           Figure 3: Process of Financial Distress Evolution




Viewing financial distress as gradual deterioration carries important measurement implications that
are extensively discussed in empirical research (Brüggen et al., 2017). Static, single-period indicators
often fail to capture the cumulative nature of financial weakening, particularly when firms engage in
short-term adjustments that temporarily mask underlying problems. The literature highlights the
importance of tracking changes in financial indicators over time rather than relying solely on absolute
levels. Declining trends in liquidity ratios, increasing leverage over successive periods, and sustained
erosion of operating margins are treated as more informative signals than isolated observations. This
temporal perspective encourages the use of longitudinal data structures and repeated observations to
detect early-stage vulnerability (Kumar & Rao, 2015). Measurement approaches grounded in gradual
deterioration also emphasize leading indicators that precede severe outcomes, such as worsening cash
conversion cycles or increasing dependence on short-term liabilities. These indicators provide insight
into the mechanisms through which distress propagates within the firm. Additionally, the literature
recognizes that accounting data may reflect managerial discretion, tax considerations, or reporting
delays, reinforcing the need for multiple complementary measures. By conceptualizing distress as a
process, researchers justify the inclusion of diverse indicators that collectively reflect financial health
over time. This approach enhances measurement validity and supports predictive modeling strategies
that seek to identify risk before irreversible damage occurs (Downing, 2016).
The relevance of early-stage distress identification is a central theme in quantitative risk modeling
literature. Early detection is viewed as essential for distinguishing between firms experiencing
temporary fluctuations and those entering persistent decline (Lundqvist, 2015). Quantitative models
that focus exclusively on late-stage indicators often detect distress only when options for corrective
action are limited. The literature therefore emphasizes the value of early-warning frameworks that
prioritize sensitivity to initial signs of financial strain. Early-stage identification enables models to
capture transitions from stability to vulnerability, improving both classification accuracy and
interpretive usefulness (Atkeson et al., 2017). From a methodological standpoint, this focus necessitates
modeling approaches that accommodate time dynamics, incremental changes, and evolving risk

                                                    86
                     Review of Applied Science and Technology, February 2026, 80– 118

profiles. The literature also stresses that early-stage distress signals may be weaker, noisier, and more
context-dependent than late-stage indicators, requiring careful variable construction and validation.
Despite these challenges, early-stage identification is consistently regarded as more informative for
understanding distress mechanisms and for evaluating firm-level financial resilience. By anchoring
predictive modeling in early-stage signals, the literature reinforces a conceptual alignment between
theory, measurement, and empirical analysis (Estoque et al., 2019). This alignment forms the basis for
early-warning predictive frameworks that seek to quantify distress risk as an evolving probability
rather than a retrospective classification.
Evolution of Quantitative Financial Distress Prediction Models
The earliest quantitative approaches to financial distress prediction were grounded in ratio-based
analytical methods that relied on information extracted from financial statements. These early studies
operated on the assumption that financially distressed firms exhibit systematically different financial
characteristics from non-distressed firms well before observable failure occurs (Keasey & Watson,
2019). Liquidity ratios, profitability measures, leverage indicators, and efficiency metrics were treated
as diagnostic signals capable of distinguishing distressed entities from healthy ones. The statistical logic
underlying these approaches was relatively simple, emphasizing linear relationships and stability of
financial ratios over time. Researchers assumed that ratios followed consistent patterns across firms
and industries and that deviations from normative values reflected increased distress risk. These
models were typically estimated using small samples of failed and non-failed firms and relied on
historical financial data observed at fixed points prior to failure (Ashraf et al., 2019). While these early
ratio-based approaches provided foundational insights into the financial symptoms of distress, they
were constrained by strong statistical assumptions, including normality, independence, and
homogeneity of variance. Such assumptions often failed to hold in real-world datasets, particularly
when applied to heterogeneous firm populations. Moreover, early ratio-based methods treated distress
as a binary outcome and offered limited insight into the probability or timing of failure. Nevertheless,
this body of work established the empirical premise that financial distress leaves detectable traces in
accounting data and demonstrated that quantitative analysis could outperform purely qualitative
judgment in identifying vulnerable firms (Geng et al., 2015). These contributions laid the conceptual
and methodological groundwork for more sophisticated modeling techniques that would later address
the limitations of ratio-based screening.
As the literature matured, researchers recognized the limitations of relying on single financial
indicators and began transitioning from univariate screening methods to multivariate classification
techniques (Almamy et al., 2016). This shift reflected an understanding that financial distress is a
multidimensional phenomenon driven by the interaction of liquidity, leverage, profitability, and
operational efficiency rather than any single ratio. Multivariate approaches combined multiple
financial indicators into composite models capable of capturing these interactions. Classification
techniques were introduced to assign firms into distressed and non-distressed categories based on
weighted combinations of financial variables. These models marked a significant methodological
advancement by explicitly accounting for correlation among predictors and improving discriminatory
power. The literature documented that multivariate classification techniques substantially improved
accuracy relative to univariate rules, particularly when applied to larger and more diverse samples. At
the same time, these methods introduced new challenges related to model specification, variable
selection, and sensitivity to sample composition (Orús et al., 2019). The classification focus reinforced
a static view of distress, as firms were typically evaluated at a single point in time relative to an outcome
event. Despite this limitation, multivariate classification models became widely adopted due to their
interpretability and computational feasibility. They also contributed to standardizing the set of
financial variables commonly associated with distress prediction, shaping subsequent empirical
research. Importantly, this transition highlighted the need for structured statistical frameworks capable
of integrating multiple sources of financial information, moving the literature beyond simplistic
threshold-based diagnostics (Iturriaga & Sanz, 2015).




                                                     87
                     Review of Applied Science and Technology, February 2026, 80– 118

                           Figure 4: Evolution of Financial Distress Models




The next major evolution in financial distress prediction involved the development of probabilistic
modeling approaches that explicitly estimated the likelihood of distress rather than assigning firms to
deterministic categories (Zięba et al., 2016). This shift reflected growing recognition that financial
distress is inherently uncertain and that firms exhibit varying degrees of vulnerability rather than
discrete states. Probabilistic models framed distress as a conditional outcome influenced by firm
characteristics, allowing researchers to estimate the probability that a firm would experience distress
within a given horizon. This approach provided richer information for risk assessment by enabling
comparison across firms and over time. The literature emphasized the advantages of probabilistic
outputs for decision-making contexts such as credit evaluation and portfolio monitoring, where
understanding relative risk intensity is more informative than binary classification (Kliestik et al., 2018).
These models also facilitated the incorporation of additional explanatory variables and supported
formal hypothesis testing regarding distress determinants. Over time, probabilistic modeling became
the dominant paradigm in quantitative distress research, particularly as datasets expanded and
computational tools improved. Researchers increasingly focused on calibration, goodness-of-fit, and
out-of-sample performance to evaluate model quality. This probabilistic perspective also encouraged
greater attention to model validation and robustness, addressing concerns about overfitting and
sample-specific results. By reframing distress prediction as a probability estimation problem, the
literature advanced toward more nuanced and flexible analytical frameworks capable of capturing
variation in risk exposure across firms (Ghazali et al., 2015).
Despite these methodological advances, the literature has consistently identified limitations associated
with static, single-period prediction frameworks. Many early and intermediate models relied on
financial data from a single reporting period to predict outcomes occurring at a later date, implicitly
assuming that distress risk remains constant between observations (Carmona et al., 2019). This
assumption proved problematic, as financial conditions can change rapidly, particularly for small and
financially constrained firms. Static frameworks often failed to capture the dynamic nature of financial
deterioration, overlooking the cumulative effects of gradual changes in liquidity, leverage, and
operational performance. The literature noted that such models are sensitive to timing choices and may
produce inconsistent results when applied across different periods or economic conditions.
Additionally, single-period models struggled to differentiate between temporary financial fluctuations
and persistent downward trajectories, limiting their effectiveness for early-warning purposes (Ciampi,

                                                     88
                     Review of Applied Science and Technology, February 2026, 80– 118

2015). These limitations prompted growing interest in approaches that incorporate time dynamics and
repeated observations, although static models continued to be widely used due to their simplicity and
interpretability. The recognition of these shortcomings represents a critical turning point in the
evolution of distress prediction research, as it underscored the need for frameworks that reflect the
process-oriented nature of financial distress. This body of literature collectively demonstrates how
quantitative distress modeling evolved from simple ratio screening to probabilistic estimation, while
also revealing the methodological gaps that motivate more dynamic and early-warning–oriented
approaches (Bouslah et al., 2018).
Time-Dynamic and Event-Based Modeling of Distress
Financial distress has increasingly been conceptualized in the literature as a time-dependent risk
process rather than a static firm attribute or a one-time classification outcome (Schlotz, 2019). This
conceptualization recognizes that financial vulnerability evolves as firms experience changes in
operating performance, liquidity availability, financing conditions, and exposure to internal or external
shocks. Distress is therefore understood as an accumulation of adverse financial signals that intensify
over time, reflecting gradual erosion in a firm’s capacity to meet obligations through normal business
operations. This process-oriented view contrasts with earlier static frameworks by emphasizing that
risk is conditional on a firm’s survival up to a given point and, on the information, available at that
time. Financial distress is not treated as an immediate state of failure but as a probabilistic condition
that can strengthen or weaken as financial conditions change (Pombeiro et al., 2017). For small
businesses, this framing is particularly relevant because their financial structures often rely on short-
term cash flows, limited liquidity buffers, and relationship-based credit, which amplify sensitivity to
timing mismatches between inflows and outflows. Minor disruptions in revenue collection, cost
structures, or credit access can therefore translate rapidly into heightened distress risk. Conceptualizing
distress as time-dependent also highlights that firms may move through multiple intermediate states
of vulnerability before any formal failure occurs. These states are observable through patterns such as
repeated short-term borrowing, accelerating leverage, persistent margin compression, and increasing
reliance on delayed payments (Diyan et al., 2020). By framing distress as a dynamic risk process, the
literature establishes a theoretical foundation for predictive models that track trajectories rather than
snapshots, aligning the concept of distress with its empirical manifestation in financial data.
The adoption of panel data structures and firm-year observation frameworks represents a
methodological response to the recognition that distress unfolds over time (Mansy & Kwon, 2020).
Rather than relying on a single observation per firm, panel frameworks treat each firm as a sequence
of observations across multiple periods, allowing financial indicators to vary as conditions evolve. This
structure enables the simultaneous use of cross-sectional variation across firms and temporal variation
within firms, enhancing the capacity to identify patterns associated with the onset and escalation of
distress. Firm-year frameworks also allow models to incorporate lagged information, trend measures,
and rolling indicators that capture gradual deterioration rather than abrupt change. In the context of
U.S. small businesses, panel designs are particularly valuable because early-warning signals often
appear as incremental shifts in liquidity coverage, working-capital strain, or credit usage behavior
(Zhang et al., 2016). While small firms may lack standardized, high-frequency financial reporting,
accounting-system data, lender records, and transactional information can still support repeated
observations over time. Panel structures also facilitate the integration of time-varying contextual factors
such as industry conditions and economic cycles, which influence distress risk across firms but interact
differently with firm-specific vulnerabilities. From an analytical perspective, firm-year frameworks
improve statistical efficiency by increasing sample size and reducing reliance on rare event
observations alone. They also support more realistic validation strategies that preserve temporal
ordering, which is critical for evaluating early-warning performance (Chetto & Queudet, 2016). Overall,
panel data structures operationalize the time-dependent conceptualization of distress by embedding
temporal evolution directly into the modeling design.




                                                    89
                    Review of Applied Science and Technology, February 2026, 80– 118

                      Figure 5: Time-Dependent Financial Distress Assessment




A central advantage of time-dynamic approaches lies in the use of conditional probability estimation
rather than fixed-horizon classification. Fixed-horizon models typically evaluate whether a firm will
experience distress within a predetermined window using information from a single point in time
(Corlu et al., 2020). Such approaches implicitly assume that risk remains constant between observation
and outcome, an assumption that conflicts with the observed volatility of firm financial conditions.
Conditional probability frameworks, by contrast, estimate the likelihood of distress at each period
given that the firm has remained solvent up to that point. This approach allows risk assessments to be
updated continuously as new financial and behavioral information becomes available. Conditional
estimation aligns closely with monitoring environments, where decision-makers reassess risk
repeatedly rather than making one-time judgments (Lueddeckens et al., 2020). For small businesses,
this is particularly important because indicators such as cash balances, credit utilization, and payment
behavior can change substantially over short intervals. Conditional frameworks also exploit the full
informational content of firm histories by using repeated observations rather than compressing them
into a single summary measure. This enables models to distinguish between firms experiencing
temporary financial pressure and those exhibiting persistent deterioration. By producing time-indexed
risk estimates, conditional probability approaches enhance interpretability and relevance in early-
warning contexts. They also support the identification of risk acceleration patterns, where distress
probability increases sharply following specific financial or behavioral shifts (Li et al., 2020). The
literature consistently presents conditional estimation as a more faithful representation of the distress
process, especially when the objective is early detection rather than retrospective classification.
Defining Distress Outcomes in Small Business Research
A central challenge in small business financial distress research lies in the widespread reliance on
bankruptcy-based outcome variables, which the literature consistently recognizes as an incomplete and
often misleading representation of distress in small firms (Reid et al., 2018). Bankruptcy filings capture
only a narrow subset of distressed businesses, as many small enterprises never enter formal insolvency
proceedings due to cost barriers, limited asset bases, reputational concerns, or the informal nature of
their exit decisions. Small business owners frequently choose voluntary closure, asset liquidation, or
informal restructuring rather than engaging with legal insolvency systems, resulting in substantial
underrepresentation of distress events when bankruptcy is used as the sole outcome measure. This
limitation is particularly pronounced in empirical datasets drawn from lender portfolios or
administrative records, where a large proportion of financially distressed firms continue operating in
compromised states without triggering legal default mechanisms (Inekwe, 2016). Bankruptcy-based

                                                   90
                     Review of Applied Science and Technology, February 2026, 80– 118

outcomes also tend to identify firms at an advanced stage of distress, when financial deterioration has
already become severe and irreversible. As a result, models trained on bankruptcy labels often
emphasize late-stage indicators such as extreme leverage or insolvency conditions, which are less
useful for early-warning purposes. The literature further notes that bankruptcy definitions vary across
jurisdictions and time periods, introducing inconsistency in outcome measurement that complicates
cross-study comparison. In the context of U.S. small businesses, these limitations undermine the ability
of bankruptcy-based models to capture economically meaningful distress trajectories (Schweizer &
Nienhaus, 2017). Consequently, researchers increasingly argue that equating distress with bankruptcy
oversimplifies the phenomenon and constrains the analytical value of predictive frameworks designed
to detect vulnerability at earlier stages.

                         Figure 6: Alternative Indicators of Financial Distress




In response to the shortcomings of bankruptcy-based measures, the literature has expanded the
definition of distress outcomes to include alternative indicators that better reflect the financial realities
of small businesses. Severe payment delinquency is frequently identified as a critical signal of distress,
as it directly reflects a firm’s inability to meet short-term obligations and often precedes more severe
financial consequences (Visentin et al., 2020). Persistent delinquency across multiple payment cycles
indicates structural liquidity problems rather than temporary cash flow mismatches. Charge-offs and
loan restructuring events represent another class of distress outcomes that capture situations in which
lenders formally recognize impaired repayment capacity. These events reflect material financial
deterioration even when the firm remains operational. Persistent negative operating cash flow is also
widely recognized as a core distress indicator, as it signals that the firm’s primary business activities
are failing to generate sufficient resources to sustain operations (Tomas Žiković, 2018). Unlike
profitability measures that may be influenced by accounting choices, operating cash flow provides a
direct view of financial viability. Repeated covenant breaches or obligation violations further indicate
distress by revealing sustained inability to comply with contractual requirements, even if formal
default has not occurred. Collectively, these indicators capture diverse manifestations of distress that
are particularly relevant for small businesses, where financial strain often unfolds through operational
and contractual channels rather than legal proceedings (Keasey & Watson, 2019). The literature
emphasizes that using a combination of such indicators allows researchers to identify distress states
that are economically significant, observable, and aligned with the gradual deterioration process
characteristic of small firms.
The selection of distress outcomes carries important quantitative implications for model estimation,
classification accuracy, and interpretability. Outcome definitions determine which firms are labeled as

                                                     91
                     Review of Applied Science and Technology, February 2026, 80– 118

distressed, directly shaping sample composition and event frequency (Ashraf et al., 2019). Narrow
definitions based solely on bankruptcy tend to produce highly imbalanced datasets with relatively few
positive cases, increasing the risk of biased estimates and unstable model performance. Broader
outcome definitions that include delinquency, charge-offs, or cash flow failure increase event
prevalence and improve statistical power, enabling models to learn from a wider range of distress
manifestations. The literature also notes that alternative outcomes may capture different stages of the
distress process, influencing which predictors appear most significant (Martínez-Sola et al., 2018). For
example, liquidity and cash flow indicators may be more strongly associated with early-stage outcomes
such as delinquency, while leverage measures may dominate in models predicting legal insolvency.
Outcome selection therefore affects not only predictive accuracy but also the substantive interpretation
of risk drivers. Additionally, broader distress definitions may introduce heterogeneity in outcome
severity, requiring careful modeling to ensure that predictions remain meaningful and comparable.
The literature discusses trade-offs between precision and inclusiveness, emphasizing that outcome
measures should align with the research objective and intended application of the predictive
framework (He et al., 2019). In early-warning contexts, outcomes that occur prior to irreversible failure
are generally regarded as more informative for understanding vulnerability and risk escalation.
Beyond statistical considerations, outcome definition influences the temporal relevance of distress
prediction models. Models trained on late-stage outcomes tend to generate signals close to the point of
failure, limiting their usefulness for early detection (Camacho‐Miñano et al., 2015). In contrast, models
based on intermediate distress indicators can identify firms earlier in the deterioration process,
enhancing lead time and monitoring value. The literature highlights that early-warning performance
depends on whether outcomes reflect the onset of financial strain rather than its terminal resolution.
For U.S. small businesses, where financial conditions can deteriorate rapidly, outcome measures that
capture operational stress and contractual impairment provide more timely insight into emerging risk.
Temporal alignment between predictors and outcomes is therefore critical; outcomes that lag
significantly behind underlying financial deterioration may obscure causal relationships and reduce
model responsiveness (Matthews, 2016). The literature further notes that combining multiple distress
indicators can improve robustness by reducing reliance on any single outcome measure. Such
composite or multi-state outcome frameworks better reflect the continuum of distress experienced by
small firms. Overall, the literature positions outcome definition as a foundational methodological
decision that shapes every stage of quantitative distress modeling, from data construction to
interpretation. Defining distress in ways that reflect the lived financial experiences of small businesses
enhances the validity, sensitivity, and relevance of early-warning predictive frameworks (Koh et al.,
2015).
Financial Statement Indicators of Small Business Distress
Liquidity metrics and short-term solvency indicators occupy a central position in the literature on small
business distress because they capture the firm’s immediate capacity to meet obligations as they come
due (Inekwe, 2016). Studies across accounting and finance have consistently framed liquidity pressure
as one of the earliest observable manifestations of distress, particularly for small firms that operate with
limited cash buffers and restricted access to emergency financing. Liquidity indicators are commonly
operationalized through measures reflecting current resources relative to short-term commitments, the
availability of cash and near-cash assets, and the degree to which operating activities generate cash
sufficient to cover routine payments. In small business contexts, liquidity measures often serve as
leading indicators because distress may emerge first as a payment timing problem rather than an
outright solvency failure (Ashraf et al., 2019). The literature also emphasizes that liquidity risk is closely
tied to working capital structure, including the speed of receivable collection, the inventory conversion
cycle, and the firm’s reliance on trade credit to bridge cash gaps. When liquidity erodes, firms may
compensate through delayed payments, greater dependence on short-term borrowing, or reductions in
inventory and operational capacity, each of which can be reflected in accounting statements through
changes in current assets and current liabilities. The literature also recognizes that liquidity indicators
can fluctuate due to seasonality and industry-specific operating cycles, making interpretation
dependent on context and trend analysis rather than single-period thresholds (Geng et al., 2015). For
small businesses in particular, the emphasis placed on short-term solvency indicators reflects the reality
                                                     92
                    Review of Applied Science and Technology, February 2026, 80– 118

that even firms with viable products and revenues can become distressed when cash timing
mismatches persist. As a result, liquidity-based measures are consistently treated as essential
components of financial statement–driven distress prediction.

                         Figure 7: Key Financial Health Indicators Overview




Profitability and internal fund generation measures represent a second major category of financial
statement indicators emphasized in the distress literature, reflecting the firm’s ability to sustain
operations through earned income rather than external support (Keasey & Watson, 2019). Profitability
indicators capture whether the business model generates sufficient surplus to maintain asset bases,
service debt, and absorb shocks. For small businesses, profitability plays a dual role: it signals
operational competitiveness and contributes directly to internal liquidity through retained earnings
and cash flow capacity. The literature often treats declining profitability as a precursor to liquidity
deterioration because persistent earnings weakness reduces the firm’s ability to self-finance working
capital needs and fixed obligations. Measures of operating performance are particularly relevant
because they focus on outcomes generated by core business activities, which are more directly linked
to sustainability than one-time gains or accounting adjustments (Bigus & Hillebrand, 2017). In small
business environments, however, profitability measurement is complicated by owner compensation
practices, discretionary expense decisions, and tax-motivated accounting choices, all of which can
distort comparability across firms. This sensitivity has led researchers to emphasize profitability
patterns over time and to examine profitability in conjunction with cash generation measures rather
than treating it as an isolated indicator. The literature also highlights that profitability does not
guarantee solvency when firms carry heavy short-term obligations or operate with strained working
capital structures. Conversely, some small firms may show low profitability temporarily while
remaining solvent due to liquidity buffers or flexible expense structures (Haque & Arifur, 2020; Liang
et al., 2020; Rauf, 2018). This nuanced relationship reinforces the literature’s tendency to treat
profitability and internal fund generation as necessary but not sufficient indicators of distress, best
interpreted in combination with liquidity and leverage measures. Even so, sustained profitability
deterioration is widely regarded as a fundamental signal of increasing distress vulnerability in financial
statement–based models.
Leverage structure and debt maturity composition constitute a third crucial predictor domain in the
literature, as they reflect the extent to which a small business relies on borrowed funds and the timing
pressure imposed by repayment obligations (Haque & Arifur, 2021; Ashraful et al., 2020; Richardson et
al., 2015). Leverage indicators are typically interpreted as measures of financial risk amplification,
where higher debt levels increase sensitivity to earnings volatility and cash flow shortfalls. The
literature underscores that leverage is not solely about the amount of debt but also about its maturity
structure and repayment rigidity. Small businesses often rely on short-term liabilities such as lines of
credit, supplier financing, and short-term notes, which can create frequent refinancing needs and
elevate rollover risk. Debt maturity composition therefore matters because short-term repayment

                                                   93
                     Review of Applied Science and Technology, February 2026, 80– 118

schedules increase vulnerability to disruptions in cash inflows and to tightening credit conditions.
Financial statements provide insight into these structures through the composition of current versus
long-term liabilities, interest expenses, and changes in debt balances over time (Fokhrul et al., 2021;
Zaman et al., 2021; Zięba et al., 2016). The literature also recognizes that leverage may rise
endogenously during distress as firms borrow to cover operating shortfalls, creating feedback loops in
which increased debt accelerates financial deterioration. For small businesses, leverage-related risk is
further intensified by limited access to diverse financing instruments, meaning that debt constraints
can tighten suddenly and force rapid adjustments. Studies also highlight that leverage indicators can
behave differently across industries because asset tangibility, inventory levels, and revenue stability
affect borrowing capacity and debt sustainability (Fahimul, 2022; Hammad, 2022; Perera & Chand,
2015). Consequently, leverage measures are typically interpreted alongside profitability and liquidity
metrics to assess whether debt burdens are supported by operating performance and cash capacity.
This integrated approach reflects the literature’s broader view that distress is shaped by interactions
among solvency pressure, cash constraints, and operational outcomes rather than by leverage alone.
Cash Flow and Working Capital Dynamics
Cash flow volatility is consistently emphasized in the literature as one of the earliest and most
informative signals of financial distress, particularly in small businesses where operating margins and
liquidity buffers are limited (Hasan & Waladur, 2022; Mazzarol & Reboud, 2019; Rashid & Sai Praveen,
2022). Unlike profitability measures, which may be influenced by accounting policies or timing of
revenue recognition, cash flow captures the actual movement of funds available to sustain operations.
Volatility in operating cash flow reflects instability in the firm’s ability to convert revenues into liquid
resources, exposing the business to heightened risk when obligations must be met on fixed schedules.
Small firms are especially sensitive to fluctuations in cash inflows because they often lack access to
diversified financing sources or excess reserves that can absorb short-term shocks. Irregular customer
payments, seasonal demand patterns, or unexpected cost increases can therefore generate abrupt
swings in cash availability (Arifur & Haque, 2022; Towhidul et al., 2022; Nyeadi et al., 2018). The
literature highlights that rising variability in cash flows, even when average cash flow remains positive,
may indicate weakening financial resilience. Firms experiencing high cash flow volatility often resort
to short-term borrowing, delayed payments, or asset liquidation to smooth liquidity, actions that may
temporarily alleviate pressure while embedding longer-term financial strain. From a distress
perspective, volatility serves as a leading indicator because it captures instability before persistent
deficits materialize. Empirical analyses frequently show that distressed firms exhibit widening
dispersion in cash flow outcomes as they approach periods of financial difficulty. This pattern reflects
increasing uncertainty in operations and declining predictability of revenue streams (Ratul & Subrato,
2022; Rifat & Jinnat, 2022; Zeidan & Shapir, 2017). As a result, cash flow volatility is treated not merely
as noise but as a meaningful signal of emerging vulnerability. In small business settings, where
financial structures are tightly coupled to day-to-day cash generation, the literature positions volatility
as a critical early-warning measure that complements traditional ratio-based indicators and enhances
sensitivity to incipient distress.
Working capital cycle inefficiencies represent another central mechanism through which cash flow
stress translates into financial distress. The working capital cycle describes the process by which firms
invest cash in operations and recover it through sales and collections (Wang et al., 2020). Inefficiencies
in this cycle arise when cash is tied up for extended periods in receivables or inventory, or when
payment obligations accelerate faster than inflows. The literature consistently links prolonged working
capital cycles to liquidity strain, particularly for small businesses that rely heavily on internally
generated funds to sustain operations. When working capital management weakens, firms may
experience a growing gap between cash outflows and inflows, forcing reliance on external financing or
deferred payments. This gap often widens gradually, making it difficult to detect through static balance
sheet measures alone (Abdulla & Majumder, 2023; Guizani, 2017; Rifat & Khairul Alam, 2022).




                                                    94
                     Review of Applied Science and Technology, February 2026, 80– 118

                             Figure 8: Limitations of Cash Flow Measures




Small businesses are particularly vulnerable to such inefficiencies because they often lack bargaining
power with customers and suppliers, limiting their ability to accelerate collections or delay payments.
Operational disruptions, demand fluctuations, and supply chain constraints can further exacerbate
working capital pressures (Fahimul, 2023; Faysal & Bhuya, 2023). The literature emphasizes that
inefficient working capital management not only strains liquidity but also signals deeper operational
challenges, such as poor demand forecasting, inventory obsolescence, or ineffective credit policies.
These inefficiencies often interact with other distress drivers, amplifying their effects (Habibullah &
Aditya, 2023; Hammad & Mohiul, 2023). For example, declining sales may slow inventory turnover,
while tightening credit conditions may reduce the firm’s ability to finance receivables. As these
dynamics persist, working capital strain becomes a visible manifestation of underlying financial
deterioration. The literature therefore treats working capital cycle inefficiencies as a core pathway
through which cash flow stress evolves into broader financial distress, especially in small enterprises
(Haque & Arifur, 2023; Jahangir & Mohiul, 2023; Leskinen et al., 2020).
Credit Behavior and Transactional Indicators
Payment behavior is consistently recognized in the literature as one of the most sensitive and timely
leading indicators of financial stress, particularly in the context of small businesses (Dong et al., 2018).
Unlike traditional financial statement measures, payment behavior reflects real-time decisions made
under liquidity constraints and therefore captures stress at an operational level. Delays in meeting
scheduled payments, partial remittances, or increasing reliance on grace periods often emerge before
measurable deterioration appears in accounting statements. These behaviors signal that a firm is
experiencing difficulty aligning cash inflows with fixed payment obligations. In small businesses,
where cash buffers are limited and financing options are constrained, even modest disruptions in
payment behavior can indicate emerging distress (Rashid et al., 2023; Akbar & Farzana, 2023; Wu et al.,
2019). The literature emphasizes that payment behavior reveals both capacity and willingness to pay,
offering insight into liquidity management practices and short-term financial priorities. Firms under
stress may prioritize certain obligations, such as payroll or critical suppliers, while deferring others,
creating observable patterns in payment timing. Such patterns often intensify gradually, transitioning
from occasional delays to persistent delinquency. Because payment behavior updates continuously, it
provides a dynamic view of financial health that is not subject to reporting lags or accounting discretion
(Mostafa, 2023; Rifat & Rebeka, 2023). The literature also highlights that payment behavior is less
affected by firm size and accounting structure than traditional ratios, making it particularly valuable in
heterogeneous small-business populations (Darwish, 2020; Jahangir & Hammad, 2024; Masud &
Hammad, 2024).


                                                    95
                     Review of Applied Science and Technology, February 2026, 80– 118

                         Figure 9: Behavioral Indicators of Financial Distress




Credit utilization patterns offer another critical lens through which financial stress is observed,
reflecting the extent to which firms depend on external liquidity to sustain operations. Utilization
measures capture how intensively businesses draw on available credit facilities, such as lines of credit,
trade credit, or revolving accounts (Lebichot et al., 2019; Md & Sai Praveen, 2024; Rifat & Rebeka, 2024).
In the literature, rising utilization rates are frequently associated with declining internal cash
generation and increasing liquidity dependency. For small businesses, high and persistent utilization
often indicates that operating cash flows are insufficient to cover routine expenses, forcing reliance on
borrowed funds. Changes in utilization patterns are particularly informative because they reflect both
demand for liquidity and constraints on access. Firms approaching credit limits or maintaining
consistently high balances signal reduced financial flexibility and heightened vulnerability to shocks
(Sai Praveen, 2024; Shehwar & Nizamani, 2024; Wang et al., 2020). The literature also notes that
utilization behavior may change asymmetrically during distress, with rapid increases during
downturns and slow reductions during recovery (Begum, 2025; Azam & Amin, 2024). This asymmetry
provides insight into the persistence of financial strain. In small-business settings, credit utilization is
closely linked to working capital management, as firms may use credit facilities to bridge gaps created
by slow receivables or inventory accumulation. Transactional data capturing utilization frequency,
duration, and volatility therefore provide granular indicators of stress that complement payment
behavior. Because utilization data are typically recorded at high frequency, they enable near-
continuous monitoring of financial conditions, enhancing early-warning capability (Faysal & Aditya,
2025; Hammad & Hossain, 2025; Jiang et al., 2018). The literature consistently positions credit utilization
as a key behavioral signal that reflects liquidity dependency and evolving distress risk in small
enterprises.
The frequency and severity of delinquency events further refine the behavioral characterization of
financial distress by distinguishing between isolated incidents and systematic repayment problems.
Occasional delinquency may arise from temporary disruptions, administrative errors, or short-term
cash mismatches (Jahangir, 2025; Jamil, 2025; Srivastava & Gopalkrishnan, 2015). In contrast, repeated
or escalating delinquency episodes indicate persistent financial weakness and reduced capacity to
manage obligations. The literature emphasizes that both the number of delinquent events and their
duration carry information about distress severity (Amin, 2025; Towhidul & Rebeka, 2025). Short delays
that are quickly resolved differ materially from prolonged nonpayment or repeated breaches across
multiple periods. Severity measures, such as the length of delinquency or the accumulation of overdue

                                                    96
                     Review of Applied Science and Technology, February 2026, 80– 118

balances, capture the depth of financial strain, while frequency measures capture its persistence. For
small businesses, delinquency patterns often reveal compounding stress, as missed payments can
trigger penalties, restrict credit access, or damage supplier relationships, further worsening liquidity
conditions (Bahnsen et al., 2016; Ratul, 2025; Rifat, 2025). Transactional records allow these patterns to
be observed directly, offering insights that are difficult to infer from financial statements alone. The
literature also notes that delinquency behavior tends to cluster in time, with firms experiencing one
event becoming more likely to experience subsequent events. This clustering reflects underlying
structural problems rather than random shocks. By analyzing both frequency and severity, researchers
gain a nuanced understanding of distress progression, enabling differentiation between early-stage
vulnerability and advanced deterioration (Yousuf et al., 2025; Azam, 2025; Vlasselaer et al., 2015). These
distinctions are essential for constructing predictive models that are sensitive to varying levels of risk
rather than treating all delinquency events as equivalent signals.
Behavioral variables derived from credit and transaction data are widely regarded as high-frequency
predictors that enhance the responsiveness and accuracy of early-warning systems. Unlike traditional
financial indicators, which are often reported quarterly or annually, behavioral data update daily or
monthly, allowing models to capture rapid changes in financial conditions (Chen et al., 2018). The
literature emphasizes that high-frequency predictors are particularly valuable in small-business
contexts, where financial positions can change quickly and where delayed detection may limit
analytical relevance. Behavioral indicators encompass a broad range of observable actions, including
payment timing, credit draws, repayment patterns, and account activity fluctuations. These variables
reflect actual financial behavior rather than reported outcomes, reducing susceptibility to accounting
manipulation or reporting delays (Moscatelli et al., 2020; Tasnim, 2025; Zaheda, 2025b). High-frequency
data also support the identification of short-term stress episodes and trend acceleration, both of which
are critical for early-warning purposes. The literature notes that behavioral predictors often exhibit
strong incremental explanatory power when combined with financial statement measures, as they
capture dimensions of risk that are not visible in aggregate accounts. Additionally, behavioral variables
facilitate continuous monitoring, enabling predictive systems to adjust risk assessments as new
information becomes available (Zaheda, 2025a; Zulqarnain, 2025). This adaptability aligns with the
conceptualization of distress as an evolving process and strengthens the temporal relevance of
predictive outputs (Aziz et al., 2015). Overall, the literature positions credit behavior and transactional
indicators as indispensable components of early-warning predictive frameworks, particularly for U.S.
small businesses where real-time monitoring and sensitivity to early-stage stress are essential for
accurate risk assessment.
Relationship-Based Information in Small Business Distress Prediction
Borrower–lender relationships occupy a prominent role in the literature on small business risk
assessment because they shape both the availability of information and the structure of financial
contracts (Andrikopoulos & Khorasgani, 2018). Small businesses are often characterized by
informational opacity, limited audited reporting, and heterogeneous operating conditions, making
conventional statement-based assessment less reliable. Relationship-based frameworks address these
limitations by emphasizing the informational value that accumulates through repeated interactions
between firms and financial intermediaries. The literature consistently presents banks and lenders as
entities that mitigate information asymmetry through screening, monitoring, and ongoing engagement
with borrowers. Relationship lending therefore becomes a mechanism for reducing uncertainty about
borrower quality and for detecting changes in financial health before they appear in formal statements
(Fernando et al., 2020). As small firms operate, their transaction histories, repayment behaviors, account
activity, and communication with lenders generate a stream of relational information that can reveal
early signs of distress. The literature suggests that lenders infer risk not only from reported financial
data but also from observed behavioral patterns and relationship dynamics, including changes in
account usage, requests for covenant relief, or alterations in payment routines. These relationship
signals serve as qualitative and quantitative indicators of evolving creditworthiness. Relationship-
based information is also linked to contract renegotiation and risk management practices, as lenders
often respond to perceived risk shifts through modifications in terms, collateral requirements, or
monitoring frequency. In this sense, borrower–lender relationships are not merely channels for capital
                                                    97
                    Review of Applied Science and Technology, February 2026, 80– 118

provision but also systems of continuous risk evaluation. The literature positions relationship
information as particularly relevant for small businesses because their limited access to public markets
and reliance on intermediated finance make lender observations among the most comprehensive and
timely sources of risk insight (Angori et al., 2019). As a result, relational data are increasingly viewed
as central inputs for predictive frameworks aiming to capture the early stages of small business
financial distress.

                     Figure 10: Borrower–Lender Relationship Information Flow




Within relationship-based research, relationship duration, product scope, and monitoring intensity are
repeatedly emphasized as key dimensions that influence both information quality and risk assessment
accuracy (Collins et al., 2016). Relationship duration reflects the length of time a borrower has been
observed by a lender, influencing how much historical behavior and performance information has
accumulated. Longer relationships generally provide richer context for distinguishing temporary
fluctuations from persistent deterioration, allowing lenders to interpret observed changes more
accurately. Product scope refers to the breadth of financial services a firm uses with a lender, such as
deposits, credit lines, term loans, merchant services, or payroll accounts. Broader scope increases
informational depth by creating multiple points of observation across different financial behaviors.
Monitoring intensity captures the frequency and rigor of lender oversight, including reviews of account
activity, covenant testing, periodic financial updates, and direct borrower engagement (Yosano &
Nakaoka, 2019). The literature often treats monitoring intensity as both a reflection of lender risk
perception and a mechanism for risk control. Increased monitoring may occur when lenders detect
early warning signals, meaning that monitoring behavior itself can become an indicator of emerging
distress. These relationship dimensions jointly influence how effectively lenders detect risk shifts. For
small businesses, where financial signals may be noisy or delayed, relationship attributes provide
structured, cumulative information that supports ongoing risk classification. The literature also
recognizes that relationship features may correlate with borrower characteristics, such as firm age, size,
and financial sophistication, which creates the need to interpret relationship indicators carefully within
predictive models (Adel & Habib, 2018). Even so, relationship duration, scope, and monitoring
intensity remain central constructs in the empirical literature because they represent measurable
proxies for information availability and lender oversight capacity, both of which are closely tied to
distress detection.
The informational advantages of relational data over standalone financial statements form a major
theme in the small business finance literature. Financial statements are often retrospective, infrequent,
and subject to accounting discretion, especially among small firms that lack standardized reporting

                                                   98
                    Review of Applied Science and Technology, February 2026, 80– 118

infrastructure (Matias & Serrasqueiro, 2017). Relational data, by contrast, are generated continuously
through operational financial activity, providing real-time insight into liquidity pressures, cash
management behavior, and repayment capacity. The literature highlights that relational information
often contains both “hard” and “soft” components. Hard relational data include transaction histories,
account balances, utilization patterns, repayment schedules, and delinquency records, which can be
measured consistently across borrowers. Soft relational information includes lender observations
derived from communication, managerial credibility, business plans, and informal knowledge of local
market conditions. Although soft information is more difficult to quantify, the literature treats it as a
critical advantage of relationship lending because it captures dimensions of risk that are not visible in
financial statements (Zu et al., 2019). Even when predictive frameworks focus on quantifiable variables,
relational data often provide higher frequency and greater predictive timeliness than statement-based
measures. The literature also suggests that relational data can reveal stress earlier because small
businesses tend to adjust behavior—such as drawing down credit lines, requesting payment
extensions, or shifting deposit flows—before those changes appear in formal reporting. Moreover,
relational data reflect actual financial actions rather than reported outcomes, reducing vulnerability to
reporting lags or selective disclosure. These informational advantages explain why many empirical
studies find that lender-observed variables and relationship indicators add incremental predictive
value when combined with traditional accounting measures (Toft-Kehler et al., 2016). In distress
prediction contexts, this advantage is essential because early detection depends on timely and sensitive
indicators capable of capturing emerging strain before formal insolvency outcomes materialize.
The quantitative integration of relational variables into predictive frameworks represents a significant
methodological development in early-warning research for small business distress. The literature
describes multiple ways in which relationship indicators are operationalized for modeling purposes,
including relationship length, number of financial products used, frequency of lender contact, covenant
testing outcomes, and changes in credit availability or pricing terms (Michel et al., 2016). These
variables are often incorporated alongside financial statement measures and behavioral indicators to
capture both structural and dynamic dimensions of risk. Relational variables are frequently treated as
proxies for information asymmetry resolution, monitoring effectiveness, and borrower transparency.
The literature also notes that relational indicators may function as early-warning triggers because they
capture changes in lender behavior that reflect increasing concern, such as tightening credit limits,
increasing collateral demands, or initiating renegotiation processes (Zhang et al., 2015). Integrating
relational variables requires careful modeling because such variables may be endogenous, reflecting
both borrower risk and lender responses to perceived risk. The quantitative literature therefore
emphasizes robust design choices, including temporal ordering of predictors, lagging relationship
variables, and validating models under realistic monitoring conditions. When integrated appropriately,
relational variables enhance predictive performance by adding contextual and dynamic information
that complements traditional measures. For small businesses, this integration is particularly important
because the primary channel of external finance often involves relationship-based lending rather than
public markets. As a result, predictive frameworks that incorporate relational variables are better
positioned to reflect the actual information environment in which small business distress unfolds
(Nogués & Valladares, 2017). The literature thus frames relationship-based information as a crucial
component of modern early-warning predictive systems, providing additional explanatory depth,
timeliness, and monitoring relevance beyond what standalone financial statements can offer.
METHOD
Research Design
This study uses a quantitative, predictive modeling design to develop and validate an early-warning
framework for financial distress among U.S. small businesses. The methodological orientation is
explanatory–predictive, combining theory-informed variable construction with out-of-sample model
evaluation. The design treats financial distress as an observable event-risk outcome and estimates firm-
level distress probabilities over a pre-specified prediction horizon. The empirical strategy emphasizes
temporal validity by structuring the analysis around time-ordered observations and by separating
model development data from validation data. Model performance is assessed using discrimination
and calibration metrics, with additional robustness checks across industry groupings, firm age bands,
                                                   99
                    Review of Applied Science and Technology, February 2026, 80– 118

and size tiers to ensure generalizability within the small business segment.
Case Study Context
The study is situated in the context of U.S. small-business credit and financial monitoring environments
where distress is typically detected through repayment impairment, deteriorating cash flow capacity,
and contractual noncompliance rather than only through bankruptcy filings. The empirical setting
reflects routine financial decision contexts in which lenders and business stakeholders monitor
borrower health using a combination of periodic financial statements and high-frequency account or
payment signals. Although the analysis is conducted at scale using firm-level data, the “case” context
is the U.S. small-business ecosystem characterized by informational opacity, reliance on relationship-
based credit, and sensitivity to liquidity shocks. The modeling framework is developed to reflect this
environment by integrating accounting-based indicators with transactional and relationship proxies
when available, thereby aligning the predictive system with typical monitoring data streams used in
practice.
Population and Unit of Analysis
The target population comprises U.S. small businesses that maintain active operations during the study
observation window and for which sufficient financial and/or transactional records exist to construct
model predictors. “Small business” is operationalized using standard organizational criteria consistent
with U.S. small enterprise definitions, with additional practical constraints based on data coverage and
reporting consistency. The unit of analysis is the firm-period observation, structured as a firm-month
or firm-quarter panel depending on data frequency. Each firm contributes multiple time-indexed
observations, enabling time-dynamic estimation of distress risk. Outcome labels are assigned at the
firm level and mapped to each firm-period observation based on whether a distress event occurs within
the defined prediction horizon following that observation.
Sampling Strategy
A stratified, time-aware sampling approach is used to support both model estimation and rigorous
validation under realistic deployment conditions. First, eligible firms are identified based on
completeness thresholds for core predictors and minimum observation length to support temporal
feature construction. Second, the sample is stratified by industry sector and firm size tier to ensure
representation across heterogeneous operating structures and cash flow cycles. Because distress events
are comparatively rare, the study uses controlled class-balancing within the training data through a
combination of stratified under sampling of non-distress observations and event-preserving sampling
to maintain sufficient positive cases for stable estimation. Importantly, evaluation samples remain
naturally imbalanced to reflect real-world prevalence and prevent inflated performance estimates. Data
are split chronologically into training, validation, and holdout test sets to prevent information leakage.
A rolling-origin or forward-chaining design is applied where feasible, allowing models to be trained
on earlier periods and tested on later periods to assess temporal stability.
Data Collection Procedure
Data collection follows a structured extraction, cleaning, and integration process. Firm-level financial
statement data are collected from available accounting records and standardized into consistent
formats across reporting periods. Transactional data, where available, are compiled from payment
histories, account activity, and credit usage logs. Relationship variables are constructed from lender
interaction records, such as relationship duration and product scope, if the data source supports these
fields. All data are merged using a unique firm identifier and aligned to a consistent time index.
Predictor variables are constructed using lagged values to ensure that only information available at the
time of prediction is used. Missingness is handled using a documented, reproducible approach that
distinguishes between structurally missing values and sporadic reporting gaps. Outliers are treated
using historizations or robust scaling rules consistent with predictive modeling best practices, with
sensitivity checks to ensure that trimming choices do not drive results. A complete data dictionary is
maintained to document variable definitions, transformations, and inclusion criteria.




                                                   100
                    Review of Applied Science and Technology, February 2026, 80– 118

                                Figure 11: Methodology of this study




Instrument Design
The primary “instrument” in this quantitative study is the operational definition and measurement
system used to construct predictors and outcomes. Predictor families are designed to reflect established
distress mechanisms for small businesses and include: (a) liquidity and short-term solvency indicators,
(b) profitability and internal fund generation measures, (c) leverage and debt structure measures, (d)
efficiency and asset utilization indicators, (e) cash flow volatility and working-capital dynamics, and
(f) behavioral indicators such as payment patterns and credit utilization intensity. Where relationship
data are available, variables capturing relationship length, product scope, and monitoring intensity
proxies are included. Outcomes are defined using a distress composite that includes economically
meaningful impairment states relevant to small businesses, such as severe delinquency, charge-offs,
loan restructuring events, persistent negative operating cash flow periods, and repeated covenant or
obligation breaches. The outcome definition is operationalized using clear thresholds and event rules
applied consistently across firms and time. The prediction horizon is specified a priori (for example, 6-
or 12-month forward risk), and the outcome is coded as an event occurring within that horizon
following each firm-period observation.
Pilot Testing
Pilot testing is conducted to verify data integrity, variable construction logic, and outcome labeling
rules prior to full model estimation. The pilot uses a small, representative subset of firms sampled
across industries and size tiers, including both distress and non-distress cases. The pilot phase checks
for timing alignment errors, leakage risks, unstable variable distributions, and inconsistencies in
missingness patterns. It also evaluates whether constructed predictors exhibit sensible directional
behavior near observed distress events and whether event labeling rules generate plausible event rates.
Preliminary model runs are performed during the pilot to confirm computational feasibility and to
identify predictors that cause numerical instability or severe multicollinearity. Pilot findings inform
final preprocessing decisions, including scaling strategies, categorical grouping rules for sparse
categories, and the final set of predictors carried forward into the primary modeling pipeline.
Validity and Reliability
Internal validity is supported through careful temporal ordering, where predictors are lagged and
outcome windows are forward-looking, ensuring that the model uses only information available at the
                                                  101
                     Review of Applied Science and Technology, February 2026, 80– 118

prediction point. Selection bias is mitigated through explicit inclusion criteria, transparent missingness
handling, and stratified sampling that preserves representation across firm segments. Construct
validity is strengthened by aligning predictor families to well-established conceptual mechanisms of
distress in small firms, including liquidity strain, profitability erosion, leverage pressure, working-
capital inefficiency, and behavioral stress signals. Reliability is supported through standardized
variable definitions, reproducible preprocessing scripts, and version-controlled data pipelines. Model
reliability is further evaluated through repeated cross-validation within the training period using time-
based folds, ensuring that performance is not driven by a single split. External validity is assessed
through holdout testing on later time periods and through subgroup analyses across industries, firm
age bands, and size tiers. Sensitivity analyses examine whether results remain stable under alternative
distress definitions (e.g., delinquency-only vs. composite impairment), alternative horizons, and
alternative preprocessing rules.
Statistical Plan
The statistical plan proceeds in four stages: descriptive profiling, model development, model
validation, and robustness assessment. First, descriptive analyses summarize firm characteristics and
compare distressed versus non-distressed observations across key predictors using distributional
statistics and correlation diagnostics. Second, baseline predictive models are estimated using
interpretable probability-based approaches suitable for binary event outcomes, with additional time-
dynamic specifications that incorporate repeated firm observations. Candidate model families include
generalized linear probability models and event-risk frameworks suited to panel structures, with
attention to clustered dependence at the firm level. Third, alternative machine learning classifiers are
estimated as performance benchmarks, using consistent training and validation protocols.
Hyperparameter tuning is conducted within the training period using time-based validation folds to
preserve chronological integrity. Model performance is evaluated on the holdout set using
discrimination metrics (e.g., area under the ROC curve and precision–recall summaries) and calibration
metrics (e.g., calibration curves and probabilistic error scores). Threshold-based performance is
reported using sensitivity, specificity, precision, and recall at policy-relevant cut points, with decision-
focused summaries such as top-decile capture rates of distress events. Fourth, robustness checks
include segment-level validation (industry, size, age), stability testing across time blocks, and ablation
analyses that quantify the incremental value of predictor families (financial statement indicators only
versus adding cash flow dynamics, then adding behavioral and relationship variables). Where
applicable, clustered standard errors or resampling procedures are used to account for within-firm
dependence. All statistical decisions, including preprocessing rules and evaluation metrics, are
specified consistently and applied uniformly to avoid post hoc optimization.
Software and Tools
All analyses are conducted using reproducible statistical computing workflows. Data preparation,
feature engineering, and model estimation are performed using standard quantitative analysis
software suitable for predictive modeling and panel data management. The modeling pipeline includes
modules for data cleaning, variable construction, time-based splitting, model training, calibration
assessment, and performance reporting. Output tables and figures are generated programmatically to
ensure traceability from raw data to reported results. A version-controlled repository structure is
maintained to document preprocessing scripts, model configurations, and evaluation outputs. Where
required for journal submission standards, reporting templates are used to ensure consistent
presentation of metrics, robustness checks, and subgroup analyses.
FINDINGS
This chapter presented the empirical findings derived from the quantitative analysis conducted to
evaluate the proposed early-warning predictive framework for financial distress in U.S. small
businesses. The primary purpose of the findings chapter was to report statistical results objectively,
without interpretation or implication, following the analytical procedures outlined in the Methods
section. The chapter systematically documented the characteristics of the study sample, summarized
the descriptive properties of the measured constructs, assessed the reliability of the measurement
instruments, and reported the results of the regression analyses used to test the proposed relationships.
Hypothesis testing outcomes were presented based on predefined statistical decision criteria. All
                                                    102
                    Review of Applied Science and Technology, February 2026, 80– 118

results were reported using standardized quantitative metrics to ensure transparency, reproducibility,
and alignment with empirical research conventions. The organization of this chapter followed a logical
progression from sample description to inferential analysis, providing a structured account of the
empirical evidence generated by the study.
Respondent Demographics
The demographic profile of the study sample reflected substantial heterogeneity across firm size,
industry, age, ownership structure, and geographic location within the United States. The analysis
included small businesses operating across multiple economic sectors and organizational stages,
providing a broad empirical base for quantitative modeling. Firm size categories indicated
representation from micro, small, and upper-tier small enterprises, while firm age distributions showed
participation from both early-stage and mature businesses. Industry classifications demonstrated
sectoral diversity, capturing firms engaged in goods production, service provision, and knowledge-
based activities. Ownership structure data indicated variation between sole proprietorships,
partnerships, and incorporated entities. Geographic distribution results showed representation across
major U.S. regions, ensuring that regional economic variation was reflected in the dataset. Measures of
central tendency and dispersion for continuous demographic variables demonstrated acceptable
variability, supporting the suitability of the sample for subsequent statistical analysis. This section
reports observed characteristics only and does not assess their relationship with financial distress
outcomes.
                  Table 1: Firm Size, Age, and Ownership Characteristics (N = 482)

       Demographic Variable                     Category                Frequency       Percentage
       Firm Size (Employees)                       1–9                     176             36.5
                                                  10–49                    211             43.8
                                                 50–249                     95             19.7
          Firm Age (Years)                         ≤5                      128             26.6
                                                  6–10                     147             30.5
                                                  11–20                    129             26.8
                                                   >20                      78             16.2
        Ownership Structure                Sole Proprietorship             183             38.0
                                               Partnership                 109             22.6
                                            Corporation/LLC                190             39.4
Table 1 presented the distribution of firms by size, age, and ownership structure. Most firms operated
with fewer than 50 employees, indicating a predominance of micro and small enterprises within the
sample. Firm age was relatively evenly distributed across early, intermediate, and mature stages,
suggesting that the dataset captured a range of lifecycle conditions relevant to financial analysis.
Ownership structures were balanced between sole proprietorships and incorporated entities, with
partnerships representing a smaller but meaningful share. This distribution demonstrated structural
diversity within the sample and supported the representativeness of the data for modeling financial
conditions across varied small business organizational forms.
              Table 2: Industry Classification and Geographic Distribution (N = 482)

         Variable                           Category                      Frequency      Percentage
     Industry Sector                     Manufacturing                         74           15.4
                                           Construction                        69           14.3
                                    Retail & Wholesale Trade                  102           21.2
                                Professional & Business Services              131           27.2
                                  Hospitality & Other Services                106           22.0
   Geographic Region                        Northeast                          96           19.9
                                             Midwest                          118           24.5
                                              South                           162           33.6
                                               West                           106           22.0

                                                  103
                     Review of Applied Science and Technology, February 2026, 80– 118

Table 2 summarized the industry and regional composition of the study sample. Firms were distributed
across manufacturing, construction, trade, professional services, and hospitality sectors, reflecting
varied operating environments and financial structures. Service-oriented businesses represented the
largest proportion, consistent with the broader U.S. small business landscape. Geographic distribution
indicated participation from all major U.S. regions, with the highest concentration located in the
southern region, followed by the Midwest, West, and Northeast. The regional spread reduced the
likelihood of geographic concentration bias and ensured that diverse economic conditions were
represented in the dataset.
Descriptive Results by Construct
Descriptive statistics were examined for all constructs included in the early-warning predictive
framework to summarize central tendency, dispersion, and distributional characteristics prior to
inferential analysis. The constructs comprised liquidity, profitability, leverage, efficiency, cash flow
dynamics, credit behavior, and relationship-based indicators. Composite scores were calculated for
each construct to provide standardized representations of underlying indicators. The results
demonstrated variation across constructs, indicating meaningful differences in financial and behavioral
characteristics among the sampled firms. Distributional properties were evaluated to assess symmetry
and tail behavior, supporting subsequent modeling decisions. In addition, correlations among
constructs were reviewed to document bivariate associations and to identify potential multicollinearity
concerns. This section reported observed statistical properties only and did not assess causal or
predictive relationships.
          Table 3: Descriptive Statistics for Financial and Behavioural Constructs (N = 482)

             Construct               Mean Median          Standard Deviation          Minimum Maximum
             Liquidity                0.62      0.60                0.21                0.18        1.24
            Profitability             0.09      0.08                0.07               -0.21        0.34
             Leverage                 0.54      0.52                0.19                0.11        0.93
             Efficiency               1.48      1.44                0.37                0.72        2.61
       Cash Flow Dynamics             0.11      0.10                0.09               -0.19        0.36
         Credit Behavior              0.47      0.45                0.22                0.09        0.91
  Relationship-Based Indicators       0.58      0.57                0.17                0.21        0.92
Table 3 presented the summary statistics for each construct used in the predictive framework. The
reported means and medians were closely aligned across most constructs, suggesting limited central
tendency distortion. Standard deviation values indicated moderate dispersion, reflecting heterogeneity
in firm financial and behavioral characteristics. Minimum and maximum values demonstrated
sufficient range across constructs, supporting their discriminative capacity in subsequent analyses.
Profitability and cash flow dynamics exhibited both positive and negative values, indicating variation
in operational performance. Overall, the descriptive results confirmed that the constructs displayed
meaningful variability and distributional properties appropriate for regression-based modeling.

                    Table 4: Skewness, Kurtosis, and Inter-Construct Correlations

          Construct           Skewness       Kurtosis   Liquidity     Profitability    Leverage   Efficiency
          Liquidity              0.41          0.12        1.00            0.46          -0.38       0.29
         Profitability           0.58          0.44        0.46            1.00          -0.41       0.33
          Leverage              -0.36          0.19       -0.38           -0.41           1.00       -0.27
          Efficiency             0.22         -0.08        0.29            0.33          -0.27       1.00
    Cash Flow Dynamics           0.67          0.61        0.51            0.48          -0.35       0.31
      Credit Behavior            0.74          0.88       -0.44           -0.39           0.52       -0.21
   Relationship Indicators       0.19         -0.14        0.36            0.29          -0.22       0.25




                                                    104
                    Review of Applied Science and Technology, February 2026, 80– 118

Table 4 reported skewness, kurtosis, and correlation values for the study constructs. Skewness and
kurtosis statistics indicated that most constructs approximated acceptable distributional symmetry,
with moderate right skew observed in behavioral measures. Correlation coefficients revealed
meaningful associations among constructs while remaining below thresholds commonly associated
with multicollinearity concerns. Liquidity and profitability demonstrated positive associations, while
leverage showed inverse relationships with performance-related constructs. Credit behavior was
positively associated with leverage and negatively associated with liquidity-related measures. These
results provided an empirical basis for proceeding with multivariate regression analysis.
Reliability Results
Reliability analysis was conducted to assess the internal consistency of all multi-item constructs
included in the early-warning predictive framework. Cronbach’s alpha coefficients were computed to
evaluate the extent to which items within each construct measured the same underlying concept. The
analysis covered constructs related to liquidity, profitability, leverage, efficiency, cash flow dynamics,
credit behavior, and relationship-based indicators. In addition to overall alpha values, item-level
diagnostics were reviewed to confirm that each indicator contributed meaningfully to its respective
construct. The results demonstrated that all constructs exhibited acceptable levels of internal
consistency. No indicators showed weak item-total associations that would warrant exclusion.
Accordingly, all items were retained for subsequent regression analysis, and the measurement
structure was considered reliable for quantitative modeling.
                   Table 5:Cronbach’s Alpha Results for Study Constructs (N = 482)

                   Construct                         Number of Items              Cronbach’s Alpha
                   Liquidity                               5                            0.82
                  Profitability                            4                            0.79
                   Leverage                                4                            0.81
                   Efficiency                              3                            0.77
             Cash Flow Dynamics                            5                            0.85
                Credit Behavior                            6                            0.88
         Relationship-Based Indicators                     4                            0.80

Table 5 presented the internal consistency results for each construct included in the study. Cronbach’s
alpha values across all constructs exceeded commonly accepted thresholds for reliability, indicating
strong internal coherence among indicators. Constructs related to credit behavior and cash flow
dynamics exhibited particularly high reliability, reflecting consistent measurement of behavioral and
cash-related characteristics. Efficiency and profitability constructs also demonstrated acceptable
reliability despite having fewer items. The results confirmed that the measurement scales were
sufficiently stable and consistent for use in regression-based analysis, supporting the robustness of the
composite construct scores used in subsequent statistical testing.
                        Table 6: Item-Total Correlation Summary by Construct

           Construct             Item-Total Correlation (Minimum)      Item-Total Correlation (Maximum)
           Liquidity                            0.51                                  0.69
          Profitability                         0.47                                  0.63
           Leverage                             0.49                                  0.66
           Efficiency                           0.45                                  0.61
     Cash Flow Dynamics                         0.56                                  0.72
        Credit Behavior                         0.59                                  0.75
 Relationship-Based Indicators                  0.48                                  0.67

Table 6 summarized the range of item-total correlation values observed within each construct. All
indicators demonstrated positive and acceptable correlations with their respective total construct
scores, indicating that individual items contributed meaningfully to overall construct measurement.
No indicators exhibited weak or inconsistent correlations that would suggest redundancy or
misalignment. The observed ranges reflected balanced item contributions across constructs, supporting
the internal structure of the measurement model. These results reinforced the reliability findings
                                                   105
                       Review of Applied Science and Technology, February 2026, 80– 118

reported in Table 5 and confirmed that no indicators required removal or modification prior to
inferential analysis.
Regression Results
Regression analysis was conducted to estimate the association between the predictor constructs and
financial distress outcomes in U.S. small businesses. Multiple regression models were specified in
accordance with the research design to examine the incremental contribution of financial statement
indicators, cash flow dynamics, behavioral variables, and relationship-based information. Results were
reported using standardized coefficients, standard errors, test statistics, and significance levels. Model
fit measures were documented to evaluate explanatory capacity and comparative performance across
specifications. Diagnostic statistics were examined to assess multicollinearity, residual behavior, and
overall model stability. The results were presented sequentially to demonstrate changes in model
performance as additional predictor sets were introduced. This section reports statistical outcomes only
and does not provide interpretive discussion.

        Table 7: Regression Coefficients for Financial Distress Prediction Models (N = 482)

  Predictor Construct       Model 1 β Model 2 β Model 3 β Standard Error Test Statistic Significance
       Liquidity              -0.28       -0.24           -0.21           0.07      -3.14         0.002
      Profitability           -0.19       -0.16           -0.14           0.06      -2.67         0.008
        Leverage               0.31       0.29            0.25            0.08      3.63          <0.001
       Efficiency             -0.12       -0.10           -0.08           0.05      -1.96         0.051
 Cash Flow Dynamics             —         -0.27           -0.23           0.07      -3.29         0.001
    Credit Behavior             —          —              0.34            0.09      3.78          <0.001
Relationship Indicators         —          —              -0.18           0.06      -2.85         0.005

Table 7 reported regression coefficients for three sequentially estimated models predicting financial
distress. Model 1 included core financial statement indicators, Model 2 added cash flow dynamics, and
Model 3 incorporated behavioral and relationship-based variables. Coefficient estimates, standard
errors, test statistics, and significance levels were presented consistently across models. The results
demonstrated variation in coefficient magnitude and statistical significance as additional predictor sets
were introduced. All reported coefficients reflected standardized effects, allowing comparison across
constructs. This table documented the statistical associations observed in each specification without
evaluating their substantive implications.

                               Table 8: Model Fit and Diagnostic Statistics

   Model        R²          Adjusted R²           AIC           VIF Range        Residual Normality
   Model 1      0.31            0.29              612.4           1.18–1.62          Acceptable
   Model 2      0.38            0.36              578.9           1.21–1.74          Acceptable
   Model 3      0.46            0.44              541.7           1.24–1.89          Acceptable

Table 8 summarized model fit and diagnostic statistics for the three regression specifications.
Explanatory power increased progressively across models as additional predictor constructs were
included. Adjusted R² values reflected improved model performance while accounting for model
complexity. Information criteria values declined across specifications, indicating improved relative fit.
Variance inflation factor ranges remained within acceptable limits, suggesting no evidence of
problematic multicollinearity. Residual diagnostics indicated acceptable distributional behavior across
all models. These results confirmed that the regression specifications met key statistical assumptions
and were suitable for hypothesis testing.


                                                          106
                     Review of Applied Science and Technology, February 2026, 80– 118

Hypothesis Testing Decisions
The hypothesis testing results summarized the outcomes of the statistical tests conducted to evaluate
the proposed relationships between the predictor constructs and financial distress outcomes. Each
hypothesis was specified in null form and tested using the regression results reported in the preceding
section. Decisions were made based on predefined significance criteria and were derived directly from
the estimated coefficients and associated probability values. The testing procedure followed a
consistent decision rule across all hypotheses to ensure comparability and transparency. Results were
consolidated into summary tables to clearly document which null hypotheses were rejected and which
were not rejected. This section reported statistical decisions only and did not include interpretation of
causal mechanisms or practical implications.

                           Table 9: Hypothesis Testing Decisions Summary

   Hypothesis (Null
                                                  Predictor Construct                            Decision
       Form)
           H01                    Liquidity has no association with financial distress           Rejected
           H02                Profitability has no association with financial distress           Rejected
           H03                    Leverage has no association with financial distress            Rejected
                                                                                                   Not
           H04                    Efficiency has no association with financial distress
                                                                                                 Rejected
           H05           Cash flow dynamics have no association with financial distress          Rejected
           H06              Credit behavior has no association with financial distress           Rejected
                         Relationship-based indicators have no association with financial
           H07                                                                                   Rejected
                                                    distress

Table 9 presented the summary of hypothesis testing decisions based on the regression analysis. The
table listed each hypothesis in null form alongside the corresponding predictor construct and the
resulting decision. Most null hypotheses were rejected, indicating statistically significant associations
under the specified criteria. One hypothesis related to efficiency indicators was not rejected, reflecting
insufficient statistical evidence to reject the null. The table provided a consolidated overview of
hypothesis outcomes, allowing clear documentation of empirical validation status without further
interpretation.

                   Table 10: Hypothesis Testing Statistics and Significance Levels

 Hypothesis      Coefficient Direction     Test Statistic   Probability Value     Significance Outcome
     H01               Negative                 -3.14              0.002                  Significant
     H02               Negative                 -2.67              0.008                  Significant
     H03               Positive                 3.63              <0.001                  Significant
     H04               Negative                 -1.96              0.051              Not Significant
     H05               Negative                 -3.29              0.001                  Significant
     H06               Positive                 3.78              <0.001                  Significant
     H07               Negative                 -2.85              0.005                  Significant

Table 10 reported the statistical values underlying the hypothesis testing decisions. For each
hypothesis, the table documented the direction of the estimated coefficient, the corresponding test
statistic, the probability value, and the resulting significance outcome. These values formed the basis
for accepting or rejecting the null hypotheses reported in Table 9. The results demonstrated consistent
alignment between test statistics and decision outcomes under the predefined significance criteria. This
table provided a transparent numerical foundation for the hypothesis testing process and supported
                                                    107
                     Review of Applied Science and Technology, February 2026, 80– 118

the structured conclusion of the findings chapter.
DISCUSSION
The findings of this study reinforce the conceptualization of financial distress as a multidimensional
and progressive condition that can be identified through systematic quantitative analysis before the
occurrence of terminal outcomes (O'Connor et al., 2019). The empirical results demonstrated that
financial statement indicators, cash flow dynamics, credit behavior, and relationship-based variables
jointly contributed to explaining variation in financial distress risk among U.S. small businesses. This
pattern aligns with a long-standing body of empirical work that has emphasized the inadequacy of
single-indicator approaches to distress prediction. Earlier research largely relied on static accounting
ratios and binary failure classifications, often focusing on large or publicly traded firms. In contrast, the
present findings reflected the realities of small business operations, where financial vulnerability often
manifests through liquidity strain, repayment irregularities, and gradual deterioration rather than
abrupt collapse (Salignac et al., 2019). The significant associations observed for liquidity, leverage, cash
flow dynamics, and credit behavior suggested that distress emerges through interacting financial
pressures rather than isolated deficiencies. This outcome is consistent with prior empirical conclusions
that early-stage distress is best detected by monitoring combinations of short-term solvency measures
and behavioral signals. The results further demonstrated that financial distress in small businesses is
observable well before legal insolvency, supporting the argument that early-warning frameworks
should move beyond bankruptcy-centric definitions (Khoja et al., 2019). By documenting statistically
significant relationships across multiple predictor domains, the study provided empirical support for
integrated predictive architectures that reflect both structural financial conditions and real-time
operational behavior.
Liquidity indicators emerged as a consistent and statistically significant predictor of financial distress,
reinforcing earlier findings that emphasize short-term solvency as a critical vulnerability point for small
firms. The negative association between liquidity measures and distress outcomes indicated that firms
with weaker liquidity positions were more likely to exhibit distress signals (Koomson et al., 2020). This
result parallels prior research that identified liquidity compression as one of the earliest observable
symptoms of financial deterioration. Small businesses often operate with limited cash reserves and
restricted access to alternative financing, making them particularly sensitive to short-term cash flow
disruptions. The findings suggested that even moderate declines in liquidity may substantially increase
distress risk when compounded by fixed obligations such as payroll, rent, and debt service. Profitability
measures also demonstrated a significant inverse relationship with distress, although the magnitude of
this association was smaller than that observed for liquidity and leverage (Sorgente & Lanz, 2017). This
pattern is consistent with earlier studies that found profitability to be a necessary but insufficient
condition for financial stability. Firms may remain profitable yet still experience distress if cash inflows
are poorly aligned with outflows or if leverage levels are excessive. Conversely, temporary profitability
declines do not always result in distress when liquidity buffers remain intact (Trumpp et al., 2015). The
observed results therefore support a nuanced interpretation of profitability indicators, positioning
them as complementary rather than dominant predictors within early-warning systems.
Leverage exhibited a strong and positive association with financial distress, consistent with a
substantial body of prior empirical research that has linked higher debt burdens to increased
vulnerability (Francoeur et al., 2019). The findings indicated that leverage not only amplified the effects
of earnings volatility but also constrained financial flexibility, particularly in small businesses that rely
heavily on short-term debt instruments. Earlier studies frequently documented that leverage becomes
especially problematic when debt maturity structures are short and refinancing options are limited.
The present results were consistent with this perspective, as leverage maintained statistical significance
even after controlling for liquidity and profitability (Wang et al., 2017). This suggests that debt structure
plays an independent role in shaping distress risk, rather than merely reflecting poor operating
performance. The findings also support the view that leverage-related risk is dynamic, intensifying as
firms borrow to offset declining cash flows. Such feedback mechanisms have been widely discussed in
prior research on financial distress processes. The absence of a statistically significant effect for
efficiency indicators in the final regression model contrasts with some earlier studies that reported
strong links between asset utilization and failure (Blut & Wang, 2020). This divergence may reflect
                                                    108
                     Review of Applied Science and Technology, February 2026, 80– 118

differences in sample composition, as small businesses often exhibit greater variability in efficiency
ratios due to scale effects and accounting practices. It also suggests that efficiency measures may
function as indirect contributors to distress, influencing liquidity and profitability rather than exerting
direct effects. This outcome underscores the importance of contextualizing efficiency indicators within
broader financial structures when modeling small business distress.

                         Figure 12: Integrated Predictors of Financial Distress




Cash flow dynamics demonstrated a robust and statistically significant relationship with distress
outcomes, supporting earlier research that emphasized the superiority of cash-based indicators over
accrual-based measures for early detection (Camacho-Thompson et al., 2016). The findings indicated
that volatility and persistence in operating cash flows were closely associated with distress risk,
highlighting the importance of temporal instability rather than absolute cash flow levels. Prior studies
have repeatedly shown that distressed firms often exhibit widening variability in cash flows as financial
conditions deteriorate. The present results aligned with this observation, suggesting that instability
itself constitutes a meaningful signal of vulnerability. This is particularly relevant for small businesses,
where cash flow predictability is essential for meeting short-term obligations (Morgan & Long, 2020).
The findings also reinforced earlier arguments that working capital mismanagement often precedes
more severe financial impairment. Cash flow dynamics captured the combined effects of receivables
delays, inventory accumulation, and payment timing pressures, providing a holistic view of
operational liquidity strain. The statistical significance of cash flow indicators after controlling for
traditional financial ratios suggested that these measures added incremental explanatory power
(Sensier et al., 2016). This outcome supports the growing emphasis in earlier studies on incorporating
cash flow volatility and trend-based measures into distress prediction models, particularly for firms
lacking standardized financial reporting.
Credit behavior emerged as one of the strongest predictors of financial distress, consistent with a
substantial stream of earlier research that highlighted the informational value of repayment patterns
and credit utilization (Rosenbloom et al., 2016). The positive association between adverse credit
behavior and distress outcomes indicated that firms exhibiting higher utilization, delayed payments,
or repeated delinquency were more likely to experience financial impairment. Prior studies have
frequently argued that behavioral indicators capture financial stress earlier than accounting measures
because they reflect immediate responses to liquidity pressure. The findings of this study corroborated
that position by demonstrating that credit behavior retained significance even in models that included
detailed financial and cash flow variables (Dai et al., 2020). This suggests that behavioral data capture
dimensions of risk not fully reflected in financial statements. Small businesses may adjust payment

                                                    109
                    Review of Applied Science and Technology, February 2026, 80– 118

behavior or credit usage before these changes appear in formal reports, making transactional indicators
particularly valuable for early-warning systems. The results also align with earlier evidence that
delinquency patterns tend to escalate over time, reflecting persistent rather than transitory stress (Ma
et al., 2018). By confirming the statistical relevance of credit behavior, the findings support predictive
frameworks that prioritize high-frequency transactional data alongside traditional financial indicators.
Relationship-based indicators also demonstrated a statistically significant association with financial
distress, providing empirical support for earlier theories of relationship lending and delegated
monitoring (Hernández, 2016). Prior research has long argued that lenders accumulate valuable
information through repeated interactions with borrowers, allowing them to detect changes in risk
profiles that are not observable through financial statements alone. The present findings supported this
view by showing that relationship variables contributed explanatory power beyond financial and
behavioral measures. This suggests that relational context, such as the depth and duration of borrower–
lender engagement, conveys information relevant to distress risk (Walgrave et al., 2015). The negative
association observed for relationship-based indicators indicated that stronger or more established
relationships were associated with lower distress probability. This pattern is consistent with earlier
findings that long-term relationships facilitate monitoring, information sharing, and adaptive
contracting. The results also suggest that relational variables may serve as proxies for both
informational transparency and access to support mechanisms during periods of strain (Platonova et
al., 2018). By confirming the statistical relevance of relationship-based information, the study extended
prior empirical work that emphasized the importance of relational data in small business risk
assessment.
Taken together, the findings of this study are broadly consistent with earlier research while also
extending it by demonstrating the combined predictive value of financial, cash flow, behavioral, and
relational indicators within a unified early-warning framework (Dekker et al., 2015). Previous studies
often examined these predictor domains in isolation or focused on specific firm populations, limiting
generalizability. The present results indicated that distress prediction accuracy improved as additional
predictor sets were incorporated, supporting integrated modeling approaches advocated in prior
literature (Cui et al., 2018). The findings also reinforced the importance of temporal and behavioral
sensitivity in early-warning systems, particularly for small businesses operating under constrained
financial conditions. By documenting statistically significant associations across multiple domains, the
study contributed empirical evidence supporting the evolution of distress prediction from static, ratio-
based models toward dynamic, multi-source frameworks (Lome et al., 2016). The consistency of the
results with established theoretical expectations enhances confidence in the robustness of the predictive
structure and supports its relevance within the broader body of financial distress research.
CONCLUSION
An early-warning predictive framework for financial distress in U.S. small businesses represents a
systematic quantitative approach to identifying vulnerability before severe financial impairment or
business exit occurs. Financial distress in small enterprises typically develops through gradual erosion
of liquidity, increasing reliance on external financing, instability in operating cash flows, and
observable changes in payment and credit behavior rather than through sudden collapse. Small
businesses operate with limited financial buffers, constrained access to capital markets, and heightened
exposure to short-term shocks, which amplifies the importance of timely detection mechanisms. An
effective early-warning framework integrates multiple sources of information that reflect these
realities, combining traditional financial statement indicators with cash flow dynamics, transactional
behavior, and relationship-based signals. Liquidity and leverage measures capture structural financial
capacity, while profitability and efficiency indicators reflect operational sustainability. Cash flow
volatility and working capital strain provide insight into temporal instability and cash management
challenges that often precede distress. Credit behavior indicators, such as utilization patterns and
repayment irregularities, reveal real-time responses to liquidity pressure, offering early signals that
may not yet be visible in formal reports. Relationship-based information further enhances predictive
capability by incorporating the informational advantages accumulated through borrower–lender
interactions, including monitoring intensity and engagement depth. The integration of these diverse
indicators allows the framework to model financial distress as a process rather than a discrete outcome,
                                                   110
                    Review of Applied Science and Technology, February 2026, 80– 118

aligning prediction with the observed progression of small business vulnerability. By structuring data
in time-indexed firm-period observations, the framework supports dynamic risk estimation that
updates as financial and behavioral conditions evolve. This temporal orientation improves sensitivity
to early-stage distress and reduces reliance on late-stage outcomes such as bankruptcy filings, which
often underrepresent economically meaningful distress in small firms. The resulting predictive system
functions as a probabilistic monitoring tool, generating firm-level risk assessments that reflect both
current conditions and recent trajectories. Such a framework is particularly well suited to the U.S. small
business context, where heterogeneity in size, industry, and reporting practices necessitates flexible
and robust modeling approaches. By capturing the interaction between financial structure, cash flow
stability, behavioral responses, and relational context, an early-warning predictive framework provides
a comprehensive representation of distress risk that aligns with the financial realities of small
businesses and supports accurate, timely identification of emerging financial vulnerability.
RECOMMENDATION
The development and application of an early-warning predictive framework for financial distress in
U.S. small businesses warrants several focused recommendations aimed at strengthening its practical
effectiveness, analytical robustness, and alignment with small-business financial realities. First, it is
recommended that stakeholders adopting such frameworks prioritize multi-source data integration
rather than relying exclusively on traditional financial statements. Financial ratios alone often provide
delayed or incomplete signals for small businesses due to reporting lags, scale effects, and accounting
discretion. Incorporating cash flow dynamics, working capital indicators, credit behavior, and
relationship-based information enhances early detection by capturing real-time and near-real-time
stress signals. Second, the framework should be implemented using time-dynamic modeling structures
that allow distress probabilities to be updated periodically as new information becomes available.
Static, single-period assessments risk misclassifying firms experiencing temporary fluctuations or
overlooking rapidly escalating vulnerability. Periodic re-estimation and rolling validation procedures
are therefore recommended to maintain temporal relevance and model stability. Third, outcome
definitions used within the framework should extend beyond formal bankruptcy to include
economically meaningful distress states such as severe payment delinquency, persistent negative
operating cash flow, loan restructuring, and repeated obligation breaches. This broader definition
improves event coverage, supports earlier detection, and better reflects how small businesses actually
experience and manifest distress. Fourth, model transparency and interpretability should be
emphasized, particularly in applied settings involving lenders, advisors, and regulators. While
complex predictive techniques may improve accuracy, the framework should retain clear linkages
between predictors and risk outcomes to support trust, accountability, and informed decision-making.
Fifth, segmentation by industry, firm size, and firm age is recommended to account for structural
heterogeneity in operating cycles, cash flow patterns, and financing behavior. Distress mechanisms
vary across sectors, and segment-aware calibration can reduce noise and improve predictive precision.
Sixth, continuous performance monitoring is essential; predictive accuracy, calibration, and false-alarm
rates should be reviewed regularly to ensure that the framework remains effective under changing
economic conditions. Finally, it is recommended that early-warning outputs be positioned as
monitoring and risk-screening tools rather than deterministic judgments. Risk scores should inform
further review, engagement, or support actions rather than serve as sole decision triggers. Collectively,
these recommendations support the deployment of an early-warning predictive framework that is
adaptive, data-informed, and sensitive to the operational realities of U.S. small businesses, thereby
enhancing its value as a tool for timely financial risk identification and management.
LIMITATIONS
Despite the analytical rigor of an early-warning predictive framework for financial distress in U.S. small
businesses, several limitations must be acknowledged that constrain the interpretation and
generalization of its results. One primary limitation relates to data availability and quality, as small
businesses often exhibit inconsistent financial reporting practices, incomplete records, and varying
accounting standards. These conditions may introduce measurement error into financial statement
indicators and limit the precision of constructed variables, particularly for cash flow and efficiency
measures. Transactional and behavioral data, while valuable for early detection, may not be uniformly
                                                   111
                        Review of Applied Science and Technology, February 2026, 80– 118

available across all firms, resulting in uneven information coverage and potential sample selection bias.
Another limitation arises from the heterogeneity of small businesses in terms of industry, size,
ownership structure, and lifecycle stage. Although segmentation techniques can partially address this
diversity, a single predictive framework may not fully capture industry-specific distress mechanisms
or unique operational constraints faced by certain sectors. Temporal limitations also warrant
consideration, as predictive models are estimated using historical data and may be sensitive to the
economic conditions prevailing during the observation period. Structural changes in credit markets,
regulatory environments, or macroeconomic conditions may alter the relationships between predictors
and distress outcomes, affecting model stability over time. Additionally, outcome definitions that
extend beyond bankruptcy, while more representative of small business distress, may involve
subjective threshold choices that influence event labeling and comparability across studies. The
probabilistic nature of early-warning predictions introduces further limitations, as risk scores indicate
likelihood rather than certainty, creating the possibility of false positives and false negatives that may
affect decision-making. Finally, the integration of relationship-based indicators, although informative,
may reflect lender behavior as much as borrower condition, introducing endogeneity that is difficult to
fully disentangle in observational data. Collectively, these limitations highlight that while an early-
warning predictive framework provides valuable insight into emerging financial vulnerability among
U.S. small businesses, its outputs should be interpreted within the context of data constraints, model
assumptions, and environmental variability rather than as definitive assessments of firm outcomes.
REFERENCES
 [1].    Abdulla, M., & Alifa Majumder, N. (2023). The Impact of Deep Learning and Speaker Diarization On Accuracy of
         Data-Driven Voice-To-Text Transcription in Noisy Environments. American Journal of Scholarly Research and
         Innovation, 2(02), 415–448. https://doi.org/10.63125/rpjwke42
 [2].    Adel, G., & Habib, A. (2018). Mediating role of entrepreneurial orientation on the relationship between relational
         network and competitive advantages of Tunisian contractors. Journal of the knowledge economy, 9(2), 665-679.
 [3].    Almamy, J., Aston, J., & Ngwa, L. N. (2016). An evaluation of Altman's Z-score using cash flow ratio to predict
         corporate failure amid the recent financial crisis: Evidence from the UK. Journal of Corporate Finance, 36, 278-285.
 [4].    Altman, E. I. (2018). Applications of distress prediction models: what have we learned after 50 years from the Z-
         score models? International Journal of Financial Studies, 6(3), 70.
 [5].    Amena Begum, S. (2025). Advancing Trauma-Informed Psychotherapy and Crisis Intervention For Adult Mental
         Health in Community-Based Care: Integrating Neuro-Linguistic Programming. American Journal of Interdisciplinary
         Studies, 6(1), 445-479. https://doi.org/10.63125/bezm4c60
 [6].    Andrikopoulos, P., & Khorasgani, A. (2018). Predicting unlisted SMEs' default: Incorporating market information
         on accounting-based models for improved accuracy. The British accounting review, 50(5), 559-573.
 [7].    Angori, G., Aristei, D., & Gallo, M. (2019). Lending technologies, banking relationships, and firms’ access to credit
         in Italy: the role of firm size. Applied Economics, 51(58), 6139-6170.
 [8].    Ashraf, S., GS Félix, E., & Serrasqueiro, Z. (2019). Do traditional financial distress prediction models predict the
         early warning signs of financial distress? Journal of Risk and Financial Management, 12(2), 55.
 [9].    Atkeson, A. G., Eisfeldt, A. L., & Weill, P.-O. (2017). Measuring the financial soundness of US firms, 1926–2012.
         Research in Economics, 71(3), 613-635.
 [10].   Aziz, H. A., Ukkusuri, S. V., & Romero, J. (2015). Understanding short-term travel behavior under personal
         mobility credit allowance scheme using experimental economics. Transportation Research Part D: Transport and
         Environment, 36, 121-137.
 [11].   Bahnsen, A. C., Aouada, D., Stojanovic, A., & Ottersten, B. (2016). Feature engineering strategies for credit card
         fraud detection. Expert Systems with applications, 51, 134-142.
 [12].   Balogun, O. A., Nazeem, A., & Agumba, J. N. (2016). Determinants predicting credit accessibility within small and
         medium-sized enterprises in the South African construction industry. Procedia engineering, 164, 473-480.
 [13].   Bigus, J., & Hillebrand, C. (2017). Bank relationships and private firms’ financial reporting quality. European
         Accounting Review, 26(2), 379-409.
 [14].   Blut, M., & Wang, C. (2020). Technology readiness: a meta-analysis of conceptualizations of the construct and its
         impact on technology usage. Journal of the Academy of Marketing Science, 48(4), 649-669.
 [15].   Bouslah, K., Kryzanowski, L., & M’zali, B. (2018). Social performance and firm risk: Impact of the financial crisis.
         Journal of Business Ethics, 149(3), 643-669.
 [16].   Brown, R., & Lee, N. (2019). Strapped for cash? Funding for UK high growth SMEs since the global financial crisis.
         Journal of business research, 99, 37-45.
 [17].   Brüggen, E. C., Hogreve, J., Holmlund, M., Kabadayi, S., & Löfgren, M. (2017). Financial well-being: A
         conceptualization and research agenda. Journal of business research, 79, 228-237.
 [18].   Camacho-Thompson, D. E., Gillen-O’Neel, C., Gonzales, N. A., & Fuligni, A. J. (2016). Financial strain, major family
         life events, and parental academic involvement during adolescence. Journal of youth and adolescence, 45(6), 1065-1074.


                                                             112
                        Review of Applied Science and Technology, February 2026, 80– 118
[19].   Camacho‐Miñano, M. d. M., Segovia‐Vargas, M. J., & Pascual‐Ezama, D. (2015). Which characteristics predict the
        survival of insolvent firms? An SME reorganization prediction model. Journal of Small Business Management, 53(2),
        340-354.
[20].   Campa, D. (2019). Earnings management strategies during financial difficulties: A comparison between listed and
        unlisted French companies. Research in International Business and Finance, 50, 457-471.
[21].   Carmona, P., Climent, F., & Momparler, A. (2019). Predicting failure in the US banking sector: An extreme gradient
        boosting approach. International Review of Economics & Finance, 61, 304-323.
[22].   Chen, J., Shen, Y., & Ali, R. (2018). Credit card fraud detection using sparse autoencoder and generative adversarial
        network. 2018 IEEE 9th Annual Information Technology, Electronics and Mobile Communication Conference
        (IEMCON),
[23].   Chetto, M., & Queudet, A. (2016). Energy autonomy of real-time systems. Elsevier.
[24].   Ciampi, F. (2015). Corporate governance characteristics and default prediction modeling for small enterprises. An
        empirical analysis of Italian firms. Journal of business research, 68(5), 1012-1025.
[25].   Cleofas-Sánchez, L., García, V., Marqués, A. I., & Sánchez, J. S. (2016). Financial distress prediction using the hybrid
        associative memory with translation. Applied Soft Computing, 44, 144-152.
[26].   Collins, J. D., McMullen, J. S., & Reutzel, C. R. (2016). Distributive justice, corruption, and entrepreneurial behavior.
        Small Business Economics, 47(4), 981-1006.
[27].   Cooper, C. (2015). Accounting for the fictitious: A Marxist contribution to understanding accounting's roles in the
        financial crisis. Critical Perspectives on Accounting, 30, 63-82.
[28].   Corlu, C. G., de la Torre, R., Serrano-Hernandez, A., Juan, A. A., & Faulin, J. (2020). Optimizing energy
        consumption in transportation: Literature review, insights, and research opportunities. Energies, 13(5), 1115.
[29].   Cui, C., John, K., Pang, J., & Wu, H. (2018). Employment protection and corporate cash holdings: Evidence from
        China's labor contract law. Journal of Banking & Finance, 92, 182-194.
[30].   Curl, A., Clark, J., & Kearns, A. (2018). Household car adoption and financial distress in deprived urban
        communities: A case of forced car ownership? Transport Policy, 65, 61-71.
[31].   Dai, S., Duan, X., & Zhang, W. (2020). Knowledge map of environmental crisis management based on keywords
        network and co-word analysis, 2005–2018. Journal of cleaner production, 262, 121168.
[32].   Darwish, S. M. (2020). A bio-inspired credit card fraud detection model based on user behavior analysis suitable for
        business management in electronic banking. Journal of Ambient Intelligence and Humanized Computing, 11(11), 4873-
        4887.
[33].   Dekker, J., Lybaert, N., Steijvers, T., & Depaire, B. (2015). The effect of family business professionalization as a
        multidimensional construct on firm performance. Journal of Small Business Management, 53(2), 516-538.
[34].   Delas, V., Nosova, E., & Yafinovych, O. (2015). Financial security of enterprises. Procedia economics and finance, 27,
        248-266.
[35].   Dichev, I., Graham, J., Harvey, C. R., & Rajgopal, S. (2016). The misrepresentation of earnings. Financial Analysts
        Journal, 72(1), 22-35.
[36].   Diyan, M., Khan, M., Nathali Silva, B., & Han, K. (2020). Scheduling sensor duty cycling based on event detection
        using bi-directional long short-term memory and reinforcement learning. Sensors, 20(19), 5498.
[37].   Dong, X., Meyer, J., Shmueli, E., Bozkaya, B., & Pentland, A. (2018). Methods for quantifying effects of social unrest
        using credit card transaction data. EPJ Data Science, 7(1), 8.
[38].   Downing, J. (2016). The health effects of the foreclosure crisis and unaffordable housing: a systematic review and
        explanation of evidence. Social Science & Medicine, 162, 88-96.
[39].   Estoque, R. C., Togawa, T., Ooba, M., Gomi, K., Nakamura, S., Hijioka, Y., & Kameyama, Y. (2019). A review of
        quality of life (QOL) assessments and indicators: Towards a “QOL-Climate” assessment framework. Ambio, 48(6),
        619-638.
[40].   Fahimul, H. (2022). Corpus-Based Evaluation Models for Quality Assurance Of AI-Generated ESL Learning
        Materials. Review of Applied Science and Technology, 1(04), 183–215. https://doi.org/10.63125/m33q0j38
[41].   Fahimul, H. (2023). Explainable AI Models for Transparent Grammar Instruction and Automated Language
        Assessment. American Journal of Interdisciplinary Studies, 4(01), 27-54. https://doi.org/10.63125/wttvnz54
[42].   Faysal, K., & Aditya, D. (2025). Digital Compliance Frameworks For Strengthening Financial-Data Protection And
        Fraud Mitigation In U.S. Organizations. Review of Applied Science and Technology, 4(04), 156–194.
        https://doi.org/10.63125/86zs5m32
[43].   Faysal, K., & Tahmina Akter Bhuya, M. (2023). Cybersecure Documentation and Record-Keeping Protocols For
        Safeguarding Sensitive Financial Information Across Business Operations. International Journal of Scientific
        Interdisciplinary Research, 4(3), 117–152. https://doi.org/10.63125/cz2gwm06
[44].   Fernando, J. M. R., Li, L., & Hou, G. (2020). Financial versus non-financial information for default prediction:
        Evidence from Sri Lanka and the USA. Emerging Markets Finance and Trade, 56(3), 673-692.
[45].   Francoeur, C., Labelle, R., Balti, S., & EL Bouzaidi, S. (2019). To what extent do gender diverse boards enhance
        corporate social performance? Journal of Business Ethics, 155(2), 343-357.
[46].   Geng, R., Bose, I., & Chen, X. (2015). Prediction of financial distress: An empirical study of listed Chinese
        companies using data mining. European Journal of Operational Research, 241(1), 236-247.
[47].   Ghazali, A. W., Shafie, N. A., & Sanusi, Z. M. (2015). Earnings management: An analysis of opportunistic
        behaviour, monitoring mechanism and financial distress. Procedia economics and finance, 28, 190-201.
[48].   Guizani, M. (2017). The financial determinants of corporate cash holdings in an oil rich country: Evidence from
        Kingdom of Saudi Arabia. Borsa Istanbul Review, 17(3), 133-143.
                                                             113
                        Review of Applied Science and Technology, February 2026, 80– 118
[49].   Gupta, J., Gregoriou, A., & Ebrahimi, T. (2018). Empirical comparison of hazard models in predicting SMEs failure.
        Quantitative Finance, 18(3), 437-466.
[50].   Habibullah, S. M., & Aditya, D. (2023). Blockchain-Orchestrated Cyber-Physical Supply Chain Networks with
        Byzantine Fault Tolerance For Manufacturing Robustness. Journal of Sustainable Development and Policy, 2(03), 34-72.
        https://doi.org/10.63125/057vwc78
[51].   Hammad, S. (2022). Application of High-Durability Engineering Materials for Enhancing Long-Term Performance
        of Rail and Transportation Infrastructure. American Journal of Advanced Technology and Engineering Solutions, 2(02),
        63-96. https://doi.org/10.63125/4k492a62
[52].   Hammad, S., & Md Sarwar Hossain, S. (2025). Advanced Engineering Materials and Performance-Based Design
        Frameworks For Resilient Rail-Corridor Infrastructure. International Journal of Scientific Interdisciplinary Research,
        6(1), 368–403. https://doi.org/10.63125/c3g3sx44
[53].   Hammad, S., & Muhammad Mohiul, I. (2023). Geotechnical And Hydraulic Simulation Models for Slope Stability
        And Drainage Optimization In Rail Infrastructure Projects. Review of Applied Science and Technology, 2(02), 01–37.
        https://doi.org/10.63125/jmx3p851
[54].   Haque, B. M. T., & Md. Arifur, R. (2020). Quantitative Benchmarking of ERP Analytics Architectures: Evaluating
        Cloud vs On-Premises ERP Using Cost-Performance Metrics. American Journal of Interdisciplinary Studies, 1(04), 55-
        90. https://doi.org/10.63125/y05j6m03
[55].   Haque, B. M. T., & Md. Arifur, R. (2021). ERP Modernization Outcomes in Cloud Migration: A Meta-Analysis of
        Performance and Total Cost of Ownership (TCO) Across Enterprise Implementations. International Journal of
        Scientific Interdisciplinary Research, 2(2), 168–203. https://doi.org/10.63125/vrz8hw42
[56].   Haque, B. M. T., & Md. Arifur, R. (2023). A Quantitative Data-Driven Evaluation of Cost Efficiency in Cloud and
        Distributed Computing for Machine Learning Pipelines. American Journal of Scholarly Research and Innovation, 2(02),
        449–484. https://doi.org/10.63125/7tkcs525
[57].   He, Y., Xu, L., & McIver, R. P. (2019). How does political connection affect firm financial distress and resolution in
        China? Applied Economics, 51(26), 2770-2792.
[58].   Hernández, D. (2016). Understanding ‘energy insecurity’and why it matters to health. Social Science & Medicine, 167,
        1-10.
[59].   Hommel, K., & Bican, P. M. (2020). Digital entrepreneurship in finance: Fintechs and funding decision criteria.
        Sustainability, 12(19), 8035.
[60].   Inekwe, J. N. (2016). Financial distress, employees’ welfare and entrepreneurship among SMEs. Social Indicators
        Research, 129(3), 1135-1153.
[61].   Iturriaga, F. J. L., & Sanz, I. P. (2015). Bankruptcy visualization and prediction using neural networks: A study of
        US commercial banks. Expert Systems with applications, 42(6), 2857-2869.
[62].   Jabed Hasan, T., & Waladur, R. (2022). Advanced Cybersecurity Architectures for Resilience in U.S. Critical
        Infrastructure Control Networks. Review of Applied Science and Technology, 1(04), 146–182.
        https://doi.org/10.63125/5rvjav10
[63].   Jahangir, S. (2025). Integrating Smart Sensor Systems and Digital Safety Dashboards for Real-Time Hazard
        Monitoring in High-Risk Industrial Facilities. ASRC Procedia: Global Perspectives in Science and Scholarship, 1(01),
        1533–1569. https://doi.org/10.63125/newtd389
[64].   Jahangir, S., & Hammad, S. (2024). A Meta-Analysis of OSHA Safety Training Programs and their Impact on Injury
        Reduction and Safety Compliance in U.S. Workplaces. International Journal of Scientific Interdisciplinary Research, 5(2),
        559–592. https://doi.org/10.63125/8zxw0h59
[65].   Jahangir, S., & Muhammad Mohiul, I. (2023). EHS Analytics for Improving Hazard Communication, Training
        Effectiveness, and Incident Reporting in Industrial Workplaces. American Journal of Interdisciplinary Studies, 4(02),
        126-160. https://doi.org/10.63125/ccy4x761
[66].   Jiang, C., Song, J., Liu, G., Zheng, L., & Luan, W. (2018). Credit card fraud detection: A novel approach using
        aggregation strategy and feedback mechanism. IEEE Internet of Things Journal, 5(5), 3637-3647.
[67].   Keasey, K., & Watson, R. (2019). Financial distress prediction models: a review of their usefulness 1. Risk
        Management, 35-48.
[68].   Khoja, L., Chipulu, M., & Jayasekera, R. (2019). Analysis of financial distress cross countries: Using macroeconomic,
        industrial indicators and accounting data. International Review of Financial Analysis, 66, 101379.
[69].   Kliestik, T., Misankova, M., Valaskova, K., & Svabova, L. (2018). Bankruptcy prevention: new effort to reflect on
        legal and social changes. Science and Engineering Ethics, 24(2), 791-803.
[70].   Koh, S., Durand, R. B., Dai, L., & Chang, M. (2015). Financial distress: Lifecycle and corporate restructuring. Journal
        of Corporate Finance, 33, 19-33.
[71].   Koo, D. S., Ramalingegowda, S., & Yu, Y. (2017). The effect of financial reporting quality on corporate dividend
        policy. Review of Accounting studies, 22(2), 753-790.
[72].   Koomson, I., Villano, R. A., & Hadley, D. (2020). Effect of financial inclusion on poverty and vulnerability to
        poverty: Evidence using a multidimensional measure of financial inclusion. Social Indicators Research, 149(2), 613-
        639.
[73].   Kristanti, F. T., Rahayu, S., & Huda, A. N. (2016). The determinant of financial distress on Indonesian family firm.
        Procedia-Social and Behavioral Sciences, 219, 440-447.
[74].   Kumar, S., & Rao, P. (2015). A conceptual framework for identifying financing preferences of SMEs. Small Enterprise
        Research, 22(1), 99-112.

                                                             114
                       Review of Applied Science and Technology, February 2026, 80– 118
[75].  La Rocca, M., Staglianò, R., La Rocca, T., Cariola, A., & Skatova, E. (2019). Cash holdings and SME performance in
       Europe: the role of firm-specific and macroeconomic moderators. Small Business Economics, 53(4), 1051-1078.
[76]. Lebichot, B., Le Borgne, Y.-A., He-Guelton, L., Oblé, F., & Bontempi, G. (2019). Deep-learning domain adaptation
       techniques for credit cards fraud detection. INNS Big Data and Deep Learning conference,
[77]. Leskinen, N., Vimpari, J., & Junnila, S. (2020). A review of the impact of green building certification on the cash
       flows and values of commercial properties. Sustainability, 12(7), 2729.
[78]. Leung, S., Parker, L., & Courtis, J. (2015). Impression management through minimal narrative disclosure in annual
       reports. The British accounting review, 47(3), 275-289.
[79]. Lev, B. (2018). The deteriorating usefulness of financial report information and how to reverse it. Accounting and
       business research, 48(5), 465-493.
[80]. Li, C., Fang, Q., Ding, L., Cho, Y. K., & Chen, K. (2020). Time-dependent resilience analysis of a road network in an
       extreme environment. Transportation Research Part D: Transport and Environment, 85, 102395.
[81]. Liang, D., Tsai, C.-F., Lu, H.-Y. R., & Chang, L.-S. (2020). Combining corporate governance indicators with stacking
       ensembles for financial distress prediction. Journal of business research, 120, 137-146.
[82]. Lome, O., Heggeseth, A. G., & Moen, Ø. (2016). The effect of R&D on performance: do R&D-intensive firms handle
       a financial crisis better? The Journal of High Technology Management Research, 27(1), 65-77.
[83]. Lueddeckens, S., Saling, P., & Guenther, E. (2020). Temporal issues in life cycle assessment—a systematic review.
       The International Journal of Life Cycle Assessment, 25(8), 1385-1401.
[84]. Lundqvist, S. A. (2015). Why firms implement risk governance–Stepping beyond traditional risk management to
       enterprise risk management. Journal of accounting and public policy, 34(5), 441-466.
[85]. Ma, X., Sha, J., Wang, D., Yu, Y., Yang, Q., & Niu, X. (2018). Study on a prediction of P2P network loan default
       based on the machine learning LightGBM and XGboost algorithms according to different high dimensional data
       cleaning. Electronic Commerce Research and Applications, 31, 24-39.
[86]. Mansy, H., & Kwon, S. (2020). Optimal HVAC control for demand response via chance-constrained two-stage
       stochastic program. IEEE Transactions on Smart Grid, 12(3), 2188-2200.
[87]. Martínez-Sola, C., García-Teruel, P. J., & Martínez-Solano, P. (2018). Cash holdings in SMEs: speed of adjustment,
       growth and financing. Small Business Economics, 51(4), 823-842.
[88]. Masud, R., & Hammad, S. (2024). Computational Modeling and Simulation Techniques For Managing Rail–Urban
       Interface Constraints In Metropolitan Transportation Systems. American Journal of Scholarly Research and Innovation,
       3(02), 141–178. https://doi.org/10.63125/pxet1d94
[89]. Matias, F., & Serrasqueiro, Z. (2017). Are there reliable determinant factors of capital structure decisions? Empirical
       study of SMEs in different regions of Portugal. Research in International Business and Finance, 40, 19-33.
[90]. Matthews, G. (2016). Distress. Stress: Concepts, cognition, emotion, and behavior, 219-226.
[91]. Mazzarol, T., & Reboud, S. (2019). Cash flow, profit and working capital. In Small Business Management: Theory and
       Practice (pp. 409-450). Springer.
[92]. Md Ashraful, A., Md Fokhrul, A., & Md Fardaus, A. (2020). Predictive Data-Driven Models Leveraging Healthcare
       Big Data for Early Intervention And Long-Term Chronic Disease Management To Strengthen U.S. National Health
       Infrastructure. American Journal of Interdisciplinary Studies, 1(04), 26-54. https://doi.org/10.63125/1z7b5v06
[93]. Md Fokhrul, A., Md Ashraful, A., & Md Fardaus, A. (2021). Privacy-Preserving Security Model for Early Cancer
       Diagnosis, Population-Level Epidemiology, And Secure Integration into U.S. Healthcare Systems. American Journal
       of Scholarly Research and Innovation, 1(02), 01–27. https://doi.org/10.63125/q8wjee18
[94]. Md Harun-Or-Rashid, M., Mst. Shahrin, S., & Sai Praveen, K. (2023). Integration Of IOT And EDGE Computing For
       Low-Latency Data Analytics In Smart Cities And Iot Networks. Journal of Sustainable Development and Policy, 2(03),
       01-33. https://doi.org/10.63125/004h7m29
[95]. Md Harun-Or-Rashid, M., & Sai Praveen, K. (2022). Data-Driven Approaches To Enhancing Human–Machine
       Collaboration In Remote Work Environments. International Journal of Business and Economics Insights, 2(3), 47-83.
       https://doi.org/10.63125/wt9t6w68
[96]. Md Jamil, A. (2025). Systematic Review and Quantitative Evaluation of Advanced Machine Learning Frameworks
       for Credit Risk Assessment, Fraud Detection, And Dynamic Pricing in U.S. Financial Systems. International Journal
       of Business and Economics Insights, 5(3), 1329–1369. https://doi.org/10.63125/9cyn5m39
[97]. Md, K., & Sai Praveen, K. (2024). Hybrid Discrete-Event And Agent-Based Simulation Framework (H-DEABSF) For
       Dynamic Process Control In Smart Factories. ASRC Procedia: Global Perspectives in Science and Scholarship, 4(1), 72–96.
       https://doi.org/10.63125/wcqq7x08
[98]. Md. Akbar, H., & Farzana, A. (2023). Predicting Suicide Risk Through Machine Learning–Based Analysis of Patient
       Narratives and Digital Behavioral Markers in Clinical Psychology Settings. Review of Applied Science and Technology,
       2(04), 158–193. https://doi.org/10.63125/mqty9n77
[99]. Md. Al Amin, K. (2025). Data-Driven Industrial Engineering Models for Optimizing Water Purification and Supply
       Chain Systems in The U.S. ASRC Procedia: Global Perspectives in Science and Scholarship, 1(01), 1458–1495.
       https://doi.org/10.63125/s17rjm73
[100]. Md. Arifur, R., & Haque, B. M. T. (2022). Quantitative Benchmarking of Machine Learning Models for Risk
       Prediction: A Comparative Study Using AUC/F1 Metrics and Robustness Testing. Review of Applied Science and
       Technology, 1(03), 32–60. https://doi.org/10.63125/9hd4e011
[101]. Md. Towhidul, I., Alifa Majumder, N., & Mst. Shahrin, S. (2022). Predictive Analytics as A Strategic Tool For
       Financial Forecasting and Risk Governance In U.S. Capital Markets. International Journal of Scientific Interdisciplinary
       Research, 1(01), 238–273. https://doi.org/10.63125/2rpyze69
                                                            115
                       Review of Applied Science and Technology, February 2026, 80– 118
[102]. Md. Towhidul, I., & Rebeka, S. (2025). Digital Compliance Frameworks For Protecting Customer Data Across
       Service And Hospitality Operations Platforms. Review of Applied Science and Technology, 4(04), 109–155.
       https://doi.org/10.63125/fp60z147
[103]. Michel, J. S., Newness, K., & Duniewicz, K. (2016). How abusive supervision affects workplace deviance: A
       moderated-mediation examination of aggressiveness and work-related negative affect. Journal of Business and
       Psychology, 31(1), 1-22.
[104]. Morgan, P. J., & Long, T. Q. (2020). Financial literacy, financial inclusion, and savings behavior in Laos. Journal of
       Asian economics, 68, 101197.
[105]. Moscatelli, M., Parlapiano, F., Narizzano, S., & Viggiano, G. (2020). Corporate default forecasting with machine
       learning. Expert Systems with applications, 161, 113567.
[106]. Mostafa, K. (2023). An Empirical Evaluation of Machine Learning Techniques for Financial Fraud Detection in
       Transaction-Level Data. American Journal of Interdisciplinary Studies, 4(04), 210-249.
       https://doi.org/10.63125/60amyk26
[107]. Nigam, N., & Boughanmi, A. (2017). Can innovative reforms and practices efficiently resolve financial distress?
       Journal of cleaner production, 140, 1860-1871.
[108]. Nogués, A., & Valladares, J. (2017). Business intelligence tools for small companies. Business Intelligence Tools for
       Small Companies.
[109]. Nyeadi, J. D., Sare, Y. A., & Aawaar, G. (2018). Determinants of working capital requirement in listed firms:
       Empirical evidence using a dynamic system GMM. Cogent Economics & Finance, 6(1), 1558713.
[110]. O'Connor, G. E., Newmeyer, C. E., Wong, N. Y. C., Bayuk, J. B., Cook, L. A., Komarova, Y., Loibl, C., Ong, L. L., &
       Warmath, D. (2019). Conceptualizing the multiple dimensions of consumer financial vulnerability. Journal of
       business research, 100, 421-430.
[111]. Orús, R., Mugel, S., & Lizaso, E. (2019). Quantum computing for finance: Overview and prospects. Reviews in
       Physics, 4, 100028.
[112]. Perera, D., & Chand, P. (2015). Issues in the adoption of international financial reporting standards (IFRS) for small
       and medium-sized enterprises (SMES). Advances in accounting, 31(1), 165-178.
[113]. Platonova, E., Asutay, M., Dixon, R., & Mohammad, S. (2018). The impact of corporate social responsibility
       disclosure on financial performance: Evidence from the GCC Islamic banking sector. Journal of Business Ethics,
       151(2), 451-471.
[114]. Pombeiro, H., Machado, M. J., & Silva, C. (2017). Dynamic programming and genetic algorithms to control an
       HVAC system: Maximizing thermal comfort and minimizing cost with PV production and storage. Sustainable cities
       and society, 34, 228-238.
[115]. Ratul, D. (2025). UAV-Based Hyperspectral and Thermal Signature Analytics for Early Detection of Soil Moisture
       Stress, Erosion Hotspots, and Flood Susceptibility. ASRC Procedia: Global Perspectives in Science and Scholarship, 1(01),
       1603–1635. https://doi.org/10.63125/c2vtn214
[116]. Ratul, D., & Subrato, S. (2022). Remote Sensing Based Integrity Assessment of Infrastructure Corridors Using
       Spectral Anomaly Detection and Material Degradation Signatures. American Journal of Interdisciplinary Studies, 3(04),
       332-364. https://doi.org/10.63125/1sdhwn89
[117]. Rauch, J., & Wende, S. (2015). Solvency prediction for property-liability insurance companies: Evidence from the
       financial crisis. The Geneva Papers on Risk and Insurance-Issues and Practice, 40(1), 47-65.
[118]. Rauf, M. A. (2018). A needs assessment approach to english for specific purposes (ESP) based syllabus design in
       Bangladesh vocational and technical education (BVTE). International Journal of Educational Best Practices, 2(2), 18-25.
[119]. Reid, S. W., Patel, P. C., & Wolfe, M. T. (2018). The struggle is real: self-employment and short-term psychological
       distress. Journal of Business Venturing Insights, 9, 128-136.
[120]. Richardson, G., Taylor, G., & Lanis, R. (2015). The impact of financial distress on corporate tax avoidance spanning
       the global financial crisis: Evidence from Australia. Economic Modelling, 44, 44-53.
[121]. Rifat, C. (2025). Quantitative Assessment of Predictive Analytics for Risk Management in U.S. Healthcare Finance
       Systems. ASRC Procedia: Global Perspectives in Science and Scholarship, 1(01), 1570–1602.
       https://doi.org/10.63125/x4cta041
[122]. Rifat, C., & Jinnat, A. (2022). Optimization Algorithms for Enhancing High Dimensional Biomedical Data
       Processing Efficiency. Review of Applied Science and Technology, 1(04), 98–145. https://doi.org/10.63125/2zg6x055
[123]. Rifat, C., & Khairul Alam, T. (2022). Assessing The Role of Statistical Modeling Techniques in Fraud Detection
       Across Procurement And International Trade Systems. American Journal of Interdisciplinary Studies, 3(02), 91-125.
       https://doi.org/10.63125/gbdq4z84
[124]. Rifat, C., & Rebeka, S. (2023). The Role of ERP-Integrated Decision Support Systems in Enhancing Efficiency and
       Coordination In Healthcare Logistics: A Quantitative Study. International Journal of Scientific Interdisciplinary
       Research, 4(4), 265–285. https://doi.org/10.63125/c7srk144
[125]. Rifat, C., & Rebeka, S. (2024). Integrating Artificial Intelligence and Advanced Computing Models to Reduce
       Logistics Delays in Pharmaceutical Distribution. American Journal of Health and Medical Sciences, 5(03), 01–35.
       https://doi.org/10.63125/t1kx4448
[126]. Rosenbloom, D., Berton, H., & Meadowcroft, J. (2016). Framing the sun: A discursive approach to understanding
       multi-dimensional interactions within socio-technical transitions through the case of solar electricity in Ontario,
       Canada. Research Policy, 45(6), 1275-1290.



                                                            116
                       Review of Applied Science and Technology, February 2026, 80– 118
[127]. Sai Praveen, K. (2024). AI-Enhanced Data Science Approaches For Optimizing User Engagement In U.S. Digital
       Marketing Campaigns. Journal of Sustainable Development and Policy, 3(03), 01-43.
       https://doi.org/10.63125/65ebsn47
[128]. Salignac, F., Marjolin, A., Reeve, R., & Muir, K. (2019). Conceptualizing and measuring financial resilience: A
       multidimensional framework. Social Indicators Research, 145(1), 17-38.
[129]. Schlotz, W. (2019). Investigating associations between momentary stress and cortisol in daily life: What have we
       learned so far? Psychoneuroendocrinology, 105, 105-116.
[130]. Schoen, E. J. (2017). The 2007–2009 financial crisis: An erosion of ethics: A case study. Journal of Business Ethics,
       146(4), 805-830.
[131]. Schweizer, L., & Nienhaus, A. (2017). Corporate distress and turnaround: integrating the literature and directing
       future research. Business Research, 10(1), 3-47.
[132]. Sensier, M., Bristow, G., & Healy, A. (2016). Measuring regional economic resilience across Europe:
       Operationalizing a complex concept. Spatial Economic Analysis, 11(2), 128-151.
[133]. Shaikh, I. A., O'Brien, J. P., & Peters, L. (2018). Inside directors and the underinvestment of financial slack towards
       R&D-intensity in high-technology firms. Journal of business research, 82, 192-201.
[134]. Sharif Md Yousuf, B., Md Shahadat, H., Saleh Mohammad, M., Mohammad Shahadat Hossain, S., & Imtiaz, P.
       (2025). Optimizing The U.S. Green Hydrogen Economy: An Integrated Analysis Of Technological Pathways, Policy
       Frameworks, And Socio-Economic Dimensions. International Journal of Business and Economics Insights, 5(3), 586–602.
       https://doi.org/10.63125/xp8exe64
[135]. Shefrin, H. (2015). Reflections on “How psychological pitfalls generated the global financial crisis”. In The Routledge
       companion to strategic risk management (pp. 267-295). Routledge.
[136]. Shehwar, D., & Nizamani, S. A. (2024). Power Dynamics in Indian Ocean: US Indo-Pacific Strategic Report and
       Prospects for Pakistan's National Security. Government: Research Journal of Political Science, 13.
[137]. Shofiul Azam, T. (2025). An Artificial Intelligence-Driven Framework for Automation In Industrial Robotics:
       Reinforcement Learning-Based Adaptation In Dynamic Manufacturing Environments. American Journal of
       Interdisciplinary Studies, 6(3), 38-76. https://doi.org/10.63125/2cr2aq31
[138]. Shoflul Azam, T., & Md. Al Amin, K. (2024). Quantitative Study on Machine Learning-Based Industrial
       Engineering Approaches For Reducing System Downtime In U.S. Manufacturing Plants. International Journal of
       Scientific Interdisciplinary Research, 5(2), 526–558. https://doi.org/10.63125/kr9r1r90
[139]. Sorgente, A., & Lanz, M. (2017). Emerging adults’ financial well-being: A scoping review. Adolescent research review,
       2(4), 255-292.
[140]. Srivastava, U., & Gopalkrishnan, S. (2015). Impact of big data analytics on banking sector: Learning for Indian
       banks. Procedia Computer Science, 50, 643-652.
[141]. Steinker, S., Pesch, M., & Hoberg, K. (2016). Inventory management under financial distress: an empirical analysis.
       International Journal of Production Research, 54(17), 5182-5207.
[142]. Tasnim, K. (2025). Digital Twin–Enabled Optimization of Electrical, Instrumentation, And Control Architectures In
       Smart Manufacturing And Utility-Scale Systems. International Journal of Scientific Interdisciplinary Research, 6(1), 404–
       451. https://doi.org/10.63125/pqfdjs15
[143]. Tevel, E., Katz, H., & Brock, D. M. (2015). Nonprofit financial vulnerability: Testing competing models,
       recommended improvements, and implications. Voluntas: International Journal of Voluntary and Nonprofit
       Organizations, 26(6), 2500-2516.
[144]. Toft-Kehler, R. V., Wennberg, K., & Kim, P. H. (2016). A little bit of knowledge is a dangerous thing:
       Entrepreneurial experience and new venture disengagement. Journal of Business Venturing Insights, 6, 36-46.
[145]. Tomas Žiković, I. (2018). Challenges in predicting financial distress in emerging economies: The case of Croatia.
       Eastern European Economics, 56(1), 1-27.
[146]. Trumpp, C., Endrikat, J., Zopf, C., & Guenther, E. (2015). Definition, conceptualization, and measurement of
       corporate environmental performance: A critical examination of a multidimensional construct. Journal of Business
       Ethics, 126(2), 185-204.
[147]. Van Vlasselaer, V., Bravo, C., Caelen, O., Eliassi-Rad, T., Akoglu, L., Snoeck, M., & Baesens, B. (2015). APATE: A
       novel approach for automated credit card transaction fraud detection using network-based extensions. Decision
       Support Systems, 75, 38-48.
[148]. Visentin, D. C., Cleary, M., & Minutillo, S. (2020). Small business ownership and mental health. Issues in mental
       health nursing, 41(5), 460-463.
[149]. Walgrave, S., Tresch, A., & Lefevere, J. (2015). The conceptualisation and measurement of issue ownership. West
       European Politics, 38(4), 778-796.
[150]. Wang, D., Feng, T., & Lawton, A. (2017). Linking ethical leadership with firm performance: A multi-dimensional
       perspective. Journal of Business Ethics, 145(1), 95-109.
[151]. Wang, F., Ding, L., Yu, H., & Zhao, Y. (2020). Big data analytics on enterprise credit risk evaluation of e-Business
       platform. Information Systems and e-Business Management, 18(3), 311-350.
[152]. Wang, Z., Akbar, M., & Akbar, A. (2020). The interplay between working capital management and a firm’s financial
       performance across the corporate life cycle. Sustainability, 12(4), 1661.
[153]. Wu, Y., Xu, Y., & Li, J. (2019). Feature construction for fraudulent credit card cash-out detection. Decision Support
       Systems, 127, 113155.
[154]. Xu, Y., Beller, A. H., Roberts, B. W., & Brown, J. R. (2015). Personality and young adult financial distress. Journal of
       Economic Psychology, 51, 90-100.
                                                             117
                       Review of Applied Science and Technology, February 2026, 80– 118
[155]. Yang, L., & Zhang, Y. (2020). Digital financial inclusion and sustainable growth of small and micro enterprises—
       evidence based on China’s new third board market listed companies. Sustainability, 12(9), 3733.
[156]. Yosano, T., & Nakaoka, T. (2019). Theory and Hypotheses: The Effects of Using Soft Information on a Lender’s
       Performance, Specifically in Interbank Competition. In Utilization of Soft Information on Bank Performance: The Roles of
       Relationship Lending in Competitive Local Markets (pp. 17-29). Springer.
[157]. Zaheda, K. (2025a). AI-Driven Predictive Maintenance For Motor Drives In Smart Manufacturing A Scada-To-Edge
       Deployment Study. American Journal of Interdisciplinary Studies, 6(1), 394-444. https://doi.org/10.63125/gc5x1886
[158]. Zaheda, K. (2025b). Hybrid Digital Twin and Monte Carlo Simulation For Reliability Of Electrified Manufacturing
       Lines With High Power Electronics. International Journal of Scientific Interdisciplinary Research, 6(2), 143–194.
       https://doi.org/10.63125/db699z21
[159]. Zaman, M. A. U., Sultana, S., Raju, V., & Rauf, M. A. (2021). Factors İmpacting the Uptake of İnnovative Open and
       Distance Learning (ODL) Programmes in Teacher Education. Turkish Online Journal of Qualitative Inquiry, 12(6).
[160]. Zeidan, R., & Shapir, O. M. (2017). Cash conversion cycle and value-enhancing operations: Theory and evidence for
       a free lunch. Journal of Corporate Finance, 45, 203-219.
[161]. Zhang, G., Han, J., Pan, Z., & Huang, H. (2015). Economic policy uncertainty and capital structure choice: Evidence
       from China. Economic Systems, 39(3), 439-457.
[162]. Zhang, H., Tang, D., Huang, T., & Xu, C. (2016). An agent based intelligent distributed control paradigm for
       manufacturing systems. IFAC-PapersOnLine, 49(12), 1549-1554.
[163]. Zięba, M., Tomczak, S. K., & Tomczak, J. M. (2016). Ensemble boosted trees with synthetic features generation in
       application to bankruptcy prediction. Expert Systems with applications, 58, 93-101.
[164]. Zu, X., Diao, X., & Meng, Z. (2019). The impact of social media input intensity on firm performance: Evidence from
       Sina Weibo. Physica A: Statistical Mechanics and Its Applications, 536, 122556.
[165]. Zulqarnain, F. N. U. (2025). High-Performance Computing Frameworks for Climate And Energy Infrastructure
       Risk Assessment. Review of Applied Science and Technology, 4(04), 74–108. https://doi.org/10.63125/ks5s9m05




                                                            118
