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

    console.log("----------------------------");
    console.log("POSTMAN BATA REQUEST AAYO!!"); // Yo terminal ma print hunaiparchha
    console.log("Body ma k chha:", req.body);
    console.log("----------------------------");

    try{
        const {email,password}=req.body;
        const [rows]= await db.execute("SELECT * FROM users Where email=?",[email]);
        if(rows.length===0){
            return res.status(404).json({message:"user Not found"});

        }
        const user=rows[0];
        const ismatch=await bcrypt.compare(password,user.password);
        if(!ismatch){
           return res.status(401).json({message:"invalid username and password"});
        }
        res.status(200).json({
            message:"login success",
            user:{
                id:user.id,
                name:user.name,
                email:user.email,
                role:user.role
            }

        });

    }catch(e){
        console.log(e);
        return res.status(500).json({message:e.message});
        
    }
}
