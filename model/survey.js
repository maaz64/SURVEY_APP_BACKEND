const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true
    },
    phone_number:{
        type:String,
        required:true
    },
    nationality:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }

},
    {
        timestamps:true
    }
)
const Survey = mongoose.model('Survey',surveySchema);
module.exports = Survey;