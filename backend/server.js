const express = require('express');
const db = require('./config/db');
const colors=require('colors');
require('dotenv').config();
const app=express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
const checkconnection= async()=>{
    try{
        await db.execute('SELECT 1');
        console.log('connection success');
    }catch(e){
        console.log('database connection failed');
    }

};
checkconnection();

const authRoutes = require('./routes/authrouters');

app.use((req, res, next) => {
    console.log(`${req.method} request aayo: ${req.url}`);
    next();
});

app.use('/api/auth', authRoutes);

app.listen(5000, () => {
    console.log('Server running on port 5000');
});