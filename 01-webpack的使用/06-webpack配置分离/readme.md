# 笔记

    将 webpack.config.js 里面的配置分离
    抽出生产环境和开发环境分别需要的配置
    再使用 webpack-merge 进行合并
    再在 package.json 的 scripts 里面重新修改命令

`"build": "webpack --config ./build/prod.config.js", "dev": "webpack-dev-server --open --config ./build/dev.config.js"`
