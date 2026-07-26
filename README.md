# Naman Jain Product Portfolio

A responsive, evidence-led product portfolio built around one flagship case
study: Affordable Commerce inside super.money.

## Routes

- `/` - Work index, operating evidence, approach, and profile
- `/work/affordable-commerce` - Full product case study

## Included Artifacts

- Live borrower and seller prototype links
- Product strategy and leadership documents
- Editable presentation
- Beginner-friendly system architecture deep dive
- Product screenshots and system diagrams
- Downloadable resume

## Run Locally

```bash
npm install
npm run dev
```

Run the release verification against the local server:

```bash
PORTFOLIO_URL=http://localhost:3000 npm run verify
```

## Content Model

Reusable portfolio and project content lives in `lib/site-data.js`. The flagship
case is implemented in `app/work/affordable-commerce/page.jsx`.

## Custom Domain

The public preview can later be connected to a purchased domain without changing
the site content. Domain ownership and DNS records should be configured only
after the final hostname is selected.
