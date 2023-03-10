/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Offnom10`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `https://offnom10.com/`,
        apiBase: `jsonapi`, // optional, defaults to `jsonapi`
      },
    },
  ]
}
