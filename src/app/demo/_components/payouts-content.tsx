"use client";

import { Mail } from "lucide-react";
import { useDemoScenario } from "../demo-scenario-context";

export function PayoutsContent() {
  const { snapshot } = useDemoScenario();
  const { payouts, payoutDestinations, payoutConfig } = snapshot;
  const destinationLookup = new Map(payoutDestinations.map((destination) => [destination.id, destination] as const));

  return (
    <section className="space-y-8">
      <header className="console-header">
        <div>
          <p className="badge badge-secondary">Cash out</p>
          <h2 className="text-3xl font-semibold text-white">ACH payout orchestration</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-300/80">
            Each payout triggers a simulated email notification to finance stakeholders, illustrating how settlement
            transparency is maintained without wiring funds. Trace IDs and Omne withdrawal hashes mirror production
            naming conventions.
          </p>
        </div>
        <div className="glass-panel rounded-2xl p-4 text-sm text-slate-200/80">
          <p className="mono-label text-slate-400">Notification channel</p>
          <p className="flex items-center gap-2 text-white">
            <Mail className="h-4 w-4" aria-hidden /> {payoutConfig.notificationEmail}
          </p>
          <p className="mt-3 text-xs text-slate-400">
            Static payload matches the webhook structure shown during diligence while remaining email-only in this demo.
          </p>
        </div>
      </header>

      <div className="glass-panel overflow-hidden rounded-2xl">
        <table className="min-w-full divide-y divide-white/10 text-sm">
          <thead className="bg-white/5 text-xs uppercase tracking-[0.2em] text-slate-300/70">
            <tr>
              <th className="px-5 py-4 text-left">Payout ID</th>
              <th className="px-5 py-4 text-left">Destination</th>
              <th className="px-5 py-4 text-right">Amount</th>
              <th className="px-5 py-4 text-left">Status</th>
              <th className="px-5 py-4 text-left">Initiated</th>
              <th className="px-5 py-4 text-left">Completed</th>
              <th className="px-5 py-4 text-left">Trace ID</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 text-slate-200/80">
            {payouts.map((payout) => {
              const destination = destinationLookup.get(payout.destinationId);
              const destinationLabel = destination
                ? `${destination.nickname} · ${destination.bankName} ••••${destination.accountLast4}`
                : "Destination removed";

              return (
                <tr key={payout.id} className="hover:bg-white/5">
                  <td className="px-5 py-4 font-semibold text-white">{payout.id}</td>
                  <td className="px-5 py-4">{destinationLabel}</td>
                  <td className="px-5 py-4 text-right font-medium text-white">
                    {payout.amount.toLocaleString("en-US", { style: "currency", currency: "USD" })}
                  </td>
                  <td className="px-5 py-4">
                    <span className="badge badge-primary">{payout.status}</span>
                  </td>
                  <td className="px-5 py-4 font-mono text-xs text-slate-300/80">
                    {new Date(payout.initiatedAt).toLocaleString("en-US", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </td>
                  <td className="px-5 py-4 font-mono text-xs text-slate-300/80">
                    {payout.completedAt
                      ? new Date(payout.completedAt).toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" })
                      : "—"}
                  </td>
                  <td className="px-5 py-4 font-mono text-xs text-slate-300/80">{payout.traceId}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="glass-panel rounded-2xl p-6 text-sm text-slate-200/80">
        <p className="mono-label text-slate-400">Email simulation</p>
        <p>
          During live walkthroughs we showcase the rendered notification payload for each payout. This static marketing
          route keeps the same narrative without relying on browser storage or API calls.
        </p>
      </div>
    </section>
  );
}
