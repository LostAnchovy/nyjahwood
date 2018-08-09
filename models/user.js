var mongoose = require ('mongoose');
var Schema = mongoose.Schema
var bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    first_name:{
        type: String,
    },
    last_name:{
        type: String,
    },
    email:{
        type: String,
        unique: true
    },
    user_name:{
        type: String,
    },
    password:{
        type: String,        
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }
},{timestamps: true });

var User = mongoose.model('User', userSchema)
module.exports = User;
