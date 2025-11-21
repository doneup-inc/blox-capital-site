"use client";

import { useDemoScenario } from "../demo-scenario-context";

const CURRENCY_FORMAT: Intl.NumberFormatOptions = { style: "currency", currency: "USD" };

export function WalletContent() {
  const { snapshot } = useDemoScenario();
  const { merchantProfile, walletLedger } = snapshot;

  const availableBalance = walletLedger
    .filter((entry) => entry.postingType === "Credit")
    .reduce((acc, entry) => acc + entry.amount, 0);

  const reservedBalance = walletLedger
    .filter((entry) => entry.postingType === "Debit")
    .reduce((acc, entry) => acc + entry.amount, 0);

  return (
    <section className="space-y-8">
      <header className="console-header">
        <div>
          <p className="badge badge-secondary">Wallet telemetry</p>
          <h2 className="text-3xl font-semibold text-white">{merchantProfile.name} wallet overview</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-300/80">
            Ledger entries mirror Omne blockchain nomenclature (omneBlock, settlementHeight). Values are simulated but
            deterministic, ensuring the walkthrough aligns with production data structures without requiring live APIs.
          </p>
        </div>
        <div className="glass-panel rounded-2xl p-4 text-sm">
          <p className="mono-label text-slate-400">Linked merchant</p>
          <p className="text-white">{merchantProfile.name}</p>
          <p className="mono-label mt-4 text-slate-400">Environment</p>
          <p>{merchantProfile.environment}</p>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="glass-panel rounded-2xl p-5">
          <p className="mono-label text-slate-300/70">Available balance</p>
          <p className="mt-3 text-2xl font-semibold text-emerald-300">
            {availableBalance.toLocaleString("en-US", CURRENCY_FORMAT)}
          </p>
          <p className="mt-2 text-xs text-slate-400">Liquid and ready to deploy via ACH or partner rails.</p>
        </div>
        <div className="glass-panel rounded-2xl p-5">
          <p className="mono-label text-slate-300/70">Reserved balance</p>
          <p className="mt-3 text-2xl font-semibold text-amber-200">
            {reservedBalance.toLocaleString("en-US", CURRENCY_FORMAT)}
          </p>
          <p className="mt-2 text-xs text-slate-400">Held for large format payouts and compliance buffers.</p>
        </div>
        <div className="glass-panel rounded-2xl p-5">
          <p className="mono-label text-slate-300/70">Explorer visibility</p>
          <p className="mt-3 text-sm text-slate-300/90">
            Tap the link below to open Omne explorer with this wallet pre-filtered. Data is simulated, but matches the
            walletAddress field naming expected in production SDKs.
          </p>
          <a
            href={merchantProfile.explorerUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex text-sm font-medium text-cyan-300 underline-offset-4 hover:underline"
          >
            View simulated explorer
          </a>
        </div>
      </div>

      <div className="glass-panel overflow-hidden rounded-2xl">
        <table className="min-w-full divide-y divide-white/10 text-sm">
          <thead className="bg-white/5 text-xs uppercase tracking-[0.2em] text-slate-300/70">
            <tr>
              <th className="px-5 py-4 text-left">Entry ID</th>
              <th className="px-5 py-4 text-left">Type</th>
              <th className="px-5 py-4 text-left">Label</th>
              <th className="px-5 py-4 text-right">Amount</th>
              <th className="px-5 py-4 text-left">Omne block</th>
              <th className="px-5 py-4 text-left">Counterparty</th>
              <th className="px-5 py-4 text-left">Timestamp</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 text-slate-200/80">
            {walletLedger.map((entry) => (
              <tr key={entry.id} className="hover:bg-white/5">
                <td className="px-5 py-4 font-mono text-xs text-slate-300/80">{entry.id}</td>
                <td className="px-5 py-4">
                  <span className="badge badge-primary">{entry.postingType}</span>
                </td>
                <td className="px-5 py-4">{entry.label}</td>
                <td className="px-5 py-4 text-right font-medium text-white">
                  {entry.amount.toLocaleString("en-US", CURRENCY_FORMAT)}
                </td>
                <td className="px-5 py-4 font-mono text-xs text-slate-300/80">{entry.omneBlock}</td>
                <td className="px-5 py-4">{entry.counterparty}</td>
                <td className="px-5 py-4 font-mono text-xs text-slate-300/80">
                  {new Date(entry.occurredAt).toLocaleString("en-US", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
