const age = 20

module.exports.username = 'zs'

module.exports.sayhi = function(params) {
    console.log('hello');
}

module.exports.age = age

module.exports = {
    nick: '小黑',
    sayHello() {
        console.log('hi');
    }
}

// console.log(exports)
// console.log(module.exports)

// console.log(exports === module.exports)
//最终，向外共享的结果，永远都是 module.exports 所指向的对象