const mysql = require('mysql')

const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '12345678',
  database: 'material_project',
  timezone: "Asia/Shanghai"
})

module.exports = db
