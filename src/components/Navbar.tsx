import { RotateCcw } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import type { Lang } from '../types';

interface Props {
  onHome: () => void;
  onRestart?: () => void;
}

export function BrandMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <defs>
        <linearGradient id="brand-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#a78bfa" />
          <stop offset="1" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <path
        d="M6 12V6h6M20 6h6v6M26 20v6h-6M12 26H6v-6"
        fill="none"
        stroke="url(#brand-grad)"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="16" r="3.2" fill="url(#brand-grad)" />
    </svg>
  );
}

const LANGS: Lang[] = ['tr', 'en'];

export function LanguageToggle() {
  const { lang, setLang, t } = useLanguage();
  return (
    <div className="lang-toggle" role="group" aria-label={t('langAria')}>
      {LANGS.map((code) => (
        <button
          key={code}
          type="button"
          className={`lang-btn${lang === code ? ' active' : ''}`}
          aria-pressed={lang === code}
          lang={code}
          onClick={() => setLang(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default function Navbar({ onHome, onRestart }: Props) {
  const { t } = useLanguage();
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <button className="brand" onClick={onHome} aria-label={t('homeAria')}>
          <BrandMark />
          <span className="brand-name">YOUFRAME</span>
        </button>
        <div className="navbar-actions">
          {onRestart && (
            <button className="btn btn-ghost btn-sm" onClick={onRestart}>
              <RotateCcw size={15} aria-hidden="true" />
              <span className="restart-label">{t('restart')}</span>
            </button>
          )}
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
