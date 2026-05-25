---
title: "Accounting-based variables as an early warning indicator of financial distress in crisis and non-crisis periods"
authors:
  - "Powell, R. J."
  - "Dinh, D. V."
  - "Vu, N. T."
  - "Vo, D. H."
year: 2024
publication_date: 2024-01-01
venue: "International Journal of Finance & Economics, 29(4), 4105-4124"
doi: "10.1002/ijfe.2864"
url: "https://doi.org/10.1002/ijfe.2864"
pdf: "../assets/powell-2024-asean-accounting-early-warning-distress.pdf"
page_count: 20
notes: |
  Converted with pdftotext -layout 26.02.0. Original filename
  "Int  J Fin Econ - 2023 - Powell - Accounting-based variables as an early
  warning indicator of financial distress in crisis.pdf" (Wiley naming
  reflects online-first year 2023). Received 22 Sep 2020, revised 20 Jun 2023,
  accepted 23 Jun 2023. Print volume 29 (2024). Open access CC BY-NC-ND.
  Edith Cowan University + Ho Chi Minh City Open University + UWA.
---

Received: 22 September 2020      Revised: 20 June 2023     Accepted: 23 June 2023
DOI: 10.1002/ijfe.2864


RESEARCH ARTICLE




Accounting-based variables as an early warning indicator of
financial distress in crisis and non-crisis periods

Robert J. Powell 1                   | Dung V. Dinh 1                     | Nam Thanh Vu 2                           | Duc Hong Vo 2,3

1
 School of Business and Law, Edith
Cowan University, Joondalup, Australia               Abstract
2
 Research Centre in Business, Economics              Financial integration in the Association of Southeast Asian Nations (ASEAN)
and Resources, Ho Chi Minh City Open                 region is a key focus of the ASEAN Economic Community. Whereas many stud-
University, Ho Chi Minh City, Vietnam
3
                                                     ies focus on modelling corporate default, this paper identifies early warning indi-
 Department of Accounting and Finance,
University of Western Australia, Crawley,
                                                     cators of financial distress before a default, using multiple discriminant analysis
Australia                                            (MDA) models with a sample of listed and delisted companies in the ASEAN
                                                     region. The analysis examines 720 companies in 10 different industries across six
Correspondence
Duc Hong Vo, Research Centre in                      ASEAN countries from 1997 to 2016. The study constructs individual models for
Business, Economics and Resources, Ho                each country as well as an overall model for the entire region, using both in-
Chi Minh City Open University, Ho Chi
                                                     sample and out-of-sample approaches. This overall model could be useful for an
Minh City, Vietnam.
Email: duc.vhong@ou.edu.vn                           integrated banking system. To ensure robustness, the study also separately exam-
                                                     ines the predictive performance of the MDA models across different economic cri-
                                                     ses: the Asian financial crisis (AFC) from 1997 to 2000, the global financial crisis
                                                     (GFC) from 2007 to 2009 and their pre- and post-crisis periods. We find that prof-
                                                     itability ratios are the best indicators of financial distress in the ASEAN region,
                                                     followed by liquidity and leverage ratios. In addition, our findings reveal common
                                                     indicators that can be used to predict financial distress across ASEAN countries.
                                                     The single model performs reasonably well in predicting financial distress 1 year
                                                     ahead. In addition, the model is extended to incorporate a market-based indicator
                                                     into the MDA models, the distance to default. However, the inclusion of this indi-
                                                     cator does not significantly improve the accuracy of the models in predicting
                                                     financial distress at listed firms in the ASEAN region.

                                                     KEYWORDS
                                                     ASEAN, corporate financial distress, distance to default, early warning indicator, multiple
                                                     discriminant analysis




1 | INTRODUCTION                                                                     (AEC) is financial and economic integration, including
                                                                                     banking. The push for banking integration leads coun-
In the Association of Southeast Asian Nations (ASEAN)                                tries within the region to make strenuous efforts to
region, a key focus of the ASEAN Economic Community                                  strengthen their domestic banking networks. This study

This is an open access article under the terms of the Creative Commons Attribution-NonCommercial-NoDerivs License, which permits use and distribution in any
medium, provided the original work is properly cited, the use is non-commercial and no modifications or adaptations are made.
© 2023 The Authors. International Journal of Finance & Economics published by John Wiley & Sons Ltd.

Int J Fin Econ. 2024;29:4105–4124.                                                                                      wileyonlinelibrary.com/journal/ijfe    4105
                                                                                                                                  10991158, 2024, 4, Downloaded from https://onlinelibrary.wiley.com/doi/10.1002/ijfe.2864, Wiley Online Library on [25/05/2026]. See the Terms and Conditions (https://onlinelibrary.wiley.com/terms-and-conditions) on Wiley Online Library for rules of use; OA articles are governed by the applicable Creative Commons License
4106                                                                                                              POWELL ET AL.



examines financial distress in the emerging market context            Another concern is that the accounting-based MDA
of the ASEAN region, specifically its six members:               model is a static model and thus focuses exclusively on
Indonesia, Malaysia, Singapore, Thailand, the Philippines,       static accounting data. Thus, various studies suggest that
and Vietnam. In 2018, these six countries had a combined         incorporating accounting-based as well as market-based
gross domestic product (GDP) of US$2.84 trillion (World          indicators will improve the predictive ability of financial
Bank, 2019), accounting for 95.71% of the total GDP              distress models (Allen et al., 2015; Dinh et al., 2021;
among ASEAN members. Other countries in this region              Gharghori et al., 2006; Pham et al., 2018; Vassalou &
are excluded from the study as insufficient information is       Xing, 2004). Therefore, we extend our analysis by
available for the studied period from 1997 to 2016.              including a market-based variable in our accounting-
    Corporate financial distress and default are serious         based models to examine whether doing so can improve
issues with potentially damaging social and economic             the performance of the models in predicting financial
consequences (Cao et al., 2020). A company in financial          distress.
distress cannot generate sufficient revenues to cover its             Our extensive analysis, therefore, performs several
financial obligations (Pindado et al., 2008), which can          tasks, using extensive in-sample and out-of-sample
lead to corporate default. Banks have various models for         approaches. First, our analysis enables the identification
measuring and forecasting default risk, and studies on           of important accounting-based indicators across ASEAN
them can be divided into two research streams: (1) mar-          countries and different periods. Second, our study iden-
ket-based models, such as the Merton (1974) distance to          tifies similarities and differences in accounting-based
default (DD) model, and (2) accounting-based models,             indicators, which are statistically significant in predicting
such as the multiple discriminant analysis (MDA) models          financial distress for different countries and periods.
(Altman, 1968; Altman et al., 2017; Chijoriga, 2008;             Third, our study develops and compares individual and
Deakin, 1972; Koh & Killough, 1990; Taffler, 1983).              overall models for predicting financial distress among
    In this study, we focus on the accounting-based MDA          companies in ASEAN countries. Fourth, the study exam-
model for the following reasons. The MDA is straightfor-         ines whether including a market-based variable, particu-
ward and well established, making it easy to evaluate and        larly the distance to default (DD), improves the predictive
compare the results with the existing studies on financial       performance of the accounting-based models.
distress. The approach stems from the work by Altman                  The study makes several contributions. First, by per-
(1968), whose bankruptcy model is the one most widely            forming an extensive MDA study across six ASEAN
cited (Shi & Li, 2019). Another feature is that the MDA          countries using a sample of 720 firms, spanning six
approach identifies companies in financial distress using        periods of different economic circumstances, including
financial ratios, which are regarded by managers and ana-        crisis periods, we fill a gap in the research, which lacks a
lysts as an effective method of evaluating companies' finan-     detailed accounting-based MDA analysis of distressed
cial health. The financial ratio approach can also control for   firms in the ASEAN region across economic periods. Sec-
the size effect (du Jardin, 2009; Salmi & Martikainen, 1994),    ond, by comparing prediction models across different
as these ratios can be standardized across firms and regions,    periods and utilizing diverse combinations of explanatory
which makes the accounting-based approach suitable for           variables, we determine the financial ratios that are most
examining financial distress across ASEAN countries.             effective in identifying distressed companies under differ-
    One main concern regarding the use of MDA models             ent economic circumstances. Third, this study constructs
is that MDA models developed for specific situations             prediction models that provide early warning signals of
(e.g., periods or samples) do not perform well when              financial distress for firms in the ASEAN region. Such
applied to other situations. (Grice & Ingram, 2001;              models can assist banks, regulators, and even investors in
Ohlson, 1980). However, like all models, the MDA has             detecting financial distress before default.
limitations, the extensive use of MDA models over time                The remainder of this study following this introduction
has revealed those limitations, enabling us to identify          is structured as follows. Section 2 reviews the literature.
and address the key limitations in our models. Recent            Section 3 explains the data and research methodology
evidence also reveals that the MDA model performs rea-           used. Section 4 discusses the empirical results, followed by
sonably well, especially in the international context            concluding remarks and policy implications in Section 5.
(Altman et al., 2017). Therefore, we develop individual
and overall models for six ASEAN countries over a
20-year period from 1997 to 2016 to address this concern,        2 | L I T E R A T UR E R E V I E W
covering different economic crises. Moreover, we perform
both in-sample and out-of-sample analysis, in order to           In an era of financial integration, modelling corporate
validate the financial distress models constructed.              distress, default, and bankruptcy is a continual concern
                                                                                                                               10991158, 2024, 4, Downloaded from https://onlinelibrary.wiley.com/doi/10.1002/ijfe.2864, Wiley Online Library on [25/05/2026]. See the Terms and Conditions (https://onlinelibrary.wiley.com/terms-and-conditions) on Wiley Online Library for rules of use; OA articles are governed by the applicable Creative Commons License
POWELL ET AL.                                                                                                           4107



in the literature on corporate finance. The trend toward       employee relations, and corporate social responsibility
developing models to predict these events has grown over       (CSR) activities. For example, empirical evidence shows
the past few decades. This review summarizes the key           that hedging can mitigate distress risk by minimizing vola-
findings in earlier and recent studies on the determinants     tility in firm value, reducing tax payments, and increasing
of corporate financial distress.                               debt capacity (Magee, 2013). Moreover, adequate invest-
    Measure the risk of distress is a primary concern in       ment in employees is demonstrated to reduce distress risk.
empirical research on corporate financial distress because     It is also confirmed in the literature that firms with good
the validity of the findings is evaluated based on the reli-   CSR performance are less likely to be financially distressed
ability of the measurement. Early researchers often used       (Boubaker et al., 2020; Farooq et al., 2022; Farooq &
financial ratios based on the balance sheet and profit and     Noor, 2021).
loss statement as indicators of distress (Altman, 1968;             Second, macro-level determinants are used in empiri-
Beaver, 1966). Beaver (1966) wrote a pioneering study          cal studies to predict corporate distress during turbulent
that offered providing evidence on the use of accounting       periods, such as the global financial crisis or the Covid-19
data as an indicator of financial distress. Beaver deter-      pandemic (Altman et al., 2017; Crespí-Cladera et al.,
mined that a single financial ratio, the ratio of funds pro-   2021; Nguyen et al., 2023; Tinoco & Wilson, 2013). They
vided by operations to total liabilities, was the best         argue that adding macro-level determinants to distress
predictor of bankruptcy. Altman (1968) performed the           prediction models can raise their predictive performance
next analysis of corporate distress, developing a Z-score      because they account for nearly half the variation in firms'
equation with multiple discriminant analysis (MDA).            earnings (Bonsall et al., 2013). Accordingly, many empiri-
Then he constructed a model for forecasting a firm's           cal studies have confirmed that a firm's probability of dis-
bankruptcy:                                                    tress could be influenced by current economic events
                                                               (Giesecke & Weber, 2006; Pham et al., 2018). Firms' vul-
  Z ¼ 0:012X 1 þ 0:014X 2 þ 0:033X 3 þ 0:006X 4 þ 0:999X 5,    nerability to certain variables, such as investment intensity
                                                               and debt financing, can change in times of crisis (Lopez &
where X1 = working capital/total assets (WC/TA);               Saidenberg, 1999; Männasoo et al., 2018). Other macro-
X2 = retained earnings/ total assets (RE/TA); X3 = earn-       level determinants of corporate distress are inflation rates,
ings before interest and taxes/total assets (EBIT/TA);         interest rates, employment rates, credit availability, and
X4 = market value of equity/ book value of total liabili-      monetary policy (Liou & Smith, 2007).
ties (MVE/TL); and X5 = sales/total assets (S/TA).                  Third, many studies have examined the importance of
    These two early studies were expanded by using dif-        corporate governance determinants in predicting corpo-
ferent research samples, periods, or explanatory financial     rate distress (Chen et al., 2020; Liang et al., 2020;
ratios (Altman et al., 1977; Deakin, 1972; Taffler, 1983).     Mariano et al., 2021), and Johnson et al. (2000) see them
Deakin (1972) found WC/TA an important ratio in pre-           as more important than firm- or macro-level variables.
dicting bankruptcy. Altman et al.                              Shleifer and Vishny (1997) define corporate governance
(1977) then constructed a Zeta model with 27 indicators        as a mechanism for reassuring suppliers of finance of a
of distress. Taffler (1983) derived a Z-score for              return on their investment in corporations. Various
manufacturing firms listed on the London Stock                 researchers shed light on the relationship between corpo-
Exchange using linear discriminatory analysis. Other           rate governance and financial distress, such as the nexus
studies also used logit or probit models to raise the          between board characteristics and distress risk, though
model's predictive performance (Jung & Kim, 2008;              the findings on this nexus are inconclusive (Adusei &
Ohlson, 1980; Zmijewski, 1984).                                Obeng, 2019). CEO characteristics, including personality,
    Empirical research has also identified the deter-          gender, and even CEO duality (i.e., a separation of deci-
minants of corporate financial distress, divided into the      sion management from decision control), are other fac-
following three categories: (1) firm-level determinants,       tors that contributing significantly to the possibility of
(2) macro-level determinants, and (3) corporate gover-         financial distress (García & Herrero, 2021), and so can
nance determinants.                                            other characteristics, such as ownership structure, a
    With respect to firm-level determinants, the existing      firm's political connections, and cultural dimensions.
literature reveals that firms with a wide book-tax differ-     However, more empirical evidence on these issues is still
ence or high R&D investment are more likely to experi-         needed (Li et al., 2021; Mangena et al., 2020; Shahwan &
ence financial distress (Al-Dhamari et al., 2023; Dang &       Habib, 2020).
Tran, 2021; Noga & Schnader, 2013; Zhang, 2015). Other              As noted earlier, we use the interest coverage ratio
firm-level determinants that contribute to the likelihood of   (ICR), identified by Asquith et al. (1994) as an indicator
distress are also identified: corporate hedging strategies,    of financial distress. If a firm's earnings are less than its
                                                                                                                                10991158, 2024, 4, Downloaded from https://onlinelibrary.wiley.com/doi/10.1002/ijfe.2864, Wiley Online Library on [25/05/2026]. See the Terms and Conditions (https://onlinelibrary.wiley.com/terms-and-conditions) on Wiley Online Library for rules of use; OA articles are governed by the applicable Creative Commons License
4108                                                                                                            POWELL ET AL.



interest costs for two consecutive years, it is categorized     an indicator to give early warnings of distress across sam-
as financially distressed. We use it because predicting the     ples and economic conditions. Our methodology, as
likelihood of financial distress at an early stage can play a   shown in the next section, addresses these issues and lim-
significant role in corporate governance. For example,          itations by incorporating a range of countries (six ASEAN
financial distress is demonstrated to be expensive for          countries), a range of companies and industries (720 com-
creditors, and timely action to detect and address finan-       panies across 10 industries), and different periods
cial distress can minimize or prevent such expenses             (including crisis and noncrisis periods), using ICR as an
(Tinoco & Wilson, 2013). In addition, investors are             early warning indicator of financial distress. The study
inclined to assess financial distress at an early stage,        also uses comprehensive in-sample and out-of-sample
which probably influences the allocation of payments            testing techniques to develop the MDA models.
linked to their investment.
    Few studies have examined financial distress in the
ASEAN region. Pongsata et al. (2004) compare the logit          3 | RESEARCH DESIGN
model by Ohlson (1980) and Altman's Z-score model
(1968) to study prediction performance in Thailand. They        3.1 | Data
conclude that both models can predict financial distress
at Thai firms, regardless of their size. Sirirattanaphonkun     Our data were collected from the DataStream and Bloom-
and Pattarathammas (2012) use MDA and logit models to           berg databases, forming a dataset with the following cri-
predict financial distress at Thai small and medium-sized       teria. First, companies in the financial sector were
enterprises (SMEs) using data from 2000 to 2010. Both           excluded, as the structure of their balance sheets differs
models have a predictive accuracy rate of more than 80%.        from that of other industries—for example, most liabili-
Thai et al. (2014) use MDA to predict financial distress at     ties are deposits. Second, only companies with historical
Thai companies between 2009 and 2013. They find                 data that cover at least one of the two major financial cri-
WC/TA the most important variable in distinguishing             ses (AFC or GFC) are considered. Third, delisted compa-
between distressed and non-distressed businesses and            nies are included to mitigate survivorship bias and
conclude that their model predicts corporate distress with      ensure that all the countries have an equal sample of
an accuracy rate of 76.7%. Dinh et al. (2021) find that a       companies that are no longer trading.
market-based DD model can be a good early warning                   The number of listed and delisted companies for each
indicator of financial distress for firms in Southeast Asia,    country in the sample is in Table A1. The largest compa-
but forecasting accuracy varies across countries. Vu et al.     nies in the sample that satisfy the above-mentioned cri-
(2023) suggest a Lasso-based model that is superior in          teria were selected based on total liabilities (rather than
predicting financial distress for Vietnam.                      total assets or market capitalization) because our study
    The prior literature has some gaps and limitations, and     focuses on predicting financial distress at listed firms.
the main one is that, although some use credit risk models      Therefore, we select 100 listed companies and 20 delisted
to study the ASEAN region, none apply MDA models com-           companies for each country. Our approach produces a
prehensively across a large number of countries in the          uniform dataset for each country, making the results eas-
region over a sustained period encompassing the AFC,            ier to compare and interpret. However, this sampling
GFC, and noncrisis periods. Moreover, whereas many stud-        approach might suffer from choice-based sample bias,
ies focus on distress or bankruptcy prediction, few focus on    making the prediction models less precise for companies
early warning indicators of financial distress (especially      with low total liabilities (Platt & Platt, 2002).
when it occurs before bankruptcy), using accounting-based           The final sample comprises 720 companies, made up
MDA models to study the ASEAN region.                           of 100 listed and 20 delisted companies for each of the six
    Logit and probit models have been used as substitutes       ASEAN countries. The listed companies are the largest
for MDA models because they require less stringent              companies (by total liabilities) and must have a mini-
assumptions than MDA models. Bellovary et al. (2007)            mum of 10 years of available data. Such long historical
review 165 bankruptcy studies, finding no significant dif-      data enables us to consider the periods before, during,
ference in predictive accuracy among the MDA, logit,            and after the crisis and compare the model's performance
and probit models, though the accuracy rate is slightly         across these periods. The companies delisted are the larg-
higher for the MDA model than the other two models.             est companies (by total liabilities) and must have at least
Altman et al. (2017) find that the MDA model's perfor-          5 years of available data because most delisted companies
mance is similar to that of the logit model.                    have a relatively short data lifespan. DataStream does not
    In summary, the literature survey reveals the impor-        provide the reasons for delisting. Therefore, we per-
tance of financial distress models, which can be used as        formed numerous searches and ascertained that the vast
                                                                                                                                     10991158, 2024, 4, Downloaded from https://onlinelibrary.wiley.com/doi/10.1002/ijfe.2864, Wiley Online Library on [25/05/2026]. See the Terms and Conditions (https://onlinelibrary.wiley.com/terms-and-conditions) on Wiley Online Library for rules of use; OA articles are governed by the applicable Creative Commons License
POWELL ET AL.                                                                                                                 4109



majority were voluntary delisting, primarily due to acqui-       3.3 | Econometric techniques
sition or privatization. The other nonvoluntary delisting
was generally due to failure to meet stock exchange              Using the stepwise regression for each country in the
requirements. For example, they did not provide the              ASEAN region, we select a subset of these accounting
required reports or meet financial requirements.                 variables from the initial set of 14 accounting indicators.
                                                                 All indicators that are statistically significant in explain-
                                                                 ing the financial distress of firms in the ASEAN region
3.2 | Variables                                                  will form the discriminant function that best predicts
                                                                 financial distress. This is a common procedure for reduc-
Accounting-based MDA is used to measure the ability of           ing the number of variables used in MDA (Izan, 1984;
explanatory variables to discriminate among different            Koh & Killough, 1990; Mselmi et al., 2017; Singh &
groups of distressed or non-distressed firms, which are          Mishra, 2016; Taffler, 1983). The process enables us to
measured using the ICR. The first step is to divide the          rank the variables selected for the analysis based on their
firms in this study into these two groups. Faelten and Vit-      effects on the result. The indicator with the most significant
kova (2014) use the ICR as an indicator of distress. The         effect that passes the eligibility test is then included in the
interest coverage is measured by the ratio of EBIT to            analysis for predicting financial distress. At each stage, the
interest expenses. An ICR of less than 1 indicates that          accounting indicators that have been selected are tested
the firm cannot cover its interest payments from its             against an exclusion criterion, and they may be excluded
earnings (Faelten & Vitkova, 2014). Therefore, we use            from the analysis if they fail to satisfy the criterion. The pro-
the interest coverage ratio as the threshold for determin-       cess continues until no further variables can be included or
ing whether firms are distressed (ICR <1) or non-                removed (Sirirattanaphonkun & Pattarathammas, 2012).
distressed (ICR ≥ 1). The model divides firms into those         The most important reason for using fewer indicators in the
that are non-distressed (0) and distressed (1).                  MDA model is to avoid reducing predictive power because
    In the literature, 14 variables are identified as impor-     of irrelevant and redundant variables (Todorov, 2007). This
tant for the prediction of financial distress and can serve      process involves several sequential steps. At each step, a
as a starting point for developing our discriminatory            variable is added or removed using the Wilks's lambda tech-
models. Table 1 summarizes these key accounting vari-            nique, which selects predictors that minimize the Wilks's
ables, which are divided into profitability, liquidity, and      lambda value (Huberty & Olejnik, 2006). Then, an F test is
leverage groups.                                                 applied to Wilks's lambda for all indicators in the model to
    Table 2 gives the descriptive statistics the 14 variables.   ensure its significance at an appropriate tolerance level. In
    In addition, we ascertain whether adding a market-           line with common practice, the probabilities of the F test
based variable, for the distance to default (DD), will           for inclusion and removal are 0.5 and 0.10, respectively.
improve the predictive performance of accounting-based               The MDA model then measures the extent to which
MDA models. DD measures the effect of volatility in the          the explanatory variables can correctly classify (i.e., dis-
firm's market asset values (σ V) on the distance between         criminate) between distressed and non-distressed firms.
the market value of the firm and its debt (Merton, 1974).        In Type 1 error, distressed firms are incorrectly classified
We use the methodology detailed in Bharath and Shum-             as non-distressed. In Type 2 error, non-distressed firms
way (2008) and Dinh et al. (2021) to calculate DD,               are incorrectly classified as distressed. Finally, a chi-
expressed as follows.                                            square statistic is applied to determine the significance
                                                                 (p) of the ability of the model to discriminate between
                                      
                     ln VF þ μ  0:5 σ 2v T                      the two groups used in our analysis at the 95% signifi-
                DD ¼          pﬃﬃﬃ          ,             ð1Þ
                            σv T                                 cance level ( p < 0.05).


where V is the market value of the firm's assets, F is its       3.4 | Econometric strategies
debt, σ V is the volatility of V, V(μ) is the mean annual
change, and T is the forecasting horizon, which is 1 year.       Our analysis focuses on six different periods from 1997 to
    The default is when the value of a firm's assets falls       2016. The period 1997–2000 covers the AFC period, char-
below that of its liabilities. In the model, DD is measured      acterized by large currency depreciation, economic down-
as the distance from firm value, in terms of the number          turns, and bearish stock markets. The period 2001–2003
of standard deviations, from the point of default. A lower       encompasses the post-AFC period, when countries experi-
value of DD indicates that the firm is closer to default—        enced a rebound in economic growth, and many firms in
hence, it has a higher probability of default.                   Asia engaged in restructuring and corporate governance
                                                                                                                                                                                                                                                                                                                           4110




             TABLE 1               The widely used accounting indicators used in the multiple discriminant analysis (MDA) analysis.

                                                                                                                                                                                Tinoco                                                                                                 Cultrera
                                                                                                                                   Koh and          Hillegeist Beaver           and                                                                                                    and
                                                                Beaver Deakin Altman Altman        Ohlson Taffler Zmijewski Izan   Killough Shumway et al.     et al. Wu et al. Wilson                                                                                                 Brédart
                                                                (1966) (1972) (1968) et al. (1977) (1980) (1983) (1984)     (1984) (1990)   (2001)  (2004)     (2005) (2004)    (2013)                                                                                                 (2016)   Total
                Profitability X1           EBIT/TA                                          X             X                                                                 X                           X                 X                              X                             X               7
                                   X2      S/TA                                             X                                                                                                           X                 X                                                                            3
                                   X3      NI/TA                              X                                               X                          X                                              X                 X                 X                                                          6
                                   X4      RE/TA                                            X             X                                                                             X               X                 X                                                                            5
                                   X5      EBITDA/TL                                                                                                                                                                                        X                                                          1
                Liquidity          X6      WC/TA                              X             X             X                   X                                                                         X                 X                              X                                             7
                                   X7      CA/TL                                                                                            X                                                                                                                                                          1
                                   X8      CA/CL                                                                              X                          X                  X                           X                 X                              X                             X               7
                                   X9      CL/TA                                                                                            X                                                                                                                            X                             2
                                   X10 NOCREDINT                                                                                            X                                                                                                                            X                             2
                Leverage           X11 TL/TA                                  X                                               X                          X                                              X                 X                 X                            X                             7
                                   X12 FU/TL                    X             X                                               X                                                                                           X                                              X             X               6
                                   X13 MVE/TC                                                             X                                                                                                                                                                                            1
                                   X14 MVE/TL                                               X                                                                               X                           X                 X                                                                            4

             Note: The table lists financial ratios included as significant variables in previous studies. These indicators are used as a starting point for the accounting-based multiple discriminant analysis (MDA) model in this
             study. The total column sums the frequency of the ratio used in previous studies.
             Abbreviations: CA/CL, current assets/current liabilities; CA/TL, current assets/total liabilities; CL/TA, current liabilities/total assets; EBIT/TA, earnings before interest and taxes/total assets; EBITDA/TL, earnings
             before interest, depreciation, and amortization/total liabilities; FU/TL, funds provided by operations/total liabilities; MVE/TC, market value of equity/total capital; MVE/TL, market value of equity/total liabilities;
             NI/TA, net income/ total assets; NOCREDINT, ratio of the no credit interval; RE/TA, retained earnings/total assets; S/TA, total sales/total assets; TL/TA, total liabilities/total assets; WC/TA, working capital/total
             assets.




                                                                                                                                                                                                                                                                                                                           POWELL ET AL.




10991158, 2024, 4, Downloaded from https://onlinelibrary.wiley.com/doi/10.1002/ijfe.2864, Wiley Online Library on [25/05/2026]. See the Terms and Conditions (https://onlinelibrary.wiley.com/terms-and-conditions) on Wiley Online Library for rules of use; OA articles are governed by the applicable Creative Commons License
                                                                                                                                                          10991158, 2024, 4, Downloaded from https://onlinelibrary.wiley.com/doi/10.1002/ijfe.2864, Wiley Online Library on [25/05/2026]. See the Terms and Conditions (https://onlinelibrary.wiley.com/terms-and-conditions) on Wiley Online Library for rules of use; OA articles are governed by the applicable Creative Commons License
POWELL ET AL.                                                                                                                                      4111



TABLE 2         The descriptive statistics.
                                                                                                                                          Standard
                                                Panel A: Non-distressed                                 Mean            Median            deviation
                                                Profitability        X1          EBIT/TA                  0.086            0.068          0.163
                                                                     X2          S/TA                     0.789            0.580          0.873
                                                                     X3          NI/TA                    0.065            0.050          0.174
                                                                     X4          RE/TA                    0.164            0.183          0.578
                                                                     X5          EBITDA/TL                0.000            0.000          0.000
                                                Liquidity            X6          WC/TA                    0.121            0.113          0.328
                                                                     X7          CA/TL                    1.053            0.842          1.022
                                                                     X8          CA/CL                    1.929            1.469          1.608
                                                                     X9          CL/TA                    0.310            0.251          0.322
                                                                     X10         NOCREDINT              0.022          0.020            1.660
                                                Leverage             X11         TL/TA                    0.533            0.499          0.448
                                                                     X12         FU/TL                    0.225            0.132          0.691
                                                                     X13         MVE/TC                   2.192            1.276          2.522
                                                                     X14         MVE/TL                   1.712            1.152          2.029
                                                                                 ICR                      5.612            5.272          4.001
                                                                                                                                          Standard
                                                Panel B: Distressed                                     Mean            Median            deviation
                                                Profitability        X1          EBIT/TA                0.062          0.006            0.485
                                                                     X2          S/TA                     0.443            0.293          0.795
                                                                     X3          NI/TA                  0.004          0.018            0.860
                                                                     X4          RE/TA                  0.436          0.049            1.654
                                                                     X5          EBITDA/TL              0.014             0.021          0.694
                                                Liquidity            X6          WC/TA                  0.272          0.030            1.128
                                                                     X7          CA/TL                    0.799            0.474          1.305
                                                                     X8          CA/CL                    1.475            0.904          1.916
                                                                     X9          CL/TA                    0.615            0.355          1.115
                                                                     X10         NOCREDINT              1.324          0.347            3.720
                                                Leverage             X11         TL/TA                    0.865            0.654          1.111
                                                                     X12         FU/TL                    0.056            0.020          0.838
                                                                     X13         MVE/TC                   1.301            0.421          2.326
                                                                     X14         MVE/TL                   1.001            0.612          2.419
                                                                                 ICR                    1.736          0.250            3.357

                                              Note: The table shows the mean, median, and standard deviation for each ratio in Table 1. The sample used
                                              in our study includes 720 firms for the 20 years from 1997 to 2016. Panel A shows the firms identified as
                                              non-distressed (ICR ≥ 1) or non-distressed (ICR < 1).




reform (Joh & Jung, 2016). The period 2004–2006 is the                          As previously discussed, the existing literature indi-
pre-GFC period, defined by elevated economic growth and                      cates that some MDA models developed for specific sit-
buoyant stock markets. The period 2007–2009 includes the                     uations (e.g., particular periods or samples) do not
GFC, with a high rate of global bank failure, market tur-                    perform well when applied to other situations. Thus,
moil, and recessions. The period 2010–2012 represents                        we develop specific models for each ASEAN country in
the post-GFC period of recovery, but investors and regu-                     the research sample. The predictive performance of
lators continued to exercise caution. Finally, the period                    these models for individual ASEAN countries is then
2013–2016 (our study period) is stable, with a slightly                      compared to that of the single model developed for the
higher level of economic growth and stability.                               entire ASEAN region.
                                                                                                                                                        10991158, 2024, 4, Downloaded from https://onlinelibrary.wiley.com/doi/10.1002/ijfe.2864, Wiley Online Library on [25/05/2026]. See the Terms and Conditions (https://onlinelibrary.wiley.com/terms-and-conditions) on Wiley Online Library for rules of use; OA articles are governed by the applicable Creative Commons License
4112                                                                                                                                    POWELL ET AL.



                                                                                                            T A B L E 3 The discriminant
                   Period              Discriminant functions
                                                                                                            functions for the entire Association of
  Total            Entire period       Z = 0.157 + 6.269 X1 + 0.226                                        Southeast Asian Nations (ASEAN)
    ASEAN                                X2–0.754 X3 + 0.335 X41.292 X9
                                                                                                            region (Approach 1).
                   AFC                 Z = 0.907 + 2.467 X1 + 1.095 X6–1.499 X11
                   Post-AFC            Z = 0.043 + 4.618 X1 + 0.353 X2–1.421 X9
                   Pre-GFC             Z = 0.205  6.969 X1–0.299
                                         X2 + 2.471 X3 + 1.057 X7 + 0.778 X11 + 0.007 X13
                   GFC                 Z = 0.452 + 7.127 X10.494 X3 + 1.018 X40.082 X8
                   Post-GFC            Z = 0.316 + 7.905 X1 + 0.218 X2 + 0.629 X41.700 X9
                   Stable period       Z = 0.017 + 8.258 X1–2.530 X3 + 0.635 X41.628 X9

Note: The table presents the in-sample discriminant functions for the ASEAN region, including six major
countries. The discriminant functions are reported for Approach 1 (in-sample testing for each period). X1
denotes EBIT/TA. X2 denotes S/TA. X3 denotes NI/TA. X4 denotes RE/TA. X6 denotes WC/TA. X7 denotes
CA/CL. X8 denotes CA/CL. X9 denotes CL/TA. X11 denotes TL/TA. X13 denotes MVE/TC.




    We first analyse how well the accounting-based MDA                           market-based indicators into the model for predicting finan-
models predict financial distress in each ASEAN country                          cial distress can considerably improve the predictive perfor-
and the entire region based on the financial distress indi-                      mance of these models.
cator, the ICR. This approach is called Approach 1, the
baseline model, to differentiate from Approaches 2 and
3, which use forward-testing and back-testing techniques.                        4 | RESULTS
Approach 1 develops specific determinant functions for
each year in the study (1997–2016) to see whether they                           We initially constructed a single model for the entire
can predict financial distress in the year ahead (per firm,                      ASEAN region across six different periods. This one-size-
per country). Because the MDA with one lag is used, the                          fits-all model covers the full sample of six ASEAN coun-
determinant model for each year is developed based on                            tries for the full period, 1997–2016. The single MDA
the prior year's data. For Vietnam, the entire sample                            model constructed after conducting a stepwise regression
covers only the period 2007–2016.                                                is as follows.
    In addition, we examine the MDA models' predictive
performance when applied to different scenarios using                               Z ¼ 0:157 þ 6:269 X 1 þ 0:226 X 2  0:754 X 3 þ 0:335 X 4
Approaches 2 and 3. Approach 1 is the in-sample analy-                                   1:292 X 9 ,
sis, the baseline approach for constructing the MDA                                                                                          ð2Þ
models. Approaches 2 and 3 are used for out-of-sample                            where X1 is the ratio of earnings before interest and taxes
analyses to evaluate the predictive performance of the                           to total assets, X2 is the ratio of total sales to total assets.
MDA models. Approach 2 adopts a forward-looking                                  X3 is the ratio of net income to total assets. X4 is the ratio
approach by developing the accounting-based MDA                                  of retained earnings to total assets. Finally, X9 is the
models with the first half of the data sample (1997–2006)                        ratio of current liabilities to total assets. Four of the five
and applying them to the second half (2007–2016). In                             indicators used in the model come from the profitability
contrast, Approach 3 is a back-testing approach that                             group, suggesting that profitability is a critical indicator in
develops models with the second half of the data sam-                            the financial health of companies in the ASEAN region.
ple (2007–2016) and back-tests them against the first                                This single model using Approach 1 is used for in-
half (1997–2006). Overall, the results confirm signifi-                          sample testing. We also developed a single model for the
cant variations in the predictive accuracy of the finan-                         entire ASEAN region for each subperiod (the AFC, post-
cial distress models under different scenarios. In                               AFC, pre-GFC, GFC, post-GFC periods, and a stable
addition, we find that Approach 1 is likely to produce                           period). In addition, we constructed a single model for
better financial distress prediction for most ASEAN                              each individual ASEAN country for comparison pur-
countries than Approaches 2 and 3.                                               poses. The estimated intercepts included in the discrimi-
    Our study also considers the effect of a market-based                        nant functions are used to facilitate interpretation of our
indicator, DD, in enhancing the predictive performance on                        empirical results, which are presented in Table 3 for the
financial distress of various MDA models. We aim to con-                         entire ASEAN region and Table 4 for each ASEAN
firm whether incorporating both accounting-based- and                            country.
                                                                                                                               10991158, 2024, 4, Downloaded from https://onlinelibrary.wiley.com/doi/10.1002/ijfe.2864, Wiley Online Library on [25/05/2026]. See the Terms and Conditions (https://onlinelibrary.wiley.com/terms-and-conditions) on Wiley Online Library for rules of use; OA articles are governed by the applicable Creative Commons License
POWELL ET AL.                                                                                                           4113



    Our results with the MDA model for distress predic-         Leverage ratios do not appear to be dominant in
tion for the entire ASEAN region indicate that the single       Indonesia and Singapore. However, this group of finan-
model for the entire region (including all countries and        cial ratios appears to be most prominent in Thailand and
periods) has accuracy of 61.1% in predicting which firms        Vietnam.
are distressed and 81.9% in predicting which firms are              Table 5 shows the most notable difference between
non-distressed. Hence, the combined accuracy across             the MDA models during the AFC. Fewer ratios are signif-
both distressed and non-distressed firms is 76.8%. Fur-         icant in the model in the other periods. ASEAN econo-
thermore, the chi-square test results indicate that these       mies were hard hit during the AFC, commencing with
results are significant at the 99% level.                       the deep depreciation of the Thai Bhat and then rapidly
    The discriminant functions for each individual coun-        spreading to the surrounding countries (Ito, 2007). The
try and period with the MDA model for distress predic-          AFC was a period of high volatility in ASEAN currencies,
tion vary from one another. As noted in several studies         stock markets, and company earnings. As a result, pre-
(Giesecke & Weber, 2006; Grice & Ingram, 2001; Oz &             dicting financial distress using ICR is challenging. Fol-
Simga-Mugan, 2018; Sayari & Mugan, 2016), these results         lowing the AFC, conditions largely returned to normal.
highlight that discriminant functions vary based on the         During the post-AFC period, some profitability ratios—
specific data set for which they were developed.                such as NI/TA, RE/TA and EBITDA/TL—showed little
    Some common variables are more prominent than               or no significance as predictors of financial distress. How-
others in predicting financial distress in the ASEAN            ever, following the AFC, countries in the region imple-
region, as summarized in Table 5. Financial ratios in the       mented several reforms, leading to more enhanced
profitability group are the most dominant financial indi-       banking policies and capital flows. Over time, these
cators for predicting financial distress in the ASEAN           changes stabilized the region, making it easier to predict
region because they measure performance and are the             company earnings from 1 year to the next, so the impact
main driver of a company's liquidity. Moreover, creditors       of the GFC on the region was mild compared to many
often look at profitability ratios when determining credit      countries elsewhere. This is evident from the ratios dur-
terms with borrowers (Claessens et al., 2003). In particu-      ing the GFC, when the frequency was very similar to that
lar, EBIT/TA is the most significant indicator in predict-      of the entire period in Table 5.
ing financial distress, followed by RE/TA. These findings           Table 6 shows the percentage for being correctly pre-
are in line with the existing literature (e.g., Altman, 1968;   dicted as distressed and non-distressed in the ASEAN
Altman et al., 1977; Hillegeist et al., 2004; Izan, 1984;       countries. Across all MDA models, an average of 83% of
Shumway, 2001; Wu et al., 2004). EBIT/TA appears most           the forecasts correctly predict non-distressed firms,
frequently because this important ratio reflects the earn-      whereas 61% correctly predict distressed firms. Overall
ing power of the company's assets. Altman (1968)                76.8% of the predictions are correct for distressed and
believes that the survival of a company's is based on its       non-distressed firms. The prediction rate is higher for dis-
assets' earning power. The indicator that appears second        tressed firms because they comprise a much smaller
most frequently is RE/TA, as it measures the companies'         share of the sample than non-distressed firms. Therefore,
cumulative profitability over time. Routledge and Gad-          swings in the percentage of distressed firms from one
enne (2000) argue that past profitability is valuable for       period to the next are much greater, making it harder to
predicting a future capacity for self-financing.                predict them than non-distressed firms. In our sample,
    As presented in Table 5, financial ratios in the profit-    76% of the firms are non-distressed, and 24% are dis-
ability group are the most dominant financial indicators        tressed firms; so, if in a sample of 100 loans, the loans of
in predicting financial distress in the ASEAN region, fol-      the distressed firms increase by 10% (24 + 10), then the
lowed by liquidity and leverage. However, these catego-         distressed sample increases 42% (10/24), whereas a simi-
ries vary across periods and countries. Profitability is        lar rise in the non-distressed sample (76 + 10) represents
dominant in crisis periods, specifically during the AFC         an increase of only 13% (10/76). Thus, in terms of per-
(1997–2000) and the GFC (1997–1999). Profitability is           centage, the MDA model is more prone to Type 1 error
also prominent in Malaysia and Singapore. In contrast,          (predicting distressed firms as non-distressed) than to
liquidity ratios are the most prominent in predicting           Type 2 error (predicting non-distressed firms as
financial distress in post-crisis periods, such as the post-    distressed).
AFC (2001–2003), post-GFC (2010–2012), and stable                   We now compare our prediction rates compare to
periods (2013–2016). This group of financial indicators is      those in other studies. Our results fall well within the
particularly dominant in Indonesia. In contrast, financial      range reported by Bellovary et al. (2007), who, in their
ratios in the leverage group are more prevalent during          review of distress prediction studies from 1930 to the
the AFC (1997–2000) and the stable period (2013–2016).          2000s, concluded that the forecast accuracy range of
                                                                                                                                                               10991158, 2024, 4, Downloaded from https://onlinelibrary.wiley.com/doi/10.1002/ijfe.2864, Wiley Online Library on [25/05/2026]. See the Terms and Conditions (https://onlinelibrary.wiley.com/terms-and-conditions) on Wiley Online Library for rules of use; OA articles are governed by the applicable Creative Commons License
4114                                                                                                                                         POWELL ET AL.



TABLE 4         The discriminant functions for each Association of Southeast Asian Nations (ASEAN) country (Approach 1).

                                    Period                        Discriminant functions
  Indonesia                         Full period                   Z = 0.603 + 3.310 X1 + 0.237 X2 + 1.426 X3–0.351 X4 + 1.655 X6 + 0.03 X10
                                    AFC                           Z = 0.634 + 4.947 X1 + 0.891 X2 + 1.105 X6
                                    Post-AFC                      Z = 0.051 + 3.593 X1 + 1.497 X6 + 0.04 X10
                                    Pre-GFC                       Z = 0.405 + 6.337 X3 + 1.433 X6
                                    GFC                           Z = 0.76 + 7.598 X1–0.183 X10
                                    Post-GFC                      Z = 0.778 + 6.091 X1 + 1.087 X6 + 0.34 X10
                                    Stable period                 Z = 0.321 + 3.11 X1 + 1.572 X6 + 0.044 X10
  Malaysia                          Full period                   Z = 0.869 + 6.315 X1–3.944 X3 + 2.698 X4 + 0.73 X5 + 0.199 X10
                                    AFC                           Z = 0.167 + 2.746 X5
                                    Post-AFC                      Z = 1.558 + 7.052 X1 + 3.233 X4+ 2.458 X9
                                    Pre-GFC                       Z = 0.754 + 0.639 X2 + 1.564 X5 + 0.467 X10
                                    GFC                           Z = 1.147 + 4.168 X1 + 4.408 X4
                                    Post-GFC                      Z = 0.678 + 9.148 X1–0.429 X2 + 3.377 X4–1.671 X5 + 0.609 X10
                                    Stable period                 Z = 1.436 + 0.627 X8 + 3.21 X12
  The Philippines                   Full period                   Z = 0.423 + 4.801 X1 + 0.647 X2 + 0.23 X4–1.787 X9 + 0.883 X11
                                    AFC                           Z = 1.767 + 3.658 X11
                                    Post-AFC                      Z = 0.122 + 3.539 X1 + 0.563 X2–2.753 X9 + 0.854 X11
                                    Pre-GFC                       Z = 0.308  4.756 X1–0.826 X2 + 3.379 X3 + 2.403 X9 + 0.01 X10 + 0.026 X12
                                    GFC                           Z = 0.546 + 13.78 X1–7.988 X3 + 1.476 X4–0.019 X14
                                    Post-GFC                      Z = 0.330  7.183 X1 + 2.786 X9
                                    Stable period                 Z = 1.836 + 10.340 X1 + 2.370 X6–0.116 X10 + 2.128 X11
  Singapore                         Full period                   Z = 0.774 + 4.076 X1 + 2.175 X4
                                    AFC                           No significant variables
                                    Post-AFC                      Z = 0.605 + 4.088 X1–2.814 X9
                                    Pre-GFC                       Z = 0.784 + 4.08 X4 + 0.187 X10
                                    GFC                           Z = 0.859 + 8.561 X1 + 1.865 X3 + 1.971 X4–0.968 X5
                                    Post-GFC                      Z = 0.386 + 16.83 X1–13.249 X3
                                    Stable period                 Z = 0.9+ 12.308 X1–4.223 X6
  Thailand                          Full period                   Z = 0.112 + 8.038 X1 + 1.003 X6–0.219 X7–0.367 X11–0.021 X14
                                    AFC                           Z = 1.289 + 2.383 X5 + 0.372 X8 + 0.481 X13
                                    Post-AFC                      Z = 0.703  9.768 X1 + 0.587 X7 + 1.435 X11
                                    Pre-GFC                       Z = 0.289  6.838 X1 + 1.101 X3–0.647 X4 + 0.73 X5 + 0.945 X11
                                    GFC                           Z = 0.057 + 10.305 X1–0.318 X3 + 0.075 X10–0.326 X11–1.332 X12
                                    Post-GFC                      Z = 0.870 + 5.885 X1 + 3.445 X6–0.336 X8 + 0.715 X11 + 2.451 X12
                                    Stable period                 Z = 0.48–4.273 X5 + 0.109 X14
  Vietnam                           Full period                   Z = 0.394  3.172 X5 + 0.373 X8 + 0.819 X12 + 0.161 X14
                                    GFC                           Z = 1.208 + 0.536 X2–1.735 X5 + 0.28 X8 + 0.169 X14
                                    Post-GFC                      Z = 1.567 + 2.994 X5 + 3.076 X9–0.297 X14
                                    Stable period                 Z = 0.456  5.905 X5 + 0.46 X8 + 2.958 X12 + 0.216 X14

Note: The table presents the in-sample discriminant functions for each ASEAN country. In addition, the functions are reported for Approach 1 (in-sample
testing for each country's periods). The entire ASEAN is developed from a dataset that includes six ASEAN countries. X1 denotes EBIT/TA. X2 denotes S/TA. X3
denotes NI/TA. X4 denotes RE/TA. X5 denotes EBITDA/TL. X6 denotes WC/TA. X7 denotes CA/CL. X8 denotes CA/CL. X9 denotes CL/TA. X10 denotes
NOCREDINT. X11 denotes TL/TA. X12 denotes FU/TL. X13 denotes MVE/TC. X14 denotes MVE/TA.
                                                                                                                                                                  10991158, 2024, 4, Downloaded from https://onlinelibrary.wiley.com/doi/10.1002/ijfe.2864, Wiley Online Library on [25/05/2026]. See the Terms and Conditions (https://onlinelibrary.wiley.com/terms-and-conditions) on Wiley Online Library for rules of use; OA articles are governed by the applicable Creative Commons License
POWELL ET AL.                                                                                                                                              4115



TABLE 5         The frequency of financial ratios appeared in the discriminant functions.

                       X1        X2       X3        X4       X5        X6       X7        X8       X9        X10       X11        X12       X13        X14
  Full period           6         3        3         5         1        2       1         0          2        2          2        0         0          1
  AFC                   2         1        0         0         2        2       0         1          0        0          2        0         1          0
  Post-AFC              6         2        0         1         0        1       1         0          4        1          2        0         0          0
  Pre-GFC               3         3        4         2         2        1       1         0          1        3          2        1         1          0
  GFC                   6         1        4         4         2        0       0         2          0        2          1        1         0          2
  Post-GFC              6         2        1         2         2        2       0         2          3        2          1        1         0          1
  Stable period         4         0        1         1         2        3       0         2          1        2          1        2         0          2
                       33        12       13        15       11        11       3         7        11        12        11         5         2          6

Note: The table shows the frequency of each of the ratios in the discriminant functions using Approach 1 (in-sample testing for each period), as shown in
Table A1. X1 denotes EBIT/TA. X2 denotes S/TA. X3 denotes NI/TA. X4 denotes RE/TA. X5 denotes EBITDA/TL. X6 denotes WC/TA. X7 denotes CA/CL. X8
denotes CA/CL. X9 denotes CL/TA. X10 denotes NOCREDINT. X11 denotes TL/TA. X12 denotes FU/TL. X13 denotes MVE/TC. X14 denotes MVE/TA.




MDA models is 32%–100%. Our literature review shows a                                 In Tables 6 and 8, the 45 accuracy rates are below
much higher prediction rate when the data samples used                           50%, indicating that prediction is no better than chance.
are similar to those for which the models were developed.                        Six of them are in the crisis periods or a period coming
For example, the Altman (1968) study achieved high pre-                          out of a crisis, when large swings hamper the ability to
diction rates when it used an equally weighted set of                            predict distressed firms. Prediction performance for a
bankrupt and nonbankrupt US manufacturing compa-                                 country depends on its specific circumstances. Only dur-
nies. However, this accuracy fell by 26% when the sample                         ing the AFC does the prediction of non-distressed firms
used was in a different period (Grice & Ingram, 2001).                           fall below 60% for Thailand. We believe that the AFC
However, our study uses a much more diverse sample of                            originated in Thailand, so it is understandable that dis-
720 companies in 10 different industries and countries in                        tress was more challenging to predict in this period than
the ASEAN region, with no predetermined mix of dis-                              in prior years. The Philippines experienced the lowest
tressed and non-distressed firms. The following examples                         rates of correct financial distress prediction in the post-
compare the prediction rates with our MDA models for                             GFC period, perhaps because it relies on remittance
predicting financial distress to those in other ASEAN                            inflows from overseas workers. The GFC depressed
studies.                                                                         demand for Filipino workers (Varga-Silva et al., 2009),
     Ma'aji et al. (2018) used an MDA model and reported                         slowing recovery of the economy. Therefore, in the post-
a predictive accuracy of distress of 64.7% for Malaysian                         GFC period, the impacts on businesses and the swings
SMEs in manufacturing for the 2000–2012 period. Our                              between the two periods would have been difficult to pre-
MDA model for Malaysia from 2000 onward                                          dict from the prior year. Indonesia went into the GFC
(i.e., excluding the AFC) shows a similar accuracy rate                          with a steadily declining deficit, coupled with relatively
(63.1%) but across a much more diverse range of sectors.                         low reliance on exports (Sangsubhan & Basri, 2012), and
Our correct overall prediction rates are over 80% for                            experienced very mild economic impacts during the cri-
Indonesia and Thailand. This predictive accuracy com-                            sis. This stability over time could explain Indonesia's high
pares favourably to that of Rahman et al. (2004), who                            rate of correct predictions of distressed firms during
applied a logit model to predict financial distress at banks                     the GFC.
for the period 1995 to 1997, correctly forecasting around                             Next, we compare the predictive performance of our
82% in Indonesia and 76% in Thailand. Our model for                              MDA models for the entire ASEAN region and for each
Thailand correctly predicted 67.5% of distressed firms                           ASEAN country. The empirical results are presented in
across the full period. This result compares favourably to                       Table 7. Our results indicate that the MDA model for the
the rate in other studies on Thailand, such as Sirirattana-                      entire ASEAN region correctly identifies 61.1% of dis-
phonkun and Pattarathammas (2012), whose MDA                                     tressed companies as distressed and 81.9% of non-
model for SMEs correctly predicted 41.6% of distressed                           distressed companies as non-distressed. In contrast, the
firms from 2000 to 2010, and Meeampol et al. (2014),                             accuracy rate of the country-specific models (except for
whose model correctly predicted approximately 60% of                             Singapore) is well above 60% for “distressed” firms and
the bankrupt firms in Thailand in the period 2010                                well above 80% for those that are “non-distressed.”
to 2011.                                                                         Singapore has a low prediction rate of distressed
                                                                                                                                                                    10991158, 2024, 4, Downloaded from https://onlinelibrary.wiley.com/doi/10.1002/ijfe.2864, Wiley Online Library on [25/05/2026]. See the Terms and Conditions (https://onlinelibrary.wiley.com/terms-and-conditions) on Wiley Online Library for rules of use; OA articles are governed by the applicable Creative Commons License
4116                                                                                                                                              POWELL ET AL.



TABLE 6         Percentage correct prediction rates of in-sample results for individual periods (Approach 1).

                                             AFC            Post-AFC        Pre-GFC         GFC             Post-GFC        Stable period        Full period
  Indonesia             Distressed           75.7%           61.2%           57.6%           84.4%           80.0%           50.0%                66.7%
                        Non-distressed       77.2%           86.8%           88.8%           71.1%           91.6%           95.8%                86.1%
                        χ2                   34.716***       44.880***       53.221***       25.398***       63.596***       84.890***           298.800***
  Malaysia              Distressed           25.0%           56.0%           46.2%           63.2%           65.8%           76.3%                60.4%
                        Non-distressed       91.9%           80.8%           86.5%           78.0%           85.9%           61.7%                80.8%
                        χ2                   16.445***       34.820***       39.619***       48.164***       97.455***       23.573***           187.849***
  The Philippines       Distressed           64.3%           55.0%           52.9%           77.8%           46.8%           68.1%                60.6%
                        Non-distressed       66.2%           93.0%           89.6%           75.4%           83.8%           91.1%                85.8%
                        χ   2
                                              5.589**        69.551***       85.346***       56.193***       63.052***       90.313***           245.944***
  Singapore             Distressed            –              32.0%           68.0%           45.8%           58.8%           76.2%                42.9%
                        Non-distressed        –              89.4%           81.4%           96.0%           78.8%           70.7%                88.3%
                        χ   2
                                              –              26.155***       30.549***       81.299***       16.816***       13.128***           110.310***
  Thailand              Distressed           84.7%           73.7%           55.1%           56.0%           82.5%           25.0%                67.5%
                        Non-distressed       55.5%           82.0%           94.6%           90.6%           84.1%           95.7%                85.1%
                        χ   2
                                             21.310***       33.367***       91.495***      100.99***2       90.581***       45.612***           256.264***
  Vietnam               Distressed                                                           47.7%           68.1%           70.5%                61.6%
                        Non-distressed                                                       86.4%           75.2%           81.2%                82.2%
                        χ2                                                                   39.235***       52.501***       92.073***           119.811***
  Total ASEAN           Distressed           59.7%           53.8%           54.7%           61.2%           64.0%           57.4%                61.1%
                        Non-distressed       81.7%           90.5%           90.5%           82.2%           73.9%           78.0%                81.9%
                        χ   2
                                             60.771***      160.198***      250.166***      187.688***      184.599***      150.181***           781.549***

Note: The table presents the distressed/non-distressed predictive accuracy 1 year ahead of firm distress in Association of Southeast Asian Nations (ASEAN)
countries over different periods using multiple discriminant analysis (MDA) models. Distressed and non-distressed are identified based on the interest coverage
ratio (ICR). Total ASEAN is developed from a dataset that includes all six major ASEAN countries. For example, over the entire period, 66.7% of distressed
firms in Indonesia were correctly identified as distressed, and 33.3% were incorrectly identified as non-distressed (Type I error). In addition, 86.1% of non-
distressed firms were correctly identified as non-distressed, and 13.9% were incorrectly identified as distressed (Type II error). The table also presents the
significant results determined by the chi-square test (χ 2) regarding the MDA model's ability to discriminate between distressed and non-distressed firms. ** and
*** denote significance at the 95% and 99% level.




companies because it relies heavily on export markets.                             than the ones analysed. This result aligns with the exist-
Thus, economic problems experienced by other countries                             ing empirical evidence. However, our results confirm that
caused swings in the earnings of Singaporean firms, mak-                           the MDA models for predicting financial distress in many
ing prediction difficult. However, as mentioned, the accu-                         ASEAN countries will likely perform better using
racy rate for each country aligns with the previous                                Approach 1 than Approaches 2 and 3. Overall, the MDA
evidence and thereby suffices for predicting financial dis-                        models perform reasonably well at predicting financial
tress at firms.                                                                    distress 1 year ahead. However, the MDA models' predic-
    We now evaluate the predictive performance of our                              tive performance declines under three circumstances:
MDA models using two approaches. First, we examine                                 (1) when the model is not developed for a specific coun-
the models following Approach 1, with 1- and 2-year lags.                          try or period, (2) when the distressed rates have signifi-
Then, using Approaches 2 and 3, we conduct the out-                                cant swings between the period in which the model is
of-sample analysis. Detailed results are provided in                               developed and the period being measured, and (3) when
Appendices B and C (Tables C1, C2). Our results indicate                           the percentage of distressed firms in the sample mea-
that the predictive accuracy of financial distress is lower                        sured is small, leading to large swings in the percentage.
with our models using 2 lags than with the original MDA                                Finally, we determine whether including the market-
models using 1 lag. In addition, the results using                                 based indicator, the DD, improves prediction of distress.
Approaches 2 and 3 reveal variation in the distress pre-                           The existing literature indicates that some studies prefer
diction models when they are applied to samples other                              a mixed model incorporating both accounting-based
                                                                                                                                                                 10991158, 2024, 4, Downloaded from https://onlinelibrary.wiley.com/doi/10.1002/ijfe.2864, Wiley Online Library on [25/05/2026]. See the Terms and Conditions (https://onlinelibrary.wiley.com/terms-and-conditions) on Wiley Online Library for rules of use; OA articles are governed by the applicable Creative Commons License
POWELL ET AL.                                                                                                                                             4117



TABLE 7         A summary of the discriminant models and their accuracy rates in predicting financial distress for the entire period.

                                      Prediction rate                                              Discriminant functions
  Total ASEAN                         Distressed                          61.1%                    Z =  0.157 + 6.269 X1 + 0.226 X2 – 0.754
                                      Non-distressed                      81.9%                      X3 + 0.335 X41.292 X9

  Indonesia                           Distressed                          66.7%                    Z =  0.603 + 3.310 X1 + 0.237 X2 + 1.426 X3 –
                                      Non-distressed                      86.1%                      0.351 X4 + 1.655 X6 + 0.03 X10

  Malaysia                            Distressed                          60.4%                    Z =  0.869 + 6.315 X1 – 3.944 X3 + 2.698
                                      Non-distressed                      80.8%                      X4 + 0.73 X5 + 0.199 X10

  The Philippines                     Distressed                          60.6%                    Z =  0.423 + 4.801 X1 + 0.647 X2 + 0.23 X4 –
                                      Non-distressed                      85.8%                      1.787 X9 + 0.883 X11

  Singapore                           Distressed                          42.9%                    Z =  0.774 + 4.076 X1 + 2.175 X4
                                      Non-distressed                      88.3%
  Thailand                            Distressed                          67.5%                    Z =  0.112 + 8.038 X1 + 1.003 X6 – 0.219 X7 –
                                      Non-distressed                      85.1%                      0.367 X11 – 0.021 X14

  Vietnam                             Distressed                          61.6%                    Z =  0.394  3.172 X5 + 0.373 X8 + 0.819
                                      Non-distressed                      82.2%                      X12 + 0.161 X14

Note: The table compares the in-sample discriminant functions for the entire Association of Southeast Asian Nations (ASEAN) region and each ASEAN
country. The functions are reported for Approach 1 (in-sample testing for each country for the entire 20-year period). Total ASEAN is developed from a dataset
that includes all six major ASEAN countries. X1 denotes EBIT/TA. X2 denotes S/TA. X3 denotes NI/TA. X4 denotes RE/TA. X5 denotes EBITDA/TL. X6 denotes
WC/TA. X8 denotes CA/CL. X9 denotes CL/TA. X9 denotes CL/TA. X10 denotes NOCREDINT. X11 denotes TL/TA. X12 denotes FU/TL. X14 denotes MVE/TL.



indicators and market-based factors (Beaver et al., 2005;                         DD variable if it was not significant. Our empirical
Hillegeist et al., 2004; Pham et al., 2018; Shumway, 2001;                        results indicate that the DD variable was significant and
Singh & Mishra, 2016; Tinoco & Wilson, 2013; Wu                                   led to predictive improvement only in a small number of
et al., 2004). To avoid repetition of the results in this                         cases in the combined MDA-DD model, as shown in
paper, we do not report all the discriminant functions                            Table 8. Unlike in the results for the original accounting-
and distress prediction results for every country and                             based MDA model (shown in Table 6), those for the
period. Empirical results are reported only for the models                        MDA-DD model (shown in Table 8) have average
in which DD was significant and led to an improvement                             improvement of 4.74% (distressed) and 3.80% (non-dis-
in distress prediction. In addition, we limit the analysis to                     tressed) in periods when DD is significant in predicting
models using Approach 1 to develop specific discriminant                          financial distress. However, given that when DD is not
models for each country and each of the six periods.                              significant in other periods, there is 0% improvement, the
    First, we use DD as a single explanatory indicator for                        MDA-DD model improves predictive performance by an
distress prediction, in what we call the DD model. In                             overall average of only 0.90% for distressed firms and
most cases DD was significant in correctly predicting dis-                        0.63% for non-distressed firms across all periods and all
tressed firms (60% average accuracy compared with 61%                             six ASEAN countries.
for the accounting-based model). These results support                                These findings imply that many accounting-based
the conclusions by Agarwal and Taffler (2008), who com-                           MDA models already include a simplistic market-cap var-
pared accounting-based models with market-based                                   iable (or variables), such as the ratio of the market value
models for nonfinancial UK firms. They found little dif-                          of equity to total liabilities or assets (MVE/TL; MVE/TA)
ference in predictive performance between these                                   in their group of financial leverage indicators (Altman,
accounting-based and market-based models. However,                                1968; Altman et al., 1977; Hillegeist et al., 2004; Shumway,
the DD model has a much lower correct percentage in                               2001; Zmijewski, 1984). Our MDA models, developed
predicting non-distressed firms than our accounting-                              using key variables from prominent studies, also include
based model (56% for the DD model compared with 84%                               these leverage indicators. Some studies (Agarwal &
for the accounting-based model). Thus, the DD model                               Taffler, 2008; Doumpos et al., 2015) have shown that any
was more prone to Type 2 errors.                                                  improvement from adding a sophisticated market-based
    Second, we incorporate DD as an extra variable into                           variable such as DD is substantially diminished when a
the accounting-based MDA model, called the MDA-DD                                 primary market-cap variable has already been included
model. We conducted a stepwise analysis to eliminate the                          as an accounting variable.
                                                                                                                                                               10991158, 2024, 4, Downloaded from https://onlinelibrary.wiley.com/doi/10.1002/ijfe.2864, Wiley Online Library on [25/05/2026]. See the Terms and Conditions (https://onlinelibrary.wiley.com/terms-and-conditions) on Wiley Online Library for rules of use; OA articles are governed by the applicable Creative Commons License
4118                                                                                                                                          POWELL ET AL.



T A B L E 8 The predictive performance of financial distress improves when the distance to default (DD) is incorporated into the MDA
models: The MDA-DD models.

                                                                                                                            Stable          The entire
                                         AFC              Post-AFC        Pre-GFC          GFC             Post-GFC         period          period
                                         (1997–2000)      (2001–2003)     (2004–2006)      (2007–2009)     (2010–2012)      (2013–2016)     (1997–2016)
  Malaysia            Distressed                                                                                            +2.6%           +6.3%
                      Non-distressed                                                                                        +2.7%
  The Philippines     Distressed                                                           +3.7%
                      Non-distressed                      +0.4%                                                             +0.7%
  Singapore           Distressed                                                                                            +4.8%
                      Non-distressed                                                                                        +1.4%
  Thailand            Distressed                                                                                            +16.7%
                      Non-distressed     +14.8%           +6.4%
  Vietnam             Distressed                                                                           +0.9%
                      Non-distressed
  Total ASEAN         Distressed                                          +2.0%                                                             +0.9%
                      Non-distressed                                                                                        +0.2%

Note: The table shows the percentage to which the distressed/non-distressed predictive accuracy, as shown in Table 6 (using Approach 1), is improved by
adding a distance to default (DD) variable to the accounting-based MDA models. The table only shows results for the countries and periods where the addition
of DD improved the predictive performance of the MDA model. For example, the addition of DD did not result in significant improvement in Indonesia. As
such, the results are excluded from the table.




5 | C ON C L U S I ON S                                                          helping investors and managers to make appropriate
                                                                                 decisions.
This study uses accounting-based indicators to examine                               The study has important policy implications. It is
the performance of the MDA in predicting corporate                               essential to understand the difference in credit risk across
financial distress in six ASEAN countries. First, the study                      countries if regulators and policy makers achieve greater
identifies common accounting-based indicators in pre-                            banking integration, a goal desired within the region.
dicting financial distress, although individual models are                       The Basel III accord, in response to the financial prob-
developed for different countries and periods. Profitabil-                       lems during the GFC, was created by the Basel Commit-
ity ratios are found to perform best in predicting financial                     tee on Banking Supervision to fill a range of gaps in the
distress in the ASEAN countries, followed by liquidity                           pre-crisis regulatory framework and provide the basis for
ratios and then leverage ratios. These findings enable reg-                      a robust banking system that will help to prevent greater
ulators to compare and predict financial distress com-                           structural vulnerabilities. However, modelling credit risk
monly found in an increasingly integrated area, such as                          is a key challenge for banks in developing countries.
the ASEAN region. Second, the uniform MDA model for                              Each ASEAN country has its own banking system and
the entire ASEAN region and period generally performs                            risk models. The common indicators identified, and the
well in predicting financial distress. A lower rate of pre-                      specific MDA models developed for predicting financial
dictive accuracy is evident when volatility is high, such as                     distress can be used as benchmarks in developing credit
the beginning and end of crisis and noncrisis periods.                           risk models. In addition, although MDA models are gen-
Moreover, the single MDA model can be used to predict                            erally less accurate when applied to samples other than
financial distress 1 year ahead for companies in the                             the one developed, significant result can be obtained
ASEAN region. Finally, our empirical findings indicate                           when a single model is used. Thus, our study recom-
that including a market-based variable, the distance to                          mends a single model for the entire ASEAN region that
default, does not significantly improve the predictive per-                      would support the achievement of an integrated banking
formance of the accounting-based MDA models in pre-                              system going forward.
dicting financial distress. Thus, the MDA model can be                               At the government or regulatory level, knowledge of
used to predict corporate financial distress at compa-                           credit risk is essential for maintaining quality lending
nies in ASEAN countries before a default occurs,                                 practices and sufficient capital. Policy makers can use
                                                                                                                                                  10991158, 2024, 4, Downloaded from https://onlinelibrary.wiley.com/doi/10.1002/ijfe.2864, Wiley Online Library on [25/05/2026]. See the Terms and Conditions (https://onlinelibrary.wiley.com/terms-and-conditions) on Wiley Online Library for rules of use; OA articles are governed by the applicable Creative Commons License
POWELL ET AL.                                                                                                                              4119



our findings to estimate corporate financial distress and                Altman, E. I., Iwanicz-Drozdowska, M., Laitinen, E. K., & Suvas, A.
portfolio credit risk in the banking system. As a result,                    (2017). Financial distress prediction in an international context:
regulators can make timely regulatory adjustments to                         A review and empirical analysis of Altman's Z-score model.
                                                                             Journal of International Financial Management & Accounting,
minimize negative impacts on the financial system and
                                                                             28(2), 131–171.
the economy. At the bank level, lenders need to measure                  Asquith, P., Gertner, R., & Scharfstein, D. (1994). Anatomy of finan-
the credit risk or financial distress of firms because                       cial distress: An examination of junk-bond issuers. Quarterly
lenders need to be aware of borrowers' potential bad                         Journal of Economics, 109(3), 625–658.
debts in order to make provisions, evaluate risk, deter-                 Beaver, W. H. (1966). Financial ratios as predictors of failure. Jour-
mine a credit policy, and allocate capital. By helping to                    nal of Accounting Research, 4, 71–111.
detect banks with weak assets at an early stage so that                  Beaver, W. H., McNichols, M. F., & Rhie, J. (2005). Have financial
                                                                             statements become less informative? Evidence from the ability
they can minimize losses, the models developed in this
                                                                             of financial ratios to predict bankruptcy. Review of Accounting
study can facilitate these actions by banks.
                                                                             Studies, 10(1), 93–122.
                                                                         Bellovary, J., Giacomino, D., & Akers, M. (2007). A review of bank-
ACK NO WLE DGE MEN TS                                                        ruptcy prediction studies: 1930 to present. Journal of Financial
We would like to thank the editor-in-chief and the anon-                     Education, 33, 1–42.
ymous referees for their time and effort in reading the                  Bharath, S. T., & Shumway, T. (2008). Forecasting default with the
paper and providing insightful and valuable comments                         Merton distance to default model. Review of Financial Studies,
and suggestions. The paper has greatly benefited from                        21(3), 1339–1369.
                                                                         Bonsall, S. B., Bozanic, Z., & Fischer, P. E. (2013). What do manage-
their comments and suggestions. Open access publishing
                                                                             ment earnings forecasts convey about the macroeconomy?
facilitated by The University of Western Australia, as part                  Journal of Accounting Research, 51, 225–266.
of the Wiley - The University of Western Australia agree-                Boubaker, S., Cellier, A., Manita, R., & Saeed, A. (2020). Does cor-
ment via the Council of Australian University Librarians.                    porate social responsibility reduce financial distress risk? Eco-
                                                                             nomic Modelling, 91, 835–851.
DATA AVAILABILITY STATEMENT                                              Cao, Y., Liu, X., Zhai, J., & Hua, S. (2020). A two-stage Bayesian
The data that support the findings of this study are available               network model for corporate bankruptcy prediction. Interna-
from the corresponding author upon reasonable request.                       tional Journal of Finance and Economics, 20200810, 455–472.
                                                                             https://doi.org/10.1002/ijfe.2162
                                                                         Chen, C. C., Chen, C. D., & Lien, D. (2020). Financial distress pre-
ORCID                                                                        diction model: The effects of corporate governance indicators.
Dung V. Dinh https://orcid.org/0000-0003-3233-6273                           Journal of Forecasting, 39(8), 1238–1252.
Nam Thanh Vu https://orcid.org/0000-0002-9956-6658                       Chijoriga, M. M. (2008). Application of multiple discriminant analy-
Duc Hong Vo https://orcid.org/0000-0001-7823-0349                            sis (MDA) as a credit scoring and risk assessment model. Inter-
                                                                             national Journal of Emerging Markets, 6(2), 132–147.
R EF E RE N C E S                                                        Claessens, S., Djankov, S., & Klapper, L. (2003). Resolution of cor-
                                                                             porate distress in East Asia. Journal of Empirical Finance, 10(1–
Adusei, M., & Obeng, E. Y. T. (2019). Board gender diversity and
                                                                             2), 199–216.
    the capital structure of microfinance institutions: A global anal-
                                                                         Crespí-Cladera, R., Martín-Oliver, A., & Pascual-Fuster, B. (2021).
    ysis. The Quarterly Review of Economics and Finance, 71,
                                                                             Financial distress in the hospitality industry during the Covid-
    258–269.
                                                                             19 disaster. Tourism Management, 85, 104301.
Agarwal, V., & Taffler, R. (2008). Comparing the performance of
                                                                         Cultrera, L., & Brédart, X. (2016). Bankruptcy prediction: The case
    market-based and accounting-based bankruptcy prediction
                                                                             of Belgian SMEs. Review of Accounting and Finance, 15(1), 101–
    models. Journal of Banking & Finance, 32(8), 1541–1551.
                                                                             119. https://doi.org/10.1108/raf-06-2014-0059
Al-Dhamari, R., Al-Wesabi, H., Farooque, O. A., Tabash, M. I., & El
                                                                         Dang, V. C., & Tran, X. H. (2021). The impact of financial distress
    Refae, G. A. (2023). Does the investment committee mitigate
                                                                             on tax avoidance: An empirical analysis of the Vietnamese
    the risk of financial distress in GCC? The role of investment
                                                                             listed companies. Cogent Business & Management, 8(1),
    inefficiency. International Journal of Accounting and Informa-
                                                                             1953678.
    tion Management, 31, 321–354.
                                                                         Datastream. (2016) Thomson reuters datastream. Available at: Sub-
Allen, D. E., Powell, R., & Singh, A. K. (2015). Quantitative finan-
                                                                             scription Service.
    cial risk management. In A critique of credit risk models with
                                                                         Deakin, E. (1972). A discriminant analysis of predictors of business
    evidence from mid-cap firms (pp. 296–311). John Wiley & Sons.
                                                                             failure. Journal of Accounting Research, 10(1), 167–179.
Altman, E. I. (1968). Financial ratios, discriminant analysis and the
                                                                         Dinh, D. V., Powell, R. J., & Vo, D. H. (2021). Forecasting corporate
    prediction of corporate bankruptcy. Journal of Finance, 23(4),
                                                                             financial distress in the southeast Asian countries: A market-
    589–609.
                                                                             based approach. Journal of Asian Economics, 74, 101293.
Altman, E. I., Haldeman, R. G., & Narayanan, P. (1977). ZETA
                                                                         Doumpos, M., Niklis, D., Zopounidis, C., & Andriosopoulos, K.
    analysis: A new model to identify bankruptcy risk of corpora-
                                                                             (2015). Combining accounting data and a structural model for
    tions. Journal of Banking and Finance, 1(1), 29–54.
                                                                                                                                                       10991158, 2024, 4, Downloaded from https://onlinelibrary.wiley.com/doi/10.1002/ijfe.2864, Wiley Online Library on [25/05/2026]. See the Terms and Conditions (https://onlinelibrary.wiley.com/terms-and-conditions) on Wiley Online Library for rules of use; OA articles are governed by the applicable Creative Commons License
4120                                                                                                                                  POWELL ET AL.



     predicting credit ratings: Empirical evidence from European            Lopez, J. A., & Saidenberg, M. R. (1999). Evaluating credit risk
     listed firms. Journal of Banking & Finance, 50, 599–607.                   models. Journal of Banking & Finance, 24(1–2), 151–165.
du Jardin, P. (2009). Bankruptcy prediction models: How to choose           Ma'aji, M. M., Abdullah, N. A. H., & Khaw, K. L. (2018). Predicting
     the most relevant variables? Bankers, Markets & Investors, 98,             financial distress among SMEs in Malaysia. European Scientific
     39–46.                                                                     Journal, 14(7), 91–102.
Faelten, A., & Vitkova, V. (2014). Who gains from corporate res-            Magee, S. (2013). The effect of foreign currency hedging on the
     cues? Distressed M&A during four financial crises. http://                 probability of financial distress. Accounting and Finance, 53,
     citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.637.7773                  1107–1127.
Farooq, M., & Noor, A. (2021). The impact of corporate social               Mangena, M., Priego, A. M., & Manzaneque, M. (2020). Bank
     responsibility on financial distress: Evidence from developing             power, block ownership, boards, and financial distress likeli-
     economy. Pacific Accounting Review, 33(3), 376–396.                        hood: An investigation of Spanish listed firms. Journal of Cor-
Farooq, M., Noor, A., & Qureshi, S. F. (2022). The impact of corpo-             porate Finance, 64, 101636.
     rate social responsibility on financial distress: Empirical evi-       Männasoo, K., Maripuu, P., & Hazak, A. (2018). Investments,
     dence. Social Responsibility Journal, 18(5), 1050–1067.                    credit, and corporate financial distress: Evidence from central
García, C. J., & Herrero, B. (2021). Female directors, capital structure,       and Eastern Europe. Emerging Markets Finance and Trade,
     and financial distress. Journal of Business Research, 136, 592–601.        54(3), 677–689.
Gharghori, P., Chan, H., & Faff, R. (2006). Investigating the perfor-       Mariano, S. S. G., Izadi, J., & Pratt, M. (2021). Can we predict the
     mance of alternative default-risk models: Option-based versus              likelihood of financial distress in companies from their corpo-
     accounting-based approaches. Australian Journal of Manage-                 rate governance and borrowing? International Journal of
     ment, 31(2), 207–234.                                                      Accounting and Information Management, 29(2), 305–323.
Giesecke, K., & Weber, S. (2006). Credit contagion and aggregate losses.    Meeampol,       S.,    Lerskullawat,     P.,    Wongsomtham,         A.,
     Journal of Economic Dynamics and Control, 30(5), 741–767.                  Srinammuang, P., Rodpetch, V., & Noomoi, R. (2014). Applying
Grice, J. S., & Ingram, R. W. (2001). Tests of generalizability of Alt-         emerging market Z-score model to predict bankruptcy: A case
     man's bankruptcy prediction models. Journal of Business                    study of listed companies in the stock exchange of Thailand
     Research, 54(1), 53–61.                                                    (set). In Management, knowledge and learning international
Hillegeist, S., Keating, E., Cram, D., & Lundstedt, K. (2004). Asses-           conference (pp. 25–27). ToKnowPress.
     sing the probability of bankruptcy. Review of Accounting Stud-         Merton, R. C. (1974). On the pricing of corporate debt: The risk
     ies, 9(1), 5–34.                                                           structure of interest rates. The Journal of Finance, 29(2),
Huberty, C. J., & Olejnik, S. (2006). Applied MANOVA and discrimi-              449–470.
     nant analysis. John Wiley & Sons.                                      Mselmi, N., Lahiani, A., & Hamza, T. (2017). Financial distress pre-
Ito, T. (2007). Asian currency crisis and the international monetary            diction: The case of French small and medium-sized firms.
     fund, ten years later: Overview. Asian Economic Policy Review,             International Review of Financial Analysis, 50, 67–80.
     2(1), 16–49.                                                           Nguyen, L. T. M., Le, D., Vu, K. T., & Tran, T. K. (2023). The role of
Izan, H. (1984). Corporate distress in Australia. Journal of Bank-              capital structure management in maintaining the financial sta-
     ing & Finance, 8(2), 303–320.                                              bility of hotel firms during the pandemic—A global investiga-
Joh, S. W., & Jung, J. (2016). Top managers' academic credentials               tion. International Journal of Hospitality Management, 109,
     and firm value. Asia-Pacific Journal of Financial Studies, 45(2),          103366.
     185–221.                                                               Noga, T. J., & Schnader, A. L. (2013). Book-tax differences as an
Johnson, S., Boone, P., Breach, A., & Friedman, E. (2000). Corpo-               indicator of financial distress. Accounting Horizons, 27,
     rate governance in the Asian financial crisis. Journal of Finan-           469–489.
     cial Economics, 58, 141–186.                                           Ohlson, J. (1980). Financial ratios and the probabilistic prediction
Jung, K., & Kim, B. (2008). Corporate cash holdings and tax-                    of bankruptcy. Journal of Accounting Research, 18(1), 109–131.
     induced debt financing. Asia-Pacific Journal of Financial Stud-        Oz, I., & Simga-Mugan, C. (2018). Bankruptcy prediction models'
     ies, 37(6), 983–1023.                                                      generalizability: Evidence from emerging market economies.
Koh, H., & Killough, L. (1990). The use of multiple discriminant                Advances in Accounting, 41, 114–125.
     analysis in the assessment of the going-concern status of an           Pham, N. B. V., Do, T. T., & Vo, H. D. (2018). Financial distress and
     audit client. Journal of Business Finance & Accounting, 17(2),             bankruptcy prediction: An appropriate model for listed firms in
     179–192.                                                                   Vietnam. Economic Systems, 42(4), 616–624.
Li, Z., Crook, J., Andreeva, G., & Tang, Y. (2021). Predicting the risk     Pindado, J., Rodrigues, L., & de la Torre, C. (2008). Estimating
     of financial distress using corporate governance measures.                 financial distress likelihood. Journal of Business Research, 61(9),
     Pacific-Basin Finance Journal, 68, 101334.                                 995–1003.
Liang, D., Tsai, C. F., Lu, H. Y. R., & Chang, L. S. (2020). Combin-        Platt, H. D., & Platt, M. B. (2002). Predicting corporate financial dis-
     ing corporate governance indicators with stacking ensembles                tress: Reflections on choice-based sample bias. Journal of Eco-
     for financial distress prediction. Journal of Business Research,           nomics and Finance, 26(2), 184–199.
     120, 137–146.                                                          Pongsata, S., Ramage, J., & Lawrence, H. (2004). Bankruptcy pre-
Liou, D. K., & Smith, M. (2007). Macroeconomic variables and                    diction for large and small firms in Asia: A comparison of Ohl-
     financial distress. Journal of Accounting, Business and Manage-            son and Altman. Journal of Accounting and Corporate
     ment, 14, 17–31.                                                           Governance, 1(2), 1–13.
                                                                                                                                                   10991158, 2024, 4, Downloaded from https://onlinelibrary.wiley.com/doi/10.1002/ijfe.2864, Wiley Online Library on [25/05/2026]. See the Terms and Conditions (https://onlinelibrary.wiley.com/terms-and-conditions) on Wiley Online Library for rules of use; OA articles are governed by the applicable Creative Commons License
POWELL ET AL.                                                                                                                               4121



Rahman, S., Tan, L., & Hew, O. (2004). Identifying financial distress     Tinoco, M. H., & Wilson, N. (2013). Financial distress and bank-
     indicators of selected banks in Asia. Asian Economic Journal,            ruptcy prediction among listed companies using accounting,
     18(1), 45–58.                                                            market, and macroeconomic variables. International Review of
Routledge, J., & Gadenne, D. (2000). Financial distress, reorganiza-          Financial Analysis, 30, 394–419.
     tion and corporate performance. Accounting and Finance,              Todorov, V. (2007). Robust selection of variables in linear discrimi-
     40(3), 233–259.                                                          nant analysis. Statistical Methods and Applications, 15(3),
Salmi, T., & Martikainen, T. (1994). A review of the theoretical and          395–407.
     empirical basis of financial ratio analysis. Finnish Journal of      Vargas-Silva, C., Jha, S., & Sugiyarto, G. (2009). Remittances in
     Business Economics, 4(94), 426–448.                                      Asia: Implications for the fight against poverty and the pursuit
Sangsubhan, K., & Basri, M. C. (2012). The global financial cri-              of economic growth. SSRN Electronic Journal. https://doi.org/
     sis and ASEAN: Fiscal policy response in the case of                     10.2139/ssrn.1618025
     Thailand and Indonesia. Asian Economic Policy Review,                Vassalou, M., & Xing, Y. (2004). Default risk in equity returns. Jour-
     7(2), 248–269.                                                           nal of Finance, 59(2), 831–868.
Sayari, N., & Mugan, C. S. (2016). Industry-specific financial dis-       Vu, N. T., Nguyen, N. H., Tran, T., Le, B. T., & Vo, D. H. (2023). A
     tress modelling. Business Research Quarterly, 20(1), 45–62.              LASSO-based model for financial distress of the Vietnamese
Shahwan, T. M., & Habib, A. M. (2020). Do the efficiency of corpo-            listed firms: Does the covid-19 pandemic matter? Cogent Eco-
     rate governance and intellectual capital affect a firm's financial       nomics & Finance, 11(1), 2210361.
     distress? Evidence from Egypt. Journal of Intellectual Capital,      World Bank. (2019). GDP (current US$). http://data.worldbank.
     21(3), 403–430.                                                          org/indicator/NY.GDP.MKTP.CD
Shi, Y., & Li, X. (2019). An overview of bankruptcy prediction            Wu, Y., Gaunt, C., & Gray, S. (2004). A comparison of alternative
     models for corporate firms: A systematic literature review.              bankruptcy prediction models. Journal of Contemporary
     Intangible Capital, 15(2), 114–127.                                      Accounting and Economics, 6(1), 34–45.
Shleifer, A., & Vishny, R. W. (1997). A survey of corporate gover-        Zhang, W. (2015). R&D investment and distress risk. Journal of
     nance. Journal of Finance, 52, 737–783.                                  Empirical Finance, 32, 94–114.
Shumway, T. (2001). Forecasting bankruptcy more accurately: A             Zmijewski, M. E. (1984). Methodological issues related to the esti-
     simple hazard model. Journal of Business, 74(1), 101–124.                mation of financial distress prediction models. Journal of
Singh, B. P., & Mishra, A. K. (2016). Re-estimation and comparisons           Accounting Research, 22(2), 59–82.
     of alternative accounting-based bankruptcy prediction models
     for Indian companies. Financial Innovation, 2(6), 1–28.
Sirirattanaphonkun, W., & Pattarathammas, S. (2012). Default pre-
                                                                             How to cite this article: Powell, R. J., Dinh,
     diction for small-medium enterprises in an emerging market:
                                                                             D. V., Vu, N. T., & Vo, D. H. (2024).
     Evidence from Thailand. Seoul Journal of Business, 18(2), 25–54.
Taffler, R. J. (1983). The assessment of company solvency and per-           Accounting-based variables as an early warning
     formance using a statistical model. Accounting and Business             indicator of financial distress in crisis and
     Research, 13(52), 295–308.                                              non-crisis periods. International Journal of Finance
Thai, S. B., Goh, H. H., Teh, B. H., Wong, J. C., & Ong, T. S. (2014).       & Economics, 29(4), 4105–4124. https://doi.org/10.
     A revisit of the Altman Z-score model for companies listed in           1002/ijfe.2864
     Bursa Malaysia. International Journal of Business and Social
     Science, 5(12), 197–207.
                                                                                                                                 10991158, 2024, 4, Downloaded from https://onlinelibrary.wiley.com/doi/10.1002/ijfe.2864, Wiley Online Library on [25/05/2026]. See the Terms and Conditions (https://onlinelibrary.wiley.com/terms-and-conditions) on Wiley Online Library for rules of use; OA articles are governed by the applicable Creative Commons License
4122                                                                                                             POWELL ET AL.



A P P EN D I X A                                                    with the entire dataset (all countries) using Approach
                                                                    1. We found that the longer lag reduces overall accu-
                                                                    racy by 4.2% (76.8% accuracy falls to 72.6% across the
                                                                    two groups: distressed versus non-distressed). How-
TABLE A1          Number of companies in the research population.   ever, the result is still significant at a 99% level. We
                                                                    also examined how predictive performance changes if
                       Number of listed     Number of delisted
  Country              companies            companies
                                                                    we use a cash flow-related variable rather than the
                                                                    interest coverage ratio (ICR) as the distress variable.
  Indonesia            539                  372
                                                                    Two alternatives are used, EBITDA to interest expenses
  Malaysia             797                  363                     and operating cash flows to interest expenses, using
  The Philippines      271                   63                     Approach 1. Using EBITDA to interest expenses
  Singapore            143                  650                     showed no significant change (lowering the overall
  Thailand             563                  750                     predictive accuracy by 0.7%–76.1%). Using the operat-
  Vietnam              699                   88
                                                                    ing cash flows to interest expenses as a substitute for
                                                                    ICR had a more substantial change, reducing overall
Source: DataStream (2016).
                                                                    predictive accuracy by 9.2%–67.6%.


A P P EN D I X B

B.1 | The accounting-based MDA model using
lag-2
To determine whether using lag-2 has a material impact
on predictive performance, we ran a lag-2 MDA model
                                                                                                                                                                     10991158, 2024, 4, Downloaded from https://onlinelibrary.wiley.com/doi/10.1002/ijfe.2864, Wiley Online Library on [25/05/2026]. See the Terms and Conditions (https://onlinelibrary.wiley.com/terms-and-conditions) on Wiley Online Library for rules of use; OA articles are governed by the applicable Creative Commons License
POWELL ET AL.                                                                                                                                                 4123



A P P EN D I X C

C.1 | Results from Approaches 2 and 3



TABLE C1          The discriminant functions from out-of-sample modelling.

                                                 Period                                         Discriminant functions
  Total ASEAN                                    AFC–Pre-GFC                                    Z = 0.167 + 4.647 X1 + 0.306 X2  0.754 X3  0.818
                                                                                                  X6  1.017 X9
                                                 GFC–Current                                    Z = 0.518 + 6.470 X1 + 0.174 X2  0.641 X3 + 0.776
                                                                                                  X4 + 0.495 X6  0.818 X9
  Indonesia                                      AFC–Pre-GFC                                    Z = 0.059 + 3.447 X1 + 0.525 X2 + 2.015 X3–0.349
                                                                                                  X4–1.564 X9 + 0.036 X10
                                                 GFC–Current                                    Z = 0.602 + 5.060 X1 + 1.377 X6 + 0.052 X10
  Malaysia                                       AFC–Pre-GFC                                    Z = 0.952 + 7.239 X1 + 0.535 X2 – 4.041 X3 + 2.454
                                                                                                  X4 + 0.169 X10
                                                 GFC–Current                                    Z = 0.672 + 4.522 X1 + 2.951X4 + 0.239 X10 – 0.465
                                                                                                  X11
  The Philippines                                AFC–Pre-GFC                                    Z = 0.209  3.698 X1 – 0.688 X2 + 0.189 X4 + 2.052
                                                                                                  X9
                                                 GFC–Current                                    Z = 1.523 + 8.473 X1 + 0.58 X2 – 3.488
                                                                                                  X3 + 1.246X4 + 1.018 X6 – 1.926 X9 + 2.425 X11
  Singapore                                      AFC–Pre-GFC                                    Z = 1.037 + 2.31 X1 + 2.03 X3 – 2.949 X11
                                                 GFC–Current                                    Z = 0.957 + 11.992 X1 + 1.771 X4 – 1.204 X5
  Thailand                                       AFC–Pre-GFC                                    Z = 0.414  8.415 X1 + 0.594 X5 + 1.219
                                                                                                  X11 + 0.024 X14
                                                 GFC–Current                                    Z = 0.160 + 8.200 X1 + 1.682 X6 – 0.249 X8 + 0.07
                                                                                                  X10 – 0.017 X14
                                         Profitability                                           Liquidity                                    Leverage

                                         X1          X2         X3         X4         X5         X6         X8         X9         X10         X11         X14
  AFC—Pre-GFC                            6           4          4          3          1          1          0          3          2           2           1
    (Approach 2)
  GFC–Current (Approach 3)               6           2          2          3          0          4          1          2          3           2           1

Note: The table presents the out-of-sample discriminant functions for each of the Association of Southeast Asian Nations (ASEAN) countries. The functions are
reported for Approach 2 (a forward-testing out-of-sample discriminant function developed from the first half of the data sample, from the Asian financial crisis
to pre-global financial crisis [GFC], which is then applied to the second half of the data sample); and Approach 3 (a backward-testing out-of-sample
discriminant function developed from the second half of the data sample, from the GFC to the stable period, which is then applied to the first half of the data
sample). The data for all of ASEAN (total ASEAN) is developed from a dataset that includes all six ASEAN countries. The bottom section of the table
summarizes the frequency at which each ratio appears in the discriminant functions. X1 denotes EBIT/TA. X2 denotes S/TA. X3 denotes NI/TA. X4 denotes
RE/TA. X5 denotes EBITDA/TL. X6 denotes WC/TA. X8 denotes CA/CL. X9 denotes CL/TA. X10 denotes NOCREDINT. X11 denotes TL/TA. X14 denotes
MVE/TA.
                                                                                                                                                                   10991158, 2024, 4, Downloaded from https://onlinelibrary.wiley.com/doi/10.1002/ijfe.2864, Wiley Online Library on [25/05/2026]. See the Terms and Conditions (https://onlinelibrary.wiley.com/terms-and-conditions) on Wiley Online Library for rules of use; OA articles are governed by the applicable Creative Commons License
4124                                                                                                                                               POWELL ET AL.



TABLE C2           Percentage of correct prediction rates from out-of-sample testing in multiple discriminant analysis models.

                                                   AFC          Post-AFC                Pre-GFC           GFC          Post-GFC      Stable period
                                                   Approach 3 Back-testing                                Approach 2 Forward-testing
  Indonesia                Distressed              70.1%             63.3%              63.6%             75.0%             80.0%              50.0%
                           Non-distressed          78.5%             88.5%              84.6%             79.8%             92.3%              98.9%
                           χ2                      119.663***        63.820***          54.455***         28.933***         63.710***          86.883***
  Malaysia                 Distressed              31.7%             56.0%              46.2%             60.5%             73.7%              65.8%
                           Non-distressed          94.8%             85.4%              88.4%             80.8%             84.1%              68.2%
                           χ2                      14.303***         34.215***          30.636***         49.480***         90.695***          15.192***
  The Philippines          Distressed              50.0%             51.7%              47.1%             85.2%             44.7%              46.8%
                           Non-distressed          60.2%             91.6%              87.4%             67.5%             87.3%              92.9%
                           χ   2
                                                   15.311**          54.820***          33.146***         38.190***         65.561***          77.822***
  Singapore                Distressed              46.4%             52.0%              80.0%             75.0%             52.9%              61.9%
                           Non-distressed          91.0%             91.8%              78.7%             87.9%             78.4%              65.7%
                           χ   2
                                                   2.155             21.013***          29.602***         42.125***         18.569***          7.005
  Thailand                 Distressed              68.6%             55.3%              67.3%             62.0%             87.5%              25.0%
                           Non-distressed          81.2%             82.7%              93.9%             91.0%             82.3%              94.0%
                           χ2                      82.333***         32.030***          72.472***         85.226***         52.855***          45.946***
  Total ASEAN              Distressed              53.5%             45.2%              38.9%             68.4%             67.6%              60.1%
                           Non-distressed          87.7%             91.7%              92.4%             71.0%             71.6%              75.2%
                           χ2                      68.709***         144.343***         13.938-           135.048***        169.720***         146.255***

Note: The table presents the distressed/non-distressed predictive accuracy 1 year ahead of the distress of firms for Association of Southeast Asian Nations
(ASEAN) countries over different periods. The firms are identified as distressed or non-distressed based on the interest coverage ratio (ICR). Total ASEAN is
developed from a dataset that includes six ASEAN countries. The results are reported for Approach 2 (a forward-testing out-of-sample discriminant function
developed from the first half of the data sample, 1997–2006, and then applied to the second half, 2007–2016); and Approach 3 (a backward-testing out-
of-sample discriminant function developed from the second half of the data sample, 2007–2016, and then applied to the first half, 1997–2006). For example,
where Approach 2 is applied to the global financial crisis (GFC), Indonesia had 75.0% of distressed firms that were correctly classified as distressed and 25.0%
that were incorrectly classified as non-distressed (Type I error), whereas 79.8% of non-distressed firms were correctly classified as non-distressed and 20.2%
incorrectly classified as distressed (Type II error). Vietnam is excluded from the analysis because insufficient data was available to build a model from Asian
financial crisis (AFC) to Pre-GFC. The table also presents the significance results determined by the chi-square test (χ 2) concerning the multiple discriminant
analysis (MDA) model's ability to discriminate between distressed and non-distressed firms. ** and *** denote significance at the 95% and 99% levels.
