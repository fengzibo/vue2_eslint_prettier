const CompressionPlugin = require('compression-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, '.', dir)
}
const prodPlugins = []

if (process.env.NODE_ENV === 'production') {
    prodPlugins.push(
        new CompressionPlugin({
            algorithm: 'gzip', //开启gzip
            test: /\.js$|\.html$|.\css/, // 匹配文件名
            threshold: 10240, // 对超过10k的数据压缩
            deleteOriginalAssets: false, // 不删除源文件
        }),
        new LodashModuleReplacementPlugin(), //优化lodash
        new BundleAnalyzerPlugin() //打包后文件大小概览
    )
}
module.exports = {
    publicPath: './',
    lintOnSave: 'error',
    productionSourceMap: false,
    configureWebpack: {
        plugins: [...prodPlugins],
    },
    chainWebpack: (config) => {
        config.module.rule('svg').exclude.add(resolve('src/assets/svg')).end()

        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/assets/svg'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
    },
}
