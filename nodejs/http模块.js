// 1. 导入 http 模块
const http = require('http')
    // 2. 创建 web 服务器实例
const server = http.createServer()
    // 3. 为服务器实例绑定 request 事件，监听客户端的请求
server.on('request', function(req, res) {
    const url = req.url
    const method = req.method
    const str = `your request url is${url},and your method is${method}`

    res.setHeader('Content-Type', 'text/html; charset=utf-8')

    console.log(str);
})

// 4. 启动服务器
server.listen(8080, function() {
    console.log('server running at http://127.0.0.1:8080')
})