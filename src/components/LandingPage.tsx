import { ArrowRight, Clock, History, ListChecks, ShieldCheck, Sparkles } from 'lucide-react';
import { getDimensionMeta, DIMENSIONS } from '../data/dimensions';
import { getProfile } from '../data/profiles';
import { useLanguage } from '../i18n/LanguageContext';
import type { AssessmentResult } from '../types';
import DimensionIcon from './DimensionIcon';

interface Props {
  onStart: () => void;
  onViewSaved: () => void;
  saved: AssessmentResult | null;
}

const facts = [
  { icon: ListChecks, key: 'fact1' },
  { icon: Clock, key: 'fact2' },
  { icon: Sparkles, key: 'fact3' },
  { icon: ShieldCheck, key: 'fact4' },
] as const;

export default function LandingPage({ onStart, onViewSaved, saved }: Props) {
  const { t, lang } = useLanguage();
  return (
    <main className="landing container">
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">
            <Sparkles size={14} aria-hidden="true" /> {t('eyebrow')}
          </span>
          <h1>
            {t('heroTitleA')}
            <span className="text-gradient">{t('heroTitleB')}</span>
          </h1>
          <p className="lede">
            {t('heroLede')}
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary btn-lg" onClick={onStart}>
              {t('discover')}
              <ArrowRight size={18} aria-hidden="true" />
            </button>
            {saved && (
              <button className="btn btn-secondary btn-lg" onClick={onViewSaved}>
                <History size={18} aria-hidden="true" />
                {t('viewSaved')}
                <span className="btn-note">{getProfile(saved.profileId, lang).name}</span>
              </button>
            )}
          </div>
          <ul className="facts">
            {facts.map(({ icon: Icon, key }) => (
              <li key={key}>
                <Icon size={16} aria-hidden="true" />
                {t(key)}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="frame">
            <span className="corner tl" />
            <span className="corner tr" />
            <span className="corner bl" />
            <span className="corner br" />
            <div className="frame-core">
              <span className="frame-pulse" />
              <span className="frame-label">{t('frameLabel')}</span>
            </div>
            {DIMENSIONS.map((dimension) => (
              <span key={dimension} className={`orbit-chip orbit-${dimension}`}>
                <span className="chip-dot" style={{ background: getDimensionMeta(dimension, lang).color }} />
                {getDimensionMeta(dimension, lang).short}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="dimension-grid" aria-label={t('dimensionsAria')}>
        {DIMENSIONS.map((dimension, i) => (
          <article
            key={dimension}
            className="card dimension-card"
            style={{ ['--accent' as string]: getDimensionMeta(dimension, lang).color, animationDelay: `${i * 90}ms` }}
          >
            <span className="icon-badge">
              <DimensionIcon dimension={dimension} size={22} />
            </span>
            <h3>{getDimensionMeta(dimension, lang).label}</h3>
            <p>{getDimensionMeta(dimension, lang).description}</p>
          </article>
        ))}
      </section>

      <p className="fineprint">
        {t('fineLanding')}
      </p>
    </main>
  );
}
