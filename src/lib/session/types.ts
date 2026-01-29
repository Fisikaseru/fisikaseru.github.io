import { z } from "zod";

export const SessionStagePayloadSchema = z.object({
  pretest: z.object({ answers: z.array(z.string()).default([]) }).default({ answers: [] }),
  setup: z.object({ goals: z.string().default("") }).default({ goals: "" }),
  theory: z.object({ notes: z.string().default("") }).default({ notes: "" }),
  playground: z.object({ interactions: z.array(z.string()).default([]) }).default({ interactions: [] }),
  measurement: z.object({ metrics: z.record(z.string(), z.number()).default({}) }).default({ metrics: {} }),
  data: z.object({ rows: z.array(z.record(z.string(), z.string())).default([]) }).default({ rows: [] }),
  reflection: z.object({ summary: z.string().default("") }).default({ summary: "" }),
  report: z.object({ notes: z.string().default("") }).default({ notes: "" })
});

export const SessionProgressSchema = z.object({
  currentStage: z.number().min(1).max(8),
  completedStages: z.array(z.number().min(1).max(8)),
  lastSavedAt: z.string()
});

export const SessionSchema = z.object({
  version: z.literal("1.0.0"),
  simulation: z.object({
    slug: z.string(),
    title: z.string(),
    startedAt: z.string()
  }),
  progress: SessionProgressSchema,
  stage: SessionStagePayloadSchema
});

export type SessionV1 = z.infer<typeof SessionSchema>;
