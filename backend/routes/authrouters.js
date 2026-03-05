const express= require('express');
const authmiddleware=require('../middlewares/authmiddlewares');
const router=express.Router();
const {userRegister,loginUser}= require('../controllers/authControllers');
const {createJob,getalljobs}=require('../controllers/jobControllers');

router.post('/register', userRegister);
router.post('/login',loginUser);
router.get('/test-auth',authmiddleware,(req,res)=>{
    res.status(200).json({
        message:"token valid xa",
        userdata:req.user
    })
})

router.post('/debug-test', (req, res) => res.send("Route working!"));

router.post('/create-job',authmiddleware,createJob);
router.get('/getjobs',getalljobs);
module.exports = router;