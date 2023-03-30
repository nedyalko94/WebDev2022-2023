
const mysql2 = require('mysql2')


const db = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database:"cars"
  });
  
  db.connect(function(err) {
    if (err) throw err;
    console.log("my sql2 is Connected!");
  
    
  });

  module.exports = {db}