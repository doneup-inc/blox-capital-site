"use client";

import { useDemoScenario } from "../demo-scenario-context";

export function SettingsContent() {
  const { snapshot } = useDemoScenario();
  const { merchantProfile, payoutConfig, payoutDestinations } = snapshot;
  const defaultDestination = payoutDestinations.find(
    (destination) => destination.id === payoutConfig.defaultDestinationId
  );

  return (
    <section className="space-y-10">
      <header className="console-header">
        <div>
          <p className="badge badge-secondary">Configuration</p>
          <h2 className="text-3xl font-semibold text-white">Settlement preferences</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-300/80">
            Static snapshot illustrating how merchants tailor payout routing, contact notifications, and settlement speeds.
            All values reflect the {merchantProfile.name} demo tenant and mirror the interactive console, now preserved for
            marketing walkthroughs.
          </p>
        </div>
        <div className="glass-panel rounded-2xl p-4 text-sm text-slate-200/80">
          <p className="mono-label text-slate-400">Default destination</p>
          <p className="text-white">
            {defaultDestination
              ? `${defaultDestination.nickname} (${defaultDestination.bankName})`
              : "Select a payout destination"}
          </p>
          <p className="mt-3 text-xs text-slate-400">
            Interactive controls live inside the product console. This page holds a read-only export for diligence sharing.
          </p>
        </div>
      </header>

      <div className="glass-panel rounded-2xl p-6 text-sm text-slate-200/80">
        <p className="mono-label text-slate-400">Notification email</p>
        <p className="mt-2 text-lg font-semibold text-white">{payoutConfig.notificationEmail}</p>
        <p className="mt-3 text-xs text-slate-400">
          Production console will offer webhooks and multi-recipient alerts. Static export retains the same schema without
          needing browser storage.
        </p>
      </div>

      <section className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-white">ACH destinations</h3>
          <p className="mt-1 text-sm text-slate-300/80">
            These fixtures map to the ACH orchestration deck. Status and settlement speeds stay aligned with diligence
            promises while remaining read-only here.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {payoutDestinations.map((destination) => (
            <article key={destination.id} className="glass-panel rounded-2xl p-6 text-sm text-slate-200/80">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-white">{destination.nickname}</h3>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em]">
                  <span className="badge badge-primary">{destination.status}</span>
                  {destination.id === payoutConfig.defaultDestinationId && (
                    <span className="badge badge-secondary">Default</span>
                  )}
                </div>
              </div>

              <dl className="mt-4 space-y-3">
                <div>
                  <dt className="mono-label text-slate-400">Bank name</dt>
                  <dd>{destination.bankName}</dd>
                </div>
                <div>
                  <dt className="mono-label text-slate-400">Account ending in</dt>
                  <dd>••••{destination.accountLast4}</dd>
                </div>
                <div>
                  <dt className="mono-label text-slate-400">Settlement speed</dt>
                  <dd>{destination.settlementSpeed}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <div className="glass-panel rounded-2xl p-6 text-sm text-slate-200/80">
        <p className="mono-label text-slate-400">What changes in production</p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300/80">
          <li>Notification channels extend to webhooks and Slack alerts.</li>
          <li>ACH destinations persist via the Omne Console API and audited data store.</li>
          <li>Role-based access control scopes who can add or disable payout rails.</li>
        </ul>
      </div>
    </section>
  );
}
