# Naman Jain Product Portfolio

A responsive, evidence-led product portfolio combining quantified production
work at AlloHealth with an independent fintech case study.

Public site: https://naman-product-portfolio.pages.dev

## Routes

- `/` - Work index, operating evidence, approach, and profile
- `/work/operating-evidence` - Repeat growth, conversion, payouts, P&L, and AI/data systems
- `/work/affordable-commerce` - Full product case study
- `/work/wispr-screen-context` - Screen-aware meeting intelligence product concept

## Included Artifacts

- Live borrower and seller prototype links
- Live Wispr Screen Context prototype and evidence-led case study
- Product strategy and leadership documents
- Editable presentation
- Beginner-friendly system architecture deep dive
- Product screenshots and system diagrams
- Downloadable resume
- ATS-readable one-page resume with an editable HTML/CSS source
- Separate one-page Business Analyst / Program Manager / Category Manager resume
- Fintech PM targeting and portfolio-gap plan in `career/fintech-pm-targeting.md`

## Run Locally

```bash
npm install
npm run dev
```

Run the release verification against the local server:

```bash
PORTFOLIO_URL=http://localhost:3000 npm run verify
```

Regenerate the resume PDF after editing its HTML or CSS source:

```bash
npm run resume
```

## Deployment

The site is statically exported and hosted on Cloudflare Pages in Naman's
personal Cloudflare account. The local Wrangler profile `personal` is bound to
this repository so it stays isolated from the AlloHealth Cloudflare account.

Build and deploy manually:

```bash
npm run prebuild
npx wrangler pages deploy out --project-name naman-product-portfolio --branch main
```

## Content Model

Reusable portfolio and project content lives in `lib/site-data.js`. Production
evidence is implemented in `app/work/operating-evidence/page.jsx`; the independent
case is implemented in `app/work/affordable-commerce/page.jsx`.

## Custom Domain

The public preview can later be connected to a purchased domain without changing
the site content. Domain ownership and DNS records should be configured only
after the final hostname is selected.
