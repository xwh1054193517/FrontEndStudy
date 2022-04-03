const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
    /*
      loader: 1. 下载   2. 使用（配置loader）
      plugins: 1. 下载  2. 引入  3. 使用
    */
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bulit.js',
        path: resolve(__dirname, 'bulid')
    },
    module: {
        rules: [
            //loader配置
        ]
    },
    plugins: [
        // plugins配置
        // html-webpack-plugin
        // 功能：默认会创建一个空的HTML，自动引入打包输出的所有资源（JS/CSS）
        // 需求：需要有结构的HTML文件
        // 复制 './src/index.html' 文件，并自动引入打包输出的所有资源（JS/CSS）
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ],
    mode: 'development'
}