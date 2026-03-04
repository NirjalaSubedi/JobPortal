const jwt=require('jsonwebtoken');
const authmiddleware=async(req,res,next)=>{
    try{
        const token=req.headers.authorization?.split("")[1];
        if(!token){
            res.status(401).json({
                message:"No Token Authorization Denied "
            })
        }
        

    }catch(error){

    }

}