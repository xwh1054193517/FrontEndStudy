//抽离处理函数

//导入数据库操作模块
const db = require('../db/index')

//导入生成TOken的包
const jwt = require('jsonwebtoken')

//导入加密包
const bcrypt = require('bcryptjs')

//导入配置文件
const config = require('../config')

//注册用户函数
exports.regUser = (req, res) => {
    const userinfo = req.body
    if (!userinfo.username || !userinfo.password) {
        return res.send({ status: 1, message: '用户名或密码不合法！' })
    }

    const sql = `select * from ev_users where username=?`
    db.query(sql, [userinfo.username], function(err, result) {
        //sql失败
        if (err) {
            return res.send({ status: 1, message: err.message })
        }
        //用户名被占用
        if (results.length > 0) {
            return res.send({ status: 1, message: '用户名已被占用' })
        }

        //调用加密密码
        userinfo.password = bcrypt.hashSync(userinfo.password)
    })
}

exports.login = (req, res) => {
    const userinfo = req.body

    const sql = `select * from ev_users where username=?`

    db.query(sql, userinfo.username, function(err, results) {
        // 执行 SQL 语句失败
        if (err) return res.cc(err)
            // 执行 SQL 语句成功，但是查询到数据条数不等于 1
        if (results.length !== 1) return res.cc('登录失败！')
            // TODO：判断用户输入的登录密码是否和数据库中的密码一致

        // 拿着用户输入的密码,和数据库中存储的密码进行对比
        const compareResult = bcrypt.compareSync(userinfo.password.results[0].password)

        // 如果对比的结果等于 false, 则证明用户输入的密码错误
        if (!compareResult) {
            return res.cc('登录失败！')
        }

        // TODO：在服务器端生成 Token 的字符串
        const user = {...results[0], password: '', user_pic: '' }

        // 生成 Token 字符串
        const tokenStr = jwt.sign(user, config.jwtSecretKey, {
            expiresIn: '10h', // token 有效期为 10 个小时
        })

        // 调用 res.send() 将 Token 响应给客户端
        res.send({
            status: 0,
            message: '登陆成功',
            // 为了方便客户端使用 Token，在服务器端直接拼接上 Bearer 的前缀
            token: 'Bearer ' + tokenStr,
        })
    })
}