import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  Download,
  ExternalLink,
  Github,
  Layers3,
  Linkedin,
  Mail,
  Network,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import {
  handshakeProject,
  project,
  proofMetrics,
  screenAwareProject,
  site,
} from "../lib/site-data";

const operatingPrinciples = [
  {
    icon: Target,
    step: "01",
    title: "Frame the decision",
    copy:
      "Define the customer, business constraint, non-goals, baseline, and one falsifiable outcome before adding features.",
  },
  {
    icon: Layers3,
    step: "02",
    title: "Design the whole system",
    copy:
      "Connect UX, operations, economics, risk, data, APIs, and failure states so the journey can survive production.",
  },
  {
    icon: BarChart3,
    step: "03",
    title: "Ship with evidence",
    copy:
      "Instrument the funnel, use controlled experiments, protect guardrails, and scale only when cohort economics hold.",
  },
];

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="home-hero">
        <div className="shell home-hero-grid">
          <div className="hero-copy">
            <p className="section-kicker">Product Manager · Bengaluru</p>
            <h1>Naman Jain</h1>
            <p className="hero-statement">
              I build consumer products where customer trust, operating systems,
              and business economics have to work together.
            </p>
            <p className="hero-detail">
              Currently focused on product strategy, analytics, growth, and
              zero-to-one fintech experiences across credit, payments, and
              commerce.
            </p>
            <div className="button-row">
              <a className="button primary" href={project.links.caseStudy}>
                View flagship case
                <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a className="button secondary" href={site.resume} download>
                <Download size={17} aria-hidden="true" />
                Download resume
              </a>
            </div>
            <div className="availability-line">
              <span className="availability-dot" aria-hidden="true" />
              Exploring product roles in fintech and consumer technology
            </div>
          </div>

          <div className="hero-project-visual" aria-label="Featured project preview">
            <div className="hero-browser">
              <div className="browser-bar">
                <span />
                <span />
                <span />
                <strong>Seller Affordability OS</strong>
              </div>
              <img
                src="/assets/affordable-commerce/seller-overview.png"
                alt="Seller commerce overview dashboard"
              />
            </div>
            <div className="hero-phone">
              <div className="phone-speaker" />
              <img
                src="/assets/affordable-commerce/mobile-home-splitstore.png"
                alt="Borrower mobile payments and Splitstore screen"
              />
            </div>
            <div className="hero-project-label">
              <span>Featured work</span>
              <strong>Affordable Commerce</strong>
              <small>Borrower mobile · Seller web · Lending platform</small>
            </div>
          </div>
        </div>
        <div className="shell hero-index">
          <span>Strategy</span>
          <span>Product design</span>
          <span>Unit economics</span>
          <span>System architecture</span>
          <span>Go-to-market</span>
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Selected work · 03</p>
              <h2>Product systems, designed end to end.</h2>
            </div>
            <p>
              My case studies show the product decision, the user experience,
              the operating model, and the economics in one connected system.
            </p>
          </div>

          <article className="featured-project">
            <div className="featured-copy">
              <div className="project-meta-line">
                <span>{project.status}</span>
                <span>{project.duration}</span>
              </div>
              <h3>{project.title}</h3>
              <p className="featured-summary">{project.summary}</p>

              <div className="project-question">
                <span>The strategic question</span>
                <strong>
                  How could a UPI app build a repeatable, contribution-positive
                  commerce business around what users can responsibly afford?
                </strong>
              </div>

              <ul className="compact-check-list">
                {project.bets.map((bet) => (
                  <li key={bet.number}>
                    <Check size={17} aria-hidden="true" />
                    {bet.title}
                  </li>
                ))}
              </ul>

              <div className="button-row">
                <a className="button primary" href={project.links.caseStudy}>
                  Read case study
                  <ArrowRight size={17} aria-hidden="true" />
                </a>
                <a
                  className="button secondary"
                  href={project.links.borrower}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open prototype
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
              </div>
            </div>

            <a
              className="featured-media"
              href={project.links.caseStudy}
              aria-label={`Read ${project.title} case study`}
            >
              <div className="browser-bar">
                <span />
                <span />
                <span />
                <strong>End-to-end product walkthrough</strong>
              </div>
              <img src={project.cover} alt="Affordable Commerce prototype overview" />
              <div className="featured-media-caption">
                <span>2 live prototypes</span>
                <span>3 product bets</span>
                <span>8 system diagrams</span>
              </div>
            </a>
          </article>

          <article className="featured-project handshake-project-card">
            <div className="featured-copy">
              <div className="project-meta-line">
                <span>{handshakeProject.status}</span>
                <span>{handshakeProject.duration}</span>
              </div>
              <h3>{handshakeProject.title}</h3>
              <p className="featured-summary">{handshakeProject.summary}</p>

              <div className="project-question">
                <span>The product question</span>
                <strong>{handshakeProject.question}</strong>
              </div>

              <ul className="compact-check-list">
                {handshakeProject.highlights.map((highlight) => (
                  <li key={highlight}>
                    <Check size={17} aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="button-row">
                <a className="button primary" href={handshakeProject.links.caseStudy}>
                  Read case study
                  <ArrowRight size={17} aria-hidden="true" />
                </a>
                <a className="button secondary" href={handshakeProject.links.prototype}>
                  Try prototype
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
              </div>
            </div>

            <a
              className="featured-media handshake-card-media"
              href={handshakeProject.links.caseStudy}
              aria-label={`Read ${handshakeProject.title} case study`}
            >
              <div className="browser-bar">
                <span />
                <span />
                <span />
                <strong>Doctor call · Rx handoff</strong>
              </div>
              <div className="handshake-card-visual" aria-hidden="true">
                <div className="handshake-card-call">
                  <span className="handshake-card-avatar">DR</span>
                  <span className="handshake-card-avatar patient">P</span>
                  <small>Live follow-up</small>
                </div>
                <div className="handshake-card-popup">
                  <span>Agent alerted</span>
                  <strong>Stay for the handoff</strong>
                  <div><b>60</b> seconds</div>
                  <i />
                </div>
              </div>
              <div className="featured-media-caption">
                <span>+35 pp handshake</span>
                <span>Interactive mock</span>
                <span>Production result</span>
              </div>
            </a>
          </article>

          <article className="featured-project wispr-project-card">
            <div className="featured-copy">
              <div className="project-meta-line">
                <span>{screenAwareProject.status}</span>
                <span>{screenAwareProject.duration}</span>
              </div>
              <h3>{screenAwareProject.title}</h3>
              <p className="featured-summary">{screenAwareProject.summary}</p>

              <div className="project-question">
                <span>The product question</span>
                <strong>{screenAwareProject.question}</strong>
              </div>

              <ul className="compact-check-list">
                {screenAwareProject.highlights.map((highlight) => (
                  <li key={highlight}>
                    <Check size={17} aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="button-row">
                <a
                  className="button primary"
                  href={screenAwareProject.links.caseStudy}
                >
                  Read case study
                  <ArrowRight size={17} aria-hidden="true" />
                </a>
                <a
                  className="button secondary"
                  href={screenAwareProject.links.prototype}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open prototype
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
              </div>
            </div>

            <a
              className="featured-media"
              href={screenAwareProject.links.caseStudy}
              aria-label={`Read ${screenAwareProject.title} case study`}
            >
              <div className="browser-bar">
                <span />
                <span />
                <span />
                <strong>Evidence → product model → interactive prototype</strong>
              </div>
              <img
                src={screenAwareProject.cover}
                alt="Wispr product concept explaining what Notetaker does today, the missing visual context, and the proposed Screen Context add-on"
              />
              <div className="featured-media-caption">
                <span>1 live test</span>
                <span>2 Wispr surfaces</span>
                <span>3 execution outputs</span>
              </div>
            </a>
          </article>
        </div>
      </section>

      <section className="proof-band">
        <div className="shell">
          <div className="proof-intro">
            <p className="section-kicker light">Production evidence</p>
            <h2>Measured outcomes from my current operating work.</h2>
            <p>
              At AlloHealth, I own customer journeys and business metrics across
              checkout, fulfilment, lifecycle communication, repeat, and
              operational efficiency.
            </p>
          </div>
          <div className="proof-grid">
            {proofMetrics.map((metric) => (
              <article key={metric.label}>
                <strong>{metric.value}</strong>
                <h3>{metric.label}</h3>
                <p>{metric.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section approach-section" id="approach">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="section-kicker">How I work</p>
              <h2>From ambiguity to an operating product.</h2>
            </div>
            <p>
              I use customer research, data, design, and systems thinking as one
              product discipline.
            </p>
          </div>

          <div className="principles-grid">
            {operatingPrinciples.map((principle) => {
              const Icon = principle.icon;
              return (
                <article key={principle.step}>
                  <div className="principle-top">
                    <Icon size={21} aria-hidden="true" />
                    <span>{principle.step}</span>
                  </div>
                  <h3>{principle.title}</h3>
                  <p>{principle.copy}</p>
                </article>
              );
            })}
          </div>

          <div className="capability-ledger">
            <div>
              <Network size={19} aria-hidden="true" />
              <span>Systems</span>
              <strong>APIs, services, schemas, failure recovery</strong>
            </div>
            <div>
              <ShieldCheck size={19} aria-hidden="true" />
              <span>Trust</span>
              <strong>Consent, disclosure, risk, compliance</strong>
            </div>
            <div>
              <BarChart3 size={19} aria-hidden="true" />
              <span>Growth</span>
              <strong>Funnels, cohorts, A/B tests, unit economics</strong>
            </div>
            <div>
              <Sparkles size={19} aria-hidden="true" />
              <span>Craft</span>
              <strong>Research, journeys, prototypes, storytelling</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="shell about-grid">
          <div>
            <p className="section-kicker">About</p>
            <h2>I care about the moment a customer promise meets reality.</h2>
          </div>
          <div className="about-copy">
            <p>
              I am a Product Manager in AlloHealth’s Founder’s Office, working
              across a healthcare customer journey that serves more than 20,000
              consultations each month. My work spans discovery, analytics,
              checkout, fulfilment, lifecycle communication, experiments, and
              cross-functional delivery.
            </p>
            <p>
              Before that, I worked on research and AI-assisted product concepts
              at Cactus Communications. I hold a B.E. in Electronics and
              Telecommunication from RV College of Engineering.
            </p>
            <div className="about-actions">
              <a href={site.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={17} aria-hidden="true" />
                LinkedIn
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              <a href={site.github} target="_blank" rel="noreferrer">
                <Github size={17} aria-hidden="true" />
                GitHub
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              <a href={`mailto:${site.email}`}>
                <Mail size={17} aria-hidden="true" />
                Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
