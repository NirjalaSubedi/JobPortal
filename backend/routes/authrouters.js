const express= require('express');
const router=express.Router;
const {registeruser}= require('../controllers/authControlers');
router.post('/register', registeruser);
module.exports = router;