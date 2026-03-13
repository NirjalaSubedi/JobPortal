const express= require('express');
const authmiddleware=require('../middlewares/authmiddlewares');
const router=express.Router();
const {userRegister,loginUser}= require('../controllers/authControllers');
const {createJob,getalljobs,getsinglejob,updatejob,deletejob}=require('../controllers/jobControllers');
const {createcompany,fetchcompany,fetchsinglecompany,updateCompany,detelecompany}=require('../controllers/companyControllers');

router.post('/register', userRegister);
router.post('/login',loginUser);
router.get('/test-auth',authmiddleware,(req,res)=>{
    res.status(200).json({
        message:"token valid xa",
        userdata:req.user
    })
})

router.post('/debug-test', (req, res) => res.send("Route working!"));
//job api
router.post('/create-job',authmiddleware,createJob);
router.get('/getjobs',getalljobs);
router.get('/getsinglejob/:id',getsinglejob);
router.patch('/updatejob/:id',updatejob);
router.delete('/deletejob/:id',deletejob);

//company api
router.post('/createcompany',createcompany);
router.get('/fetchcompany',fetchcompany);
router.get('/fetchsinglecompany/:id',fetchsinglecompany);
router.patch('/updateCompany/:id',updateCompany);
router.delete('/deletecompany/:id',detelecompany);

module.exports = router;