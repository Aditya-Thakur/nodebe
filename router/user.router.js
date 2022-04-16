const express = require('express');
const { insertUser, loginUser, getAllUsers, checkUser } = require('../controller/user.controller');
//const { getAllCoachingCenter, checkCoachingCenter } = require('../controller/coachingCenter.controller');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('User route is working.')
});

router.post('/register', (req, res) => {
    console.log('Trying to register a new user ');
    checkUser(req, res);
});

router.post('/login', (req, res) => {
    console.log('Trying to login a user');
    loginUser(req, res);
});


router.get('/getAllUsers', (req, res) => {
    getAllUsers(req, res);
});


// router.post('/registerCoachingCenter', (req, res) => {
//     console.log('Trying to register a new Coaching Center ');
//     checkCoachingCenter(req, res);
// });

// router.get('/getAllCoachingCenter', (req, res) => {
//     getAllCoachingCenter(req, res);
// });

// 101504013627

module.exports = router;