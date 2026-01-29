"use client";

import Link from "next/link";

const stages = [
  { id: 1, label: "Pre-test" },
  { id: 2, label: "Setup" },
  { id: 3, label: "Theory" },
  { id: 4, label: "Playground" },
  { id: 5, label: "Measurement" },
  { id: 6, label: "Saved Data" },
  { id: 7, label: "Reflection" },
  { id: 8, label: "Report" }
];

export function StageNav({ slug, currentStage }: { slug: string; currentStage?: number }) {
  return (
    <div className="flex flex-wrap gap-2">
      {stages.map((stage) => (
        <Link
          key={stage.id}
          href={`/labs/simulations/${slug}/stage/${stage.id}`}
          className={`rounded-full px-3 py-1 text-xs font-semibold transition focus-ring ${
            currentStage === stage.id
              ? "bg-primary text-white"
              : "bg-accent text-primary hover:bg-primary/10"
          }`}
        >
          {stage.id.toString().padStart(2, "0")} {stage.label}
        </Link>
      ))}
    </div>
  );
}
