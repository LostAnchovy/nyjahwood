var User = require('../models/user');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var decoded = require('jwt-decode');
var crypto = require('crypto');
var async = require('async');
var nodemailer = require('nodemailer')
var Product = require ('../models/products')

require('../config/passport')(passport)

exports.create = (req, res) => {
    User.create({
        first_name: req.body.firstname,
        last_name: req.body.lastname,
        email: req.body.email,
        user_name: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10)
    }).then((user) => {
        var token = jwt.sign({ _id: user._id, firstName: user.first_name, isAdmin: user.isAdmin }, process.env.SECRET, { expiresIn: '1d' });
        res.json({ success: true, token: token, user: user })
    }).catch(err => {
        res.status(501).send({ success: false, msg: 'Please try another Email or Username' })
    })
}
// creates User into DB

exports.addProduct = (req, res)=>{
    var token = req.body.token || req.query.token || getToken(req.headers)
    var dtoken = decoded(token)
    var id = {_id: dtoken._id}
    User.findByIdAndUpdate(id, {$push: {products: req.params.productId}}, { new: true }).then(user=>{
        res.json(user)
    })
    
}

exports.removeProduct = (req, res)=>{
    var token = req.body.token || req.query.token || getToken(req.headers)
    var dtoken = decoded(token)
    console.log(dtoken._id)
    var id = {_id: dtoken._id}
    User.findByIdAndUpdate(id, {$pop: {products: req.params.productId}}, { new: true }).then(user=>{
        res.json(user)
    })
    
}

exports.findOne = (req, res) =>{
    var token = getToken(req.headers)
    var dtoken = decoded(token)
    var id = {_id: dtoken._id}
    User.findOne(id).populate('products').exec((err, user)=>{
        if (err) throw err
        res.json(user)
    })
}

exports.findAll = (req, res) => {
    var token = req.body.token || req.query.token || getToken(req.headers)
    console.log('parced authorization token:', token)
    console.log('req.header:', req.headers)
    jwt.verify(token, process.env.SECRET, (err, user) => {
        console.log(user)
        if (err) {
            res.status(401).send({ success: false, msg: 'Please provide a valid token' })
        } else if (user.isAdmin == false || user.isAdmin == null) {
            res.status(401).send({ success: false, msg: 'Unauthorized' })
        } else {
            User.find()
                .then((users) => {
                    res.json(users)
                }).catch((err) => {
                    res.status(404).send({ error: 'could not retrieve user' })
                })
        }
    })
}

exports.count = (req, res) => {
    User.count()
        .then((users) => {
            res.json(users)
        }).catch((err) => {
            res.status(404).send({ error: 'could not retrieve user count' })
        })
}


exports.reset = (req, res, next) => {
    async.waterfall([
        (done) => {
            crypto.randomBytes(20, function (err, buf) {
                var token = buf.toString('hex');
                console.log(token)
                done(err, token);
            });
        },
        (token, done) => {
            User.findOne({ email: req.body.email }, (err, user) => {
                if (err) throw err
                if (!user) {
                    res.status(501).send({ success: false, msg: 'Email not found. Please enter a valid email.'})
                }
            }).then((user) => {
                user.resetPasswordToken = token;
                user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
                user.save((err) => {
                    done(err, token, user);
                    res.json(user)
                });
            })
        },
        function (token, user, done) {
            var smtpTransport = nodemailer.createTransport({
                service: 'SendGrid',
                auth: {
                    user: process.env.USER_NAME,
                    pass: process.env.CREDENTIALS
                }
            });

            var mailOptions = {
                to: user.email,
                from: 'passwordreset@nyjahwood.com',
                subject: 'Nyjahwood Password Reset',
                text: user.first_name +' , '+ 
                    'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                    'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                    'http://' + req.headers.host + '/reset/' + token + '\n\n' +
                    'If you did not request this, please ignore this email and your password will remain unchanged.\n',
            };
            smtpTransport.sendMail(mailOptions, function (err) {
                done(err, 'done');
            });
        }
    ], function (err) {
        if (err) return next(err);
        res.redirect('/reset-password');
    });
};

exports.resetconfirm = (req, res) =>{
    getAuthToken = function() {
        if(req.headers.referer){
            var parted =req.headers.referer.split('/')
            return parted [4]
        }else{
            return null 
        }
    }
    var token = getAuthToken(req.headers.referer)

    // pulls the token from the req.headers.referer. Split it at / and return the part [4] which is the token
   
    async.waterfall([
        function(done) {
          User.findOne({ resetPasswordToken: token},(err, user)=> {
            if (err) throw err
            if (!user) {
                res.status(501).send({ success: false, msg: 'Password reset token is invalid or has expired.' })
            }
            console.log(user)
            user.password = bcrypt.hashSync(req.body.password, 10)
            console.log("req.body.password:",req.body.password)
            console.log("Encrypted user passsword:",user.password)
            // user.password = req.body.password;
            user.resetPasswordToken = undefined;
            user.resetPasswordExpires = undefined;
            user.save(err=>{
                if(err) throw err
                done(err, user)
            })
          }).then(user=>{
              res.json(user)
          });
        },
        function(user, done) {
          var smtpTransport = nodemailer.createTransport({
            service: 'SendGrid',
            auth: {
              user: process.env.USER_NAME,
              pass: process.env.CREDENTIALS
            }
          });
          var mailOptions = {
            to: user.email,
            from: 'passwordreset@nyjahwood',
            subject: 'Your password has been changed',
            text: 'Hello,\n\n' +  
              'This is a confirmation that the password for your account ' + user.email + ' has just been changed at nyjahwood.com. Please contact our support staff if is any issue. Thank you. \n'
          };
          smtpTransport.sendMail(mailOptions,(err)=>{
            // req.flash('success', 'Success! Your password has been changed.');
            done(err);
          });
        }
      ], function(err) {
         if(err) throw err
      });
}

exports.reset_password = (req, res) => {
    console.log(req.params)
    User.findOne({
        resetPasswordToken: req.params.token,
        // resetPasswordExpires: { $gt: Date.now()}
    }, (err, user) => {
        if (err) throw err
        if (!user || user.resetPasswordExpires < Date.now()) {
            res.status(401).send({ success: false, msg: 'Password reset token is invalid or has expired please try again' })
        }
    }).then(user => {
        res.json(user)
    })
}

exports.signin = (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.status(401).send({ login: false, msg: 'please enter a email and password' })
    }
    User.findOne({
        email: req.body.email
    }, (err, user) => {
        if (err) throw err
        if (!user) {
            res.status(403).send({ success: false, msg: 'Authentication failed. User not found.' })
        }
    }).then((user) => {
        let hash = user.password
        console.log(hash)
        //need to put in a check if user email is not found in the DB
        //error fix: npm rebuild bcrypt --build-from-source
        bcrypt.compare(req.body.password, hash, (err, result) => {
            console.log('forms password:', req.body.password)
            if (result) {
                var token = jwt.sign({ _id: user._id, firstName: user.first_name, isAdmin: user.isAdmin }, process.env.SECRET, { expiresIn: '1d' });
                res.json({ success: true, token: token, user: user })
            } else {
                res.status(403).send({ sucess: false, msg: 'Authentication failed. Wrong password' })
            }
        })
    })
}

exports.update = (req, res) => {
    var id = { _id: req.params.userId }
    User.findByIdAndUpdate(id, req.body, { new: true })
        .then((updatedUser) => {
            res.json(updatedUser)
        }).catch((err) => {
            res.status(404).send({ success: false, msg: 'can not update user' })
        })
};


exports.delete = (req, res) => {
    var id = req.params.userId
    User.remove({ _id: req.params.userId }).then(() => {
        res.status(200).send({ success: true, msg: `user id:${id} was successfully deleted` })
    }).catch((err) => {
        res.status(401).send({ success: false, msg: 'error could not remove user from DB' })
    })
}

exports.itemcount = (req, res) =>{
    var token = getToken(req.headers)
    var dtoken = decoded(token)
    var id = {_id: dtoken._id}
    User.findOne(id).then(itemcount=>{
        res.json(itemcount.products.length)
    }).catch((err)=>{
        res.status(401).send({ success: false, msg: 'error find count of products in cart' })
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


