// 开发时使用
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig, {
    devServer: {
        //为哪一个文件夹提供本地服务，默认是根文件夹
        contentBase: "./dist",
        //页面实时刷新
        inline: true,
        //端口号
        // port: 8080,
        //在SPA页面中，依赖HTML5的history模式
        // historyApiFallback: true,

        //在package.json的scripts里面配置
        // "dev":"webpack-dev-server --open" --open参数表示直接打开浏览器
    },

});

