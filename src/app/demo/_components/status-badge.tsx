import type { CSSProperties } from "react";

const statusStyles: Record<string, CSSProperties> = {
  Complete: {
    color: "#4ade80",
    backgroundColor: "rgba(74, 222, 128, 0.16)",
    borderColor: "rgba(74, 222, 128, 0.28)",
  },
  "In-Progress": {
    color: "#facc15",
    backgroundColor: "rgba(250, 204, 21, 0.16)",
    borderColor: "rgba(250, 204, 21, 0.3)",
  },
  Planned: {
    color: "#f97316",
    backgroundColor: "rgba(249, 115, 22, 0.16)",
    borderColor: "rgba(249, 115, 22, 0.3)",
  },
};

const fallbackStyle: CSSProperties = {
  color: "rgba(226, 232, 240, 0.85)",
  backgroundColor: "rgba(148, 163, 184, 0.18)",
  borderColor: "rgba(148, 163, 184, 0.32)",
};

export function StatusBadge({ status }: { status: string }) {
  const style = statusStyles[status] ?? fallbackStyle;
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]"
      style={style}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
      {status}
    </span>
  );
}
