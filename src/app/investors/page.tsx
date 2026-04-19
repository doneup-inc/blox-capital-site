import Image from "next/image";
import Link from "next/link";
import {
  investorHero,
  investorNavSections,
  investorContactChannels,
  investorContactTopics,
  dataRoomSteps,
} from "@/content/site";
import { PlatformOverview } from "../_components/platform-overview";
import { RoadmapTimeline } from "../_components/roadmap-timeline";
import { ComplianceStack } from "../_components/compliance-stack";
import { InvestorPanel } from "../_components/investor-panel";
import { UpdateFeed } from "../_components/update-feed";
import { InvestorContact } from "./_components/investor-contact";
import { InvestorHero } from "./_components/investor-hero";
import { getLicensingEntries, getGroundworkUpdates } from "@/lib/mu-data";

export const metadata = {
  title: "Blox Capital — Investor & Compliance Portal",
  description:
    "Regulated commerce infrastructure. Compliance dossiers, licensing status, and investor materials for Blox Capital.",
};

export default function InvestorsPage() {
  const licensingItems = getLicensingEntries();
  const updates = getGroundworkUpdates();

  return (
    <div className="relative overflow-hidden pb-24">
      <InvestorHeader />
      <main className="space-y-32 pt-16">
        <InvestorHero />
        <PlatformOverview />
        <RoadmapTimeline />
        <ComplianceStack licensingItems={licensingItems} />
        <InvestorPanel />
        <UpdateFeed entries={updates} />
        <InvestorContact />
      </main>
      <InvestorFooter />
    </div>
  );
}

function InvestorHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-slate-950/90 backdrop-blur-2xl">
      <div className="section-container">
        <div className="flex h-20 w-full items-center gap-6">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/assets/blox-capital-wordmark.png"
                alt="Blox Capital wordmark"
                width={320}
                height={84}
                priority
                sizes="(min-width: 1200px) 280px, (min-width: 900px) 260px, (min-width: 600px) 220px, 180px"
                className="logo-wordmark"
              />
            </Link>
          </div>
          <nav className="hidden flex-1 items-center justify-center gap-6 text-sm font-medium text-slate-200 md:flex">
            {investorNavSections.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden gap-3 sm:flex">
            <Link
              href="/"
              className="inline-flex items-center whitespace-nowrap text-sm text-slate-400 transition-colors hover:text-white"
            >
              ← Merchant site
            </Link>
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

function InvestorFooter() {
  return (
    <footer className="border-t border-white/5 bg-slate-950/90 py-10 text-sm text-slate-400">
      <div className="section-container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.2em] text-slate-500">
          <span>Blox Capital</span>
          <span className="hidden h-1 w-1 rounded-full bg-slate-700 md:inline-block" aria-hidden />
          <span>Regulated commerce infrastructure</span>
        </div>
        <nav className="flex flex-wrap gap-4 text-xs text-slate-400">
          <Link href="/" className="transition-opacity hover:opacity-80">
            Merchant site
          </Link>
          <Link href="/demo" className="transition-opacity hover:opacity-80">
            Demo
          </Link>
          {investorNavSections.map((item) => (
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
