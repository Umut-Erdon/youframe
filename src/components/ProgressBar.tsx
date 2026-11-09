import { useLanguage } from '../i18n/LanguageContext';

interface Props {
  current: number; // zero-based index of the visible question
  total: number;
}

export default function ProgressBar({ current, total }: Props) {
  const { t } = useLanguage();
  const percent = Math.round(((current + 1) / total) * 100);
  return (
    <div className="progress" role="progressbar" aria-valuemin={1} aria-valuemax={total} aria-valuenow={current + 1} aria-label={t('questionOf', { n: current + 1, total })}>
      <div className="progress-meta">
        <span>
          {t('questionWord')} <strong>{current + 1}</strong> {t('ofWord')} {total}
        </span>
        <span>{percent}%</span>
      </div>
      <div className="progress-steps" aria-hidden="true">
        {Array.from({ length: total }, (_, i) => (
          <span key={i} className={i < current ? 'done' : i === current ? 'active' : ''} />
        ))}
      </div>
    </div>
  );
}
