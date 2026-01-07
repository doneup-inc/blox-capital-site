import Image from "next/image";
import Link from "next/link";
import { navSections } from "@/content/site";
import { Hero } from "./_components/hero";
import { PlatformOverview } from "./_components/platform-overview";
import { RoadmapTimeline } from "./_components/roadmap-timeline";
import { ComplianceStack } from "./_components/compliance-stack";
import { InvestorPanel } from "./_components/investor-panel";
import { UpdateFeed } from "./_components/update-feed";
import { ContactHub } from "./_components/contact-hub";
import { getLicensingEntries, getGroundworkUpdates } from "@/lib/mu-data";

export default function Home() {
  const licensingItems = getLicensingEntries();
  const updates = getGroundworkUpdates();

  return (
    <div className="relative overflow-hidden pb-24">
      <SiteHeader />
      <main className="space-y-32 pt-16">
        <Hero />
        <PlatformOverview />
        <RoadmapTimeline />
        <ComplianceStack licensingItems={licensingItems} />
        <InvestorPanel />
        <UpdateFeed entries={updates} />
        <ContactHub />
      </main>
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-slate-950/90 backdrop-blur-2xl">
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
            {navSections.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden sm:flex">
            <Link
              href="mailto:compliance@blox.capital?subject=Compliance%20dossier%20access"
              className="cta-secondary inline-flex items-center whitespace-nowrap"
            >
              Request compliance access
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-slate-950/90 py-10 text-sm text-slate-400">
      <div className="section-container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.2em] text-slate-500">
          <span>Blox Capital</span>
          <span className="hidden h-1 w-1 rounded-full bg-slate-700 md:inline-block" aria-hidden />
          <span>Commerce infrastructure</span>
        </div>
        <nav className="flex flex-wrap gap-4 text-xs text-slate-400">
          {navSections.map((item) => (
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
  );
}
