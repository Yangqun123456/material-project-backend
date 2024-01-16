// 导入数据库操作模块
const db = require('../db/index')
// 导入 bcryptjs 这个包
const bcrypt = require("bcryptjs");
const fs = require('fs');
const path = require('path');

// 获取用户信息
exports.getUserInfo = (req, res) => {
    const username = req.query.username; // 获取用户名
    const sql = `SELECT * FROM user WHERE username = ?`;
    db.query(sql, [username], (err, results) => {
        if (err) {
            return res.send({ status: 1, message: err.message });
        }
        if (results.length !== 1) {
            return res.send({ status: 1, message: '获取用户信息失败' });
        }
        const user = results[0];
        if (user.avatar) {
            // 读取头像文件并转换为Base64编码的字符串
            const avatarPath = path.join(__dirname, user.avatar);
            const avatarData = fs.readFileSync(avatarPath);
            const avatarBase64 = `data:image/png;base64,${avatarData.toString('base64')}`;
            // 将头像路径替换为Base64编码的字符串
            user.avatar = avatarBase64;
        }
        delete user.password;
        res.send({ status: 0, message: '获取用户信息成功', data: user });
    });
}

// 根据id更新用户昵称和邮箱
exports.updateUserInfo = (req, res) => {
    const userinfo = req.body;
    const sql = `UPDATE user SET nickname = ?, email = ? WHERE id = ?`;
    db.query(sql, [userinfo.nickname, userinfo.email, userinfo.id], (err, results) => {
        if (err) {
            return res.send({ status: 1, message: err.message });
        }
        if (results.affectedRows !== 1) {
            return res.send({ status: 1, message: '更新用户信息失败' });
        }
        res.send({ status: 0, message: '更新用户信息成功' });
    });
}

// 根据id修改用户密码
exports.updateUserPassword = (req, res) => {
    const userinfo = req.body;
    const checkSql = `SELECT password FROM user WHERE id = ?`;
    const updateSql = `UPDATE user SET password = ? WHERE id = ?`;

    db.query(checkSql, [userinfo.id], (err, results) => {
        if (err) return res.send({ status: 1, message: err.message });
        // 判断密码是否正确
        const compareResult = bcrypt.compareSync(userinfo.old_pwd, results[0].password);
        if (!compareResult) return res.cc("密码不正确！");
        userinfo.new_pwd = bcrypt.hashSync(userinfo.new_pwd, 10);
        db.query(updateSql, [userinfo.new_pwd, userinfo.id], (err, results) => {
            if (err) {
                return res.send({ status: 1, message: err.message });
            }
            if (results.affectedRows !== 1) {
                return res.send({ status: 1, message: '更新密码失败' });
            }
            res.send({ status: 0, message: '更新密码成功' });
        });
    });
}

// 更新用户头像
exports.updateAvatar = (req, res) => {
    const { id, avatar } = req.body; // 获取用户ID和Base64编码的头像
    // 将Base64编码的头像转换为文件
    const base64Data = avatar.replace(/^data:image\/\w+;base64,/, '');
    const dataBuffer = Buffer.from(base64Data, 'base64');
    const avatarPath = path.join('uploads', `${id}.png`);
    fs.writeFileSync(path.join(__dirname, avatarPath), dataBuffer);

    // 更新用户头像的SQL语句
    const sql = `UPDATE user SET avatar = ? WHERE id = ?`;

    // 执行SQL语句
    db.query(sql, [avatarPath, id], (err, results) => {
        if (err) {
            return res.send({ status: 1, message: err.message });
        }
        if (results.affectedRows !== 1) {
            return res.send({ status: 1, message: '更新头像失败' });
        }
        res.send({ status: 0, message: '更新头像成功', data: { avatar: avatarPath } });
    });
}

// 获取所有用户的用户名
exports.getAllUsername = (req, res) => {
    const sql = `SELECT id, username, nickname, status, identity FROM user`;
    db.query(sql, (err, results) => {
        if (err) {
            return res.send({ status: 1, message: err.message });
        }
        res.send({ status: 0, message: '获取用户名成功', data: results });
    });
}

// 根据用户id更新用户状态
exports.updateUserStatus = (req, res) => {
    const userinfo = req.body;
    const sql = `UPDATE user SET status = ? WHERE id = ?`;
    const status = userinfo.status=='true' ? 1 : 0;
    db.query(sql, [status, userinfo.id], (err, results) => {
        if (err) {
            return res.send({ status: 1, message: err.message });
        }
        if (results.affectedRows !== 1) {
            return res.send({ status: 1, message: '更新用户状态失败' });
        }
        res.send({ status: 0, message: '更新用户状态成功' });
    });
}