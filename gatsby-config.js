module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`postcss-preset-env`)({
            stage: 1,
            browsers: '> 2%',
          }),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `source sans pro:300,400,400i,700`, // you can also specify font weights and styles
        ],
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
  ],
};
