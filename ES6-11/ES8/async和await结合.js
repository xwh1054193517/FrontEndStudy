const { getFips } = require('crypto');
const fs = require('fs')

function getfile (name) {
  return new Promise((resolve, reject) => {
    fs.readFile('../promise/resources/' + name, (err, data) => {
      //如果失败
      if (err) reject(err);
      //成功
      resolve(data)
    })
  })
}

let weixue = '为学.md'
let chayang = '插秧诗.md'
let guanshu = '观书有感.md'
async function main () {
  let wei = await getfile(weixue)
  let cha = await getfile(chayang)
  let guan = await getfile(guanshu)
  console.log(wei.toString());
  console.log(cha.toString());
  console.log(guan.toString());
}
main()