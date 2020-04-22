module.exports = {
  siteTitle: 'Suhas More',
  manifestName: 'Resume',
  manifestShortName: 'Landing',
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/gatsby-starter-resume/`,
  firstName: 'Suhas ',
  lastName: ' More',
  // social
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/suhas010',
    },
    {
      icon: 'fa-linkedin-in',
      name: 'Linkedin',
      url: 'https://linkedin.com/in/suhas-more/',
    },
    {
      icon: 'fa-twitter',
      name: 'Twitter',
      url: 'https://twitter.com/suhas0101',
    },
    {
      icon: 'fa-facebook-f',
      name: 'Facebook',
      url: 'https://facebook.com/suhas010',
    },
  ],
  experiance: [
    {
      name: "Josh",
      link: "https://joshsoftware.com/",
      duration: "December 2018 - present",
      position: "Software Engineer",
      description: `Working with one of the largest media house worldwide and crafting monetary and performance management tools for them.
      Responsible for designing pixel-perfect, reusable ReactJS components.
      Wrote common Request handler and interceptor using Axios which removed thousands of lines of unnecessary code.
      Added env support and removed hardcoded configs.
      Optimized existing components that improved the performance of the application by almost 20%.
      
      `,
      stack:["ReactJS", "JavaScript", "NodeJS", "HTML5", "CSS"]
    },
    {
      name: "Coditas",
      link: "https://coditas.com/",
      duration: "February 2018 - December 2018",
      position: "Software Engineer",
      description: `Worked as ReactJS and NodeJS developer on CRM application.
      Was responsible for designing API in NodeJS and reusable ReactJS components.
      Optimized API's and MongoDB queries which resulted in 60% performance improvements in the API response time.
      Was responsible for client communication and gathering requirements.
      `,
      stack:["ReactJS", "JavaScript", "NodeJS", "HTML5", "CSS"]
    },
    {
      name: "SpringCT",
      link: "http://www.springct.com/",
      duration: "June 2017 - February 2018",
      position: "Junior Software Engineer",
      description: `Worked as ReactJS developer on multiple projects,
      Refactored and redesigned one of our product's codebase and removed repetitive code.
      Reduced bundle size by almost 50%.
      Wrote a common notification manager which will be used throughout the application`,
      stack:["ReactJS", "JavaScript", "HTML5", "CSS"]
    },
    {
      name: "SpringCT",
      link: "http://www.springct.com/",
      duration: "January 2017 - June 2017",
      position: "Intern",
      description: `Joined as an intern with another 12 candidates and due to my proficiency in HTML and CSS, I got selected for the front-end role and received training on React for two weeks.
      Immediately after training, I have been selected to work on the Live project.
      Worked on a phishing simulation and training platform and was closely working with Senior React developers and handling UI related issues.`,
      stack:["ReactJS", "JavaScript", "HTML5", "CSS"]
    }
  ],
  email: 'hey@suhas010.com',
  phone: '+91 968 964 9696',
  address: 'Bawadhan, Pune India',
};
