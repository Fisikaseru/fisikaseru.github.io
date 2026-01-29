import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { StageClient } from "../../_components/StageClient";
import { ErrorBoundary } from "@/components/common/ErrorBoundary";

export default function StagePage({
  params
}: {
  params: { slug: string; stage: string };
}) {
  const stageNumber = Number(params.stage);
  if (!Number.isFinite(stageNumber) || stageNumber < 1 || stageNumber > 8) {
    notFound();
  }

  return (
    <Container className="space-y-8 py-10">
      <ErrorBoundary>
        <StageClient slug={params.slug} stage={stageNumber} />
      </ErrorBoundary>
    </Container>
  );
}
