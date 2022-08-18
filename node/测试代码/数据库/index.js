const mysql = require("mysql2");

const {createConnection} = require("mysql2/promise")

const connection = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"xyq2386152296",
    database:"my_school_db"
})

connection.query("select* from book",(error,res)=>{
    console.log(error,res)
})

connection.end()