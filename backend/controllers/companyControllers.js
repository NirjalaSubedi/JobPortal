const db= require ('../config/db');
exports.createcompany=async(req,res)=>{
    try{
        const{name,logo_url,website,location,description}=req.body;
        const [result]= await db.execute("INSERT INTO companies (name, logo_url, website, location, description) VALUES (?, ?, ?, ?, ?)",
            [name, logo_url, website, location, description]);
        res.status(201).json({
            success:true,
            message:"company creation successfull",
            companyid:result.insertId
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:"company create garna sakiyana",
            error:error.message
        })
    }

}

exports.fetchcompany=async(req,res)=>{
    try{
        const [companies]=await db.execute("");
        res.status(200).json({
            success:true,
            message:"companies fetch garna success vayo",
            count:companies.length,
            companies

        })

    }catch(error){
        res.status(500).json({
            success:false,
            message:"company fetch garna sakiyana",
            error:error.message
        })
    }
}