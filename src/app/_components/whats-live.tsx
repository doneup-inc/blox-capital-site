import Link from "next/link";
import { whatsLive } from "@/content/site";
import { SectionShell } from "./section-shell";

export function WhatsLive() {
  return (
    <SectionShell
      id="whats-live"
      eyebrow={whatsLive.eyebrow}
      title={whatsLive.title}
      description={whatsLive.subtitle}
      className="section-aura section-aura--grid"
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {whatsLive.items.map((item) => (
          <div key={item.title} className="live-card">
            <div className="flex items-start gap-3">
              <span className="live-dot" aria-hidden />
              <div>
                <p className="text-base font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-sm text-slate-300/85">{item.detail}</p>
                {item.link ? (
                  <Link
                    href={item.link.href}
                    className="mt-2 inline-block text-sm font-medium link-accent"
                    target={item.link.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {item.link.label}
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
