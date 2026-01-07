import { investorHighlights } from "@/content/site";
import { SectionShell } from "./section-shell";

export function InvestorPanel() {
  return (
    <SectionShell
      id="investors"
      eyebrow="Investor readiness"
      title="Financial controls and monetization levers are audit-ready"
      description={investorHighlights.readiness}
      className="section-aura section-aura--mesh"
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-panel panel-cool rounded-3xl border border-white/10 p-6">
          <p className="mono-label mb-3">Economics snapshot</p>
          <div className="space-y-4">
            {investorHighlights.economics.map((item) => (
              <div key={item.label} className="economics-row">
                <div>
                  <p className="text-base font-semibold panel-heading">{item.label}</p>
                  <p className="text-sm panel-copy">{item.detail}</p>
                </div>
                <p className="text-base font-medium panel-value">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-panel rounded-3xl border border-white/10 p-6">
          <p className="mono-label mb-3">Diligence queue</p>
          <ul className="space-y-3 text-sm text-slate-200/85">
            {investorHighlights.diligenceBullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span className="accent-dot accent-dot--secondary mt-1" aria-hidden />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}
