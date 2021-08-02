// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Bilend Mohammed',
  titleTemplate: "Bilend Mohammed",
  siteDescription: 'Bilend Mohammed is a full-stack web developer specializing in front-end technologies based in Sulaymaniyah, Iraq',
  siteUrl: process.env.DEPLOY_URL || 'https://bilendm.com',
  metadata: {
    twitter: {
      site: '@bilendm',
      creator: '@bilendm'
    }
  },
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
      use: 'gridsome-plugin-gtag',
      options: {
        config: {
          id: process.env.GOOGLE_ANALYTICS_ID,
        },
      },
    },
  ],
  transformers: {
    remark: {
      //Config options can be added here
    }
  }
}
