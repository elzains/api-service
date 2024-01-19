const mysql = require('mysql')

const db = mysql.createConnection({
  host: "https://47.245.118.30/",
  user: "root",
  password: "",
  database: "api_service"
})

module.exports = db
