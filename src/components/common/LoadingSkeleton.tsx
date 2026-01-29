export function LoadingSkeleton({ className }: { className?: string }) {
  return <div className={`animate-pulse rounded-2xl bg-primary/10 ${className}`} />;
}
