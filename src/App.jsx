import './App.css'
import { useI18n } from './i18n/context'

function App() {
  const { locale, setLocale, t } = useI18n()

  return (
    <main className="home">
      <div className="language-switcher" aria-label={t.language.switchLabel}>
        <button
          className={locale === 'zh-CN' ? 'active' : ''}
          type="button"
          onClick={() => setLocale('zh-CN')}
          aria-pressed={locale === 'zh-CN'}
        >
          {t.language.chinese}
        </button>
        <button
          className={locale === 'en-US' ? 'active' : ''}
          type="button"
          onClick={() => setLocale('en-US')}
          aria-pressed={locale === 'en-US'}
        >
          {t.language.english}
        </button>
      </div>

      <h1>{t.hero.title}</h1>
      <p>{t.hero.description}</p>

      <div className="project-links">
        <a href="https://survey-tau-one.vercel.app" target="_blank" rel="noreferrer">
          {t.projects.surveyManagement}
        </a>

        <a href="https://2024zuel-report.vercel.app" target="_blank" rel="noreferrer">
          {t.projects.zuelReport}
        </a>
      </div>
    </main>
  );
}

export default App;
