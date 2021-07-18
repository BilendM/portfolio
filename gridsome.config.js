// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Bilend',
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
    }
  ],
  transformers: {
    remark: {
      //Config options can be added here
    }
  }
}
