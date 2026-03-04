const jwt=require('jsonwebtoken');
const authmiddleware=async(req,res,next)=>{
    try{
        const authheader=req.headers.authorization;
        if(!authheader||!authheader.startsWith("bearer")){ 
            return res.status(401).json({
                message:"No Token Authorization Denied "
            })
        }
        const token=authheader?.split()[1];
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        user.req=decoded;
        next();

    }catch(error){
        console.log("JWT Error:", error.message);
        return res.status(401).json({
            message:"Token not valid"
        })
    }

}
module.exports=authmiddleware;