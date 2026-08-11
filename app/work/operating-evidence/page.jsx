import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  CheckCircle2,
  CircleDollarSign,
  Database,
  LineChart,
  RefreshCw,
  UsersRound,
  Workflow,
} from "lucide-react";
import { site } from "../../../lib/site-data";

export const metadata = {
  title: "Production Operating Evidence",
  description:
    "How Naman Jain shipped lifecycle growth, conversion, payout, analytics, and automation products at AlloHealth.",
};

const lifecycle = [
  "First purchase",
  "Medicine & test fulfilment",
  "Treatment support",
  "Follow-up intent",
  "Booking & attendance",
  "Repeat fulfilment",
];

const transferability = [
  {
    from: "Repeat treatment journey",
    to: "Repayment, renewal, and lifecycle journeys",
    why: "Both require timely nudges, clear customer state, exception handling, and trust.",
  },
  {
    from: "Doctor payout platform",
    to: "Settlements, commissions, and partner payouts",
    why: "Tiered rules, approvals, statements, reconciliation, and payment initiation share the same core system needs.",
  },
  {
    from: "P&L and cohort ownership",
    to: "Unit economics and credit portfolio thinking",
    why: "Cohorts, LTV, margin, cost-to-revenue, and investor-grade reporting anchor product trade-offs in economics.",
  },
  {
    from: "AI-assisted conversation audits",
    to: "Servicing, collections, and support quality",
    why: "High-volume conversations need traceable review, human judgment, prioritization, and measured iteration.",
  },
];

function Metric({ value, label, note }) {
  return (
    <article className="operating-metric">
      <strong>{value}</strong>
      <h3>{label}</h3>
      {note ? <p>{note}</p> : null}
    </article>
  );
}

export default function OperatingEvidencePage() {
  return (
    <main className="case-study operating-page" id="main-content">
      <section className="operating-hero">
        <div className="shell">
          <a className="back-link" href="/">
            <ArrowLeft size={15} aria-hidden="true" />
            Back to portfolio
          </a>

          <div className="operating-hero-grid">
            <div>
              <div className="case-tags">
                <span>Production work</span>
                <span>Growth & monetization</span>
                <span>Analytics & automation</span>
              </div>
              <h1>Operating evidence from products I shipped.</h1>
              <p className="case-deck">
                I joined AlloHealth&apos;s Founder&apos;s Office to work close to the
                P&amp;L, then took ownership of Repeat Business: the full customer
                journey after a first purchase. The common thread is measurable
                customer and business outcomes, not feature output.
              </p>
            </div>
            <aside className="operating-brief" aria-label="Role summary">
              <dl>
                <div>
                  <dt>Company</dt>
                  <dd>AlloHealth · Jun 2024–present</dd>
                </div>
                <div>
                  <dt>Current role</dt>
                  <dd>Product Manager · Repeat Business Lead</dd>
                </div>
                <div>
                  <dt>Operating pod</dt>
                  <dd>
                    2 analysts · 2 engineering interns · 2 CX managers ·
                    specialised AI agents
                  </dd>
                </div>
                <div>
                  <dt>Core surfaces</dt>
                  <dd>Web checkout · doctor product · WhatsApp · internal tools</dd>
                </div>
              </dl>
            </aside>
          </div>

          <div className="operating-scoreboard" aria-label="Headline outcomes">
            <Metric value="33% → 45%" label="Repeat revenue contribution" />
            <Metric value="₹6.5K → ₹7.5K" label="Realized LTV" />
            <Metric value="35% → 85%" label="Doctor-agent handoff" />
            <Metric value="21.7% → 16.7%" label="Payout cost / revenue" />
          </div>
        </div>
      </section>

      <nav className="case-nav" aria-label="Operating evidence navigation">
        <div className="shell case-nav-inner">
          <a href="#repeat">Repeat</a>
          <a href="#handoff">Conversion</a>
          <a href="#payouts">Payouts</a>
          <a href="#automation">AI & operations</a>
          <a href="#finance">P&amp;L & fundraising</a>
          <a href="#fintech">Fintech relevance</a>
        </div>
      </nav>

      <section className="case-section" id="repeat">
        <div className="shell case-content-grid">
          <div className="case-section-title">
            <p className="section-kicker">01 · Repeat business</p>
            <h2>Made the post-purchase journey one owned system.</h2>
          </div>
          <div className="case-section-body">
            <p className="case-lead">
              The business needed repeat revenue to become a larger, healthier
              share of total revenue. The largest leakage happened before the
              first follow-up, while ownership was split across fulfilment,
              treatment support, doctors, WhatsApp, and calling teams.
            </p>

            <div className="journey-chain" aria-label="Repeat customer journey">
              {lifecycle.map((step, index) => (
                <div className="journey-step" key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step}</strong>
                  {index < lifecycle.length - 1 ? (
                    <ArrowRight size={16} aria-hidden="true" />
                  ) : null}
                </div>
              ))}
            </div>

            <div className="decision-grid">
              <article>
                <UsersRound size={21} aria-hidden="true" />
                <h3>My ownership</h3>
                <p>
                  Led 2 analysts, 2 engineering interns, 2 customer experience
                  managers, and specialised AI agents; aligned product,
                  operations, doctors, and fulfilment around one repeat funnel.
                </p>
              </article>
              <article>
                <Workflow size={21} aria-hidden="true" />
                <h3>What changed</h3>
                <p>
                  Improved checkout and fulfilment, treatment communications,
                  follow-up booking channel drop-offs, attendance, reschedules,
                  no-shows, and the loop into repeat fulfilment.
                </p>
              </article>
              <article>
                <BarChart3 size={21} aria-hidden="true" />
                <h3>How it was managed</h3>
                <p>
                  Built a City Heads dashboard that translated funnel gaps into
                  the incremental repeat consultations each doctor and city
                  could unlock.
                </p>
              </article>
            </div>

            <div className="result-panel">
              <span>Business result</span>
              <strong>
                Repeat revenue contribution increased from 33% to 45%; realized
                LTV increased from ₹6,500 to ₹7,500 in the latest-quarter view
                versus the prior two-quarter baseline.
              </strong>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section operating-tint" id="handoff">
        <div className="shell case-content-grid">
          <div className="case-section-title">
            <p className="section-kicker">02 · Conversion</p>
            <h2>Closed the gap between consultation and purchase.</h2>
          </div>
          <div className="case-section-body">
            <p className="case-lead">
              After an online consultation, patients needed a reliable handoff
              from the doctor to an agent who could explain the prescription and
              support purchase. Doctors leaving early or inconsistent handoffs
              created avoidable conversion loss.
            </p>

            <div className="before-after">
              <article>
                <span>Before</span>
                <strong>35% handoff</strong>
                <p>Inconsistent transfer after the first consultation.</p>
              </article>
              <ArrowRight size={24} aria-hidden="true" />
              <article className="after">
                <span>After</span>
                <strong>85% handoff</strong>
                <p>Pop-up, timer, and workflow guardrails kept ownership clear.</p>
              </article>
            </div>

            <ul className="evidence-list">
              <li>
                <CheckCircle2 size={18} aria-hidden="true" />
                <span>
                  Designed changes in the doctor product and the agent workflow,
                  not just another operational reminder.
                </span>
              </li>
              <li>
                <CheckCircle2 size={18} aria-hidden="true" />
                <span>
                  Applied across roughly 5,000 eligible patients per month.
                </span>
              </li>
              <li>
                <CheckCircle2 size={18} aria-hidden="true" />
                <span>
                  Patients receiving the handoff converted to purchase at about
                  twice the usual rate.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="case-section" id="payouts">
        <div className="shell case-content-grid">
          <div className="case-section-title">
            <p className="section-kicker">03 · Payout platform</p>
            <h2>Turned doctor compensation into a product.</h2>
          </div>
          <div className="case-section-body">
            <p className="case-lead">
              The goal was to reduce doctor payout cost as a percentage of
              revenue without breaking incentives or creating an opaque finance
              process. I designed a declining, slab-based model and the system
              required to calculate and operate it.
            </p>

            <div className="payout-flow">
              {["Revenue inputs", "Tiered rules", "Payout calculation", "Approval", "Statement & payslip", "Payment trigger"].map(
                (step, index) => (
                  <div key={step}>
                    <span>{index + 1}</span>
                    <strong>{step}</strong>
                  </div>
                ),
              )}
            </div>

            <div className="operating-metrics-grid three">
              <Metric
                value="4 weeks"
                label="Idea to production"
                note="With 1 engineer, 1 designer, and 1 analyst intern"
              />
              <Metric
                value="60+"
                label="Doctors covered"
                note="Automated statements, payslips, and approvals"
              />
              <Metric
                value="₹25L / month"
                label="Transaction volume"
                note="Final controlled action initiated payments"
              />
            </div>

            <div className="result-panel payout-result">
              <span>Economic result</span>
              <strong>
                Doctor payout cost fell from 21.7% to 16.7% of revenue while the
                product made calculation, approval, and payment operations more
                consistent.
              </strong>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section operating-dark" id="automation">
        <div className="shell case-content-grid">
          <div className="case-section-title">
            <p className="section-kicker light">04 · AI & operations</p>
            <h2>Used AI to inspect the funnel, then kept humans in control.</h2>
          </div>
          <div className="case-section-body">
            <p className="case-lead">
              The WhatsApp chatbot handled about 7,000 chats a month. I used
              n8n- and Langfuse-based workflows to audit conversations, classify
              follow-up journeys, surface incorrect resolutions, and recommend
              the next product or content fix. The team reviewed the evidence
              and made the decisions.
            </p>

            <div className="ai-loop">
              <div><Database size={20} /><strong>Conversation data</strong></div>
              <ArrowRight size={18} />
              <div><Bot size={20} /><strong>AI-assisted audit</strong></div>
              <ArrowRight size={18} />
              <div><UsersRound size={20} /><strong>Human review</strong></div>
              <ArrowRight size={18} />
              <div><RefreshCw size={20} /><strong>Journey fix & measure</strong></div>
            </div>

            <div className="automation-proof">
              <div>
                <span>Daily data-to-decision pipeline</span>
                <strong>
                  Scheduled queries → source validation → safe Sheet repair →
                  dashboard rebuild → guarded publication
                </strong>
              </div>
              <p>
                The refresh checks both the Google Sheets sources and published
                City Heads dashboards for staleness. If a query-backed range is
                incomplete, it validates the latest exact-name scheduled-query
                output, writes it to a staging tab, verifies it, and replaces
                only the owned columns. Helper formulas and unrelated tabs stay
                untouched; a stale or structurally invalid source blocks the
                dashboard publish.
              </p>
            </div>

            <div className="operating-metrics-grid three dark">
              <Metric
                value="35% → 55%"
                label="Patient-led bookings"
                note="Higher self-serve share across total follow-up bookings"
              />
              <Metric
                value="88%"
                label="High-intent self-booking"
                note="Only 12% of intent cases needed agent help"
              />
              <Metric
                value="9K → 6.5K"
                label="Weekly calling tasks"
                note="Deduped tasks while carrying forward customer context"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="case-section" id="finance">
        <div className="shell case-content-grid">
          <div className="case-section-title">
            <p className="section-kicker">05 · P&amp;L & fundraising</p>
            <h2>Worked where product decisions meet the books.</h2>
          </div>
          <div className="case-section-body">
            <p className="case-lead">
              Before leading Repeat Business, I shadowed the company P&amp;L owner
              and supported the pre-Series A process led by Rainmatter. This
              built fluency in how operating metrics become financial reporting
              and investor diligence.
            </p>

            <div className="finance-ledger">
              <article>
                <LineChart size={21} aria-hidden="true" />
                <h3>Investor-grade analysis</h3>
                <p>
                  Prepared one-year cohorts, LTV, indirect P&amp;L, and supporting
                  data after the term sheet in close partnership with the Chief
                  of Staff.
                </p>
              </article>
              <article>
                <Database size={21} aria-hidden="true" />
                <h3>Books-aligned reporting</h3>
                <p>
                  Worked directly with CAs and consultants on the financial
                  numbers used for annual reporting and investor communication.
                </p>
              </article>
              <article>
                <CircleDollarSign size={21} aria-hidden="true" />
                <h3>Gross-margin improvement</h3>
                <p>
                  Improved margin by about 27% across three high-velocity SKUs
                  through stockout control, vendor changes, and better pricing.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section fintech-transfer" id="fintech">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Why this transfers to fintech</p>
              <h2>Different domain. Familiar product problems.</h2>
            </div>
            <p>
              I am targeting B2C product roles in lending, payments, trading,
              and wealth where analytics, trust, and operating economics matter.
            </p>
          </div>

          <div className="transfer-table" role="table" aria-label="Fintech transferability">
            <div className="transfer-row header" role="row">
              <span role="columnheader">Evidence I have</span>
              <span role="columnheader">Fintech application</span>
              <span role="columnheader">Shared product skill</span>
            </div>
            {transferability.map((item) => (
              <div className="transfer-row" role="row" key={item.from}>
                <strong role="cell">{item.from}</strong>
                <strong role="cell">{item.to}</strong>
                <p role="cell">{item.why}</p>
              </div>
            ))}
          </div>

          <div className="markets-note">
            <div>
              <p className="section-kicker">Independent markets experience</p>
              <h3>Two years of real capital, not only classroom interest.</h3>
            </div>
            <p>
              During college, I managed a ₹10L pledged-capital trading account
              to approximately ₹16L over two years. I independently studied
              equities, derivatives, bonds, REITs, market structure, and risk.
              This is presented as personal markets experience—not employment,
              a managed fund, or investment advice.
            </p>
          </div>

          <div className="operating-cta">
            <div>
              <span>More proof</span>
              <h3>Resume, data work, code, and a complete fintech concept.</h3>
            </div>
            <div className="button-row">
              <a className="button primary" href={site.resume} download>
                Download resume
              </a>
              <a className="button secondary" href="/work/affordable-commerce">
                Fintech case study <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a
                className="button secondary"
                href={site.tableau}
                target="_blank"
                rel="noreferrer"
              >
                Tableau work <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              <a
                className="button secondary"
                href={site.linktree}
                target="_blank"
                rel="noreferrer"
              >
                Earlier projects <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>

          <p className="confidentiality-note">
            All company metrics are presented at an aggregate level. No patient,
            doctor, or confidential company data is included.
          </p>
        </div>
      </section>
    </main>
  );
}
