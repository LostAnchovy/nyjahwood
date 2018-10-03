const User = require('../models/user');
var bcrypt = require ('bcrypt')
const jwt = require('jsonwebtoken');
var config = require('../config/database');
var passport = require('passport');
require('../config/passport.js')(passport)

exports.create = (req, res)=>{
    User.create({
        first_name:req.body.firstname,
        last_name:req.body.lastname,
        email:req.body.email,
        user_name:req.body.username,
        password: bcrypt.hashSync(req.body.password, 10)
        // password: req.body.password
    }).then((user)=>{
        // res.redirect('/')
        res.json(user)
    }).catch(err=>{
        res.send('new user not entered into DB')
    })
  }
  // creates User into DB

exports.findAll = (req,res)=>{
    User.find()
    .then((users)=>{
        res.json(users)
    }).catch((err)=>{
        res.send(500).send({error:'could not retrieve user'})
    })
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
                console.log(req.body.password)
                if(result){
                    var token = jwt.sign(user.toJSON(), config.secret);
                    console.log(token)
                    res.json({success:true, token: 'JWT' + token})
                }else{
                    res.status(401).send({sucess:false, msg: 'Authentication failed. Wrong password'})
                }
            })
    })
}


exports.delete = (req, res)=>{
    User.remove({_id: req.params.userId}).then(()=>{
        res.status(204).end()
    }).catch((err)=>{
        res.send('error could not remove user from DB')
    })
}


