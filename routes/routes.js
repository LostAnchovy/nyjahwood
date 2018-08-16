var express = require('express')
var router = express.Router()
var bcrypt = require('bcrypt')
var passport = require('passport');
var User = require('../controllers/user.controllers')
var Product = require('../controllers/product.controllers')


router.post('/api/register', User.create);
router.get('/api/users/all', User.findAll);

router.post('/api/newproduct', Product.create);
router.get('/api/products/all', Product.findAll);
router.delete('/api/product/:id', Product.delete);

router.post('/login', passport.authenticate('local', { 
    failureRedirect: '/admin',
    successRedirect: '/admin/dashboard',
  }))


module.exports = router