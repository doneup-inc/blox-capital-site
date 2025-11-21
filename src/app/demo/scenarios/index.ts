import type { DemoSnapshot } from "../demo-data";
import { buildBeaconHospitalityScenario } from "./beacon-hospitality";
import { buildVerticalSaaSScenario } from "./vertical-saas";
import { buildFintechMarketplaceScenario } from "./fintech-marketplace";

const scenarioBuilders: Record<string, () => DemoSnapshot> = {
  default: buildBeaconHospitalityScenario,
  beacon: buildBeaconHospitalityScenario,
  "vertical-saas": buildVerticalSaaSScenario,
  "fintech-marketplace": buildFintechMarketplaceScenario,
};

type ScenarioKey = keyof typeof scenarioBuilders;

export type ScenarioOption = {
  key: string;
  label: string;
  description: string;
};

export function resolveScenario(key?: string | null): DemoSnapshot {
  const normalized = key?.toLowerCase();
  const builder = normalized ? scenarioBuilders[normalized as ScenarioKey] : undefined;
  const selectedBuilder = builder ?? scenarioBuilders.default;
  return selectedBuilder();
}

export function listScenarios(): ScenarioOption[] {
  return [
    {
      key: "default",
      label: "Beacon Hospitality (default)",
      description: "Multi-brand hospitality group leaning on Omne for instant settlement across venues.",
    },
    {
      key: "beacon",
      label: "Beacon Hospitality",
      description: "Original hospitality walkthrough with deep diligence artifacts and compliance story.",
    },
    {
      key: "vertical-saas",
      label: "Vertical SaaS (Coworking)",
      description: "Atlas Workspace, a coworking SaaS platform measuring rollout efficiency across markets.",
    },
    {
      key: "fintech-marketplace",
      label: "Fintech Marketplace (RelayPay)",
      description: "RelayPay multi-tenant marketplace overseeing partner disbursements and treasury float.",
    },
  ];
}
