const mongoose = require('mongoose');
const coachingCenter = mongoose.model('CoachingCenter');


exports.checkCoachingCenter = function(req, res) {
    coachingCenter.findOne({ email: req.body.email }, function(err, docs) {
        console.log('hi');

        console.log(req.body.email + req);
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
    var newCoachingCenter = new CoachingCenter();
    newCoachingCenter.fullName = req.bdody.fullName;
    newCoachingCenter.email = req.body.email;
    newCoachingCenter.registrationNo = req.body.registrationNo;
    newCoachingCenter.registrationDate = req.body.registrationDate;
    newCoachingCenter.couchingType = req.body.couchingType;
    newCoachingCenter.address[0] = req.body.address;
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