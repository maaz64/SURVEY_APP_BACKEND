const express = require('express');
const { signUp, signIn, refreshToken, logOut } = require('../controller/userController');
const {verifyAcessToken} = require('../middleware/userMiddleware');
const router =  express.Router();


router.use('/api/survey',require('./survey'));
router.post('/api/sign-up',signUp);
router.post('/api/sign-in',signIn);
router.post('/api/refresh-token', refreshToken);
router.post('/api/logout',verifyAcessToken, logOut)


module.exports = router;