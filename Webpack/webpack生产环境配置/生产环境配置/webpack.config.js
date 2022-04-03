const { resolve } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
    //定义nodejs环境变量，决定使用browserslist哪个环境
process.env.NODE_ENV = 'development'

// 复用loader
const commonCssLoader = [
    MiniCssExtractPlugin.loader,
    'css-loader',
    {
        loader: 'postcss-loader',
        options: {
            ident: 'postcss',
            plugins: () => {
                require('postcss-preset-env')()
            }
        }
    }
]

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build')
    },

    //eslint再babel
    module: {
        rule: [{
                test: /\.css$/,
                //提取单文件
                use: [...commonCssLoader]
            },
            {
                test: /\.less$/,
                use: [...commonCssLoader, 'less-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_module/,
                loader: 'eslint-loader',
                //优先执行
                enforce: 'pre',
                options: {
                    fix: true
                }
            },

            //js兼容性配置
            {
                test: /\.js$/,
                exclude: /node_module/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        {
                            useBulitIns: 'usage',
                            corejs: { version: 3 },
                            targets: {
                                chrome: '60',
                                firefox: '50',
                                ie: '9'
                            }

                        }
                    ]
                }

            },
            // 打包样式中的图片
            {
                test: /\.(jpg|png|gif)/,
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    name: '[hash:10].[ext]',
                    outputPath: 'imgs',
                    esModule: false
                }
            },
            //打包html里的图片
            {
                test: /\.html$/,
                loader: 'html-loader'
            },

            //打包其他资源
            {
                exclude: /\.(js|css|less|html|jpg|png|gif)/,
                loader: 'file-loader',
                options: {
                    outputPath: 'media'
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/built.css'
        }),
        //压缩css
        new OptimizeCssAssetsWebpackPlugin(),
        //压缩html
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        })
    ],
    //压缩js
    mode: 'production'
}