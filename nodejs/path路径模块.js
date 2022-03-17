const path = require('path')
const fs = require('fs')

// 路径拼接 path.join()
// 注意 ../ 会抵消前面的路径
// ./ 会被忽略

const pathStr = path.join('/a', '/b/c', '../../', './d', 'e')
console.log(pathStr);

fs.readFile(path.join(__dirname, './files/1.txt'), 'utf-8', function(err, data) {
    if (err) {
        return console.log(err.message);
    }
    console.log(data);
})

// 获取路径中的文件名 path.basename()
const fpath = './files/1.txt'

// const fullName = path.basename(fpath)
// console.log(fullName)

const nameWithoutExt = path.basename(fpath, '.txt')
console.log(nameWithoutExt)

// 获取路径中的文件扩展名 path.extname()
const fext = path.extname(fpath)
console.log(fext);