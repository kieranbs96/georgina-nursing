module.exports = {
  siteMetadata: {
    title: 'Georgina Cross - Registered Nurse - UK',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content`,
        name: 'content',
      },
    },
    'gatsby-transformer-remark',
  ],
};
