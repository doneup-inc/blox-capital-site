import { howItWorks } from "@/content/site";
import { SectionShell } from "./section-shell";

export function HowItWorks() {
  return (
    <SectionShell
      id="how-it-works"
      eyebrow={howItWorks.eyebrow}
      title={howItWorks.title}
      className="section-aura section-aura--mesh"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {howItWorks.steps.map((step) => (
          <div key={step.number} className="step-card">
            <span className="step-number">{step.number}</span>
            <p className="mt-4 text-lg font-semibold text-white">{step.title}</p>
            <p className="mt-2 text-sm text-slate-300/85">{step.body}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
