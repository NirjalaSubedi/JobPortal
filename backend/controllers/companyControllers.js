const db= require ('../config/db');
exports.createcompany=async(req,res)=>{
    try{
        const{name,logo_url,website,location}=req.body;
        const [result]= await db.execute("NSERT INTO companies (name, logo_url, website, location, description) VALUES (?, ?, ?, ?, ?)",
            [name, logo_url, website, location, description])
    }catch(error){

    }

}