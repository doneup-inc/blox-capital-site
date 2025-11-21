import { Suspense, type PropsWithChildren } from "react";
import "./demo.css";
import { ConsoleShell } from "./_components/console-shell";
import { DemoScenarioProvider } from "./demo-scenario-context";

export default function DemoLayout({ children }: PropsWithChildren) {
  return (
    <Suspense fallback={<div className="console-main">Loading demo context…</div>}>
      <DemoScenarioProvider>
        <ConsoleShell>{children}</ConsoleShell>
      </DemoScenarioProvider>
    </Suspense>
  );
}