import { Fragment, useEffect, useRef, useState } from 'react'
import './App.css'
import desktopBackground from './assets/bg-pc.jpg'
import mobileBackground from './assets/bg-mb.jpg'
import studentIllustration from './assets/story-student.png'
import booksIllustration from './assets/story-books.png'
import signpostIllustration from './assets/story-signpost.png'
import zuelImage from './assets/projects/project-zuel.webp'
import investigateImage from './assets/projects/project-investigate.webp'
import llmImage from './assets/projects/project-llm.webp'
import timeBankImage from './assets/projects/project-time-bank.webp'
import { useI18n } from './i18n/context'

const storyIllustrations = [studentIllustration, booksIllustration, signpostIllustration]

const storyRoutes = [
  { number: '01', slug: 'who', art: 'student' },
  { number: '02', slug: 'what', art: 'books' },
  { number: '03', slug: 'why', art: 'signpost' },
]

const projects = [
  {
    id: 'annualBill', tags: ['Vue 3', 'Vue Router', 'Swiper'], time: '2024', image: zuelImage, href: 'https://jiangzhiqian.top/project2/', kind: 'campus',
  },
  {
    id: 'survey', tags: ['React', 'Vite', 'SCSS'], time: '2026', image: investigateImage, href: 'https://survey-tau-one.vercel.app/admin', kind: 'survey',
  },
  {
    id: 'mutualAid', tags: ['Vue 3', 'Node.js', 'MySQL', 'JWT'], time: '2026', image: timeBankImage, href: 'https://github.com/zhiqianj68-stella/mutual-aid-system', kind: 'mutual-aid',
  },
  {
    id: 'speech', tags: ['HTML5', 'MediaDevices', 'Chart.js'], time: '2024', image: llmImage, href: 'https://gitee.com/mumu04/sppech1', kind: 'research',
  }
]

function ProjectCard({ project, copy, detailed = false }) {
  const content = <>
    <div className={`project-preview preview-${project.kind}`}>
      <img src={project.image} alt={copy.alt} loading="lazy" decoding="async" />
    </div>
    <div className={`project-info${detailed ? ' project-info-detailed' : ''}`}>
      <div className="project-title-row"><h3>{copy.title}</h3>{project.href && <span className="project-open" aria-hidden="true">↗</span>}</div>
      <div className="project-meta-row"><time dateTime={project.time}>{project.time}</time><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
      <p className="project-name">{copy.name}</p>
    </div>
    {detailed && <ul className="project-description">{copy.points.map(point => <li key={point}>{point}</li>)}</ul>}
  </>

  return project.href
    ? <a className={`project-card${detailed ? ' project-card-detailed' : ''}`} href={project.href} target="_blank" rel="noreferrer">{content}</a>
    : <article className={`project-card${detailed ? ' project-card-detailed' : ''}`}>{content}</article>
}

function ProjectsPage({ t, locale, setLocale }) {
  return (
    <main className="projects-page">
      <header className="story-page-header">
        <a className="story-page-brand" href="/">← MY WORLD <span>✦</span></a>
        <button className="language-switch language-switch-inline" type="button" aria-label={t.language.switchLabel} onClick={() => setLocale(locale === 'zh-CN' ? 'en-US' : 'zh-CN')}>
          {locale === 'zh-CN' ? t.language.english : t.language.chinese}
        </button>
      </header>
      <section className="projects-page-heading">
        <p className="story-page-number">{t.projects.pageEyebrow}</p>
        <h1>{t.projects.pageTitle}</h1>
        <p>{t.projects.pageDescription}</p>
        <p className="projects-more-links">{t.projects.moreProjects}<a href="https://github.com/zhiqianj68-stella" target="_blank" rel="noreferrer">GitHub</a> {t.projects.and} <a href="https://gitee.com/JiangZhiqian" target="_blank" rel="noreferrer">Gitee</a></p>
      </section>
      <section className="project-grid projects-page-grid" aria-label={t.projects.allLabel}>
        {projects.map(project => <ProjectCard project={project} copy={t.projects.items[project.id]} detailed key={project.id} />)}
      </section>
      <footer className="story-page-footer"><a href="/">MY WORLD</a><span>{t.footer.signoff}</span></footer>
    </main>
  )
}

function StoryPage({ story, copy, illustration, t, locale, setLocale }) {
  return (
    <main className="story-page">
      <header className="story-page-header">
        <a className="story-page-brand" href="/">← MY WORLD <span>✦</span></a>
        <button className="language-switch language-switch-inline" type="button" aria-label={t.language.switchLabel} onClick={() => setLocale(locale === 'zh-CN' ? 'en-US' : 'zh-CN')}>
          {locale === 'zh-CN' ? t.language.english : t.language.chinese}
        </button>
      </header>
      <section className="story-page-hero">
        <div>
          <p className="story-page-number">{story.number} / {t.navigation.storyLabel}</p>
          <h1>{copy.chinese}</h1>
          <p className="story-page-summary">{copy.summary}</p>
        </div>
        <img src={illustration} alt="" />
      </section>
      <section className="story-page-sections" aria-label={copy.chinese}>
        {copy.sections.map((section, index) => (
          <article className="story-page-section" key={section.title}>
            <span>0{index + 1}</span>
            <div><h2>{section.title}</h2><p>{section.body}</p></div>
          </article>
        ))}
      </section>
      <footer className="story-page-footer"><a href="/">MY WORLD</a><span>{t.footer.signoff}</span></footer>
    </main>
  )
}

function App() {
  const { locale, setLocale, t } = useI18n()
  const [activeStory, setActiveStory] = useState(1)
  const [menuOpen, setMenuOpen] = useState(false)
  const [now, setNow] = useState(() => new Date())
  const [pageViews, setPageViews] = useState(null)
  const countStarted = useRef(false)
  const lastStoryTap = useRef({ slug: null, time: 0 })
  const currentStory = storyRoutes.find(story => window.location.pathname === `/${story.slug}`)
  const isProjectsPage = window.location.pathname.replace(/\/$/, '') === '/projects'

  const handleStoryCardClick = (story, index) => {
    if (window.matchMedia('(max-width: 760px)').matches) {
      const tappedAt = Date.now()
      const previousTap = lastStoryTap.current

      if (previousTap.slug === story.slug && tappedAt - previousTap.time < 500) {
        lastStoryTap.current = { slug: null, time: 0 }
        window.location.assign(`/${story.slug}`)
        return
      }

      lastStoryTap.current = { slug: story.slug, time: tappedAt }
    }

    setActiveStory(index)
  }

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 15_000)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    if (countStarted.current) return
    countStarted.current = true

    fetch('https://api.jiangzhiqian.top/count', { method: 'POST' })
      .then(response => {
        if (!response.ok) throw new Error('Counter request failed')
        return response.json()
      })
      .then(data => setPageViews(data.count))
      .catch(error => console.error('Unable to load page view count:', error))
  }, [])

  const dateText = new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'numeric', day: 'numeric' }).format(now)
  const weekdayText = new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(now)
  const timeText = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).format(now)

  if (currentStory) {
    return <StoryPage story={currentStory} copy={t.stories[currentStory.slug]} illustration={storyIllustrations[storyRoutes.indexOf(currentStory)]} t={t} locale={locale} setLocale={setLocale} />
  }
  if (isProjectsPage) return <ProjectsPage t={t} locale={locale} setLocale={setLocale} />

  return (
    <main className={`page-shell${locale === 'en-US' ? ' is-english' : ''}`} style={{ '--desktop-bg': `url(${desktopBackground})`, '--mobile-bg': `url(${mobileBackground})` }}>
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label={t.navigation.homeLabel}>MY WORLD<span>✦</span></a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label={t.navigation.label}>
          <a href="#about" onClick={() => setMenuOpen(false)}>{t.navigation.about}</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>{t.navigation.projects}</a>
          <a href="mailto:hello@example.com" onClick={() => setMenuOpen(false)}>{t.navigation.contact}</a>
        </nav>
        <button className="menu-toggle" type="button" aria-label={t.navigation.toggleMenu} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-scene">
          <div className="scene-meta"><span><span className="meta-icon">▦</span> {dateText} <i>{weekdayText}</i> <i>{timeText}</i></span><span>◉ &nbsp;{pageViews === null ? '—' : pageViews.toLocaleString()}</span></div>
          <button className="language-switch" type="button" aria-label={t.language.switchLabel} onClick={() => setLocale(locale === 'zh-CN' ? 'en-US' : 'zh-CN')}>
            {locale === 'zh-CN' ? t.language.english : t.language.chinese}
          </button>
          <div className="hero-copy">
            <p className="handwriting">{t.hero.greeting}</p>
            <h1 id="hero-title">{t.hero.title}<br /><em>{t.hero.titleEmphasis}</em></h1>
            <p className="hero-chinese">{t.hero.description}</p>
            <p className="hero-words">{t.hero.values.map((value, index) => <Fragment key={value}>{index > 0 && <span>·</span>}{value}</Fragment>)}</p>
          </div>
          <div className="paper-plane" aria-hidden="true">➤</div>
          <div className="hero-doodle" aria-hidden="true">⌁</div>
        </div>

        <div className="story-grid" id="about">
          {storyRoutes.map((story, index) => {
            const copy = t.stories[story.slug]
            return <article className={`story-card ${activeStory === index ? 'is-active' : ''}`} key={story.number} onClick={() => handleStoryCardClick(story, index)}>
              <span className="story-number">{story.number}</span>
              <span className="story-title">{copy.title}</span>
              <span className={`story-art art-${story.art}`} style={{ backgroundImage: `url(${storyIllustrations[index]})` }} aria-hidden="true" />
              <a className="story-arrow" href={`/${story.slug}`} aria-label={`${t.navigation.storyMore}: ${copy.chinese}`}>↗</a>
              <span className="story-chinese">{copy.chinese}</span>
              <span className="story-detail">{copy.detail} …</span>
            </article>
          })}
        </div>
        <div className="story-hint"><span>←</span> {t.hero.storyHint} <span>→</span></div>
        <div className="story-dots" aria-label={t.navigation.storyCards}>
          {storyRoutes.map((story, index) => <button key={story.number} aria-label={`${t.navigation.storyMore}: ${t.stories[story.slug].title}`} aria-pressed={activeStory === index} onClick={() => setActiveStory(index)} />)}
        </div>
      </section>

      <section className="projects-section" id="projects" aria-labelledby="projects-title">
        <div className="section-heading">
          <div><h2 id="projects-title">{t.navigation.projects} <span>✦</span></h2><p><i /> {t.hero.projectHint} <i /></p></div>
          <a className="view-all" href="/projects">{t.hero.viewAll} <span>→</span></a>
        </div>
        <div className="project-grid" id="project-list">
          {projects.map(project => <ProjectCard project={project} copy={t.projects.items[project.id]} key={project.id} />)}
        </div>
      </section>
      <footer className="footer"><span>{t.footer.home}</span><span>{t.footer.copyright}</span></footer>
    </main>
  )
}

export default App
