const mysql = require('mysql')

const db = mysql.createConnection({
  host: "sql313.infinityfree.com",
  user: "if0_35824810",
  password: "zr01012001",
  database: "if0_35824810_api_service"
})

module.exports = db
