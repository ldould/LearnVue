const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"), //配置相对路径
    filename: "main.js", //导出为main.js
    //  publicPath: "dist/",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        //css-loader只负责将css文件进行加载
        //style-loader负责将样式添加到DOM中
        //使用多个loader时，是从右向左
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader", // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "less-loader", // compiles Less to CSS
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              //当加载的图片小于limit时，会将图片编译成base64字符串形式
              //当加载的图片大于limit时，需要使用file-loader模块进行加载
              limit: 18000,
              //当加载的图片大于limit时,使用file-loader,在dist下新建一个images文件夹，并规定命名格式
              //[name].[hash:8].[ext]    [name]：原来图片的名字，.[hash:8]用.连接，后面是随机生成的hash值，截取八个，.[ext]后缀
              name: "images/[name].[hash:8].[ext]",
            },
          },
        ],
      },
      {
        test: /\.js$/,
        //排除转化node_modules|bower_components里的文件
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015"],
          },
        },
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
    ],
  },
  resolve: {
    //省略后缀名
    extensions: [".js", ".vue", ".css"],
    //别名
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
  },
  plugins: [
    //BannerPlugin插件，为打包的文件添加版权声明
    new webpack.BannerPlugin("最终版权归ldou所有"),
    new HtmlWebpackPlugin({
      template: "index.html", //以index.html为模板
    }),
    //压缩js
    //new UglifyjsWebpackPlugin(),
  ],
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
};
