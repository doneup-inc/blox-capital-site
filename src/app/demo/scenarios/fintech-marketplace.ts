import { defaultDemoSnapshot, type DemoSnapshot } from "../demo-data";

function cloneDemoSnapshot(): DemoSnapshot {
  return JSON.parse(JSON.stringify(defaultDemoSnapshot)) as DemoSnapshot;
}

export function buildFintechMarketplaceScenario(): DemoSnapshot {
  const snapshot = cloneDemoSnapshot();

  snapshot.merchantProfile = {
    ...snapshot.merchantProfile,
    name: "RelayPay Network",
    vertical: "Fintech marketplace (treasury ops)",
    contactEmail: "operations@relaypay.demo",
    complianceLead: "compliance@relaypay.demo",
    environment: "Demo",
    explorerUrl: "https://explorer.omne.demo/wallet/0xRELAYPAY",
  };

  snapshot.metrics = snapshot.metrics.map((metric) => {
    switch (metric.key) {
      case "netVolume":
        return { ...metric, value: "$892,775", delta: { label: "+18.6% 30d", trend: "up" } };
      case "averageTicket":
        return { ...metric, value: "$214.90", delta: { label: "+9.3%", trend: "up" } };
      case "settlementLatency":
        return { ...metric, value: "0.362s", delta: { label: "P95 0.511s", trend: "flat" } };
      case "walletBalance":
        return {
          ...metric,
          value: "$2,480,910",
          delta: { label: "Reserved for next-day sweeps", trend: "flat" },
        };
      case "pendingPayouts":
        return { ...metric, value: "$421,600", delta: { label: "6 batch wires queued", trend: "up" } };
      case "achSla":
        return { ...metric, value: "15m", delta: { label: "Delegated instant rails", trend: "up" } };
      default:
        return metric;
    }
  });

  snapshot.payoutDestinations = snapshot.payoutDestinations.map((destination) => {
    if (destination.id === "dest-operating") {
      return {
        ...destination,
        nickname: "RelayPay Settlement Hub",
        bankName: "Northwind Trust",
        accountLast4: "7741",
        settlementSpeed: "Instant ACH",
      };
    }
    if (destination.id === "dest-treasury") {
      return {
        ...destination,
        nickname: "RelayPay Marketplace Float",
        bankName: "Harborview Bank",
        accountLast4: "2026",
      };
    }
    if (destination.id === "dest-payroll") {
      return {
        ...destination,
        nickname: "Partner Disbursements",
        bankName: "Sequoia State Bank",
        accountLast4: "1180",
        settlementSpeed: "Same Day ACH",
      };
    }
    return destination;
  });

  snapshot.payoutConfig = {
    defaultDestinationId: "dest-operating",
    notificationEmail: "treasury@relaypay.demo",
  };

  snapshot.payouts = snapshot.payouts.map((payout, index) => {
    if (index === 0) {
      return {
        ...payout,
        destinationId: "dest-operating",
        amount: 280_000,
        status: "Processing",
        traceId: "RLY-482701",
      };
    }
    if (index === 1) {
      return {
        ...payout,
        destinationId: "dest-payroll",
        amount: 92_800,
        status: "Scheduled",
        traceId: "RLY-482712",
      };
    }
    return {
      ...payout,
      destinationId: "dest-treasury",
      amount: 48_800,
      status: "Completed",
      traceId: "RLY-482719",
    };
  });

  snapshot.complianceItems = snapshot.complianceItems.map((item) => {
    if (item.id === "ofac") {
      return { ...item, owner: "RelayPay Risk", status: "Complete", refreshedOn: "2025-10-18" };
    }
    if (item.id === "aml-kyc") {
      return { ...item, owner: "Blox Compliance", refreshedOn: "2025-11-11" };
    }
    return item;
  });

  return snapshot;
}
