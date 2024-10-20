// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'kristiingco', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [
            'kristiingco/rating-cypress',
            'kristiingco/expand-testing',
            'kristiingco/hm07-qa-us',
            'kristiingco/dictionary-web-app',
            'kristiingco/morse-test',
            'kristiingco/planets-fact-site',
            'kristiingco/forward',
            'kristiingco/Catch-Those-Clothes',
            'kristiingco/blue-hacks-2020',
          ], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects

      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
      ],
    },
  },
  seo: {
    title: 'Portfolio of Kristiana Ingco',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'kristianaingco',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'kristiana.k.ingco@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'Cypress',
    'React.js',
    'Ruby',
    'Ruby on Rails',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'JIRA'
  ],
  experiences: [
    {
      company: 'Mentor Collective',
      position: 'Associate QA Engineer',
      from: 'October 2024',
      to: 'Present'
    },
    {
      company: 'Self-Employed',
      position: 'Freelance QA Engineer',
      from: 'December 2023',
      to: 'October 2024'
    },
    {
      company: 'Waymo via ICONMA',
      position: 'Software Quality Operations Associate',
      from: 'November 2021',
      to: 'August 2023'
    },
  ],
  certifications: [
    {
      name: 'LambdaTest Software Testing Professional Certificate',
      body: '',
      year: 'May 2024',
      link: 'https://www.linkedin.com/learning/certificates/20fb0174e7992e9500ba9576f96cd06ddf74c5d2c72428d093160610bff4850d',
    },
  ],
  educations: [
    {
      institution: 'Ateneo de Manila University',
      degree: 'B.S. Computer Science',
      from: '2016',
      to: '2020',
    },
  ],
  publications: [
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
  },
  themeConfig: {
    defaultTheme: 'synthwave',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
