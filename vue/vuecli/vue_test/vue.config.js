module.exports = {
    pages: {
        index: {
            entry: 'src/main.js',
        },
    },
    lintOnSave: false, //关闭语法检查
    //开启代理服务器 方法一
    // devServer: {
    //     //目标地址 不能灵活控制走不走代理 只能配置一个
    //     proxy: 'http://localhost:5000'
    // }

    // 方法二
    devServer: {
        proxy: {
            '/api1': {
                // 匹配所有以 '/api1'开头的请求路径
                target: 'http://localhost:5000', // 代理目标的基础路径
                pathRewrite: { '^/api1': '' }, //需要重写路径
                ws: true, //支持websocket
                changeOrigin: true
            },
            '/api2': { // 匹配所有以 '/api2'开头的请求路径
                target: 'http://localhost:5001', // 代理目标的基础路径
                changeOrigin: true,
                pathRewrite: { '^/api2': '' }
            }
        }
    }
}