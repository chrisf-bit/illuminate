import type { AssessmentResult } from "@/types";
import { STORAGE_KEYS } from "./constants";

export function saveResults(result: AssessmentResult): void {
  try {
    localStorage.setItem(STORAGE_KEYS.results, JSON.stringify(result));
  } catch {
    // Storage full or unavailable - fail silently
  }
}

export function loadResults(): AssessmentResult | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.results);
    if (!raw) return null;
    return JSON.parse(raw) as AssessmentResult;
  } catch {
    return null;
  }
}

export interface StoredNotes {
  generator: string;
  reflector: string;
  connector: string;
  ignitor: string;
  general: string;
}

const DEFAULT_NOTES: StoredNotes = {
  generator: "",
  reflector: "",
  connector: "",
  ignitor: "",
  general: "",
};

export function saveNotes(notes: StoredNotes): void {
  try {
    localStorage.setItem(STORAGE_KEYS.notes, JSON.stringify(notes));
  } catch {
    // fail silently
  }
}

export function loadNotes(): StoredNotes {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.notes);
    if (!raw) return DEFAULT_NOTES;
    return { ...DEFAULT_NOTES, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_NOTES;
  }
}
