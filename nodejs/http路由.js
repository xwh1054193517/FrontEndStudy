const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {
    const url = req.url
        // 设置默认的响应内容为 404 Not found
    let content = '<h1>404 Not found!</h1>'
        // 判断用户请求的是否为 / 或 /index.html 首页
        // 判断用户请求的是否为 /about.html 关于页面
    if (url === '/' || url === '/index.html') {
        content = '<h1>首页</h1>'
    } else if (url === '/about.html') {
        content = '<h1>关于页面</h1>'
    }

    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end(content)
})

server.listen(80, () => {
    console.log('server running at http://127.0.0.1')
})