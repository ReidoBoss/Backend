const {createConnection } = require('mysql');

const con = createConnection({
    host:"localhost",
    user:"root",
    password:"123",
    database:"megaland_db"
});


con.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });

// con.query('SELECT * FROM bookstb',(err,result,fields)=>{
//     if(err){
//         return console.log(err);
//     }
//     return console.log(result);
// })

module.exports = con;
