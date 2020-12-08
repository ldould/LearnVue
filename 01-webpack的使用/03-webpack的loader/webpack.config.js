const path = require('path')
module.exports = {
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'main.js',
        publicPath:'dist/'
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            //css-loader只负责将css文件进行加载
            //style-loader负责将样式添加到DOM中
            //使用多个loader时，是从右向左
            use: ['style-loader', 'css-loader' ]
          },
          {
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
        },
        {
            test: /\.(png|jpg|gif|jpeg)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                    //当加载的图片小于limit时，会将图片编译成base64字符串形式
                    //当加载的图片大于limit时，需要使用file-loader模块进行加载
                  limit: 18000,
                  //当加载的图片大于limit时,使用file-loader,在dist下新建一个images文件夹，并规定命名格式
                 //[name].[hash:8].[ext]    [name]：原来图片的名字，.[hash:8]用.连接，后面是随机生成的hash值，截取八个，.[ext]后缀
                  name:'images/[name].[hash:8].[ext]'
                }
                
              }
            ]
          },
          {
            test: /\.js$/,
            //排除转化node_modules|bower_components里的文件
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['es2015']
              }
            }
          }
        ]
      }
}