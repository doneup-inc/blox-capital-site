"use client";

import { feeMath } from "@/content/site";
import { SectionShell } from "./section-shell";

export function FeeSavings() {
  return (
    <SectionShell
      id="the-math"
      eyebrow={feeMath.eyebrow}
      title={feeMath.title}
      description={feeMath.subtitle}
      className="section-aura section-aura--glow"
    >
      <div className="space-y-8">
        {/* Comparison table */}
        <div className="glass-panel rounded-3xl border border-white/10 overflow-hidden">
          <div className="fee-table-header">
            <div className="fee-table-cell fee-table-cell--label">Sale</div>
            <div className="fee-table-cell">Price</div>
            <div className="fee-table-cell fee-table-cell--bad">Card fee</div>
            <div className="fee-table-cell fee-table-cell--bad">% lost</div>
            <div className="fee-table-cell fee-table-cell--good">Blox fee</div>
          </div>
          {feeMath.comparisons.map((row) => (
            <div key={row.item} className="fee-table-row">
              <div className="fee-table-cell fee-table-cell--label">{row.item}</div>
              <div className="fee-table-cell">${row.price.toFixed(2)}</div>
              <div className="fee-table-cell fee-table-cell--bad">
                −${row.cardFee.toFixed(2)}
              </div>
              <div className="fee-table-cell fee-table-cell--bad">{row.cardPercent}</div>
              <div className="fee-table-cell fee-table-cell--good">$0.00</div>
            </div>
          ))}
        </div>

        {/* Annual savings callout */}
        <div className="savings-callout">
          <p className="mono-label text-slate-400">{feeMath.annualSavings.label}</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="savings-stat">
              <p className="text-sm text-slate-400">Card processors take</p>
              <p className="text-2xl font-bold text-red-400">{feeMath.annualSavings.cardCost}</p>
            </div>
            <div className="savings-stat">
              <p className="text-sm text-slate-400">Blox Pay takes</p>
              <p className="text-2xl font-bold text-emerald-400">{feeMath.annualSavings.bloxCost}</p>
            </div>
            <div className="savings-stat savings-stat--highlight">
              <p className="text-sm text-slate-200">You save</p>
              <p className="text-2xl font-bold text-white">{feeMath.annualSavings.savings}</p>
            </div>
          </div>
          <p className="mt-4 text-xs text-slate-500">{feeMath.footnote}</p>
        </div>
      </div>
    </SectionShell>
  );
}
