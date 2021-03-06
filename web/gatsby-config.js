module.exports = {
  siteMetadata: {
    title: `Gatsby starter Styled Components`,
    siteUrl: "https://gatsby-styled.netlify.app/",
    description:
      "Gatsby starter with modular file structure and support for Styled Components",
    author: `Jovanovska Jovana`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "7qgs03ud",
        dataset: "production",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Inter`],
        display: "swap",
      },
    },
  ],
};
