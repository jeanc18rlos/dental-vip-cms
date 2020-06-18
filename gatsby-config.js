module.exports = {
  siteMetadata: {
    siteUrl: "http://dentalvip-prod.web.app",
    en: {
      url: "http://dentalvip-prod.web.app//en",
      description:
        "Dental VIP is a business ready website that is built with Gatsby, and Netlify CMS.It follows the JAMstack architecture by using Git as a single source of truth, and Netlify for continuous deployment, and CDN distribution.",
    },
    es: {
      url: "http://dentalvip-prod.web.app/",
      description:
        "Dental VIP is a business ready website that is built with Gatsby, and Netlify CMS.It follows the JAMstack architecture by using Git as a single source of truth, and Netlify for continuous deployment, and CDN distribution.",
    },

    title: "DentalVIP",
    author: "Jeanc16rlos@gmail.com",
    social: {
      twitter: `DentalVIP`,
      instagram: `DentalVIP`,
      facebook: `DentalVIP`,
    },
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => "production",
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },

    {
      resolve: "gatsby-plugin-sharp",
      options: {
        useMozJpeg: true,
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1600,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dental-vip`,
        short_name: `dentalvip`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#222`,
        display: `minimal-ui`,
        icon: `src/img/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-background-image`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#91C508`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    "gatsby-plugin-remove-serviceworker",
  ],
};
