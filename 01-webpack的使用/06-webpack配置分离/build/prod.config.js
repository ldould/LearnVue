// 生产时使用

const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig, {
    plugins: [

        //压缩js
        new UglifyjsWebpackPlugin(),
    ],

});

