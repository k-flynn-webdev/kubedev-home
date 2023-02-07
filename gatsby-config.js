/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'Kubedev',
    siteUrl: `https://www.kubedev.co.uk/`
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-google-gtag",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kubedev`,
        short_name: 'Kubedev',
        start_url: '/',
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],

};