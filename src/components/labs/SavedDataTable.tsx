"use client";

import { Download } from "lucide-react";

export type SavedDatum = {
  label: string;
  value: string;
  unit: string;
};

export function SavedDataTable({ data }: { data: SavedDatum[] }) {
  return (
    <div className="card p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-neutral">Data tersimpan</h3>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-3 py-1 text-xs text-primary focus-ring"
        >
          <Download className="h-4 w-4" />
          Export CSV
        </button>
      </div>
      <div className="mt-3 divide-y divide-primary/10 text-sm">
        {data.map((row) => (
          <div key={row.label} className="flex items-center justify-between py-2">
            <span className="text-neutral/70">{row.label}</span>
            <span className="font-semibold text-neutral">
              {row.value} {row.unit}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
