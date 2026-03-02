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
//login user
exports.loginUser=async(req, res)=>{
    try{
        const {email,password}=req.body;
        const [rows]= await db.execute("SELECT * FORM users Where email=?"[email]);
        if(rows.length===0){
            res.status(404).json({message:"user Not found"});
        }
        const user=rows[0];
        const ismatch=await bcrypt.compare(password,user.password);
        if(!ismatch){
           return res.status(401).json({message:"yo naam ko user register xaiina"});
        }
        res.status(200).json({
            message:"login success",
            user:{
                id:user.id,
                name:user.name,
                email:user.email,
                password:email.password
            }

        })

    }catch(e){
        return res.status(500).json({message:e.message});
    }
}
