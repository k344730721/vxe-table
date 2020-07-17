const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vxe-table/v1' : '/',
  outputDir: '../../../vxe-table/public/v1',
  assetsDir: 'static',
  productionSourceMap: false,
  configureWebpack: {
    performance: {
      hints: false
    }
  },
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'vxe-table 1.x (LTS)'
    }
  },
  transpileDependencies: ['highlight.js'],
  chainWebpack (config) {
    config.resolve.alias
      .set('@', resolve('examples'))
    config.output
      .set('libraryExport', 'default')
      .set('library', 'VXETable')
    if (process.env.npm_lifecycle_event.indexOf('lib') === 0) {
      let XEUtils = {
        root: 'XEUtils',
        commonjs: 'xe-utils',
        commonjs2: 'xe-utils',
        amd: 'xe-utils'
      }
      if (config.has('externals')) {
        config.externals
          .set('xe-utils', XEUtils)
      } else {
        config
          .set('externals', {
            'xe-utils': XEUtils
          })
      }
    }
  }
}
