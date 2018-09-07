var express = require('express')
var router = express.Router()
var bcrypt = require('bcrypt')
var passport = require('passport');
var User = require('../controllers/user.controllers')
var Product = require('../controllers/product.controllers')
var Blog = require('../controllers/blog.controllers')
var Events = require ('../controllers/events.controllers.js')


router.post('/api/newuser', User.create);
router.get('/api/users/all', User.findAll);
router.delete('/api/user/:userId', User.delete);

router.post('/api/newproduct', Product.create);
router.get('/api/products/all', Product.findAll);
router.delete('/api/product/:productId', Product.delete);

// creat routes to make api for blog
router.post('/api/newblog', Blog.create)
router.get('/api/blogs/all', Blog.findAll)
router.delete('/api/blog/:blogId', Blog.delete)
router.put('/api/blog/:blogId', Blog.update)

router.post('/api/newevent', Events.create)
router.get('/api/events/all', Events.findAll)
router.delete('/api/events/:eventsId', Events.delete)
// router.put('/api/events/:eventsId', Events.update)


router.post('/login', passport.authenticate('local', { 
    failureRedirect: '/admin',
    successRedirect: '/admin/dashboard',
  }))


module.exports = router