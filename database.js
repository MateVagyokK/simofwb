/*  This file handles the database.
    Saskó Máté
*/
var mysql = require('mysql2/promise');
const config = require("./dbconfig");
const pool = mysql.createPool(config);

async function query(sql, params) {
  const [rows, fields] = await pool.execute(sql, params);
  return rows;
}

module.exports = {
  query,
};
