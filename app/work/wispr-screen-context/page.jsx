import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Check,
  ExternalLink,
  FileCheck2,
  Github,
  Mic,
  MonitorUp,
  MousePointer2,
  PlayCircle,
  ScanEye,
  ShieldCheck,
  Sparkles,
  TimerReset,
  Workflow,
} from "lucide-react";
import { CaseNav } from "../../../components/case-nav";
import { screenAwareProject } from "../../../lib/site-data";

export const metadata = {
  title: "Wispr Screen Context Case Study",
  description:
    "A live product test and interactive product concept for turning Wispr Notetaker meetings into visually grounded, execution-ready work.",
  alternates: {
    canonical: "/work/wispr-screen-context",
  },
};

const navigation = [
  ["evidence", "Evidence"],
  ["problem", "Problem"],
  ["model", "Product model"],
  ["experience", "Experience"],
  ["outputs", "Outputs"],
  ["trust", "Trust"],
  ["measure", "Measure"],
];

const observedEvidence = [
  {
    value: "64 min",
    label: "recording duration",
    detail: "The note continued after the active test into unrelated audio.",
  },
  {
    value: "0",
    label: "action items generated",
    detail: "The meeting included explicit owners and implementation instructions.",
  },
  {
    value: "1 of 5",
    label: "speakers confidently mapped",
    detail: "Scripted and background audio were split across unknown speakers.",
  },
];

const observedGaps = [
  {
    icon: Mic,
    title: "Two surfaces were being conflated",
    copy:
      "The Fn Flow bar dictates into the focused field; Notetaker records meetings. The concept needed to keep those jobs visibly separate.",
  },
  {
    icon: TimerReset,
    title: "The meeting boundary was weak",
    copy:
      "An ad-hoc note kept recording after the useful meeting ended, making unrelated audio part of the final note.",
  },
  {
    icon: MousePointer2,
    title: "Visual decisions lost their referent",
    copy:
      "The transcript retained broad discussion but not which component “this” meant, where the pointer was, or what visual result was approved.",
  },
  {
    icon: FileCheck2,
    title: "The output lacked a QA gate",
    copy:
      "Explicit ownership language did not become action items. A work package needs to expose missing owners, evidence, and acceptance criteria before handoff.",
  },
];

const productSignals = [
  {
    icon: Mic,
    label: "Said",
    title: "Conversation",
    copy: "The exact quote, speaker, timestamp, and confidence.",
  },
  {
    icon: MonitorUp,
    label: "Seeing",
    title: "Screen state",
    copy: "The selected app, page, component, and visible state.",
  },
  {
    icon: MousePointer2,
    label: "Pointer",
    title: "Reference",
    copy: "The element or region the presenter was indicating.",
  },
  {
    icon: Sparkles,
    label: "Understood",
    title: "Grounded work",
    copy: "A reviewable decision, owner, task, and acceptance criteria.",
  },
];

const experienceSteps = [
  {
    number: "01",
    title: "Link the meeting",
    copy:
      "Detect the calendar event, or ask the user to title an ad-hoc note before capture starts.",
  },
  {
    number: "02",
    title: "Ask for visual context",
    copy:
      "Offer one optional, per-meeting permission for a selected screen, window, or tab.",
  },
  {
    number: "03",
    title: "Keep capture legible",
    copy:
      "Use a persistent Notetaker strip for recording controls. Keep the Fn dictation bar independent.",
  },
  {
    number: "04",
    title: "Make understanding visible",
    copy:
      "Show the quote, screen, pointer, inferred decision, and attribution confidence together.",
  },
  {
    number: "05",
    title: "Detect the boundary",
    copy:
      "Prompt to stop when meeting activity disappears, then offer trimming when unrelated audio is detected.",
  },
  {
    number: "06",
    title: "Review before execution",
    copy:
      "Run an output QA check and require approval before generating or sending an agent package.",
  },
];

const outputs = [
  {
    icon: FileCheck2,
    title: "Visual implementation brief",
    copy:
      "Approved decisions, annotated screenshots, exact instructions, owners, dependencies, and links back to evidence.",
  },
  {
    icon: PlayCircle,
    title: "Short visual recap",
    copy:
      "Only the important screen moments, with captions, pointer emphasis, chapters, and links into the brief.",
  },
  {
    icon: Bot,
    title: "Agent-ready package",
    copy:
      "Bounded tasks, repository context, evidence, dependencies, and acceptance criteria—reviewed before anything runs.",
  },
];

const trustControls = [
  "Per-meeting permission, never permanent screen access",
  "One explicit capture source with a persistent indicator",
  "Pause Screen Context without pausing transcription",
  "Hide notifications and exclude sensitive fields",
  "Delete individual moments and configure retention",
  "Do not execute work without a final human review",
];

const successMetrics = [
  {
    title: "Evidence quality",
    metric: "% of inferred visual moments kept without correction",
  },
  {
    title: "Handoff speed",
    metric: "Time saved preparing briefs, tickets, or agent prompts",
  },
  {
    title: "Execution clarity",
    metric: "Reduction in clarification messages and follow-up meetings",
  },
  {
    title: "Trust",
    metric: "Pause, deletion, permission, and correction behaviour",
  },
];

export default function WisprScreenContextCaseStudy() {
  return (
    <main id="main-content" className="case-study wispr-case">
      <section className="case-hero wispr-case-hero">
        <div className="shell">
          <a className="back-link" href="/#work">
            <ArrowLeft size={16} aria-hidden="true" />
            Back to selected work
          </a>

          <div className="case-hero-grid">
            <div className="case-hero-copy">
              <div className="case-tags">
                <span>Independent product review</span>
                <span>Multimodal AI · Future of work</span>
              </div>
              <h1>From meeting notes to executable work.</h1>
              <p className="case-deck">
                I tested Wispr Notetaker in a real product-review workflow,
                identified where transcription loses screen-dependent decisions,
                and designed the product layer that closes the gap.
              </p>
              <div className="button-row">
                <a
                  className="button primary"
                  href={screenAwareProject.links.prototype}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Workflow size={17} aria-hidden="true" />
                  Explore interactive concept
                  <ExternalLink size={15} aria-hidden="true" />
                </a>
                <a
                  className="button secondary"
                  href={screenAwareProject.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={17} aria-hidden="true" />
                  View source
                </a>
              </div>
            </div>

            <div className="case-facts">
              <dl>
                <div>
                  <dt>My scope</dt>
                  <dd>Research, product strategy, UX, prototype</dd>
                </div>
                <div>
                  <dt>Method</dt>
                  <dd>Live solo meeting test + product teardown</dd>
                </div>
                <div>
                  <dt>Core user</dt>
                  <dd>Teams reviewing products and operational workflows</dd>
                </div>
                <div>
                  <dt>Deliverable</dt>
                  <dd>Responsive, end-to-end interactive concept</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="wispr-case-hero-media">
            <div className="wispr-case-browser">
              <div className="browser-bar">
                <span />
                <span />
                <span />
                <strong>Meeting → evidence → reviewed execution package</strong>
              </div>
              <img
                src={screenAwareProject.cover}
                alt="Wispr Screen Context concept showing a meeting transformed into an implementation document, recap, and agent package"
              />
            </div>
            <div className="wispr-hero-caption">
              <span>Product thesis</span>
              <strong>Conversation + screen + pointer → grounded work</strong>
            </div>
          </div>
        </div>
      </section>

      <CaseNav items={navigation} />

      <section className="case-section wispr-evidence-section" id="evidence">
        <div className="shell case-content-grid">
          <div className="case-section-title">
            <p className="section-kicker">01 · Evidence</p>
            <h2>I started with the real product, not the mock.</h2>
          </div>
          <div className="case-section-body">
            <div className="study-legend" aria-label="Evidence labels">
              <span className="observed">Observed in live test</span>
              <span className="proposed">Proposed in concept</span>
            </div>
            <p className="case-lead">
              On 8 August 2026, I ran a controlled solo Google Meet, started
              Wispr Notetaker, presented a concrete UI decision, assigned an
              implementer and reviewer, tested the Fn dictation surface, and
              inspected the final note.
            </p>

            <div className="wispr-research-metrics">
              {observedEvidence.map((item) => (
                <article key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>

            <div className="research-integrity-note">
              <ShieldCheck size={22} aria-hidden="true" />
              <div>
                <strong>Public case study, private raw evidence</strong>
                <p>
                  The findings are published here. Screenshots and recordings
                  containing faces, email addresses, and calendar context remain
                  private and are not included in the portfolio or repository.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section wispr-problem-section" id="problem">
        <div className="shell case-content-grid">
          <div className="case-section-title">
            <p className="section-kicker">02 · Problem</p>
            <h2>The note remembered the conversation, not the work.</h2>
          </div>
          <div className="case-section-body">
            <p className="case-lead">
              Transcription can preserve a sentence such as “change this
              treatment and keep the 20-minute timer,” but it cannot reliably
              recover which screen, component, pointer position, or visual state
              “this” referred to.
            </p>
            <blockquote>
              The opportunity is not a better transcript. It is less
              interpretation and repackaging between a meeting and execution.
            </blockquote>

            <div className="wispr-gap-grid">
              {observedGaps.map(({ icon: Icon, title, copy }) => (
                <article key={title}>
                  <Icon size={21} aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="case-section wispr-model-section" id="model">
        <div className="shell">
          <div className="section-heading case-wide-heading">
            <div>
              <p className="section-kicker">03 · Product model</p>
              <h2>Make the inference legible.</h2>
            </div>
            <p>
              Screen Context is an optional layer inside Notetaker—not a second
              recorder. It combines three evidence sources and shows the user
              exactly how each proposed action was inferred.
            </p>
          </div>

          <div className="wispr-signal-chain">
            {productSignals.map(({ icon: Icon, label, title, copy }, index) => (
              <div className="wispr-signal-step" key={label}>
                <article className={index === productSignals.length - 1 ? "result" : ""}>
                  <div className="wispr-signal-icon">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <span>{label}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
                {index < productSignals.length - 1 ? (
                  <ArrowRight className="wispr-signal-arrow" size={20} aria-hidden="true" />
                ) : null}
              </div>
            ))}
          </div>

          <div className="wispr-positioning">
            <span>Positioning</span>
            <strong>From remembering the meeting to understanding the work.</strong>
            <p>
              Keep the familiar note, then add visual evidence and reviewed
              execution outputs only when the meeting needs them.
            </p>
          </div>
        </div>
      </section>

      <section className="case-section wispr-experience-section" id="experience">
        <div className="shell case-content-grid">
          <div className="case-section-title">
            <p className="section-kicker">04 · Experience</p>
            <h2>One meeting flow, six deliberate decisions.</h2>
          </div>
          <div className="case-section-body">
            <div className="wispr-experience-list">
              {experienceSteps.map((step) => (
                <article key={step.number}>
                  <span>{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="surface-separation">
              <div>
                <span>Existing surface</span>
                <strong>Fn dictation bar</strong>
                <p>Temporary, bottom-centre, and explicit about the focused input target.</p>
              </div>
              <div>
                <span>Meeting surface</span>
                <strong>Notetaker capture strip</strong>
                <p>Persistent recording status, source controls, Ask Flow, pause, and stop.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section wispr-outputs-section" id="outputs">
        <div className="shell">
          <div className="section-heading case-wide-heading">
            <div>
              <p className="section-kicker">05 · Outputs</p>
              <h2>The meeting ends. The workflow starts.</h2>
            </div>
            <p>
              The concept produces three connected outputs from one reviewed set
              of evidence. Every instruction links back to a visual moment and
              transcript timestamp.
            </p>
          </div>

          <div className="wispr-output-grid">
            {outputs.map(({ icon: Icon, title, copy }, index) => (
              <article key={title}>
                <div className="wispr-output-number">0{index + 1}</div>
                <Icon size={25} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>

          <a
            className="wispr-prototype-banner"
            href={screenAwareProject.links.prototype}
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <span>Interactive proof</span>
              <strong>Walk through consent, live capture, QA, and all three outputs.</strong>
            </div>
            <span className="button light">
              Open prototype
              <ExternalLink size={15} aria-hidden="true" />
            </span>
          </a>
        </div>
      </section>

      <section className="case-section wispr-trust-section" id="trust">
        <div className="shell case-content-grid">
          <div className="case-section-title">
            <p className="section-kicker">06 · Trust</p>
            <h2>Screen understanding raises the permission bar.</h2>
          </div>
          <div className="case-section-body">
            <p className="case-lead">
              Visual context is more sensitive than audio transcription. Trust
              controls are part of the core product proposition, not settings to
              add later.
            </p>
            <div className="wispr-trust-list">
              {trustControls.map((control) => (
                <div key={control}>
                  <Check size={17} aria-hidden="true" />
                  <span>{control}</span>
                </div>
              ))}
            </div>

            <div className="wispr-non-goal">
              <ScanEye size={23} aria-hidden="true" />
              <div>
                <strong>Non-goal: continuous surveillance</strong>
                <p>
                  The first version understands one user-selected source for one
                  meeting. It cannot access another participant’s device, and it
                  does not execute inferred tasks automatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section wispr-measure-section" id="measure">
        <div className="shell case-content-grid">
          <div className="case-section-title">
            <p className="section-kicker">07 · Measure</p>
            <h2>Measure the work removed after the meeting.</h2>
          </div>
          <div className="case-section-body">
            <p className="case-lead">
              Success is not more captured content. It is more correct work with
              less manual reconstruction—and enough user control to make the
              feature trustworthy.
            </p>
            <div className="wispr-metric-grid">
              {successMetrics.map((item) => (
                <article key={item.title}>
                  <span>{item.title}</span>
                  <strong>{item.metric}</strong>
                </article>
              ))}
            </div>

            <div className="case-close wispr-case-close">
              <p className="section-kicker light">Recommendation</p>
              <h2>
                Build Screen Context as the premium execution layer above
                Notetaker—not as another recording mode.
              </h2>
              <div className="button-row">
                <a
                  className="button light"
                  href={screenAwareProject.links.prototype}
                  target="_blank"
                  rel="noreferrer"
                >
                  Explore the concept
                  <ExternalLink size={15} aria-hidden="true" />
                </a>
                <a className="button outline-light" href="/#work">
                  Back to selected work
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
