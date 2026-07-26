export const site = {
  name: "Naman Jain",
  role: "Product Manager",
  location: "Bengaluru, India",
  email: "bnamanjain@gmail.com",
  linkedin: "https://www.linkedin.com/in/bnamanjain",
  github: "https://github.com/bnamanjain",
  resume: "/downloads/Naman-Jain-Product-Manager-Resume.pdf",
};

export const proofMetrics = [
  {
    value: "20K+",
    label: "monthly consultations",
    detail: "End-to-end customer journey ownership at AlloHealth",
  },
  {
    value: "33% → 45%",
    label: "repeat revenue contribution",
    detail: "Strategy, experimentation, offers, and lifecycle improvements",
  },
  {
    value: "35% → 50%",
    label: "repeat booking conversion",
    detail: "Chatbot and customer journey redesign",
  },
  {
    value: "~30%",
    label: "lower operational workload",
    detail: "Self-serve flows, automation, and clearer customer states",
  },
];

export const project = {
  slug: "affordable-commerce",
  title: "Affordable Commerce inside super.money",
  shortTitle: "Affordable Commerce",
  eyebrow: "Zero-to-one fintech product concept",
  summary:
    "A controlled commerce vertical that helps eligible UPI users shop by cash flow, complete a transparent credit checkout, and gives sellers the tools to fund and operate affordability.",
  role: "Product strategy, UX, economics, systems, APIs, GTM",
  duration: "6-month launch plan",
  platforms: "Borrower mobile + seller web",
  status: "Independent portfolio concept",
  cover: "/assets/affordable-commerce/consumer-presenter.png",
  links: {
    caseStudy: "/work/affordable-commerce",
    borrower:
      "https://super-money-affordable-commerce.naman884186.chatgpt.site/buyer",
    seller:
      "https://super-money-affordable-commerce.naman884186.chatgpt.site/seller",
    github:
      "https://github.com/bnamanjain/super-money-affordable-commerce",
    blueprint:
      "https://github.com/bnamanjain/super-money-affordable-commerce/blob/main/docs/product-blueprint.md",
    technical:
      "https://github.com/bnamanjain/super-money-affordable-commerce/blob/main/docs/system-design-deep-dive.md",
    presentation:
      "/downloads/super-money-affordable-commerce-pitch.pptx",
  },
  bets: [
    {
      number: "01",
      title: "Affordability-first discovery",
      problem:
        "Price-first catalogues make users discover eligibility and cash-flow impact too late.",
      decision:
        "Rank financeable products by the amount due today and the user’s available shopping limit.",
      metric: "Qualified PDP-to-bag conversion",
    },
    {
      number: "02",
      title: "Repayment-aware bag and checkout",
      problem:
        "Bundles can raise AOV while also creating repayment surprise and unhealthy utilization.",
      decision:
        "Show repayment deltas, remaining limit, total payable, lender, KFS, and consent before confirmation.",
      metric: "Contribution-positive completed-order rate",
    },
    {
      number: "03",
      title: "Merchant Affordability OS",
      problem:
        "Sellers cannot fund, operate, or measure affordability through a catalogue upload alone.",
      decision:
        "Unify catalogue controls, funded offers, orders, settlements, analytics, and merchant APIs.",
      metric: "Incremental merchant-funded orders",
    },
  ],
};

export const borrowerScreens = [
  {
    id: "entry",
    label: "Entry",
    title: "Payments remain primary",
    image: "/assets/affordable-commerce/mobile-home-splitstore.png",
    problem: "A commerce entry must earn attention inside a high-frequency UPI home.",
    decision:
      "Keep payment actions intact and make Splitstore a focused destination with a visible eligible limit.",
    metric: "Eligible exposure → Splitstore visit",
  },
  {
    id: "credit",
    label: "Credit Health",
    title: "Trust before credit access",
    image: "/assets/affordable-commerce/credit-health-dashboard.png",
    problem:
      "A score alone creates anxiety and can make a credit surface feel like a sales funnel.",
    decision:
      "Show bureau source and freshness, explain factors, prioritize actions, and support corrections.",
    metric: "Monthly Credit Health Progressors",
  },
  {
    id: "product",
    label: "Product",
    title: "Approved plans on the PDP",
    image: "/assets/affordable-commerce/mobile-product.png",
    problem: "Financing shown only at checkout creates surprise and abandonment.",
    decision:
      "Expose due today, future payments, fees, lender, delivery, and return treatment before bag creation.",
    metric: "PDP → bag",
  },
  {
    id: "bag",
    label: "Bag",
    title: "Grow AOV within the limit",
    image: "/assets/affordable-commerce/mobile-bag-bundle.png",
    problem:
      "Generic cross-sell can push a useful basket beyond the user’s responsible purchasing power.",
    decision:
      "Offer one relevant add-on that fits and show exactly how every repayment changes.",
    metric: "Contribution-positive AOV",
  },
  {
    id: "checkout",
    label: "Checkout",
    title: "One transparent confirmation",
    image: "/assets/affordable-commerce/mobile-checkout.png",
    problem:
      "Payment, mandate, credit booking, and order placement can each fail independently.",
    decision:
      "Freeze the quote, revalidate once, capture consent, and orchestrate one durable checkout state.",
    metric: "Checkout → completed order",
  },
  {
    id: "success",
    label: "After purchase",
    title: "One order and obligation timeline",
    image: "/assets/affordable-commerce/mobile-success.png",
    problem:
      "Borrowers should not reconcile merchant, lender, repayment, and refund states themselves.",
    decision:
      "Link order, shipment, credit reference, repayments, and refund adjustments in one timeline.",
    metric: "Support contacts and repeat purchase",
  },
];

export const sellerScreens = [
  {
    id: "overview",
    label: "Overview",
    title: "Operate by contribution, not GMV",
    image: "/assets/affordable-commerce/seller-overview.png",
    problem:
      "Revenue and GMV can hide offer cost, returns, support load, and credit exposure.",
    decision:
      "Lead with funnel health, contribution, repeat, operational exceptions, and risk guardrails.",
    metric: "Contribution per completed order",
  },
  {
    id: "catalogue",
    label: "Catalogue",
    title: "Make financeability actionable",
    image: "/assets/affordable-commerce/seller-catalogue.png",
    problem:
      "A live SKU can still be unsuitable for credit because of margin, return, warranty, or seller-quality rules.",
    decision:
      "Give each SKU a financeability state, blocking reason, and clear route to resolution.",
    metric: "Financeable SKU rate",
  },
  {
    id: "offers",
    label: "Offers",
    title: "Fund incrementality with a holdout",
    image: "/assets/affordable-commerce/seller-affordability.png",
    problem:
      "Blanket subvention can subsidize orders that would have happened anyway.",
    decision:
      "Let sellers fund controlled affordability tests with budget, cohort, SKU, and holdout controls.",
    metric: "Incremental contribution per SKU",
  },
  {
    id: "orders",
    label: "Orders",
    title: "Fulfil without handling lender states",
    image: "/assets/affordable-commerce/seller-orders.png",
    problem:
      "Sellers need a normal fulfilment workflow even when credit and payment rails are complex.",
    decision:
      "Translate the orchestration state into a clear merchant order state and exception queue.",
    metric: "Order SLA and cancellation rate",
  },
  {
    id: "settlements",
    label: "Settlements",
    title: "Reconcile every money movement",
    image: "/assets/affordable-commerce/seller-settlements.png",
    problem:
      "Fees, funded offers, returns, loan adjustments, and payouts create difficult reconciliation.",
    decision:
      "Provide order-level settlement entries with matched, pending, and exception states.",
    metric: "Settlement match rate and TAT",
  },
  {
    id: "apis",
    label: "Channels & APIs",
    title: "One platform, two distribution channels",
    image: "/assets/affordable-commerce/seller-integrations.png",
    problem:
      "Seller adoption is limited if affordability works only inside Splitstore.",
    decision:
      "Use signed merchant sessions and webhooks to power the same checkout on a seller’s own site.",
    metric: "Merchant time-to-live",
  },
];

export const diagrams = [
  {
    id: "context",
    label: "Context",
    title: "The responsibility boundary",
    image: "/assets/affordable-commerce/system-context.png",
    summary:
      "The app owns experience and orchestration. Regulated lenders own credit approval and the loan account. Sellers own catalogue truth and fulfilment.",
  },
  {
    id: "services",
    label: "Services",
    title: "A domain-based service map",
    image: "/assets/affordable-commerce/service-architecture.png",
    summary:
      "Consumer and seller BFFs compose domain APIs. Catalogue, eligibility, offers, checkout, orders, repayments, refunds, and settlements keep separate ownership.",
  },
  {
    id: "checkout",
    label: "Checkout",
    title: "A durable checkout saga",
    image: "/assets/affordable-commerce/checkout-saga.png",
    summary:
      "The orchestrator records every step and compensates safely when inventory, payment, lender booking, or order placement fails.",
  },
  {
    id: "api",
    label: "APIs",
    title: "Synchronous commands and asynchronous facts",
    image: "/assets/affordable-commerce/api-architecture.png",
    summary:
      "Versioned REST APIs handle user commands. Events and signed webhooks distribute completed facts without coupling every service.",
  },
  {
    id: "data",
    label: "Data",
    title: "Domain-owned records",
    image: "/assets/affordable-commerce/core-data-model.png",
    summary:
      "Quotes, checkout sessions, payments, loan mirrors, orders, refunds, and settlements use stable identifiers and explicit links.",
  },
  {
    id: "credit",
    label: "Credit Health",
    title: "Purpose-bound credit data",
    image: "/assets/affordable-commerce/credit-health-architecture.png",
    summary:
      "Consent, bureau retrieval, score snapshots, factor explanations, actions, and disputes remain separate from a lending application.",
  },
];

export const caseNav = [
  ["brief", "Brief"],
  ["scope", "Scope"],
  ["borrower", "Borrower"],
  ["seller", "Seller"],
  ["economics", "Economics"],
  ["systems", "Systems"],
  ["launch", "Launch"],
];
