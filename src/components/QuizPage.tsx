import { AlertCircle, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { getQuestions } from '../data/questions';
import { useLanguage } from '../i18n/LanguageContext';
import type { UiKey } from '../i18n/translations';
import type { Direction } from '../hooks/useAssessment';
import ProgressBar from './ProgressBar';
import QuestionCard from './QuestionCard';

interface Props {
  index: number;
  total: number;
  direction: Direction;
  answers: (string | null)[];
  error: UiKey | null;
  errorTick: number;
  onSelect: (optionId: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function QuizPage({
  index,
  total,
  direction,
  answers,
  error,
  errorTick,
  onSelect,
  onNext,
  onBack,
}: Props) {
  const { t, lang } = useLanguage();
  const question = getQuestions(lang)[index];
  const isLast = index === total - 1;

  return (
    <main className="quiz container">
      <div className="quiz-panel card">
        <ProgressBar current={index} total={total} />

        <QuestionCard
          key={question.id}
          question={question}
          index={index}
          selected={answers[index]}
          direction={direction}
          onSelect={onSelect}
        />

        <div className="quiz-footer">
          <div className="quiz-error-slot">
            {error && (
              <p key={errorTick} className="quiz-error" role="alert">
                <AlertCircle size={16} aria-hidden="true" />
                {t(error)}
              </p>
            )}
          </div>
          <div className="quiz-nav">
            <button className="btn btn-ghost" onClick={onBack}>
              <ArrowLeft size={16} aria-hidden="true" />
              {t('back')}
            </button>
            <button className="btn btn-primary" onClick={onNext}>
              {isLast ? (
                <>
                  {t('seeResults')} <Sparkles size={16} aria-hidden="true" />
                </>
              ) : (
                <>
                  {t('next')} <ArrowRight size={16} aria-hidden="true" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
