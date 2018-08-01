var express = require('express')
var app = express();
var mongoose = require('mongoose')
var passport = require ('passport')
var flash = require ('flash')
var session = require('express-session')
var bodyparser = require('body-parser')
var port = process.env.PORT || 3000
var config = require('./config/database')
var User = require('./models/user')
var Product = require('./models/products')

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use(express.static('./client/dist/'))

app.use(require('./routes/routes'))

// require('./config/passport')(passport)
// require('./routes/routes')(app, passport)
mongoose.connect(config.db,{
  useMongoClient: true
})

app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true }
  }))

app.use(session());
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// build admin side
// build database
// build authentication
// build configuration files
// build service.ts file

app.all("*", (req, res) => {
    res.sendFile(path.resolve('./client/dist/'));
  });

app.listen(port, ()=> console.log('Listening on Port 3000!!'))