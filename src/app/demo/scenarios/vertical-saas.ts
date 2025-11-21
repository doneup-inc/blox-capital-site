import { defaultDemoSnapshot, type DemoSnapshot } from "../demo-data";

function cloneDemoSnapshot(): DemoSnapshot {
  return JSON.parse(JSON.stringify(defaultDemoSnapshot)) as DemoSnapshot;
}

export function buildVerticalSaaSScenario(): DemoSnapshot {
  const snapshot = cloneDemoSnapshot();

  snapshot.merchantProfile = {
    ...snapshot.merchantProfile,
    name: "Atlas Workspace Platforms",
    vertical: "Vertical SaaS (Coworking)",
    contactEmail: "ops@atlas-platforms.demo",
    environment: "Demo",
    explorerUrl: "https://explorer.omne.demo/wallet/0xATLAS",
  };

  snapshot.metrics = snapshot.metrics.map((metric) => {
    switch (metric.key) {
      case "netVolume":
        return { ...metric, value: "$312,480", delta: { label: "+11.4% M/M", trend: "up" } };
      case "averageTicket":
        return { ...metric, value: "$86.12", delta: { label: "−3.2%", trend: "down" } };
      case "settlementLatency":
        return { ...metric, value: "0.415s", delta: { label: "P95 0.588s", trend: "flat" } };
      case "walletBalance":
        return { ...metric, value: "$842,090", delta: { label: "Available today", trend: "flat" } };
      case "pendingPayouts":
        return { ...metric, value: "$92,300", delta: { label: "2 instant sweeps queued", trend: "down" } };
      case "achSla":
        return { ...metric, value: "30m", delta: { label: "Instant ACH pilot", trend: "up" } };
      default:
        return metric;
    }
  });

  snapshot.payoutDestinations = snapshot.payoutDestinations.map((destination) => {
    if (destination.id === "dest-operating") {
      return {
        ...destination,
        nickname: "Atlas Operating Account",
        bankName: "Union Square Bank",
        accountLast4: "3312",
      };
    }
    if (destination.id === "dest-treasury") {
      return {
        ...destination,
        nickname: "Atlas Treasury",
        bankName: "Second Street Capital",
        accountLast4: "0199",
        settlementSpeed: "Instant ACH",
      };
    }
    return destination;
  });

  snapshot.payoutConfig = {
    defaultDestinationId: "dest-treasury",
    notificationEmail: "finance@atlas-platforms.demo",
  };

  return snapshot;
}
