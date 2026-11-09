import { calculateResult, isValidAnswers } from './scoringEngine';
import type { AssessmentResult } from '../types';

const STORAGE_KEY = 'youframe:result:v1';

export interface SavedAssessment {
  answers: string[];
  result: AssessmentResult;
}

/** Persists the completed answers. Returns false if storage is unavailable. */
export function saveAssessment(answers: string[]): boolean {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ version: 1, answers, savedAt: new Date().toISOString() }),
    );
    return true;
  } catch {
    return false;
  }
}

/**
 * Loads a saved assessment. The result is recomputed from the stored answers,
 * so corrupted, outdated or tampered data is ignored safely.
 */
export function loadAssessment(): SavedAssessment | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== 'object' || parsed === null) return null;
    const answers = (parsed as { answers?: unknown }).answers;
    if (!isValidAnswers(answers)) return null;
    return { answers, result: calculateResult(answers) };
  } catch {
    return null;
  }
}

export function clearAssessment(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* storage unavailable – nothing to clear */
  }
}
