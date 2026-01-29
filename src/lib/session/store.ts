"use client";

import { create } from "zustand";
import { SessionSchema, type SessionV1 } from "./types";
import { sessionReducer, type SessionAction } from "./reducer";

const STORAGE_KEY = "fisikaseru:session";

function createInitialSession(slug: string, title: string): SessionV1 {
  return {
    version: "1.0.0",
    simulation: {
      slug,
      title,
      startedAt: new Date().toISOString()
    },
    progress: {
      currentStage: 1,
      completedStages: [],
      lastSavedAt: new Date().toISOString()
    },
    stage: {
      pretest: { answers: [] },
      setup: { goals: "" },
      theory: { notes: "" },
      playground: { interactions: [] },
      measurement: { metrics: {} },
      data: { rows: [] },
      reflection: { summary: "" },
      report: { notes: "" }
    }
  };
}

function loadSession(slug: string, title: string): SessionV1 {
  if (typeof window === "undefined") {
    return createInitialSession(slug, title);
  }
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return createInitialSession(slug, title);
  try {
    const parsed = SessionSchema.safeParse(JSON.parse(raw));
    if (!parsed.success) {
      return createInitialSession(slug, title);
    }
    if (parsed.data.simulation.slug !== slug) {
      return createInitialSession(slug, title);
    }
    return parsed.data;
  } catch (error) {
    return createInitialSession(slug, title);
  }
}

let saveTimeout: NodeJS.Timeout | null = null;

function persistSession(session: SessionV1) {
  if (typeof window === "undefined") return;
  if (saveTimeout) clearTimeout(saveTimeout);
  saveTimeout = setTimeout(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  }, 300);
}

type SessionStore = {
  session: SessionV1;
  dispatch: (action: SessionAction) => void;
  syncSnapshot: (token?: string) => Promise<void>;
};

export const useSessionStore = create<SessionStore>((set, get) => ({
  session: createInitialSession("", ""),
  dispatch: (action) => {
    const next = sessionReducer(get().session, action);
    set({ session: next });
    persistSession(next);
  },
  syncSnapshot: async () => {
    const snapshot = get().session;
    await fetch("/api/sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionSnapshot: snapshot })
    });
  }
}));

export function initializeSession(slug: string, title: string) {
  if (typeof window === "undefined") return;
  const stored = loadSession(slug, title);
  useSessionStore.setState({ session: stored });
}
