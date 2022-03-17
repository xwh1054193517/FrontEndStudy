//导入fs模块
const fs = require('fs')


// 调用方法读取文件
// fs.readFile('./files/2.txt', 'utf-8', function(err, data) {
//     //读取成功err为Null 读取失败err为错误对象，data为undefined
//     if (err) return console.log('读取文件失败' + err.message);
//     console.log('读取文件成功');
//     console.log(data);
// })


// fs.writeFile('./files/3.txt', 'ok123', function(err) {
//     if (err) {
//         return console.log('文件写入失败' + err.message);
//     }
//     console.log('文件写入成功');
// })

// 创建一个可读流
var rs = fs.createReadStream('./files/1.txt')
    // 创建一个可写流
var ws = fs.createWriteStream('./files/2.txt')

// 监听流的开启和关闭
// 这几个监听不是必须的
rs.once('open', function() {
    console.log('可读流打开了~~')
})

rs.once('close', function() {
    console.log('可读流关闭了~~')
        //数据读取完毕，关闭可写流
    ws.end()
})

ws.once('open', function() {
    console.log('可写流打开了~~')
})

ws.once('close', function() {
    console.log('可写流关闭了~~')
})

//要读取一个可读流中的数据，要为可读流绑定一个data事件，data事件绑定完毕自动开始读取数据
rs.on('data', function(data) {
    console.log(data)
        //将读取到的数据写入到可写流中
    ws.write(data)
})


// __dirname 表示当前文件所处的目录
console.log(__dirname)

fs.readFile(__dirname + '/files/1.txt', 'utf8', function(err, dataStr) {
    if (err) {
        return console.log('读取文件失败！' + err.message)
    }
    console.log('读取文件成功！' + dataStr)
})