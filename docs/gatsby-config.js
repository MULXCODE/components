module.exports = {
  siteMetadata: {
    title: 'Primer Components',
    shortName: 'Components',
    description: 'React components for the Primer design system'
  },
  plugins: [
    {
      resolve: '@primer/gatsby-theme-doctocat',
      options: {
        repoRootPath: '..',
      },
    },
  ],
  pathPrefix: '/components'
}