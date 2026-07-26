import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Download,
  ExternalLink,
  FileText,
  Github,
  Monitor,
  Presentation,
  Smartphone,
  X,
} from "lucide-react";
import { CaseNav } from "../../../components/case-nav";
import { DiagramGallery } from "../../../components/diagram-gallery";
import { PrototypeGallery } from "../../../components/prototype-gallery";
import { project } from "../../../lib/site-data";

export const metadata = {
  title: "Affordable Commerce Case Study",
  description:
    "A zero-to-one product case study for affordability-first commerce inside a high-frequency UPI app.",
  alternates: {
    canonical: "/work/affordable-commerce",
  },
};

const launchPlan = [
  {
    month: "Month 1",
    title: "Define the wedge",
    work: "30 buyer interviews, 15 merchant interviews, category scoring, baseline funnel, economics, and risk boundaries.",
    exit: "Signed cohort, category, and contribution model.",
  },
  {
    month: "Month 2",
    title: "Lock the contracts",
    work: "Tested journeys, disclosures, seller onboarding, APIs, schemas, events, instrumentation, and partner simulators.",
    exit: "Approved MVP, compliance, and integration contracts.",
  },
  {
    month: "Month 3",
    title: "Build the decision loop",
    work: "Catalogue, discovery, eligibility, offers, bag repricing, lender adapter, and payment adapter.",
    exit: "Financeable catalogue and simulated eligible journeys.",
  },
  {
    month: "Month 4",
    title: "Build transaction operations",
    work: "Checkout saga, orders, repayments, refunds, settlements, support timeline, and reconciliation.",
    exit: "End-to-end order and matched full/partial refunds.",
  },
  {
    month: "Month 5",
    title: "Controlled alpha",
    work: "1,000 invited users, three anchor sellers, 100-300 SKUs, one primary credit plan plus full UPI.",
    exit: "Funnel, risk, and operations within agreed thresholds.",
  },
  {
    month: "Month 6",
    title: "Feature-flagged beta",
    work: "Up to 50,000 eligible users, experiment holdouts, daily risk review, and weekly P&L review.",
    exit: "Positive cohort contribution with repeat and risk signals.",
  },
];

export default function AffordableCommerceCaseStudy() {
  return (
    <main id="main-content" className="case-study">
      <section className="case-hero">
        <div className="shell">
          <a className="back-link" href="/#work">
            <ArrowLeft size={16} aria-hidden="true" />
            Back to selected work
          </a>
          <div className="case-hero-grid">
            <div className="case-hero-copy">
              <div className="case-tags">
                <span>Independent portfolio concept</span>
                <span>Fintech · Commerce · Credit</span>
              </div>
              <h1>Affordable Commerce inside super.money</h1>
              <p className="case-deck">
                Designing an affordability layer that connects UPI frequency,
                transparent credit checkout, a narrow product catalogue, and a
                seller operating system.
              </p>
              <div className="button-row">
                <a
                  className="button primary"
                  href={project.links.borrower}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Smartphone size={17} aria-hidden="true" />
                  Borrower prototype
                  <ExternalLink size={15} aria-hidden="true" />
                </a>
                <a
                  className="button secondary"
                  href={project.links.seller}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Monitor size={17} aria-hidden="true" />
                  Seller prototype
                  <ExternalLink size={15} aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="case-facts">
              <dl>
                <div>
                  <dt>My scope</dt>
                  <dd>Strategy, UX, P&L, systems, APIs, GTM</dd>
                </div>
                <div>
                  <dt>Launch frame</dt>
                  <dd>6 months · controlled India beta</dd>
                </div>
                <div>
                  <dt>Primary buyer</dt>
                  <dd>Existing UPI user · ₹5K-₹30K purchase</dd>
                </div>
                <div>
                  <dt>Surfaces</dt>
                  <dd>Borrower mobile · seller web · merchant API</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="case-hero-media">
            <div className="case-browser">
              <div className="browser-bar">
                <span />
                <span />
                <span />
                <strong>Merchant Affordability OS</strong>
              </div>
              <img
                src="/assets/affordable-commerce/seller-overview.png"
                alt="Seller Affordable Commerce dashboard"
              />
            </div>
            <div className="case-phone">
              <div className="phone-speaker" />
              <img
                src="/assets/affordable-commerce/mobile-product.png"
                alt="Borrower product page showing Pay in 3"
              />
            </div>
            <div className="case-media-note">
              <strong>One platform</strong>
              <span>Borrower discovery to seller settlement</span>
            </div>
          </div>
        </div>
      </section>

      <CaseNav />

      <section className="case-section" id="brief">
        <div className="shell case-content-grid">
          <div className="case-section-title">
            <p className="section-kicker">01 · Brief</p>
            <h2>The opportunity starts after payments.</h2>
          </div>
          <div className="case-section-body">
            <p className="case-lead">
              super.money already has high-frequency UPI usage, Credit Health,
              credit access, and a Splitstore entry. The product question is how
              to turn those assets into a commerce habit without becoming a
              broad inventory or logistics business.
            </p>
            <blockquote>
              How could super.money build a repeatable, contribution-positive
              commerce business by helping eligible users discover what fits
              their cash flow?
            </blockquote>

            <div className="strategy-chain" aria-label="Strategic adjacency">
              <div>
                <span>01</span>
                <strong>Payments</strong>
                <small>High-frequency relationship</small>
              </div>
              <ArrowRight size={20} aria-hidden="true" />
              <div>
                <span>02</span>
                <strong>Credit Health</strong>
                <small>Trust and readiness</small>
              </div>
              <ArrowRight size={20} aria-hidden="true" />
              <div>
                <span>03</span>
                <strong>Credit access</strong>
                <small>Eligible plans</small>
              </div>
              <ArrowRight size={20} aria-hidden="true" />
              <div className="highlight">
                <span>04</span>
                <strong>Affordable Commerce</strong>
                <small>Useful purchase and repeat</small>
              </div>
            </div>

            <div className="artifact-strip">
              <a
                href={project.links.blueprint}
                target="_blank"
                rel="noreferrer"
              >
                <FileText size={19} aria-hidden="true" />
                <span>
                  <strong>Full product blueprint</strong>
                  Strategy, personas, UX, P&L, roadmap
                </span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a href={project.links.presentation} download>
                <Presentation size={19} aria-hidden="true" />
                <span>
                  <strong>Leadership presentation</strong>
                  Editable 11-slide PowerPoint
                </span>
                <Download size={16} aria-hidden="true" />
              </a>
              <a href={project.links.github} target="_blank" rel="noreferrer">
                <Github size={19} aria-hidden="true" />
                <span>
                  <strong>Public project repository</strong>
                  Prototype, documents, diagrams, deck
                </span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section scope-section" id="scope">
        <div className="shell case-content-grid">
          <div className="case-section-title">
            <p className="section-kicker">02 · Scope</p>
            <h2>Narrow launch. Deep operating model.</h2>
          </div>
          <div className="case-section-body">
            <p className="case-lead">
              The first release targets one purchase job and three low-complexity
              category groups. Credit is one affordability instrument; eligible
              customers can still choose full UPI.
            </p>

            <div className="scope-matrix">
              <div className="scope-column in">
                <div className="scope-title">
                  <Check size={18} aria-hidden="true" />
                  <h3>Launch contract</h3>
                </div>
                <ul>
                  <li>Existing high-frequency UPI users, primarily 21-35</li>
                  <li>Practical purchase between ₹5,000 and ₹30,000</li>
                  <li>Budget and refurbished smartphones</li>
                  <li>Small home appliances</li>
                  <li>Work, study, and mobile accessories</li>
                  <li>100-300 governed SKUs in the controlled release</li>
                  <li>One primary credit product plus full UPI</li>
                </ul>
              </div>
              <div className="scope-column out">
                <div className="scope-title">
                  <X size={18} aria-hidden="true" />
                  <h3>Deliberate non-goals</h3>
                </div>
                <ul>
                  <li>Broad marketplace category breadth</li>
                  <li>Owned inventory, warehouses, or delivery network</li>
                  <li>Fashion, travel, furniture, and luxury at launch</li>
                  <li>Guaranteed credit approval or score improvement</li>
                  <li>Multiple lender optimization before one rail is stable</li>
                  <li>Credit as the only checkout method</li>
                  <li>Scale based on GMV without full variable costs</li>
                </ul>
              </div>
            </div>

            <div className="bets-list">
              {project.bets.map((bet) => (
                <article key={bet.number}>
                  <span className="bet-number">{bet.number}</span>
                  <div>
                    <h3>{bet.title}</h3>
                    <p>{bet.decision}</p>
                  </div>
                  <div className="bet-measure">
                    <span>Primary signal</span>
                    <strong>{bet.metric}</strong>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="case-section prototype-section" id="borrower">
        <div className="shell">
          <div className="section-heading case-wide-heading">
            <div>
              <p className="section-kicker">03 · Product experience</p>
              <h2>Every screen resolves a specific product risk.</h2>
            </div>
            <p>
              Switch between the borrower and seller surfaces. Each state shows
              the problem, decision, and metric it exists to move.
            </p>
          </div>
          <PrototypeGallery />
        </div>
      </section>

      <section className="case-section credit-section">
        <div className="shell case-content-grid">
          <div className="case-section-title">
            <p className="section-kicker">Credit Health</p>
            <h2>Explain, guide, and correct.</h2>
          </div>
          <div className="case-section-body">
            <p className="case-lead">
              Credit Health remains a standalone borrower capability. Viewing a
              score never starts an application, and a score never promises
              eligibility.
            </p>
            <div className="credit-layout">
              <div className="credit-phone-pair">
                <img
                  src="/assets/affordable-commerce/credit-health-dashboard.png"
                  alt="Credit Health score dashboard"
                />
                <img
                  src="/assets/affordable-commerce/credit-health-actions.png"
                  alt="Credit Health prioritized action plan"
                />
              </div>
              <div className="credit-principles">
                <article>
                  <span>01</span>
                  <h3>Latest available score</h3>
                  <p>
                    Show bureau, model range, retrieval time, and source-file
                    freshness after purpose-specific consent.
                  </p>
                </article>
                <article>
                  <span>02</span>
                  <h3>Explainable factors</h3>
                  <p>
                    Translate verified reason codes into positive, limiting, and
                    potentially inaccurate factors.
                  </p>
                </article>
                <article>
                  <span>03</span>
                  <h3>Focused action plan</h3>
                  <p>
                    Prioritize three safe actions with honest time horizons and
                    track corrections through a visible case.
                  </p>
                </article>
                <div className="failure-note">
                  <strong>Partner delay state</strong>
                  <p>
                    Preserve the dated saved score, never estimate a replacement,
                    and notify the user after a verified refresh.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section seller-model-section" id="seller">
        <div className="shell case-content-grid">
          <div className="case-section-title">
            <p className="section-kicker">04 · Seller model</p>
            <h2>Affordability needs an operating system.</h2>
          </div>
          <div className="case-section-body">
            <p className="case-lead">
              Sellers need to know which products can be financed, whether an
              offer creates incremental orders, and exactly how each order,
              refund, and payout reconciles.
            </p>
            <div className="seller-jobs">
              {[
                ["Onboard", "KYB, settlement account, catalogue, and webhook readiness"],
                ["Curate", "Financeability state, blocking reasons, inventory, and quality"],
                ["Fund", "Targeted subvention with budget, cohort, SKU, and holdout"],
                ["Fulfil", "Normal merchant order states with a clear exception queue"],
                ["Reconcile", "Fees, offers, refunds, loan adjustments, and payout"],
                ["Distribute", "Splitstore plus signed checkout sessions on merchant sites"],
              ].map(([title, copy], index) => (
                <article key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
            <div className="channel-model">
              <div>
                <span>Channel 1</span>
                <h3>Splitstore</h3>
                <p>
                  super.money owns discovery, PDP, bag, checkout, and the
                  post-purchase timeline.
                </p>
              </div>
              <div className="shared-platform">
                <strong>Shared affordability platform</strong>
                <span>Catalogue · eligibility · offers · checkout · refunds</span>
              </div>
              <div>
                <span>Channel 2</span>
                <h3>Merchant checkout</h3>
                <p>
                  Signed sessions and webhooks bring the same governed plans to
                  the seller’s own product page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section economics-section" id="economics">
        <div className="shell case-content-grid">
          <div className="case-section-title">
            <p className="section-kicker">05 · Business model</p>
            <h2>GMV is an output. Contribution is the gate.</h2>
          </div>
          <div className="case-section-body">
            <p className="case-lead">
              The planning model uses one ₹7,700 order and carries the complete
              variable-cost stack through every product decision.
            </p>
            <div className="economics-grid">
              <div className="economics-table-wrap">
                <table className="economics-table">
                  <thead>
                    <tr>
                      <th>Illustrative line</th>
                      <th>₹ / order</th>
                      <th>% AOV</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Merchant / take revenue</td>
                      <td>139</td>
                      <td>1.80%</td>
                    </tr>
                    <tr>
                      <td>Lender / affordability revenue</td>
                      <td>92</td>
                      <td>1.20%</td>
                    </tr>
                    <tr>
                      <td>Payment / affiliate revenue</td>
                      <td>15</td>
                      <td>0.20%</td>
                    </tr>
                    <tr className="subtotal">
                      <td>Gross variable revenue</td>
                      <td>246</td>
                      <td>3.20%</td>
                    </tr>
                    <tr>
                      <td>Rewards and offer share</td>
                      <td>-55</td>
                      <td>-0.71%</td>
                    </tr>
                    <tr>
                      <td>Payments, servicing, fraud, refunds</td>
                      <td>-48</td>
                      <td>-0.62%</td>
                    </tr>
                    <tr>
                      <td>Expected-loss exposure</td>
                      <td>-65</td>
                      <td>-0.84%</td>
                    </tr>
                    <tr>
                      <td>Infrastructure and communications</td>
                      <td>-8</td>
                      <td>-0.10%</td>
                    </tr>
                    <tr className="total">
                      <td>Contribution before fixed cost</td>
                      <td>70</td>
                      <td>0.91%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="economics-summary">
                <div>
                  <span>Planning scenario</span>
                  <strong>₹100 Cr</strong>
                  <p>annualised GMV</p>
                </div>
                <div>
                  <span>Monthly orders</span>
                  <strong>10.8K</strong>
                  <p>from 1.5M targeted eligible exposures</p>
                </div>
                <div>
                  <span>Monthly contribution</span>
                  <strong>₹7.6 L</strong>
                  <p>before fixed costs</p>
                </div>
                <small>
                  Illustrative planning assumptions, not a company forecast.
                </small>
              </div>
            </div>

            <div className="metric-contract">
              <div>
                <span>North Star</span>
                <strong>Monthly repeat Affordable Commerce buyers</strong>
              </div>
              <div>
                <span>Scale gate</span>
                <strong>
                  Positive cohort contribution after returns, incentives,
                  payments, support, fraud, and expected loss
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section systems-section" id="systems">
        <div className="shell">
          <div className="section-heading case-wide-heading">
            <div>
              <p className="section-kicker">06 · System design</p>
              <h2>Know who owns every state and every rupee.</h2>
            </div>
            <p>
              The architecture separates regulated credit decisions, commerce
              truth, money movement, and user experience while preserving one
              understandable order state.
            </p>
          </div>
          <DiagramGallery />

          <div className="system-principles">
            <article>
              <span>Ownership</span>
              <h3>One system of record per domain</h3>
              <p>
                Catalogue owns product truth, the lender owns the loan, payments
                own transaction truth, and the order bridge owns fulfilment state.
              </p>
            </article>
            <article>
              <span>Reliability</span>
              <h3>Durable checkout and idempotency</h3>
              <p>
                Every confirmation has a stable key, recorded steps, bounded
                retries, and compensation when a downstream action fails.
              </p>
            </article>
            <article>
              <span>Integration</span>
              <h3>Canonical adapters at the boundary</h3>
              <p>
                Lender, bureau, payment, and merchant-specific fields stay inside
                adapters while internal contracts remain stable.
              </p>
            </article>
            <article>
              <span>Audit</span>
              <h3>Consent and money are reconstructable</h3>
              <p>
                Immutable audit facts, versioned disclosures, ledger-style
                settlement entries, and reconciliation jobs support investigation.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="case-section launch-section" id="launch">
        <div className="shell case-content-grid">
          <div className="case-section-title">
            <p className="section-kicker">07 · Launch</p>
            <h2>Six months, with evidence at every gate.</h2>
          </div>
          <div className="case-section-body">
            <div className="launch-timeline">
              {launchPlan.map((phase) => (
                <article key={phase.month}>
                  <div className="launch-marker" aria-hidden="true" />
                  <div className="launch-month">{phase.month}</div>
                  <div>
                    <h3>{phase.title}</h3>
                    <p>{phase.work}</p>
                    <span>
                      <strong>Exit evidence:</strong> {phase.exit}
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <div className="experiments">
              <h3>Experiments that decide whether to scale</h3>
              <div>
                <article>
                  <span>Discovery</span>
                  <strong>Amount due today vs. full-price card</strong>
                  <p>Primary: PDP-to-bag · Guardrail: ineligible impressions</p>
                </article>
                <article>
                  <span>Basket</span>
                  <strong>Responsible add-on with repayment delta</strong>
                  <p>Primary: contribution-positive AOV · Guardrail: 30+ DPD</p>
                </article>
                <article>
                  <span>Credit</span>
                  <strong>20% vs. 33% vs. 50% down payment</strong>
                  <p>Primary: contribution-positive orders · Guardrail: loss</p>
                </article>
                <article>
                  <span>Seller</span>
                  <strong>Funded offer vs. matched holdout</strong>
                  <p>Primary: incremental orders · Guardrail: seller ROI</p>
                </article>
              </div>
            </div>

            <div className="case-close">
              <p className="section-kicker light">The product thesis</p>
              <h2>
                Win by owning the affordability decision, then make every order
                explainable, operable, and economically honest.
              </h2>
              <div className="button-row">
                <a
                  className="button light"
                  href={project.links.borrower}
                  target="_blank"
                  rel="noreferrer"
                >
                  Try borrower prototype
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
                <a
                  className="button outline-light"
                  href={project.links.technical}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read technical document
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
