import { useState } from 'react'
import './App.css'
import desktopBackground from './assets/bg-pc.jpg'
import mobileBackground from './assets/bg-mb.jpg'
import illustrations from './assets/portfolio-illustrations.png'

const stories = [
  { number: '01', title: 'Who', chinese: '我是谁？', detail: '学生 / 教育背景 / 实习经历', art: 'student' },
  { number: '02', title: 'What', chinese: '我在做什么？', detail: '研究兴趣 / 项目 / 技能', art: 'books' },
  { number: '03', title: 'Why', chinese: '为什么做这个网站？', detail: '初衷 / 价值观 / 未来计划', art: 'signpost' },
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

function App() {
  const [activeStory, setActiveStory] = useState(1)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="page-shell" style={{ '--desktop-bg': `url(${desktopBackground})`, '--mobile-bg': `url(${mobileBackground})`, '--story-art': `url(${illustrations})` }}>
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
          <div className="scene-meta"><span><span className="meta-icon">▦</span> 2026 / 10 / 27 <i>Mon</i> <i>21:36</i></span><span>◉ &nbsp;12,486</span></div>
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
            <button className={`story-card ${activeStory === index ? 'is-active' : ''}`} key={story.number} onClick={() => setActiveStory(index)} aria-pressed={activeStory === index}>
              <span className="story-number">{story.number}</span>
              <span className="story-title">{story.title}</span>
              <span className={`story-art art-${story.art}`} aria-hidden="true" />
              <span className="story-arrow" aria-hidden="true">↗</span>
              <span className="story-chinese">{story.chinese}</span>
              <span className="story-detail">{story.detail} …</span>
            </button>
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
