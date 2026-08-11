import {
  ArrowLeft,
  ArrowRight,
  BellRing,
  Check,
  Clock3,
  Lightbulb,
  MessageCircleMore,
  Stethoscope,
  UserRoundCheck,
} from "lucide-react";
import { CaseNav } from "../../../components/case-nav";
import { HandshakePrototype } from "../../../components/handshake-prototype";

export const metadata = {
  title: "The 60-second Handshake | Allo Health",
  description:
    "How a doctor-side exit popup, prescription trigger, and 60-second countdown moved successful care handshakes from about 55% to 90%.",
  alternates: {
    canonical: "/work/allo-handshake",
  },
};

const navigation = [
  ["context", "Context"],
  ["funnel", "Funnel"],
  ["insight", "Insight"],
  ["intervention", "Intervention"],
  ["prototype", "Prototype"],
  ["results", "Results"],
  ["learnings", "Learnings"],
];

const funnelSteps = [
  {
    number: "01",
    title: "Doctor submits Rx",
    copy: "The prescription becomes the system trigger while the video call is still active.",
    icon: Stethoscope,
  },
  {
    number: "02",
    title: "Agent is alerted",
    copy: "The care agent receives the handoff signal and joins the live consultation.",
    icon: BellRing,
  },
  {
    number: "03",
    title: "Doctor introduces agent",
    copy: "The patient gets a trusted, explicit transition instead of an unfamiliar new joiner.",
    icon: UserRoundCheck,
  },
  {
    number: "04",
    title: "Agent converts & fulfils",
    copy: "The agent explains the Rx, payment, delivery or pickup, and diagnostic collection options.",
    icon: MessageCircleMore,
  },
];

export default function AlloHandshakeCaseStudy() {
  return (
    <main id="main-content" className="case-study handshake-case">
      <section className="case-hero handshake-case-hero">
        <div className="shell">
          <a className="back-link" href="/#work">
            <ArrowLeft size={16} aria-hidden="true" />
            Back to selected work
          </a>

          <div className="case-hero-grid">
            <div className="case-hero-copy">
              <div className="case-tags">
                <span>Allo Health</span>
                <span>Shipped production flow</span>
              </div>
              <h1>The 60 seconds that protected a patient handoff.</h1>
              <p className="case-deck">
                I owned the repeat-consultation → prescription → agent handshake
                → purchase and fulfilment funnel. A focused call-exit
                intervention lifted successful handshakes from about 55% to 90%.
              </p>
              <div className="button-row">
                <a className="button primary" href="#prototype">
                  Try the interactive flow
                  <ArrowRight size={17} aria-hidden="true" />
                </a>
                <a className="button secondary" href="#results">
                  See measured results
                </a>
              </div>
            </div>

            <div className="case-facts handshake-case-facts">
              <dl>
                <div>
                  <dt>Funnel owned</dt>
                  <dd>Repeat consult → Rx → handshake → fulfilment</dd>
                </div>
                <div>
                  <dt>Core intervention</dt>
                  <dd>Exit popup + Rx trigger + 60-second countdown</dd>
                </div>
                <div>
                  <dt>Handshake rate</dt>
                  <dd>~55% → ~90%</dd>
                </div>
                <div>
                  <dt>Conversion signal</dt>
                  <dd>~65% with handshake vs ~35% without</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="handshake-hero-impact" aria-label="Headline results">
            <article>
              <span>Before</span>
              <strong>~55%</strong>
              <small>eligible calls with a successful handshake</small>
            </article>
            <div className="handshake-impact-line">
              <span />
              <b>+35 percentage points</b>
              <ArrowRight size={20} aria-hidden="true" />
            </div>
            <article className="after">
              <span>After launch</span>
              <strong>~90%</strong>
              <small>successful handshake rate</small>
            </article>
          </div>
        </div>
      </section>

      <CaseNav items={navigation} />

      <section className="case-section" id="context">
        <div className="shell case-content-grid">
          <div className="case-section-title">
            <p className="section-kicker">01 · Context / problem</p>
            <h2>The offline safety net disappeared on the first online follow-up.</h2>
          </div>
          <div className="case-section-body">
            <p className="case-lead">
              The patients in this journey had first visited an Allo clinic and
              were now returning for their first video consultation. The medical
              interaction moved online, but the post-consultation support model
              did not automatically follow.
            </p>
            <div className="handshake-context-grid">
              <article>
                <span>Offline experience</span>
                <h3>A PRM closed the loop in person.</h3>
                <p>
                  After the consultation, a patient relationship manager could
                  explain the Rx, collect payment, dispense medicines, or arrange
                  a diagnostic sample.
                </p>
              </article>
              <article>
                <span>First online follow-up</span>
                <h3>The patient suddenly had choices, but no guide.</h3>
                <p>
                  Home delivery or clinic pickup. Same-day or standard. Home or
                  clinic sample collection. Without a live handoff, the journey
                  ended at the prescription instead of at clarity and fulfilment.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section handshake-funnel-section" id="funnel">
        <div className="shell">
          <div className="case-wide-heading">
            <div>
              <p className="section-kicker">02 · Funnel</p>
              <h2>The prescription was not the finish line. It was the handoff trigger.</h2>
            </div>
            <p>
              Every step had to happen while doctor and patient were still on the
              call. If the call ended early, the trust bridge and the agent’s
              opportunity to help disappeared together.
            </p>
          </div>
          <div className="handshake-funnel-grid">
            {funnelSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article key={step.number}>
                  <div className="handshake-funnel-top">
                    <span>{step.number}</span>
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                  {index < funnelSteps.length - 1 ? (
                    <ArrowRight className="handshake-funnel-arrow" size={20} aria-hidden="true" />
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="case-section" id="insight">
        <div className="shell case-content-grid">
          <div className="case-section-title">
            <p className="section-kicker">03 · Insight</p>
            <h2>The largest conversion gap sat inside one operational moment.</h2>
          </div>
          <div className="case-section-body">
            <p className="case-lead">
              Pilot data showed that patients with a successful doctor-to-agent
              handshake converted on the same day at roughly 65%, compared with
              roughly 35% when the handshake did not happen.
            </p>
            <div className="handshake-insight-card">
              <div className="handshake-insight-metric success">
                <span>Successful handshake</span>
                <strong>~65%</strong>
                <small>same-day conversion</small>
              </div>
              <div className="handshake-insight-gap">
                <b>1.9×</b>
                <span>conversion association</span>
              </div>
              <div className="handshake-insight-metric missed">
                <span>No handshake</span>
                <strong>~35%</strong>
                <small>same-day conversion</small>
              </div>
            </div>
            <p className="handshake-evidence-note">
              This cohort difference established the product leverage. It did not
              by itself prove the handshake caused the full conversion gap, so the
              shipped metric was successful handshake rate.
            </p>
          </div>
        </div>
      </section>

      <section className="case-section handshake-intervention-section" id="intervention">
        <div className="shell case-content-grid">
          <div className="case-section-title">
            <p className="section-kicker">04 · Product intervention</p>
            <h2>Put the guardrail at the exact moment the doctor tried to leave.</h2>
          </div>
          <div className="case-section-body">
            <div className="handshake-intervention-list">
              <article>
                <span><Stethoscope size={20} aria-hidden="true" /></span>
                <div>
                  <h3>Before Rx submission</h3>
                  <p>
                    If the doctor tried to end the call, a popup asked them to
                    submit the prescription first. Submission immediately alerted
                    the care agent.
                  </p>
                </div>
              </article>
              <article>
                <span><Clock3 size={20} aria-hidden="true" /></span>
                <div>
                  <h3>During the first 60 seconds</h3>
                  <p>
                    A visible countdown asked the doctor to stay while the agent
                    joined, with the 65% vs 35% conversion context explaining why
                    the wait mattered.
                  </p>
                </div>
              </article>
              <article>
                <span><UserRoundCheck size={20} aria-hidden="true" /></span>
                <div>
                  <h3>When the agent joined</h3>
                  <p>
                    The doctor introduced the agent, then exited. The agent took
                    over explanation, payment, medicines, diagnostics, and
                    fulfilment choices.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section handshake-prototype-section" id="prototype">
        <div className="shell">
          <div className="case-wide-heading">
            <div>
              <p className="section-kicker">05 · Mock / prototype</p>
              <h2>Replay the doctor-side exit flow.</h2>
            </div>
            <p>
              This interactive reconstruction uses the shipped logic: block an
              early exit before Rx, alert the agent on submission, and hold the
              call for a 60-second join window.
            </p>
          </div>
          <HandshakePrototype />
        </div>
      </section>

      <section className="case-section" id="results">
        <div className="shell case-content-grid">
          <div className="case-section-title">
            <p className="section-kicker">06 · Results</p>
            <h2>A small interface change moved the operational behavior.</h2>
          </div>
          <div className="case-section-body">
            <div className="handshake-results-grid">
              <article>
                <span>Before</span>
                <strong>~55%</strong>
                <p>successful handshake rate</p>
              </article>
              <article className="primary-result">
                <span>After popup + countdown + nudges</span>
                <strong>~90%</strong>
                <p>successful handshake rate</p>
              </article>
              <article>
                <span>Movement</span>
                <strong>+35 pp</strong>
                <p>~64% relative uplift</p>
              </article>
            </div>
            <div className="handshake-result-callout">
              <Check size={22} aria-hidden="true" />
              <div>
                <strong>The intervention expanded the number of patients who reached the high-conversion handoff.</strong>
                <p>
                  The directly observed launch result was handshake rate. The
                  65% vs 35% conversion split explains why that behavior was the
                  right funnel metric to move.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section handshake-learning-section" id="learnings">
        <div className="shell case-content-grid">
          <div className="case-section-title">
            <p className="section-kicker">07 · Learnings</p>
            <h2>Optimize access to the conversation before optimizing the pitch.</h2>
          </div>
          <div className="case-section-body">
            <div className="handshake-learning-list">
              <article>
                <Lightbulb size={21} aria-hidden="true" />
                <div>
                  <h3>Find the highest-leverage failure point.</h3>
                  <p>
                    The downstream sales experience could not work if the agent
                    never got to speak to the patient.
                  </p>
                </div>
              </article>
              <article>
                <Lightbulb size={21} aria-hidden="true" />
                <div>
                  <h3>Pair friction with a reason.</h3>
                  <p>
                    The countdown added a deliberate pause, while the conversion
                    evidence made the purpose of that pause visible to doctors.
                  </p>
                </div>
              </article>
              <article>
                <Lightbulb size={21} aria-hidden="true" />
                <div>
                  <h3>Design product and operations as one journey.</h3>
                  <p>
                    The popup, Rx event, agent alert, live join, introduction,
                    and fulfilment handoff were one product—not separate teams’
                    steps.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="case-close handshake-case-close">
        <div className="shell">
          <p className="section-kicker light">Production product work</p>
          <h2>A 60-second pause turned an unreliable handoff into the default path.</h2>
          <div className="button-row">
            <a className="button light" href="#prototype">
              Replay prototype
            </a>
            <a className="button ghost-light" href="/#work">
              View all work
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
