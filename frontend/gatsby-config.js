module.exports = {
  siteMetadata: {
    title: "mercatus",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `q4kg76ty`,
        dataset: `production`,
      },
    },
  ],
};
