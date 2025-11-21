"use client";

import { StatusBadge } from "./status-badge";
import { useDemoScenario } from "../demo-scenario-context";

export function ComplianceContent() {
  const { snapshot } = useDemoScenario();
  const { complianceItems } = snapshot;

  return (
    <section className="space-y-8">
      <header className="console-header">
        <div>
          <p className="badge badge-secondary">Governance</p>
          <h2 className="text-3xl font-semibold text-white">Documentation & oversight</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-300/80">
            Each artifact links to the diligence packets promised in investor outreach. Status badges mirror the
            component tokens used on the public site, ensuring continuity across materials.
          </p>
        </div>
      </header>

      <div className="grid gap-5 lg:grid-cols-2">
        {complianceItems.map((item) => (
          <article key={item.id} className="glass-panel rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">{item.name}</h3>
              <StatusBadge status={item.status} />
            </div>
            <dl className="mt-4 space-y-3 text-sm text-slate-200/80">
              <div className="flex justify-between">
                <dt className="mono-label text-slate-400">Owner</dt>
                <dd>{item.owner}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="mono-label text-slate-400">Last refresh</dt>
                <dd>{item.refreshedOn}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="mono-label text-slate-400">Contact</dt>
                <dd>
                  <a className="underline-offset-4 hover:underline" href={`mailto:${item.contact}`}>
                    {item.contact}
                  </a>
                </dd>
              </div>
            </dl>
          </article>
        ))}
      </div>

      <div className="glass-panel rounded-2xl p-6 text-sm text-slate-200/80">
        <p className="mono-label text-slate-400">Watermark & NDA gate</p>
        <p>
          The entire console sits behind a phrase-based unlock (supplied post-NDA) and carries a persistent watermark.
          This static export preserves that context so circulation cannot be mistaken for production readiness.
        </p>
      </div>
    </section>
  );
}
