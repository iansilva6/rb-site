module.exports = {
  siteMetadata: {
    url: "https://rbinspecoes.com.br",
    siteUrl: "https://rbinspecoes.com.br",
    title: "RB Consultoria, Inspeção e Engenharia.",
    titleTemplate: "%s",
    twitterUsername: "",
    description: "Especializado em NR-13, Ensaios Não Destrutivos e Manutenção Alpinismo Industrial.",
    keywords: "NR-13, Ensaios Não Destrutivos, Alpinismo Industrial, Enegnharia de Soldagem, Consultoria em Engenharia",
    image: "/images/logo.webp",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://rbinspecoes.com.br',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
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
