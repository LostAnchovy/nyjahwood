var mongoose = require ('mongoose');
var Schema = mongoose.Schema
var bcrypt = require('bcrypt')

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

// userSchema.methods.comparePassword = function (passw, cb) {
//     bcrypt.compare(passw, this.password, function (err, isMatch) {
//         if (err) {
//             return cb(err);
//         }
//         cb(null, isMatch);
//     });
// };

var User = mongoose.model('User', userSchema)
module.exports = User;
