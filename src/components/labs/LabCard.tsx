import Link from "next/link";

export type LabCardProps = {
  title: string;
  description: string;
  href: string;
  tags: string[];
};

export function LabCard({ title, description, href, tags }: LabCardProps) {
  return (
    <Link href={href} className="card block p-6 transition hover:-translate-y-1 hover:shadow-lg focus-ring">
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-neutral">{title}</h3>
        <p className="text-sm text-neutral/70">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full bg-accent px-2 py-1 text-xs text-primary">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
