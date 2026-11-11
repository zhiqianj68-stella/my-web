const enUS = {
  site: { title: 'Portfolio | Frontend & AI Application Development' },
  navigation: {
    label: 'Main navigation', homeLabel: 'Back to home', brand: 'Portfolio', about: 'About',
    projects: 'Projects', contact: 'Contact', toggleMenu: 'Toggle navigation',
    storyMore: 'Learn more', storyCards: 'Choose a story card', backHome: 'Back to home', storyLabel: 'MY STORY',
  },
  hero: {
    greeting: 'Hello,', title: 'Welcome to', titleEmphasis: 'My World',
    description: 'Exploring, learning, and becoming a better version of myself.',
    values: ['Explore', 'Learn', 'Build', 'Grow'], projectHint: 'Project highlights', viewAll: 'VIEW ALL', storyHint: 'Swipe or select a card',
  },
  stories: {
    who: {
      title: 'Who', chinese: 'About me', detail: 'Hometown / Education / Internships',
      summary: 'I am from Guilin, Guangxi, and am pursuing a master’s degree in Management Science and Engineering at South China University of Technology. I am interested in intelligent decision-making, frontend development, and AI applications.',
      sections: [
        { title: 'Education', body: 'I earned my bachelor’s degree in Information Management and Information Systems from Zhongnan University of Economics and Law.\nI am now a master’s student in Management Science and Engineering at South China University of Technology. My advisor’s team focuses on intelligent decision-making.' },
        { title: 'Cross-border e-commerce internships', body: 'Jun–Oct 2024: Built websites with WordPress.\nMar–Aug 2026: Worked on Shopify websites, a browser extension, web modules, and ADH accessibility development.' },
        { title: 'Personal interests', body: 'Sports: running, badminton, table tennis, swimming, and golf.\nMusic: piano and guzheng.\nI am also interested in psychology research.' },
      ],
    },
    what: {
      title: 'What', chinese: 'What I do', detail: 'Research / Frontend / Agents',
      summary: 'I keep learning about intelligent decision-making, frontend development, and AI agents, and explore how these fields can work together.',
      sections: [
        { title: 'Research and technology interests', body: 'Intelligent decision-making\nFrontend development\nAI agents\nExploring the intersection of decision-making, frontend products, and agent technology.' },
        { title: 'Skills and tools', body: 'Languages: Python, JavaScript (ES6+), HTML5, CSS3, SCSS\nTechnology: Shopify, React, Vue 3, React Router, Ant Design, Element Plus\nDevelopment: Component-based development, Git collaboration, Vercel deployment, Cloudflare DNS\nAI tools and development: ChatGPT, Tare, AI-assisted development' },
        { title: 'Selected projects', body: 'Campus Annual Bill redesign\nSurvey Management Platform\nCampus Mutual Aid full-stack system\nMultimodal English Speech Assessment platform' },
      ],
    },
    why: {
      title: 'Why', chinese: 'Why this website?', detail: 'Curiosity / Inclusion / Openness',
      summary: 'I am building a corner of the internet of my own, where learning, research, and making can keep growing.',
      sections: [
        { title: 'The idea', body: 'I want to create my own space on the web, guided by curiosity, inclusion, and openness.' },
        { title: 'What comes next', body: 'I will keep exploring frontend development and AI agents, and gradually add backend capabilities.\nI also plan to share my academic research and development notes here.' },
        { title: 'Stay curious', body: 'Stay hungry, stay foolish.' },
      ],
    },
  },
  projects: {
    sectionLabel: 'Project highlights', pageTitle: 'Selected projects', pageEyebrow: 'SELECTED WORK / 2026',
    pageDescription: 'From campus products to technical experiments, each project captures an idea, collaboration, and implementation.',
    moreProjects: 'More projects:', and: 'and', allLabel: 'All projects',
    items: {
      annualBill: {
        title: 'Campus Annual Bill', name: 'ZUEL Annual Bill Redesign', alt: 'Campus Annual Bill project screenshot',
        points: [
          'Version note: This is my personal redesign based on the published project, not the version deployed online. It retains the same report sections.',
          'Context: Designed to provide more than 40,000 students and faculty with annual insights across classes, spending, sports, and other campus data.',
          'Routing and music: Used Vue Router for the home and /report routes. Entering the report starts the background music, with controls shared across pages from the root component.',
          'Report components: Split six sections, including dining, classes, and sports, into independent slides. Swiper manages horizontal navigation and transitions.',
          'Mobile interaction: Added a right-swipe gesture to return home from the report’s opening screen, along with an animated swipe hint.',
        ],
      },
      survey: {
        title: 'Survey Management Platform', name: 'Online Survey Management Platform', alt: 'Survey Management Platform screenshot',
        points: [
          'Product: A team survey platform for creating, publishing, analyzing, and managing questionnaires. Built with React and Vite, with modular SCSS styling.',
          'Components: Built a route-aware sidebar and a single-open FAQ accordion, using state to control content visibility and icon animation.',
          'Routing: Used React Router, Outlet, and navigate for nested routes, layouts, and navigation; URL parameters select the questionnaire data to display.',
          'Filtering and data flow: The parent manages filter state and passes it to the table, which filters and sorts data and updates when criteria change.',
          'API validation: Mocked backend endpoints and tested POST requests for login and survey data.',
        ],
      },
      mutualAid: {
        title: 'Campus Mutual Aid', name: 'Graduation Project: Campus Mutual Aid System', alt: 'Campus Mutual Aid project screenshot',
        points: [
          'Overview: An independently developed full-stack campus mutual-aid project using a separated frontend and backend architecture: Vue 3, Node.js, MySQL, and JWT.',
          'Task flow: Users can post requests, browse the task board, accept tasks, and leave messages to coordinate.',
          'Reputation: Users can accept or decline tasks based on their reputation score, helping keep the mutual-aid workflow orderly.',
        ],
      },
      speech: {
        title: 'Multimodal Speech Assessment', name: 'Innovation Project: English Speech Assessment Platform', alt: 'English Speech Assessment platform screenshot',
        points: [
          'Outcome: Combines multimodal and large language model technologies to assess English speeches and provide personalized learning support. Won Second Prize at the provincial level in the 2024 China Collegiate Computing Competition.',
          'Audio and video capture: Built the framework-free frontend. Used the HTML5 MediaDevices API to capture camera and microphone streams together, with basic browser compatibility handling.',
          'Data visualization: Integrated Chart.js to draw a four-dimension assessment radar chart and line chart on canvas, showing scores such as fluency and pronunciation.',
          'Interaction: Added keyboard shortcuts with keydown events and real-time status feedback, including microphone mute detection.',
        ],
      },
    },
  },
  footer: { home: 'Curiosity in every step.', copyright: '© 2026 My World', signoff: 'Keep exploring, learning, and growing.' },
  language: { switchLabel: 'Switch language', chinese: '中文', english: 'English' },
}

export default enUS
