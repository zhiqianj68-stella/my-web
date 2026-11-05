import { useEffect, useState } from 'react'
import './App.css'
import desktopBackground from './assets/bg-pc.jpg'
import mobileBackground from './assets/bg-mb.jpg'
import studentIllustration from './assets/story-student.png'
import booksIllustration from './assets/story-books.png'
import signpostIllustration from './assets/story-signpost.png'

const storyIllustrations = [studentIllustration, booksIllustration, signpostIllustration]

const stories = [
  { number: '01', title: 'Who', chinese: '我是谁？', detail: '学生 / 教育背景 / 实习经历', art: 'student', slug: 'who', summary: '一名持续学习、探索，并通过实践积累经验的学生。', sections: [{ title: '教育背景', body: '记录所学专业、课程经历与阶段性收获。' }, { title: '实践经历', body: '整理实习、校园参与和其他值得回顾的经历。' }] },
  { number: '02', title: 'What', chinese: '我在做什么？', detail: '研究兴趣 / 项目 / 技能', art: 'books', slug: 'what', summary: '把感兴趣的问题转化为研究、项目与持续练习。', sections: [{ title: '项目实践', body: 'Campus Annual Bill：校园年度账单系统。\nLLM-driven Rumor Detection：大语言模型驱动的谣言检测项目。' }, { title: '关注方向', body: '关注数据可视化、自然语言处理与多模态技术。' }] },
  { number: '03', title: 'Why', chinese: '为什么做这个网站？', detail: '初衷 / 价值观 / 未来计划', art: 'signpost', slug: 'why', summary: '把学习、项目和思考整理成一处可以持续更新的个人空间。', sections: [{ title: '做这个网站的初衷', body: '记录正在做的事，也让每一段探索都能被回看。' }, { title: '接下来', body: '继续完善项目记录，分享新的学习成果与实践体验。' }] },
]

const projects = [
  {
    title: 'Campus Annual Bill', chinese: '校园年度账单系统', tags: ['Vue3', 'Ant Design', '数据可视化'],
    href: 'https://2024zuel-report.vercel.app', kind: 'campus',
  },
  {
    title: 'LLM-driven Rumor Detection', chinese: '大创项目：模力智鉴', tags: ['Python', 'NLP', '多模态融合'],
    href: 'https://survey-tau-one.vercel.app', kind: 'research',
  },
]

function StoryPage({ story, illustration }) {
  return (
    <main className="story-page">
      <header className="story-page-header">
        <a className="story-page-brand" href="/">MY WORLD <span>✦</span></a>
        <a className="story-page-back" href="/">← 返回首页</a>
      </header>
      <section className="story-page-hero">
        <div>
          <p className="story-page-number">{story.number} / MY STORY</p>
          <h1>{story.chinese}</h1>
          <p className="story-page-summary">{story.summary}</p>
        </div>
        <img src={illustration} alt="" />
      </section>
      <section className="story-page-sections" aria-label={story.chinese}>
        {story.sections.map((section, index) => (
          <article className="story-page-section" key={section.title}>
            <span>0{index + 1}</span>
            <div><h2>{section.title}</h2><p>{section.body}</p></div>
          </article>
        ))}
      </section>
      <footer className="story-page-footer"><a href="/">MY WORLD</a><span>Keep exploring, learning and growing.</span></footer>
    </main>
  )
}

function App() {
  const [activeStory, setActiveStory] = useState(1)
  const [menuOpen, setMenuOpen] = useState(false)
  const [now, setNow] = useState(() => new Date())
  const currentStory = stories.find(story => window.location.pathname === `/${story.slug}`)

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 15_000)
    return () => window.clearInterval(timer)
  }, [])

  const dateText = `${now.getFullYear()} / ${now.getMonth() + 1} / ${now.getDate()}`
  const weekdayText = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(now)
  const timeText = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).format(now)

  if (currentStory) {
    return <StoryPage story={currentStory} illustration={storyIllustrations[stories.indexOf(currentStory)]} />
  }

  return (
    <main className="page-shell" style={{ '--desktop-bg': `url(${desktopBackground})`, '--mobile-bg': `url(${mobileBackground})` }}>
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="回到首页">MY WORLD<span>✦</span></a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="主导航">
          <a href="#about" onClick={() => setMenuOpen(false)}>关于我</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>项目作品</a>
          <a href="mailto:hello@example.com" onClick={() => setMenuOpen(false)}>联系我</a>
        </nav>
        <button className="menu-toggle" type="button" aria-label="切换导航" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-scene">
          <div className="scene-meta"><span><span className="meta-icon">▦</span> {dateText} <i>{weekdayText}</i> <i>{timeText}</i></span><span>◉ &nbsp;12,486</span></div>
          <div className="language-switch"><span>中</span><b />EN</div>
          <div className="hero-copy">
            <p className="handwriting">Hi,</p>
            <h1 id="hero-title">Welcome to<br /><em>My World</em></h1>
            <p className="hero-chinese">在探索中，成为更好的自己。</p>
            <p className="hero-words">Explore <span>·</span> Learn <span>·</span> Build <span>·</span> Grow</p>
          </div>
          <div className="paper-plane" aria-hidden="true">➤</div>
          <div className="hero-doodle" aria-hidden="true">⌁</div>
        </div>

        <div className="story-grid" id="about">
          {stories.map((story, index) => (
            <article className={`story-card ${activeStory === index ? 'is-active' : ''}`} key={story.number} onClick={() => setActiveStory(index)} onDoubleClick={() => { if (window.matchMedia('(max-width: 760px)').matches) window.location.assign(`/${story.slug}`) }}>
              <span className="story-number">{story.number}</span>
              <span className="story-title">{story.title}</span>
              <span className={`story-art art-${story.art}`} style={{ backgroundImage: `url(${storyIllustrations[index]})` }} aria-hidden="true" />
              <a className="story-arrow" href={`/${story.slug}`} aria-label={`了解更多：${story.chinese}`}>↗</a>
              <span className="story-chinese">{story.chinese}</span>
              <span className="story-detail">{story.detail} …</span>
            </article>
          ))}
        </div>
        <div className="story-hint"><span>←</span> 左右滑动 / 点击卡片 <span>→</span></div>
        <div className="story-dots" aria-label="选择个人介绍卡片">
          {stories.map((story, index) => <button key={story.number} aria-label={`显示 ${story.title}`} aria-pressed={activeStory === index} onClick={() => setActiveStory(index)} />)}
        </div>
      </section>

      <section className="projects-section" id="projects" aria-labelledby="projects-title">
        <div className="section-heading">
          <div><h2 id="projects-title">Projects <span>✦</span></h2><p><i /> 项目快览 <i /></p></div>
          <a className="view-all" href="#project-list">VIEW ALL <span>→</span></a>
        </div>
        <div className="project-grid" id="project-list">
          {projects.map(project => (
            <a className="project-card" href={project.href} target="_blank" rel="noreferrer" key={project.title}>
              <div className={`project-preview preview-${project.kind}`} aria-hidden="true">
                <div className="preview-window"><span className="preview-brand">✦ {project.kind === 'campus' ? 'Campus' : 'Research Lab'}</span><div className="preview-content"><div className="preview-chart"><i /><i /><i /><i /><i /><i /></div><div className="preview-side"><i /><i /><i /></div></div></div>
              </div>
              <div className="project-info"><div><h3>{project.title}</h3><p>{project.chinese}</p></div><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><span className="project-open" aria-hidden="true">↗</span></div>
            </a>
          ))}
        </div>
      </section>
      <footer className="footer"><span>用好奇心记录每一步。</span><span>© 2026 My World</span></footer>
    </main>
  )
}

export default App
