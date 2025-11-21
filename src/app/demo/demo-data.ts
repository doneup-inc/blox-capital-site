export type MerchantMetric = {
  key: string;
  label: string;
  value: string;
  delta?: { label: string; trend: "up" | "down" | "flat" };
};

export type Transaction = {
  id: string;
  shopperHandle: string;
  amount: number;
  currency: string;
  channel: "in-store" | "mobile" | "web";
  status: "Settled" | "Pending" | "Flagged";
  settlementHash: string;
  settlementHeight: number;
  finalityMs: number;
  occurredAt: string;
};

export type WalletLedgerEntry = {
  id: string;
  postingType: "Credit" | "Debit";
  label: string;
  amount: number;
  occurredAt: string;
  omneBlock: string;
  counterparty: string;
};

export type PayoutDestination = {
  id: string;
  nickname: string;
  bankName: string;
  accountLast4: string;
  settlementSpeed: "Instant ACH" | "Same Day ACH" | "Standard ACH";
  status: "Active" | "Pending" | "Disabled";
};

export type Payout = {
  id: string;
  destinationId: string;
  amount: number;
  status: "Processing" | "Completed" | "Scheduled";
  initiatedAt: string;
  completedAt?: string;
  traceId: string;
};

export type PayoutConfig = {
  defaultDestinationId: string;
  notificationEmail: string;
};

export type ComplianceItem = {
  id: string;
  name: string;
  owner: string;
  refreshedOn: string;
  status: "Complete" | "In-Progress" | "Planned";
  contact: string;
};

export type MerchantProfile = {
  name: string;
  vertical: string;
  timezone: string;
  contactEmail: string;
  complianceLead: string;
  environment: "Demo" | "Sandbox";
  explorerUrl: string;
};

export type DemoSnapshot = {
  merchantProfile: MerchantProfile;
  metrics: MerchantMetric[];
  transactions: Transaction[];
  walletLedger: WalletLedgerEntry[];
  payouts: Payout[];
  payoutDestinations: PayoutDestination[];
  payoutConfig: PayoutConfig;
  complianceItems: ComplianceItem[];
};

export const merchantProfile: MerchantProfile = {
  name: "Beacon Hospitality Group",
  vertical: "Multi-brand hospitality",
  timezone: "America/New_York",
  contactEmail: "ops@beacon-hospitality.demo",
  complianceLead: "compliance@blox.capital",
  environment: "Demo",
  explorerUrl: "https://explorer.omne.demo/wallet/0xBEACON",
};

export const metrics: MerchantMetric[] = [
  {
    key: "netVolume",
    label: "Net volume (24h)",
    value: "$482,310",
    delta: { label: "+6.2% vs. trailing avg", trend: "up" },
  },
  {
    key: "averageTicket",
    label: "Average ticket",
    value: "$128.54",
    delta: { label: "+2.1%", trend: "up" },
  },
  {
    key: "settlementLatency",
    label: "Settlement latency",
    value: "0.482s",
    delta: { label: "P95 0.637s", trend: "flat" },
  },
  {
    key: "walletBalance",
    label: "Wallet balance",
    value: "$1,205,447",
    delta: { label: "Available today", trend: "flat" },
  },
  {
    key: "pendingPayouts",
    label: "Pending payouts",
    value: "$184,750",
    delta: { label: "3 ACH transfers queued", trend: "down" },
  },
  {
    key: "achSla",
    label: "ACH SLA",
    value: "45m",
    delta: { label: "Instant ACH pilot", trend: "up" },
  },
];

export const transactions: Transaction[] = [
  {
    id: "BXN-782410",
    shopperHandle: "ava.carroll",
    amount: 248.2,
    currency: "USD",
    channel: "in-store",
    status: "Settled",
    settlementHash: "0x3e92f4c2b85f7e1c96d1c2ba3d5f74a1",
    settlementHeight: 126802,
    finalityMs: 438,
    occurredAt: "2025-11-19T15:12:00.000Z",
  },
  {
    id: "BXN-782411",
    shopperHandle: "maxine.ortega",
    amount: 94.76,
    currency: "USD",
    channel: "mobile",
    status: "Settled",
    settlementHash: "0x0ab4c7d92ef1aa23f849c2e51982b4ff",
    settlementHeight: 126805,
    finalityMs: 512,
    occurredAt: "2025-11-19T15:26:00.000Z",
  },
  {
    id: "BXN-782412",
    shopperHandle: "nora.liang",
    amount: 812.4,
    currency: "USD",
    channel: "web",
    status: "Settled",
    settlementHash: "0x7c21fd9a14b0ee8c52a44731b533f4bd",
    settlementHeight: 126809,
    finalityMs: 486,
    occurredAt: "2025-11-19T15:42:00.000Z",
  },
  {
    id: "BXN-782413",
    shopperHandle: "toby.richards",
    amount: 62.33,
    currency: "USD",
    channel: "mobile",
    status: "Pending",
    settlementHash: "0x1f97d2a4bb56f94c28ab33834f3f7c19",
    settlementHeight: 126811,
    finalityMs: 0,
    occurredAt: "2025-11-19T15:55:00.000Z",
  },
  {
    id: "BXN-782414",
    shopperHandle: "amir.jackson",
    amount: 441.88,
    currency: "USD",
    channel: "in-store",
    status: "Settled",
    settlementHash: "0x54a8c3f1dd3097b51fe20d21c4d8bb21",
    settlementHeight: 126816,
    finalityMs: 472,
    occurredAt: "2025-11-19T16:11:00.000Z",
  },
  {
    id: "BXN-782415",
    shopperHandle: "jelani.mercier",
    amount: 128.54,
    currency: "USD",
    channel: "web",
    status: "Settled",
    settlementHash: "0xf2c701ab94710dd85a0e1a45c1bd29e0",
    settlementHeight: 126819,
    finalityMs: 458,
    occurredAt: "2025-11-19T16:28:00.000Z",
  },
];

export const walletLedger: WalletLedgerEntry[] = [
  {
    id: "WL-9821",
    postingType: "Credit",
    label: "Omne settlement",
    amount: 12450.32,
    occurredAt: "2025-11-19T14:05:00.000Z",
    omneBlock: "OMNE-126790",
    counterparty: "Beacon Broadway",
  },
  {
    id: "WL-9822",
    postingType: "Credit",
    label: "Omne settlement",
    amount: 6250.12,
    occurredAt: "2025-11-19T15:15:00.000Z",
    omneBlock: "OMNE-126804",
    counterparty: "Beacon Rooftop",
  },
  {
    id: "WL-9823",
    postingType: "Debit",
    label: "Payout transfer",
    amount: 58250,
    occurredAt: "2025-11-18T22:45:00.000Z",
    omneBlock: "OMNE-126655",
    counterparty: "Harborview Bank",
  },
  {
    id: "WL-9824",
    postingType: "Credit",
    label: "Compliance reserve release",
    amount: 18450,
    occurredAt: "2025-11-18T18:30:00.000Z",
    omneBlock: "OMNE-126612",
    counterparty: "Blox Compliance",
  },
  {
    id: "WL-9825",
    postingType: "Debit",
    label: "Reserve adjustment",
    amount: 12500,
    occurredAt: "2025-11-17T21:20:00.000Z",
    omneBlock: "OMNE-126510",
    counterparty: "Beacon Treasury",
  },
  {
    id: "WL-9826",
    postingType: "Credit",
    label: "Omne settlement",
    amount: 17860.44,
    occurredAt: "2025-11-17T19:04:00.000Z",
    omneBlock: "OMNE-126498",
    counterparty: "Beacon Catering",
  },
];

export const payoutDestinations: PayoutDestination[] = [
  {
    id: "dest-operating",
    nickname: "Beacon Operating Account",
    bankName: "Lighthouse Bank",
    accountLast4: "8123",
    settlementSpeed: "Instant ACH",
    status: "Active",
  },
  {
    id: "dest-treasury",
    nickname: "Beacon Treasury",
    bankName: "Harborview Bank",
    accountLast4: "0441",
    settlementSpeed: "Same Day ACH",
    status: "Active",
  },
  {
    id: "dest-payroll",
    nickname: "Beacon Payroll",
    bankName: "Coastal Federal",
    accountLast4: "4419",
    settlementSpeed: "Standard ACH",
    status: "Active",
  },
];

export const payoutConfig: PayoutConfig = {
  defaultDestinationId: "dest-operating",
  notificationEmail: "finance@beacon-hospitality.demo",
};

export const payouts: Payout[] = [
  {
    id: "ACH-241119-01",
    destinationId: "dest-operating",
    amount: 125000,
    status: "Completed",
    initiatedAt: "2025-11-19T14:30:00.000Z",
    completedAt: "2025-11-19T15:12:00.000Z",
    traceId: "TCH-542819",
  },
  {
    id: "ACH-241119-02",
    destinationId: "dest-treasury",
    amount: 58500,
    status: "Processing",
    initiatedAt: "2025-11-19T16:00:00.000Z",
    traceId: "TCH-542820",
  },
  {
    id: "ACH-241119-03",
    destinationId: "dest-payroll",
    amount: 21250,
    status: "Scheduled",
    initiatedAt: "2025-11-20T13:00:00.000Z",
    traceId: "TCH-542821",
  },
];

export const complianceItems: ComplianceItem[] = [
  {
    id: "aml-kyc",
    name: "AML / KYC Program",
    owner: "Blox Compliance",
    refreshedOn: "2025-10-05",
    status: "Complete",
    contact: "compliance@blox.capital",
  },
  {
    id: "ofac",
    name: "OFAC & Sanctions Screening",
    owner: "Beacon Ops",
    refreshedOn: "2025-10-10",
    status: "In-Progress",
    contact: "ops@beacon-hospitality.demo",
  },
  {
    id: "incident",
    name: "Incident Response Playbook",
    owner: "Blox Security",
    refreshedOn: "2025-09-22",
    status: "Complete",
    contact: "security@blox.capital",
  },
  {
    id: "audit",
    name: "Trail of Bits Audit",
    owner: "Trail of Bits",
    refreshedOn: "2025-11-01",
    status: "Planned",
    contact: "audit@blox.capital",
  },
];

export const defaultDemoSnapshot: DemoSnapshot = {
  merchantProfile,
  metrics,
  transactions,
  walletLedger,
  payouts,
  payoutDestinations,
  payoutConfig,
  complianceItems,
};
