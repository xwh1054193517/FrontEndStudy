//用户路由模块
const express = require('express')

const router = express.Router()

//导入用户路由处理函数模块
const userHandler = require('../router_handler/user')

//导入验证数据表单的中间件
const expressJoi = require('@escook/express-joi')

// 导入需要的验证规则对象
const { reg_login_schema } = require('../schema/user')

//注册新用户
router.post('/register', userHandler.regUser)

//登录
router.post('/login', expressJoi(reg_login_schema), userHandler.login)

//导出暴露
module.exports = router