// 导入数据库操作模块
const db = require("../db/index");
// 导入 bcryptjs 这个包
const bcrypt = require("bcryptjs");
// 导入生成 Token 的包
const jwt = require("jsonwebtoken");
// 导入全局的配置文件
const config = require("../config/config");
// 注册新用户的处理函数
exports.register = (req, res) => {
    // 获取客户端提交到服务器的用户信息
    const userinfo = req.body;
    // 定义 SQL 语句，查询用户名是否被占用
    const sqlStr = "select * from user where username=?";
    db.query(sqlStr, userinfo.username, (err, results) => {
        // 执行 SQL 语句失败
        if (err) {
            res.cc(err);
        }
        // 判断用户名是否被占用
        if (results.length > 0) {
            return res.cc("该用户名已被使用，请更换！");
        }
        // 调用 bcrypt.hashSync() 对密码进行加密
        userinfo.password = bcrypt.hashSync(userinfo.password, 10);
        // 定义插入新用户的 SQL 语句
        const sql = "insert into user set ?";
        // 调用 db.query() 执行 SQL 语句
        db.query(
            sql,
            {
                username: userinfo.username,
                password: userinfo.password,
                identity: 'user',
                Registered_Date: new Date().Format("yyyy-MM-dd HH:mm:ss"),
            },
            (err, results) => {
                // 判断 SQL 语句是否执行成功
                if (err) return res.cc(err);
                // 判断影响行数是否为 1
                if (results.affectedRows !== 1)
                    return res.cc("注册用户失败，请稍后再试！");
                else res.cc("注册成功！", 0);
            }
        );
    });
};

// 登录的处理函数
exports.login = (req, res) => {
    // 接收表单的数据
    const userinfo = req.body;
    // 定义 SQL 语句
    const sql = `select * from user where username=?`;
    // 执行 SQL 语句，根据用户名查询用户的信息
    db.query(sql, userinfo.username, (err, results) => {
        // 执行 SQL 语句失败
        if (err) return res.cc(err);
        // 执行 SQL 语句成功，但是获取到的数据条数不等于 1
        if (results.length !== 1) return res.cc("用户名不存在！");
        // 检查用户状态和身份
        if (results[0].status !== 1 && results[0].identity !== 'administrator') return res.cc("用户状态不正确，无法登录！");
        // 判断密码是否正确
        const compareResult = bcrypt.compareSync(
            userinfo.password,
            results[0].password
        );
        if (!compareResult) return res.cc("密码不正确！");
        // TODO：在服务器端生成 Token 的字符串
        const user = { ...results[0], password: "" };
        // 对用户的信息进行加密，生成 Token 字符串
        const tokenStr = jwt.sign(user, config.jwtSecretKey, {
            expiresIn: config.expiresIn,
        });
        res.send({
            status: 0,
            message: "登录成功！",
            username: results[0].username,
            token: "Bearer " + tokenStr,
        });
    });
};

// 提交材料信息 - 1
exports.submit = (req, res) => {
    // 接收表单的数据
    const userinfo = req.body;
    // 定义 SQL 语句查询当前的最大input_sequence
    const sqlSequence =
        "SELECT MAX(input_sequence) AS max_sequence FROM material WHERE material_id = ?";
    db.query(sqlSequence, [userinfo.material_id], (err, results) => {
        if (err) return res.cc(err);
        // 如果存在上一次的提交记录
        if (results[0].max_sequence) {
            const max_sequence = results[0].max_sequence
            // 定义 SQL 语句查询上一次提交的记录是否已经录入了第二部分的信息
            const sqlCheck =
                "SELECT * FROM material WHERE material_id = ? AND input_sequence = ?";
            db.query(sqlCheck, [userinfo.material_id, max_sequence], (err, results) => {
                if (err) return res.cc(err);
                // 如果上一次的提交记录没有录入第二部分的信息
                if (!results[0].height1) {
                    return res.cc("尺寸未录入，无法提交");
                }
                // 计算新的input_sequence
                const new_sequence = max_sequence + 1;
                // 定义 SQL 语句
                const sql = `insert into material set ?`;
                // 执行 SQL 语句，插入新的材料信息
                db.query(
                    sql,
                    {
                        material_id: userinfo.material_id,
                        input_sequence: new_sequence,
                        Q_number: userinfo.Q_number.toString(),
                        wu_1: userinfo.wu_1,
                        wu_2: userinfo.wu_2,
                        shang_1: userinfo.shang_1,
                        shang_2: userinfo.shang_2,
                        xia_1: userinfo.xia_1,
                        xia_2: userinfo.xia_2,
                        material_date:
                            userinfo.material_data || new Date().Format("yyyy-MM-dd HH:mm:ss"),
                        username: userinfo.username,
                    },
                    (err, results) => {
                        // 执行 SQL 语句失败
                        if (err) return res.cc(err);
                        // 判断影响行数是否为 1
                        if (results.affectedRows !== 1) return res.cc("提交失败，请稍后再试！");
                        else res.cc("提交成功！", 0);
                    }
                );
            });
        } else {
            // 如果不存在上一次的提交记录，直接插入新的材料信息
            const new_sequence = 1;
            const sql = `insert into material set ?`;
            db.query(
                sql,
                {
                    material_id: userinfo.material_id,
                    input_sequence: new_sequence,
                    Q_number: userinfo.Q_number.toString(),
                    wu_1: userinfo.wu_1,
                    wu_2: userinfo.wu_2,
                    shang_1: userinfo.shang_1,
                    shang_2: userinfo.shang_2,
                    xia_1: userinfo.xia_1,
                    xia_2: userinfo.xia_2,
                    material_date:
                        userinfo.material_data || new Date().Format("yyyy-MM-dd HH:mm:ss"),
                    username: userinfo.username,
                },
                (err, results) => {
                    if (err) return res.cc(err);
                    if (results.affectedRows !== 1) return res.cc("提交失败，请稍后再试！");
                    else res.cc("提交成功！", 0);
                }
            );
        }
    });
};

// 提交材料信息 - ALL
exports.submitAll = (req, res) => {
    // 接收表单的数据
    const userinfo = req.body;
    // 定义 SQL 语句查询当前的最大input_sequence
    const sqlSequence =
        "SELECT MAX(input_sequence) AS max_sequence FROM material WHERE material_id = ?";
    db.query(sqlSequence, [userinfo.material_id], (err, results) => {
        if (err) return res.cc(err);
        // 计算新的input_sequence
        const new_sequence = results[0].max_sequence
            ? results[0].max_sequence + 1
            : 1;
        // 定义 SQL 语句
        const sql = `insert into material set ?`;
        // 执行 SQL 语句，插入新的材料信息
        db.query(
            sql,
            {
                material_id: userinfo.material_id,
                input_sequence: new_sequence,
                Q_number: userinfo.Q_number.toString(),
                wu_1: userinfo.wu_1,
                wu_2: userinfo.wu_2,
                shang_1: userinfo.shang_1,
                shang_2: userinfo.shang_2,
                xia_1: userinfo.xia_1,
                xia_2: userinfo.xia_2,
                material_date:
                    userinfo.material_date || new Date().Format("yyyy-MM-dd HH:mm:ss"),
                username: userinfo.username,
                height1: userinfo.height1,
                height2: userinfo.height2,
                height3: userinfo.height3,
                height4: userinfo.height4,
                height5: userinfo.height5,
                height6: userinfo.height6,
                height7: userinfo.height7,
                height8: userinfo.height8,
                small1: userinfo.small1,
                small2: userinfo.small2,
                small3: userinfo.small3,
                small4: userinfo.small4,
                big1: userinfo.big1,
                big2: userinfo.big2,
                big3: userinfo.big3,
                big4: userinfo.big4,
                input_name: userinfo.input_name,
                input_date: userinfo.input_date || new Date().Format("yyyy-MM-dd HH:mm:ss"),
            },
            (err, results) => {
                // 执行 SQL 语句失败
                if (err) return res.cc(err);
                // 判断影响行数是否为 1
                if (results.affectedRows !== 1) return res.cc("提交失败，请稍后再试！");
                else res.cc("提交成功！", 0);
            }
        );
    });
};

// 提交材料信息 - 2
exports.submitSecond = (req, res) => {
    // 接收表单的数据
    const userinfo = req.body;
    // 定义 SQL 语句查询当前的最大input_sequence
    const sqlSequence =
        "SELECT MAX(input_sequence) AS max_sequence FROM material WHERE material_id = ?";
    db.query(sqlSequence, [userinfo.material_id], (err, results) => {
        if (err) return res.cc(err);
        // 如果存在上一次的提交记录
        if (results[0].max_sequence) {
            // 定义 SQL 语句查询上一次提交的记录是否已经录入了第二部分的信息
            const max_sequence = results[0].max_sequence
            const sqlCheck = "SELECT * FROM material WHERE material_id = ? AND input_sequence = ?";
            db.query(sqlCheck, [userinfo.material_id, max_sequence], (err, results) => {
                if (err) return res.cc(err);
                // 如果上一次的提交记录已经录入了第二部分的信息
                if (results[0].height1) {
                    return res.cc("频率未录入，无法提交");
                }
                // 定义 SQL 语句
                const sql = `UPDATE material SET height1 = ?, height2 = ?, height3 = ?, height4 = ?, height5 = ?, height6 = ?, height7 = ?, height8 = ?, small1 = ?, small2 = ?, small3 = ?, small4 = ?, big1 = ?, big2 = ?, big3 = ?, big4 = ?, input_name = ?, input_date = ? WHERE material_id = ? AND input_sequence = ?`;
                // 执行 SQL 语句，更新材料信息
                db.query(
                    sql,
                    [
                        userinfo.height1,
                        userinfo.height2,
                        userinfo.height3,
                        userinfo.height4,
                        userinfo.height5,
                        userinfo.height6,
                        userinfo.height7,
                        userinfo.height8,
                        userinfo.small1,
                        userinfo.small2,
                        userinfo.small3,
                        userinfo.small4,
                        userinfo.big1,
                        userinfo.big2,
                        userinfo.big3,
                        userinfo.big4,
                        userinfo.input_name,
                        userinfo.input_date || new Date().Format("yyyy-MM-dd HH:mm:ss"),
                        userinfo.material_id,
                        max_sequence
                    ],
                    (err, results) => {
                        // 执行 SQL 语句失败
                        if (err) return res.cc(err);
                        // 判断影响行数是否为 1
                        if (results.affectedRows !== 1) return res.cc("提交失败，请稍后再试！");
                        else res.cc("提交成功！", 0);
                    }
                );
            });
        } else {
            // 如果不存在上一次的提交记录，返回错误信息
            return res.cc("频率未录入，无法提交");
        }
    });
};

// 查询上次提交材料id
exports.getLastSubmitData = (req, res) => {
    // 接收表单的数据
    const userinfo = req.query;
    // 定义 SQL 语句
    const sql = `select * from material where username=? order by material_date desc limit 1`;
    // 执行 SQL 语句，根据用户名查询用户的信息
    db.query(sql, userinfo.username, (err, results) => {
        // 执行 SQL 语句失败
        if (err) return res.cc(err);
        // 判断影响行数是否为 1
        if (results.length !== 1) return res.cc("查询失败，请稍后再试！");
        else
            res.send({
                status: 0,
                message: "查询成功！",
                data: results[0],
            });
    });
};

// 查询所有杠铃记录数量信息
exports.getAllMaterialNumberData = (req, res) => {
    const sql = `SELECT material_id, COUNT(*) as count FROM material GROUP BY material_id`;
    db.query(sql, (err, results) => {
        // 执行 SQL 语句失败
        if (err) return res.cc(err);
        if (results.length == 0) return res.cc("查询失败，请稍后再试！", 0);
        else
            res.send({
                status: 0,
                message: "查询成功！",
                data: results,
            });
    });
};

// 修改指定杠铃id值
exports.updateMaterialId = (req, res) => {
    const userinfo = req.body;
    let sql = `SELECT MAX(input_sequence) as maxSeq FROM material WHERE material_id = ?`;
    db.query(sql, [userinfo.new_material_id], (err, results) => {
        if (err) return res.cc(err);
        let maxSeq = null;
        if (results.length > 0 && results[0].maxSeq !== null) {
            maxSeq = results[0].maxSeq + 1;
        }
        sql = maxSeq !== null ? 
            `UPDATE material SET input_sequence = ?, material_id = ? WHERE material_id = ?` :
            `UPDATE material SET material_id = ? WHERE material_id = ?`;
        const params = maxSeq !== null ? 
            [maxSeq, userinfo.new_material_id, userinfo.material_id] :
            [userinfo.new_material_id, userinfo.material_id];
        db.query(sql, params, (err, results) => {
            if (err) return res.cc(err);
            if (results.affectedRows == 0) return res.cc("修改失败，请稍后再试！");
            res.cc("修改成功！", 0);
        });
    });
};
// 删除指定Id杠铃记录信息
exports.deleteMaterialId = (req, res) => {
    const userinfo = req.body;
    const sql = `delete from material where material_id=?`;
    db.query(sql, userinfo.material_id, (err, results) => {
        if (err) return res.cc(err);
        if (results.affectedRows == 0) return res.cc("删除失败，请稍后再试！");
        else res.cc("删除成功！", 0);
    });
};

// 查询所有杠铃记录信息
exports.getAllMaterialData = (req, res) => {
    const { input_sequence, username, material_id } = req.query;
    // 构建SQL查询语句
    let sql = `SELECT material.*, COALESCE(user.nickname, user.username) as username, 
        CASE 
            WHEN material.input_name IS NULL THEN NULL
            ELSE COALESCE(user.nickname, material.input_name)
        END as input_name
        FROM material 
        JOIN user ON material.username = user.username
        WHERE 1 = 1`;
    let countSql = `SELECT COUNT(*) as total FROM material WHERE 1 = 1`;
    let params = [];
    let countParams = [];
    // 添加额外的查询条件
    if (input_sequence && input_sequence.length) {
        sql += ` AND material.input_sequence IN (?)`;
        countSql += ` AND input_sequence IN (?)`;
        params.push(input_sequence);
        countParams.push(input_sequence);
    }
    if (username && username.length) {
        sql += ` AND material.username IN (?)`;
        countSql += ` AND material.username IN (?)`;
        params.push(username);
        countParams.push(username);
    }
    if (material_id) {
        sql += ` AND material.material_id LIKE ?`;
        countSql += ` AND material_id LIKE ?`;
        params.push('%' + material_id + '%');
        countParams.push('%' + material_id + '%');
    }
    // 执行SQL查询
    db.query(sql, params, (err, results) => {
        if (err) {
            return res.send({ status: 1, message: err.message });
        }
        // 执行计数查询
        db.query(countSql, countParams, (err, countResults) => {
            if (err) {
                return res.send({ status: 1, message: err.message });
            }
            res.send({
                status: 0,
                message: "获取杠铃记录信息成功",
                data: results,
                total: countResults[0].total,
            });
        });
    });
};

// 删除指定记录id的杠铃记录信息
exports.deleteMaterialData = (req, res) => {
    const id = req.body.id; // 获取要删除的记录ID
    let sql = `SELECT material_id, input_sequence FROM material WHERE id = ?`;
    db.query(sql, [id], (err, results) => {
        if (err) {
            return res.send({ status: 1, message: err.message });
        }
        if (results.length === 0) {
            return res.send({ status: 1, message: "找不到要删除的杠铃记录信息" });
        }
        const material_id = results[0].material_id;
        const input_sequence = results[0].input_sequence;
        sql = `DELETE FROM material WHERE id = ?`;
        db.query(sql, [id], (err, results) => {
            if (err) {
                return res.send({ status: 1, message: err.message });
            }
            if (results.affectedRows === 0) {
                return res.send({ status: 1, message: "删除杠铃记录信息失败" });
            }
            sql = `UPDATE material SET input_sequence = input_sequence - 1 WHERE material_id = ? AND input_sequence > ?`;
            db.query(sql, [material_id, input_sequence], (err, results) => {
                if (err) {
                    return res.send({ status: 1, message: err.message });
                }
                res.send({ status: 0, message: "删除杠铃记录信息成功" });
            });
        });
    });
};

// 修改指定记录id的杠铃记录信息
exports.updateMaterialData = (req, res) => {
    const id = req.body.id;
    const material_id = req.body.material_id;
    const Q_number = req.body.Q_number;
    const wu_1 = req.body.wu_1;
    const wu_2 = req.body.wu_2;
    const shang_1 = req.body.shang_1;
    const shang_2 = req.body.shang_2;
    const xia_1 = req.body.xia_1;
    const xia_2 = req.body.xia_2;
    const material_date =
        req.body.material_date || new Date().Format("yyyy-MM-dd HH:mm:ss");
    const username = req.body.username;
    const height1 = req.body.height1
    const height2 = req.body.height2
    const height3 = req.body.height3
    const height4 = req.body.height4
    const height5 = req.body.height5
    const height6 = req.body.height6
    const height7 = req.body.height7
    const height8 = req.body.height8
    const small1 = req.body.small1
    const small2 = req.body.small2
    const small3 = req.body.small3
    const small4 = req.body.small4
    const big1 = req.body.big1
    const big2 = req.body.big2
    const big3 = req.body.big3
    const big4 = req.body.big4
    const input_date = req.body.input_date || new Date().Format("yyyy-MM-dd HH:mm:ss");
    const input_name = req.body.input_name
    const sql = `UPDATE material SET material_id = ?, Q_number = ?, wu_1 = ?, wu_2 = ?, shang_1 = ?, shang_2 = ?, xia_1 = ?, xia_2 = ?, material_date = ?, username =?, height1 = ?, height2 = ?, height3 = ?, height4 = ?, height5 = ?, height6 = ?, height7 = ?, height8 = ?, small1 = ?, small2 = ?, small3 = ?, small4 = ?, big1 = ?, big2 = ?, big3 = ?, big4 = ?, input_date = ?, input_name = ? WHERE id = ?`;
    db.query(
        sql,
        [
            material_id,
            Q_number,
            wu_1,
            wu_2,
            shang_1,
            shang_2,
            xia_1,
            xia_2,
            material_date,
            username,
            height1,
            height2,
            height3,
            height4,
            height5,
            height6,
            height7,
            height8,
            small1,
            small2,
            small3,
            small4,
            big1,
            big2,
            big3,
            big4,
            input_date,
            input_name,
            id,
        ],
        (err, results) => {
            if (err) {
                return res.send({ status: 1, message: err.message });
            }
            if (results.affectedRows === 0) {
                return res.send({ status: 1, message: "修改杠铃记录信息失败" });
            }
            res.send({ status: 0, message: "修改杠铃记录信息成功" });
        }
    );
};

// 获得所有input_sequence
exports.getAllInputSequence = (req, res) => {
    const sql = `SELECT input_sequence FROM material`;
    db.query(sql, (err, results) => {
        if (err) {
            return res.send({ status: 1, message: err.message });
        }
        res.send({ status: 0, message: "获取input_sequence成功", data: results });
    });
};

// 日期格式化
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "H+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        S: this.getMilliseconds(), //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(
            RegExp.$1,
            (this.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(
                RegExp.$1,
                RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
            );
    return fmt;
};
