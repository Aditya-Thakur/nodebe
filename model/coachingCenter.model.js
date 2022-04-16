const mongoose = require('mongoose');

var coachingCenterScema = new mongoose.Schema({
    fullName: {
        type: String
    },
    email: {
        type: String
    },
    registrationNo: {
        type: String
    },
    registrationDate: {
        type: Date
    },
    coachingType: {
        type: String
    },
    address: {
        type: [String]
    },
    manager: {
        type: String
    }
})

mongoose.model('CoachingCenter', coachingCenterScema)