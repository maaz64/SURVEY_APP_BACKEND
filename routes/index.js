const express = require('express');
const { signUp, signIn } = require('../controller/adminController');
const router =  express.Router();


router.use('/survey',require('./survey'));
router.post('/sign-up',signUp);
router.post('/sign-in',signIn);


module.exports = router;