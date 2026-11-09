import { Check } from 'lucide-react';
import type { Direction } from '../hooks/useAssessment';
import type { Question } from '../types';

interface Props {
  question: Question;
  index: number;
  selected: string | null;
  direction: Direction;
  onSelect: (optionId: string) => void;
}

const LETTERS = ['A', 'B', 'C', 'D'];

export default function QuestionCard({ question, index, selected, direction, onSelect }: Props) {
  return (
    <div className={`question slide-${direction}`}>
      <span className="question-number">{String(index + 1).padStart(2, '0')}</span>
      <h2 id={`q-${question.id}`}>{question.prompt}</h2>
      <p className="question-hint">{question.hint}</p>

      <div className="options" role="radiogroup" aria-labelledby={`q-${question.id}`}>
        {question.options.map((option, i) => {
          const isSelected = selected === option.id;
          return (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              className={`option${isSelected ? ' selected' : ''}`}
              onClick={() => onSelect(option.id)}
            >
              <span className="option-letter">{LETTERS[i]}</span>
              <span className="option-text">
                <span className="option-label">{option.label}</span>
                <span className="option-detail">{option.detail}</span>
              </span>
              <span className="option-check" aria-hidden="true">
                <Check size={14} strokeWidth={3} />
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
