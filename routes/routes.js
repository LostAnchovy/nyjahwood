var express = require('express')
var router = express.Router()
var passport = require('passport');
var User = require('../controllers/user.controllers')
var Product = require('../controllers/product.controllers')
var Blog = require('../controllers/blog.controllers')
var Events = require ('../controllers/events.controllers.js')


//create routes for api for users
router.post('/api/newuser', User.create);
router.get('/api/users/count', User.count);
router.get('/api/users/all', User.findAll);
router.delete('/api/user/:userId', User.delete);
router.post('/signin', User.signin)
router.put('/api/user/:userId', User.update)

// create routes for api for products
router.post('/api/newproduct', Product.create);
router.get('/api/products/all', Product.findAll);
router.get('/api/product/:productId', Product.findOne);
router.get('/api/products/count', Product.count);
router.delete('/api/product/:productId', Product.delete);

// creat routes to make api for blog
router.post('/api/newblog', Blog.create)
router.get('/api/blogs/count', Blog.count);
router.get('/api/blogs/all', Blog.findAll)
router.get('/api/blog/:blogId', Blog.findOne)
router.delete('/api/blog/:blogId', Blog.delete)
router.put('/api/blog/:blogId', Blog.update)

// create routes for make api events
router.post('/api/newevent', Events.create)
router.get('/api/events/count', Events.count)
router.get('/api/events/all', Events.findAll)
router.get('/api/event/:eventId', Events.findOne)
router.delete('/api/events/:eventsId', Events.delete)
router.put('/api/events/:eventsId', Events.update)

module.exports = router