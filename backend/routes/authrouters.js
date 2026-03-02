const express= require('express');
const router=express.Router();
const {userRegister}= require('../controllers/authControlers');
const {loginUser}=require('../controllers/authControlers')
router.post('/register', userRegister);
router.post('/login',loginUser);
module.exports = router;