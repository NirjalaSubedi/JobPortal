const express = require('express');
const db = require('./config/db');
const colors=require('colors');
const app=express();
const checkconnection= async()=>{
    try{
        await db.execute('SELECT 1');
        console.log('connection success');
    }catch(e){
        console.log('database connection failed');
    }

};
checkconnection();