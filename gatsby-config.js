module.exports = {
  siteMetadata: {
    title: "Moja strona w Gatsby",
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Inter:300,400,600,700`,
        ],
        display: "swap",
      },
    },
  ],
};
