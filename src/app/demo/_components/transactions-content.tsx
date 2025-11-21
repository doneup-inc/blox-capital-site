"use client";

import { useDemoScenario } from "../demo-scenario-context";

export function TransactionsContent() {
  const { snapshot } = useDemoScenario();
  const { transactions } = snapshot;

  return (
    <section className="space-y-8">
      <header className="console-header">
        <div>
          <p className="badge badge-secondary">Settlement feed</p>
          <h2 className="text-3xl font-semibold text-white">Recent transactions</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-300/80">
            Simulated Omne settlements showing wallet finality, shopper handles, and hash references. Identifiers mirror
            production naming (txHash, settlementHeight) while values remain deterministic for this static walkthrough.
          </p>
        </div>
      </header>

      <div className="glass-panel overflow-hidden rounded-2xl">
        <table className="min-w-full divide-y divide-white/10 text-sm">
          <thead className="bg-white/5 text-xs uppercase tracking-[0.2em] text-slate-300/70">
            <tr>
              <th className="px-5 py-4 text-left">Transaction ID</th>
              <th className="px-5 py-4 text-left">Shopper</th>
              <th className="px-5 py-4 text-right">Amount</th>
              <th className="px-5 py-4 text-left">Channel</th>
              <th className="px-5 py-4 text-left">Status</th>
              <th className="px-5 py-4 text-left">Settlement hash</th>
              <th className="px-5 py-4 text-left">Height</th>
              <th className="px-5 py-4 text-left">Latency</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 text-slate-200/80">
            {transactions.map((txn) => (
              <tr key={txn.id} className="hover:bg-white/5">
                <td className="px-5 py-4 font-semibold text-white">{txn.id}</td>
                <td className="px-5 py-4">@{txn.shopperHandle}</td>
                <td className="px-5 py-4 text-right font-medium text-white">
                  {txn.amount.toLocaleString("en-US", { style: "currency", currency: txn.currency })}
                </td>
                <td className="px-5 py-4 capitalize">{txn.channel.replace("-", " ")}</td>
                <td className="px-5 py-4">
                  <span className="badge badge-primary">{txn.status}</span>
                </td>
                <td className="px-5 py-4 font-mono text-xs text-slate-300/80">{txn.settlementHash}</td>
                <td className="px-5 py-4 font-mono text-xs text-slate-300/80">{txn.settlementHeight}</td>
                <td className="px-5 py-4 font-mono text-xs text-emerald-300">
                  {txn.status === "Settled" ? `${txn.finalityMs}ms` : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
