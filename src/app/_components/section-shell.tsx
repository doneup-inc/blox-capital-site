import { ReactNode } from "react";

interface SectionShellProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
  children: ReactNode;
}

export function SectionShell({ id, eyebrow, title, description, className, children }: SectionShellProps) {
  const classes = ["section-container space-y-6", className].filter(Boolean).join(" ");

  return (
    <section id={id} className={classes}>
      <div className="space-y-3">
        {eyebrow ? <p className="mono-label">{eyebrow}</p> : null}
        {title ? <h2 className="section-heading">{title}</h2> : null}
        {description ? <p className="section-description">{description}</p> : null}
      </div>
      <div>{children}</div>
    </section>
  );
}
