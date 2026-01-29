import type { ReactNode } from "react";

export function ResponsiveShell({
  title,
  description,
  actions,
  children
}: {
  title: string;
  description?: string;
  actions?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-neutral">{title}</h2>
          {description ? <p className="text-sm text-neutral/70">{description}</p> : null}
        </div>
        {actions}
      </div>
      {children}
    </section>
  );
}
