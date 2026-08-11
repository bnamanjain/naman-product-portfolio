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
import { blogPosts } from "../lib/blog-data";
import {
  healthcareSystemsProject,
  operatingEvidence,
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
            <p className="section-kicker">
              Product Manager · Growth, Monetization & Analytics
            </p>
            <h1>Naman Jain</h1>
            <p className="hero-statement">
              I turn broken customer journeys into measurable growth and
              scalable operating systems.
            </p>
            <p className="hero-detail">
              At AlloHealth, I increased repeat revenue contribution from 33%
              to 45%, lifted realized LTV, and shipped payout and automation
              products. Now focused on B2C fintech across lending, payments,
              trading, and wealth.
            </p>
            <div className="button-row">
              <a className="button primary" href="/work/operating-evidence">
                View production work
                <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a className="button secondary" href={site.resume} download>
                <Download size={17} aria-hidden="true" />
                Download resume
              </a>
            </div>
            <div className="availability-line">
              <span className="availability-dot" aria-hidden="true" />
              Open to Product Manager roles in Bengaluru
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
              <span>Independent fintech case</span>
              <strong>Affordable Commerce</strong>
              <small>Borrower mobile · Seller web · Lending platform</small>
            </div>
          </div>
        </div>
        <div className="shell hero-index">
          <span>Lifecycle growth</span>
          <span>Monetization</span>
          <span>Product analytics</span>
          <span>Financial systems</span>
          <span>AI operations</span>
        </div>
      </section>

      <section className="section evidence-section" id="experience">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Production work · AlloHealth</p>
              <h2>Products shipped. Business metrics moved.</h2>
            </div>
            <p>
              Aggregate operating evidence from my Founder&apos;s Office and
              Repeat Business roles. No confidential customer data is shown.
            </p>
          </div>

          <div className="evidence-grid">
            {operatingEvidence.map((item) => (
              <a
                className="evidence-card"
                href={`/work/operating-evidence#${item.id}`}
                key={item.id}
              >
                <div className="evidence-card-top">
                  <span>{item.number}</span>
                  <p>{item.eyebrow}</p>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </div>
                <h3>{item.title}</h3>
                <p className="evidence-summary">{item.summary}</p>
                <div className="evidence-metrics">
                  {item.metrics.map((metric) => (
                    <strong key={metric}>{metric}</strong>
                  ))}
                </div>
              </a>
            ))}
          </div>

          <a className="text-link evidence-deep-dive" href="/work/operating-evidence">
            Read the complete operating evidence
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Selected work</p>
              <h2>Business outcomes, product depth, and system thinking.</h2>
            </div>
            <p>
              One independent zero-to-one fintech concept and one sanitized
              production systems study show how I work from customer problem to
              reliable operating model.
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

          <article className="featured-project systems-feature-project">
            <div className="featured-copy">
              <div className="project-meta-line">
                <span>{healthcareSystemsProject.status}</span>
                <span>{healthcareSystemsProject.duration}</span>
              </div>
              <h3>{healthcareSystemsProject.title}</h3>
              <p className="featured-summary">
                {healthcareSystemsProject.summary}
              </p>

              <div className="project-question">
                <span>The systems question</span>
                <strong>
                  How do complex customer journeys become explicit, measurable,
                  and recoverable production workflows?
                </strong>
              </div>

              <ul className="compact-check-list">
                {healthcareSystemsProject.chapters.map((chapter) => (
                  <li key={chapter}>
                    <Check size={17} aria-hidden="true" />
                    {chapter}
                  </li>
                ))}
              </ul>

              <div className="button-row">
                <a
                  className="button primary"
                  href={healthcareSystemsProject.links.caseStudy}
                >
                  Read systems case study
                  <ArrowRight size={17} aria-hidden="true" />
                </a>
                <a className="button secondary" href="/work/operating-evidence">
                  View business outcomes
                </a>
              </div>
            </div>

            <a
              className="featured-media systems-feature-media"
              href={healthcareSystemsProject.links.caseStudy}
              aria-label={`Read ${healthcareSystemsProject.title} case study`}
            >
              <div className="browser-bar">
                <span />
                <span />
                <span />
                <strong>Sanitized system context</strong>
              </div>
              <img
                src={healthcareSystemsProject.cover}
                alt="Healthcare journey systems architecture overview"
              />
              <div className="featured-media-caption">
                <span>Architecture</span>
                <span>API design</span>
                <span>Schema design</span>
                <span>Reliability</span>
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
              checkout, fulfilment, lifecycle communication, repeat, payout
              economics, and operational efficiency.
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

      <section className="section blog-preview-section" id="blog">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Writing</p>
              <h2>Thinking in public, while the thinking is still alive.</h2>
            </div>
            <p>
              Notes on product systems, fintech, markets, and making decisions
              when certainty is unavailable.
            </p>
          </div>

          <div className="blog-preview-grid">
            {blogPosts.map((post, index) => (
              <article className="blog-preview-card" key={post.slug}>
                <div className="blog-preview-topline">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <time dateTime={post.dateISO}>{post.readingTime}</time>
                </div>
                <div className="blog-tags" aria-label="Topics">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <h3>
                  <a href={`/blog/${post.slug}`}>{post.title}</a>
                </h3>
                <p>{post.dek}</p>
                <a className="text-link" href={`/blog/${post.slug}`}>
                  Read essay
                  <ArrowRight size={15} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>

          <a className="text-link blog-view-all" href="/blog">
            View all writing
            <ArrowRight size={16} aria-hidden="true" />
          </a>
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
              I joined AlloHealth&apos;s Founder&apos;s Office in June 2024, first
              working on P&amp;L, supply-chain economics, doctor payouts, and
              fundraising diligence. Since March 2025, I have led Repeat
              Business across the full post-purchase customer journey, leading
              2 analysts, 2 engineering interns, 2 customer experience managers,
              and specialised AI agents.
            </p>
            <p>
              Before that, I worked on research and AI-assisted product concepts
              at Cactus Communications. I hold a B.E. in Electronics and
              Telecommunication from RV College of Engineering. I also managed
              a ₹10L pledged-capital trading account to approximately ₹16L over
              two years in college, building hands-on interest in equities,
              derivatives, bonds, REITs, and market risk.
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
              <a href={site.tableau} target="_blank" rel="noreferrer">
                <BarChart3 size={17} aria-hidden="true" />
                Tableau
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
