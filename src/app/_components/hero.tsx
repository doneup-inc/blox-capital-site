import Link from "next/link";
import Image from "next/image";
import { hero as heroContent } from "@/content/site";

export function Hero() {
  return (
    <section id="overview" className="section-container hero-shell grid gap-12 rounded-[32px] border border-white/10 bg-white/5/80 p-10 md:grid-cols-[1.15fr_0.85fr] md:items-center">
      <div className="space-y-8">
        <span className="badge badge--secondary">
          <span className="accent-dot accent-dot--secondary" aria-hidden />
          Commerce infrastructure • diligence-ready
        </span>
        <h1 className="hero-heading">{heroContent.title}</h1>
        <p className="tagline">{heroContent.subtitle}</p>
        <div className="flex flex-wrap gap-2 text-sm text-slate-100/80">
          {heroContent.highlights.map((item) => (
            <span key={item} className="highlight-pill">
              <span className="accent-dot accent-dot--secondary" aria-hidden />
              {item}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href={heroContent.primaryCta.href} className="cta-primary">
            {heroContent.primaryCta.label}
          </Link>
          <Link href={heroContent.secondaryCta.href} className="cta-secondary">
            {heroContent.secondaryCta.label}
          </Link>
        </div>
      </div>
      <div className="space-y-5">
        <div className="glass-panel rounded-3xl border border-white/10 p-6 text-center">
          <p className="mono-label mb-2">Blox Capital</p>
          <Image
            src="/assets/blox-capital-wordmark.png"
            width={320}
            height={84}
            alt="Blox Capital wordmark"
            className="mx-auto h-auto w-10/12 max-w-xs"
            priority
          />
          <p className="mt-4 text-sm text-slate-200/85">
            Regulated subsidiary of DoneUp, Inc. operating Blox Pay and Blox Wallet on the Omne commerce blockchain.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {heroContent.metrics.map((metric) => (
            <div key={metric.label} className="metric-card">
              <p className="mono-label text-[0.65rem] text-slate-300/80">{metric.label}</p>
              <p className="text-3xl font-semibold tracking-tight text-white">{metric.value}</p>
              <p className="text-xs text-slate-300/90">{metric.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
