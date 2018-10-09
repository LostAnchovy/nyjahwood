const User = require('../models/user');
var bcrypt = require ('bcrypt')
const jwt = require('jsonwebtoken');
var config = require('../config/database');
var passport = require('passport');
var jwtDecoded = require('jwt-decode')
require('../config/passport')(passport)

exports.create = (req, res)=>{
    User.create({
        first_name:req.body.firstname,
        last_name:req.body.lastname,
        email:req.body.email,
        user_name:req.body.username,
        password: bcrypt.hashSync(req.body.password, 10)
        // password: req.body.password
    }).then((user)=>{
        var token = jwt.sign({_id: user._id, firstName: user.first_name, isAdmin: user.isAdmin}, config.secret, { expiresIn: '1d' });
        res.json({success:true, token: 'JWT' + token, user: user})
    }).catch(err=>{
        res.send('new user not entered into DB')
    })
  }
  // creates User into DB

// exports.findAll = (req,res)=>{
//     var token = getToken(req.headers);
//     if(token)
//     User.find()
//     .then((users)=>{
//         res.json(users)
//     }).catch((err)=>{
//         res.send(500).send({error:'could not retrieve user'})
//     })
// }

exports.findAll = (req, res)=>{
    var token = req.body.token || req.query.token || getToken(req.headers)
    console.log('parced authorization token',token)
    console.log('req.header:',req.headers)
    if(token){
        User.find()
        .then((users)=>{
            res.json(users)
        }).catch((err)=>{
            res.send(500).send({error:'could not retrieve user'})
        })
    }else{
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
}

exports.count = (req,res)=>{
    User.count()
    .then((users)=>{
        res.json(users)
    }).catch((err)=>{
        res.send(500).send({error:'could not retrieve users'})
    })
}

exports.signin =(req,res)=>{
    if(!req.body.email || !req.body.password){
        res.json({login:false, msg:'please enter a email and password'})
    }
    User.findOne({
        email: req.body.email
    }, (err, user)=>{
        if(err) throw err
        if(!user){
            res.status(401).send({success: false, msg: 'Authentication failed. User not found.'})
        }
    }).then((user)=>{
        let hash = user.password
        console.log(hash)
        //need to put in a check if user email is not found in the DB
        //error fix: npm rebuild bcrypt --build-from-source
            bcrypt.compare(req.body.password, hash,(err,result)=>{
                console.log('forms password:',req.body.password)
                if(result){
                    var token = jwt.sign({_id: user._id, firstName: user.first_name, isAdmin: user.isAdmin}, config.secret, { expiresIn: '1d' });
                    res.json({success:true, token: 'JWT' + token, user: user})
                }else{
                    res.status(401).send({sucess:false, msg: 'Authentication failed. Wrong password'})
                }
            })
    })
}

exports.update = (req, res) => {
    var id = {_id: req.params.userId}
	User.findByIdAndUpdate(id,req.body,{new:true}) 
	.then((updatedUser) => {
		res.json(updatedUser)
	}).catch((err)=>{
        res.send('error updating user')
    })
};


exports.delete = (req, res)=>{
    User.remove({_id: req.params.userId}).then(()=>{
        res.status(204).end()
    }).catch((err)=>{
        res.send('error could not remove user from DB')
    })
}

getToken = function (headers) {
    if (headers && headers.authorization) {
      var parted = headers.authorization.split(' ');
      if (parted.length === 2) {
        return parted[1];
      } else {
        return null;
      }
    } else {
      return null;
    }
  };

