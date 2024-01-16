const express = require('express')
const router = express.Router()
const user_hander = require('../router_handler/user')

// 1. 导入验证数据的中间件
const expressJoi = require("@escook/express-joi");
const { updateUserPassword_schema, updateAvatar_schema } = require("../schema/schema");

router.get('/getUserInfo', user_hander.getUserInfo)
router.post('/updateUserInfo', user_hander.updateUserInfo)
router.post('/updateUserPassword', expressJoi(updateUserPassword_schema), user_hander.updateUserPassword)
router.patch('/updateAvatar', expressJoi(updateAvatar_schema), user_hander.updateAvatar)
router.get('/getAllUsername', user_hander.getAllUsername)
module.exports = router