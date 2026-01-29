import { z } from "zod";
import { SessionSchema } from "./session/types";

export const DownloadRequestSchema = z.object({
  simulationSlug: z.string(),
  sessionSnapshot: SessionSchema
});

export const SessionSyncSchema = z.object({
  sessionSnapshot: SessionSchema
});
