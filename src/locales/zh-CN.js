const zhCN = {
  site: { title: '个人作品集 | 前端开发与 AI 应用' },
  navigation: {
    label: '主导航', homeLabel: '返回首页', brand: '个人主页', about: '关于我',
    projects: '项目作品', contact: '联系我', toggleMenu: '切换导航',
    storyMore: '了解更多', storyCards: '选择个人介绍卡片', backHome: '返回首页', storyLabel: '我的故事',
  },
  hero: {
    greeting: '你好，', title: '欢迎来到', titleEmphasis: '我的世界',
    description: '在探索中，成为更好的自己。', values: ['探索', '学习', '创造', '成长'],
    projectHint: '项目快览', viewAll: '查看全部', storyHint: '点击唤起 / 双击打开',
  },
  stories: {
    who: {
      title: 'Who', chinese: '我是谁？', detail: '家乡 / 学习经历 / 实习经历',
      summary: '我来自广西桂林，目前在华南理工大学攻读管理科学与工程硕士，关注智能决策，也对前端与 AI 应用开发充满兴趣。',
      sections: [
        { title: '教育背景', body: '本科就读于中南财经政法大学信息管理与信息系统专业；\n目前为华南理工大学管理科学与工程专业硕士研究生，导师团队研究方向为智能决策。' },
        { title: '跨境电商实习', body: '2024.06—2024.10：参与 WordPress 建站。\n2026.03—2026.08：参与 Shopify 建站、浏览器插件与网页模块开发，以及 ADH 无障碍开发。' },
        { title: '个人兴趣', body: '运动：跑步、羽毛球、乒乓球、游泳、高尔夫。\n乐器：钢琴、古筝。\n此外，我也对心理学研究感兴趣。' },
      ],
    },
    what: {
      title: 'What', chinese: '我在做什么？', detail: '研究兴趣 / 前端开发 / Agent',
      summary: '围绕智能决策、前端开发与 AI Agent 持续学习，并探索将它们结合起来的可能。',
      sections: [
        { title: '研究与技术兴趣', body: '智能决策\n前端开发\nAI Agent\n探索智能决策、前端产品与 Agent 技术的结合。' },
        { title: '技能与工具', body: '编程语言：Python、JavaScript（ES6+）、HTML5、CSS3、SCSS\n技术栈：Shopify、React、Vue 3、React Router、Ant Design、Element Plus\n开发能力：组件化开发、Git 协作、Vercel 部署、Cloudflare 解析\nAI 工具与开发：ChatGPT、Tare、AI 辅助开发' },
        { title: '项目实践', body: '校园年度账单优化版\n在线问卷管理平台\n校园互助全栈系统\n多模态英语演讲能力评测平台' },
      ],
    },
    why: {
      title: 'Why', chinese: '为什么做这个网站？', detail: '探索 / 包容 / 开放',
      summary: '打造属于自己的网络世界，让学习、研究和创造持续生长。',
      sections: [
        { title: '我的想法', body: '希望打造自己的网络世界，也把“探索、包容、开放”作为持续前进的价值观。' },
        { title: '接下来的计划', body: '继续探索前端开发与 AI Agent，并逐步接入后端能力。\n未来会在这里分享学术研究与开发心得。' },
        { title: '一直保持好奇', body: 'Stay hungry, stay foolish.' },
      ],
    },
  },
  projects: {
    sectionLabel: '项目快览', pageTitle: '项目作品', pageEyebrow: '精选项目 / 2026',
    pageDescription: '从校园产品到技术实践，记录每一次构思、协作与实现。',
    moreProjects: '更多项目作品：', and: '和', allLabel: '全部项目',
    items: {
      annualBill: {
        title: 'Campus Annual Bill', name: '校园年度账单系统', alt: '校园年度账单项目截图',
        points: [
          '版本说明：这是我基于已发布项目进行的个人优化改版，并非线上发布的原版本；报告内容板块保持一致。',
          '项目背景：面向全校四万余名师生，呈现课堂教学、消费、运动等多维度年度分析报告。',
          '路由与音乐：使用 Vue Router 组织首页与 /report 双路由；进入报告时联动播放背景音乐，音乐控制封装在根组件中并跨页面复用。',
          '报告组件：将食堂、上课、运动等 6 个内容板块拆分为独立 Slide，使用 Swiper 管理横向滑动与切换效果。',
          '移动端体验：支持在报告首页右滑返回，并加入滑动提示动画，引导用户浏览。',
        ],
      },
      survey: {
        title: 'Survey Management Platform', name: '在线问卷管理平台', alt: '在线问卷管理平台截图',
        points: [
          '项目功能：为团队提供问卷创建、发布、统计与管理能力，基于 React + Vite 构建，并使用 SCSS 维护模块化样式。',
          '组件开发：封装按路由匹配高亮的侧边菜单和单项展开 FAQ，通过状态控制内容显隐与图标动画。',
          '路由导航：使用 React Router、Outlet 与 navigate 组织嵌套路由、布局和页面跳转，支持根据 URL 参数展示问卷数据。',
          '筛选与数据流：由父组件维护筛选条件并传给表格组件，完成数据过滤、排序及联动更新。',
          '接口验证：使用 Mock 模拟后端接口，完成登录和问卷数据 POST 测试。',
        ],
      },
      mutualAid: {
        title: 'Campus Mutual Aid', name: '毕业设计：校园互助系统', alt: '校园互助系统截图',
        points: [
          '项目定位：独立完成的校园互助全栈项目，采用前后端分离架构，技术栈为 Vue 3、Node.js、MySQL 与 JWT。',
          '任务流程：用户可以发布需求、浏览任务广场、接单，并通过留言沟通任务信息。',
          '信誉机制：结合用户信誉值支持任务接单或拒绝，帮助互助流程有序进行。',
        ],
      },
      speech: {
        title: 'Multimodal Speech Assessment', name: '大创项目：英语演讲能力评测平台', alt: '英语演讲能力评测平台截图',
        points: [
          '项目成果：平台结合多模态与大模型技术，为用户提供英语演讲能力评估和个性化学习支持；项目获 2024 年中国大学生计算机设计大赛省级二等奖。',
          '音视频采集：负责无框架前端实现，使用 HTML5 MediaDevices API 同步采集摄像头画面与麦克风音频，并处理基础浏览器兼容。',
          '数据可视化：集成 Chart.js，通过 canvas 绘制四维评价雷达图与折线图，展示流利度、发音等维度得分。',
          '交互优化：通过 keydown 事件支持键盘快捷操作，并提供实时状态提示（如麦克风静音检测），改善操作体验。',
        ],
      },
    },
  },
  footer: { home: '用好奇心记录每一步。', copyright: '© 2026 My World', signoff: '保持探索、学习与成长。' },
  language: { switchLabel: '切换语言', chinese: '中文', english: 'English' },
}

export default zhCN
