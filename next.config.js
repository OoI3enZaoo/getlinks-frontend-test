
const path = require('path')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

module.exports = {
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/' },
    }
  },
  webpack: (config, { dev }) => {    
    
    const oldEntry = config.entry
    config.entry = () =>
      oldEntry().then(entry => {
        entry['main.js'] && entry['main.js'].push(path.resolve('./utils/offline'))
        return entry
      })
    if (!dev) {
      config.plugins.push(
        new SWPrecacheWebpackPlugin({
          cacheId: 'frontend-testing',
          filepath: path.resolve('./static/sw.js'),
          minify: true,
          staticFileGlobsIgnorePatterns: [/\.next\//],
          staticFileGlobs: [
            'static/**/*', // Precache all static files by default
          ],
          runtimeCaching: [
            {
              handler: 'fastest',
              urlPattern: /[.](png|jpg|css|svg)/,
            },
            {
              handler: 'networkFirst',
              urlPattern: /^http.*/, //cache all files
            },
          ],
        })
      )
    }

    config.resolve.alias = {
      '<components>': path.resolve(__dirname, './components'),
      '<reducers>': path.resolve(__dirname, './stores/reducers'),
    }
    return config
  }
}