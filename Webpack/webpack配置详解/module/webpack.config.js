const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'js/[name].js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            //loader配置
            {
                test: /\.css$/,
                // 多个loader用use
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                // 排除node_modules下的js
                exclude: /node_module/,
                // 只检查src下的js文件
                include: resolve(__dirname, 'src'),
                // 优先执行
                enforce: 'pre',
                // 延后执行
                // enforce:'post'
                loader: 'eslint-loader'
            }, {
                // 以下配置只会生效一个
                oneOf: []
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin()],
    mode: 'development'
};