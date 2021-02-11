const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    
    email:{
        type:String,
        required:true,
        trim:true,
        min:3,
        
        unique:true,
        index:true,
        lowercase:true,
    },
    hash_password:{
        type:String,
        required:true,
        trim:true,
        min:6,
    },
    address:{
        type:String,
        required:false,
        default:null

    },
    address2:{
        type:String,
        required:false,
        default:null
    },
    city:{
        type:String,
        required:false,
        default:null
    },
    state:{
        type:String,
        required:false,
        default:null
    },
    zip:{
        type:String,
        required:false,
        default:null
    },
    


},{timestamps:true})

userSchema.virtual('password').set(function(password){
    this.hash_password= bcrypt.hashSync(password,8);
});

userSchema.methods={
    authenticate:function(password){
        return bcrypt.compareSync(password,this.hash_password)
    }
}


module.exports=mongoose.model('user',userSchema);