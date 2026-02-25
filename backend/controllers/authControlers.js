const db= require('./config/db.js');
const bycrypt=require('bcryptjs');
//Register User
exports.userRegister=async(req,res)=> {
    try{
        const {name,email,password,role}=req.body;
    }catch(e){
        res.status(200);
    }
}
