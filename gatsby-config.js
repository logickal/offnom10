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
        baseUrl: `https://live-offnom10-backend.pantheonsite.io/`,
        apiBase: `jsonapi`, // optional, defaults to `jsonapi`
        concurrentFileRequests: 10, // optional, defaults to 10
      },
    },
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`
  ]
}
