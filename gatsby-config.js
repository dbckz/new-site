module.exports = {
  siteMetadata: {
    siteTitle: `Dave Buckley`,
    defaultTitle: `Dave Buckley`,
    siteTitleShort: `dave-buckley`,
    siteDescription: `Personal Website and Blog`,
    siteUrl: `https://dbckz.github.io/`,
    siteAuthor: `@dbckz`,
    siteImage: `/favicon.jpg`,
    siteLanguage: `en`,
    themeColor: `#29e4ae`,
    basePath: `/`,
    footer: ``,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dave Buckley`,
        short_name: `Dave Buckley`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.jpg`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://dbckz.github.io`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
