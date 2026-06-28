Perplexity answer url: https://www.perplexity.ai/search/6b52a3ad-42c6-44c3-ba5a-11e1217f524c#1

Hieronder staat een technische architectuurplaat in tekstvorm, plus een concrete implementatie-aanpak voor een **ontology-gedreven agentic XAF parser**. XAF is een XML Auditfile Financieel voor Nederlandse boekhoudgegevens; XAF 4.0 is een vereenvoudigde opvolger van XAF 3.2, en de standaard legt nadrukkelijk een relatie met RGS. XAF wordt gebruikt voor het uitwisselen van administratieve gegevens voor rapportage- en controledoeleinden, wat het geschikt maakt als bron voor een semantische parser. [documentation.invantive](https://documentation.invantive.com/2017R2/xaf32-data-model/webhelp/index.html)

## Architectuurplaat

```mermaid
flowchart LR
    A[XAF bronbestand\n(XML 3.2 / 4.0)] --> B[Schema & versie-detectie]
    B --> C[XML normalizer]
    C --> D[Entity extractor\n(grootboek, journalen, btw, debiteuren, crediteuren, transacties)]
    D --> E[Ontology mapper]
    E --> F[Knowledge graph\nRDF/Property Graph]
    F --> G[Agent planner]
    G --> H[Parsing agents\nextract, validate, enrich, reconcile]
    H --> I[Validation engine\nXSD, SHACL, business rules]
    I --> J[Output layer\nJSON, CSV, API, audit trail]

    K[Reference data\nRGS, chart of accounts,\nVAT rules, KVK master data] --> E
    K --> I
    L[Human review UI] <--> G
    L <--> I
```

## Doel van de ontology

De ontology vormt de semantische laag tussen ruwe XAF-XML en betekenisvolle financiële concepten. In de praktijk is dat nodig omdat XAF uit veel tabelachtige entiteiten en velden bestaat; de XAF 3.2 driver bijvoorbeeld exposeert 48 tabellen en 1110 kolommen, wat laat zien hoe breed het datamodel is. Met een ontology kun je zulke bronnen niet alleen parsen, maar ook begrijpen: “dit is een journaalregel”, “dit is een RGS-koppeling”, “dit is een btw-transactie” en “dit hoort bij deze administratie”. [referentiegrootboekschema](https://www.referentiegrootboekschema.nl/rgs-38-mapping-naar-sbr-nt20-concepten)

## Ontology-ontwerp

Gebruik een **core ontology** met daaronder domeinmodules. De kern-entiteiten zijn: `Company`, `Administration`, `LedgerAccount`, `Journal`, `JournalEntry`, `TransactionLine`, `Counterparty`, `Invoice`, `VATCode`, `RGSCode`, `ReportingConcept`, `Period`, `Document`, `SourceFile`, `ValidationIssue` en `MappingRule`. Voeg relaties toe zoals `hasJournal`, `containsEntry`, `postsToAccount`, `mapsToRGS`, `mapsToReportingConcept`, `referencesDocument` en `derivedFromSourceField`.

Een praktische indeling is:

- **Syntax layer**: XAF-versies, XML nodes, namespaces, field types.
- **Semantic layer**: boekhoudkundige concepten, boekingsregels, documentrelaties.
- **Regulatory layer**: RGS, SBR, NT20, fiscale en rapportageconcepten.
- **Operational layer**: parsing status, exceptions, confidence, provenance.

## Agentic parsing flow

De agentic parser werkt beter als een orkestrator meerdere gespecialiseerde agents aanstuurt in plaats van één monolithische parser. Een goede flow is: eerst versie-detectie en schema-validatie, daarna structurele extractie, daarna semantische verrijking via de ontology, en tenslotte reconciliatie met referentiedata en rapportageregels. De Belastingdienst beschrijft XAF 4.0 als een vereenvoudigde en meer toekomstbestendige standaard, met duidelijker vastgelegde RGS-ondersteuning; dat maakt een regel- en ontology-gedreven aanpak extra logisch. [referentiegrootboekschema](https://www.referentiegrootboekschema.nl/rgs-38-mapping-naar-sbr-nt20-concepten)

## Implementatie-aanpak

1. Bouw een **XML ingestion layer** die XAF 3.2 en 4.0 herkent, namespaces valideert en een intern canoniek formaat maakt.
2. Implementeer een **mapping engine** die XML-nodes omzet naar ontology-instanties, met expliciete provenance per veld.
3. Gebruik een **knowledge graph store** voor entiteiten, relaties en referentiemappingen, zodat de agent kan redeneren over ontbrekende of inconsistente data.
4. Voeg **validation rules** toe via XSD voor structuur, SHACL voor semantiek, en business rules voor boekhoudlogica.
5. Maak een **agent layer** die per taak een gespecialiseerde rol heeft: extractor, reconciler, enricher, anomaly detector en reporter.
6. Exporteer resultaten naar JSON/CSV/API en bewaar altijd een audit trail van bronveld naar afgeleide semantische interpretatie.

## Praktische ontwerppatronen

Gebruik geen “losse” parser die direct van XML naar rapportageformat gaat; dat wordt snel fragiel. Kies liever voor een tussenlaag met ontology en graph, zodat je later nieuwe standaarden of extra rapportagevormen kunt toevoegen zonder de kernparser te herschrijven. Dit sluit ook aan op het feit dat XAF 4.0 nadrukkelijk ontworpen is om eenvoudiger te implementeren en beter uitwisselbaar te worden, mede door duidelijkere RGS-verankering. [referentiegrootboekschema](https://www.referentiegrootboekschema.nl/rgs-38-mapping-naar-sbr-nt20-concepten)

## Voorbeeld van kernregels

- Een `LedgerAccount` kan meerdere `RGSCode`-mappings hebben, maar slechts één actieve mapping per context/versie.
- Een `JournalEntry` moet minimaal één `TransactionLine` bevatten.
- Een `TransactionLine` mag alleen posten op een `LedgerAccount` dat geldig is binnen de boekingsperiode.
- Een `MappingRule` bewaart bronveld, doelconcept, versie, confidence en validiteit.
- Een `ValidationIssue` krijgt severity, rule-id, bronverwijzing en hersteladvies.

## Aanbevolen stack

Voor een robuuste implementatie kun je denken aan:

- **Parser**: Python `lxml` of .NET XML reader.
- **Ontology**: OWL/RDF voor semantiek, SHACL voor constraints.
- **Graph store**: Neo4j, GraphDB of Apache Jena.
- **Rules engine**: Python rules, Drools, of SHACL-based validation.
- **Agent orchestration**: tool-driven workflow met duidelijke state machine.
- **Observability**: structured logging, lineage, replayable runs en exception queues.

## Ontwikkelvolgorde

Begin met 3 lagen: XAF-ingest, ontology-core, en validatie. Voeg daarna referentiemapping toe voor RGS en eventueel SBR, zodat de parser direct bruikbaar wordt voor rapportage- en controlestromen. Pas als dat stabiel is, maak je de agentic laag slimmer met self-healing mappings, anomaly detection en confidence-based human review.

## Directe vertaling naar jouw context

Als je dit voor SAP-addonontwikkeling wilt inzetten, is de meest praktische route: XAF import als service, semantische opslag in graph, en vervolgens mapping naar interne SAP/analytische modellen. Dan kun je dezelfde ontology gebruiken voor import, reconciliatie, reporting en datakwaliteitscontrole zonder per use case een nieuw parserpad te bouwen.

Would you like me to turn this into a concrete component diagram voor SAP / Python, of meteen in een implementatieplan met classes, datamodellen en endpoints?
