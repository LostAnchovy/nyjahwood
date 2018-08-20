var express = require('express')
var router = express.Router()
var bcrypt = require('bcrypt')
var passport = require('passport');
var User = require('../controllers/user.controllers')
var Product = require('../controllers/product.controllers')
var Blog = require('../controllers/blog.controllers')


router.post('/api/register', User.create);
router.get('/api/users/all', User.findAll);

router.post('/api/newproduct', Product.create);
router.get('/api/products/all', Product.findAll);
router.delete('/api/product/:id', Product.delete);

// creat routes to make api for blog
router.post('/api/newblog', Blog.create)
router.get('/api/blogs/all', Blog.findAll)
router.delete('/api/blog/:blogId', Blog.delete)
router.put('/api/blog/:blogId', Blog.update)



router.post('/login', passport.authenticate('local', { 
    failureRedirect: '/admin',
    successRedirect: '/admin/dashboard',
  }))


module.exports = router