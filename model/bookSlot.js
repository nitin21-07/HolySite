const mongoose = require('mongoose')

const bookSlotSchema = new mongoose.Schema({
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
    date : {
        type : String,
        required : "Required"
    },
    time : {
        type : String,
        required : "Required"
    },
    noOfPeople : {
        type: Number
    },
    message : {
        type: String
    }
}, {timestamps : true});

const BookSlot = mongoose.model('BookSlot', bookSlotSchema)
module.exports = BookSlot
