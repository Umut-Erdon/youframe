import { getDimensionMeta } from '../data/dimensions';
import { useLanguage } from '../i18n/LanguageContext';
import { useAnimatedValue } from '../hooks/useAnimatedValue';
import type { Dimension } from '../types';
import DimensionIcon from './DimensionIcon';

interface Props {
  dimension: Dimension;
  value: number;
  delay?: number;
}

export default function ScoreCard({ dimension, value, delay = 0 }: Props) {
  const { t, lang } = useLanguage();
  const meta = getDimensionMeta(dimension, lang);
  const animated = useAnimatedValue(value, 1100, delay);

  return (
    <article className="card score-card" style={{ ['--accent' as string]: meta.color }}>
      <div className="score-head">
        <span className="icon-badge">
          <DimensionIcon dimension={dimension} size={20} />
        </span>
        <span className="score-label">{meta.label}</span>
      </div>
      <div className="score-value" aria-label={t('scoreAria', { name: meta.short, value })}>
        {Math.round(animated)}
        <small>/100</small>
      </div>
      <div className="meter" aria-hidden="true">
        <span style={{ width: `${animated}%` }} />
      </div>
      <p>{meta.description}</p>
    </article>
  );
}
