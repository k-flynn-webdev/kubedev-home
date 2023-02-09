export const projectName = 'Kubedev'

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: projectName,
    siteUrl: `https://www.${projectName.toLowerCase()}.co.uk/`,
    description: `Available for contract work on Web Development projects`,
    twitterUsername: `@gatsbyjs`,
    image: `/images/favicon.png`,
  },
  plugins: [
    "gatsby-plugin-sass",
    // "gatsby-plugin-google-gtag",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: projectName,
        short_name: projectName,
        start_url: '/',
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],

};