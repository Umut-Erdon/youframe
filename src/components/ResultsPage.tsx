import { useCallback, useEffect, useRef, useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Copy,
  Download,
  Lightbulb,
  Loader2,
  RotateCcw,
  Share2,
  Target,
} from 'lucide-react';
import { DIMENSIONS } from '../data/dimensions';
import { useLanguage } from '../i18n/LanguageContext';
import { composeReport } from '../utils/scoringEngine';
import {
  buildShareText,
  copyText,
  downloadCardPng,
  SHARE_CARD_HEIGHT,
  SHARE_CARD_WIDTH,
  shareOnLinkedIn,
} from '../utils/shareUtils';
import type { AssessmentResult } from '../types';
import IdentityChart from './IdentityChart';
import ScoreCard from './ScoreCard';
import ShareCard from './ShareCard';

interface Props {
  result: AssessmentResult;
  storageFailed: boolean;
  onRestart: () => void;
}

interface Notice {
  kind: 'success' | 'error';
  text: string;
}

export default function ResultsPage({ result, storageFailed, onRestart }: Props) {
  const { t, lang } = useLanguage();
  const { profile, insight, suggestion } = composeReport(result, lang);
  const exportRef = useRef<HTMLDivElement>(null);
  const previewWrapRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.3);
  const [exporting, setExporting] = useState(false);
  const [notice, setNotice] = useState<Notice | null>(null);

  // Scale the 1080×1350 card preview to the width of its container.
  useEffect(() => {
    const el = previewWrapRef.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / SHARE_CARD_WIDTH);
    update();
    if (typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!notice) return;
    const timer = window.setTimeout(() => setNotice(null), 5000);
    return () => window.clearTimeout(timer);
  }, [notice]);

  const handleDownload = useCallback(async () => {
    if (!exportRef.current || exporting) return;
    setExporting(true);
    try {
      await downloadCardPng(exportRef.current, profile.name);
      setNotice({ kind: 'success', text: t('okDownload') });
    } catch {
      setNotice({ kind: 'error', text: t('errImage') });
    } finally {
      setExporting(false);
    }
  }, [exporting, profile.name, t]);

  const handleCopy = useCallback(async () => {
    const ok = await copyText(buildShareText(result, lang));
    setNotice(
      ok
        ? { kind: 'success', text: t('okCopied') }
        : { kind: 'error', text: t('errCopy') },
    );
  }, [result, lang, t]);

  const handleLinkedIn = useCallback(async () => {
    const { copied, opened } = await shareOnLinkedIn(buildShareText(result, lang));
    if (!opened) {
      setNotice({
        kind: 'error',
        text: copied ? t('liBlockedCopied') : t('liBlocked'),
      });
    } else {
      setNotice({
        kind: 'success',
        text: copied ? t('liOkCopied') : t('liOk'),
      });
    }
  }, [result, lang, t]);

  return (
    <main className="results container">
      <section className="results-hero">
        <span className="eyebrow">{t('yourIdentity')}</span>
        <h1 className="text-gradient">{profile.name}</h1>
        <p className="lede">{profile.description}</p>
        <ul className="trait-list" aria-label={t('traitsAria')}>
          {profile.traits.map((trait) => (
            <li key={trait}>{trait}</li>
          ))}
        </ul>
      </section>

      <section className="score-grid" aria-label={t('scoresAria')}>
        {DIMENSIONS.map((dimension, i) => (
          <ScoreCard key={dimension} dimension={dimension} value={result.scores[dimension]} delay={i * 150} />
        ))}
      </section>

      <section className="insight-layout">
        <div className="card chart-card">
          <h2 className="card-title">{t('identityShape')}</h2>
          <IdentityChart scores={result.scores} className="chart" />
        </div>
        <div className="insight-stack">
          <article className="card insight-card">
            <span className="icon-badge">
              <Lightbulb size={20} aria-hidden="true" />
            </span>
            <h2 className="card-title">{t('personalInsight')}</h2>
            <p>{insight}</p>
          </article>
          <article className="card insight-card">
            <span className="icon-badge">
              <Target size={20} aria-hidden="true" />
            </span>
            <h2 className="card-title">{t('devSuggestion')}</h2>
            <p>{suggestion}</p>
          </article>
        </div>
      </section>

      <section className="share-section card">
        <div className="share-info">
          <h2 className="card-title">{t('shareTitle')}</h2>
          <p>{t('shareInfo')}</p>
          <div className="share-actions">
            <button className="btn btn-primary" onClick={handleDownload} disabled={exporting}>
              {exporting ? (
                <>
                  <Loader2 size={16} className="spin" aria-hidden="true" /> {t('creatingImage')}
                </>
              ) : (
                <>
                  <Download size={16} aria-hidden="true" /> {t('downloadPng')}
                </>
              )}
            </button>
            <button className="btn btn-secondary" onClick={handleCopy}>
              <Copy size={16} aria-hidden="true" /> {t('copyText')}
            </button>
            <button className="btn btn-secondary" onClick={handleLinkedIn}>
              <Share2 size={16} aria-hidden="true" /> {t('shareLinkedIn')}
            </button>
          </div>
          <div className="notice-slot" aria-live="polite">
            {notice && (
              <p className={`notice notice-${notice.kind}`}>
                {notice.kind === 'success' ? (
                  <CheckCircle2 size={16} aria-hidden="true" />
                ) : (
                  <AlertCircle size={16} aria-hidden="true" />
                )}
                {notice.text}
              </p>
            )}
          </div>
          <textarea className="share-text" readOnly value={buildShareText(result, lang)} aria-label={t('resultTextAria')} rows={6} />
        </div>

        <div className="share-preview" ref={previewWrapRef} style={{ height: SHARE_CARD_HEIGHT * scale }}>
          <div
            className="share-preview-inner"
            style={{ width: SHARE_CARD_WIDTH, height: SHARE_CARD_HEIGHT, transform: `scale(${scale})` }}
          >
            <ShareCard result={result} />
          </div>
        </div>
      </section>

      {/* Off-screen, unscaled copy used only for PNG export. */}
      <div className="share-export" aria-hidden="true">
        <ShareCard ref={exportRef} result={result} />
      </div>

      <div className="results-footer">
        {storageFailed && (
          <p className="notice notice-error">
            <AlertCircle size={16} aria-hidden="true" />
            {t('storageFailed')}
          </p>
        )}
        <p className="fineprint">{t('fineResults')}</p>
        <button className="btn btn-secondary" onClick={onRestart}>
          <RotateCcw size={16} aria-hidden="true" /> {t('restartAssessment')}
        </button>
      </div>
    </main>
  );
}
