const db= require('./config/db.js');
const bcrypt=require('bcryptjs');
//Register User
exports.userRegister=async(req,res)=> {
    try{
        const {name,email,password,role}=req.body;
        //password hasing
        const salt= await bcrypt.genSalt(10);
        const hashpassword= await bcrypt.hash(password,salt);


    }catch(e){
        res.status(500);
    }
}
