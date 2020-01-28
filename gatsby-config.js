module.exports = {
  siteMetadata: {
    title: `Virtual Grounds`,
    description: `A series dedicated to feminist perspectives on digital sustainability and survival presented by Trinity Square Video and the Digital Justice Lab. Virtual Grounds is a 2-part training and research initiative that considers how we navigate the future, protect our virtual selves, and shape digital landscapes. Over the course of 11 months, we will survey how technology continues to grow and impact our lives in different ways through a series of workshops led by practicing creative technologists, scholars, and artists. The content and research created will then be compiled into a transmedia publication, which will be distributed publicly to all communities to use and interpret.`,
    author: `@TSVToronto`,
    siteUrl: `http://virtualgrounds.zone/`,
    keywords: `virtual grounds, feminism, digital justice lab, trinity square video, canada council for the arts, arts sector innovation grant`,
    image: "/img/OpenGraph.jpg", // Path to your image you placed in the 'static' folder
    social: {
      twitter: `TSVToronto`,
    },
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/workshops`,
        name: `workshops`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Virtual Grounds Workshop Series`,
        short_name: `VirtualGrounds`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#307574`,
        display: `minimal-ui`,
        icon: `src/images/femmeTechIcon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,

  ],
}
