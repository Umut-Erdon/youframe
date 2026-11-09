import { useCallback, useEffect, useState } from 'react';
import { questions } from '../data/questions';
import type { UiKey } from '../i18n/translations';
import { calculateResult, isValidAnswers } from '../utils/scoringEngine';
import { loadAssessment, saveAssessment, type SavedAssessment } from '../utils/storage';
import type { AssessmentResult } from '../types';

export type Stage = 'landing' | 'quiz' | 'analyzing' | 'results';
export type Direction = 'forward' | 'back';

const TOTAL = questions.length;
const ANALYZE_MS = 1400;

export function useAssessment() {
  const [stage, setStage] = useState<Stage>('landing');
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<Direction>('forward');
  const [answers, setAnswers] = useState<(string | null)[]>(() => Array(TOTAL).fill(null));
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [saved, setSaved] = useState<SavedAssessment | null>(() => loadAssessment());
  const [error, setError] = useState<UiKey | null>(null);
  const [errorTick, setErrorTick] = useState(0);
  const [storageFailed, setStorageFailed] = useState(false);

  // Scroll to the top whenever the visible screen changes.
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [stage, index]);

  // Compute, save and show the result after the short "analyzing" state.
  useEffect(() => {
    if (stage !== 'analyzing') return;
    const timer = window.setTimeout(() => {
      try {
        if (!isValidAnswers(answers)) throw new Error('Some answers are missing.');
        const computed = calculateResult(answers);
        const ok = saveAssessment(answers);
        setStorageFailed(!ok);
        setSaved(ok ? { answers, result: computed } : null);
        setResult(computed);
        setStage('results');
      } catch {
        const firstMissing = answers.findIndex((a) => a === null);
        setIndex(firstMissing === -1 ? 0 : firstMissing);
        setError('errBuild');
        setErrorTick((n) => n + 1);
        setStage('quiz');
      }
    }, ANALYZE_MS);
    return () => window.clearTimeout(timer);
  }, [stage, answers]);

  const start = useCallback(() => {
    setAnswers(Array(TOTAL).fill(null));
    setIndex(0);
    setDirection('forward');
    setError(null);
    setResult(null);
    setStage('quiz');
  }, []);

  const selectAnswer = useCallback(
    (optionId: string) => {
      setAnswers((prev) => {
        const next = [...prev];
        next[index] = optionId;
        return next;
      });
      setError(null);
    },
    [index],
  );

  const next = useCallback(() => {
    if (answers[index] === null) {
      setError('errChoose');
      setErrorTick((n) => n + 1);
      return;
    }
    setError(null);
    if (index < TOTAL - 1) {
      setDirection('forward');
      setIndex(index + 1);
    } else {
      setStage('analyzing');
    }
  }, [answers, index]);

  const back = useCallback(() => {
    setError(null);
    if (index > 0) {
      setDirection('back');
      setIndex(index - 1);
    } else {
      setStage('landing');
    }
  }, [index]);

  const goHome = useCallback(() => {
    setError(null);
    setStage('landing');
  }, []);

  const viewSaved = useCallback(() => {
    if (!saved) return;
    setAnswers(saved.answers);
    setResult(saved.result);
    setError(null);
    setStage('results');
  }, [saved]);

  return {
    stage,
    index,
    total: TOTAL,
    direction,
    answers,
    result,
    saved,
    error,
    errorTick,
    storageFailed,
    start,
    selectAnswer,
    next,
    back,
    goHome,
    viewSaved,
  };
}
