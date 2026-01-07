import { roadmap } from "@/content/site";
import { SectionShell } from "./section-shell";

export function RoadmapTimeline() {
  return (
    <SectionShell
      id="updates"
      eyebrow="Roadmap snapshot"
      title="Built with pilots in sight, licensing in motion"
      description="Milestones focus on turning the zero-fee checkout model into live deployments without losing diligence momentum."
      className="section-aura section-aura--grid"
    >
      <div className="timeline-grid">
        {roadmap.map((item) => (
          <div key={item.title} className="timeline-card">
            <div className="flex items-center justify-between">
              <p className="mono-label text-[0.65rem] text-slate-300/80">{item.period}</p>
              <span className="accent-dot accent-dot--primary" aria-hidden />
            </div>
            <p className="mt-3 text-xl font-semibold text-white">{item.title}</p>
            <p className="mt-2 text-sm text-slate-300/90">{item.detail}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
