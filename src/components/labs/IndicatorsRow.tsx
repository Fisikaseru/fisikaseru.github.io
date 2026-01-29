"use client";

export type Indicator = {
  label: string;
  value: string;
};

export function IndicatorsRow({ indicators }: { indicators: Indicator[] }) {
  return (
    <div className="grid gap-3 rounded-2xl border border-primary/10 bg-white/80 p-4 text-sm text-neutral/70 shadow-sm sm:grid-cols-5">
      {indicators.map((indicator) => (
        <div key={indicator.label}>
          <p className="text-xs uppercase tracking-wide text-neutral/50">{indicator.label}</p>
          <p className="text-base font-semibold text-neutral">{indicator.value}</p>
        </div>
      ))}
    </div>
  );
}
