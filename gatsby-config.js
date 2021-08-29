module.exports = {
  siteMetadata: {
    url: "http://rbinspecoes.com.br/",
    title: "RB Consultoria, Inspeção e Engenharia.",
    titleTemplate: "%s",
    twitterUsername: "",
    description: "Especializado em NR-13, Ensaios Não Destrutivos e Manutenção Alpinismo Industrial.",
    image: "/images/logo.webp",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'RB Consultoria, Inspeção e Engenharia. Especializado em NR-13',
        short_name: 'RB Engenharia',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'src/images/logo.webp',
      }
    },
  ],
};
