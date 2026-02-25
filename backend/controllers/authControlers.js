const db= require('../config/db.js');
const bcrypt=require('bcryptjs');
//Register User
exports.userRegister=async(req,res)=> {
    try{
        const {name,email,password,role}=req.body;
        //password hasing
        const salt= await bcrypt.genSalt(10);
        const hashpassword= await bcrypt.hash(password,salt);
        //saving in db
        const sql = "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)";
        await db.execute(sql, [name, email, hashpassword, role || 'candidate']);

        res.status(201).json({ message: "User registered successfully!" });

    }catch(e){
        res.status(500).json({message:"User registered unsuccessfully!"});
    }
}
