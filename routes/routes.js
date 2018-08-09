var express = require('express')
var router = express.Router()
var bcrypt = require('bcrypt')
var passport = require('passport');
var User = require('../models/user')
var Product = require('../models/products')

router.post('/api/register', (req, res)=>{
    User.create({
        first_name:req.body.firstname,
        last_name:req.body.lastname,
        email:req.body.email,
        user_name:req.body.username,
        password: bcrypt.hashSync(req.body.password, 10)
    }).then(()=>{
        res.redirect('/')
    }).catch(err=>{
        res.send('new user not entered into DB')
    })
  })

  router.post('/api/newproduct', (req,res)=>{
    Product.create({
        product_name:req.body.name,
        description:req.body.description,
        price: req.body.price
    }).then((newTable)=>{
        res.json(newTable)
    }).catch(err=>{
        res.send('product not entered into DB')
    })
})

router.post('/login', passport.authenticate('local', { 
    failureRedirect: '/admin',
    successRedirect: '/admin/dashboard',
  }))


module.exports = router