var express = require('express')
var router = express.Router()
var User = require('../models/user')
var Product = require('../models/products')

router.post('/api/register', (req, res)=>{
    User.create({
        first_name:req.body.firstname,
        last_name:req.body.lastname,
        email:req.body.email,
        user_name:req.body.username,
        password:req.body.password
    }).then((newUser)=>{
        res.json(newUser)
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


module.exports = router