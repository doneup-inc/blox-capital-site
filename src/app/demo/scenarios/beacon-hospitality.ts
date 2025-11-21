import { defaultDemoSnapshot, type DemoSnapshot } from "../demo-data";

function cloneDemoSnapshot(): DemoSnapshot {
  return JSON.parse(JSON.stringify(defaultDemoSnapshot)) as DemoSnapshot;
}

export function buildBeaconHospitalityScenario(): DemoSnapshot {
  return cloneDemoSnapshot();
}
