export const blogPosts = [
  {
    slug: "repeat-revenue-is-a-systems-problem",
    title: "Repeat revenue is a systems problem, not a reminder problem",
    dek:
      "Retention usually breaks across ownership, timing, customer state, and exception handling long before it becomes a messaging problem.",
    date: "2 August 2026",
    dateISO: "2026-08-02",
    readingTime: "5 min read",
    tags: ["Lifecycle", "Growth", "Systems"],
    intro: [
      "When repeat revenue falls, the first instinct is often to send more reminders. A new WhatsApp template appears, an agent queue grows, and somebody proposes a campaign calendar. Sometimes that produces a temporary lift. It rarely fixes the underlying system.",
      "A repeat journey is not one message. It is a chain of customer states: the first transaction, fulfilment, usage, intent, the next action, attendance, exceptions, and eventually another transaction. If any state is invisible or ownerless, the reminder is merely arriving at a broken door.",
    ],
    sections: [
      {
        heading: "Start with state, not channels",
        paragraphs: [
          "The useful question is not, ‘When should we message the customer?’ It is, ‘What must be true for this customer to move forward?’ That changes the work. You begin looking for missing fulfilment signals, unclear handoffs, stale eligibility, unresolved complaints, reschedules, and actions that were technically initiated but never completed.",
          "Once the states are explicit, channels become delivery mechanisms rather than the strategy. WhatsApp, email, in-app prompts and calling can each serve a state transition. None should pretend to own the journey by itself.",
        ],
      },
      {
        heading: "Measure the transitions that create the outcome",
        paragraphs: [
          "A top-line repeat rate is necessary but too slow to operate. Teams need the transitions underneath it: eligible to contacted, intent to booking, booking to completion, failure to recovery, and completion to the next valuable action.",
          "These measures also expose false progress. More outbound tasks can look like activity while reducing customer trust. A smaller queue with better prioritisation, current context and expired redundant work can create a healthier journey with less operational effort.",
        ],
      },
      {
        heading: "Give exceptions first-class product treatment",
        paragraphs: [
          "Happy paths look good in review decks. Repeat businesses are won in reschedules, failed payments, delayed fulfilment, no-shows, changed intent and partial completion. These are not edge cases when they happen every day at scale.",
          "The product should retain context, establish the next owner and make recovery visible. If the customer has to explain the same situation again, the system has transferred its coordination cost to the customer.",
        ],
      },
      {
        heading: "The operating model is part of the product",
        paragraphs: [
          "Dashboards matter when they change a decision. Queues matter when they preserve priority. Reviews matter when they identify a broken transition and assign an owner. Product, operations and communication are not separate layers in a lifecycle business; together, they are the customer experience.",
          "That is why sustainable repeat growth often looks less like a clever campaign and more like patient systems work. The outcome compounds because the journey becomes easier to understand, operate and improve.",
        ],
      },
    ],
    takeaway:
      "Before adding another reminder, map the customer states, the transition metric, the owner and the recovery path. The missing message may not be the real missing piece.",
  },
  {
    slug: "what-payout-products-teach-about-fintech",
    title: "What building a payout product teaches you about fintech",
    dek:
      "Money movement turns ordinary product choices into questions of rules, approvals, auditability, reconciliation, and trust.",
    date: "2 August 2026",
    dateISO: "2026-08-02",
    readingTime: "4 min read",
    tags: ["Payments", "Platforms", "Operations"],
    intro: [
      "A payout tool can sound like an internal calculator with a pay button. The moment real money, changing commercial rules and multiple approvers enter the system, it becomes something else: a compact financial platform.",
      "The interesting work lives between the formula and the bank transfer. Who is eligible? Which version of the commercial rule applies? What happens when an input changes after approval? Can finance reconstruct why a number was paid three months later?",
    ],
    sections: [
      {
        heading: "Rules need versions, not memory",
        paragraphs: [
          "Commercial structures evolve. A slab changes, an exception is approved, or a partner moves to a different arrangement. If the product stores only the latest rule, historical payouts become impossible to explain.",
          "A sound system treats the rule, its effective date and its approval as data. Every payout should be reproducible from the inputs and rule version that existed at calculation time.",
        ],
      },
      {
        heading: "Calculation and payment are different states",
        paragraphs: [
          "A correct amount is not yet an approved amount, and an approved amount is not yet a successful payment. Collapsing these states makes failures ambiguous and retries dangerous.",
          "Separating calculation, review, approval, initiation, success and failure creates clear ownership. It also makes idempotency possible: retry the failed operation without accidentally paying twice.",
        ],
      },
      {
        heading: "Statements are a trust surface",
        paragraphs: [
          "The recipient should not need access to internal logic to understand a payout. A useful statement explains the period, eligible activity, applied slab, adjustments, deductions and final amount in language that can be checked independently.",
          "This is product design, not administrative decoration. Clear statements reduce disputes while giving errors a visible path to correction.",
        ],
      },
      {
        heading: "The ledger eventually wins",
        paragraphs: [
          "Operational dashboards tell a current story. Financial systems must preserve a durable one. As volume grows, reconciliation, immutable events and exception queues matter more than a polished summary number.",
          "That is the broader fintech lesson: a good interface helps somebody act, but a trustworthy system can also explain what happened after the interface is gone.",
        ],
      },
    ],
    takeaway:
      "For any money movement, model the states, version the rules, make retries safe and ensure that every final amount can be reconstructed.",
  },
  {
    slug: "games-with-odds",
    title: "Games with odds: markets, products, and deciding without certainty",
    dek:
      "The useful skill is not predicting every outcome. It is making better-sized decisions when the future refuses to become obvious.",
    date: "2 August 2026",
    dateISO: "2026-08-02",
    readingTime: "4 min read",
    tags: ["Markets", "Decision-making", "Product"],
    intro: [
      "I have always liked games with odds: markets, venture capital, product bets, and any situation where smart people can see the same facts and still disagree. Certainty is unavailable, but a decision is still required.",
      "Trading during college made this painfully concrete. A good outcome could follow a weak decision, and a strong decision could still lose money. Looking only at the result made it easy to learn the wrong lesson.",
    ],
    sections: [
      {
        heading: "Separate the decision from the outcome",
        paragraphs: [
          "Outcomes contain skill, luck and conditions you did not control. A useful review asks what information was available, what assumptions were made, what would invalidate the thesis and whether the exposure matched the uncertainty.",
          "Product teams need the same separation. A successful launch does not prove every choice was correct, and a failed experiment does not make the reasoning useless. The quality of the learning depends on whether the bet was explicit before the result arrived.",
        ],
      },
      {
        heading: "Size the bet to what you know",
        paragraphs: [
          "Conviction should change exposure, not eliminate humility. When evidence is limited, the decision should be reversible or small. As evidence improves, commitment can grow.",
          "Feature flags, staged rollouts, limited cohorts and operational guardrails are product versions of position sizing. They preserve the ability to learn without making one uncertain assumption existential.",
        ],
      },
      {
        heading: "Protect against ruin",
        paragraphs: [
          "Expected upside is irrelevant if one failure can destroy the system. Markets call this risk of ruin. Products encounter it through compliance failures, irreversible customer harm, broken money movement, security incidents and operational overload.",
          "Good systems make ordinary failure survivable. They create limits, recovery paths, audit trails and humans in the loop where uncertainty carries asymmetric cost.",
        ],
      },
      {
        heading: "Update without rewriting history",
        paragraphs: [
          "Changing your mind after new evidence is rational. Pretending you always believed the new version is not. A decision log protects against that temptation and reveals which assumptions repeatedly fail.",
          "The goal is not to become a perfect predictor. It is to become less surprised by being wrong—and better prepared when you are.",
        ],
      },
    ],
    takeaway:
      "Make the thesis explicit, size the bet, define what would change your mind and protect the system from a single bad outcome.",
  },
];

export function getBlogPost(slug) {
  return blogPosts.find((post) => post.slug === slug);
}
