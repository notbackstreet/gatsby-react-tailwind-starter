module.exports = {
  siteMetadata: {
    title: `My Blog`,
    description: `Welcome to my website.`,
    author: `Nicholaus Carter`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ExampleSite`,
        short_name: `ExampleSite`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-astronaut.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-md`,
        path: `${__dirname}/src/blog-md`,
      },
    },
    `gatsby-transformer-remark`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
