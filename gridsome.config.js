// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Bilend Mohammed',
  siteUrl: 'https://bilendm.com',
  titleTemplate: "Bilend Mohammed",
  author: "Bilend Mohammed",
  siteDescription: 'Bilend Mohammed is a full stack web developer specializing in front end development based in Sulaymaniyah, Iraq',
  creator: '@bilendm'
  ,
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'src/content/works/**/*.md',
        typeName: 'works',
        remark: {
          //Config options can be added here
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'src/content/projects/**/*.md',
        typeName: 'projects',
        remark: {
          //Config options can be added here
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        staticUrls: [
          {
            url: '#about/',
          },
          {
            url: '#works/',
          },
          {
            url: '#contact/',
          }
        ]
      }
    },
    {
      use: 'gridsome-plugin-gtag',
      options: {
        config: {
          id: process.env.GOOGLE_ANALYTICS_ID,
        },
      },
    },
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-WDGPV4T',
        enabled: true,
        debug: true
      }
    }
  ],
  transformers: {
    remark: {
      //Config options can be added here
    }
  }
}
