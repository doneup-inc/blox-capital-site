"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { listScenarios, resolveScenario, type ScenarioOption } from "./scenarios";
import type { DemoSnapshot } from "./demo-data";

type DemoScenarioContextValue = {
  scenarioKey: string;
  scenarioOptions: ScenarioOption[];
  selectScenario: (key: string) => void;
  snapshot: DemoSnapshot;
};

const DemoScenarioContext = createContext<DemoScenarioContextValue | null>(null);

export function DemoScenarioProvider({ children }: { children: ReactNode }) {
  const [scenarioKey, setScenarioKey] = useState<string>("default");
  const scenarioOptions = useMemo<ScenarioOption[]>(() => listScenarios(), []);
  const validKeys = useMemo(() => new Set(scenarioOptions.map((option) => option.key)), [scenarioOptions]);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const syncFromLocation = () => {
      const params = new URLSearchParams(window.location.search);
      const keyFromUrl = params.get("scenario");
      const normalized = keyFromUrl ? keyFromUrl.toLowerCase() : null;
      const resolved = normalized && validKeys.has(normalized) ? normalized : "default";
      setScenarioKey(resolved);
    };

    syncFromLocation();
    window.addEventListener("popstate", syncFromLocation);
    return () => {
      window.removeEventListener("popstate", syncFromLocation);
    };
  }, [validKeys]);

  const selectScenario = useCallback(
    (key: string) => {
      const normalized = key.toLowerCase();
      const resolved = validKeys.has(normalized) ? normalized : "default";
      const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
      if (resolved === "default") {
        params.delete("scenario");
      } else {
        params.set("scenario", resolved);
      }
      const paramString = params.toString();
      router.replace(`${pathname}${paramString ? `?${paramString}` : ""}`, { scroll: false });
      setScenarioKey(resolved);
    },
    [pathname, router, validKeys]
  );

  const snapshot = useMemo<DemoSnapshot>(() => resolveScenario(scenarioKey), [scenarioKey]);

  const value = useMemo<DemoScenarioContextValue>(
    () => ({ scenarioKey, scenarioOptions, selectScenario, snapshot }),
    [scenarioKey, scenarioOptions, selectScenario, snapshot]
  );

  return <DemoScenarioContext.Provider value={value}>{children}</DemoScenarioContext.Provider>;
}

export function useDemoScenario() {
  const context = useContext(DemoScenarioContext);
  if (!context) {
    throw new Error("useDemoScenario must be used within a DemoScenarioProvider");
  }
  return context;
}