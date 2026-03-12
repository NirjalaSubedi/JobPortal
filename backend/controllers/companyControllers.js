const db= require ('../config/db');
//for company creation
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
//to fetch all company details
exports.fetchcompany=async(req,res)=>{
    try{
        const [companies]=await db.execute("SELECT * FROM companies ORDER BY id DESC");
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

//to fetch single company  details
exports.fetchsinglecompany=async(req,res)=>{
    try{
        companyid= req.params.id;
        const [companies]=await db.execute("SELECT * FROM companies WHERE id=?",[companyid]);
        if(companies.length===0){
            return res.status(404).json({
                success:false,
                message:"company vetiyana"
            })
        }
        res.status(200).json({
            success:true,
            companies:companies[0]

        })

    }catch(error){
        res.status(500).json({
            success:false,
            message:"company fetch garna sakiyana",
            error:error.message
        })
    }
}

//to update company details
exports.updateCompany=async(req,res)=>{
    try{
        const companyid=req.params.id;
        const {name,logo_url,website,location,description}=req.body;
        const [result] = await db.execute("UPDATE companies SET name=?,logo_url=?,website=?,location=?, description=? WHERE id=?",[name,logo_url,website,location,description,companyid]);
        if(result.affectedRows===0){
            res.status(404).json({
                success:false,
                message:"upadte garna kojiyako company vetiyana",
            })
        }
        res.status(200).json({
            success:true,
            message:"update successful vayo"

        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:"companies ko data update garna sakiyana",
            error:error.message
        })
    }
}

//delete company details
exports.detelecompany=async (req,res)=>{
    const companyid=req.params.id;
    const [result]= await db.execute("DELETE companies WHERE id=?",[companyid]);
    if(result.affectedRows===0){
        return res.status(404).json({
            success:false,
            message:" haleko id delete garna ko lagi vetiyana",
        })
    }
    res.status(200).json({
        success:true,
        message:"company deleted success"
    })
}