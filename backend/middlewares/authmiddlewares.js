const jwt=require('jsonwebtoken');
const authmiddleware=async(req,res,next)=>{
    try{
        const token=req.headers.authorization?.split(" ")[1];
        if(!token){ 
            return res.status(401).json({
                message:"No Token Authorization Denied "
            })
        }
        
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        req.user=decoded;
        next();

    }catch(error){
        console.log("JWT Error:", error.message);
        return res.status(401).json({
            message:"Token not valid"
        })
    }

}
module.exports=authmiddleware;

