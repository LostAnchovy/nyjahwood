var express = require('express')
var router = express.Router()
var bcrypt = require('bcrypt')
var passport = require('passport');
var User = require('../controllers/user.controllers')
var Product = require('../controllers/product.controllers')
var Blog = require('../controllers/blog.controllers')
var Events = require ('../controllers/events.controllers.js')
var passportlocal = require('passport-local')

//create routes for api for users
router.post('/api/newuser', User.create);
router.get('/api/users/count', User.count);
router.get('/api/users/all', User.findAll);
router.delete('/api/user/:userId', User.delete);

// create routes for api for products
router.post('/api/newproduct', Product.create);
router.get('/api/products/all', Product.findAll);
router.get('/api/products/count', Product.count);
router.delete('/api/product/:productId', Product.delete);

// creat routes to make api for blog
router.post('/api/newblog', Blog.create)
router.get('/api/blogs/count', Blog.count);
router.get('/api/blogs/all', Blog.findAll)
router.delete('/api/blog/:blogId', Blog.delete)
router.put('/api/blog/:blogId', Blog.update)

// create routes for make api events
router.post('/api/newevent', Events.create)
router.get('/api/events/count', Events.count)
router.get('/api/events/all', Events.findAll)
router.delete('/api/events/:eventsId', Events.delete)
// router.put('/api/events/:eventsId', Events.update)

// router.post('/login', passport.authenticate('local', { 
//   failureRedirect: '/',
//   successRedirect: '/login',
// }))

module.exports = router