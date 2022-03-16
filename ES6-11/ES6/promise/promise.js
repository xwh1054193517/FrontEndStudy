const fs = require("fs");
const { resolve } = require("path");

// fs.readFile('./resources/为学.md', (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });

//使用promise封装
// const p = new Promise(function (resolve, reject) {
//   fs.readFile('./resources/为学.md', (err, data) => {
//     //失败要改变promise状态
//     if (err) reject(err);
//     resolve(data)
//   });
// })

// p.then(function (value) {
//   console.log(value.toString());
// }, function (reason) {
//   console.log("读取失败!!");
// });


//读取多个文件
// fs.readFile('./resources/为学.md', (err, data1)=>{
//     fs.readFile('./resources/插秧诗.md', (err, data2)=>{
//         fs.readFile('./resources/观书有感.md', (err, data3)=>{
//             let result = data1 + '\r\n' +data2  +'\r\n'+ data3;
//             console.log(result);
//         });
//     });
// });

//使用 promise 实现
const p = new Promise((resolve, reject) => {
  fs.readFile("./resources/为学.md", (err, data) => {
    resolve(data);
  });
});

p.then(value => {
  // console.log(value.toString());
  return new Promise((resolve, reject) => {
    fs.readFile('./resources/插秧诗.md', (err, data) => {
      resolve([value, data])
    });
  })

}).then(value => {
  return new Promise((resolve, reject) => {
    fs.readFile('./resources/观书有感.md', (err, data) => {
      value.push(data);
      resolve(value)
    });
  })
}).then(value => {
  console.log(value.join('\r\n'));
})