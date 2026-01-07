import { platformStory } from "@/content/site";
import { SectionShell } from "./section-shell";

export function PlatformOverview() {
  return (
    <SectionShell
      id="platform"
      eyebrow="How the platform operates"
      title="Blox keeps checkout effortless and treasury in sync"
      description={platformStory.intro}
      className="section-aura section-aura--mesh"
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-4 platform-column platform-column--cool">
          {platformStory.motions.map((motion) => (
            <div key={motion.title} className="platform-card platform-card--cool">
              <p className="mono-label text-xs">{motion.title}</p>
              <p className="text-base leading-relaxed">{motion.body}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-4 platform-column platform-column--plain">
          {platformStory.valueDrivers.map((driver) => (
            <div key={driver.title} className="value-card">
              <p className="text-lg font-semibold text-white">{driver.title}</p>
              <p className="text-sm text-slate-200/85">{driver.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
