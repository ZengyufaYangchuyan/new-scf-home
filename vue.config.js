// const imageWebpackLoader = require('image-webpack-loader')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
// const path = require('path')
const ipConfig = require('./ipConfig.js')

const config = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  assetsDir: 'static',
  devServer: {
    host: '172.16.55.98',
    port: 8080,
    open: true,
    hotOnly: true,
    proxy: {
      '/cms': {
        target: ipConfig.IP,
        changeOrigin: true,
      }
    }
  },
  productionSourceMap: false,
  css: {
    extract: process.env.NODE_ENV === 'production',
  },
  // 压缩图片
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        bypassOnDebug: true
      })
      .end()
  },
  configureWebpack: config => {
    const oConfig = {
      plugins: [
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: /\.css$|\.ttf$|\.html$|\.svg$|\.json$|\.js$/,
          threshold: 0, // 只有大小大于该值的资源会被处理
          minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
          deleteOriginalAssets: false// 删除原文件
        })
      ],
      externals: {
        'BMap': 'BMap' // 百度地图
      }
    }
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: oConfig.plugins,
        externals: oConfig.externals
      }
    } else {
      return {
        externals: oConfig.externals
      }
    }
  }
}

module.exports = config
