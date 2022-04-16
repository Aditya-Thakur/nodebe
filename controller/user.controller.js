const mongoose = require('mongoose');
const user = mongoose.model('User');
const bcrypt = require('../utils/secure');
const { signIn, welcome, refresh } = require("./handeler");
const coachingCenter = mongoose.model('CoachingCenter');

insertUser = function(req, res) {
    var newUser = new user();
    var metaData = {
        signUpMethod: req.body.metaData.signUpMethod
    }
    newUser.metaData = metaData;
    newUser.fullName = req.body.fullName;
    newUser.email = req.body.email;
    bcrypt.cryptPassword(req.body.password, (err, hash) => {
        if (!err) {
            newUser.password = hash;
            newUser.save((err, doc) => {
                if (!err) {
                    const response = {
                        status: 100,
                        message: 'Registered successfully'
                    };
                    res.json(response);
                } else {
                    console.log('Error during adding user : ' + err);
                }
            })
        } else {
            console.log(err);
        }
    })
}

//loginUser
exports.loginUser = function(req, res) {
    user.findOne({ email: req.body.email }, function(err, docs) {
        if (!err) {
            bcrypt.comparePassword(req.body.password, docs.password, function(err, cmp) {
                if (!err) {
                    if (cmp) {
                        signIn(req, res).then(
                            (token) => {
                                // console.log(res);
                                res.json({
                                    token,
                                    user: docs
                                });
                            }
                        )
                    } else {
                        const response = {
                            status: 105,
                            message: 'Incorrect Password'
                        };
                        res.json(response);
                    }
                } else {
                    console.log(err);
                    const response = {
                        status: 106,
                        message: 'Internal error occured'
                    };
                    res.json(response);
                }
            })
        } else {
            console.log(err);
            const response = {
                status: 102,
                message: 'Wrong User Id'
            };
            res.json(response);
        }
    })
}

exports.getAllUsers = function(req, res) {
    user.find({}, function(err, docs) {
        if (!err) {
            res.json(docs);
        } else {
            console.log(err);
            const response = {
                status: 102,
                message: 'Error in finding Users'
            };
            res.json(response);
        }
    });
}

exports.checkUser = function(req, res) {
    user.findOne({ email: req.body.email }, function(err, docs) {
        if (!err) {
            if (docs) {
                var response = {
                    message: "Email already exists"
                }
                res.json(response);
            } else {
                insertUser(req, res);
            }
        } else {
            console.log('Error in checking email: ' + err);
        }
    });
}

exports.checkCoachingCenter = function(req, res) {
    coachingCenter.findOne({ email: req.body.email }, function(err, docs) {
        if (!err) {
            if (docs) {
                var response = {
                    message: "Email already exists of Coaching Center"
                }
                res.json(response);
            } else {
                insertNewCoachingCenter(req, res);
            }
        } else {
            console.log('Error in checking Coaching Center email: ' + err);
        }
    });
}

insertNewCoachingCenter = function(req, res) {
        var newCoachingCenter = new coachingCenter();
        newCoachingCenter.fullName = req.body.fullName;
        newCoachingCenter.email = req.body.email;
        newCoachingCenter.registrationNo = req.body.registrationNo;
        newCoachingCenter.registrationDate = req.body.registrationDate;
        newCoachingCenter.couchingType = req.body.couchingType;
        newCoachingCenter.address[''] = req.body.address;
        newCoachingCenter.manager = req.body.manager;

        newCoachingCenter.save((err, doc) => {
            if (!err) {
                const response = {
                    status: 100,
                    message: 'Coaching Center Registered successfully'
                };
                res.json(response);
            } else {
                console.log('Error during adding user : ' + err);
            }
        })
    }
    //getAllCoachingCenter
exports.getAllCoachingCenter = function(req, res) {
    user.find({}, function(err, docs) {
        if (!err) {
            res.json(docs);
        } else {
            console.log(err);
            const response = {
                status: 102,
                message: 'Error in finding Coaching Center'
            };
            res.json(response);
        }
    });
}