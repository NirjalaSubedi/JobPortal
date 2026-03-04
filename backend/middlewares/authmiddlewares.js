const jwt=require('jsonwebtoken');
const authmiddleware=async(req,res,next)=>{
    try{
        const token=req.headers.authorization?.split("")[1];
        if(!token){
            res.status(401).json({
                message:"No Token Authorization Denied "
            })
        }
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        user.req=decoded;
        next();

    }catch(error){
        res.status(401).json({
            message:"Token not valid"
        })
    }

}