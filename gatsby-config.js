const config = require('./config');
// const avatar = require('./src/assets/images/suhas-more.jpg');

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: "Suhas More — Personal Portfolio, ReactJS, JavaScript Developer",
    titleTemplate: "Suhas More Personal Portfolio - suhas010.com",
    description:`Hello world, I am Suhas More ReactJS, JavaScript engineer
      and JS enthusiastic. Check out my portfolio and insightful blog
      post I wrote on ReactJS, JavaScript, and on web development in general.`,
    url: "https://www.suhas010.com", // No trailing slash allowed!
    image: "/src/assets/images/suhas-more.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@suhas0101",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
