// 导入定义验证规则的包
const joi = require('joi')

// 定义用户名和密码的验证规则
const username = joi.string().min(2).max(10).required();
const password = joi.string().pattern(/^[\S]{6,12}$/).required();
// 定义验证注册和登录表单数据的规则对象
exports.login_schema = {
    body: {
        username,
        password,
    },
}
exports.register_schema = {
    body: {
        username,
        password,
        identity: joi.required(),
    },
}
exports.submit_schema = {
    body: {
        username,
        material_id: joi.string().required(),
        wu_1: joi.string().required(),
        wu_2: joi.string().required(),
        shang_1: joi.string().required(),
        shang_2: joi.string().required(),
        xia_1: joi.string().required(),
        xia_2: joi.string().required(),
        Q_number: joi.number().required().min(4500),
    },
}
exports.update_material_id_schema = {
    body: {
        new_material_id: joi.string().required(),
        material_id: joi.string().required(),
    }
}
exports.updateUserPassword_schema = {
    body: {
        id: joi.number().required(),
        old_pwd: joi.string().required(),
        new_pwd: joi.string().required(),
    }
}
exports.updateAvatar_schema = {
    body: {
        id: joi.number().required(),
        avatar: joi.required(),
    }
}
