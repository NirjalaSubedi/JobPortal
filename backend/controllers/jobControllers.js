const db = require("../config/db");
exports.createJob= async(req,res)=>{
    try{
       const {title,description,company,location,salary} = req.body;
       const userid=req.user.id;
       const [result]= await db.execute("INSERT INTO jobs(title,description,company,location,salary,createdBy) VALUES(?,?,?,?,?,?)",
        [title,description,company,location,salary,userid])

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
        const [jobs]=await db.execute("SELECT * FROM jobs ORDER BY createdAt DESC");
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

