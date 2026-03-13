const db = require("../config/db");
exports.createJob= async(req,res)=>{
    try{
       const {title,category,description,company,location,salary} = req.body;
       //error checking 
       console.log("User ID from Middleware:", req.user ? req.user.id : "No User ID found");
        console.log("Body Data:", req.body);
        
       const userid=req.user.id;
       const [result]= await db.execute("INSERT INTO jobs(title,category,description,company,location,salary,createdBy) VALUES(?,?,?,?,?,?,?)",
        [title,category,description,company,location,salary,userid])

        res.status(201).json({
            message:"job created success",
            jobId: result.insertId
        })
    }catch(error){
        res.status(500).json({
            success: false,
            message:"job creation failed",
            error:error.message
        })
    }
}

exports.getalljobs= async(req,res)=>{
    try{
        const [jobs]=await db.execute("SELECT j.*, c.name as company_name, c.logo_url FROM jobs j JOIN companies c ON j.companyId = c.id");
        res.status(200).json({
        success:true,
        message:"fetching job details",
        count:jobs.length,
        jobs
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:"job fetch garna sakiyana ",
            error:error.message
        })
    }
}
exports.getsinglejob =async (req,res)=>{
    try{
        jobid=req.params.id //url bata id leko
        const [jobs]=await db.execute("SELECT * FROM jobs WHERE id=?",[jobid]);
        if(jobs.length===0){
            return res.status(404).json({
                success:false,
                message:"Job vetiyana"
            })
        }
        res.status(200).json({
            success:"true",
            job:jobs[0]
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:"job display ma error aayo",
            error:error.message
        })
    }
}
exports.updatejob=async(req,res)=>{
    try{
        const jobid=req.params.id;
        const {title,category,description,company,location,salary}=req.body;
        const [result]= await db.execute("UPDATE jobs SET title=?,category=?,description=?,company=?,location=?,salary=? WHERE id=?",[title,category,description,company,location,salary,jobid]);
        if(result.affectedRows<0){
             return res.status(404).json({
                success:false,
                message:"data update garna sakiyana"
            })
        }
        res.status(200).json({
            success:true,
            message:"data update vayo"
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:" job update garna sakiyana",
            error:error.message
        })
    }
}
