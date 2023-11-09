module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `joycemusweu_resume.github.io`,
    // Your Name
    name: 'Joyce Musweu',
    // Main Site Title
    title: `Joyce Musweu | Data Scientist`,
    // Description that goes under your name in main bio
    description: `This is a digital presentation of resume display my work experiences, skills and competencies.`,
    // Optional: Twitter account handle
    author: `@jmusweu`,
    // Optional: Github account URL
    github: `https://github.com/joycemusweu`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/joycemusweu/`,
    // Content of the About Me section
    about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus perferendis porro cumque ea error ab voluptatem. Temporibus adipisci exercitationem similique itaque quibusdam laudantium, qui molestiae quas, aut amet animi id.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Devfolio',
        description:
          'A zero-config and blazing fast personal site + blog built with GatsbyJs and TailwindCSS',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'ChromeExtensionKit',
        description:
          'Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates',
        link: 'https://chromeextensionkit.com/?ref=devfolio',
      },
      {
        name: 'Another Cool Project',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit ducimus perferendis',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Impulse Biomedical (Pty) Ltd',
        description: 'Operations and Marketing Officer, September 2020 - March 2023',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Impulse Biomedical (Pty) Ltd',
        description: 'Administrative Offier, September 2020 - December 2020',
        lik: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'University of Cape Town',
        description: 'Head Tutor of Project Management, July 2020 - December 2020',
        lik: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'University of Cape Town',
        description: 'Project Management Tutor, July 2019 - December 2019',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      }, 
      {
        name: 'The Afrofest',
        description: 'Marketing Assistant, July 2019 - November 2019',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Python, R, SQL, Excel',
      },
      {
        name: 'Databases',
        description: 'MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
