const mongoose = require('mongoose')

const registerSchema = new mongoose.Schema({
    name : {
        type : String,
        required : "Required"
    },
    email : {
        type : String,
        required : "Required"
    },
    phone : {
        type : Number,
        required : "Required"
    },
    subject : {
        type: String
    },
    message : {
        type: String
    }
}, {timestamps : true});

const Registration = mongoose.model('Registration', registerSchema)
module.exports = Registration