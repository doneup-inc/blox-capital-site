import { complianceDeck, dataRoomSteps } from "@/content/site";
import { SectionShell } from "./section-shell";
import type { LicensingEntry } from "@/lib/mu-data";

interface ComplianceStackProps {
  licensingItems: LicensingEntry[];
}

export function ComplianceStack({ licensingItems }: ComplianceStackProps) {
  return (
    <SectionShell
      id="compliance"
      eyebrow="Compliance & licensing"
      title="Documentation that travels from diligence to deployment"
      description="Blox Capital maintains regulator-ready playbooks, a sequenced MU1 plan, and a transparent process for secure data-room access."
      className="section-aura section-aura--glow section-aura--sunrise"
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-panel rounded-3xl border border-white/10 p-6">
          <p className="mono-label mb-4">Licensing roadmap</p>
          <div className="space-y-4">
            {licensingItems.map((license) => (
              <div key={license.jurisdiction} className="licensing-row">
                <div>
                  <p className="text-base font-semibold licensing-title">{license.jurisdiction}</p>
                  <p className="text-xs text-slate-300/85">{license.detail}</p>
                </div>
                <span className="status-pill">{license.status}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div className="glass-panel rounded-3xl border border-white/10 p-6">
            <p className="mono-label mb-3">Policy stack</p>
            <div className="space-y-4">
              {complianceDeck.map((doc) => (
                <div key={doc.label} className="policy-card">
                  <div>
                    <p className="text-base font-semibold text-white">{doc.label}</p>
                    <p className="text-sm text-slate-300/85">{doc.summary}</p>
                  </div>
                  <p className="mono-label text-[0.65rem] text-slate-400">Updated {doc.updated}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-panel rounded-3xl border border-white/10 p-6">
            <p className="mono-label mb-3">Secure data room flow</p>
            <ol className="space-y-2 text-sm text-slate-200/85">
              {dataRoomSteps.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="step-index">{index + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
