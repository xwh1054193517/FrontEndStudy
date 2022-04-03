//开发环境配置：能让代码运行即可
// 运行项目指令：
//       webpack 会将打包结果输出出去
//       npx webpack-dev-server 只会在内存中编译打包，没有输出
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/bulit.js',
        path: resolve(__dirname, 'bulid')

    },
    module: {
        rules: [
            //loader配置
            // 处理less
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            // 处理css
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            //处理样式中图片
            {
                test: /\.(jpg|png|gif)/,
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    name: '[hash:10].[ext]',
                    esModule: false,
                    outputPath: 'assets/imgs'
                }
            },
            //处理html中的img资源
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            //处理其他资源
            {
                exclude: /\.(html|css|js|less|jpg|png|gif)/,
                loader: 'file-loader',
                options: {
                    name: '[hash:10].[ext]',
                    outputPath: 'assets/icons'
                }
            }


        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    mode: 'development',
    devServer: {
        //项目构建后路径
        contentBase: resolve(__dirname, 'bulid'),
        // 启动gzip压缩
        compress: true,
        //端口号
        port: 3000,
        open: true
    }
}