const express= require('express');
const authmiddleware=require('../middlewares/authmiddlewares');
const router=express.Router();
const {userRegister,loginUser}= require('../controllers/authControllers');
router.post('/register', userRegister);
router.post('/login',loginUser);
router.get('/test-auth',authmiddleware=(req,res)=>{
    res.status(200).json({
        message:"token valid xa",
        userdata:req.user
    })
})
module.exports = router;