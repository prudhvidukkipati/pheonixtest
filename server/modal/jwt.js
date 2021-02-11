const mongoose = require('mongoose');


const jwtSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true,
        min:3,
        index:true,
        lowercase:true,
    },
    jwtStr:{
        type:String,
        required:true,
        trim:true,
        min:6,
    },
},{timestamps:true})

module.exports=mongoose.model('jwt',jwtSchema);
