"use client";

export function TipsCallout({ title, tips }: { title: string; tips: string[] }) {
  return (
    <div className="glass p-4 text-sm text-neutral/70">
      <p className="font-semibold text-neutral">{title}</p>
      <ul className="mt-2 list-disc space-y-1 pl-5">
        {tips.map((tip) => (
          <li key={tip}>{tip}</li>
        ))}
      </ul>
    </div>
  );
}
