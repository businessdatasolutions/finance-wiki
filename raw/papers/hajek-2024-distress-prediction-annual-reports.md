---
title: "Corporate financial distress prediction using the risk-related information content of annual reports"
authors:
  - "Hajek, P."
  - "Munk, M."
year: 2024
publication_date: 2024-06-22
venue: "Information Processing and Management, 61(5), 103820"
doi: "10.1016/j.ipm.2024.103820"
url: "https://doi.org/10.1016/j.ipm.2024.103820"
pdf: "../assets/hajek-2024-distress-prediction-annual-reports.pdf"
page_count: 21
notes: |
  Converted with pdftotext -layout 26.02.0. Original filename
  "1-s2.0-S0306457324001791-main.pdf" (Elsevier ScienceDirect generic naming) —
  slugged on first-author surname + year + first content keywords.
  "Available online 22 June 2024"; print volume 61(5).
  Czech Sciences Foundation grant 22-22586S.
---

                                                Information Processing and Management 61 (2024) 103820


                                                          Contents lists available at ScienceDirect


                                       Information Processing and Management
                                                  journal homepage: www.elsevier.com/locate/ipm




Corporate financial distress prediction using the risk-related
information content of annual reports✩
Petr Hajek a ,∗, Michal Munk b,a
a Faculty of Economics and Administration, University of Pardubice, Studentska 95, Pardubice, 53210, Czech Republic
b Department of Computer Science, Constantine the Philosopher University in Nitra, Tr. A. Hlinku 1, 949 74, Nitra, Slovakia




ARTICLE               INFO                              ABSTRACT

Keywords:                                               This study presents a financial distress prediction model focusing on the linguistic analysis
Financial distress                                      of risk-related sections of corporate annual reports. Here, we introduce a novel methodology
Prediction                                              that leverages BERT-based contextualized embedding models for nuanced extraction of financial
Annual report
                                                        sentiment and topic coherence. This stands in contrast to existing research, which predominantly
Financial sentiment
                                                        relies on dictionary-based or non-contextual word embeddings and addresses their limitations
Semi-supervised learning
XGBoost
                                                        in context sensitivity. Furthermore, we apply an innovative financial distress prediction model
                                                        that combines the robust XGBoost algorithm with unsupervised outlier detection techniques.
                                                        This hybrid model is specifically designed to tackle the issue of class imbalance, a persistent
                                                        challenge in financial distress prediction. The efficacy of the proposed model is empirically
                                                        validated using a comprehensive dataset of 2545 companies listed on major global stock
                                                        exchanges. Our findings indicate that the introduced model not only significantly outperforms
                                                        most existing state-of-the-art financial distress prediction models in terms of predictive accuracy,
                                                        but also significantly outperforms the Loughran & McDonald dictionary-based approach and the
                                                        Word2Vec model, underlining its potential as a superior analytical tool for financial distress
                                                        prediction.




1. Introduction

    Financial distress can be caused by a combination of internal and external factors (Habib et al., 2020). Examples of internal factors
include poor financial management, ineffective business strategies, or inadequate capital structure. External factors encompass
economic downturns, increased competition, or regulatory changes. Financial distress can have significant implications for all
stakeholders, resulting in a loss of investor confidence, reduced creditworthiness, and layoffs. Although financial distress does
not always result in corporate failure, a prolonged and significant decline in a company’s financial health can often lead to
bankruptcy. This situation poses significant financial risks to investors and creditors, who may face substantial losses (Andreou
et al., 2021). It can also impact the broader economy, particularly if large companies or multiple companies within the same
sector are affected. Therefore, to protect their interests, stakeholders need to be aware of potential indicators of imminent distress.
Companies experiencing financial difficulties often exhibit indicators such as reduced profits, declining cash flow, increasing debt,
and deteriorating asset quality. Additionally, there may be frequent changes in management or business structure in an effort to
improve the situation (Liang et al., 2020).


 ✩ Funding: This research is supported by the Czech Sciences Foundation [grant number 22-22586S].
 ∗ Corresponding author.
     E-mail addresses: petr.hajek@upce.cz (P. Hajek), mmunk@ukf.sk (M. Munk).

https://doi.org/10.1016/j.ipm.2024.103820
Received 20 September 2023; Received in revised form 21 May 2024; Accepted 15 June 2024
Available online 22 June 2024
0306-4573/© 2024 Elsevier Ltd. All rights are reserved, including those for text and data mining, AI training, and similar technologies.
P. Hajek and M. Munk                                                                                Information Processing and Management 61 (2024) 103820




                               Fig. 1. Illustration of risk factors presented in annual reports of distressed companies.




    Annual reports, particularly the 10-K (for U.S. companies) and 20-F (for foreign companies) forms mandated by the U.S. Securities
and Exchange Commission (SEC) for publicly traded companies, offer a rich amalgamation of both quantitative and qualitative
data that enhances the accuracy of predictions related to corporate financial distress (Li et al., 2021). These filings present an
encompassing overview of a corporation’s financial health, integrating fundamental financial statements that enable systematic
scrutiny of a company’s profitability, asset configuration, liability structure, and cash flow dynamics. In tandem with financial data,
10-K and 20-F forms mandate the disclosure of a broad spectrum of risk factors that the company perceives as pertinent. These factors
span both operational risks specific to the company and larger, macroeconomic and sector-specific risks. The systematic analysis of
these identified risk factors significantly contributes to forecasting the impact of these risks on future financial performance (Myskova
& Hajek, 2020). Furthermore, the Management’s Discussion and Analysis (MD&A) section of 10-K forms offers an invaluable lens
into the management’s viewpoint on company performance, future prospects, and strategic direction. It also provides insights into
potential uncertainties, market risks or challenges that the company anticipates (Caserio et al., 2019).
    The body of research consistently corroborates the significance of financial indicators, derived from annual reports’ financial
statements, in predicting financial distress (Habib et al., 2020; Zhang et al., 2022). More recent research substantiates their continued
relevance, underscoring that key indicators such as profitability, liquidity, solvency, and cash flow dynamics offer deep insights
into a corporation’s financial health and likelihood of encountering financial distress (Abedin et al., 2023; Sun et al., 2020; Zhu
et al., 2022). In addition, natural language processing (NLP) has enabled the effective extraction of sentiment and contextual data
from annual reports, adding a novel dimension to financial distress prediction beyond traditional financial indicators (Che et al.,
2024; Chen et al., 2023; Mai et al., 2019; Nguyen & Huynh, 2022). Overall, the earlier research concludes that the combination
of quantitative and qualitative data contained in annual reports, when synthesized effectively, allows for the creation of robust,
comprehensive models capable of accurately predicting a corporation’s future performance and potential for financial distress.
    The importance of the risk factors and MD&A sections as a significant predictor of corporate financial performance has been
substantiated in earlier research (Campbell et al., 2014). However, the research to date has tended to focus on dictionary-based (Chen
et al., 2023; Nguyen & Huynh, 2022) and non-contextualized embedding-based approaches (Hajek & Munk, 2023; Mai et al., 2019),
which suffer from several major drawbacks. Dictionary-based methods require human intervention to update and maintain the
word lists, making them hard to scale. These methods also heavily rely on word frequency, disregarding the nuanced interactions
between different terms. Both dictionary-based and non-contextualized embedding-based methods may misinterpret words that have
different meanings in different situations, meaning the same word is represented in the same way regardless of its context. This
can be problematic when analyzing complex documents like annual reports, which have diverse topics and use industry-specific
jargon (Gupta et al., 2023; Shang et al., 2023). To address these issues, here we use contextualized embedding-based models,
which, especially when combined with topic models, offer a more nuanced, scalable, and insightful approach. Contextual embeddings
provide dynamic word representations, adjusting the word vector based on surrounding words. This makes it far superior at capturing
the meaning of a word in different context. Furthermore, contextualized embeddings can capture high-dimensional semantic spaces
that can represent complex relationships between terms, which is essential for understanding the intricacies of corporate reporting.
When combined with topic models, the approach not only understands the context but can also categorize content into meaningful
topics. This is crucial for summarizing and understanding the key points in voluminous annual reports. The extracts from annual
reports in Fig. 1 illustrate how risk factors can provide useful thematic and sentiment information for financial distress prediction
models. In these cases, managers suggest potential financial difficulties associated with excessive leverage or insufficient liquidity.
Highlighting these themes in a negative context may, therefore, be an indicator of future financial distress. The incorporation of
context allows for more accurate sentiment analysis, which is crucial when assessing managerial communications. Overall, the
proposed combination of sentiment analysis and topic modeling provides for a rich set of features that can be used for further
financial distress prediction, making the approach versatile and robust.
    The aim of current research in financial distress prediction is to provide managerial insights that enable companies to anticipate
and mitigate the risks of financial distress (Habib et al., 2020). Using contextualized embedding-based models, this study can
contribute to the field by providing a more nuanced analysis of risks in managerial communication and by providing a context
for financial statement analysis of managerial views on risks associated with corporate financial performance. This approach can

                                                                          2
P. Hajek and M. Munk                                                                        Information Processing and Management 61 (2024) 103820


identify subtle indicators of financial distress that traditional methods might overlook. Furthermore, the integration of these NLP
insights with machine learning models can lead to more precise predictions, enabling companies to make better-informed financial
and strategic decisions.
    In the real world, the number of companies that go through financial distress is significantly lower than those that do not,
severely affecting the model’s ability to identify the financially distressed companies. Failing to correctly identify a company that
is actually in financial distress, which results in low sensitivity, can have significant economic repercussions. Therefore, achieving
high sensitivity is particularly important in this context. Methods such as under-sampling the majority class (Du et al., 2020) or
over-sampling the minority class (Sun et al., 2020) have predominantly been used in previous research in this area. However, while
under-sampling may result in loss of important data points from the majority class, over-sampling could make the model prone to
overfitting. Alternatively, cost-sensitive (Ghatasheh et al., 2020) and ensemble learning (Tsai et al., 2021; Wang & Zhang, 2023)
have been utilized. Again, a focus on the minority class through cost penalties might lead the model to overfit to the minority class,
compromising the overall generalizability of the model. The effectiveness of cost-sensitive learning can also be dependent on the
specific distribution of the data. Without proper handling, ensemble methods may perpetuate or even exacerbate the class imbalance
problem. Moreover, some techniques like bagging might not inherently account for class imbalance. In a related study, Zoričák et al.
(2020) explored the utilization of unsupervised learning techniques to identify financially distressed companies, drawing inspiration
from established outlier detection methodologies. However, there exists a paucity of research concerning the synergistic integration
of supervised and unsupervised approaches to enhance detection performance. To address these limitations, the present study aims
to augment the predictive capabilities of eXtreme Gradient Boosting (XGBoost) – a state-of-the-art machine learning algorithm –
by incorporating a data sampling component specifically designed to mitigate the challenges posed by extreme class imbalance in
financial distress prediction. In this context, we build upon the semi-supervised learning (SSL) framework (Zhao & Hryniewicki,
2018), which is a semi-supervised ensemble algorithm that harmonizes the capabilities of multiple unsupervised outlier detection
techniques with an XGBoost classifier.
    SSL represents a machine learning paradigm that utilizes a hybrid of labeled and unlabeled data during the model training phase.
This approach delicately navigates the spectrum between unsupervised learning – with its exclusive reliance on unlabeled data –
and supervised learning, which necessitates an abundance of labeled data. In the specific context of financial distress prediction,
SSL offers a range of striking advantages, each substantiated by recent empirical research and corroborated by theoretical findings.
Firstly, the process of labeling financial data – such as assigning binary classifications to firms as either financially distressed or not –
can be labor-intensive and financially burdensome (Zhou et al., 2021). SSL efficiently harnesses the vast quantity of readily available
unlabeled data, rendering it a markedly cost-efficient alternative in comparison to fully supervised learning methods (Zhu et al.,
2021). Secondly, SSL demonstrates a heightened robustness to labeling errors or ‘‘noise’’ in the data, surpassing fully supervised
methods in this respect (Karlos et al., 2016). This resilience underscores its value for financial distress prediction, a context wherein
data may be prone to various inconsistencies or inaccuracies (Han & Wang, 2021). Thirdly, SSL methodologies have proven capable
of outperforming fully supervised methods, particularly in scenarios characterized by scarce labeled data (Kostopoulos et al.,
2017; Zhu et al., 2021). Finally, SSL facilitates domain adaptation, empowering models to effectively generalize across diverse but
interrelated tasks. Applied to financial distress prediction, this capability implies that a model trained on data from one industry or
temporal period can be adapted to formulate predictions for another industry or time frame (Huang et al., 2012; Kostopoulos et al.,
2017). In summary, SSL emerges as a robust, cost-efficient, and adaptable tool for financial distress prediction.
    The remainder of this study is organized as follows. Section 2 reviews the existing literature on the use of textual data in
financial distress prediction. Our research objectives and contributions are presented in Section 3. Section 4 outlines how risk-
relevant information is extracted and exploited from annual reports using contextualized word embeddings, and how the proposed
model builds on the semi-supervised framework. Section 5 presents the dataset used for validation. Section 6 presents the results of
the experiments and discusses them. Section 7 summarizes the research findings and their implications, and presents directions for
future research.

2. Related work

    In their landmark study, Cecchini et al. (2010) pioneered an examination of the influence of textual information gleaned
from annual reports on the performance of predicting financial distress. They notably pinpointed frequently occurring and highly
discriminatory terms within the Management Discussion and Analysis (MD&A) sections of annual reports, thereby enriching the
traditionally quantitative financial indicators. The result was a substantial enhancement in the prediction accuracy, witnessing
a commendable increase of 17.1% above the baseline model, which was primarily comprised of the Altman model’s financial
ratios. Remarkably, when utilizing solely textual data, the model achieved an 80.0% accuracy rate, surpassing the performance
of the commonly adopted Altman model. However, certain methodological limitations in the Cecchini et al. (2010) study must
be acknowledged. Predominantly, the bag-of-words approach adopted by the authors led to a sparse and high-dimensional
representation of documents, which can pose significant challenges for conventional machine learning methods. Furthermore, the
reliability of the discriminatory capacity of the words contained in the annual reports of financially distressed companies may be
constrained due to the limited sample size of such entities.
    To address the challenges associated with high-dimensionality and sparseness presented by the bag-of-words method in document
representation, later research has leaned toward employing dictionary-based methods to evaluate sentiment and other linguistic
indicators, such as uncertainty or modality. Notably, Hajek et al. (2014) demonstrated that the textual features derived via the
application of finance-specific dictionaries bear more relevance to the prediction of financial distress than the features extracted

                                                                     3
P. Hajek and M. Munk                                                                     Information Processing and Management 61 (2024) 103820


using general-purpose dictionaries. Their results indicate the superior predictive efficacy of domain-specific linguistic cues in the
context of financial distress forecasting. Consequent research has thus concentrated on the utilization of domain-specific dictionaries.
    The study by Nguyen and Huynh (2022), conducted on a comprehensive sample of U.S. enterprises, incorporated various factors,
such as company characteristics, financial indicators, and measures of financial sentiment. It demonstrated that incorporating
dictionary-based financial sentiment derived from 10-K filings substantially enhanced the predictive accuracy of the classification
models. This improvement was observed across all segments of the sample, including small, medium, and large enterprises. The
results suggested that the incorporation of textual data can augment traditional numerical data in predictive modeling, potentially
offering a more nuanced understanding of corporate financial health. Similarly, Chen et al. (2023) explored the potential impact
of incorporating dictionary-based communicative values derived from annual reports into machine learning models designed to
predict corporate bankruptcy. The study utilized observations of U.S. firms between 1994 and 2018. The findings indicated that
the inclusion of variables based on the text’s communicative value from annual reports significantly mitigated the models’ Type II
errors, while maintaining Type I errors at a minimal level, particularly in the context of short-term bankruptcy forecasts.
    Wang et al. (2020b) sought to achieve a more nuanced linguistic representation of annual reports, fusing the dictionary-based
methodology with a term frequency-based bag-of-words model. In terms of performance, the model relying on financial features
outperformed the others, achieving an AUC of 0.912. This was followed by the bag-of-words model, achieving an AUC of 0.845.
In contrast, the financial dictionary-based model demonstrated the least impressive performance of the individual models, with an
AUC of 0.681. These findings suggest that despite their interpretability, dictionary-based linguistic indicators alone do not offer
substantial predictive capacity. However, a noteworthy improvement in the overall predictive performance for financial distress
was observed, with an AUC of 0.961, when features from these methodologies were amalgamated. It is crucial to note, though, that
this augmented performance was largely attributable to the contribution of the bag-of-words linguistic features.
    Dictionary-based sentiment analysis is a method that employs a predefined list of words, with each word assigned a specific
sentiment score. This methodology, while comprehensible and straightforward in application, is not without limitations. Primarily,
it fails to account for the context in which words are utilized. The sentiment dictionary may lack comprehensive coverage of all
possible words in a given text, particularly when specialized jargon is used, leading to potential inaccuracies in sentiment scoring.
Additionally, sentiment dictionaries typically consist of individual words and, hence are incapable of accommodating phrases whose
overall sentiment may differ from that of the individual words. For instance, ‘high’ might be perceived as positive, but ’high risk’
might carry negative connotations in a financial context. Furthermore, the sentiment intensity associated with positive or negative
words is not uniformly distributed. Many dictionary-based sentiment analysis methodologies fail to discern such subtle gradations.
Lastly, the sentiment scores in dictionaries are frequently determined subjectively, and could potentially embody bias. The sentiment
associated with a specific word can vary among individuals, and this complexity is often unaccounted for in sentiment dictionaries.
In order to circumvent these inherent limitations, more sophisticated techniques, such as machine learning and deep learning-based
sentiment analysis methods, are employed. These advanced methodologies are capable of considering context, managing negations,
and adapting to an extensive variety of vocabulary and idiomatic expressions.
    To address the issues highlighted above, recent studies have turned to the application of low-dimensional dense feature
representations, specifically using word embeddings. A prime example of this is the employment of the Word2Vec model by Mai
et al. (2019), which capably encapsulated both semantic and contextual information of words from annual reports. This was
achieved through simple averaging of word embeddings per document, supplemented by two fully connected layers, culminating in
a comparatively accurate financial distress prediction model, that surpassed the performance of more intricate convolutional neural
network-based models. Contrarily, Matin et al. (2019) and Huang, Yao et al. (2023) concluded that word embeddings derived from
auditors’ reports are richer in informative content than those based on managerial statements within annual reports. A noteworthy
limitation of the Word2Vec model is its lack of support for explicit sentence representation. In contrast, the BERT language model
generates context-aware sentence and word representations (Suzuki et al., 2023). This capability was harnessed by Li et al. (2021) in
their creation of a financial domain sentiment dictionary using the BERT model, which surpassed the performance of the traditional
dictionary proposed by Loughran and McDonald (2011). Jiang et al. (2022) demonstrated that semantic features extracted from
the BERT model possess stronger predictive power than sentiment-based features. Hajek and Munk (2023) addressed the task of
predicting financial distress by leveraging the potential significance of managerial emotional states. The study proposed a deep
learning architecture, which amalgamated the analysis of managerial emotional states, derived from speech emotion recognition,
and a sentiment analysis of earnings conference call transcripts based on FinBERT. FinBERT, a domain-specific version of the state-of-
the-art BERT language model, was pre-trained on a comprehensive corpus of financial texts. The data acquired from these analyses
were integrated with traditional financial indicators to refine the accuracy of financial distress prediction. The empirical results
from this study underscore the crucial influence of managerial sentiment and emotional states in the prediction of financial distress.
Similarly, Wang et al. (2023) report the association between the emotional states of top executives, as detected from their Twitter
posts using a deep learning model, and the financial performance of their respective companies.
    Table 1 provides a summary of related studies, highlighting the data sources, methodology utilized, and the resultant classifica-
tion accuracy of each study.

3. Research objectives and contributions

   Our main objective is to make the best use of financial sentiment and coherent topics from corporate annual reports to improve
the predictive power of financial distress prediction models.

                                                                   4
P. Hajek and M. Munk                                                                                  Information Processing and Management 61 (2024) 103820

Table 1
Summary of financial distress prediction using financial and textual information.
 Study                        Data source                      Methods for extracting textual features Prediction method Performance
 Cecchini et al. (2010)   MD&A                                 bag-of-words                          SVM                Acc=0.839
 Hajek et al. (2014)      10-K                                 L&M                                   SVM                Acc=0.838, F1=0.834, AUC=0.891
 Matin et al. (2019)      annual reports of Danish             word2vec                              CNN+LSTM           AUC=0.844
                          companies
 Mai et al. (2019)        MD&A                                 word2vec                              CNN                Acc=0.712, AUC=0.856
 Tang et al. (2020)       10-K                                 pos./neg. sentiment                   RNN                Acc=0.939, F1=0.934, AUC=0.936
 Wang et al. (2020b)      annual reports of Chinese            HowNet sentiment                      RanSub             Acc=0.964, AUC=0.952
                          companies
 Wang et al. (2020b)      annual reports of Chinese            L&M+bag-of-words                      RanSub             AUC=0.961
                          companies
 Li et al. (2021)         annual reports of Chinese            BERT                                  DNN                Acc=0.901, F1=0.896
                          companies
 Li et al. (2021)         annual reports of Chinese            L&M                                   DNN                Acc=0.857, F1=0.852
                          companies
 Huang, Yao et al. (2023) MD&A                                 word2vec                              XGBoost            Acc=0.921, F1=0.494, AUC=0.912
 Zhao et al. (2022)       MD&A                                 sentiment score                       CatBoost           AUC=0.976
 Jiang et al. (2022)      annual reports of Chinese            BERT                                  RF                 AUC=0.936
                          companies
 Nguyen and Huynh (2022) 10-K, MD&A                            L&M                                   LR                 AUC=0.855
 Hajek and Munk (2023)    Earn. conf. calls                    FinBERT sentiment+emotions            LSTM               Acc=0.954, F1=0.953, AUC=0.992
 Chen et al. (2023)       10-K                                 L&M+readability                       XGBoost            Acc=0.929
 This study               risk-related sections of 10-K        BERTopic+ FinBERT sentiment           SSL
                          and 20-F

Legend: CNN — convolutional neural network, L&M — sentiment indicators from the L&M dictionary (Loughran & McDonald, 2011), LR — logistic regression,
LSTM — long short-term memory, RanSub — random subspace, RF — random forest, RNN — recurrent neural network, SSL — semi-supervised learning, SVM
— support vector machine.




    Existing research on combining financial and textual information to predict financial distress has several important limitations.
The first limitation pertains to the scope of the data used in the models. Existing approaches have either adopted a broad perspective,
encompassing entire annual reports, or have restricted their focus to the MD&A sections. This restricted focus excludes a pivotal
aspect of financial reporting, namely the risk factor disclosures. Previous studies suggest that firms grappling with a higher degree
of risk tend to disclose more risk factors in this section (Campbell et al., 2014). Inclusion of this risk factor section may, therefore,
lead to a more complete and accurate prediction of financial distress.
    The second limitation arises from the methods used for extracting textual features. While existing studies have acknowledged
the superior effectiveness of contextualized word embeddings over traditional dictionary-based approaches (Hajek & Munk, 2023;
Jiang et al., 2022; Li et al., 2021), these studies have often analyzed overall document sentiment without considering the specific
topics being discussed. By not considering the corresponding subject matter, these studies overlook the nuanced information that is
topic-dependent, thereby limiting the accuracy of the sentiment analysis.
    The final limitation involves the prediction methodologies employed in existing studies. So far, the focus has been primarily
on supervised learning methods, with semi-supervised methods largely neglected. This bias toward supervised learning overlooks
the inherent advantages that semi-supervised methods may offer for financial distress prediction. Semi-supervised methods cannot
only effectively leverage the unlabeled data to improve prediction accuracy and robustness, but are also particularly beneficial in
situations where labeled data is scarce or expensive to obtain, a scenario common in financial distress prediction.
    Therefore, the current study addresses these limitations and contributes to the existing research by incorporating risk factor
sections in the analysis, considering sentiment and topic information, and exploring the use of semi-supervised learning methods. We
hypothesize that this will not only improve the prediction accuracy of financial distress models but also enhance our understanding
of financial distress mechanisms. Overall, this paper presents several key contributions:

    • This investigation pioneers the integration of advanced BERT-based contextualized embedding models for the extraction
      of financial sentiment and thematically coherent topics from corporate annual reports. Contrary to prior research, which
      predominantly employed dictionary-based or non-contextualized word embedding techniques for predicting financial distress,
      the current study addresses the limitations of such methods in adaptability across varying contexts and sentiment sources.
    • Formulating an innovative financial distress prediction model by synergistically amalgamating the XGBoost method with
      unsupervised outlier detection mechanisms. This holistic framework is specifically used to address the prevalent issue of class
      imbalance, thereby enhancing its efficacy in identifying financially distressed companies.
    • Using a comprehensive dataset of 2545 globally listed companies across major stock exchanges, this study empirically
      demonstrates that the introduced model outperforms existing state-of-the-art financial distress prediction models in terms of
      predictive accuracy.

4. Financial distress prediction framework based on semi-supervised learning

   The conceptual architecture of the financial distress prediction framework is delineated in Fig. 2. The proposed framework is
designed to leverage the robust capabilities of XGBoost, while concurrently addressing the critical challenge of severe class imbalance

                                                                                 5
P. Hajek and M. Munk                                                                               Information Processing and Management 61 (2024) 103820




                                                Fig. 2. Financial distress prediction framework.




prevalent in financial distress datasets. Through rigorous empirical validation, we aim to establish that our methodology surpasses
conventional supervised machine learning methods – previously employed in extant literature – in terms of predictive performance.
Moreover, we intend to demonstrate that our approach yields superior outcomes with respect to the proposed risk-related linguistic
model, further accentuating its effectiveness.

4.1. Features extracted from annual reports

4.1.1. Financial features
    As elucidated in extant literature, a multitude of financial indicators have been examined for their predictive efficacy in predicting
corporate financial distress. Cumulatively, these studies offer robust theoretical substantiation for the pivotal role that financial
indicators play in this context. Specifically, features capturing aspects such as valuation, managerial inefficiency, and suboptimal
financial structures emerge as salient indicators for predicting financial distress. Recognizing the diversity of causes that underlie
the financial distress of companies, it becomes imperative to judiciously curate a set of financial features that holistically capture the
multifaceted financial health of a company. Consequently, the feature set adopted in this study (Table 2) is based on prior empirical
research (Abedin et al., 2023; Chen et al., 2023; Hajek & Munk, 2023; Sun et al., 2020). To align with the prevailing research
paradigms, we have selected financial features encompassing the following categories: (1) company size (as larger companies often
have diversified revenue streams and better access to funding), (2) corporate reputation (investors may consider reputation as a sign
of stability and long-term viability), (3) profitability indicators (higher profitability ensures that a company has sufficient working
capital to manage its operational expenses, is better positioned to service its debts and can reinvest its earnings into the business,
facilitating growth), (4) activity indicators (reflect well on a company’s operational efficiency and indicate more rapid conversion of
assets into cash), (5) growth ability (provides a buffer against economic downturns but poorly managed growth can introduce risks),
(6) liquidity indicators (indicate that a company has sufficient assets to cover its short-term liabilities), (7) leverage indicators (high
levels of debt can limit a company’s financial flexibility and typically come with higher debt service obligations, which can increase
the risk of default), and (8) valuation indicators (assess the market’s perception of a company’s value relative to its earnings, book
value, or sales).

4.1.2. BERT-based linguistic features
    In financial research, sentiment indicators constitute a frequently studied category of linguistic features, typically extracted
through either dictionary-based methodologies or machine learning techniques (Hajek, 2018). While the former leverages pre-
compiled lexicons tailored for specific sentiment categories, the latter necessitates a substantial corpus of annotated documents for
effective training. However, both methodologies encounter challenges when applied to the specialized lexicon and contextual nu-
ances of financial discourse, rendering generalized dictionaries like the General Inquirer or Diction suboptimal, along with machine
learning models trained on non-financial datasets (Huang, Wang, & Yang, 2023). Remedying these limitations, specialized lexicons
for financial contexts have been developed (Loughran & McDonald, 2011), and larger financial text corpora have been employed to
enhance machine learning-based word representations (Huang, Wang, & Yang, 2023). Notably, neural word embeddings, especially
those employing contextualized models, have shown superior performance, eclipsing domain-specific lexicons in their predictive
capabilities (Azimi & Agrawal, 2021).
    Among contextualized models, the BERT (Bidirectional Encoder Representations from Transformers) framework (Devlin et al.,
2018) has garnered considerable attention for its prowess in capturing both syntactic and semantic intricacies through its masked
language modeling architecture. This bypasses the unidirectional limitations inherent to other transformer-based models like ELMo
and OpenAI GPT. BERT is trained on a diverse corpus, encompassing texts from BookCorpus and Wikipedia, and can be fine-tuned
to suit an array of NLP applications, including but not limited to sentiment classification (Huang, Wang, & Yang, 2023; Kim & Park,
2023; Lengkeek et al., 2023) and topic detection (Grootendorst, 2022).

                                                                       6
P. Hajek and M. Munk                                                                                           Information Processing and Management 61 (2024) 103820

                                          Table 2
                                          Financial features used for financial distress prediction.
                                           Category                              Financial indicators
                                           Company size                          𝑥1 : Total assets, 𝑥2 : Revenues
                                           Corporate reputation                  𝑥3 : Shares held by institutions
                                           Profitability                         𝑥4 : Net income, 𝑥5 : Net profit margin,
                                                                                 𝑥6 : Operating margin, 𝑥7 : Return on
                                                                                 equity, 𝑥8 : Return on assets
                                           Activity                              𝑥9 : Total assets to revenues, 𝑥10 : Total
                                                                                 assets to accounts payable, 𝑥11 : Change
                                                                                 in non-cash working capital
                                           Growth ability                        𝑥12 : Growth in revenues (last 3 years)
                                           Liquidity                             𝑥13 : Cash ratio, 𝑥14 : Cash flow ratio
                                           Leverage                              𝑥15 : Book debt to total assets, 𝑥16 :
                                                                                 Market debt to total assets, 𝑥17 : Interest
                                                                                 coverage
                                           Valuation                             𝑥18 : Beta, 𝑥19 : Payout ratio, 𝑥20 :
                                                                                 Dividend yield, 𝑥21 : Price to book value,
                                                                                 𝑥22 : Stock price to sales, 𝑥23 : Stock price
                                                                                 to earnings




    In this study, the focus lies on financial disclosure analytics; hence, we employed the domain-specific FinBERT model, which was
pre-trained on the expansive TRC2-financial corpus, containing over 29 million words culled from Reuters news articles.1 For fine-
tuning, we utilized approximately 5,000 annotated sentences sourced from financial news and corporate press releases, encapsulated
in the Financial PhraseBank. Experimental configurations followed the guidelines set forth by Araci (2019), with an epoch count of
6, a learning rate of 2e−5, a maximum sequence length of 64, and with layer-wise unfreezing implemented during training.
    To facilitate topic detection within news content, we leveraged BERTopic (Grootendorst, 2022), a neural topic model that
generates coherent topics by employing pre-trained BERT embeddings. This model alleviates vocabulary mismatch by leveraging the
semantic context of terms. Additionally, BERTopic enhances topic representation by incorporating noisy topics that are otherwise
uncorrelated with mainstream topics. For this task, we utilized the BERTopic library,2 with text preprocessing that included
stopwords removal (via NLTK) and lemmatization (via WordNet). UMAP (Uniform Manifold Approximation and Projection),
recognized for its computational efficiency and ability to retain both global and local features in high-dimensional datasets, was
deployed to cluster the BERT embeddings (Grootendorst, 2022).

4.2. XGBoost-based semi-supervised learning model

    The SSL-based model used in this study utilizes the Extreme Gradient Boosting Outlier Detection (XGBOD) method, an SSL
algorithm specifically designed to enhance the effectiveness of the XGBoost framework in scenarios with significantly imbalanced
data. This augmentation is achieved through the integration of outlier scores, which are derived from an ensemble of multiple
unsupervised outlier detection techniques.
    XGBoost represents an optimized and scalable realization of gradient-boosted decision trees, constructed through an iterative,
additive modeling process. The algorithm aims to incrementally minimize the overall error by introducing successive models that
are predicated on the residuals or errors observed in prior iterations. This iterative refinement culminates in an ensemble of base
learners that collectively exhibit superior predictive performance compared to individual constituent classifiers. Such an ensemble is
optimized through the conscientious management of factors such as constrained tree depth, and equitable contributions from each
base learner to the aggregated model. To bolster the model’s resilience against noise and susceptibility to overfitting, the gradient
boosting algorithm incorporates stochastic elements via a random sampling scheme, often referred to as stochastic gradient boosting.
XGBoost further distinguishes itself by incorporating regularization techniques to curtail overfitting. The objective function to be
minimized within the XGBoost framework has been formally articulated as follows (Chen & Guestrin, 2016):
                    ∑
                    𝑛                                 ∑
                                                      𝑇
         obj(𝑡) =     (𝑦𝑖 − (𝑦̂𝑖(𝑡−1) + 𝑓𝑡 (𝑥𝑖 )))2 +   𝛺(𝑓𝑡 ),                                                                                                  (1)
                    𝑖=1                               𝑡=1

where 𝑦𝑖 and 𝑦̂(𝑡)
               𝑖 are the target and predicted values for the 𝑖th instance at the 𝑡th iteration, while 𝑓𝑡 (𝑥𝑖 ) denotes the additive decision
tree model that is incrementally and greedily incorporated to enhance overall model performance. Additionally, 𝛺(𝑓𝑡 ) serves as a
regularization component aimed at penalizing excessive model complexity. The objective of this regularization scheme is to induce
sparsity by constraining the feature weights toward zero, thereby facilitating an implicit feature selection mechanism. This is particu-
larly advantageous when contending with high-dimensional datasets. Consequently, XGBoost has emerged as a leading classification
algorithm across various domains and has demonstrated noteworthy efficacy in financial distress prediction (Carmona et al., 2022;


  1   https://huggingface.co/ProsusAI/finbert
  2   https://maartengr.github.io/BERTopic/


                                                                                   7
P. Hajek and M. Munk                                                                                 Information Processing and Management 61 (2024) 103820




                                                Fig. 3. XGBOD framework for financial distress prediction.




Liu et al., 2022; Zhao et al., 2023). However, to provide accurate predictive models in class imbalance scenarios, the objective
function of XGBoost must be adapted to make the model pay more attention to the minority class during optimization (Wang, Deng,
& Wang, 2020). This is, however, difficult due to the need to tune additional hyperparameters of the objective function leading
to limited robustness of the model (Mushava & Murray, 2022). A more robust predictive model offers an extension of the feature
space to include unsupervised outlier functions, as enabled by the XGBOD method, thus exploiting the aforementioned advantages
of XGBoost combined with outlier detection using unsupervised learning methods.
    The XGBOD method, as delineated by Zhao and Hryniewicki (2018), constitutes a semi-supervised ensemble algorithm that
synergistically integrates multiple unsupervised outlier detection techniques with an XGBoost classifier, as depicted in Fig. 3.
Initially, these unsupervised algorithms are employed to generate Transformed Outlier Scores (TOS) as novel data representations.
Subsequently, a feature selection algorithm is applied to refine this TOS feature space, thereby retaining only the most salient
outlier scores. This pruned outlier score matrix is then amalgamated with the original feature set to construct a comprehensive
and enhanced feature space. Within this augmented feature domain, the XGBoost classifier is deployed to compute the final outlier
scores for each company within the financial distress prediction model. The overarching strength of this methodology resides in its
robust predictive capabilities, attributable to its inherent resilience against overfitting and its aptitude for handling data imbalance.
    In the financial distress prediction framework, a diverse set of unsupervised outlier detection techniques are usually employed to
generate TOS, including proximity-based, linear model-based and ensembling methods (Hajek et al., 2023). To judiciously maintain
equilibrium between the diversity of these scores and their predictive accuracy, the selection scheme, as proposed by Zhao and
Hryniewicki (2018), is leveraged for the TOS feature selection process. This algorithm employs a discounted accuracy function,
denoted as 𝛹 (𝑇 𝑂𝑆𝑖 ), to meticulously identify the subset of 𝑝 most relevant outlier scores. The mathematical formulation of this
function is provided as follows:
                               𝐴𝑈 𝐶𝑖
       𝛹 (𝑇 𝑂𝑆𝑖 ) = ∑𝑘                               ,                                                                                                 (2)
                       𝑖,𝑗=1 ∣ 𝜌(𝑇 𝑂𝑆𝑖 , 𝑇 𝑂𝑆𝑗 ) ∣

where 𝐴𝑈 𝐶𝑖 represents the 𝐴𝑈 𝐶 performance metric associated with the 𝑖th TOS, while 𝜌(𝑇 𝑂𝑆𝑖 , 𝑇 𝑂𝑆𝑗 ) signifies the Pearson
correlation coefficient calculated between a specific pair of TOS.

4.3. Performance evaluation

    Consistent with information in Table 1, this study uses four evaluation criteria to verify the financial distress prediction
performance, namely accuracy, sensitivity, F1 score, and AUC. Classification accuracy provides a baseline and easily interpretable
measure, sensitivity evaluates the effectiveness of capturing true positive cases of financial distress, the F1 score offers a nuanced
evaluation metric that is sensitive to the challenges of class imbalance, and AUC offers a robust way to assess model quality
irrespective of class distributions. The combination of these metrics allows for a well-rounded evaluation of the model’s effectiveness
in predicting financial distress.

                                                                            8
P. Hajek and M. Munk                                                                                  Information Processing and Management 61 (2024) 103820


    Accuracy (Acc) represents a straightforward metric that indicates the proportion of correctly classified companies relative to the
total number of companies:
                                  𝑡𝑟𝑢𝑒 𝑝𝑜𝑠𝑖𝑡𝑖𝑣𝑒 + 𝑡𝑟𝑢𝑒 𝑛𝑒𝑔𝑎𝑡𝑖𝑣𝑒
       𝐴𝑐𝑐 =                                                                      .                                                                     (3)
                𝑡𝑟𝑢𝑒 𝑝𝑜𝑠𝑖𝑡𝑖𝑣𝑒 + 𝑓 𝑎𝑙𝑠𝑒 𝑝𝑜𝑠𝑖𝑡𝑖𝑣𝑒 + 𝑡𝑟𝑢𝑒 𝑛𝑒𝑔𝑎𝑡𝑖𝑣𝑒 + 𝑓 𝑎𝑙𝑠𝑒 𝑛𝑒𝑔𝑎𝑡𝑖𝑣𝑒
    Financial distress prediction often deals with imbalanced classes, where the distressed companies might be much fewer than
healthy ones. Therefore, sensitivity is a critical performance criterion because it measures the ability of the model to correctly
identify companies that are going to become distressed. This is particularly important, given the cost of failing to identify companies
at distress risk can be substantial:
                               𝑡𝑟𝑢𝑒 𝑝𝑜𝑠𝑖𝑡𝑖𝑣𝑒
        𝑆𝑒𝑛𝑠𝑖𝑡𝑖𝑣𝑖𝑡𝑦 =                                 .                                                                             (4)
                      𝑡𝑟𝑢𝑒 𝑝𝑜𝑠𝑖𝑡𝑖𝑣𝑒 + 𝑓 𝑎𝑙𝑠𝑒 𝑛𝑒𝑔𝑎𝑡𝑖𝑣𝑒
   F1 score considers both precision and recall and is therefore a better metric than accuracy for handling imbalanced datasets:
                   𝑝𝑟𝑒𝑐𝑖𝑠𝑖𝑜𝑛 × 𝑟𝑒𝑐𝑎𝑙𝑙
       𝐹1 = 2 ×                       .                                                                                                                 (5)
                   𝑝𝑟𝑒𝑐𝑖𝑠𝑖𝑜𝑛 + 𝑟𝑒𝑐𝑎𝑙𝑙
    AUC measures the model’s ability to differentiate between the classes irrespective of the threshold. This is crucial in financial
distress prediction where the cost of false negatives (failing to identify a company that will go into distress) and false positives
(wrongly predicting a healthy company as distressed) can be high. AUC is not sensitive to class imbalance, making it an ideal
metric when the event of interest (financial distress) is rare:
                      1
                                           𝑑
       𝐴𝑈 𝐶 =             𝑟𝑒𝑐𝑎𝑙𝑙(𝑡∗ ) ×       𝐹 𝑃 𝑅(𝑡∗ )𝑑𝑡∗ ,                                                                                           (6)
                 ∫0                       𝑑𝑡∗
where 𝐹 𝑃 𝑅 is false positive rate, and 𝑡∗ denotes the threshold of discrimination.
   In the present investigation, the McNemar test was utilized as a statistical methodology to evaluate the existence of significant
disparities between the performances of two distinct classification models (Dietterich, 1998). This non-parametric test focuses on
contrasting the prediction outcomes of each model to identify discordant pairs — instances where one model accurately forecasts
the outcome while its counterpart fails to do so.
   Additionally, to facilitate a comparative analysis of the classification efficacy across multiple models, the Friedman test
was employed (Demšar, 2006). A rejection of the global null hypothesis in the Friedman test signifies statistically significant
heterogeneities in classification performance across the set of models under examination. Should this occur, additional statistical
scrutiny is warranted to pinpoint the specific models contributing to these observed differences. To this end, the study adopted
the Shafer post-hoc test (Garcia & Herrera, 2008) as a follow-up analytic measure subsequent to the global null hypothesis being
negated by the Friedman test. The Shafer test serves as a pairwise comparison methodology, enabling the isolation of statistically
significant performance divergences between individual models.


5. Data

    This study utilizes a comprehensive sample comprised of both distressed and non-distressed companies from around the world,
see Fig. 4. To ascertain the financial health of each company, consistent with prior research (Avramov et al., 2013; Yan et al.,
2023), we employed credit ratings from Standard & Poor’s as a target class for 2022. Companies with credit ratings ranging from
CCC to D were categorized as financially distressed, indicating a high vulnerability to default. Conversely, firms with credit ratings
between AAA and B were considered financially stable, demonstrating a current capacity to meet financial obligations. The dataset
employed binary labeling, with distressed companies designated as ‘1’ and non-distressed companies as ‘0’. Credit ratings were used
for several reasons. First, they offer an objective, third-party assessment of financial health that is readily available. It is considered
a reliable indicator of a company’s ability to meet its financial obligations. Second, credit ratings are standardized, meaning they
are comparable across industries and countries, making it easier to identify and categorize financially distressed companies. Third,
low credit ratings often trigger covenants in debt agreements that may lead to renegotiation of terms or accelerated repayment
schedules. This creates an additional layer of oversight and consequence for distressed companies, reinforcing the utility of these
ratings as an effective monitoring tool. Finally, the rating classes from CCC to D, in particular, indicate varying levels of financial
distress. Studies have shown a high correlation between low credit ratings and default rates. A comprehensive study by Standard &
Poor’s has established that companies with ratings of CCC or lower have a one-year default rate of approximately 26.55%, compared
to just 0.00% to 3.18% for companies rated from ‘AAA’ to ‘B’3 . Although a credit rating reflects past financial performance, it can
be used to assess potential financial risks and signal changes in a company’s financial position. It is also useful for understanding
the evolution of a company’s credit status. Our approach is rooted in a number of studies targeting credit rating prediction using
historical financial data (Huang et al., 2004; Wang & Ku, 2021). Indeed, accurate credit rating predictions help companies anticipate
changes in financing costs and help investors make informed decisions.


  3 www.spglobal.com/ratings/en/research/articles/220413-default-transition-and-recovery-2021-annual-global-corporate-default-and-rating-transition-study-

12336975


                                                                             9
P. Hajek and M. Munk                                                                                   Information Processing and Management 61 (2024) 103820




                                                         Fig. 4. Country and industry concentration.


Table 3
Mean values and standard deviations of financial features.
 Feature                      Mean                           St.Dev.                      Feature                     Mean                        St.Dev.
 𝑥1                           33 983.157                     96 978.231                   𝑥13                         0.849                       16.733
 𝑥2                           13 083.001                     30 811.855                   𝑥14                         0.119                       3.482
 𝑥3                           0.514                          0.325                        𝑥15                         0.524                       0.204
 𝑥4                           1091.759                       3595.922                     𝑥16                         0.423                       0.247
 𝑥5                           0.144                          4.653                        𝑥17                         122.470                     4903.792
 𝑥6                           0.098                          0.664                        𝑥18                         1.226                       0.602
 𝑥7                           0.066                          0.380                        𝑥19                         0.986                       4.752
 𝑥8                           0.113                          0.415                        𝑥20                         0.028                       0.049
 𝑥9                           5.332                          33.908                       𝑥21                         4.538                       25.119
 𝑥10                          1042.518                       44 991.318                   𝑥22                         3.584                       32.824
 𝑥11                          0.045                          1307.449                     𝑥23                         49.314                      415.773
 𝑥12                          0.047                          0.148




   Financial features for the study are sourced from the Compustat database for 2021,4 while linguistic features used for
communicated risk – such as sentiment and topical focus – are derived from annual reports (10-K and 20-F forms) available in
the SEC EDGAR database.5
    After rigorous data preprocessing, the final dataset included 98 distressed companies and 2,447 non-distressed companies for
analysis. That is, a comprehensive dataset of 2,545 companies was used in this study. In keeping with previous research (García
et al., 2019; Tsai et al., 2021), a stratified 10-fold cross-validation methodology was employed to mitigate the risk of result bias.
In each of the ten iterations, nine parts (90%) were used for training and one part (10%) was used for testing. This process was
repeated ten times, with each part being in the test set once.
      The values of the financial features were collected from the Compustat database (see Table 3 for their descriptive statistics).
   It is worth noting that comprehending the data encapsulated within risk factor disclosures is of paramount significance to
regulatory authorities, institutional investors, and scholarly investigators. On a quantitative basis, these disclosures constitute
approximately 11.0% of the textual content within corporate 10-K filings (Campbell et al., 2014). Previous seminal research by Li
(2006) employs textual analysis to quantify the prevalence of risk-related terminology in 10-K forms during temporal intervals
antecedent to the institution of mandated risk factor disclosures. The study ascertains that an amplification in risk sentiment inversely
correlates with future earnings potential. Similarly, a subsequent study conducted by Campbell et al. (2014) corroborates that
companies confronting elevated levels of risk are inclined to be more forthcoming in their risk factor disclosures. Furthermore,
the research substantiates that such disclosures exert an incremental influence on market-derived risk evaluations.



  4    www.marketplace.spglobal.com/en/datasets/compustat-financials-(8)
  5    https://www.sec.gov/edgar/search-and-access


                                                                             10
P. Hajek and M. Munk                                                                     Information Processing and Management 61 (2024) 103820

Table 4
Topics identified using BERTopic.
 Feature                                Topic                                         Top 5 terms
 𝑥25                                    Intellectual property risk                    Intellectual, patent, right, license, property
 𝑥26                                    R&D risk                                      Clinical, fda, trial, approval, candidate
 𝑥27                                    Security risk                                 Security, breach, information, data, unauthorized
 𝑥28                                    Tax risk                                      Tax, income, deferred, jurisdiction, reform
 𝑥29                                    Litigation risk                               Litigation, proceeding, claim, legal, court
 𝑥30                                    Currency risk                                 Currency, exchange, dollar, foreign, fluctuation
 𝑥31                                    Insurance risk                                Insurance, coverage, reinsurance, catastrophe, covered
 𝑥32                                    Competitive risk                              Margin, gross, competition, reduce, profit
 𝑥33                                    Product risk                                  Acceptance, success, develop, introduce, product
 𝑥34                                    Dividend risk                                 Dividend, common, equity, unit, pay
 𝑥35                                    Compliance risk                               Penalty, comply, criminal, civil, fine
 𝑥36                                    Regulatory risk                               Regulation, compliance, legislation, law, change
 𝑥37                                    Personnel risk                                Personnel, key, retain, qualified, attract
 𝑥38                                    Workforce risk                                Disruption, labor, stoppage, strike, work
 𝑥39                                    Health risk                                   Reimbursement, care, healthcare, medicare, health
 𝑥40                                    Liquidity risk                                Financing, need, fund, capital, additional
 𝑥41                                    Overseas business risk                        China, located, country, united, states
 𝑥42                                    Failure management                            Failure, fail, effectively, successfully, manage
 𝑥43                                    Commercial lending risk                       Commercial, loan, estate, real, loan
 𝑥44                                    Material risk                                 Actually, risk, following, material, occur
 𝑥45                                    Price risk                                    Stock, common, price, analyst, fluctuation
 𝑥46                                    Data privacy risk                             Information, confidential, sensitive, data, collect
 𝑥47                                    Timing risk                                   Quarter, timing, quarterly, fluctuate, period
 𝑥48                                    Intangible asset risk                         Goodwill, impairment, intangible, carrying, asset
 𝑥49                                    IT risk                                       System, interruption, information, disruption, availability
 𝑥50                                    Credit risk                                   Credit, counterparty, creditworthiness, risk, rating




   Risk factor disclosures were extracted from the 10-K and 20-F filings through the utilization of a Python parsing tool.6 More
specifically, the sections utilized for this study were Item 1 A (Item 3D), which pertains to Risk Factors, and Item 7 A (Item 11), which
pertains to Market Risk of the 10-K (20-F) filings. These selections were made in alignment with established literature (Campbell
et al., 2014). Due to the inherent constraints of automated parsing, a manual verification of the extracted textual content was
imperative to ensure accuracy and reliability. For each of the above financial filings, the sections were segmented into discrete
sentences using the NLTK sent tokenize module, resulting in a total of 129,168 sentences used in the linguistic analyses.

6. Experimental results and discussion

6.1. Linguistic analysis of annual reports

    Firstly, we utilized a fine-tuned FinBERT model specialized in sentiment analysis to categorize the risk-related sentences into one
of three sentiment labels: positive, neutral, or negative. The aggregate sentiment score for each company, denoted as feature 𝑥24 , was
computed by subtracting the count of negatively-labeled sentences from the count of positively-labeled sentences, and then dividing
the resultant value by the total number of sentences analyzed, as outlined in the methodology of previous related studies (Hajek,
2018).
    The result of the sentiment analysis reveals a noteworthy pattern: the average risk-related sentiment score 𝑥24 for distressed
companies was lower (mean = −0.459) compared to those non-distressed (mean = −0.397). This suggests an inverse relationship
between the risk-related aggregate sentiment and the likelihood of a company being distressed.
    In the next step, BERTopic was used to extract 298 topics. To derive a coherent and interpretable topic model, we only considered
topics with a frequency greater than 1000. Selecting the number of topics in BERTopic by frequency is appropriate because it aligns
the granularity of the topics with the inherent structure of the dataset. Frequency-based selection ensures that the extracted topics
are not only coherent, but also relevant and interpretable, helping to identify the most representative and substantive topics in the
data. This approach prevents overfitting to noise and ensures that the topics are robust enough to make sense in the context of
the financial data. This resulted in 26 topics, the descriptions of which are shown in Table 4, along with their most representative
terms. Note that we gave each topic a name based on the representative terms.
    It should also be noted that UMAP was used to overcome the problem of the curse of dimensionality of the input embeddings.
It provided us with a higher topic coherence than PCA (Principal Component Analysis) (0.712 for UMAP vs. 0.471 for PCA) in
BERTopic, because UMAP tends to better preserve the local and global structure of the data in low-dimensional space. UMAP is
a non-linear dimensionality reduction technique that captures the rich structure of the data, which is particularly beneficial when
working with the contextual embeddings generated by models such as BERT (Grootendorst, 2022).


  6    https://gist.github.com/anshoomehra/ead8925ea291e233a5aa2dcaa2dc61b2


                                                                         11
P. Hajek and M. Munk                                                                               Information Processing and Management 61 (2024) 103820




                                           Fig. 5. Similarity matrix of topics identified using BERTopic.




    Fig. 5 shows the similarity matrix of the 26 topics identified using BERTopic. The generated similarity matrix reveals a high
degree of correlation among analogous types of risks, such as compliance and regulatory risks or security and data privacy risks,
thereby supporting the thematic coherence and reliability of the topics under investigation.
    Fig. 6 presents the distribution of 26 thematic categories across the analyzed companies, showing that intellectual property, R&D
and security risks dominate the risk-related content. Although both sets of companies exhibited similar thematic frequencies, the
content orientation of the two groups differed with regard to some financial risks. Specifically, companies experiencing heightened
financial distress risk tend to disclose a more extensive array of risk factors. Additionally, the specific type of risk confronting the
firm influenced the proportion of disclosure allocated to elucidating that particular risk, with credit risk being especially prominent
for financially distressed companies. Table 5 shows the descriptive statistics of the linguistic indicators used in this study (for the
correlations between topic features, see Fig. A.1).

6.2. Evaluating financial distress prediction performance

    The outcome of the preceding stages yielded an integrated set of features, comprising both financial indicators and risk-related
linguistic features. That is, of the 50 features used as input to the financial distress model, 𝑥1 , 𝑥2 , … , 𝑥23 represented financial
features and 𝑥24 , 𝑥25 , … , 𝑥50 were linguistic features. Given the disparity in the value ranges of the financial and linguistic features,
it was essential to normalize the data. Therefore, min–max normalization was applied to each feature to ensure that its values
were constrained within a [0, 1] interval, thus facilitating a consistent scale. In subsequent experimental analyses, these composite
features were employed to evaluate the classification performance of a semi-supervised XGBoost model (XGBOD) in comparison to
classifiers previously utilized in the literature.
    The performance of financial distress detection methods heavily depends on the optimal selection of their hyperparameters. To
determine these optimal settings, we employed the grid search method coupled with 5-fold cross-validation on the training data
(refer to Table A.1 for a detailed list of hyperparameters and their values). The most effective performance was observed using 30
unsupervised estimators with a maximum tree depth of 15 and a learning rate of 0.1. This indicates that a diverse combination
of proximity-based, linear model-based, and ensemble unsupervised methods was crucial for achieving superior classification

                                                                        12
P. Hajek and M. Munk                                                                                    Information Processing and Management 61 (2024) 103820




                                               Fig. 6. Relative frequencies of topics identified using BERTopic.


Table 5
Mean values and standard deviations of linguistic features.
 Feature                       Mean                           St.Dev.                      Feature                      Mean                         St.Dev.
 𝑥24                           −0.3994                        0.2760
 𝑥25                           0.0508                         0.0519                       𝑥38                          0.0170                       0.0132
 𝑥26                           0.0834                         0.1122                       𝑥39                          0.0616                       0.0458
 𝑥27                           0.0403                         0.0271                       𝑥40                          0.0137                       0.0099
 𝑥28                           0.0372                         0.0390                       𝑥41                          0.0154                       0.0095
 𝑥29                           0.0259                         0.0191                       𝑥42                          0.0139                       0.0081
 𝑥30                           0.0408                         0.0304                       𝑥43                          0.0281                       0.0220
 𝑥31                           0.0359                         0.0561                       𝑥44                          0.0118                       0.0060
 𝑥32                           0.0185                         0.0129                       𝑥45                          0.0214                       0.0153
 𝑥33                           0.0189                         0.0140                       𝑥46                          0.0137                       0.0076
 𝑥34                           0.0299                         0.0448                       𝑥47                          0.0190                       0.0120
 𝑥35                           0.0174                         0.0119                       𝑥48                          0.0212                       0.0164
 𝑥36                           0.0160                         0.0090                       𝑥49                          0.0174                       0.0121
 𝑥37                           0.0194                         0.0111                       𝑥50                          0.0157                       0.0072




performance in this dataset, which is characterized by class imbalance. To train the XGBOD model, we utilized its implementation
in the Python Outlier Detection (PyOD) library.7
    For the comparative assessment, we selected benchmark classifiers based on methodologies delineated in prior research, as
enumerated below:

       • Cost-sensitive Support Vector Machine (CS-SVM) as proposed by Zieba et al. (2016), wherein the misclassification cost for false
         negatives was configured as the number of non-distressed to distressed companies and set to 1 for false positives, in alignment
         with the specifications by Zieba et al. (2016).
       • Multi-Layer Perceptron (MLP) integrated with three distinct data re-sampling techniques: random over-sampling (ROS),
         random under-sampling (RUS), and synthetic minority over-sampling technique (SMOTE), as described by Zhou (2013).
       • XGBoost accompanied by SMOTE re-sampling, as outlined in Le (2022).
       • AdaBoost employing SMOTE re-sampling, as introduced by Faris et al. (2020).
       • Random forest (RF) utilizing SMOTE re-sampling, following the methodology by Veganzones and Séverin (2018).


  7    https://github.com/yzhao062/pyod


                                                                              13
P. Hajek and M. Munk                                                                                  Information Processing and Management 61 (2024) 103820

Table 6
Classification performance of compared methods (the best result is in bold).
 Model                                                Acc                           F1 score                 AUC                        Sensitivity
 CS-SVM (Zieba et al., 2016)                          0.8039 ± 0.0844               0.8848 ± 0.0581          0.7510 ± 0.0984            0.7474 ± 0.2159
 RUS+MLP (Zhou, 2013)                                 0.8777 ± 0.0123               0.9327 ± 0.0074          0.9085 ± 0.0128            0.8563 ± 0.0770
 ROS+MLP (Zhou, 2013)                                 0.8883 ± 0.0610               0.9377 ± 0.0372          0.9055 ± 0.0344            0.7969 ± 0.0520
 SMOTE+MLP (Zhou, 2013)                               0.9591 ± 0.0079               0.9619 ± 0.0042          0.9325 ± 0.0580            0.6300 ± 0.1486
 SMOTE+XGBoost (Le, 2022)                             0.9739 ± 0.0049               0.9733 ± 0.0026          0.9725 ± 0.0117            0.6026 ± 0.0447
 SMOTE+AdaBoost (Faris et al., 2020)                  0.9627 ± 0.0051               0.9636 ± 0.0027          0.9630 ± 0.0168            0.5821 ± 0.0545
 SMOTE+RF (Veganzones & Séverin, 2018)                0.9702 ± 0.0039               0.9684 ± 0.0020          0.9642 ± 0.0098            0.5089 ± 0.0776
 XGBoost (Park et al., 2021)                          0.9727 ± 0.0045               0.9708 ± 0.0023          0.9739 ± 0.0111            0.5100 ± 0.0260
 RUS+XGBoost                                          0.9194 ± 0.0107               0.9564 ± 0.0061          0.9657 ± 0.0109            0.8979 ± 0.0317
 ROS+XGBoost                                          0.9614 ± 0.0090               0.9656 ± 0.0047          0.9762 ± 0.0215            0.7453 ± 0.0427
 XGBOD (this study)                                   0.9749 ± 0.0078               0.9717 ± 0.0093          0.9864 ± 0.0076            0.8616 ± .0616




    • A baseline XGBoost-based predictive model that omits class-balancing techniques, as detailed in Park et al. (2021).
    • A baseline XGBoost-based model using RUS and ROS class-balancing techniques.

    In the experimental outcomes presented in Table 6, it is evident that the semi-supervised XGBoost-based model, denoted as
XGBOD, demonstrates superior performance by achieving the highest values in both Acc and AUC. Specifically, the integration of
XGBoost with unsupervised learning techniques yielded noteworthy improvements in the AUC metric, attributable to a well-balanced
False Negative Rate (FNR) and FPR. These findings substantiate the claim that our proposed model surpasses existing financial
distress prediction models, especially in contexts characterized by significant class imbalance.
    When deployed either independently or in conjunction with various re-sampling techniques, XGBoost consistently excelled across
all three performance metrics. This efficacy can be ascribed to the algorithm’s ability to adjust the class_weight parameter, which
effectively manipulates the class weights during training to accommodate the imbalanced distribution of classes. In a comparative
analysis of re-sampling methods, SMOTE outperformed RUS and ROS in enhancing the performance of both MLP and XGBoost
models. This superiority of SMOTE is attributed to its retention of all original samples while generating synthetic instances for
the minority class, thereby preserving the informational integrity of the majority class. Furthermore, the algorithm’s design, which
synthesizes new samples based on feature-space similarities between existing minority instances, serves to mitigate the risk of model
overfitting, an issue commonly associated with ROS.
    In the context of F1 score, the improvements in recall demonstrated by the SMOTE+XGBoost and XGBOD models were sufficient
to offset a marginal reduction in precision. According to extant literature (Sun et al., 2020), a moderate diminishment in precision is
deemed acceptable within the domain of financial distress prediction, provided it results in a substantial enhancement in the accurate
classification of the minority class, comprising distressed firms. However, only a few of the tested methods were able to achieve
this enhancement. Specifically, a high sensitivity value was only achieved for XGBOD and also for the RUS method (RUS+XGBoost
and RUS+MLP), but in the latter case this was accompanied by a significant drop in classification accuracy on the majority class,
as indicated by the overall accuracy of the models.

6.3. Performance verification of financial distress prediction via statistical tests

    To assess the relative performance of the top-performing classification models in terms of the AUC, we employed a Friedman
non-parametric test across various data partitions. This test facilitated a comparison of the ranking of the XGBOD algorithm against
those of the ten other models previously examined. Table 7 elucidates the mean rankings and 𝑝-values obtained from the Friedman
test, and 𝑝-values derived from post-hoc pairwise comparisons, which were conducted using the Shafer procedure. Both the Friedman
test and the Shafer-based post-hoc comparisons indicated statistically significant differences between the financial distress prediction
models at the 0.001 significance level. Notably, the XGBOD model secured the highest rank among the evaluated models. For
controlling the Type I error rate in multiple comparisons, the Shafer post-hoc procedure was employed with the predetermined 0.05
significance level. A scrutiny of the post-hoc comparison outcomes presented in Table 7 reveals that the XGBOD model significantly
surpassed all benchmark models in terms of AUC, with the exceptions being XGBoost, SMOTE+XGBoost, and ROS+XGBoost. These
findings substantiate the superior capability of the XGBoost model in predicting corporate financial distress.

6.4. Comparison with state-of-the-art linguistic approaches

    For comparative analyses, we also evaluated the classification performance using linguistic features derived from two distinct
methodologies commonly applied in prior research: (1) the dictionary-based methodology developed by Loughran and McDonald
(2011), which represents one of the most frequently employed lexical sets in financial literature, as cited by Li et al. (2021); and (2) a
Word2Vec embedding model configured with 300 features, as documented by Matin et al. (2019). Fig. 7 demonstrates that, compared
to solely used financial features, risk-related content of annual reports especially improved the identification of the minority class
of distressed companies, as indicated by the increased F1 score and AUC.
    Given the inherent constraints of dictionary-based approaches like Loughran & McDonald, as well as the Word2Vec model –
namely their lack of contextual awareness and inability to leverage pre-trained large language models or to account for topic-specific

                                                                               14
P. Hajek and M. Munk                                                                                   Information Processing and Management 61 (2024) 103820

Table 7
Results of the Friedman non-parametric test.
 Model                                                Rank                         𝑧 = (𝑅0 − 𝑅𝑖 )∕𝑆𝐸                    𝑝-value                  Shafer 𝛼∕𝑖
 CS-SVM                                               11.0                         5.80                                 0.000                    0.001
 RUS+MLP                                              9.2                          4.58                                 0.000                    0.001
 ROS+MLP                                              9.1                          4.52                                 0.000                    0.001
 SMOTE+MLP                                            5.6                          2.16                                 0.031                    0.002
 SMOTE+XGBoost                                        4.3                          1.28                                 0.200                    0.002
 SMOTE+AdaBoost                                       5.7                          2.22                                 0.026                    0.002
 SMOTE+RF                                             5.6                          2.16                                 0.031                    0.002
 XGBoost                                              3.9                          1.01                                 0.312                    0.003
 RUS+XGBoost                                          5.7                          2.22                                 0.026                    0.002
 ROS+XGBoost                                          3.5                          0.74                                 0.458                    0.005
 XGBOD                                                2.4
 Friedman test 𝑝-value                                ≤ 4.21E−10
 Shafer post-hoc comparison 𝑝-value                   ≤ 0.0009

Note: Shafer post-hoc comparison was performed for the adjusted 𝛼 = 0.05.




Fig. 7. Comparative analysis of classification performance between the proposed FinBERT and BERTopic linguistic features and linguistic methodologies from
prior research.




information – the integrated FinBERT and BERTopic model may offer a more nuanced and contextually accurate model for predicting
corporate financial distress. This superior performance was empirically validated through the McNemar test, which demonstrated
significant differences in the predictive accuracy between the proposed FinBERT+BERTopic model and the comparative linguistic
models at the 0.05 significance level. Notably, no significant performance differences (𝑝 > 0.05) were observed among the
Financial baseline model, Financial combined with Loughran & McDonald (Financial+L&M), and Financial combined with Word2Vec
(Financial+Word2Vec). These observations underscore the imperative for employing a contextualized language model that can
adequately capture the nuanced risk topics, thereby surpassing the predictive capabilities of baseline models reliant solely on
financial features.

                                                                            15
P. Hajek and M. Munk                                                                               Information Processing and Management 61 (2024) 103820




                                 Fig. 8. Classification performance with and without BERT-based linguistic features.




6.5. Impact of BERT-based linguistic features on prediction model performance

    The purpose of the further set of experiments was to examine the impact of including the proposed BERT-based linguistic features
in the prediction model. The baseline model was represented by financial indicators only. Fig. 8 shows that our linguistic features
enhanced the performance of the financial distress prediction model across all the evaluation measures employed. The results of the
McNemar statistical test showed significant differences between the proposed FinBERT+BERTopic model and the baseline model at
the 0.05 significance level for all four classification measures.
    Our results strongly validate the pivotal role of BERT-based sentiment and topic analyses in the risk-associated content of annual
reports for predicting financial distress. Several underlying mechanisms could account for this enhanced predictive power. Firstly,
risk factor disclosures furnish investors and analysts with invaluable insights into emerging financial threats, facilitating a more
informed risk assessment. Secondly, the linguistic tone expressed in annual reports encapsulates managerial sentiment toward
various dimensions, such as market trends, financial performance, and strategic orientations. Lastly, risk narratives within these
reports offer a glimpse into sector-specific trends like emergent risks and regulatory shifts, enabling stakeholders to anticipate
financial challenges aligned with industry dynamics.

6.6. Interpreting prediction results with SHAP

    To explain the effects of financial and linguistic features on the prediction results, SHapley Additive exPlanations (SHAP) (Lund-
berg & Lee, 2017) were used. As a game-theoretic approach recognized for clarifying machine learning results, SHAP improves
interpretability both at a local level – clarifying predictions for specific companies – and across the model in global, revealing the
importance of each feature. Here, we examined the global explanatory power of the predictive model using the SHAP library to
illustrate how each financial and linguistic feature affects the prediction of distress. The results in Fig. 9 show that the financial
features were generally more relevant to the predictive model than the linguistic features, with size, profitability, liquidity, leverage
and the systematic risk indicator beta being the most important features. In particular, credit risk and liquidity risk topics were the
most relevant of the linguistic features, suggesting that the high frequency of credit risk and liquidity risk statements is indicative of
future financial difficulties. Frequent references to credit risk could imply that the company is experiencing difficulties in securing
financing or is facing high borrowing costs, which may strain financial resources. Similarly, references to liquidity risk could indicate
cash flow problems that could affect the company’s ability to operate effectively. Overall, the SHAP scores show that financial
indicators and linguistic analysis are both important in predicting a company’s financial distress.

6.7. Robustness of the model: Performance over a longer forecasting horizon

   To confirm the effectiveness of the proposed model, we tested its robustness to a longer forecasting horizon. Therefore, the
performance was assessed two years before the company status was known (using the target class from 2023). Fig. 10 shows that
two years before financial distress, the classification accuracy and AUC achieved with the proposed model decreased on average by
only 1.48% and 1.56%, respectively, compared to the 1-year-ahead prediction.

                                                                         16
P. Hajek and M. Munk                                                                                   Information Processing and Management 61 (2024) 103820




                  Fig. 9. SHAP values demonstrating the contribution of financial and linguistic features to predicting financial distress.




                                          Fig. 10. Classification performance two years before financial distress.




7. Conclusion


    In the present study, we deployed advanced BERT-based techniques for sentiment and topic analysis to pinpoint financially
distressed companies listed on prominent global stock exchanges. Our study elevates the understanding of how risk-associated
sections in annual reports can serve as powerful predictors for corporate financial distress. Unlike prior investigations that primarily
relied on pre-defined dictionaries or non-contextualized language models, we harnessed state-of-the-art analytical approaches

                                                                             17
P. Hajek and M. Munk                                                                           Information Processing and Management 61 (2024) 103820




                                           Fig. A.1. Correlations between BERT-based topic features.




anchored in large transformer-based neural networks for scrutinizing risk factor disclosures. A salient finding from our work is that
linguistic features derived from risk factor disclosures considerably outperform traditional linguistic indicators in terms of predictive
accuracy.
    Conventional machine learning methods demonstrated limited effectiveness, particularly in the context of imbalanced datasets
that are common in financial distress prediction. To address this issue, we developed a financial distress prediction model that
synergistically integrates the XGBoost method with unsupervised outlier detection mechanisms. This approach proved to be more
robust and less susceptible to overfitting compared to traditional methods used in financial distress prediction.
    The findings of the present study have several important implications for corporate stakeholders. First, regulators could use
these findings to refine guidelines for corporate financial disclosure. For example, requiring more detailed risk-related information
in annual reports could improve transparency and investor protection. Second, companies could use these findings to develop better
risk management strategies. Recognizing the predictive value of certain linguistic cues, they could adjust their communication and
reporting practices to provide clearer signals to stakeholders. Third, investors and financial analysts could use the proposed model
to better understand the indicators of financial distress and thus make more informed investment decisions. Fourth, rating agencies
could incorporate the BERT-based linguistic features into their rating methodologies, improving the reliability of their credit ratings.
Finally, this study opens up avenues for future research into combining contextualized language models with financial analysis in
other related domains, such as financial fraud detection and stock market forecasting.
    Despite its contributions, the study is not without limitations. The focus on risk-related content from 10-K and 20-F filings
inherently restricts the applicability of our findings to larger companies, as smaller companies are not obligated to include this
type of content in their reports, and excludes perspectives from external stakeholders. Therefore, future research should explore
complementary textual data sources, such as news articles and social media feeds, to assemble a more rounded linguistic landscape
that incorporates external viewpoints. Moreover, given the rapid advancements in large language models, future work could benefit
from investigating the utility of alternative models for analyzing risk-related content.

CRediT authorship contribution statement

   Petr Hajek: Writing – original draft, Supervision, Software, Methodology, Investigation, Funding acquisition, Data curation.
Michal Munk: Writing – review & editing, Visualization, Validation, Methodology, Formal analysis.

Declaration of competing interest

    The authors declare that they have no known competing financial interests or personal relationships that could have appeared
to influence the work reported in this paper.

Data availability

   Data will be made available on request.

                                                                      18
P. Hajek and M. Munk                                                                                        Information Processing and Management 61 (2024) 103820


Acknowledgments

    The authors acknowledge the financial support of the Czech Sciences Foundation [Grant No. 22-22586S].

Appendix

    See Fig. A.1 and Table A.1.

            Table A.1
            Settings of the SSL hyperparameters.
             Method                                                             Hyperparameters
             XGBOD                                                              estimator list = {KNN , LOF, HBOS, OCSVM, LODA, Isolation
                                                                                Forest}, 𝑝 = {5, 10, 15, 20, 30, 50}
             XGBoost                                                            booster = gbtree, learning rate = {0.01, 0.05, 0.1, 0.2, 0.3}, gamma
                                                                                = 0, maximum depth of a tree = {3, 5, 10, 15, 20, 30}, sampling
                                                                                method = uniform, lambda = 1, alpha = 0
             Unsupervised estimators used in XGBOD                              Hyperparameters
             KNN (𝑘-nearest neighbor)                                           𝑘 = {1, 3, 5, 10, 20, 30, 40, 50}, radius = 1.0
             LOF (local outlier factor)                                         𝑘 = {1, 3, 5, 10, 20, 30, 40, 50}, metric = Minkowski,
                                                                                contamination = the proportion of distressed companies in the
                                                                                training data
             HBOS (histogram-based outlier detection)                           number of bins = {5, 10, 15, 20, 25, 30, 50}, alpha regularizer =
                                                                                0.1
             OCSVM (one-class SVM)                                              nu = {0.01, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.99}, RBF
                                                                                kernel function with gamma = 0.01
             LODA (lightweight on-line detector of anomalies)                   number of bins = {5, 10, 15, 20, 25, 30, 50}, number of random
                                                                                cuts = 100
             Isolation Forest                                                   number of estimators = {10, 20, 50, 70, 100, 150, 200}




References

Abedin, M. Z., Guotai, C., Hajek, P., & Zhang, T. (2023). Combining weighted SMOTE with ensemble learning for the class-imbalanced prediction of small
    business credit risk. Complex & Intelligent Systems, 9, 3559–3579.
Andreou, C. K., Andreou, P. C., & Lambertides, N. (2021). Financial distress risk and stock price crashes. Journal of Corporate Finance, 67, Article 101870.
Araci, D. (2019). Finbert: Financial sentiment analysis with pre-trained language models. arXiv preprint arXiv:1908.10063.
Avramov, D., Chordia, T., Jostova, G., & Philipov, A. (2013). Anomalies and financial distress. Journal of Financial Economics, 108(1), 139–159.
Azimi, M., & Agrawal, A. (2021). Is positive sentiment in corporate annual reports informative? Evidence from deep learning. The Review of Asset Pricing Studies,
    11(4), 762–805.
Campbell, J. L., Chen, H., Dhaliwal, D. S., Lu, H.-m., & Steele, L. B. (2014). The information content of mandatory risk factor disclosures in corporate filings.
    Review of Accounting Studies, 19, 396–455.
Carmona, P., Dwekat, A., & Mardawi, Z. (2022). No more black boxes! Explaining the predictions of a machine learning XGBoost classifier algorithm in business
    failure. Research in International Business and Finance, 61, Article 101649.
Caserio, C., Panaro, D., & Trucco, S. (2019). Management discussion and analysis: a tone analysis on US financial listed companies. Management Decision, 58(3),
    510–525.
Cecchini, M., Aytug, H., Koehler, G. J., & Pathak, P. (2010). Making words work: Using financial text as a predictor of financial events. Decision Support Systems,
    50(1), 164–175.
Che, W., Wang, Z., Jiang, C., & Abedin, M. Z. (2024). Predicting financial distress using multimodal data: An attentive and regularized deep learning method.
    Information Processing & Management, 61(4), Article 103703.
Chen, T., & Guestrin, C. (2016). Xgboost: A scalable tree boosting system. In Proceedings of the 22nd acm sigkdd international conference on knowledge discovery
    and data mining (pp. 785–794).
Chen, T.-K., Liao, H.-H., Chen, G.-D., Kang, W.-H., & Lin, Y.-C. (2023). Bankruptcy prediction using machine learning models with the text-based communicative
    value of annual reports. Expert Systems with Applications, 233, Article 120714.
Demšar, J. (2006). Statistical comparisons of classifiers over multiple data sets. Journal of Machine Learning Research, 7, 1–30.
Devlin, J., Chang, M.-W., Lee, K., & Toutanova, K. (2018). Bert: Pre-training of deep bidirectional transformers for language understanding. arXiv preprint
    arXiv:1810.04805.
Dietterich, T. G. (1998). Approximate statistical tests for comparing supervised classification learning algorithms. Neural Computation, 10(7), 1895–1923.
Du, X., Li, W., Ruan, S., & Li, L. (2020). CUS-heterogeneous ensemble-based financial distress prediction for imbalanced dataset with ensemble feature selection.
    Applied Soft Computing, 97, Article 106758.
Faris, H., Abukhurma, R., Almanaseer, W., Saadeh, M., Mora, A. M., Castillo, P. A., & Aljarah, I. (2020). Improving financial bankruptcy prediction in a highly
    imbalanced class distribution using oversampling and ensemble learning: a case from the spanish market. Progress in Artificial Intelligence, 9, 31–53.
Garcia, S., & Herrera, F. (2008). An extension on ‘‘statistical comparisons of classifiers over multiple data sets’’ for all pairwise comparisons. Journal of Machine
    Learning Research, 9(12), 2677–2694.
García, V., Marques, A. I., & Sánchez, J. S. (2019). Exploring the synergetic effects of sample types on the performance of ensembles for credit risk and corporate
    bankruptcy prediction. Information Fusion, 47, 88–101.
Ghatasheh, N., Faris, H., Abukhurma, R., Castillo, P. A., Al-Madi, N., Mora, A. M., Al-Zoubi, A. M., & Hassanat, A. (2020). Cost-sensitive ensemble methods for
    bankruptcy prediction in a highly imbalanced data distribution: A real case from the spanish market. Progress in Artificial Intelligence, 9, 361–375.
Grootendorst, M. (2022). BERTopic: Neural topic modeling with a class-based TF-IDF procedure. arXiv preprint arXiv:2203.05794.
Gupta, A., Rawte, V., & Zaki, M. J. (2023). Predicting firm financial performance from SEC filing changes using automatically generated dictionary. Computational
    Economics, 1–28.


                                                                                 19
P. Hajek and M. Munk                                                                                         Information Processing and Management 61 (2024) 103820


Habib, A., Costa, M. D., Huang, H. J., Bhuiyan, M. B. U., & Sun, L. (2020). Determinants and consequences of financial distress: review of the empirical literature.
     Accounting & Finance, 60, 1023–1075.
Hajek, P. (2018). Combining bag-of-words and sentiment features of annual reports to predict abnormal stock returns. Neural Computing and Applications, 29,
     343–358.
Hajek, P., Abedin, M. Z., & Sivarajah, U. (2023). Fraud detection in mobile payment systems using an XGBoost-based framework. Information Systems Frontiers,
     25(5), 1985–2003.
Hajek, P., & Munk, M. (2023). Speech emotion recognition and text sentiment analysis for financial distress prediction. Neural Computing and Applications, 35,
     21463–21477.
Hajek, P., Olej, V., & Myskova, R. (2014). Forecasting corporate financial performance using sentiment in annual reports for stakeholders’ decision-making.
     Technological and Economic Development of Economy, 20(4), 721–738.
Han, Y., & Wang, T. (2021). Semi-supervised clustering for financial risk analysis. Neural Processing Letters, 53(5), 3561–3572.
Huang, Z., Chen, H., Hsu, C.-J., Chen, W.-H., & Wu, S. (2004). Credit rating analysis with support vector machines and neural networks: a market comparative
     study. Decision Support Systems, 37(4), 543–558.
Huang, S.-C., Tang, Y.-C., Lee, C.-W., & Chang, M.-J. (2012). Kernel local Fisher discriminant analysis based manifold-regularized SVM model for financial distress
     predictions. Expert Systems with Applications, 39(3), 3855–3861.
Huang, A. H., Wang, H., & Yang, Y. (2023). FinBERT: A large language model for extracting information from financial text. Contemporary Accounting Research,
     40(2), 806–841.
Huang, B., Yao, X., Luo, Y., & Li, J. (2023). Improving financial distress prediction using textual sentiment of annual reports. Annals of Operations Research,
     330(1), 457–484.
Jiang, C., Lyu, X., Yuan, Y., Wang, Z., & Ding, Y. (2022). Mining semantic features in current reports for financial distress prediction: Empirical evidence from
     unlisted public firms in China. International Journal of Forecasting, 38(3), 1086–1099.
Karlos, S., Kotsiantis, S., Fazakis, N., & Sgarbas, K. (2016). Effectiveness of semi-supervised learning in bankruptcy prediction. In 2016 7th international conference
     on information, intelligence, systems & applications (pp. 1–6). IEEE.
Kim, K., & Park, S. (2023). AOBERT: All-modalities-in-one BERT for multimodal sentiment analysis. Information Fusion, 92, 37–45.
Kostopoulos, G., Karlos, S., Kotsiantis, S., & Tampakas, V. (2017). Evaluating active learning methods for bankruptcy prediction. In Brain function assessment in
     learning: First international conference, BFAL 2017, Patras, Greece, September 24-25, 2017, proceedings 1 (pp. 57–66). Springer.
Le, T. (2022). A comprehensive survey of imbalanced learning methods for bankruptcy prediction. IET Communications, 16(5), 433–441.
Lengkeek, M., van der Knaap, F., & Frasincar, F. (2023). Leveraging hierarchical language models for aspect-based sentiment analysis on financial data. Information
     Processing & Management, 60(5), Article 103435.
Li, F. (2006). Do stock market investors understand the risk sentiment of corporate annual reports? Available at SSRN 898181.
Li, S., Shi, W., Wang, J., & Zhou, H. (2021). A deep learning-based approach to constructing a domain sentiment lexicon: a case study in financial distress
     prediction. Information Processing & Management, 58(5), Article 102673.
Liang, D., Tsai, C.-F., Lu, H.-Y. R., & Chang, L.-S. (2020). Combining corporate governance indicators with stacking ensembles for financial distress prediction.
     Journal of Business Research, 120, 137–146.
Liu, W., Fan, H., Xia, M., & Pang, C. (2022). Predicting and interpreting financial distress using a weighted boosted tree-based tree. Engineering Applications of
     Artificial Intelligence, 116, Article 105466.
Loughran, T., & McDonald, B. (2011). When is a liability not a liability? Textual analysis, dictionaries, and 10-Ks. The Journal of Finance, 66(1), 35–65.
Lundberg, S. M., & Lee, S.-I. (2017). A unified approach to interpreting model predictions. Advances in Neural Information Processing Systems, 30, 1–10.
Mai, F., Tian, S., Lee, C., & Ma, L. (2019). Deep learning models for bankruptcy prediction using textual disclosures. European Journal of Operational Research,
     274(2), 743–758.
Matin, R., Hansen, C., Hansen, C., & Mølgaard, P. (2019). Predicting distresses using deep learning of text segments in annual reports. Expert Systems with
     Applications, 132, 199–208.
Mushava, J., & Murray, M. (2022). A novel XGBoost extension for credit scoring class-imbalanced data combining a generalized extreme value link and a modified
     focal loss function. Expert Systems with Applications, 202, Article 117233.
Myskova, R., & Hajek, P. (2020). Mining risk-related sentiment in corporate annual reports and its effect on financial performance. Technological and Economic
     Development of Economy, 26(6), 1422–1443.
Nguyen, B.-H., & Huynh, V.-N. (2022). Textual analysis and corporate bankruptcy: A financial dictionary-based sentiment approach. Journal of the Operational
     Research Society, 73(1), 102–121.
Park, M. S., Son, H., Hyun, C., & Hwang, H. J. (2021). Explainability of machine learning models for bankruptcy prediction. IEEE Access, 9, 124887–124899.
Shang, L., Xi, H., Hua, J., Tang, H., & Zhou, J. (2023). A lexicon enhanced collaborative network for targeted financial sentiment analysis. Information Processing
     & Management, 60(2), Article 103187.
Sun, J., Li, H., Fujita, H., Fu, B., & Ai, W. (2020). Class-imbalanced dynamic financial distress prediction based on Adaboost-SVM ensemble combined with
     SMOTE and time weighting. Information Fusion, 54, 128–144.
Suzuki, M., Sakaji, H., Hirano, M., & Izumi, K. (2023). Constructing and analyzing domain-specific language model for financial text mining. Information Processing
     & Management, 60(2), Article 103194.
Tang, X., Li, S., Tan, M., & Shi, W. (2020). Incorporating textual and management factors into financial distress prediction: A comparative study of machine
     learning methods. Journal of Forecasting, 39(5), 769–787.
Tsai, C.-F., Sue, K.-L., Hu, Y.-H., & Chiu, A. (2021). Combining feature selection, instance selection, and ensemble classification techniques for improved financial
     distress prediction. Journal of Business Research, 130, 200–209.
Veganzones, D., & Séverin, E. (2018). An investigation of bankruptcy prediction in imbalanced datasets. Decision Support Systems, 112, 111–124.
Wang, C., Deng, C., & Wang, S. (2020). Imbalance-XGBoost: leveraging weighted and focal losses for binary label-imbalanced classification with XGBoost. Pattern
     Recognition Letters, 136, 190–197.
Wang, M., & Ku, H. (2021). Utilizing historical data for corporate credit rating assessment. Expert Systems with Applications, 165, Article 113925.
Wang, G., Ma, J., Chen, G., & Yang, Y. (2020). Financial distress prediction: Regularized sparse-based random subspace with ER aggregation rule incorporating
     textual disclosures. Applied Soft Computing, 90, Article 106152.
Wang, Q., Su, T., Lau, R. Y. K., & Xie, H. (2023). DeepEmotionNet: Emotion mining for corporate performance analysis and prediction. Information Processing &
     Management, 60(3), Article 103151.
Wang, L., & Zhang, W. (2023). A qualitatively analyzable two-stage ensemble model based on machine learning for credit risk early warning: Evidence from
     Chinese manufacturing companies. Information Processing & Management, 60(3), Article 103267.
Yan, L., Hu, Y., Li, M., & Chan, K. C. (2023). Does credit rating provide incremental predictive power on a firm’s future financial distress? Evidence from China.
     Emerging Markets Finance and Trade, 59(12), 3798–3812.
Zhang, Z., Wu, C., Qu, S., & Chen, X. (2022). An explainable artificial intelligence approach for financial distress prediction. Information Processing & Management,
     59(4), Article 102988.
Zhao, Y., & Hryniewicki, M. K. (2018). Xgbod: improving supervised outlier detection with unsupervised representation learning. In 2018 international joint
     conference on neural networks (pp. 1–8). IEEE.


                                                                                  20
P. Hajek and M. Munk                                                                                      Information Processing and Management 61 (2024) 103820


Zhao, Q., Xu, W., & Ji, Y. (2023). Predicting financial distress of Chinese listed companies using machine learning: To what extent does textual disclosure
    matter? International Review of Financial Analysis, 89, Article 102770.
Zhao, S., Xu, K., Wang, Z., Liang, C., Lu, W., & Chen, B. (2022). Financial distress prediction by combining sentiment tone features. Economic Modelling, 106,
    Article 105709.
Zhou, L. (2013). Performance of corporate bankruptcy prediction models on imbalanced dataset: The effect of sampling methods. Knowledge-Based Systems, 41,
    16–25.
Zhou, F., Qi, X., Xiao, C., & Wang, J. (2021). MetaRisk: Semi-supervised few-shot operational risk classification in banking industry. Information Sciences, 552,
    1–16.
Zhu, X., Liu, F., & Niu, Z. (2021). Financial distress detection and interpretation with semi-supervised system. In Intelligent computing theories and application:
    17th international conference, ICIC 2021, Shenzhen, China, August 12–15, 2021, proceedings, part II (pp. 329–339). Springer.
Zhu, W., Zhang, T., Wu, Y., Li, S., & Li, Z. (2022). Research on optimization of an enterprise financial risk early warning method based on the DS-RF model.
    International Review of Financial Analysis, 81, Article 102140.
Zieba, M., Tomczak, S. K., & Tomczak, J. M. (2016). Ensemble boosted trees with synthetic features generation in application to bankruptcy prediction. Expert
    Systems with Applications, 58, 93–101.
Zoričák, M., Gnip, P., Drotár, P., & Gazda, V. (2020). Bankruptcy prediction for small-and medium-sized companies using severely imbalanced datasets. Economic
    Modelling, 84, 165–176.




                                                                                21
