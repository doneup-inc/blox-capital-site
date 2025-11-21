import type { MerchantMetric } from "../demo-data";

export function MetricCard({ metric }: { metric: MerchantMetric }) {
  const delta = metric.delta;
  let deltaClass = "text-slate-300/70";
  if (delta?.trend === "up") {
    deltaClass = "text-emerald-300";
  } else if (delta?.trend === "down") {
    deltaClass = "text-rose-300";
  }

  return (
    <div className="glass-panel rounded-2xl p-5">
      <p className="mono-label text-slate-300/70">{metric.label}</p>
      <p className="mt-3 text-2xl font-semibold text-white">{metric.value}</p>
      {delta && (
        <p className={`mt-2 text-xs font-medium ${deltaClass}`}>
          <span aria-hidden>
            {delta.trend === "up" && "▲"}
            {delta.trend === "down" && "▼"}
            {delta.trend === "flat" && "■"}
          </span>{" "}
          {delta.label}
        </p>
      )}
    </div>
  );
}
