# Government of Canada

# GreenHome Canada — Greener Homes Retrofit Grant Program

## Sovereign Digital Platform: System Development Proposal

---

**Classification:** UNCLASSIFIED
**Document Reference:** NRCan-GH-2025-SP-001
**Version:** 1.0
**Date:** March 4, 2026
**Prepared for:** Natural Resources Canada (NRCan), Treasury Board of Canada Secretariat (TBS)
**Prepared by:** Digital Transformation and Service Delivery Branch
**Status:** DRAFT — For Interdepartmental Review

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Mandate and Authority](#2-mandate-and-authority)
3. [Program Overview](#3-program-overview)
4. [Sovereignty and Data Residency](#4-sovereignty-and-data-residency)
5. [Security Architecture](#5-security-architecture)
6. [Privacy Framework](#6-privacy-framework)
7. [Identity Verification and Onboarding](#7-identity-verification-and-onboarding)
8. [Infrastructure and Hosting](#8-infrastructure-and-hosting)
9. [Application Architecture](#9-application-architecture)
10. [Validation and Fraud Prevention](#10-validation-and-fraud-prevention)
11. [Accessibility and Official Languages](#11-accessibility-and-official-languages)
12. [Governance Structure](#12-governance-structure)
13. [Risk Management](#13-risk-management)
14. [Implementation Roadmap](#14-implementation-roadmap)
15. [Budget Estimate](#15-budget-estimate)
16. [Appendices](#16-appendices)

---

## 1. Executive Summary

### 1.1 Purpose

This proposal establishes the plan for developing and operating the **GreenHome Canada Greener Homes Retrofit Grant Program** as a sovereign digital platform. The platform will manage the end-to-end lifecycle of residential energy retrofit grants — from eligibility determination and identity-verified application submission, through before-and-after photo documentation and licensed professional validation, to grant disbursement and audit.

### 1.2 Strategic Alignment

The GreenHome Canada platform advances three concurrent Government of Canada priorities:

- **Climate action** — Accelerating residential decarbonization toward Canada's 2030 and 2050 greenhouse gas reduction targets under the Canadian Net-Zero Emissions Accountability Act (S.C. 2021, c. 22).
- **Digital transformation** — Delivering accessible, user-centred digital services in accordance with the Government of Canada Digital Standards and the Policy on Service and Digital.
- **Digital sovereignty** — Ensuring all personal information and program data remains under exclusive Canadian legal jurisdiction, stored on Canadian soil, processed on Canadian-assessed infrastructure, and governed by Canadian law.

### 1.3 Scope of Funding

The platform will administer grants across ten retrofit categories:

| Category | Maximum Grant |
|---|---|
| Heat Pump Systems (air-source, ground-source, ductless) | $5,000 |
| Solar Power Systems (PV, solar thermal, battery storage) | $5,000 |
| Insulation Upgrades (attic, wall, basement, crawl space) | $5,000 |
| Windows and Doors (ENERGY STAR, triple-pane) | $5,000 |
| EV Charging Infrastructure (Level 2, panel upgrades) | $5,000 |
| Air Sealing and Weatherization | $1,000 |
| Energy-Efficient Water Heaters (heat pump, tankless) | $1,000 |
| Ventilation Systems — HRV/ERV | $1,000 |
| Smart Thermostats (ENERGY STAR certified) | $250 |
| Energy-Efficient Roofing (cool roof, metal, reflective) | $250 |

Homeowners may apply for grants in multiple categories. The maximum total grant per household is **$28,500** across all categories.

### 1.4 Key Design Principles

1. **Sovereignty first** — All data at rest within Canadian borders; all processing on CCCS-assessed Canadian infrastructure.
2. **Verified identity** — Integration with GCKey, Sign In Canada, and the forthcoming GC Sign in platform for authenticated, fraud-resistant onboarding.
3. **Defence in depth** — ITSG-33 CCCS Medium security profile with zero-trust network architecture.
4. **Privacy by design** — Privacy Impact Assessment completed before any personal information collection; data minimization at every stage.
5. **Accessibility and bilingualism** — WCAG 2.1 Level AA conformance; simultaneous English and French delivery of equal quality.
6. **Validation integrity** — Multi-layered fraud prevention through timestamped photo evidence, EXIF metadata verification, licensed professional sign-off, and risk-based audit sampling.

---

## 2. Mandate and Authority

### 2.1 Legislative Authority

| Instrument | Relevance |
|---|---|
| Department of Natural Resources Act (S.C. 1994, c. 41) | Establishes NRCan mandate over energy efficiency programs |
| Financial Administration Act (R.S.C., 1985, c. F-11) | Authority for expenditure of public funds; Transfer Payments Policy |
| Canadian Net-Zero Emissions Accountability Act (S.C. 2021, c. 22) | Legal framework for Canada's 2030/2050 emissions targets |
| Privacy Act (R.S.C., 1985, c. P-21) | Governs collection, use, and disclosure of personal information |
| Official Languages Act (R.S.C., 1985, c. O-3.01; modernized by Bill C-13, 2023) | Bilingual service delivery obligations |
| Accessible Canada Act (S.C. 2019, c. 10) | Barrier-free digital service delivery |

### 2.2 Treasury Board Policy Instruments

- **Policy on Service and Digital** (effective April 1, 2020) — Integrated management of services, information, IT, and cybersecurity.
- **Policy on Government Security** (effective July 1, 2019; amended January 6, 2025) — Protection of government information, assets, and services.
- **Directive on Security Management** (effective July 1, 2019; updated January 2025) — Including the Standard on Security Categorization (Appendix J).
- **Directive on Service and Digital, Appendix G** — Standard on Enterprise IT Service Common Configurations (GC Cloud Guardrails, mandatory since May 2022).
- **Directive on Privacy Practices** (updated October 2024) — Including the Standard on Privacy Impact Assessment (Appendix C).
- **Policy on Transfer Payments** — Governs the design and delivery of grant programs.
- **Direction for Electronic Data Residency (ITPIN 2017-02)** — Canadian data residency for Protected B/C/Classified data.
- **Direction on the Secure Use of Commercial Cloud Services (SPIN 2017-01)** — Requirements for use of commercial cloud.

### 2.3 Security Standards

- **ITSG-33** — IT Security Risk Management: A Lifecycle Approach (Canadian Centre for Cyber Security / CSE).
- **CCCS Medium Cloud Security Profile** (formerly Protected B, Medium Integrity, Medium Availability [PBMM]).
- **ITSP.50.105** — Guidance on Cloud Security Assessment and Authorization.
- **ITSM.50.100** — Cloud Service Provider IT Security Assessment Process.
- **GC Security Control Profile for Cloud-Based GC Services**.

---

## 3. Program Overview

### 3.1 Target Population

Canadian homeowners who:

- Are the registered owner of an existing residential property in Canada.
- Occupy the property as their primary residence.
- Own an eligible property type: single-detached, semi-detached, row house/townhouse, duplex/triplex, mobile/manufactured home on permanent foundation, or small multi-unit building (up to 4 units).

### 3.2 Program Lifecycle

The GreenHome Canada platform manages the following end-to-end lifecycle:

```
┌─────────────────────────────────────────────────────────────────────┐
│                    HOMEOWNER JOURNEY                                │
│                                                                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐           │
│  │ IDENTITY │  │ELIGIBILITY│  │ APPLICATION│ │ APPROVAL │           │
│  │VERIFICATION│ │  CHECK   │  │  SUBMIT  │  │  REVIEW  │           │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘           │
│       │              │              │              │                 │
│       ▼              ▼              ▼              ▼                 │
│  GCKey / Sign   Property &     Multi-step      Program              │
│  In Canada /    ownership      wizard with      officers             │
│  GC Sign in     validation     document         adjudicate           │
│                                upload                                │
│                                                                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐           │
│  │  WORK    │  │  PHOTO   │  │PROFESSIONAL│ │  GRANT   │           │
│  │ COMPLETE │  │  UPLOAD  │  │VALIDATION │  │ PAYMENT  │           │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘           │
│       │              │              │              │                 │
│       ▼              ▼              ▼              ▼                 │
│  Homeowner      Before/after    Licensed       Direct               │
│  completes      photos with     builder/       deposit               │
│  retrofit       metadata        engineer/      via                   │
│  within 12mo    verification    electrician/   Receiver              │
│                                 plumber        General               │
│                                 sign-off                             │
└─────────────────────────────────────────────────────────────────────┘
```

### 3.3 Grant Categories — Detailed Rationale

**Heat Pump Systems ($5,000)** — Heat pumps are the single most impactful residential decarbonization measure. Air-source heat pumps can reduce heating costs by 50%; ground-source (geothermal) systems deliver the highest efficiency ratings available. Cold-climate rated models are eligible for all Canadian regions.

**Solar Power Systems ($5,000)** — Rooftop solar PV and solar water heating reduce household electricity consumption by 50–100%. Net metering policies in most provinces allow homeowners to sell excess power back to the grid. Battery storage is eligible when paired with solar PV.

**Insulation Upgrades ($5,000)** — Attic insulation alone can reduce heating bills by 10–50%. Eligible work includes blown-in, batt, and spray foam insulation for attics, exterior walls, basements, crawl spaces, cathedral ceilings, and rim joists.

**Windows and Doors ($5,000)** — ENERGY STAR certified windows and doors can save $125–$465 annually on energy bills. Triple-pane windows and low-E coatings provide superior thermal performance in Canadian climates.

**EV Charging Infrastructure ($5,000)** — Level 2 (240V) home chargers are 5–7x faster than standard outlets and support Canada's transition to zero-emission transportation. Includes electrical panel upgrades and dedicated circuit installation.

**Air Sealing and Weatherization ($1,000)** — Air leaks account for 25–40% of heating and cooling costs. Professional air sealing using blower door testing is often the most cost-effective energy upgrade available.

**Energy-Efficient Water Heaters ($1,000)** — Heat pump water heaters are 2–3x more efficient than conventional electric tanks. Tankless (on-demand) models eliminate standby heat loss.

**Ventilation Systems — HRV/ERV ($1,000)** — Heat Recovery Ventilators and Energy Recovery Ventilators recover 70–80% of energy from outgoing stale air. Essential companion to air sealing for maintaining healthy indoor air quality.

**Smart Thermostats ($250)** — ENERGY STAR certified smart thermostats save 10–15% on heating and cooling costs by learning occupant schedules and adjusting automatically.

**Energy-Efficient Roofing ($250)** — Cool roofing materials can reduce roof surface temperature by up to 30°C. Metal roofing lasts 40–70 years vs. 15–20 for conventional asphalt shingles.

---

## 4. Sovereignty and Data Residency

### 4.1 Data Sovereignty Posture

The GreenHome Canada platform will operate as a **fully sovereign digital system**. This means:

1. **Canadian data residency** — All data at rest (personal information, application records, photographs, validation documents, audit logs) will be stored exclusively within Canadian geographic boundaries, in compliance with the Direction for Electronic Data Residency (ITPIN 2017-02).

2. **Canadian legal jurisdiction** — All data will be subject exclusively to Canadian law. The platform architecture will be designed to prevent exposure to foreign jurisdictional data access orders, including the U.S. Clarifying Lawful Overseas Use of Data Act (CLOUD Act, 2018).

3. **Canadian-assessed infrastructure** — All cloud services will be provided by Cloud Service Providers that have completed the Canadian Centre for Cyber Security (CCCS) Cloud Service Provider ITS Assessment (per ITSM.50.100) and meet the CCCS Medium Cloud Security Profile.

4. **Canadian-controlled operations** — All administrative and operational access to production systems will be performed by personnel who hold valid Government of Canada security clearances (minimum Reliability Status) and who are located in Canada.

### 4.2 Data Classification

| Data Element | Security Category | Rationale |
|---|---|---|
| Applicant personal information (name, address, email, phone) | Protected B | Serious injury to individual if disclosed |
| Property details and energy audit reports | Protected A | Injury to individual if disclosed |
| Photo evidence (before/after) | Protected A | Contains location and property information |
| Photo EXIF metadata (GPS, timestamp) | Protected B | Combined with other data, can identify individual |
| Professional validation records (license numbers, signed forms) | Protected B | Contains third-party professional credentials |
| Financial information (bank details for direct deposit) | Protected B | Serious financial injury if disclosed |
| Application adjudication records | Protected B | Contains personal assessments and decisions |
| Audit logs and system telemetry | Protected A | Operational security information |
| Aggregated, de-identified program statistics | Unclassified | No personal information |

### 4.3 Data Residency Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│                CANADIAN DATA RESIDENCY BOUNDARY                  │
│                                                                  │
│  ┌─────────────────────┐    ┌─────────────────────┐             │
│  │  Primary Region     │    │  Disaster Recovery   │             │
│  │  (Canada Central)   │    │  (Canada East)       │             │
│  │                     │    │                      │             │
│  │  ┌───────────────┐  │    │  ┌───────────────┐   │             │
│  │  │ Application   │  │    │  │ Read Replica   │   │             │
│  │  │ Database      │  │    │  │ Database       │   │             │
│  │  │ (Protected B) │  │    │  │ (Protected B)  │   │             │
│  │  └───────────────┘  │    │  └───────────────┘   │             │
│  │                     │    │                      │             │
│  │  ┌───────────────┐  │    │  ┌───────────────┐   │             │
│  │  │ Object Storage│  │    │  │ Object Storage │   │             │
│  │  │ (Photos/Docs) │  │    │  │ (Replicated)   │   │             │
│  │  │ AES-256 @ Rest│  │    │  │ AES-256 @ Rest │   │             │
│  │  └───────────────┘  │    │  └───────────────┘   │             │
│  │                     │    │                      │             │
│  │  ┌───────────────┐  │    │  ┌───────────────┐   │             │
│  │  │ Key Mgmt      │  │    │  │ Key Mgmt       │   │             │
│  │  │ Service (HSM) │  │    │  │ Service (HSM)  │   │             │
│  │  └───────────────┘  │    │  └───────────────┘   │             │
│  └─────────────────────┘    └─────────────────────┘             │
│                                                                  │
│  ┌─────────────────────────────────────────────────┐            │
│  │  Backup & Archive (Canada-based, geo-redundant)  │            │
│  │  Encrypted at rest with GC-managed keys          │            │
│  │  30-day operational backup + 7-year archive      │            │
│  └─────────────────────────────────────────────────┘            │
│                                                                  │
│          NO DATA LEAVES THIS BOUNDARY AT ANY TIME                │
└──────────────────────────────────────────────────────────────────┘
```

### 4.4 CLOUD Act Mitigation

To mitigate risks associated with foreign data access legislation (including the U.S. CLOUD Act), the following controls will be implemented:

1. **CSP region restriction** — Infrastructure provisioned exclusively in Canadian regions of the selected CSP, with technical controls preventing cross-border replication.
2. **Encryption with GC-managed keys** — All data at rest encrypted using AES-256 with encryption keys managed through a GC-controlled Hardware Security Module (HSM). Even if a foreign jurisdiction compelled the CSP to produce data, it would be encrypted and unintelligible without GC-held keys.
3. **Contractual protections** — Cloud service agreements will include Canadian law governing clauses and provisions requiring the CSP to notify the Government of Canada of any foreign government data access requests and to challenge such requests to the fullest extent permitted by law.
4. **Sovereign cloud evaluation** — As part of the procurement process, preference will be given to CSPs participating in Canada's Sovereign Cloud Initiative, with Canadian ownership and control structures that eliminate foreign jurisdictional exposure.

---

## 5. Security Architecture

### 5.1 Security Control Profile

The GreenHome Canada platform will implement the **CCCS Medium Cloud Security Profile** (formerly Protected B, Medium Integrity, Medium Availability [PBMM]) as defined in ITSG-33. This profile specifies:

- **Confidentiality: Protected B** — Unauthorized disclosure could cause serious injury to an individual.
- **Integrity: Medium** — Unauthorized modification could cause serious injury to program integrity.
- **Availability: Medium** — Loss of availability could cause serious injury to program delivery.

### 5.2 GC Cloud Guardrails

All 12 mandatory GC Cloud Guardrails will be implemented within the first 30 business days of cloud account provisioning:

| # | Guardrail | Implementation Approach |
|---|---|---|
| 1 | Protect User Accounts and Identities | MFA enforced for all administrative and user accounts; integration with GCKey/Sign In Canada |
| 2 | Manage Access | Role-based access control (RBAC); just-in-time privileged access; quarterly access reviews |
| 3 | Secure Endpoints | GC-managed devices only for administrative access; endpoint detection and response (EDR) |
| 4 | Enterprise Monitoring Accounts | Dedicated monitoring accounts with read-only access; integration with GC SOC |
| 5 | Data Location | All data confined to Canadian cloud regions; geo-restriction policies enforced at infrastructure level |
| 6 | Protection of Data-at-Rest | AES-256 encryption; GC-controlled key management via HSM; encrypted databases, storage, and backups |
| 7 | Protection of Data-in-Transit | TLS 1.3 minimum for all communications; mutual TLS for service-to-service; certificate pinning |
| 8 | Segment and Separate | Network micro-segmentation; separate VPCs for production, staging, and development; zero-trust network |
| 9 | Network Security Services | Web Application Firewall (WAF); DDoS protection; intrusion detection/prevention (IDS/IPS) |
| 10 | Cyber Defense Services | Integration with CCCS cyber defense services; threat intelligence feeds; automated threat response |
| 11 | Logging and Monitoring | Centralized SIEM; immutable audit logs; 2-year retention; real-time alerting; integration with GC SOC |
| 12 | Configuration of Cloud Marketplaces | Marketplace restricted to pre-approved services; change management controls |

### 5.3 Zero-Trust Architecture

The platform will implement a zero-trust security model following the principle of "never trust, always verify":

```
┌──────────────────────────────────────────────────────────────────┐
│                     ZERO-TRUST ARCHITECTURE                      │
│                                                                  │
│  ┌──────────────┐                                               │
│  │  External     │                                               │
│  │  Users        │──┐                                            │
│  │  (Applicants) │  │                                            │
│  └──────────────┘  │  ┌──────────────────────────────────────┐  │
│                     ├─▶│        IDENTITY-AWARE PROXY           │  │
│  ┌──────────────┐  │  │                                      │  │
│  │  Internal     │  │  │  - Authenticate every request        │  │
│  │  Users        │──┤  │  - Verify device posture             │  │
│  │  (Officers)   │  │  │  - Check authorization policy        │  │
│  └──────────────┘  │  │  - Encrypt all traffic (TLS 1.3)     │  │
│                     │  │  - Log all access decisions           │  │
│  ┌──────────────┐  │  └───────────────┬──────────────────────┘  │
│  │  Validating   │  │                  │                         │
│  │  Professionals│──┘                  ▼                         │
│  └──────────────┘     ┌────────────────────────────────────┐    │
│                       │      MICRO-SEGMENTED SERVICES       │    │
│                       │                                     │    │
│                       │  ┌─────┐ ┌─────┐ ┌──────┐ ┌─────┐ │    │
│                       │  │App  │ │Photo│ │Valid.│ │Pay  │  │    │
│                       │  │Svc  │ │Svc  │ │Svc   │ │Svc  │  │    │
│                       │  └─────┘ └─────┘ └──────┘ └─────┘  │    │
│                       │  Each service: own IAM, own secrets │    │
│                       │  mTLS between all services          │    │
│                       └────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────────┘
```

### 5.4 Security Operations

| Capability | Description |
|---|---|
| **Security Operations Centre (SOC)** | 24/7 monitoring via GC SOC integration; security event correlation and incident response |
| **Vulnerability Management** | Weekly automated scans; quarterly penetration testing; responsible disclosure program |
| **Patch Management** | Critical patches within 48 hours; high patches within 7 days; automated patching pipeline |
| **Incident Response** | Incident response plan aligned with GC Cyber Event Management Plan; tabletop exercises quarterly |
| **Security Event Reporting** | Compliance with the Directive on Security Management Standard on Security Event Reporting (Appendix I) |
| **Supply Chain Security** | Software Bill of Materials (SBOM) for all components; dependency vulnerability scanning in CI/CD |

### 5.5 Encryption Standards

| Layer | Standard | Key Management |
|---|---|---|
| Data at rest (database) | AES-256-GCM | GC-managed HSM, automatic rotation every 90 days |
| Data at rest (object storage) | AES-256-SSE with customer-managed keys | GC-managed HSM |
| Data at rest (backups) | AES-256 | Separate key hierarchy; offline backup keys in escrow |
| Data in transit (external) | TLS 1.3 (minimum TLS 1.2 for legacy) | Managed certificates via GC PKI |
| Data in transit (internal) | Mutual TLS 1.3 | Service mesh certificate authority |
| Secrets management | Vault with HSM backend | Automatic rotation; no secrets in code or configuration |

---

## 6. Privacy Framework

### 6.1 Privacy Act Compliance

The GreenHome Canada platform collects and processes personal information for the purpose of administering a federal grant program. All personal information handling will comply with the **Privacy Act (R.S.C., 1985, c. P-21)**, including:

- **Section 4** — Collection limited to information directly related to operating the program.
- **Section 5** — Personal information collected directly from the individual wherever possible.
- **Section 6** — Personal information used only for the purpose for which it was collected, or for a consistent use.
- **Section 7** — Disclosure only under the conditions specified in the Act.
- **Section 8** — Retention and disposal in accordance with approved retention schedules.

### 6.2 Privacy Impact Assessment

A **Privacy Impact Assessment (PIA)** will be completed in accordance with the Standard on Privacy Impact Assessment under the Directive on Privacy Practices (updated October 2024), using the mandatory TBS template, and submitted to both the Office of the Privacy Commissioner of Canada (OPC) and Treasury Board Secretariat **prior to the collection of any personal information**.

The PIA will address:

| Element | Assessment |
|---|---|
| Necessity and proportionality | Justification for each personal information element collected |
| Collection authority | Privacy Act section 4; departmental mandate under the Department of Natural Resources Act |
| Purpose specification | Grant administration, fraud prevention, program evaluation |
| Data minimization | Collection limited to what is strictly necessary for program delivery |
| Use limitation | No secondary use without consent or Privacy Act authority |
| Retention and disposal | Defined retention periods; secure destruction procedures |
| Third-party disclosure | Disclosure to validating professionals limited to verification of application status only |
| Trans-border data flows | None — all data remains in Canada |
| Automated decision-making | Risk scoring for audit selection; human-in-the-loop for all adjudication decisions |
| Individual access rights | Process for individuals to access and request correction of their information |

### 6.3 Privacy by Design Principles

The platform architecture embeds the seven foundational principles of Privacy by Design (as originated by the former Information and Privacy Commissioner of Ontario):

1. **Proactive not reactive** — Privacy risks assessed before system development begins.
2. **Privacy as the default setting** — Maximum privacy protections applied automatically; no action required by applicants to protect their data.
3. **Privacy embedded into design** — Privacy controls integrated into the architecture, not bolted on.
4. **Full functionality** — Privacy and security are not zero-sum; the system achieves both.
5. **End-to-end security** — Full lifecycle protection from collection to destruction.
6. **Visibility and transparency** — Clear, plain-language privacy notices; applicants informed of what data is collected, why, and how it is used.
7. **Respect for user privacy** — User-centred design; individual access and correction rights.

### 6.4 Personal Information Banks

A new **Personal Information Bank (PIB)** will be registered with TBS and published in Info Source prior to the collection of personal information:

- **PIB Title:** GreenHome Canada Greener Homes Retrofit Grant Program
- **Registration Number:** [To be assigned by TBS]
- **Class of Individuals:** Canadian homeowners applying for retrofit grants
- **Retention Period:** Active file + 7 years after final action, then destroyed
- **Legal Authority:** Department of Natural Resources Act; Privacy Act

### 6.5 Privacy Notice

A bilingual privacy notice will be prominently displayed at every personal information collection point. The notice will include:

- The authority under which information is being collected
- The purpose of the collection
- How the information will be used and disclosed
- Consequences of not providing the information
- The individual's right to access and correct their information
- Contact information for the departmental privacy coordinator and the OPC

### 6.6 Data Minimization Controls

| Stage | Data Collected | Minimization Measure |
|---|---|---|
| Eligibility check | Property type, province, year built, ownership status, primary residence | No personal identifiers required; anonymous check |
| Application | Name, address, email, phone, property details | Minimum necessary for program administration |
| Photo upload | Photographs with EXIF metadata | EXIF GPS coordinates stripped after verification; only timestamp retained |
| Professional validation | Professional's name, license, profession, contact | Verified against provincial licensing registries; contact used only for verification |
| Grant payment | Banking information (transit, institution, account) | Collected at payment stage only; not retained after payment confirmation |

---

## 7. Identity Verification and Onboarding

### 7.1 Authentication Architecture

The platform will integrate with the Government of Canada's authentication infrastructure using a federated identity model:

```
┌──────────────────────────────────────────────────────────────────┐
│                 IDENTITY AND AUTHENTICATION FLOW                 │
│                                                                  │
│   Applicant                                                      │
│      │                                                           │
│      ▼                                                           │
│  ┌──────────────────────────────────┐                            │
│  │     GreenHome Canada Portal      │                            │
│  │     (Relying Party)              │                            │
│  └──────────┬───────────────────────┘                            │
│             │  OpenID Connect (OIDC)                              │
│             ▼                                                    │
│  ┌──────────────────────────────────┐                            │
│  │     Sign In Canada Platform      │                            │
│  │                                  │                            │
│  │  ┌──────────┐  ┌─────────────┐  │                            │
│  │  │  GCKey   │  │ Government  │  │                            │
│  │  │Credential│  │ Login by    │  │                            │
│  │  │          │  │ Verified.Me │  │                            │
│  │  └──────────┘  └─────────────┘  │                            │
│  │                                  │                            │
│  │  ┌──────────────────────────┐   │                            │
│  │  │  GC Sign in (CDS)       │   │  (when available)          │
│  │  │  Unified authentication │   │                            │
│  │  └──────────────────────────┘   │                            │
│  └──────────┬───────────────────────┘                            │
│             │                                                    │
│             ▼                                                    │
│  ┌──────────────────────────────────┐                            │
│  │     Identity Verification        │                            │
│  │     (Level of Assurance 2+)      │                            │
│  │                                  │                            │
│  │  Step 1: Authentication          │                            │
│  │  (GCKey / bank sign-in / MFA)    │                            │
│  │                                  │                            │
│  │  Step 2: Identity Proofing       │                            │
│  │  (Document verification +        │                            │
│  │   knowledge-based questions      │                            │
│  │   OR verified credential)        │                            │
│  │                                  │                            │
│  │  Step 3: Address Confirmation    │                            │
│  │  (Cross-reference with           │                            │
│  │   property tax / land title)     │                            │
│  └──────────────────────────────────┘                            │
└──────────────────────────────────────────────────────────────────┘
```

### 7.2 Levels of Assurance

The platform will implement tiered Levels of Assurance (LoA) aligned with the Pan-Canadian Trust Framework (PCTF):

| Activity | Required LoA | Verification Method |
|---|---|---|
| Eligibility check (anonymous) | None | No authentication required |
| Create account | LoA 1 | GCKey or bank sign-in via Verified.Me |
| Submit application | LoA 2 | GCKey + MFA (TOTP or SMS) |
| Submit validation package | LoA 2 | Existing authenticated session + re-authentication |
| Access dashboard | LoA 2 | GCKey + MFA |
| Change banking information | LoA 3 | Re-authentication + knowledge-based verification |
| Administrative access (program officers) | LoA 3 | GC internal credential + MFA + device certificate |

### 7.3 Multi-Factor Authentication (MFA)

MFA is **mandatory** for all authenticated actions. Supported second factors:

| Factor | Type | Notes |
|---|---|---|
| Authenticator app (TOTP) | Something you have | Preferred method; supports Google Authenticator, Microsoft Authenticator, and other standards-compliant TOTP apps |
| SMS one-time code | Something you have | Fallback method; subject to SIM-swap risks (supplemented with rate limiting and anomaly detection) |
| FIDO2 / WebAuthn security key | Something you have | Supported for users with hardware keys; phishing-resistant |
| Biometric (via device) | Something you are | Supported via WebAuthn passkeys on compatible devices |

### 7.4 Identity Proofing for Grant Disbursement

Before any grant payment is processed, the applicant's identity will be verified to **LoA 2+** through a combination of:

1. **Document verification** — Applicant provides a government-issued photo ID (driver's licence, passport, or provincial/territorial photo ID card). Document authenticity is verified using optical character recognition (OCR), hologram detection, and cross-reference against issuing authority databases where available.

2. **Property ownership verification** — Cross-reference the applicant's name and address against property assessment databases maintained by provincial and municipal governments. Integration with available land title registries.

3. **Knowledge-based authentication** — Dynamic questions generated from credit bureau data (with the applicant's consent) as an additional verification layer.

4. **Verified credential acceptance** — The platform will be designed to accept verifiable digital credentials issued under the Pan-Canadian Trust Framework (PCTF) as they become available from provincial digital identity programs.

### 7.5 Professional Validator Identity

Validating professionals must also be verified:

| Verification | Method |
|---|---|
| Identity | Government-issued photo ID or existing GCKey credential |
| Professional license | Real-time validation against provincial/territorial licensing registries (where API available) |
| Active licence status | Confirmed at time of validation submission |
| Insurance | Professional liability insurance confirmation (self-declared, subject to audit) |

---

## 8. Infrastructure and Hosting

### 8.1 Hosting Strategy

The platform will be hosted on **Shared Services Canada (SSC)-approved infrastructure**, leveraging a CCCS-assessed Cloud Service Provider (CSP) procured through the GC Cloud Framework. The architecture follows a cloud-native design using Platform-as-a-Service (PaaS) and managed services to minimize operational overhead.

### 8.2 Cloud Service Provider Requirements

The selected CSP must meet the following requirements:

| Requirement | Detail |
|---|---|
| CCCS Assessment | Completed CCCS Medium Cloud Security Profile assessment (per ITSM.50.100) |
| Canadian Data Centres | Primary and disaster recovery regions both located in Canada |
| ISO Certifications | ISO/IEC 27001, ISO/IEC 27017, ISO/IEC 27018 |
| SOC Reports | SOC 2 Type II (current, within 12 months) |
| FedRAMP Alignment | FedRAMP Moderate or equivalent (for ITSG-33 control alignment) |
| Data Residency Controls | Technical capabilities to enforce Canadian data residency at infrastructure level |
| Encryption Standards | FIPS 140-2 Level 3 HSMs available for key management |
| Sovereign Cloud | Preference for participation in Canada's Sovereign Cloud Initiative |

### 8.3 Infrastructure Architecture

```
┌───────────────────────────────────────────────────────────────────────┐
│                  PRODUCTION ENVIRONMENT (CANADA)                      │
│                                                                       │
│  ┌─────────────────────────────────────────────────────────┐         │
│  │  Edge Layer                                              │         │
│  │  ┌─────────┐  ┌─────────┐  ┌──────────┐  ┌──────────┐  │         │
│  │  │  CDN    │  │  WAF    │  │  DDoS    │  │  Bot     │  │         │
│  │  │(Canada) │  │         │  │Protection│  │Detection │  │         │
│  │  └─────────┘  └─────────┘  └──────────┘  └──────────┘  │         │
│  └─────────────────────────┬───────────────────────────────┘         │
│                            │                                         │
│  ┌─────────────────────────▼───────────────────────────────┐         │
│  │  Application Layer (Kubernetes / Managed Container Svc)  │         │
│  │                                                          │         │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐   │         │
│  │  │  Web     │ │  API     │ │  Photo   │ │  Notif.  │   │         │
│  │  │  Front   │ │  Gateway │ │  Process │ │  Service │   │         │
│  │  │  End     │ │          │ │  Service │ │          │   │         │
│  │  └──────────┘ └──────────┘ └──────────┘ └──────────┘   │         │
│  │                                                          │         │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐   │         │
│  │  │  Applic. │ │  Valid.  │ │  Payment │ │  Audit   │   │         │
│  │  │  Service │ │  Service │ │  Service │ │  Service │   │         │
│  │  └──────────┘ └──────────┘ └──────────┘ └──────────┘   │         │
│  └─────────────────────────────────────────────────────────┘         │
│                                                                       │
│  ┌─────────────────────────────────────────────────────────┐         │
│  │  Data Layer                                              │         │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐   │         │
│  │  │PostgreSQL│ │  Object  │ │  Redis   │ │  Search  │   │         │
│  │  │(Primary) │ │  Storage │ │  Cache   │ │  Index   │   │         │
│  │  │Encrypted │ │ AES-256  │ │In-transit│ │          │   │         │
│  │  └──────────┘ └──────────┘ └──────────┘ └──────────┘   │         │
│  └─────────────────────────────────────────────────────────┘         │
│                                                                       │
│  ┌─────────────────────────────────────────────────────────┐         │
│  │  Security and Observability Layer                        │         │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐   │         │
│  │  │  SIEM    │ │  Secrets │ │  PKI /   │ │  Health  │   │         │
│  │  │          │ │  Vault   │ │  HSM     │ │  Monitor │   │         │
│  │  └──────────┘ └──────────┘ └──────────┘ └──────────┘   │         │
│  └─────────────────────────────────────────────────────────┘         │
└───────────────────────────────────────────────────────────────────────┘
```

### 8.4 Availability and Disaster Recovery

| Metric | Target |
|---|---|
| Availability SLA | 99.9% (excludes planned maintenance windows) |
| Recovery Time Objective (RTO) | 4 hours |
| Recovery Point Objective (RPO) | 1 hour |
| Backup frequency | Database: continuous streaming replication + hourly snapshots; Object storage: cross-region replication |
| Disaster recovery testing | Semi-annual DR failover exercises |
| Planned maintenance window | Sundays 02:00–06:00 ET (with 72-hour advance notice) |

### 8.5 Capacity Planning

| Metric | Year 1 Estimate | Year 3 Estimate |
|---|---|---|
| Registered applicants | 200,000 | 800,000 |
| Active applications per month | 15,000 | 40,000 |
| Photo uploads per month | 60,000 | 160,000 |
| Storage (photos and documents) | 2 TB | 10 TB |
| Peak concurrent users | 5,000 | 15,000 |
| API requests per second (peak) | 500 | 2,000 |

---

## 9. Application Architecture

### 9.1 Technology Stack

| Component | Technology | Rationale |
|---|---|---|
| Front-end framework | Next.js (React) with TypeScript | GC Digital Standards alignment; SSR for performance and SEO; strong accessibility tooling |
| Styling | Tailwind CSS + GC Design System (WET-BOEW inspired) | Canada.ca look-and-feel compliance; responsive design |
| API layer | RESTful API with OpenAPI 3.0 specification | Interoperability; documentation; contract-first design |
| Application runtime | Node.js on managed container service | Cloud-native; auto-scaling; minimal infrastructure management |
| Database | PostgreSQL (managed, encrypted) | Open-source; strong data integrity; JSONB for flexible schemas |
| Object storage | Cloud-native object storage (S3-compatible) | Scalable photo/document storage; lifecycle policies |
| Cache | Redis (managed, encrypted in transit) | Session management; rate limiting; frequently accessed data |
| Search | Elasticsearch / OpenSearch | Full-text search of applications; administrative queries |
| Message queue | Managed queue service | Asynchronous processing of photo uploads, notifications, payments |
| CI/CD | GitOps with automated security scanning | Infrastructure as code; SBOM generation; SAST/DAST |

### 9.2 Microservices Architecture

The platform is decomposed into the following bounded services:

| Service | Responsibility |
|---|---|
| **Identity Service** | Authentication, session management, MFA, integration with GCKey/Sign In Canada |
| **Application Service** | Application CRUD, multi-step wizard state, eligibility logic |
| **Photo Service** | Photo upload, virus scanning, EXIF extraction, image compression, before/after pairing |
| **Validation Service** | Professional validation submission, license verification, validation workflow |
| **Payment Service** | Grant calculation, payment file generation, integration with Receiver General |
| **Notification Service** | Email, SMS, and in-app notifications; bilingual templates |
| **Audit Service** | Immutable audit log; compliance reporting; risk-based sampling |
| **Admin Service** | Program officer dashboard; adjudication workflow; reporting |
| **Document Service** | Document upload, virus scanning, classification, retention management |

### 9.3 API Security

| Control | Implementation |
|---|---|
| Authentication | OAuth 2.0 / OIDC bearer tokens; JWT with short expiry (15 min) |
| Authorization | RBAC with fine-grained permissions per endpoint |
| Rate limiting | Per-user and per-IP rate limits; exponential backoff |
| Input validation | Schema validation at API gateway; parameterized queries; XSS/injection prevention |
| Output encoding | Strict Content-Type headers; JSON-only responses |
| CORS | Allowlist-only CORS policy |
| API versioning | URI-based versioning (v1, v2) with deprecation notices |
| Logging | All API calls logged with user context (excluding PII in logs) |

---

## 10. Validation and Fraud Prevention

### 10.1 Photo Validation Framework

The before-and-after photo requirement is a cornerstone of program integrity. The following multi-layered approach ensures authenticity:

```
┌──────────────────────────────────────────────────────────────────┐
│                  PHOTO VALIDATION PIPELINE                       │
│                                                                  │
│  Upload                                                          │
│    │                                                             │
│    ▼                                                             │
│  ┌──────────────────┐                                            │
│  │  Virus Scan       │  Block malicious files                    │
│  └────────┬─────────┘                                            │
│           ▼                                                      │
│  ┌──────────────────┐                                            │
│  │  Format Validate  │  Verify JPEG/PNG/HEIF; reject invalid     │
│  └────────┬─────────┘                                            │
│           ▼                                                      │
│  ┌──────────────────┐                                            │
│  │  EXIF Extraction  │  GPS coordinates, timestamp, device,      │
│  │                   │  camera model                             │
│  └────────┬─────────┘                                            │
│           ▼                                                      │
│  ┌──────────────────┐                                            │
│  │  Metadata         │  Verify GPS matches property address      │
│  │  Cross-Reference  │  Verify timestamp is within expected      │
│  │                   │  window (before: pre-approval;            │
│  │                   │  after: post-work completion)             │
│  └────────┬─────────┘                                            │
│           ▼                                                      │
│  ┌──────────────────┐                                            │
│  │  AI-Assisted      │  Detect potential manipulation            │
│  │  Integrity Check  │  (copy-paste, AI generation,              │
│  │                   │   inconsistent lighting/shadows)          │
│  └────────┬─────────┘                                            │
│           ▼                                                      │
│  ┌──────────────────┐                                            │
│  │  Before/After     │  Verify both photos show same             │
│  │  Consistency      │  location from similar angle;             │
│  │  Check            │  confirm visible change                   │
│  └────────┬─────────┘                                            │
│           ▼                                                      │
│  ┌──────────────────┐                                            │
│  │  Privacy Strip    │  Remove GPS data; retain only             │
│  │                   │  timestamp for record                     │
│  └────────┬─────────┘                                            │
│           ▼                                                      │
│  Stored (encrypted, Canada-only)                                 │
└──────────────────────────────────────────────────────────────────┘
```

### 10.2 Professional Validation Controls

| Control | Description |
|---|---|
| **License verification** | Real-time check against provincial/territorial licensing registries (builders, engineers, electricians, plumbers, HVAC) |
| **Active status check** | Confirm licence is current and not suspended or revoked |
| **Conflict of interest** | Flag if validating professional is the same entity as the installing contractor |
| **Volume monitoring** | Alert if a single professional submits an unusually high number of validations |
| **Geographic plausibility** | Verify professional's registered location is within reasonable distance of the property |
| **Digital signature** | Professional signs validation form electronically with identity-linked digital signature |
| **Audit trail** | Complete chain of custody from professional submission to grant disbursement |

### 10.3 Risk-Based Audit Program

A risk-based audit sampling model will be applied to all validation submissions:

| Risk Tier | Criteria | Audit Rate | Audit Type |
|---|---|---|---|
| **Standard** | No risk indicators; established professional; consistent metadata | 5% | Desk review of documentation |
| **Elevated** | First-time professional; high-value grant; metadata inconsistency | 25% | Enhanced desk review + phone verification |
| **High** | Multiple risk indicators; known fraud patterns; duplicate photos | 100% | Full audit: site visit, professional interview, independent verification |

Risk indicators that trigger elevated review:

- EXIF timestamp inconsistencies (date outside expected window)
- GPS coordinates that do not match the registered property address
- Photos appear digitally manipulated (AI-generated, copy-paste artifacts)
- Professional has submitted more than 20 validations in 30 days
- Same professional validates work at the same address multiple times
- Applicant has previously had an application denied or reversed
- Grant amounts at maximum across multiple categories
- Completion date is unusually close to application approval date

### 10.4 Anti-Fraud Technology

| Technology | Application |
|---|---|
| **Photo forensics** | Error-level analysis (ELA), metadata consistency checking, AI-generated image detection |
| **Device fingerprinting** | Detect multiple applications from the same device |
| **Velocity checks** | Rate-limit applications from the same IP, device, or address |
| **Network analysis** | Identify rings of applicants and professionals who appear connected |
| **Machine learning** | Supervised model trained on known fraud patterns; anomaly detection for outliers |
| **Cross-program checks** | Integration with other federal and provincial grant programs to detect double-dipping |

---

## 11. Accessibility and Official Languages

### 11.1 Accessibility Compliance

The platform will conform to **WCAG 2.1 Level AA** as incorporated in **CAN/ASC - EN 301 549:2024**, in alignment with the Accessible Canada Act, the TBS Standard on Web Accessibility, and GC digital accessibility best practices.

| Requirement | Implementation |
|---|---|
| **Perceivable** | Text alternatives for all non-text content; captions for multimedia; adaptable layouts; sufficient colour contrast (4.5:1 minimum) |
| **Operable** | Full keyboard navigation; no time limits (or adjustable); no content that causes seizures; skip navigation links; focus indicators |
| **Understandable** | Readable text (Grade 8 reading level); predictable navigation; input assistance and error prevention; clear form labels |
| **Robust** | Valid HTML5; ARIA landmarks and roles; compatible with screen readers (NVDA, JAWS, VoiceOver); tested across browsers and assistive technologies |

### 11.2 Accessibility Testing

| Method | Frequency |
|---|---|
| Automated scanning (axe-core, Lighthouse) | Every build (CI/CD pipeline) |
| Manual expert review (WCAG checklist) | Quarterly |
| Screen reader testing (NVDA, JAWS, VoiceOver) | Quarterly |
| User testing with persons with disabilities | Semi-annually |
| Keyboard-only navigation testing | Every release |

### 11.3 Official Languages Compliance

The platform will fully comply with the **Official Languages Act (R.S.C., 1985, c. O-3.01)** as modernized by Bill C-13 (2023):

| Requirement | Implementation |
|---|---|
| **Simultaneous publication** | All content published in English and French at the same time |
| **Equal quality** | French content is not machine-translated; professional translation by certified translators, reviewed by bilingual subject matter experts |
| **Language selection** | Language toggle prominently displayed on every page; user language preference stored in profile; URL-based language routing (/en/, /fr/) |
| **Bilingual communications** | All emails, SMS notifications, and system messages sent in the user's preferred language |
| **Support services** | Telephone and email support available in both official languages |
| **Forms and documents** | All forms, validation templates, and downloadable documents available in both languages |
| **Error messages** | All system error messages, validation messages, and help text in both languages |

### 11.4 Internationalization Architecture

```
/en/                    English language routes
/fr/                    French language routes

- URL-based locale routing (Next.js i18n)
- Language-specific content files (JSON)
- Right-to-left (RTL) support architecture ready
  (for potential future Indigenous language support)
- Date/time formatting: locale-aware (en-CA, fr-CA)
- Currency formatting: Canadian dollar (CAD)
- Postal code validation: Canadian format (A1A 1A1)
```

---

## 12. Governance Structure

### 12.1 Program Governance

| Role | Responsibility | Organization |
|---|---|---|
| **Program Sponsor** | Strategic direction; funding authority; ministerial accountability | NRCan — Assistant Deputy Minister, Energy Efficiency and Technology |
| **Program Director** | Day-to-day program management; operational decisions | NRCan — Director General, Residential Energy Programs |
| **Chief Information Officer** | IT governance; security categorization; data residency compliance | NRCan — CIO |
| **Chief Privacy Officer** | Privacy oversight; PIA review; breach response | NRCan — ATIP Director |
| **Departmental Security Officer** | Security assessment and authorization; incident response | NRCan — DSO |
| **Enterprise Architecture** | Solution architecture review; alignment with GC Digital Standards | NRCan — EA team + TBS GC EARB |
| **SSC Hosting Representative** | Cloud account management; Guardrail compliance validation | Shared Services Canada |
| **CCCS Liaison** | Threat intelligence; security assessment coordination | Canadian Centre for Cyber Security |

### 12.2 Decision-Making Bodies

| Body | Composition | Mandate | Frequency |
|---|---|---|---|
| **Program Steering Committee** | ADM NRCan (Chair), DGs from Policy/Programs/IT/Finance, SSC, TBS observers | Strategic direction, budget, risk escalation | Monthly |
| **Technical Architecture Board** | CIO (Chair), Solution Architect, Security Architect, SSC Cloud Architect | Architecture decisions, technology selection, security reviews | Bi-weekly |
| **Change Advisory Board** | IT Director (Chair), Dev Lead, Ops Lead, Security Lead, Business Rep | Production change approvals, release management | Weekly |
| **Privacy Governance Committee** | CPO (Chair), PIA Lead, Legal Counsel, Program Director | Privacy reviews, breach response, compliance monitoring | Quarterly |

### 12.3 Security Assessment and Authorization

The platform will undergo a formal **Security Assessment and Authorization (SA&A)** process as required by the Directive on Security Management:

1. **Security Categorization** — Completed (Protected B, Medium Integrity, Medium Availability).
2. **Threat and Risk Assessment (TRA)** — To be completed during design phase.
3. **Security Assessment** — Independent third-party assessment against ITSG-33 CCCS Medium profile.
4. **Statement of Residual Risk** — Prepared by the security assessor.
5. **Authorization to Operate (ATO)** — Issued by the Designated Official for the Departmental Security Plan (DSO or delegate).
6. **Continuous Monitoring** — Ongoing security posture assessment post-authorization.

---

## 13. Risk Management

### 13.1 Risk Register

| # | Risk | Likelihood | Impact | Severity | Mitigation |
|---|---|---|---|---|---|
| R1 | Breach of applicant personal information | Low | Critical | High | Encryption at rest/transit; zero-trust architecture; 24/7 SOC; incident response plan; cyber insurance |
| R2 | Fraudulent grant applications | Medium | High | High | Multi-layered validation pipeline; risk-based audit; AI-assisted fraud detection; professional license verification |
| R3 | System unavailability during peak periods | Medium | High | High | Auto-scaling; CDN; load testing; multi-AZ deployment; DR plan with 4-hour RTO |
| R4 | Foreign government data access request (CLOUD Act) | Low | Critical | High | Canadian data residency; GC-managed encryption keys; contractual protections; sovereign cloud preference |
| R5 | Supply chain attack on third-party dependencies | Medium | High | High | SBOM; automated dependency scanning; signed container images; minimal dependency footprint |
| R6 | Delay in GC Sign in platform availability | Medium | Medium | Medium | GCKey as primary authentication; modular OIDC integration allowing swap of identity providers |
| R7 | Insufficient bilingual translation resources | Medium | Medium | Medium | Professional translation contracts in place; GCtranslate for initial drafts with human review |
| R8 | Accessibility gaps not identified before launch | Low | High | Medium | Automated testing in CI/CD; expert review; user testing with persons with disabilities |
| R9 | Budget overrun | Medium | Medium | Medium | Agile delivery with cost tracking per sprint; cloud cost monitoring; reserved instances for baseline |
| R10 | Provincial licensing registry APIs unavailable | Medium | Medium | Medium | Graceful degradation to manual license verification; phased integration approach |

### 13.2 Risk Response Framework

- **Critical/High risks** — Reported to Program Steering Committee monthly; dedicated risk owners; active mitigation plans with timelines.
- **Medium risks** — Monitored at Technical Architecture Board level; mitigation plans in place.
- **Low risks** — Accepted with monitoring; reviewed quarterly.

---

## 14. Implementation Roadmap

### 14.1 Phased Delivery

The platform will be delivered using an Agile methodology in four phases over 18 months:

```
Phase 1: Foundation (Months 1-4)
├── Security categorization and TRA
├── Privacy Impact Assessment (PIA)
├── SA&A initiation
├── Infrastructure provisioning (CCCS-assessed cloud)
├── GC Cloud Guardrails implementation
├── Identity integration (GCKey / Sign In Canada)
├── Core application service (eligibility + application)
├── Bilingual framework (i18n architecture)
└── Alpha release to internal testers

Phase 2: Core Platform (Months 5-9)
├── Multi-step application wizard
├── Photo upload and validation pipeline
├── Professional validation portal
├── Notification service (email + SMS)
├── Applicant dashboard
├── Admin dashboard for program officers
├── WCAG 2.1 AA conformance testing
├── SA&A security assessment (independent)
├── French language content and testing
└── Beta release to limited external pilot (500 users)

Phase 3: Full Launch (Months 10-13)
├── Payment service integration (Receiver General)
├── Fraud detection and risk-based audit engine
├── Provincial licensing registry integrations
├── Performance and load testing (15,000 concurrent)
├── Accessibility user testing
├── Authorization to Operate (ATO) obtained
├── Full production launch
├── Hypercare support period (4 weeks)
└── Operational handover to support team

Phase 4: Enhancement (Months 14-18)
├── GC Sign in integration (when available)
├── AI-enhanced photo forensics
├── Verifiable credentials support (PCTF)
├── Open data API for program statistics
├── Advanced analytics and program evaluation dashboard
├── Machine learning fraud model refinement
├── Mobile-optimized experience improvements
└── Post-implementation review and lessons learned
```

### 14.2 Key Milestones

| Milestone | Target Date | Dependencies |
|---|---|---|
| PIA submitted to OPC and TBS | Month 2 | None |
| Cloud infrastructure provisioned | Month 2 | SSC procurement approval |
| GC Cloud Guardrails compliance | Month 3 | Infrastructure provisioned |
| Alpha release (internal) | Month 4 | Core services built |
| SA&A security assessment begins | Month 7 | Platform feature-complete for assessment scope |
| Beta pilot launch (500 users) | Month 9 | PIA accepted; security assessment progressing |
| Authorization to Operate (ATO) | Month 12 | SA&A complete; residual risks accepted |
| Full production launch | Month 13 | ATO; payment integration; bilingual content complete |
| Post-implementation review | Month 18 | 6 months of production operations data |

---

## 15. Budget Estimate

### 15.1 Capital Investment (Years 1-2)

| Category | Year 1 | Year 2 | Total |
|---|---|---|---|
| **Platform Development** | | | |
| Solution architecture and design | $500,000 | — | $500,000 |
| Front-end development (bilingual) | $800,000 | $200,000 | $1,000,000 |
| Back-end development (microservices) | $1,200,000 | $300,000 | $1,500,000 |
| Identity integration (GCKey, Sign In Canada) | $300,000 | $100,000 | $400,000 |
| Photo validation pipeline (incl. AI/ML) | $400,000 | $200,000 | $600,000 |
| Payment integration (Receiver General) | $200,000 | $50,000 | $250,000 |
| **Security and Privacy** | | | |
| Security Assessment and Authorization (SA&A) | $250,000 | $100,000 | $350,000 |
| Privacy Impact Assessment | $100,000 | — | $100,000 |
| Penetration testing (quarterly) | $100,000 | $100,000 | $200,000 |
| Threat and Risk Assessment | $75,000 | — | $75,000 |
| **Infrastructure** | | | |
| Cloud hosting (CCCS-assessed, Canadian regions) | $300,000 | $400,000 | $700,000 |
| HSM / key management | $50,000 | $50,000 | $100,000 |
| CDN, WAF, DDoS protection | $75,000 | $75,000 | $150,000 |
| **Quality and Compliance** | | | |
| Accessibility testing and remediation | $100,000 | $75,000 | $175,000 |
| Translation services (French) | $200,000 | $100,000 | $300,000 |
| User research and usability testing | $100,000 | $50,000 | $150,000 |
| **Program Management** | | | |
| Project management and governance | $400,000 | $200,000 | $600,000 |
| Change management and training | $100,000 | $50,000 | $150,000 |
| Contingency (15%) | $637,500 | $292,500 | $930,000 |
| **TOTAL CAPITAL** | **$5,887,500** | **$2,342,500** | **$8,230,000** |

### 15.2 Annual Operating Costs (Steady State — Year 3+)

| Category | Annual Cost |
|---|---|
| Cloud hosting and infrastructure | $500,000 |
| Platform maintenance and updates | $600,000 |
| Security operations (SOC, vulnerability management) | $300,000 |
| Annual SA&A maintenance and re-assessment | $150,000 |
| Quarterly penetration testing | $100,000 |
| Translation and bilingual content maintenance | $100,000 |
| Accessibility monitoring and remediation | $75,000 |
| User support (Tier 2/3) | $200,000 |
| Fraud detection system operation | $150,000 |
| **TOTAL ANNUAL OPERATING** | **$2,175,000** |

### 15.3 Program Delivery Costs (Grant Funding)

Grant funding is separate from platform development costs and is subject to the approved program budget envelope:

| Scenario | Annual Grant Disbursements | Assumptions |
|---|---|---|
| Conservative (Year 1) | $100,000,000 | 20,000 households × $5,000 avg. grant |
| Moderate (Year 2) | $250,000,000 | 40,000 households × $6,250 avg. grant |
| Full capacity (Year 3+) | $500,000,000 | 70,000 households × $7,143 avg. grant |

---

## 16. Appendices

### Appendix A: Compliance Crosswalk

| Requirement | Standard/Framework | Section |
|---|---|---|
| Security controls | ITSG-33 CCCS Medium Profile (Annex 4A) | 5.1 |
| Cloud security | ITSM.50.100, ITSP.50.105 | 5.1, 8.2 |
| Cloud guardrails | Directive on Service and Digital, Appendix G | 5.2 |
| Data residency | ITPIN 2017-02 | 4.1, 4.3 |
| Privacy | Privacy Act (R.S.C., 1985, c. P-21) | 6.1 |
| PIA | Directive on Privacy Practices, Appendix C | 6.2 |
| Government security | Policy on Government Security (amended Jan 2025) | 2.2 |
| Security management | Directive on Security Management (updated Jan 2025) | 2.2, 12.3 |
| Service and digital | Policy on Service and Digital | 2.2 |
| Accessibility | Accessible Canada Act; CAN/ASC - EN 301 549:2024; WCAG 2.1 AA | 11.1 |
| Official languages | Official Languages Act (modernized by Bill C-13, 2023) | 11.3 |
| Transfer payments | Policy on Transfer Payments | 2.1 |

### Appendix B: Acronyms

| Acronym | Full Form |
|---|---|
| ATO | Authorization to Operate |
| CCCS | Canadian Centre for Cyber Security |
| CDS | Canadian Digital Service |
| CDN | Content Delivery Network |
| CSE | Communications Security Establishment |
| CSP | Cloud Service Provider |
| DDoS | Distributed Denial of Service |
| DIACC | Digital ID and Authentication Council of Canada |
| DSO | Departmental Security Officer |
| EARB | Enterprise Architecture Review Board |
| EDR | Endpoint Detection and Response |
| ERV | Energy Recovery Ventilator |
| EV | Electric Vehicle |
| EXIF | Exchangeable Image File Format |
| FIDO2 | Fast Identity Online (version 2) |
| GCKey | Government of Canada Key (authentication credential) |
| HVAC | Heating, Ventilation and Air Conditioning |
| HRV | Heat Recovery Ventilator |
| HSM | Hardware Security Module |
| IDS/IPS | Intrusion Detection System / Intrusion Prevention System |
| LoA | Level of Assurance |
| MFA | Multi-Factor Authentication |
| mTLS | Mutual Transport Layer Security |
| NRCan | Natural Resources Canada |
| OIDC | OpenID Connect |
| OPC | Office of the Privacy Commissioner of Canada |
| PBMM | Protected B, Medium Integrity, Medium Availability |
| PCTF | Pan-Canadian Trust Framework |
| PIA | Privacy Impact Assessment |
| PIB | Personal Information Bank |
| PV | Photovoltaic |
| RBAC | Role-Based Access Control |
| RPO | Recovery Point Objective |
| RTO | Recovery Time Objective |
| SA&A | Security Assessment and Authorization |
| SAST/DAST | Static/Dynamic Application Security Testing |
| SBOM | Software Bill of Materials |
| SIEM | Security Information and Event Management |
| SOC | Security Operations Centre |
| SSC | Shared Services Canada |
| TBS | Treasury Board of Canada Secretariat |
| TLS | Transport Layer Security |
| TOTP | Time-Based One-Time Password |
| TRA | Threat and Risk Assessment |
| WAF | Web Application Firewall |
| WCAG | Web Content Accessibility Guidelines |

### Appendix C: Referenced Documents

1. ITSG-33 — IT Security Risk Management: A Lifecycle Approach. Canadian Centre for Cyber Security.
2. ITSP.50.105 — Guidance on Cloud Security Assessment and Authorization. CCCS.
3. ITSM.50.100 — Cloud Service Provider IT Security Assessment Process. CCCS.
4. ITSP.50.103 — Guidance on Security Categorization of Cloud-Based Services. CCCS.
5. Policy on Service and Digital. Treasury Board of Canada Secretariat, 2020.
6. Policy on Government Security. TBS, 2019 (amended January 2025).
7. Directive on Security Management. TBS, 2019 (updated January 2025).
8. Directive on Service and Digital, Appendix G — GC Cloud Guardrails. TBS, 2022.
9. Directive on Privacy Practices — Standard on Privacy Impact Assessment. TBS, 2024.
10. Direction for Electronic Data Residency (ITPIN 2017-02). TBS, 2017.
11. Direction on the Secure Use of Commercial Cloud Services (SPIN 2017-01). TBS, 2017.
12. GC Security Control Profile for Cloud-Based GC Services. Canada.ca.
13. GC White Paper: Data Sovereignty and Public Cloud. Canada.ca.
14. Digital Sovereignty Framework. Canada.ca.
15. Privacy Act. R.S.C., 1985, c. P-21.
16. Official Languages Act. R.S.C., 1985, c. O-3.01 (modernized by Bill C-13, 2023).
17. Accessible Canada Act. S.C. 2019, c. 10.
18. Canadian Net-Zero Emissions Accountability Act. S.C. 2021, c. 22.
19. CAN/ASC - EN 301 549:2024 — ICT Accessibility Standard. Accessibility Standards Canada, 2024.
20. Pan-Canadian Trust Framework (PCTF). DIACC.

---

**Document Control**

| Version | Date | Author | Changes |
|---|---|---|---|
| 0.1 | 2026-02-01 | Digital Transformation Branch | Initial draft |
| 0.5 | 2026-02-15 | Security Architecture Team | Security and sovereignty sections |
| 0.8 | 2026-02-28 | Privacy and Legal Review | Privacy framework and PIA sections |
| 1.0 | 2026-03-04 | Program Steering Committee | Final draft for interdepartmental review |

---

*This document is the property of the Government of Canada. Distribution is restricted to authorized personnel on a need-to-know basis.*

*© His Majesty the King in Right of Canada, 2026*
