const express = require('express');
const { getAllCoachingCenter, checkCoachingCenter } = require('../controller/coachingCenter.controller');
const router = express.Router();

router.post('/registerCoachingCenter', (req, res) => {
    console.log('Trying to register a new Coaching Center ');
    checkCoachingCenter(req, res);
});

router.get('/getAllCoachingCenter', (req, res) => {
    getAllCoachingCenter(req, res);
});

module.exports = router;