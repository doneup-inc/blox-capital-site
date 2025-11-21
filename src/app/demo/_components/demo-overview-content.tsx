"use client";

import { FinalityTimeline } from "./finality-timeline";
import { MetricCard } from "./metric-card";
import { useDemoScenario } from "../demo-scenario-context";

export function DemoOverviewContent() {
  const { snapshot } = useDemoScenario();
  const { merchantProfile, metrics } = snapshot;
  const finalityMetric = metrics.find((metric) => metric.key === "settlementLatency");
  const averageTicketMetric = metrics.find((metric) => metric.key === "averageTicket");

  return (
    <section className="space-y-10">
      <header className="console-header">
        <div>
          <p className="badge badge-secondary">{merchantProfile.environment}</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">{merchantProfile.name}</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-300/80">
            Monitoring Omne-powered checkouts for the {merchantProfile.name} cohort operating in {merchantProfile.vertical}.
            Walkthrough showcases settlement speed, wallet health, and payout readiness with production-aligned
            identifiers rendered statically for review.
          </p>
        </div>
        <div className="glass-panel rounded-2xl p-4 text-sm text-slate-200/80">
          <p className="mono-label text-slate-400">Demo contact</p>
          <p>{merchantProfile.contactEmail}</p>
          <p className="mt-3 mono-label text-slate-400">Timezone</p>
          <p>{merchantProfile.timezone}</p>
        </div>
      </header>

      <div className="metrics-grid">
        {metrics.map((metric) => (
          <MetricCard key={metric.key} metric={metric} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <FinalityTimeline finalityLabel={finalityMetric?.value} />
        <div className="glass-panel rounded-2xl p-6">
          <p className="mono-label text-slate-300/70">Zero-fee economics snapshot</p>
          <div className="mt-5 space-y-4 text-sm">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <p className="text-slate-300/80">Ticket value (Blox Pay)</p>
              <p className="text-lg font-semibold text-white">{averageTicketMetric?.value ?? "$0.00"}</p>
            </div>
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <p className="text-slate-300/80">Network fees (Omne)</p>
              <p className="text-lg font-semibold text-emerald-300">$0.00</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-slate-300/80">Merchant net</p>
              <p className="text-lg font-semibold text-white">{averageTicketMetric?.value ?? "$0.00"}</p>
            </div>
            <p className="text-xs text-slate-400">
              Traditional card rails comparison: $3.34 fees + 0.3% interchange. Demonstration retains full ticket value in
              alignment with Omne settlement results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
