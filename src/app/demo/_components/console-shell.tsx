"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import type { PropsWithChildren } from "react";
import { BadgeCheck, Banknote, CheckCircle2, LayoutDashboard, Settings, Wallet } from "lucide-react";
import { useDemoScenario } from "../demo-scenario-context";

const navItems = [
  { href: "/demo", label: "Overview", icon: LayoutDashboard },
  { href: "/demo/transactions", label: "Transactions", icon: BadgeCheck },
  { href: "/demo/wallet", label: "Wallet & Balances", icon: Wallet },
  { href: "/demo/payouts", label: "Payouts", icon: Banknote },
  { href: "/demo/compliance", label: "Compliance", icon: CheckCircle2 },
  { href: "/demo/settings", label: "Settings", icon: Settings },
] as const;

export function ConsoleShell({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const { scenarioKey, scenarioOptions, selectScenario } = useDemoScenario();
  const activeScenario = useMemo(() => {
    return scenarioOptions.find((option) => option.key === scenarioKey);
  }, [scenarioKey, scenarioOptions]);

  return (
    <div className="demo-surface">
      <div className="demo-watermark">
        <span>Private walkthrough</span>
      </div>
      <div className="layout-shell">
        <aside className="nav-shell">
          <div>
            <p className="badge badge-secondary">Sandbox demo</p>
            <h1>Blox Pay Console</h1>
            <p className="mt-3 text-sm text-slate-300/80">
              Private walkthrough for diligence partners. Powered by Omne settlement.
            </p>
            <div className="mt-6">
              <label
                className="text-xs font-semibold uppercase tracking-wide text-slate-400"
                htmlFor="scenario-select"
              >
                Scenario
              </label>
              <div className="mt-2">
                <select
                  id="scenario-select"
                  className="w-full rounded-md border border-slate-700 bg-slate-900/80 px-2 py-1 text-sm text-slate-100 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500"
                  value={scenarioKey}
                  onChange={(event) => selectScenario(event.target.value)}
                  aria-label="Select scenario"
                >
                  {scenarioOptions.map(({ key, label }) => (
                    <option key={key} value={key}>
                      {label}
                    </option>
                  ))}
                </select>
                <p className="mt-2 text-xs text-slate-400">
                  Active: {activeScenario?.label ?? scenarioKey}
                </p>
                <p className="mt-1 text-[11px] leading-snug text-slate-500">
                  {activeScenario?.description ?? "Static narrative pulled from demo fixtures."}
                </p>
              </div>
            </div>
          </div>
          <nav className="flex flex-1 flex-col gap-1">
            {navItems.map(({ href, label, icon: Icon }) => {
              const active = pathname === href;
              return (
                <Link key={href} href={href} className="nav-item" data-active={active} prefetch>
                  <Icon className="h-4 w-4" aria-hidden />
                  <span>{label}</span>
                </Link>
              );
            })}
          </nav>
          <div className="text-xs text-slate-400">
            <p>Need production access?</p>
            <a
              className="underline-offset-4 hover:underline"
              href="mailto:partnerships@blox.capital?subject=Blox%20Pay%20pilot%20coordination"
            >
              partnerships@blox.capital
            </a>
          </div>
        </aside>
        <main className="console-main">{children}</main>
      </div>
    </div>
  );
}
