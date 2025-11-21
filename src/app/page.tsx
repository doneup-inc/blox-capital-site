import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Platform", href: "#platform" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Compliance", href: "#compliance" },
  { label: "Contact", href: "#contact" },
];

const heroHighlights = [
  "Trail of Bits audit engaged",
  "Sponsor-bank diligence active",
  "NYC pilot cohort staged post-raise",
];

const heroMetrics = [
  {
    label: "Settlement target",
    value: "<500 ms",
    detail: "Omne finality benchmark for live transactions",
  },
  {
    label: "Checkout economics",
    value: "$20 → $20",
    detail: "Merchants receive face value; shopper network cost stays in cents",
  },
  {
    label: "Availability",
    value: "24/7",
    detail: "Operations, reporting, and support stay online",
  },
];

const howItWorks = [
  {
    step: "Consent once",
    description:
      "Blox Wallet provisions in the background; shoppers tap to confirm and keep moving.",
  },
  {
    step: "Settle immediately",
    description:
      "Omne processes the purchase in under half a second with network fees measured in cents.",
  },
  {
    step: "Stay in sync",
    description:
      "Merchant funds post instantly, controls update in real time, and treasury tools remain ready whenever they are needed.",
  },
];

const valueDrivers = [
  {
    title: "Full-value checkout",
    copy: "Merchants retain the entire ticket price while shopper network costs remain negligible.",
  },
  {
    title: "Instant operations",
    copy: "Payouts, reconciliation, and dashboards move with each transaction—no T+2 backlog.",
  },
  {
    title: "Embedded compliance",
    copy: "Licensing roadmap, AML/OFAC playbooks, and audit partners are built into the operating plan from day one.",
  },
  {
    title: "Pilot-ready stack",
    copy: "Wallets, SDKs, and partner tooling are complete; NYC merchants are in diligence pending the raise and regulatory milestones.",
  },
];

const roadmapItems = [
  {
    title: "In build",
    period: "Current",
    detail:
      "Omne protocol (launch-ready), Beacon wallets, TypeScript SDK, and partner dashboards.",
  },
  {
    title: "Angel round",
    period: "Active",
    detail:
      "Funds Trail of Bits audit kickoff, sponsor-bank execution, and MSB/BitLicense/MTR submissions.",
  },
  {
    title: "Pilot cohort",
    period: "Post-raise",
    detail:
      "Two NYC merchants (vertical SaaS and hospitality marketplace) launch Blox Pay after audit and banking paper finalize.",
  },
  {
    title: "Next",
    period: "Forward plan",
    detail:
      "Broaden partner integrations and expand multi-jurisdiction licensing once pilots validate.",
  },
];

const licenses = [
  {
    jurisdiction: "FinCEN MSB Registration",
    status: "Scoping",
    id: "Submission planned post compliance framework sign-off",
    effective: "Target filing window Q1 2026",
    contact: "FinCEN | BSA E-Filing",
  },
  {
    jurisdiction: "New York BitLicense",
    status: "Not Filed",
    id: "Application drafting in progress",
    effective: "Pending submission",
    contact: "NYDFS Virtual Currency Unit",
  },
  {
    jurisdiction: "California Money Transmitter License",
    status: "Not Filed",
    id: "Application drafting in progress",
    effective: "Pending submission",
    contact: "DFPI Payments Oversight",
  },
  {
    jurisdiction: "New Jersey Money Transmitter License",
    status: "Not Filed",
    id: "Application drafting in progress",
    effective: "Pending submission",
    contact: "DOBI Licensing",
  },
];

const complianceDocs = [
  {
    label: "AML / KYC Program",
    description: "Policy for customer identification, risk scoring, and ongoing monitoring.",
  },
  {
    label: "OFAC & Sanctions Procedure",
    description: "Screening cadence, escalation thresholds, and reporting obligations.",
  },
  {
    label: "Consumer Disclosures",
    description: "Customer agreements, fee disclosures, and dispute workflow overview.",
  },
  {
    label: "Incident Response Playbook",
    description: "Security and operational incident classification with 24/7 escalation path.",
  },
];

const contactChannels = [
  {
    label: "Partnerships & Pilots",
    email: "partnerships@blox.capital",
    note: "Merchants, platforms, and technology partners exploring Blox Pay or Blox Wallet.",
  },
  {
    label: "Strategic & Investors",
    email: "greg@blox.capital",
    note: "Capital partners, diligence requests, and roadmap conversations.",
  },
  {
    label: "Regulators & Compliance",
    email: "compliance@blox.capital",
    note: "Licensing, examinations, and documentation access under NDA.",
  },
  {
    label: "Rapid Response",
    email: "https://wa.me/13477534792",
    note: "WhatsApp priority line for time-sensitive coordination.",
    isExternal: true,
  },
];

const statusStyles: Record<string, CSSProperties> = {
  Active: {
    backgroundColor: "hsla(var(--accent-secondary), 0.2)",
    color: "hsl(var(--accent-secondary))",
    borderColor: "hsla(var(--accent-secondary), 0.45)",
  },
  Filed: {
    backgroundColor: "hsla(var(--accent-tertiary), 0.2)",
    color: "hsl(var(--accent-tertiary))",
    borderColor: "hsla(var(--accent-tertiary), 0.45)",
  },
  "In Diligence": {
    backgroundColor: "hsla(var(--accent-primary), 0.2)",
    color: "hsl(var(--accent-primary))",
    borderColor: "hsla(var(--accent-primary), 0.45)",
  },
  Scoping: {
    backgroundColor: "hsla(var(--accent-secondary), 0.12)",
    color: "hsl(var(--accent-secondary))",
    borderColor: "hsla(var(--accent-secondary), 0.35)",
  },
  "Not Filed": {
    backgroundColor: "rgba(148, 163, 184, 0.12)",
    color: "rgba(226, 232, 240, 0.75)",
    borderColor: "rgba(148, 163, 184, 0.35)",
  },
};

const defaultStatusStyle: CSSProperties = {
  backgroundColor: "rgba(148, 163, 184, 0.2)",
  color: "rgba(226, 232, 240, 0.85)",
  borderColor: "rgba(148, 163, 184, 0.35)",
};

function StatusBadge({ status }: { status: string }) {
  const style = statusStyles[status] ?? defaultStatusStyle;
  return (
    <span className="status-badge mono-label text-[0.7rem]" style={style}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
      {status}
    </span>
  );
}

export default function Home() {
  return (
    <div className="relative overflow-hidden pb-20">
      <header className="sticky top-0 z-40 border-b border-white/5 bg-slate-950/88 backdrop-blur-xl">
        <div className="section-container">
          <div className="flex h-20 w-full items-center gap-6">
            <div className="flex-shrink-0">
              <Image
                src="/assets/blox-capital-wordmark.png"
                alt="Blox Capital wordmark"
                width={320}
                height={84}
                priority
                sizes="(min-width: 1200px) 280px, (min-width: 900px) 260px, (min-width: 600px) 220px, 180px"
                className="logo-wordmark"
              />
            </div>
            <nav className="hidden flex-1 items-center justify-center gap-6 text-sm font-medium text-slate-200 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href="mailto:compliance@blox.capital?subject=Compliance%20dossier%20access"
              className="cta-secondary whitespace-nowrap"
            >
              Request compliance access
            </Link>
          </div>
        </div>
      </header>

      <main className="space-y-32 pt-12">
        <section
          id="overview"
          className="section-container hero-shell grid gap-12 rounded-3xl border border-white/10 bg-white/[0.02] p-10 md:grid-cols-[1.2fr_1fr] md:items-center"
        >
          <div className="space-y-8">
            <span className="badge badge--secondary mono-label">
              <span className="accent-dot accent-dot--secondary" aria-hidden />
              Commerce infrastructure, diligence-ready
            </span>
            <h1 className="section-heading text-slate-50">Payments that keep pace with your product.</h1>
            <p className="tagline max-w-2xl text-slate-200">
              Blox Capital operates Blox Pay and Blox Wallet on the Omne commerce blockchain. Merchants receive
              their full checkout value in real time, shoppers tap once to confirm, and the regulatory groundwork
              is already in motion.
            </p>
            <div className="flex flex-wrap gap-2 text-sm text-slate-100/80">
              {heroHighlights.map((item) => (
                <span
                  key={item}
                  className="glass-panel inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.12em]"
                >
                  <span className="accent-dot accent-dot--secondary" aria-hidden />
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="mailto:partnerships@blox.capital?subject=Blox%20platform%20walkthrough%20request"
                className="cta-primary"
              >
                Request the platform walkthrough
              </Link>
              <Link
                href="mailto:compliance@blox.capital?subject=Compliance%20dossier%20access"
                className="cta-secondary"
              >
                Access the compliance dossier
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            {heroMetrics.map((metric) => (
              <div
                key={metric.label}
                className="glass-panel rounded-3xl border border-white/10 p-6 shadow-[0_0_1px_rgba(255,255,255,0.2)]"
              >
                <p className="mono-label text-xs text-slate-300/80">{metric.label}</p>
                <p className="mt-3 text-4xl font-semibold tracking-tight text-white">{metric.value}</p>
                <p className="mt-2 text-sm text-slate-300/90">{metric.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="platform" className="section-container space-y-14">
          <div className="space-y-4">
            <p className="mono-label">How the platform operates</p>
            <h2 className="section-heading text-slate-50">
              Blox keeps checkout effortless and operations immediate.
            </h2>
            <p className="max-w-3xl text-base text-slate-300/90">
              The Omne commerce blockchain was engineered for commerce-scale performance. Blox Pay and Blox Wallet
              use it to streamline consent flows, settle purchases instantly, and leave treasury controls ready whenever
              teams need them.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {howItWorks.map((item) => (
              <div
                key={item.step}
                className="glass-panel rounded-3xl border border-white/10 p-7"
              >
                <p className="mono-label text-xs text-slate-300/90">{item.step}</p>
                <p className="mt-4 text-base text-slate-100/90">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {valueDrivers.map((driver) => (
              <div
                key={driver.title}
                className="glass-panel rounded-3xl border border-white/10 p-7"
              >
                <p className="text-lg font-semibold text-white">{driver.title}</p>
                <p className="mt-3 text-sm text-slate-300/90">{driver.copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="roadmap" className="section-container space-y-10">
          <div className="flex flex-col gap-3">
            <p className="mono-label">Roadmap snapshot</p>
            <h2 className="section-heading text-slate-50">Built with pilots in sight, licensing in motion.</h2>
            <p className="max-w-3xl text-base text-slate-300/90">
              Every milestone focuses on turning the zero-fee checkout story into live merchant deployments without
              compromising diligence expectations from banks or regulators.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {roadmapItems.map((item) => (
              <div
                key={item.title}
                className="glass-panel rounded-3xl border border-white/10 p-7"
              >
                <div className="flex items-center justify-between">
                  <p className="mono-label text-xs text-slate-300/80">{item.period}</p>
                  <span className="accent-dot accent-dot--primary" aria-hidden />
                </div>
                <p className="mt-4 text-xl font-semibold text-white">{item.title}</p>
                <p className="mt-3 text-sm text-slate-300/90">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="compliance" className="section-container space-y-10">
          <div className="flex flex-col gap-3">
            <p className="mono-label">Compliance & governance</p>
            <h2 className="section-heading text-slate-50">
              Documentation that travels from diligence to deployment.
            </h2>
            <p className="max-w-3xl text-base text-slate-300/90">
              Blox Capital maintains regulator-ready playbooks across AML/KYC, OFAC, incident response, and consumer
              disclosures. Full materials are available under NDA, alongside the licensing roadmap below.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {complianceDocs.map((doc) => (
              <div
                key={doc.label}
                className="glass-panel rounded-3xl border border-white/10 p-7"
              >
                <p className="text-lg font-semibold text-white">{doc.label}</p>
                <p className="mt-3 text-sm text-slate-300/90">{doc.description}</p>
                <p className="mt-5 text-xs text-slate-400">
                  Latest update: 2025 governance cycle · Controlled via secure document vault
                </p>
              </div>
            ))}
          </div>
          <details className="glass-panel overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-0 text-sm text-slate-200">
            <summary className="cursor-pointer list-none px-6 py-5 text-base font-semibold text-white">
              View licensing roadmap
            </summary>
            <div className="overflow-x-auto border-t border-white/10">
              <table className="min-w-full divide-y divide-white/5">
                <thead className="bg-white/5 text-left text-xs uppercase tracking-[0.2em] text-slate-300">
                  <tr>
                    <th className="px-6 py-4">Jurisdiction / License</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Reference</th>
                    <th className="px-6 py-4">Effective</th>
                    <th className="px-6 py-4">Oversight</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-200/80">
                  {licenses.map((license) => (
                    <tr key={license.jurisdiction} className="hover:bg-white/4">
                      <td className="px-6 py-4 text-sm font-medium text-slate-100">
                        {license.jurisdiction}
                      </td>
                      <td className="px-6 py-4">
                        <StatusBadge status={license.status} />
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-300/90">{license.id}</td>
                      <td className="px-6 py-4 text-sm text-slate-300/80">{license.effective}</td>
                      <td className="px-6 py-4 text-sm text-slate-300/80">{license.contact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>
          <div className="glass-panel rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300/90">
            <p className="font-semibold text-white">Documentation access</p>
            <p className="mt-2">
              Request encrypted delivery or secure portal access via{" "}
              <Link
                href="mailto:compliance@blox.capital?subject=Compliance%20dossier%20access"
                className="font-medium text-white underline decoration-white/40 decoration-2 underline-offset-4 transition-opacity hover:opacity-80"
              >
                compliance@blox.capital
              </Link>{" "}
              with the diligence track or document set you need to review.
            </p>
          </div>
        </section>

        <section id="contact" className="section-container space-y-10">
          <div className="flex flex-col gap-3">
            <p className="mono-label">Get in touch</p>
            <h2 className="section-heading text-slate-50">Talk to the team that is building the stack.</h2>
            <p className="max-w-3xl text-base text-slate-300/90">
              Blox Capital runs partnerships, diligence, and pilot coordination directly. Reach out with the context
              you have—merchant, regulatory, or investment—and we will put the right people on the call.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {contactChannels.map((channel) => {
              const href = channel.isExternal ? channel.email : `mailto:${channel.email}`;
              const ctaLabel = channel.isExternal ? "Open WhatsApp line" : channel.email;
              return (
                <div key={channel.label} className="glass-panel rounded-3xl border border-white/10 p-7">
                  <p className="text-lg font-semibold text-white">{channel.label}</p>
                  <p className="mt-3 text-sm text-slate-300/90">{channel.note}</p>
                  <Link
                    href={href}
                    prefetch={false}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white underline decoration-white/40 decoration-2 underline-offset-4 transition-opacity hover:opacity-80"
                    target={channel.isExternal ? "_blank" : undefined}
                    rel={channel.isExternal ? "noopener noreferrer" : undefined}
                  >
                    {ctaLabel}
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="glass-panel rounded-3xl border border-white/10 bg-white/[0.03] p-7 text-xs text-slate-400">
            <p>
              Blox Capital oversees Blox Pay and Blox Wallet. Omne blockchain infrastructure supports settlement,
              custody, and compliance automation. Nothing here is an offer or solicitation to sell securities.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-slate-950/90 py-10 text-sm text-slate-400">
        <div className="section-container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.2em] text-slate-500">
            <span>Blox Capital</span>
            <span className="hidden h-1 w-1 rounded-full bg-slate-700 md:inline-block" aria-hidden />
            <span>Commerce infrastructure</span>
          </div>
          <nav className="flex flex-wrap gap-4 text-xs text-slate-400">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition-opacity hover:opacity-80">
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="mailto:greg@blox.capital?subject=Investor%20or%20partner%20intro"
            className="text-xs font-medium text-white underline decoration-white/30 decoration-2 underline-offset-4 transition-opacity hover:opacity-80"
          >
            Direct line: greg@blox.capital
          </Link>
        </div>
      </footer>
    </div>
  );
}
