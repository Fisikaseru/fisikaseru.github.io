import type { SessionV1 } from "./types";

export type SessionAction =
  | { type: "SET_STAGE"; stage: number }
  | { type: "COMPLETE_STAGE"; stage: number }
  | { type: "UPDATE_STAGE_PAYLOAD"; payload: Partial<SessionV1["stage"]> }
  | { type: "UPDATE_PROGRESS"; payload: Partial<SessionV1["progress"]> };

export function sessionReducer(state: SessionV1, action: SessionAction): SessionV1 {
  switch (action.type) {
    case "SET_STAGE":
      return {
        ...state,
        progress: {
          ...state.progress,
          currentStage: action.stage,
          lastSavedAt: new Date().toISOString()
        }
      };
    case "COMPLETE_STAGE":
      return {
        ...state,
        progress: {
          ...state.progress,
          completedStages: Array.from(new Set([...state.progress.completedStages, action.stage])).sort(),
          lastSavedAt: new Date().toISOString()
        }
      };
    case "UPDATE_STAGE_PAYLOAD":
      return {
        ...state,
        stage: {
          ...state.stage,
          ...action.payload
        },
        progress: {
          ...state.progress,
          lastSavedAt: new Date().toISOString()
        }
      };
    case "UPDATE_PROGRESS":
      return {
        ...state,
        progress: {
          ...state.progress,
          ...action.payload,
          lastSavedAt: new Date().toISOString()
        }
      };
    default:
      return state;
  }
}
