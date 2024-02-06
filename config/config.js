const { createPool } = require("mysql");

// const con = createPool({
//   host: "localhost",
//   user: "root",
//   password: "123",
//   database: "megaland_db",
// });

const con = createPool({
  host: "srv545.hstgr.io",
  user: "u484898470_megaland",
  password: "Concentrix70139",
  database: "u484898470_megaland_db",
});

// con.connect((error) => {s
module.exports = con;
