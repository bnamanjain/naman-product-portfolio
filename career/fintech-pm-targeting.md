# Fintech Product Manager targeting plan

Updated: 2 August 2026 · Location constraint: Bengaluru · Target switch: 4–6 weeks

## Positioning thesis

Naman is not a domain-switching generalist starting from zero. The strongest story is:

> Product Manager who has owned a revenue line and built high-stakes customer journeys, payout economics, financial reporting, and daily AI/data control systems—and is now applying that operating depth to consumer fintech.

The resume and portfolio should lead with four proof clusters:

1. **Growth and lifecycle:** repeat revenue 33% → 45%; realized LTV ₹6.5K → ₹7.5K.
2. **Conversion and customer trust:** doctor-agent handoff 35% → 85% across ~5,000 eligible patients/month; ~2× purchase conversion after handoff.
3. **Money movement and economics:** payout platform for 60+ doctors and ~₹25L/month; payout cost/revenue 21.7% → 16.7%.
4. **AI-native operating systems:** daily SQL/AI audits across ~7,000 chats/month; stale-source detection, safe Google Sheets repair, automated dashboards and guarded publishing; weekly calling tasks 9,000 → 6,500.

## What current PM job descriptions are rewarding

| Hiring pattern | Evidence already available | Remaining gap |
|---|---|---|
| Own a metric end to end | Revenue mix, LTV, conversion, workload, payout economics | None; make ownership unmistakable |
| Advanced product analytics | SQL, Redshift, cohorts, funnels, automated reporting, dashboards | Add experiment design and event taxonomy artifacts |
| AI-native workflows with human control | Daily chat audits, classification, evaluation, recommendations, human approval | Add evaluation metrics and failure taxonomy to portfolio |
| Platform/API fluency | APIs, webhooks, scripts, source pipelines, payout workflow | Add one public API contract and sequence diagram |
| Financial operations and auditability | Payout approvals/statements, books-aligned reporting, source-quality gates | Make controls and reconciliation explicit |
| Lending depth | Credit-commerce concept and P&L fluency | **Primary gap:** underwriting, risk policy, LOS/LMS, repayment, delinquency, collections, RBI/NBFC context |
| Payment reliability | Payout system, checkout, automation, operational dashboards | Add idempotency, ledger/reconciliation, failure recovery, success-rate/latency framing |
| Investment-product depth | Two years of markets experience; equities, derivatives, bonds, REITs | Add investor journey, order/portfolio states, suitability or mutual-fund operations proof |

## Live-role fit as of 2 August 2026

### Tier A — apply now with tailored outreach

| Company / PM direction | Why the fit is credible | Resume angle | Gap to prepare |
|---|---|---|---|
| **super.money — CX, AI & Platform PM** | Current role asks for 2–4 years, SQL, funnels/cohorts, agentic support, human-in-the-loop handoffs, automation and fintech trust. This is the closest match to the daily chat-audit, task-routing and handoff work. | AI-assisted journey intelligence + 35%→55% self-booking + 9K→6.5K tasks | LLM evaluation vocabulary, CSAT/resolution metrics, financial-support edge cases |
| **Cashfree — Payouts PM-1** | Current role focuses on transaction flows, failure patterns, reconciliation, APIs, dashboards and operational robustness. Direct bridge from the doctor payout platform. | ₹25L/month payouts + cost/revenue improvement + approval/statements/payment initiation | Payment rails, ledger, reconciliation and idempotency |
| **PhonePe — Growth PM** | Current role asks for 2–5 years, consumer/platform shipping, large-data analysis, complex technology, growth roadmaps and cross-functional ownership. | Repeat revenue, LTV, conversion, customer journey and dashboards | Martech stack vocabulary and scale framing |
| **Zerodha Fund House — PM** | Current role explicitly values internal financial systems, automation, auditability, AI-assisted prototypes, scripts, APIs/data flows and 2–4 years of experience. | Payout platform + financial reporting + AI/data controls + independent markets experience | Mutual-fund lifecycle, NAV/cut-off, reconciliation, RTA/KYC basics |
| **INDmoney — Platform PM** | Current role asks for 3–5 years, large datasets, SQL, technical research, edge cases, specifications and scalable consumer-finance solutions. | SQL/Redshift systems + end-to-end journey + technical prototyping | Clear public API/spec artifact and consumer-investing domain case |
| **Razorpay — PM II / Growth** | PM descriptions emphasize problem-first roadmaps, business impact, GTM, metrics, technical collaboration and AI edge. | Revenue ownership + payout/financial operations + AI automation | Merchant discovery and payments-specific system language |

### Tier B — strong targets after one domain artifact

| Company / direction | Fit today | What unlocks it |
|---|---|---|
| **super.money — Lending PM** | Strong analytical and lifecycle base; current hiring asks for 3–5 years and deep personal/gold/digital lending knowledge | Lending decisioning and repayment-control project |
| **Navi — PM, financial decision systems** | Excellent outcome ownership and data fit; role directly affects speed, accuracy and fairness of financial decisions | Underwriting/risk/decisioning case and lending vocabulary |
| **moneyview / Fibe / KreditBee / InCred / slice credit** | Consumer funnel, operations and P&L proof transfer well | LOS → underwriting → offer → disbursal → repayment → collections portfolio artifact |
| **smallcase — Mutual Funds / Publisher** | 2+ years, consumer products, data and markets interest fit; operational platform experience helps | Mutual-fund/investor-operations teardown or prototype |
| **Groww / Share.Market / Dhan / Upstox** | Markets experience and analytics help; production product experience is credible | Order lifecycle, risk controls and investor-protection artifact |

### Tier C — selective, not the first four-week focus

- Very senior roles requiring 5–8+ years or deep prior fintech specialization.
- Pure B2B infrastructure roles where merchant/client discovery is mandatory and B2C experience is not enough.
- Insurance PM roles unless a specific journey/economics role maps tightly to existing healthcare operating experience.
- Roles outside Bengaluru.

## Portfolio projects that close the gaps

Do **not** build several generic redesigns. Build one deep, working lending system and one narrow payments reliability artifact. The production-evidence page and existing affordable-commerce case already cover product breadth.

### Project 1 — Consumer Lending Decision & Repayment OS

Priority: highest · Time: 10–12 focused days · Target: super.money Lending, Navi, moneyview, KreditBee, Fibe, slice

**Problem:** Design a digital personal-loan journey that improves approval-to-disbursal conversion while controlling expected credit loss and early delinquency.

**Minimum artifact set:**

- Synthetic applicant dataset and a documented borrower segmentation.
- Funnel: eligibility → KYC → bureau/AA data → underwriting → offer/pricing → e-sign/eNACH → disbursal → repayment.
- Policy/rule engine with approve, decline and manual-review outcomes.
- Simple scorecard or probability-of-default model; show why model output does not replace credit policy.
- Offer construction: amount, tenure, APR, EMI, KFS, cooling-off/cancellation and consent.
- Repayment and servicing states, failed autopay retries, prepayment/foreclosure and support flows.
- Portfolio dashboard: approval rate, disbursal rate, FPD, DPD buckets, roll rates, vintage loss, repeat borrowing, contribution after expected loss.
- API contract, sequence diagram, event taxonomy, failure modes, audit log and experiment plan.
- A short note on RBI digital-lending expectations, KYC/AML, bureau and consent. Verify every regulatory claim before publication.

**Why it matters:** it fills the only major repeated hard-domain gap in current lending JDs: underwriting, LOS/LMS, repayment and risk economics.

### Project 2 — Payout Reliability & Reconciliation Control Room

Priority: second · Time: 5–6 focused days · Target: Cashfree, Razorpay, Juspay, PayU, Setu, Decentro

Build on the real doctor-payout experience without exposing company data.

**Minimum artifact set:**

- A public demo using synthetic merchants/beneficiaries and transactions.
- Payment state machine: created, queued, processing, success, failed, reversed, unknown.
- Idempotency and retry rules; duplicate prevention; webhook delivery and replay.
- Double-entry ledger or clearly explained source-of-truth model.
- Bank/provider reconciliation and an exception queue.
- Dashboard for success rate, latency, unknown rate, reconciliation match rate, failure reason and time to resolution.
- One incident postmortem and a phased product roadmap.

**Why it matters:** it converts “I shipped payouts” into the platform/reliability language used by Cashfree, Razorpay and Juspay.

### Project 3 — Investor Operations & Trust Journey

Priority: optional after applications begin · Time: 4–5 focused days · Target: Zerodha Fund House, smallcase, Groww, INDmoney

Choose one narrow problem instead of redesigning an entire app: mutual-fund order exceptions and reconciliation, or brokerage order-status clarity during exchange/broker failures.

Include suitability/appropriateness boundaries, KYC, cut-off/NAV or order states, auditability, investor communication, failure recovery, operations tooling and metrics. Use the two-year markets track record as context, not as proof of guaranteed investing skill.

## Resume variants

1. **CX / Growth / AI:** super.money CX, PhonePe Growth, consumer fintech. Lead with repeat revenue, LTV, handoff, chat audit and task reduction.
2. **Payments / Platform:** Cashfree, Razorpay, Juspay, Setu. Lead with payout platform, money flow, source-quality controls, APIs and financial reporting.
3. **Lending / Credit:** super.money Lending, Navi, moneyview, KreditBee, Fibe, slice. Use the base resume now; add Project 1 when ready and foreground lifecycle/P&L/cohort skills.
4. **Wealth / Trading:** Zerodha Fund House, smallcase, Groww, INDmoney. Keep financial systems and automation high; move independent markets experience above the project line.

## Application rule

An application is complete only when it has:

- a role-matched resume variant;
- a 3–5 line note mapping two job requirements to two quantified proofs;
- direct outreach to the hiring manager/product leader or recruiter;
- one referral attempt;
- a logged follow-up date;
- a portfolio link landing on the relevant evidence anchor.

Easy Apply alone does not count toward the weekly target.

## Six-week execution plan at three hours a day

Applications begin immediately; the portfolio projects run in parallel.

### Daily operating rhythm

- **60 minutes — applications:** two role-matched applications, each using the right resume angle and evidence anchor.
- **40 minutes — outreach:** four high-context messages or emails to recruiters, PM leaders, founders, alumni, or second-degree connections.
- **60 minutes — proof or interview work:** build the current portfolio artifact or practise one product/business case.
- **20 minutes — domain learning:** one concept, one primary source, and five written interview notes.

On one weekend day, use the full three hours for a mock interview and artifact review instead of new applications.

### Week 1 — reposition and activate the network

- Publish the revised resume and production-evidence portfolio.
- Create four saved resume angles: CX/Growth/AI, Payments/Platform, Lending/Credit, Wealth/Trading.
- Apply to the six Tier-A directions above; seek a referral before or immediately after applying.
- Build a target sheet with role URL, hiring manager, product leader, recruiter, referral path, resume version, proof link, contact date, and follow-up date.
- Prepare two 90-second stories: Repeat Business and doctor payouts.

### Week 2 — lending proof while applications continue

- Complete the borrower funnel, underwriting policy, offer/KFS, repayment state machine, and initial dashboard for Project 1.
- Apply to 10–12 suitable lending/growth roles; send 20 targeted contacts across the week.
- Learn lending economics and the complete digital loan lifecycle.
- Practise a lending funnel diagnosis and a credit-policy trade-off case.

### Week 3 — finish lending and add payment reliability

- Publish Project 1 with synthetic data, metrics, API/sequence diagram, edge cases and explicit assumptions.
- Build Project 2 as a compact payout reliability and reconciliation control room.
- Apply to Cashfree, Razorpay, PhonePe, Juspay-adjacent, Setu and Decentro-type PM roles.
- Practise a failed-payment RCA, reliability prioritization, and merchant escalation case.

### Week 4 — increase interview conversion

- Stop adding breadth unless an active JD reveals a genuine missing signal.
- Run three mocks: product sense, analytics/execution, and behavioural/leadership.
- Create company briefs for every scheduled or high-probability interview: business model, core funnel, revenue model, product surfaces, risks, competitors, recent releases, and two informed questions.
- Follow up once on all strong applications after five business days with one new proof point.

### Weeks 5–6 — interview loop and selective wealth proof

- Spend 60–70% of time on active interview loops and company-specific cases.
- Build Project 3 only for an active Groww, Zerodha Fund House, smallcase, INDmoney, Dhan, Upstox, or Share.Market opportunity.
- Continue 8–10 high-quality applications per week, not high-volume Easy Apply.
- Maintain a failure log: rejection stage, likely gap, evidence needed, and the next change to the resume, story, or case answer.

## Business context interview curriculum

### Lending and credit — learn first

**Business model:** regulated entity versus LSP/DLA, balance-sheet lender versus marketplace/co-lending, cost of funds, origination revenue, fees, net interest margin, credit cost, contribution and repeat borrowing.

**Lifecycle:** acquisition → eligibility → KYC → bureau/account-aggregator or alternative data → underwriting → offer/pricing → KFS and consent → mandate/e-sign → disbursal → servicing → repayment → delinquency/collections → closure/repeat.

**Metrics:** application completion, approval rate, approval-to-disbursal, time to decision/disbursal, average ticket and tenure, APR, first-payment default, DPD buckets, bounce rate, roll rate, cure rate, vintage loss, NPA, collection efficiency, expected loss, LTV/CAC and contribution after loss.

**Product trade-offs:** conversion versus loss, amount/tenure versus affordability, automation versus manual review, thin-file inclusion versus fraud, collections effectiveness versus customer trust, and growth versus funding/portfolio constraints.

Use the RBI Digital Lending Directions and KYC material as the source of truth before publishing regulatory details. The product case should demonstrate KFS/APR clarity, direct money flows, consent/data minimization, cooling-off, grievance paths and an auditable trail without pretending to give legal advice.

### Payments — learn second

**System:** payer app/TPAP, payer PSP/remitter bank, NPCI switch, payee PSP/acquirer, beneficiary bank, merchant/aggregator and reconciliation/settlement layers.

**Metrics:** authorization/success rate, business versus technical decline, latency, timeout/unknown rate, retries, duplicate rate, reversal TAT, settlement match rate, webhook success, exception ageing, chargebacks/disputes and support contact rate.

**Product trade-offs:** conversion versus fraud, retry versus duplicate risk, fast merchant onboarding versus compliance, abstraction versus provider-specific controls, and apparent success versus ledger/bank truth.

NPCI's official UPI ecosystem material is especially useful because it publishes participant definitions and separates business declines from technical declines—the language used in payment RCAs.

### Trading and wealth — learn third

**Brokerage system:** customer/KYC, broker, exchange, clearing corporation, depository/DP, order management system, risk management system, funds/securities ledger, contract note and settlement.

**Investment system:** AMC, mutual fund scheme, distributor/platform, RTA, custodian, NAV, cut-off and funds-realization rules, purchase/redemption/SIP mandates, reconciliation and investor communication.

**Metrics:** KYC completion, funded-account activation, first investment/trade, order success/rejection, active investors, assets/holdings, SIP success, net flows, retention, revenue per user, complaint rate, exception TAT and trust/suitability guardrails.

**Product trade-offs:** activity versus responsible investing, information density versus clarity, speed versus risk controls, education versus advice, and growth versus suitability/compliance.

SEBI's investor material explains the roles of depositories, DPs, clearing corporations and RTAs; its mutual-fund FAQ should be used for current NAV/cut-off logic.

## Outreach system

Contact in this order: direct product leader or hiring manager → recruiter → team PM → founder/functional leader for early-stage companies → alumni or second-degree referrer. Do not ask everyone for “a referral”; show the match first.

### Cold email / LinkedIn note

**Subject:** PM for `[team]` — `[most relevant quantified proof]`

> Hi `[Name]` — I’m a Bengaluru PM leading Repeat Business at AlloHealth. I increased repeat revenue contribution from 33% to 45% and built `[role-relevant proof: a daily AI-assisted CX control system / a ₹25L-month payout platform / an automated financial workflow]`. Your `[exact role/team]` is working on `[specific JD problem]`, which maps closely to that work. I’ve attached a one-page resume and linked the relevant case here: `[deep link]`. If the evidence looks relevant, I’d value 15 minutes or a pointer to the hiring owner.

Keep the first note below 100 words. Follow up once after five business days with a new artifact or a specific observation about their product; do not send “just checking in.”

### Evidence mapping examples

- **super.money CX/AI:** human-in-the-loop handoff + 7K monthly chat audits + 28% task reduction.
- **Cashfree Payouts:** ₹25L/month payout platform + automated approval/statements + cost/revenue improvement.
- **PhonePe Growth:** repeat revenue + LTV + consumer conversion + large-data dashboarding.
- **Zerodha Fund House:** financial operations + auditability + scripts/AI automation + markets experience.
- **Navi / lending:** cohort/LTV/P&L depth + lifecycle ownership + Lending Decision & Repayment OS when published.

## GitHub recruiter-path cleanup

The public account currently has the right two flagship repositories, but the first-screen narrative is incomplete.

- Pin `naman-product-portfolio` and `super-money-affordable-commerce` first.
- Create a profile README in the currently empty `bnamanjain` profile repository with the same headline, four quantified outcomes, target domain and links to resume/portfolio.
- Add a strong README, screenshots, problem statement, architecture, privacy model and demo instructions to `Family-Insurance-Tracker` before featuring it. It can support insurtech applications, but should not displace lending/payments work.
- Keep the operational `Allo-Health` dashboard repository private; the public portfolio should show aggregate evidence without code, credentials, or patient/company data.
- Do not feature the 2023 `Image-Captioning` repository in the fintech recruiter path. It is useful learning history but its current README and unfinished deployment weaken the seniority signal.
- Every new project README should open with: problem, target user, business/risk objective, measurable success criteria, live demo, system diagram, key decisions, trade-offs, limitations and next experiment.

## Primary business-learning sources

- RBI digital-lending guidance: https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12382
- RBI KYC amendment directions: https://www.rbi.org.in/scripts/NotificationUser.aspx?Id=12866
- NPCI UPI participants and flows: https://www.npci.org.in/product/upi/about-upi
- NPCI UPI ecosystem and decline metrics: https://www.npci.org.in/what-we-do/upi/upi-ecosystem-statistics
- SEBI depository and market-participant explainer: https://investor.sebi.gov.in/depositories.html
- SEBI mutual-fund investor FAQ: https://www.sebi.gov.in/sebi_data/faqfiles/sep-2024/1727242783639.pdf

## JD sources reviewed

- super.money, Product Manager — Customer Experience (AI & Platform): https://in.linkedin.com/jobs/view/product-manager-at-super-money-4377695705
- super.money, Lending PM hiring note: https://www.linkedin.com/posts/nehalakhwani_supermoney-is-hiring-for-product-manager-activity-7480264957138440194-UjrI
- PhonePe, Product Manager — Growth: https://in.linkedin.com/jobs/view/product-manager-at-phonepe-4444590351
- PhonePe, Product Manager — Data Platform: https://in.linkedin.com/jobs/view/product-manager-data-platform-at-phonepe-4444701517
- Cashfree, Product Manager — Payouts: https://in.linkedin.com/jobs/view/product-manager-at-cashfree-payments-4372532123
- Razorpay careers and PM hiring material: https://razorpay.com/careers/
- Navi, Product Manager: https://in.linkedin.com/jobs/view/product-manager-at-navi-4415765200
- moneyview, Product Manager: https://jobs.accel.com/companies/moneyview/jobs/72862700-product-manager
- KreditBee, Product Manager — UPI: https://krazybee.freshteam.com/jobs/DqeQLeALhyOv/product-manager-upi
- Zerodha Fund House, Product Manager: https://careers.zerodhafundhouse.com/jobs/e7q_IxTVSV_s/Product%20Manager
- INDmoney, Platform Product Manager: https://in.linkedin.com/jobs/view/platform-product-manager-at-indmoney-4439029797
- smallcase, Product Manager 2: https://in.linkedin.com/jobs/view/product-manager-2-at-smallcase-4376768473
- Juspay careers (no PM opening shown at review time): https://juspay.io/careers
