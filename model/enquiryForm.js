const mongoose = require('mongoose')

const enquiryFormSchema = new mongoose.Schema({
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
   category: {
       type : String,
       required : "Required"
   },
    message : {
        type: String
    }
}, {timestamps : true});

const enquiryForm = mongoose.model('enquiryForm', enquiryFormSchema)
module.exports = enquiryForm
