import { questions } from '../data/questions';
import { getDimensionMeta, DIMENSIONS } from '../data/dimensions';
import { PROFILE_ORDER, getProfile } from '../data/profiles';
import type {
  AssessmentResult,
  Dimension,
  DimensionScores,
  Lang,
  Profile,
  ProfileId,
} from '../types';

/**
 * Deterministic scoring. No randomness anywhere:
 *  1. Raw dimension totals are summed from the chosen answers.
 *  2. Each total is min–max normalized to 0–100 against the lowest and
 *     highest total that is achievable with this question set.
 *  3. Each profile gets an affinity total from the chosen answers plus a
 *     small bonus for how well the normalized scores match its signature.
 *     The highest total wins; ties resolve by PROFILE_ORDER.
 */

/** How strongly each profile favours each dimension (weights sum to 1). */
const SIGNATURES: Record<ProfileId, DimensionScores> = {
  'strategic-creator': { personal: 0.2, professional: 0.4, digital: 0.4 },
  'analytical-explorer': { personal: 0.1, professional: 0.3, digital: 0.6 },
  'adaptive-builder': { personal: 0.1, professional: 0.6, digital: 0.3 },
  'independent-thinker': { personal: 0.7, professional: 0.1, digital: 0.2 },
  'collaborative-visionary': { personal: 0.45, professional: 0.5, digital: 0.05 },
};

/** Maximum bonus a profile can earn from its dimension signature. */
const SIGNATURE_BONUS = 2;

const BOUNDS: Record<Dimension, { min: number; max: number }> = (() => {
  const bounds = {
    personal: { min: 0, max: 0 },
    professional: { min: 0, max: 0 },
    digital: { min: 0, max: 0 },
  };
  for (const dimension of DIMENSIONS) {
    for (const question of questions) {
      const values = question.options.map((option) => option.scores[dimension]);
      bounds[dimension].min += Math.min(...values);
      bounds[dimension].max += Math.max(...values);
    }
  }
  return bounds;
})();

/** True when `answers` holds one valid option id for each question. */
export function isValidAnswers(answers: unknown): answers is string[] {
  if (!Array.isArray(answers) || answers.length !== questions.length) return false;
  return questions.every((question, index) =>
    question.options.some((option) => option.id === answers[index]),
  );
}

export function calculateScores(answers: string[]): DimensionScores {
  const raw: DimensionScores = { personal: 0, professional: 0, digital: 0 };
  questions.forEach((question, index) => {
    const option = question.options.find((candidate) => candidate.id === answers[index]);
    if (!option) return;
    for (const dimension of DIMENSIONS) raw[dimension] += option.scores[dimension];
  });

  const normalized: DimensionScores = { personal: 0, professional: 0, digital: 0 };
  for (const dimension of DIMENSIONS) {
    const { min, max } = BOUNDS[dimension];
    const value = max === min ? 0.5 : (raw[dimension] - min) / (max - min);
    normalized[dimension] = Math.round(Math.min(1, Math.max(0, value)) * 100);
  }
  return normalized;
}

export function selectProfile(answers: string[], scores: DimensionScores): ProfileId {
  const affinity: Record<ProfileId, number> = {
    'strategic-creator': 0,
    'analytical-explorer': 0,
    'adaptive-builder': 0,
    'independent-thinker': 0,
    'collaborative-visionary': 0,
  };

  questions.forEach((question, index) => {
    const option = question.options.find((candidate) => candidate.id === answers[index]);
    if (!option) return;
    for (const id of PROFILE_ORDER) affinity[id] += option.affinity[id] ?? 0;
  });

  let best: ProfileId = PROFILE_ORDER[0];
  let bestTotal = -Infinity;
  for (const id of PROFILE_ORDER) {
    const signature = SIGNATURES[id];
    const fit = DIMENSIONS.reduce((sum, d) => sum + signature[d] * scores[d], 0) / 100;
    const total = affinity[id] + fit * SIGNATURE_BONUS;
    if (total > bestTotal + 1e-9) {
      best = id;
      bestTotal = total;
    }
  }
  return best;
}

export function calculateResult(answers: string[]): AssessmentResult {
  if (!isValidAnswers(answers)) {
    throw new Error('Incomplete or invalid answers.');
  }
  const scores = calculateScores(answers);
  const ranked = [...DIMENSIONS].sort((a, b) => scores[b] - scores[a]);
  return {
    profileId: selectProfile(answers, scores),
    scores,
    strongest: ranked[0],
    weakest: ranked[ranked.length - 1],
  };
}

export interface Report {
  profile: Profile;
  insight: string;
  suggestion: string;
}

/** Combines the profile copy with notes for the user's strongest/weakest dimension. */
export function composeReport(result: AssessmentResult, lang: Lang): Report {
  const profile = getProfile(result.profileId, lang);
  return {
    profile,
    insight: `${profile.insight} ${getDimensionMeta(result.strongest, lang).strength}`,
    suggestion: `${profile.suggestion} ${getDimensionMeta(result.weakest, lang).growth}`,
  };
}
