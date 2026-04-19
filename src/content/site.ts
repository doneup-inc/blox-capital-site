/* ─────────────────────────────────────────────────────────
 * SITE CONTENT — Merchant-first homepage + investor route
 * ───────────────────────────────────────────────────────── */

// ── Navigation ─────────────────────────────────────────

export const navSections = [
  { label: "How it works", href: "#how-it-works" },
  { label: "The math", href: "#the-math" },
  { label: "What's live", href: "#whats-live" },
  { label: "Demo", href: "/demo" },
  { label: "Contact", href: "#contact" },
];

export const investorNavSections = [
  { label: "Overview", href: "/investors#overview" },
  { label: "Platform", href: "/investors#platform" },
  { label: "Compliance", href: "/investors#compliance" },
  { label: "Investors", href: "/investors#investors" },
  { label: "Updates", href: "/investors#updates" },
  { label: "Contact", href: "/investors#contact" },
];

// ── Merchant-facing hero ───────────────────────────────

export const hero = {
  title: "Stop losing money on every sale.",
  subtitle:
    "Card processors take 2.9% + $0.30 from every transaction. On small tickets, that's up to 10% of your revenue — gone. Blox Pay settles payments in seconds with zero processing fees, and you get your money the same day.",
  highlights: [
    "No card fees",
    "3-second settlement",
    "Same-day payouts",
  ],
  primaryCta: {
    label: "See the demo",
    href: "/demo",
  },
  secondaryCta: {
    label: "Talk to us",
    href: "mailto:greg@blox.capital?subject=Interested%20in%20Blox%20Pay",
  },
  metrics: [
    {
      label: "Your cut on a $20 sale",
      value: "$20.00",
      detail: "You keep the full amount. Zero processing fees.",
    },
    {
      label: "Settlement",
      value: "3 sec",
      detail: "Confirmed and final. Not pending. Not T+2.",
    },
    {
      label: "Payout to your bank",
      value: "Same day",
      detail: "Withdraw anytime via Stripe Connect.",
    },
  ],
};

// ── How it works (3-step flow) ─────────────────────────

export const howItWorks = {
  eyebrow: "How it works",
  title: "Three steps. No POS hardware. No app required.",
  steps: [
    {
      number: "01",
      title: "Create a payment link",
      body: "Enter an amount and description. Get a shareable URL instantly — paste it in a DM, add it to your bio, text it to a customer.",
    },
    {
      number: "02",
      title: "Customer pays",
      body: "They open the link, see the total, and pay. Card, Apple Pay, Google Pay — whatever they have. No app download, no account creation.",
    },
    {
      number: "03",
      title: "You get paid",
      body: "Payment settles in 3 seconds. You see it in your dashboard immediately. Withdraw to your bank whenever you want.",
    },
  ],
};

// ── Fee comparison math ────────────────────────────────

export const feeMath = {
  eyebrow: "The math",
  title: "Here's what card fees actually cost you.",
  subtitle: "On small tickets, the percentage doesn't tell the whole story. The $0.30 per-transaction fee is what kills you.",
  comparisons: [
    {
      item: "Coffee",
      price: 4.50,
      cardFee: 0.43,
      cardPercent: "9.6%",
      bloxFee: 0,
    },
    {
      item: "Lunch plate",
      price: 12.00,
      cardFee: 0.65,
      cardPercent: "5.4%",
      bloxFee: 0,
    },
    {
      item: "Haircut",
      price: 35.00,
      cardFee: 1.32,
      cardPercent: "3.8%",
      bloxFee: 0,
    },
    {
      item: "Online order",
      price: 68.00,
      cardFee: 2.27,
      cardPercent: "3.3%",
      bloxFee: 0,
    },
  ],
  footnote: "Card fees calculated at 2.9% + $0.30 (standard Stripe/Square rate). Blox Pay processing fee: $0.00.",
  annualSavings: {
    label: "If you process $10K/month in small tickets",
    cardCost: "$3,900/year in fees",
    bloxCost: "$0",
    savings: "$3,900 back in your pocket",
  },
};

// ── What's live (proof it's real) ──────────────────────

export const whatsLive = {
  eyebrow: "What's live right now",
  title: "This isn't a pitch deck. It's running code.",
  subtitle: "Built from scratch — blockchain, backend, SDK, explorer. All live on devnet.",
  items: [
    {
      title: "Omne blockchain",
      detail: "Custom Layer 1 producing blocks every 3 seconds. Live on devnet with 5 validator nodes.",
      link: { label: "Block explorer →", href: "https://omnescan.com" },
    },
    {
      title: "13 backend API modules",
      detail: "Auth, orders, custody, compliance, Stripe Connect, payouts, webhooks — all wired and tested.",
    },
    {
      title: "@omne/sdk on npm",
      detail: "Published TypeScript SDK with bech32m address encoding and ed25519 signing. Install it right now.",
      link: { label: "npm →", href: "https://www.npmjs.com/package/@omne/sdk" },
    },
    {
      title: "Merchant dashboard",
      detail: "See transactions, manage payment links, withdraw to your bank. Interactive demo available.",
      link: { label: "Try the demo →", href: "/demo" },
    },
    {
      title: "Phaylos wallet",
      detail: "Customer wallet for sending and receiving payments on the Omne network.",
      link: { label: "phaylos.xyz →", href: "https://phaylos.xyz" },
    },
    {
      title: "FinCEN MSB registered",
      detail: "Active Money Services Business registration. AML/BSA program in place. State licensing in progress.",
    },
  ],
};

// ── Contact (merchant-facing) ──────────────────────────

export const contactSection = {
  eyebrow: "Get started",
  title: "Want to try it?",
  subtitle: "We're onboarding our first merchants now. If you sell online and you're tired of card fees, let's talk.",
  channels: [
    {
      label: "Merchants",
      email: "greg@blox.capital",
      description: "Want to accept payments with Blox Pay? Email Greg directly.",
    },
    {
      label: "Builders",
      email: "greg@blox.capital",
      description: "Interested in joining early? We're looking for a merchant acquisition lead.",
    },
  ],
};

// ── Contact form topics ────────────────────────────────

export const contactTopics = [
  { label: "I want to accept payments", value: "merchant" },
  { label: "I want to join the team", value: "team" },
  { label: "I'm an investor", value: "investment" },
  { label: "Something else", value: "other" },
];

// ═══════════════════════════════════════════════════════
// INVESTOR PAGE CONTENT (preserved from original site)
// ═══════════════════════════════════════════════════════

export const investorHero = {
  title: "Commerce rails that clear the second customers tap",
  subtitle:
    "Blox Capital operates Blox Pay and Blox Wallet on Omne's audited settlement layer. Merchants keep the full checkout value, shoppers consent once, and licensing prep is already underway.",
  highlights: [
    "Trail of Bits audit engaged",
    "Sponsor-bank diligence active",
    "NY & CA filings queued post-raise",
  ],
  primaryCta: {
    label: "Request platform walkthrough",
    href: "mailto:partnerships@blox.capital?subject=Blox%20platform%20walkthrough%20request",
  },
  secondaryCta: {
    label: "Access compliance dossier",
    href: "mailto:compliance@blox.capital?subject=Compliance%20dossier%20access",
  },
  metrics: [
    {
      label: "Settlement target",
      value: "<500 ms",
      detail: "Omne finality benchmark for live transactions",
    },
    {
      label: "Checkout economics",
      value: "$20 → $20",
      detail: "Merchants retain face value; shopper network spend stays in cents",
    },
    {
      label: "Availability",
      value: "24/7",
      detail: "Operations, reporting, and support stay online across time zones",
    },
  ],
};

export const platformStory = {
  intro:
    "The Omne commerce blockchain was purpose-built for high-volume transactions. Blox Pay and Blox Wallet layer consent, settlement, and treasury controls so merchants can run zero-fee checkout with real-time visibility.",
  motions: [
    {
      title: "Consent once",
      body: "Customers authorize Blox Wallet in the background and stay in-app with one confirmation tap.",
    },
    {
      title: "Instant settlement",
      body: "Omne clears purchases in under half a second while Blox Capital burns OMC to cover network costs.",
    },
    {
      title: "Treasury in lockstep",
      body: "Funds post instantly, reconciliation stays current, and payouts can trigger whenever finance teams need them.",
    },
  ],
  valueDrivers: [
    {
      title: "Full-value checkout",
      copy: "Merchants retain every dollar while network fees stay off the P&L via Blox Capital's paymaster.",
    },
    {
      title: "Embedded compliance",
      copy: "AML/BSA, OFAC, and complaints playbooks align with state MTL requirements from day one.",
    },
    {
      title: "Pilot-ready stack",
      copy: "Wallets, SDKs, console, and partner integrations are staged for the pilot cohort post-raise.",
    },
    {
      title: "Treasury share model",
      copy: "Pooled FBO balances yield 4–5% APR; Blox splits the net with sponsor banks to monetize zero-fee rails.",
    },
  ],
};

export const roadmap = [
  {
    period: "Current",
    title: "Protocol + tooling",
    detail: "Omne devnet, Phaylos wallets, TypeScript SDK, and partner dashboards complete with monitoring hooks.",
  },
  {
    period: "Active",
    title: "Angel financing",
    detail: "Funds Trail of Bits audit kickoff, sponsor-bank execution, and NY/CA/MI filings via MU1.",
  },
  {
    period: "Post-raise",
    title: "Pilot cohort",
    detail: "Vertical SaaS and hospitality marketplace pilots launch once audits, banking, and first licenses clear.",
  },
  {
    period: "Forward",
    title: "Licensing expansion",
    detail: "NJ/IL/TX/WA/TN follow NY issuance; NV/OK/FL/DC file once Tier-1 states progress.",
  },
];

export const licensingStatus = [
  {
    jurisdiction: "FinCEN MSB",
    status: "Registered",
    detail: "Active MSB registration; enhanced BSA/AML controls mapped to MU1 disclosures.",
  },
  {
    jurisdiction: "New York BitLicense",
    status: "Drafting",
    detail: "Application narrative, governance exhibits, and cybersecurity attestation in progress.",
  },
  {
    jurisdiction: "California MTL",
    status: "Drafting",
    detail: "Security deposit modeling, DFPI outreach log, and Omne settlement description ready for submission.",
  },
  {
    jurisdiction: "Michigan MTL",
    status: "Pre-filing",
    detail: "Net-worth proof, permissible-investment schedule, and delegate agreements staged per Act 250.",
  },
  {
    jurisdiction: "New Jersey MTL",
    status: "Queued",
    detail: "DOBI requirements mapped; submission bundles once NY enters substantive review.",
  },
];

export const complianceDeck = [
  {
    label: "AML / KYC Program",
    updated: "Dec 2025",
    summary: "Customer identification, risk scoring, and continuous monitoring aligned to FFIEC manual.",
  },
  {
    label: "OFAC & Sanctions",
    updated: "Dec 2025",
    summary: "Real-time screening, escalation windows, and regulatory reporting obligations.",
  },
  {
    label: "Incident Response",
    updated: "Nov 2025",
    summary: "Security and operational incident classification with 24/7 on-call coverage.",
  },
  {
    label: "Consumer Disclosures",
    updated: "Oct 2025",
    summary: "Fee transparency, complaints workflow, and dispute resolution SLAs.",
  },
];

export const investorHighlights = {
  readiness:
    "Compiled GAAP financials, treasury ladder, and surety/bond quotes align with MU1 financial responsibility standards.",
  economics: [
    {
      label: "Vendor SaaS access",
      value: "$49.99 / merchant / mo",
      detail: "Blox Marketplace + Blox Pay suite once merchants are live.",
    },
    {
      label: "Treasury yield share",
      value: "~4–5% APR",
      detail: "Blox keeps 50% of net yield after sponsor bank split.",
    },
    {
      label: "GeoQuad ads",
      value: "Starts FY2029",
      detail: "Promoted posts, sponsored content, and campaigns once >150 merchants live.",
    },
  ],
  diligenceBullets: [
    "Trail of Bits audit scope approved; kickoff upon angel close.",
    "Sponsor-bank term sheet in diligence with FBO onboarding artifacts drafted.",
    "Policy stack (AML/BSA, OFAC, complaints, safeguarding) refreshed for 2026 filings.",
  ],
};

export const updateFeed = [
  {
    date: "Apr 2026",
    title: "@omne/sdk v1.0.0 published to npm",
    detail: "TypeScript SDK with bech32m address encoding, ed25519 signing, and full test coverage shipped to npm.",
  },
  {
    date: "Apr 2026",
    title: "om1z address migration complete",
    detail: "Entire codebase migrated to om1z bech32m addresses. 514 Rust tests passing, zero legacy references.",
  },
  {
    date: "Jan 2026",
    title: "MU1 groundwork pushed to source control",
    detail: "Michigan, New York, and California annex drafts committed with citations for each statutory requirement.",
  },
];

export const investorContactChannels = [
  {
    label: "Partnerships & Pilots",
    email: "partnerships@blox.capital",
    description: "Merchants, SaaS platforms, and PSPs ready to explore zero-fee checkout.",
  },
  {
    label: "Investors & Strategy",
    email: "greg@blox.capital",
    description: "Capital partners, diligence requests, and roadmap conversations.",
  },
  {
    label: "Regulators & Compliance",
    email: "compliance@blox.capital",
    description: "Licensing, examinations, and document vault access under NDA.",
  },
];

export const investorContactTopics = [
  { label: "Pilot / Merchant Integration", value: "pilot" },
  { label: "Investment / Financing", value: "investment" },
  { label: "Regulatory / Licensing", value: "regulatory" },
  { label: "Press / Speaking", value: "press" },
];

export const dataRoomSteps = [
  "Submit an NDA request with the compliance team",
  "Receive secure Vault link with time-boxed access",
  "Review policies, financials, and licensing exhibits",
  "Schedule follow-up with the responsible executive",
];
