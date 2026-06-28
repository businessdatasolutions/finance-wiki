---
zotero_item_key: L5ADJRU6
zotero_collection: finance-wiki
item_type: webpage
title: Netherlands Auditfile Financieel (XAF 4.0) Requirements Guide
authors: []
date_published: '2026-03-01'
doi: ''
isbn: ''
url: https://invoicedataextraction.com/blog/netherlands-auditfile-financieel-xaf-requirements
citekey: ''
abstract: Guide to Netherlands Auditfile Financieel (XAF) requirements. Covers XAF 4.0 transition, XAF
  vs SAF-T differences, audit file data, and compliance scope.
fulltext_source: zotero-extracted
converter: ''
notes: Acquired from Zotero collection `finance-wiki`. itemType `webpage` routed to raw/articles/ — confirm
  routing + identity at Process.
---

Invoice Data Extraction
Home
Articles & Analysis
Tax & Compliance
Netherlands Auditfile Financieel (XAF 4.0) Requirements Guide
Netherlands Auditfile Financieel (XAF 4.0) Requirements Guide

Guide to Netherlands Auditfile Financieel (XAF) requirements. Covers XAF 4.0 transition, XAF vs SAF-T differences, audit file data, and compliance scope.

Published
Mar 1, 2026
Updated
Mar 24, 2026
Reading Time
15 min
Author
David Harding
TOPICS:
Tax & Compliance
Netherlands
digital audit file
XAF
Belastingdienst

The Auditfile Financieel (XAF) is the standard the Netherlands uses for digital audit files that businesses must produce when the Belastingdienst requests them during tax inspections. As of January 1, 2026, XAF 4.0 is mandatory, retiring the 12-year-old XAF 3.2 format in favor of a simplified structure built around approximately 90 data elements and aligned with the Dutch RGS (Referentie Grootboekschema) chart of accounts.

What Is the Netherlands Auditfile Financieel?

The Auditfile Financieel (XAF) is a structured XML file that contains a business's complete financial administration data in a standardized, machine-readable format. It is the Netherlands' own standard for digital audit files, distinct from international alternatives, and purpose-built for the Dutch regulatory environment. This section covers the regulation itself, not how to configure a specific accounting package.

The Belastingdienst (Netherlands Tax and Customs Administration) can request this file during a boekenonderzoek (tax inspection or audit). When requested, businesses must produce a valid XAF export within a reasonable timeframe. This is not a routine filing or a proactive submission. The XAF sits dormant in your accounting workflow until the tax authority needs to examine your financial records, at which point your software must generate a compliant export on demand.

According to the Belastingdienst's 2024 annual report, the Netherlands Tax and Customs Administration collected EUR 375 billion in tax and premium revenues in 2024, an increase of EUR 23 billion compared to 2023. An administration of this scale has both the mandate and the operational capacity to enforce compliance across thousands of inspections each year.

The XAF operates under the SBR (Standard Business Reporting) program, the Dutch government's initiative for standardized financial reporting between businesses and government agencies. SBR encompasses multiple reporting standards, from annual accounts to tax returns. The Auditfile Financieel is the audit file component within this broader framework, ensuring that financial administration data follows a consistent, validated structure when presented for inspection.

XAF vs SAF-T: Why the Netherlands Has Its Own Standard

A persistent error in international tax compliance guides is listing the Netherlands as a SAF-T country. It is not. Understanding this distinction is critical for any finance team managing cross-border European operations.

SAF-T (Standard Audit File for Tax) is an OECD-originated international standard designed for the electronic exchange of accounting data between organizations and tax authorities. Several European countries have adopted SAF-T as their mandated format, including Portugal, Norway, Poland, Austria, and Luxembourg. Each country's implementation varies, but they share the same OECD-defined foundation.

The Netherlands follows a different path entirely. The Dutch tax authority (Belastingdienst) developed the Auditfile Financieel (XAF) as its own standard for structured digital financial data, and it predates SAF-T adoption by many of the countries listed above. XAF and SAF-T serve the same fundamental purpose: giving tax authorities structured, machine-readable access to an organization's financial records for audit and compliance verification. But they are technically distinct standards with different XML schemas, different data element specifications, and different structural requirements.

The practical risk of confusing the two is real. Professionals who rely on international compliance resources that incorrectly classify the Netherlands under the SAF-T umbrella may configure the wrong export format, apply incorrect data mapping rules, or build compliance workflows that produce files the Belastingdienst cannot process. The result is failed submissions and audit delays that are entirely avoidable.

This distinction matters most for businesses operating across multiple European jurisdictions. A company with subsidiaries in both the Netherlands and Germany, for example, must implement XAF for its Dutch entities while separately meeting Germany's GoBD digital record-keeping requirements for its German operations. These are fundamentally different frameworks, not regional variations of the same standard. Similarly, Sweden uses its own SIE accounting data standard rather than adopting SAF-T, adding yet another distinct format to the European compliance landscape. Each requires its own data extraction logic, validation rules, and export configuration.

Looking ahead, XAF 4.0 has been designed with potential future alignment with European SAF-T harmonization efforts in mind, particularly through the EU's ViDA (VAT in the Digital Age) initiative. However, as of 2026, XAF and SAF-T remain separate standards with no merged specification on the horizon. Compliance teams should treat them as independent requirements and plan accordingly.

What Changed with XAF 4.0 in 2026

XAF 4.0 became mandatory on January 1, 2026, replacing XAF 3.2, the version that had been in effect since 2014. After 12 years without a major revision, the update brings structural changes that every business operating in the Netherlands needs to understand.

The most significant change is a dramatic simplification of the file structure. XAF 4.0 reduces the number of data elements from approximately 250 to approximately 90. The Belastingdienst eliminated redundant and rarely used fields, cutting the data footprint by roughly two-thirds while preserving the audit file's core function: giving tax inspectors a standardized, machine-readable view of a company's financial administration.

RGS Alignment

XAF 4.0 aligns the audit file with the Referentie GrootboekSchema (RGS), the Dutch standard chart of accounts. Under XAF 3.2, businesses could use any internal account structure, which meant the Belastingdienst received audit files with wildly inconsistent account classifications. The RGS alignment changes this. The chart of accounts structure within the audit file now follows a nationally standardized reference framework, which improves consistency across businesses and makes tax authority analysis significantly more efficient.

For finance teams, this means verifying that your general ledger accounts map correctly to the RGS taxonomy. The RGS classification structure is publicly documented at referentiegrootboekschema.nl, which includes an English-language overview. If your accounting software already supports RGS mapping, the transition is largely automated. If it does not, manual mapping work may be required before your system can produce a compliant XAF 4.0 export.

Preparation for ViDA

XAF 4.0 was designed with the EU's VAT in the Digital Age (ViDA) initiative in mind. While the Dutch XAF and the OECD's SAF-T remain distinct standards, the new version positions the Netherlands for potential future harmonization with European digital reporting requirements. Specific data elements in XAF 4.0 were structured to accommodate fields that ViDA is expected to require, reducing the likelihood of another disruptive overhaul when EU-wide digital reporting mandates take effect. The XAF sits alongside the Netherlands' parallel adoption of Peppol e-invoicing for structured invoice exchange, and together these two standards form the core of the Dutch government's digital financial infrastructure roadmap.

Backwards Compatibility

There is none. XAF 3.2 files are no longer accepted by the Belastingdienst from January 1, 2026. Businesses that have not updated their systems cannot produce a compliant audit file if one is requested during a tax inspection. Given that the Belastingdienst can request an audit file at any point during an inspection, operating with outdated export capabilities is a material compliance risk. When a business cannot provide requested records in the required format, the Belastingdienst has broad discretion to reverse the burden of proof, estimate tax liability based on its own calculations, or impose administrative penalties.

Accounting Software Updates

All major Dutch-market accounting software vendors have released or are releasing XAF 4.0-compatible updates. This includes Exact Online, Twinfield, AFAS, Unit4, SAP, and Microsoft Dynamics 365. However, running a compatible software version does not guarantee compliance on its own. Finance and IT teams should verify three things: that their software version explicitly supports XAF 4.0 export, that the RGS mapping is configured correctly for their chart of accounts, and that a test export produces a valid file before one is needed for an actual inspection. IT teams responsible for validating the export can find the XAF 4.0 XML schema specification through the SBR program's technical documentation.

What Data Must a Dutch Audit File Contain?

The XAF is a structured snapshot of a business's entire financial administration for a given fiscal period. Rather than a real-time transaction feed, it is a consolidated XML export that the Belastingdienst can request and analyze during a tax inspection. The Belastingdienst expects five categories of data in the file.

Header data identifies the business and defines the scope of the file. This includes the company name, Chamber of Commerce registration number, tax identification number (RSIN/BSN), the fiscal year covered, the date range of included transactions, and the date the file was generated. Header data gives the inspector immediate context about which entity and period the audit file represents.

General ledger structure captures the full chart of accounts used by the business. Every account number, description, and account type (asset, liability, revenue, expense) is exported. Under XAF 4.0, this structure aligns with the RGS (Referentie GrootboekSchema) standard chart of accounts, which creates a uniform mapping across different accounting software packages. This standardization allows the Belastingdienst to compare ledger structures across businesses regardless of which system generated the file.

Opening balances record the balance of each general ledger account at the start of the fiscal period. These figures establish the baseline from which all transaction activity is measured, enabling inspectors to verify that closing balances from a prior period carry forward correctly.

Journal entries form the largest portion of the Belastingdienst digital audit file. Every financial transaction recorded during the period is included with its journal ID, posting date, description, debit and credit amounts, and a reference to the originating source document. That source document reference is critical: each journal entry traces back to a specific invoice, credit note, bank statement, or receipt. This traceability means the accuracy of the XAF is directly determined by the accuracy of those underlying source documents. If invoice data entering the accounting system contains errors in amounts, dates, or tax codes, those errors propagate into the audit file.

Sub-ledger data covers accounts receivable and accounts payable at the individual customer and supplier level. These records link each outstanding receivable or payable to specific transactions in the general ledger, giving inspectors a detailed view of trade relationships and payment patterns.

Businesses operating in the Netherlands are required to retain their financial records for seven years under Dutch fiscal law. The XAF must be producible for any fiscal period within that retention window when the tax authority requests it. This obligation applies to both the digital audit file itself and the source documents it references, including invoices stored physically or digitally. For a broader perspective on how document retention rules compare globally, see invoice retention requirements across jurisdictions.

Who Must Comply with Dutch XAF Requirements?

Every business registered in the Netherlands that maintains financial records falls under the XAF obligation. This is not a requirement reserved for large corporations or publicly listed companies. Sole proprietors (eenmanszaak), partnerships (VOF), BVs, and multinational subsidiaries all share the same fundamental duty: the ability to produce a compliant audit file when the Belastingdienst asks for one.

The trigger is straightforward. During a boekenonderzoek (a tax audit or inspection conducted by the Dutch tax authority), the Belastingdienst can request your auditfile financieel. There is no proactive submission schedule and no annual filing deadline for the XAF. The obligation is reactive: you must be able to generate and deliver the file upon request, in the correct format, covering the periods under review.

How the Obligation Applies by Business Size

Medium and large companies are already subject to mandatory external statutory audits under Dutch law. However, the XAF obligation is separate from and broader than any statutory audit requirement. A statutory audit examines your financial statements; the XAF gives the tax authority direct access to your transaction-level accounting data. Both can apply simultaneously, but they serve different purposes and different authorities.

Small businesses, including sole proprietors and partnerships, face the same XAF obligation. If the Belastingdienst selects your business for an inspection, you must produce the file regardless of your company's size, revenue, or number of employees — even businesses operating under the Dutch KOR small business VAT exemption retain their obligation to maintain XAF-ready financial records. For ZZP'ers specifically, ensuring invoices meet the mandatory Dutch freelancer invoice fields is the first step toward maintaining an XAF-compliant administration. In practice, smaller businesses are sometimes underinvested in compliance tooling, which makes this a particularly important area to verify.

International companies with Dutch subsidiaries, whether operating through a branch office or a locally incorporated BV, must ensure their Dutch entities can produce a compliant XAF from their local accounting systems. Global ERP platforms do not always include XAF export capability by default, and the export must reflect the Dutch entity's ledger data specifically, not consolidated group figures. For organizations preparing for a tax authority audit in multiple countries, each jurisdiction's requirements must be addressed independently.

The Practical Compliance Reality

The Netherlands tax audit file obligations are, in effect, a software capability requirement. If your accounting system cannot generate a valid XAF 4.0 export, you have a compliance gap, even if no inspection has been triggered yet. Waiting until the Belastingdienst contacts you to discover that your software lacks this function creates an avoidable risk. The time to verify XAF export capability is before an audit, not during one.

For businesses operating across multiple EU jurisdictions, note that Dutch audit file requirements are jurisdiction-specific. The Netherlands requires XAF; countries like France with its FEC (Fichier des Écritures Comptables), Portugal, and Poland each require SAF-T or their own national audit file formats. Compliance teams should map requirements per country rather than assuming a single standard covers all EU operations.

From Invoice to Audit File: Ensuring XAF-Ready Financial Data

Every invoice a business processes follows a predictable path into the audit file. Purchase and sales invoices are captured, coded to the appropriate general ledger accounts, and recorded as journal entries. Those journal entries, complete with their source document references, transaction dates, amounts, and account classifications, are precisely what the XAF exports. The audit file is a direct reflection of the financial administration that feeds it.

This means XAF compliance is not something that happens at the moment of file generation. It starts at the point of invoice capture. If an invoice is recorded with an incorrect amount, a wrong transaction date, a missing supplier identifier, or a misclassified account code, that error flows through the general ledger and into the XAF. During a boekenonderzoek, the Belastingdienst can and will trace discrepancies in the audit file back to their source documents. An XAF that contains inconsistencies with the underlying invoices raises immediate flags.

This risk is amplified for businesses processing high volumes of invoices from multiple suppliers in varying formats: native PDFs, scanned paper documents, email attachments, and image files. Manual data entry at this stage remains the most common source of errors that later surface in audit files. A transposed digit on an invoice amount, a vendor name entered inconsistently across records, or a VAT code assigned to the wrong category may seem minor at the time of entry but compounds across hundreds or thousands of transactions — and when cumulative VAT errors exceed EUR 1,000, businesses are required to file a Dutch supplementary VAT return (suppletie aangifte) to correct the discrepancy before inspectors find it themselves. Sectors with specialized VAT treatments are especially prone to these misclassifications — for instance, Dutch construction reverse charge invoicing rules require btw verlegd entries that must be coded correctly in the ledger or they will surface as discrepancies in the audit file. For organizations looking to reduce this exposure, tools that automate invoice data extraction for Dutch compliance can significantly reduce these errors by standardizing how invoice data is captured across formats and languages.

Businesses that are transitioning to paperless invoice processing gain an additional advantage here: digital-first workflows eliminate the ambiguity of handwritten or poorly scanned documents and create a cleaner data pipeline into the general ledger.

Practical Next Steps for XAF 4.0 Readiness

Verify your accounting software supports XAF 4.0 export. Do not assume that XAF 3.2 compatibility is sufficient. Contact your software vendor to confirm XAF 4.0 support and ask about their migration timeline if support is not yet available.

Confirm your chart of accounts aligns with the RGS framework. XAF 4.0 requires this alignment. Review your account structure against the current RGS taxonomy and reclassify where necessary before your next export.

Audit your invoice processing workflow. Examine whether invoices are captured accurately and consistently before they reach the general ledger. Identify where manual entry introduces variation or error, particularly for supplier names, amounts, dates, and VAT classifications.

Address multi-entity requirements independently. For organizations with multiple Dutch entities, each entity must be able to produce a compliant XAF from its own local financial administration. Shared or consolidated systems need entity-level separation in their export capabilities.

Test your XAF 4.0 export before an inspection occurs. Generate a file, review it for completeness, and validate that source document references, journal entries, and account classifications are present and accurate. Discovering gaps during a Belastingdienst review is significantly more costly than finding them in advance.

The audit file is only as reliable as the invoices that feed it. For businesses facing their first boekenonderzoek under XAF 4.0, verifying invoice processing accuracy now is materially cheaper than explaining discrepancies to an inspector later.

Extract invoice data to Excel with natural language prompts

Upload your invoices, describe what you need in plain language, and download clean, structured spreadsheets. No templates, no complex configuration.

Exceptional accuracy on financial documents
1–8 seconds per page with parallel processing
50 free pages every month — no subscription
Any document layout, language, or scan quality
Native Excel types — numbers, dates, currencies
Files encrypted and auto-deleted within 24 hours
Start Extracting Free
View Pricing
CONTINUE READING

RELATED ARTICLES

Explore adjacent guides and reference articles on this topic.

Netherlands E-Invoicing Requirements in 2026

Learn when e-invoicing is mandatory in the Netherlands for B2G, B2B, and B2C invoices, and how Peppol, NLCIUS, SI-UBL, Digipoort, and ViDA fit together.

Netherlands Construction Reverse Charge Invoice Requirements

Guide to Dutch construction reverse charge invoicing: btw verlegd requirements, G-rekening chain liability, subcontractor chains, and foreign company rules.

Netherlands KOR Small Business VAT Scheme: Complete Guide

Guide to the Dutch KOR VAT scheme: 2025 eligibility rules, invoice requirements with mandatory exemption text, and when to choose KOR vs regular VAT registration.

Back to Articles & Analysis
INVOICE DATA EXTRACTION

The AI-native automation platform for high-accuracy invoice extraction

PLATFORM
Start Extraction
Home
Pricing
API
Python SDK
Node.js SDK
RESOURCES
Articles
Contact
TRUST & SECURITY
Security
Subprocessors
AI Data Use
LEGAL
Terms of Service
Data Processing Addendum
Privacy Policy
Refund Policy
US State Privacy Rights
EEA/UK Privacy Rights
Sign in
Create account

© 2026 Invoice Data Extraction — DEH Technologies LLC

Secure by Design. Your data is never used for AI training.
