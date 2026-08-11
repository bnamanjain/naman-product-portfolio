import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Braces,
  CheckCircle2,
  Database,
  Eye,
  GitBranch,
  Layers3,
  Network,
  ShieldCheck,
  TimerReset,
  UsersRound,
  Workflow,
} from "lucide-react";

export const metadata = {
  title: "Healthcare Journey Systems Case Study",
  description:
    "A sanitized, production-informed product case study covering healthcare journey architecture, API contracts, state and schema design, events, reliability, and observability.",
  alternates: {
    canonical: "/work/healthcare-journey-systems",
  },
};

const architectureLayers = [
  {
    icon: UsersRound,
    title: "Experience layer",
    copy: "Patient, provider, care, and operations surfaces share the same underlying journey state instead of creating channel-specific truth.",
  },
  {
    icon: Braces,
    title: "Contract layer",
    copy: "Versioned APIs validate identity, role, input, current state, and expected outcome before a command reaches domain logic.",
  },
  {
    icon: Workflow,
    title: "Domain layer",
    copy: "Journey, appointment, fulfilment, payout, outbound, and task modules own their rules and expose deliberate handoffs.",
  },
  {
    icon: Database,
    title: "Reliability layer",
    copy: "Durable data, caches, locks, events, queues, scheduled work, audit history, and traces keep workflows recoverable.",
  },
];

const apiQuestions = [
  {
    title: "Who may act?",
    copy: "Authentication identifies the actor; roles, context, and consent determine whether that actor may perform this action.",
  },
  {
    title: "Is the request valid?",
    copy: "Typed request objects define required fields, formats, safe defaults, and specific validation errors.",
  },
  {
    title: "Is the transition allowed?",
    copy: "Domain rules check eligibility and current state—for example, whether a slot is still available or a payout is approvable.",
  },
  {
    title: "What if it repeats?",
    copy: "An idempotency key, stable business identifier, or deduplication rule prevents duplicate bookings, messages, and ledger entries.",
  },
  {
    title: "What happens next?",
    copy: "The contract names synchronous output plus the events, timers, tasks, webhooks, and analytics emitted after a successful write.",
  },
  {
    title: "How does it fail?",
    copy: "Expected errors, timeouts, retries, dead-letter handling, operator visibility, and safe replay are designed before launch.",
  },
];

const schemaRules = [
  "Use one stable identifier for every core entity and preserve the source reference from partner systems.",
  "Model relationships explicitly so a journey can be traced from person to episode, appointment, order, invoice, payout, message, and outcome.",
  "Keep current state easy to query, while recording the event or audit history needed to explain how it changed.",
  "Index the paths used by live products and operating dashboards; do not optimize only for storage neatness.",
  "Keep financial and audit records append-safe. Corrections should create traceable adjustments instead of silently rewriting history.",
  "Use flexible JSON attributes for genuinely variable metadata—not as a substitute for stable, queryable product concepts.",
];

const contributionRows = [
  {
    area: "Journey and state design",
    mine: "Defined customer states, entry and exit criteria, edge cases, ownership, and the metric attached to each transition.",
    engineering: "Implemented domain services, persistence, concurrency controls, migrations, tests, and runtime deployment.",
  },
  {
    area: "APIs and integrations",
    mine: "Specified actors, payload needs, success and error behavior, duplicate handling, downstream events, and partner handoffs.",
    engineering: "Selected implementation patterns, wrote controllers and adapters, handled authentication, and maintained service contracts.",
  },
  {
    area: "Reliability and rollout",
    mine: "Prioritized failure modes, manual fallbacks, alerts, support visibility, feature flags, and business guardrails.",
    engineering: "Built queues, locks, retries, dead-letter paths, traces, dashboards, and operational tooling.",
  },
];

function TechnicalFigure({ src, alt, label, title, copy }) {
  return (
    <figure className="technical-figure">
      <img src={src} alt={alt} />
      <figcaption>
        <div>
          <span>{label}</span>
          <h3>{title}</h3>
        </div>
        <p>{copy}</p>
      </figcaption>
    </figure>
  );
}

export default function HealthcareJourneySystemsPage() {
  return (
    <main className="case-study systems-case" id="main-content">
      <section className="case-hero systems-hero">
        <div className="shell">
          <a className="back-link" href="/#work">
            <ArrowLeft size={16} aria-hidden="true" />
            Back to selected work
          </a>

          <div className="case-hero-grid">
            <div className="case-hero-copy">
              <div className="case-tags">
                <span>Sanitized production study</span>
                <span>Systems · APIs · Data</span>
              </div>
              <h1>Healthcare Journey Systems</h1>
              <p className="case-deck">
                How I translate messy customer journeys into product and
                engineering contracts that are measurable, reliable, and safe
                to operate.
              </p>
              <div className="button-row">
                <a className="button primary" href="#architecture">
                  <Network size={17} aria-hidden="true" />
                  Explore the architecture
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
              </div>
            </div>

            <aside className="case-facts" aria-label="Case study facts">
              <dl>
                <div>
                  <dt>Context</dt>
                  <dd>Production-informed · public-safe</dd>
                </div>
                <div>
                  <dt>My lens</dt>
                  <dd>Product ownership and engineering collaboration</dd>
                </div>
                <div>
                  <dt>System concerns</dt>
                  <dd>APIs · states · schemas · events · reliability</dd>
                </div>
                <div>
                  <dt>Business link</dt>
                  <dd>Conversion · repeat · cost · service quality</dd>
                </div>
              </dl>
            </aside>
          </div>

          <div className="systems-hero-media">
            <img
              src="/assets/healthcare-systems/system-context.svg"
              alt="Sanitized system context connecting healthcare users, product interfaces, APIs, domain modules, infrastructure, integrations, and observability"
            />
          </div>
        </div>
      </section>

      <nav className="case-nav" aria-label="Systems case study navigation">
        <div className="shell case-nav-inner">
          <a href="#boundary">Boundary</a>
          <a href="#architecture">Architecture</a>
          <a href="#apis">API design</a>
          <a href="#events">Events &amp; state</a>
          <a href="#schema">Schema design</a>
          <a href="#reliability">Reliability</a>
          <a href="#contribution">My contribution</a>
        </div>
      </nav>

      <section className="case-section" id="boundary">
        <div className="shell case-content-grid">
          <div className="case-section-title">
            <p className="section-kicker">01 · The boundary</p>
            <h2>Technical product ownership, stated precisely.</h2>
          </div>
          <div className="case-section-body">
            <p className="case-lead">
              My work sat where journey metrics, operating workflows, product
              behavior, and backend contracts meet. I needed enough technical
              depth to define states and edge cases, challenge system behavior,
              instrument outcomes, and make trade-offs with engineering.
            </p>

            <div className="result-panel boundary-note">
              <span>Authorship boundary</span>
              <strong>
                This is a sanitized systems study based on production product
                experience. I am not claiming sole authorship of the company’s
                backend architecture or implementation.
              </strong>
            </div>

            <div className="decision-grid">
              <article>
                <GitBranch size={21} aria-hidden="true" />
                <h3>Make state explicit</h3>
                <p>
                  Define what the customer, appointment, order, task, and
                  financial workflow can become—and which transitions are valid.
                </p>
              </article>
              <article>
                <Braces size={21} aria-hidden="true" />
                <h3>Specify the contract</h3>
                <p>
                  Align on actors, inputs, outputs, errors, duplicate behavior,
                  side effects, and instrumentation before a flow is built.
                </p>
              </article>
              <article>
                <BarChart3 size={21} aria-hidden="true" />
                <h3>Close the metric loop</h3>
                <p>
                  Connect backend outcomes to customer funnels, service quality,
                  workload, revenue, cost, and operating alerts.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section systems-tint" id="architecture">
        <div className="shell">
          <div className="section-heading case-wide-heading">
            <div>
              <p className="section-kicker">02 · Architecture</p>
              <h2>One journey crosses many product and system boundaries.</h2>
            </div>
            <p>
              A useful architecture view shows responsibilities and handoffs.
              It does not expose proprietary endpoints or infrastructure.
            </p>
          </div>

          <TechnicalFigure
            src="/assets/healthcare-systems/system-context.svg"
            alt="System context diagram showing people, interfaces, API modules, data systems, events, integrations, and observability"
            label="System context"
            title="The whole operating system around a customer journey"
            copy="The experience layer stays coherent because domain modules, durable data, asynchronous work, partner adapters, and observability are designed together."
          />

          <div className="technical-card-grid four">
            {architectureLayers.map(({ icon: Icon, title, copy }) => (
              <article key={title}>
                <Icon size={21} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section" id="apis">
        <div className="shell case-content-grid">
          <div className="case-section-title">
            <p className="section-kicker">03 · API design</p>
            <h2>An API is a product promise between systems.</h2>
          </div>
          <div className="case-section-body">
            <p className="case-lead">
              For a booking, chatbot escalation, payout approval, or fulfilment
              update, the endpoint name is the smallest part of the design. The
              meaningful work is making the behavior unambiguous.
            </p>

            <TechnicalFigure
              src="/assets/healthcare-systems/api-lifecycle.svg"
              alt="API lifecycle from request through authentication, validation, domain decisions, transaction, response, events, queue, and consumers"
              label="Request lifecycle"
              title="The synchronous decision and asynchronous aftermath"
              copy="Commit the core business outcome once, return a stable response, then execute messages, tasks, webhooks, and analytics through durable asynchronous paths."
            />

            <div className="api-question-grid">
              {apiQuestions.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="case-section systems-dark" id="events">
        <div className="shell case-content-grid">
          <div className="case-section-title">
            <p className="section-kicker light">04 · Events &amp; state</p>
            <h2>The system needs memory and a clock.</h2>
          </div>
          <div className="case-section-body">
            <p className="case-lead">
              Current state answers “where is this journey now?” Events answer
              “what happened?” Scheduled events answer “what should happen
              later?” Keeping these ideas separate makes the flow debuggable.
            </p>

            <TechnicalFigure
              src="/assets/healthcare-systems/journey-orchestration.svg"
              alt="Journey state machine connected to domain events, scheduled events, a queue, consumers, and outcomes"
              label="Journey orchestration"
              title="State, events, timers, and consumers work together"
              copy="A transition can update customer state immediately and schedule future work without forcing the user-facing request to wait for every side effect."
            />

            <ul className="evidence-list systems-evidence-list">
              <li>
                <CheckCircle2 size={18} aria-hidden="true" />
                <span>
                  State guards prevent impossible transitions, such as completing
                  a cancelled appointment or approving an already-paid ledger item.
                </span>
              </li>
              <li>
                <CheckCircle2 size={18} aria-hidden="true" />
                <span>
                  Timers model reminders, eligibility windows, callbacks, and
                  expiry as durable work—not fragile in-process delays.
                </span>
              </li>
              <li>
                <CheckCircle2 size={18} aria-hidden="true" />
                <span>
                  Consumers remain idempotent so a retry can safely produce the
                  intended outcome once.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="case-section systems-tint" id="schema">
        <div className="shell">
          <div className="section-heading case-wide-heading">
            <div>
              <p className="section-kicker">05 · Schema design</p>
              <h2>Design data for decisions, traceability, and change.</h2>
            </div>
            <p>
              The schema should make the most important product questions easy
              to answer without sacrificing operational or financial auditability.
            </p>
          </div>

          <TechnicalFigure
            src="/assets/healthcare-systems/schema-model.svg"
            alt="Conceptual schema connecting a person and journey episode to appointments, encounters, orders, payouts, activities, events, audits, and metrics"
            label="Conceptual entity model"
            title="The journey episode is the connective tissue"
            copy="Stable relationships let teams connect customer intent, operational work, delivery, financial outcomes, messages, and analytics without relying on a single overloaded table."
          />

          <div className="schema-rule-grid">
            {schemaRules.map((rule, index) => (
              <article key={rule}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{rule}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section" id="reliability">
        <div className="shell case-content-grid">
          <div className="case-section-title">
            <p className="section-kicker">06 · Reliability</p>
            <h2>Design the recovery path before launch.</h2>
          </div>
          <div className="case-section-body">
            <p className="case-lead">
              Reliability becomes a product concern when a duplicate task wastes
              an agent’s time, a lost message breaks treatment continuity, or a
              repeated ledger write moves money twice.
            </p>

            <div className="technical-card-grid three">
              <article>
                <ShieldCheck size={21} aria-hidden="true" />
                <h3>Prevent</h3>
                <p>
                  Validate state, lock scarce resources, use stable identifiers,
                  make consumers idempotent, and release through feature flags.
                </p>
              </article>
              <article>
                <TimerReset size={21} aria-hidden="true" />
                <h3>Recover</h3>
                <p>
                  Retry transient failures, route exhausted work to a dead-letter
                  queue, preserve context, and provide safe replay or manual action.
                </p>
              </article>
              <article>
                <Eye size={21} aria-hidden="true" />
                <h3>Observe</h3>
                <p>
                  Connect logs, traces, queue depth, error classes, journey funnels,
                  service SLAs, and business guardrails to one incident picture.
                </p>
              </article>
            </div>

            <div className="result-panel">
              <span>Metric hierarchy</span>
              <strong>
                System health: latency, error rate, queue age, duplicate rate →
                journey health: completion, drop-off, turnaround time → business
                health: conversion, repeat revenue, workload, cost, and margin.
              </strong>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section contribution-section" id="contribution">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="section-kicker light">07 · My contribution</p>
              <h2>What I owned—and where engineering owned implementation.</h2>
            </div>
            <p>
              Clear boundaries make the case study more credible and show how I
              collaborate in a production team.
            </p>
          </div>

          <div className="contribution-table" role="table" aria-label="Product and engineering contribution boundary">
            <div className="contribution-row header" role="row">
              <span role="columnheader">Area</span>
              <span role="columnheader">My product contribution</span>
              <span role="columnheader">Engineering contribution</span>
            </div>
            {contributionRows.map((row) => (
              <div className="contribution-row" role="row" key={row.area}>
                <strong role="cell">{row.area}</strong>
                <p role="cell">{row.mine}</p>
                <p role="cell">{row.engineering}</p>
              </div>
            ))}
          </div>

          <div className="systems-cta">
            <div>
              <span>Production outcomes</span>
              <h3>See how these systems decisions moved customer and business metrics.</h3>
            </div>
            <a className="button primary" href="/work/operating-evidence">
              View operating evidence
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>

          <p className="confidentiality-note">
            All diagrams are original, sanitized conceptual representations.
            No patient data, source code, internal endpoint names, credentials,
            or proprietary infrastructure details are included.
          </p>
        </div>
      </section>
    </main>
  );
}
