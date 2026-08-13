import './App.css'
import { useI18n } from './i18n/context'

function App() {
  const { locale, setLocale, t } = useI18n()
  const scrollToProjects = () => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__glow hero__glow--one" aria-hidden="true" />
        <div className="hero__glow hero__glow--two" aria-hidden="true" />
        <div className="hero__grid" aria-hidden="true" />
        <nav className="nav" aria-label={t.navigation.label}>
          <a className="brand" href="#top" aria-label={t.navigation.homeLabel}><span className="brand__mark">&lt;/&gt;</span><span>{t.navigation.brand}</span></a>
      <div className="language-switcher" aria-label={t.language.switchLabel}>
            <button className={locale === 'zh-CN' ? 'active' : ''} type="button" onClick={() => setLocale('zh-CN')} aria-pressed={locale === 'zh-CN'}>中</button>
            <button className={locale === 'en-US' ? 'active' : ''} type="button" onClick={() => setLocale('en-US')} aria-pressed={locale === 'en-US'}>EN</button>
      </div>
        </nav>
        <div className="hero__content" id="top">
          <p className="hero__eyebrow">{t.hero.eyebrow}</p>
          <h1 id="hero-title">{t.hero.greeting}<span>{t.hero.role}</span></h1>
          <p className="hero__description">{t.hero.description}</p>
          <div className="hero__actions">
            <button className="button button--primary" type="button" onClick={scrollToProjects}>{t.hero.viewProjects}<span aria-hidden="true">↓</span></button>
            <a className="button button--secondary" href="mailto:your-email@example.com">{t.hero.contactMe}<span aria-hidden="true">↗</span></a>
          </div>
          <ul className="tech-list" aria-label={t.hero.techStackLabel}>{t.hero.techStack.map((technology) => <li key={technology}>{technology}</li>)}</ul>
        </div>
        <div className="scroll-hint" aria-hidden="true"><span />{t.hero.scrollHint}</div>
      </section>
      <section className="projects-preview" id="projects" aria-labelledby="projects-title">
        <p className="section-label">{t.projects.sectionLabel}</p>
        <h2 id="projects-title">{t.projects.title}</h2>
      <div className="project-links">
          <a href="https://survey-tau-one.vercel.app/admin" target="_blank" rel="noreferrer">{t.projects.surveyManagement}<span aria-hidden="true">↗</span></a>
          <a href="https://2024zuel-report.vercel.app" target="_blank" rel="noreferrer">{t.projects.zuelReport}<span aria-hidden="true">↗</span></a>
      </div>
      </section>
    </main>
  )
}

export default App;
