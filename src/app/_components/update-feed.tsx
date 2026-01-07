import { SectionShell } from "./section-shell";
import type { UpdateEntry } from "@/lib/mu-data";

interface UpdateFeedProps {
  entries: UpdateEntry[];
}

export function UpdateFeed({ entries }: UpdateFeedProps) {
  return (
    <SectionShell
      eyebrow="Recent operations"
      title="Snapshots from the diligence log"
      description="Key workstreams surfaced from the internal tracker so investors and regulators know exactly where things stand."
      className="section-aura section-aura--grid"
    >
      <div className="grid gap-4 md:grid-cols-3">
        {entries.map((entry) => (
          <div key={entry.title} className="update-card">
            <p className="mono-label text-[0.7rem] text-slate-400">{entry.date}</p>
            <p className="mt-2 text-lg font-semibold text-white">{entry.title}</p>
            <p className="mt-2 text-sm text-slate-300/85">{entry.detail}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
