export type Lang = 'tr' | 'en';
export type Localized<T = string> = Record<Lang, T>;

export type Dimension = 'personal' | 'professional' | 'digital';

export type ProfileId =
  | 'strategic-creator'
  | 'analytical-explorer'
  | 'adaptive-builder'
  | 'independent-thinker'
  | 'collaborative-visionary';

export type DimensionScores = Record<Dimension, number>;

export interface AnswerOption {
  id: string;
  label: string;
  detail: string;
  /** Contribution of this answer to each dimension (0–3). */
  scores: DimensionScores;
  /** Affinity of this answer with each identity profile (0–3). */
  affinity: Partial<Record<ProfileId, number>>;
}

export interface Question {
  id: string;
  prompt: string;
  hint: string;
  options: AnswerOption[];
}

export interface Profile {
  id: ProfileId;
  name: string;
  shortDescription: string;
  description: string;
  traits: [string, string, string];
  insight: string;
  suggestion: string;
}

export interface AssessmentResult {
  profileId: ProfileId;
  scores: DimensionScores;
  strongest: Dimension;
  weakest: Dimension;
}
