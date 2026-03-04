const express= require('express');
const authmiddleware=require('../middlewares/authmiddlewares');
const router=express.Router();
const {userRegister,loginUser}= require('../controllers/authControllers');
const {createJob}=require('../controllers/jobControllers');

router.post('/register', userRegister);
router.post('/login',loginUser);
router.get('/test-auth',authmiddleware,(req,res)=>{
    res.status(200).json({
        message:"token valid xa",
        userdata:req.user
    })
})
router.post('/create-post',authmiddleware,createJob);
module.exports = router;