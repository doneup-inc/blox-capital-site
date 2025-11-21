const timelinePoints = [
  {
    label: "Checkout confirmed",
    timestamp: "T+0ms",
    description: "Shopper approves Omne-powered wallet tap; intent broadcast to the gateway.",
  },
  {
    label: "Block proposal",
    timestamp: "T+162ms",
    description: "Omne validator cohort assembles block 126,782 with payment attestation.",
  },
  {
    label: "Finality",
    timestamp: "T+482ms",
    description: "Omne achieves deterministic finality; wallet balance updates and reconciliation ledger posts.",
  },
  {
    label: "ACH transfer ready",
    timestamp: "T+45m",
    description: "Instant ACH partner signals ready state for settlement sweep into the primary operating account.",
  },
] as const;

export function FinalityTimeline({ finalityLabel }: { finalityLabel?: string }) {
  return (
    <div className="glass-panel rounded-2xl p-6">
      <div className="flex items-center justify-between">
        <p className="mono-label text-slate-300/70">Omne settlement timeline (simulated)</p>
        <span className="badge badge-primary">{finalityLabel ? `${finalityLabel} finality` : "0.482s finality"}</span>
      </div>
      <div className="mt-6 space-y-4">
        {timelinePoints.map((point, index) => (
          <div key={point.label} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="text-xs font-semibold text-slate-300/80">{point.timestamp}</span>
              {index !== timelinePoints.length - 1 && <span className="mt-1 h-full w-px bg-slate-600/40" aria-hidden />}
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-white">{point.label}</p>
              <p className="text-xs text-slate-300/80">{point.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
