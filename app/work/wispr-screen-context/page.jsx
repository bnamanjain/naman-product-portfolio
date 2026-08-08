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
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { CaseNav } from "../../../components/case-nav";
import { screenAwareProject } from "../../../lib/site-data";

export const metadata = {
  title: "Wispr Notetaker + Screen Context",
  description:
    "A simple product proposal for connecting Wispr meeting notes to the exact screens and interface elements being discussed.",
  alternates: {
    canonical: "/work/wispr-screen-context",
  },
};

const navigation = [
  ["today", "Today"],
  ["gap", "What gets lost"],
  ["proposal", "Proposal"],
  ["flow", "How it works"],
  ["result", "Result"],
  ["safety", "Safety"],
];

const currentCapabilities = [
  "Records and transcribes the meeting",
  "Identifies speakers",
  "Creates a summary, decisions, and action items",
  "Keeps the transcript available after the meeting",
];

const proposedCapabilities = [
  "User chooses one screen, window, or browser tab",
  "Wispr saves only important visual decision moments",
  "Each moment links the words, screenshot, and pointer",
  "The final action shows the exact component, change, and owner",
];

const proposalSteps = [
  {
    number: "01",
    title: "Keep normal Notetaker on",
    copy: "Wispr continues recording, transcribing, and summarising the meeting exactly as it does today.",
  },
  {
    number: "02",
    title: "Optionally share one screen",
    copy: "The presenter chooses one screen, app window, or browser tab for this meeting only.",
  },
  {
    number: "03",
    title: "Save important visual moments",
    copy: "When a decision is made, Wispr links the quote to the visible screen and pointer location.",
  },
  {
    number: "04",
    title: "Review a visual action brief",
    copy: "After the meeting, the user checks the screenshot, requested change, owner, and source quote before sharing it.",
  },
];

const briefFields = [
  "Screenshot of the exact screen state",
  "Highlighted component or pointer location",
  "The decision in plain language",
  "Owner and expected result",
  "Link to the original transcript moment",
];

const trustControls = [
  "Permission is requested for each meeting",
  "Only one user-selected source is visible",
  "Screen Context can pause while transcription continues",
  "Notifications and sensitive fields are hidden",
  "Individual screenshots can be removed",
  "Nothing is sent to an agent without approval",
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
                <span>Independent product proposal</span>
                <span>Wispr Flow Notetaker</span>
              </div>
              <h1>Wispr hears the meeting. What if it also understood the screen?</h1>
              <p className="case-deck">
                Today, Notetaker listens to a meeting and creates notes. But if
                someone shares a product screen and says “change this banner,”
                the note keeps the words—not which banner they meant. I am
                proposing an optional way to save that missing visual context.
              </p>
              <div className="button-row">
                <a
                  className="button primary"
                  href={screenAwareProject.links.prototype}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Workflow size={17} aria-hidden="true" />
                  Try the proposed experience
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
                  <dt>Wispr today</dt>
                  <dd>Meeting audio → transcript and notes</dd>
                </div>
                <div>
                  <dt>What is missing</dt>
                  <dd>The exact screen behind a comment</dd>
                </div>
                <div>
                  <dt>My proposal</dt>
                  <dd>Optional screen context for key decisions</dd>
                </div>
                <div>
                  <dt>Main result</dt>
                  <dd>A clear visual action brief</dd>
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
                <strong>Proposed experience—not a current Wispr feature</strong>
              </div>
              <img
                src={screenAwareProject.cover}
                alt="Wispr product concept comparing today’s meeting notes, the missing screen reference, and the proposed Screen Context add-on"
              />
            </div>
            <div className="wispr-hero-caption simple">
              <span>The proposal in one line</span>
              <strong>Words + exact screen → a task everyone understands</strong>
            </div>
          </div>
        </div>
      </section>

      <CaseNav items={navigation} />

      <section className="case-section wispr-evidence-section" id="today">
        <div className="shell case-content-grid">
          <div className="case-section-title">
            <p className="section-kicker">01 · Today</p>
            <h2>What Wispr currently does.</h2>
          </div>
          <div className="case-section-body">
            <p className="case-lead">
              Wispr has two separate products. Notetaker captures meetings. The
              Fn Flow bar dictates into whichever text field is active. This
              proposal changes Notetaker only; the Fn dictation feature is not
              part of it.
            </p>

            <div className="wispr-now-grid">
              <article>
                <div className="wispr-now-icon"><Mic size={22} aria-hidden="true" /></div>
                <span>Current product</span>
                <h3>Notetaker</h3>
                <p>Listens to meetings and produces written meeting intelligence.</p>
                <ul>
                  {currentCapabilities.map((item) => (
                    <li key={item}><Check size={15} aria-hidden="true" />{item}</li>
                  ))}
                </ul>
              </article>
              <article>
                <div className="wispr-now-icon"><FileCheck2 size={22} aria-hidden="true" /></div>
                <span>Observed output</span>
                <h3>What the final note contains</h3>
                <p>
                  In my live test, Wispr returned notes, a summary, a transcript,
                  and action-item fields. It did not return screenshots, pointer
                  locations, or screen-state references.
                </p>
                <div className="plain-finding">
                  That visual gap—not the Fn bar—is the problem this concept addresses.
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section wispr-problem-section" id="gap">
        <div className="shell case-content-grid">
          <div className="case-section-title">
            <p className="section-kicker">02 · What gets lost</p>
            <h2>The transcript hears “this.” It cannot see what “this” means.</h2>
          </div>
          <div className="case-section-body">
            <div className="wispr-example-card">
              <div className="example-quote">
                <span>What someone says in the meeting</span>
                <blockquote>
                  “Make this background light yellow, bold the timer, and keep
                  the same 20-minute rule.”
                </blockquote>
              </div>
              <div className="example-split">
                <article>
                  <span>What the note knows</span>
                  <strong>The words, speaker, and timestamp</strong>
                </article>
                <article>
                  <span>What the note does not know</span>
                  <strong>Which banner, screen, or visual state “this” means</strong>
                </article>
              </div>
            </div>

            <div className="manual-handoff">
              <MousePointer2 size={23} aria-hidden="true" />
              <div>
                <strong>What happens next today</strong>
                <p>
                  Someone reopens the product, finds the screen, takes a
                  screenshot, rewrites the decision, and explains it again to a
                  designer, engineer, or agent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section wispr-model-section" id="proposal">
        <div className="shell case-content-grid">
          <div className="case-section-title">
            <p className="section-kicker">03 · Proposal</p>
            <h2>Add one optional feature: Screen Context.</h2>
          </div>
          <div className="case-section-body">
            <p className="case-lead">
              Before a screen-based review, Wispr asks whether the presenter
              wants to share one screen, window, or tab. If they agree, Wispr can
              connect important comments to the exact thing being shown.
            </p>

            <div className="current-proposed-compare">
              <article>
                <span>Notetaker today</span>
                <strong>Who said what?</strong>
                <p>Audio → transcript → summary and actions</p>
              </article>
              <ArrowRight size={22} aria-hidden="true" />
              <article className="proposed">
                <span>With the proposed add-on</span>
                <strong>Who said what, about which exact screen?</strong>
                <p>Audio + selected screen + pointer → clear visual action</p>
              </article>
            </div>

            <div className="wispr-proposal-list">
              {proposedCapabilities.map((item) => (
                <div key={item}><Check size={17} aria-hidden="true" /><span>{item}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="case-section wispr-experience-section" id="flow">
        <div className="shell">
          <div className="section-heading case-wide-heading">
            <div>
              <p className="section-kicker">04 · How it works</p>
              <h2>Four steps. Normal Notetaker stays intact.</h2>
            </div>
            <p>
              Screen Context is an add-on for meetings where the screen matters.
              Audio-only meetings can continue exactly as they do today.
            </p>
          </div>

          <div className="simple-proposal-flow">
            {proposalSteps.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section wispr-outputs-section" id="result">
        <div className="shell case-content-grid">
          <div className="case-section-title">
            <p className="section-kicker">05 · Result</p>
            <h2>The first output should be one clear visual action brief.</h2>
          </div>
          <div className="case-section-body">
            <p className="case-lead">
              The goal is not to collect more meeting content. It is to remove
              the manual work of explaining the same visual decision again.
            </p>

            <div className="visual-brief-card">
              <div className="visual-brief-head">
                <div>
                  <span>Primary proposed output</span>
                  <h3>Visual action brief</h3>
                </div>
                <MonitorUp size={26} aria-hidden="true" />
              </div>
              <ul>
                {briefFields.map((field) => (
                  <li key={field}><Check size={16} aria-hidden="true" />{field}</li>
                ))}
              </ul>
              <div className="visual-brief-example">
                <span>Example action</span>
                <strong>
                  Change the highlighted grace-period banner to light yellow,
                  bold “20 minutes,” and keep the backend timer unchanged.
                </strong>
              </div>
            </div>

            <div className="later-extensions">
              <span>Possible later extensions—not required for version one</span>
              <div>
                <article>
                  <PlayCircle size={20} aria-hidden="true" />
                  <strong>Short visual recap</strong>
                  <p>Replay only the important screen moments.</p>
                </article>
                <article>
                  <Bot size={20} aria-hidden="true" />
                  <strong>Reviewed agent package</strong>
                  <p>Send the approved brief to Codex or Claude.</p>
                </article>
              </div>
            </div>

            <a
              className="wispr-prototype-banner"
              href={screenAwareProject.links.prototype}
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <span>Interactive concept</span>
                <strong>See the proposed permission, capture, and visual brief flow.</strong>
              </div>
              <span className="button light">
                Try the concept
                <ExternalLink size={15} aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="case-section wispr-trust-section" id="safety">
        <div className="shell case-content-grid">
          <div className="case-section-title">
            <p className="section-kicker">06 · Safety</p>
            <h2>The user must always know what Wispr can see.</h2>
          </div>
          <div className="case-section-body">
            <p className="case-lead">
              Screen access is more sensitive than meeting audio. The feature
              only works if permission, visibility, deletion, and review are
              designed into the main experience.
            </p>
            <div className="wispr-trust-list">
              {trustControls.map((control) => (
                <div key={control}>
                  <Check size={17} aria-hidden="true" />
                  <span>{control}</span>
                </div>
              ))}
            </div>

            <div className="research-integrity-note">
              <ShieldCheck size={22} aria-hidden="true" />
              <div>
                <strong>Clear boundary</strong>
                <p>
                  This is an independent proposal, not a current Wispr feature.
                  It should begin with one selected source, key screenshots, and
                  a human-reviewed brief—never continuous surveillance or
                  automatic execution.
                </p>
              </div>
            </div>

            <div className="case-close wispr-case-close">
              <p className="section-kicker light">The recommendation</p>
              <h2>
                Help Notetaker answer one extra question: “What exact thing on
                screen were they talking about?”
              </h2>
              <div className="button-row">
                <a
                  className="button light"
                  href={screenAwareProject.links.prototype}
                  target="_blank"
                  rel="noreferrer"
                >
                  Try the proposed experience
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
