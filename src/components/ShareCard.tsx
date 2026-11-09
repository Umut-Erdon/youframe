import { forwardRef } from 'react';
import { getDimensionMeta, DIMENSIONS } from '../data/dimensions';
import { useLanguage } from '../i18n/LanguageContext';
import { composeReport } from '../utils/scoringEngine';
import type { AssessmentResult } from '../types';
import IdentityChart from './IdentityChart';
import { BrandMark } from './Navbar';

interface Props {
  result: AssessmentResult;
}

/** Fixed 1080×1350 canvas. Rendered to PNG with html-to-image. */
const ShareCard = forwardRef<HTMLDivElement, Props>(function ShareCard({ result }, ref) {
  const { t, lang } = useLanguage();
  const { profile } = composeReport(result, lang);

  return (
    <div className="share-card" ref={ref}>
      <div className="sc-glow sc-glow-a" />
      <div className="sc-glow sc-glow-b" />

      <div className="sc-top">
        <div className="sc-brand">
          <BrandMark size={52} />
          <span>YOUFRAME</span>
        </div>
        <span className="sc-pill">{t('scIdentityProfile')}</span>
      </div>

      <div className="sc-main">
        <span className="sc-eyebrow">{t('scMyIdentity')}</span>
        <h2>{profile.name}</h2>
        <p className="sc-desc">{profile.shortDescription}</p>
        <div className="sc-traits">
          {profile.traits.map((trait) => (
            <span key={trait}>{trait}</span>
          ))}
        </div>
      </div>

      <IdentityChart scores={result.scores} animate={false} className="sc-chart" />

      <div className="sc-scores">
        {DIMENSIONS.map((d) => (
          <div key={d} className="sc-score" style={{ ['--accent' as string]: getDimensionMeta(d, lang).color }}>
            <span className="sc-score-value">{result.scores[d]}</span>
            <span className="sc-score-label">{getDimensionMeta(d, lang).short}</span>
            <span className="sc-score-bar">
              <i style={{ width: `${result.scores[d]}%` }} />
            </span>
          </div>
        ))}
      </div>

      <div className="sc-footer">
        <strong>{t('scTagline')}</strong>
        <span>{t('scFooter')}</span>
      </div>
    </div>
  );
});

export default ShareCard;
