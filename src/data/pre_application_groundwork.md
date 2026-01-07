# Pre-Application Groundwork (2026-01-01)

Reference: Monthly timeline entry "Pre-application groundwork underway" in [investor_messaging/finance/BloxMonthlyFinal.xlsx](investor_messaging/finance/BloxMonthlyFinal.xlsx)

## Regulatory + Licensing Prep
1. **State MTL Readiness Matrix**
   - Compile state-specific MTL requirements (net worth, surety, permissible investments, background checks).
   - Flag accelerated pathways (e.g., CA DFPI, NYDFS, MI DIFS) vs. short-turn jurisdictions (NV/OK/FL/AZ).
   - Identify early outreach contacts and standard response times per state.
2. **Reg Counsel + Advisor Roster**
   - Lock engagement letters for lead regulatory counsel, local state filers, and surety brokers.
   - Define scope for compliance consultants (BSA/AML, KYC/KYB playbooks, internal controls).
3. **Policy & Procedure Drafting**
   - Refresh AML/BSA, OFAC, KYC/KYB, complaints handling, and safeguarding policies with state-specific annexes.
   - Map FFIEC/BSA manual controls to internal tooling; note gaps and remediation owners.
4. **Financial Statement Package**
   - Prepare compiled financials (in partnership with CPA) covering cash, reserves, and projected capital infusions.
   - Build pro-forma balance sheet reflecting reserve floor and FBO segregation.
5. **Surety + Trust Accounts**
   - Collect surety bond quotes and confirm collateral requirements.
   - Initiate trust account paperwork with partner bank custodians to align with state mandates.

## Product + Technical Controls
6. **System Security Overview (SSO) Draft**
   - Document infrastructure, access controls, encryption standards, and incident response workflow.
   - Align with SOC2-style narratives even if audit not yet performed.
7. **Transaction Monitoring Blueprints**
   - Define thresholds, anomaly rules, and escalation steps for BXT payments and payouts.
   - Specify tooling (internal dashboards, third-party monitoring) and data retention windows.
8. **Custody + Settlement Mapping**
   - Detail how FBO accounts, retained pools, and sweep logic operate (matching MonthlyFinal assumptions).
   - Highlight contingency plans for bank outages or audit delays.

## Operations + People
9. **Key Personnel Disclosures**
   - Assemble officer/director bios, fingerprints, background check consents, and personal financial statements.
   - Prepare org chart covering compliance, finance, engineering, and customer operations.
10. **Board & Governance Minutes**
    - Document resolutions authorizing MTL filings, officer appointments, and capital commitments.
11. **Vendor & Partner Inventory**
    - List critical vendors (custodian bank, card processors, IDV partners) with due-diligence packets.
    - Capture SLAs, redundancy plans, and data-sharing agreements.

## Evidence for Diligence
12. **Marketplace + GMV Proof Points**
    - Snapshot current merchant pipeline, LOIs, or pilot commitments feeding the September ’27 go-live.
    - Connect data capture plans (p95 acceptance) to the product roadmap.
13. **Investor Narrative Alignment**
    - Ensure the latest decks (Blox app + Blox Capital) and QA tab messaging reference this groundwork.
    - Cross-link to the review-call script so investors hear the regulatory story consistently.

> Maintain this checklist in source control and update status columns (Not started / In progress / Complete) as each workstream advances.

## State-specific licensing deep dives

### Michigan (DIFS — Money Transmission Services Act)
- **Capital + bonding:** Act 250 §13 requires GAAP statements proving at least $100K net worth plus $25K per Michigan location or authorized delegate (capped at $1M) and a surety bond between $500K and $1.5M; queue CPA-reviewed financials and a surety facility that scales with delegate onboarding ([MCL 487.1013](https://www.legislature.mi.gov/documents/mcl/pdf/mcl-487-1013.pdf)).
- **Permissible investments & trust accounting:** Sections 31–32 force us to hold permissible investments (cash, FDIC-insured CDs, U.S. obligations, tightly limited delegate receivables, etc.) at least equal to outstanding instruments and transmitted funds, with receivables capped at 20% of the total portfolio and 10% per delegate; build a monthly reconciliation that proves compliance before each call report ([Act 250 of 2006, §§31–32](https://www.legislature.mi.gov/documents/mcl/pdf/mcl-Act-250-of-2006.pdf)).
- **Authorized delegate controls:** Delegate agreements must be written, require Act compliance, and enforce remittance SLAs; prep onboarding kits (KYC evidence, remittance timing, audit rights) plus a playbook for issuing cease notices if DIFS orders a suspension ([MCL 487.1033](https://www.legislature.mi.gov/documents/mcl/pdf/mcl-Act-250-of-2006.pdf)).
- **Reg readiness:** DIFS expects proof that we are registered/qualified to do business in-state and can produce GAAP financials on demand; sync corporate filings, resident agent info, and NMLS submissions to avoid clock resets.
- **Resources:**
   - DIFS Money Services overview (may require VPN): [https://www.michigan.gov/difs/industry/licensees/money-services/money-transmitters](https://www.michigan.gov/difs/industry/licensees/money-services/money-transmitters)
   - NMLS law book (Act 250 PDF): [https://www.legislature.mi.gov/documents/mcl/pdf/mcl-Act-250-of-2006.pdf](https://www.legislature.mi.gov/documents/mcl/pdf/mcl-Act-250-of-2006.pdf)

### New York (DFS — Banking Law Article 13-B)
- **Licensing trigger:** Banking Law §641 bars money transmission without a DFS license; ensure the MU1 narrative clarifies agent-of-payee structures and that every NY-facing workflow sits inside the license perimeter ([NY Banking Law §641](https://www.nysenate.gov/legislation/laws/BNK/641)).
- **Bond sizing:** DFS sets the bond floor at $500K (and $750K for traveler’s checks) but often escalates based on locations, agents, and financial strength, so we should model $500K / $1M / $2M scenarios and pre-negotiate capacity ([NY Banking Law §643](https://www.nysenate.gov/legislation/laws/BNK/643)).
- **Permissible investments:** Section 651 requires permissible investments equal to outstanding payment instruments/traveler’s checks, with GAAP net-carrying value allowed only if market value stays ≥80% of carrying; lock the reserve mix (cash, treasuries, MMFs) to satisfy both DFS and DIFS coverage tests ([NY Banking Law §651](https://www.nysenate.gov/legislation/laws/BNK/651)).
- **Agent supervision:** DFS examines agent recordkeeping (see §651-B) alongside Part 417/504 AML controls; maintain site visit logs, agent remittance SLAs, and a NY-specific complaints register ready for diligence chat.
- **DFS comms:** Pre-draft the organization chart, cybersecurity attestation, BSA/AML control mapping, and Uniform Authorized Agent Report so we can respond quickly when DFS kicks off “in-depth diligence.”
- **Resources:**
   - DFS Money Transmitter portal: [https://www.dfs.ny.gov/apps_and_licensing/financial_services_industry/banking/money_transmitter_license](https://www.dfs.ny.gov/apps_and_licensing/financial_services_industry/banking/money_transmitter_license)
   - Banking Law Article 13-B index: [https://www.nysenate.gov/legislation/laws/BNK/A13-B](https://www.nysenate.gov/legislation/laws/BNK/A13-B)

### California (DFPI — Money Transmission Act)
- **Licensing scope:** Financial Code §2030 requires a DFPI license before we advertise or provide money transmission; confirm every CA workflow (Blox Marketplace PWAs, BXT payouts, reserve sweeps) is described in the application narrative ([Cal. Fin. Code §2030](https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FIN&sectionNum=2030.)).
- **Security deposit / bond:** Section 2037 mandates a cash/securities deposit with the State Treasurer or a surety bond sized to obligations—minimum $500K or 50% of outstanding stored value/payment instruments (capped at $2M) plus $250K–$7M for transmission balances; engage a surety early and pre-clear collateral if we prefer to post securities ([Cal. Fin. Code §2037](https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FIN&sectionNum=2037.)).
- **Treasurer logistics:** Opening the pledged-securities account can take 4–6 weeks; start the Security Deposit Agreement, authorized signers list, Fedwire instructions, and custodian acknowledgments now so the bond/deposit is ready when DFPI issues conditional approval.
- **Compliance filings:** DFPI expects audited financials, BSA/AML manuals aligned to the MT Act, board resolutions, disaster recovery plans, and (increasingly) California Consumer Privacy Act mapping; leverage the Michigan/NY workpapers but localize references and privacy exhibits.
- **Regulator engagement:** Schedule a pre-filing call with the DFPI Money Transmitter Division using the contact info on the DFPI site to confirm timelines, clarify deposit mechanics, and understand any supplemental data (GeoQuad monetization, FBO agreements) they want up front.
- **Resources:**
   - DFPI Money Transmitters hub: [https://dfpi.ca.gov/money-transmitters/](https://dfpi.ca.gov/money-transmitters/)
   - Money Transmission Act text: [https://leginfo.legislature.ca.gov/faces/codes_displayexpandedbranch.xhtml?tocCode=FIN&division=1.2.&title=&part=&chapter=3.&article=](https://leginfo.legislature.ca.gov/faces/codes_displayexpandedbranch.xhtml?tocCode=FIN&division=1.2.&title=&part=&chapter=3.&article=)
