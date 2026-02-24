const mysql= require('mysql2');
const dotenv=require('dotenv');
dotenv.config();
const pool= mysql.createPool({
    host:'localhost',
    username:'root',
    password:'',
    dbname:'jobPortal'
});
module.exports=pool.promise();