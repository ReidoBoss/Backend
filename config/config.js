const { createConnection } = require("mysql");
// const con = createConnection({
//   host: "localhost",
//   user: "root",
//   password: "123",
//   database: "megaland_db",
// });
const con = createConnection({
  host: "srv545.hstgr.io",
  user: "u484898470_megaland",
  password: "Concentrix70139",
  database: "u484898470_megaland_db",
});

con.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = con;
