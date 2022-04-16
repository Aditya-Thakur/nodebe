const mongoose = require('mongoose');
var userScema = new mongoose.Schema({
    courseName: {
        type: String
    },
    courseDescription: {
        type: String
    },
    courseTiming: {
        type: String
    },
    couseDuration: {
        type: String
    },
    courseTeacher: {
        type: String
    }

})

mongoose.model('Courses', CoursesScema)