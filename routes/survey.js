const express = require('express');
const {createSurvey, getAllSurveyData, getASurveyData} = require('../controller/surveyController');
const passport = require('passport');
const router =  express.Router();



router.post('/add-data',createSurvey);

router.get('/get-all-data',passport.authenticate('jwt',{session:false}),getAllSurveyData);
router.get('/get-data/:id',passport.authenticate('jwt',{session:false}),getASurveyData);



module.exports = router;