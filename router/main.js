const express = require('express')
const router = express.Router()
const main_hander = require('../router_handler/main')

// 1. 导入验证数据的中间件
const expressJoi = require("@escook/express-joi");
// 2. 导入需要的验证规则对象
const { login_schema, register_schema, submit_schema, update_material_id_schema } = require("../schema/schema");

router.post('/login', expressJoi(login_schema), main_hander.login)
router.post('/register', expressJoi(register_schema), main_hander.register)
router.post('/submit', expressJoi(submit_schema), main_hander.submit)
router.post('/submitSecond', main_hander.submitSecond)
router.post('/submitAll', main_hander.submitAll)
router.get('/getLastSubmitData', main_hander.getLastSubmitData)
router.get('/getAllMaterialNumberData', main_hander.getAllMaterialNumberData)
router.post('/updateMaterialId', expressJoi(update_material_id_schema), main_hander.updateMaterialId)
router.post('/deleteMaterialId', main_hander.deleteMaterialId)
router.get('/getAllMaterialData', main_hander.getAllMaterialData)
router.post('/deleteMaterialData', main_hander.deleteMaterialData)
router.post('/updateMaterialData', main_hander.updateMaterialData)
router.get('/getAllInputSequence', main_hander.getAllInputSequence)

module.exports = router