const mongoose = require('mongoose');

var userScema = new mongoose.Schema({
    fullName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    mobileNo: {
        type: [String]
    },
    gender: {
        type: String
    },
    role: {
        type: String
    },
    dob: {
        type: Date
    },
    address: {
        type: [String]
    },
    aadharNo: {
        type: String
    },
    image: {
        type: String
    },
    metaData: {
        type: {
            signUpMethod: {
                type: [String]
            },
            lastLoggedIn: {
                type: Date
            },
            ipAddress: {
                type: String
            }
        }
    }
})

mongoose.model('User', userScema)