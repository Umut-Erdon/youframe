import { Loader2 } from 'lucide-react';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import QuizPage from './components/QuizPage';
import ResultsPage from './components/ResultsPage';
import { useAssessment } from './hooks/useAssessment';
import { useLanguage } from './i18n/LanguageContext';

export default function App() {
  const a = useAssessment();
  const { t } = useLanguage();

  return (
    <div className="app">
      <div className="bg-glow" aria-hidden="true" />
      <Navbar
        onHome={a.goHome}
        onRestart={a.stage === 'quiz' || a.stage === 'results' ? a.start : undefined}
      />

      {a.stage === 'landing' && (
        <LandingPage onStart={a.start} onViewSaved={a.viewSaved} saved={a.saved?.result ?? null} />
      )}

      {a.stage === 'quiz' && (
        <QuizPage
          index={a.index}
          total={a.total}
          direction={a.direction}
          answers={a.answers}
          error={a.error}
          errorTick={a.errorTick}
          onSelect={a.selectAnswer}
          onNext={a.next}
          onBack={a.back}
        />
      )}

      {a.stage === 'analyzing' && (
        <main className="analyzing container" role="status" aria-live="polite">
          <Loader2 size={40} className="spin" aria-hidden="true" />
          <h2>{t('analyzingTitle')}</h2>
          <p>{t('analyzingText')}</p>
        </main>
      )}

      {a.stage === 'results' &&
        (a.result ? (
          <ResultsPage result={a.result} storageFailed={a.storageFailed} onRestart={a.start} />
        ) : (
          <main className="analyzing container">
            <h2>{t('noResult')}</h2>
            <button className="btn btn-primary" onClick={a.start}>
              {t('startAgain')}
            </button>
          </main>
        ))}
    </div>
  );
}
