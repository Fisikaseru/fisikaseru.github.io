"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { StageNav } from "@/components/labs/StageNav";
import { IndicatorsRow } from "@/components/labs/IndicatorsRow";
import { TipsCallout } from "@/components/labs/TipsCallout";
import { SavedDataTable } from "@/components/labs/SavedDataTable";
import { useRequireAuthForDownload } from "@/lib/download-gate";
import { initializeSession, useSessionStore } from "@/lib/session/store";

const stageTitles = [
  "Pre-test",
  "Setup",
  "Theory",
  "Playground",
  "Measurement",
  "Saved Data",
  "Reflection",
  "Report"
];

export function StageClient({ slug, stage }: { slug: string; stage: number }) {
  const { session, dispatch } = useSessionStore();
  const { requireAuthForDownload } = useRequireAuthForDownload();
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    initializeSession(slug, "Simulasi Gerak Lurus");
  }, [slug]);

  useEffect(() => {
    dispatch({ type: "SET_STAGE", stage });
  }, [dispatch, stage]);

  const indicators = useMemo(
    () => [
      { label: "Kecepatan", value: `${(stage * 1.2).toFixed(1)} m/s` },
      { label: "Jarak", value: `${(stage * 2.4).toFixed(1)} m` },
      { label: "Waktu", value: `${stage * 3} s` },
      { label: "Percepatan", value: `${(stage * 0.4).toFixed(1)} m/s²` },
      { label: "Status", value: stage >= 4 ? "Aktif" : "Persiapan" }
    ],
    [stage]
  );

  const handleDownload = useCallback(async () => {
    const allowed = await requireAuthForDownload(`/labs/simulations/${slug}/stage/8?download=1`);
    if (!allowed) return;
    setLoading(true);
    const response = await fetch("/api/reports", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        simulationSlug: slug,
        sessionSnapshot: session
      })
    });
    if (response.ok) {
      const data = await response.json();
      if (data.pdfUrl) {
        window.open(data.pdfUrl, "_blank", "noopener,noreferrer");
      }
    }
    setLoading(false);
  }, [requireAuthForDownload, session, slug]);

  useEffect(() => {
    if (stage === 8 && searchParams.get("download") === "1") {
      void handleDownload();
    }
  }, [handleDownload, searchParams, stage]);

  return (
    <div className="space-y-6">
      <StageNav slug={slug} currentStage={stage} />
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <div className="relative h-[260px] w-full rounded-3xl border border-primary/10 bg-gradient-to-br from-primary/10 to-white">
            <div className="absolute inset-0 flex items-center justify-center text-sm text-neutral/50">
              Canvas simulasi (3D-ready)
            </div>
          </div>
          <IndicatorsRow indicators={indicators} />
          {stage === 6 ? (
            <SavedDataTable
              data={[
                { label: "Percobaan 1", value: "2.1", unit: "s" },
                { label: "Percobaan 2", value: "2.4", unit: "s" }
              ]}
            />
          ) : null}
          {stage === 5 ? (
            <TipsCallout
              title="Tips pengukuran"
              tips={[
                "Ulangi pengukuran minimal 3 kali.",
                "Gunakan interval waktu yang konsisten.",
                "Catat kondisi awal sebelum mulai."
              ]}
            />
          ) : null}
        </div>
        <div className="glass space-y-4 p-5">
          <h2 className="text-lg font-semibold text-neutral">
            Stage {stage.toString().padStart(2, "0")} - {stageTitles[stage - 1]}
          </h2>
          <p className="text-sm text-neutral/70">
            Ikuti instruksi tahap ini sesuai template nasional. Progres otomatis tersimpan di
            perangkat Anda.
          </p>
          {stage === 8 ? (
            <button
              type="button"
              onClick={handleDownload}
              className="w-full rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white focus-ring"
              disabled={loading}
            >
              {loading ? "Menyiapkan PDF..." : "Download PDF"}
            </button>
          ) : (
            <button
              type="button"
              onClick={() => dispatch({ type: "COMPLETE_STAGE", stage })}
              className="w-full rounded-full border border-primary/20 px-4 py-3 text-sm font-semibold text-primary focus-ring"
            >
              Tandai selesai
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
