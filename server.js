var express = require('express')
var app = express();
var mongoose = require('mongoose')
var passport = require ('passport')
var Localstrategy = require('passport-local').Strategy
var path = require ('path')
var session = require('express-session')
var bodyparser = require('body-parser')
var port = process.env.PORT || 3000
var config = require('./config/database')
var bcrypt = require('bcrypt')
var User = require('./models/user')

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use (express.static(path.join(__dirname,'./client/dist/')));

// require('./config/passport')(passport)
// require('./routes/routes')(app, passport)
mongoose.connect(config.db,{
  useMongoClient: true
})

app.use(session({
  secret:"keyboard cat",
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge:6000}
}))

// app.use(session({
//     secret: 'keyboard cat',
//     resave: true,
//     saveUninitialized: true,
//     cookie: { secure: true }
//   }))

app.use(passport.initialize());
app.use(session());
app.use(passport.session());
app.use(require('./routes/routes'))

passport.use(new Localstrategy ((email, pass, cb)=>{
  var hashedPass = bcrypt.hashSync(pass,10)
  User.findOne({
   email: email
  }).then(function(user, err){
    if (err) { return cb(err); }
    if (!user) { 
    return cb(null, false); }
    if (!bcrypt.compareSync(pass, user.password)){ 
      return cb(null, false); }
    return cb(null, user);
  })
}))

passport.serializeUser((user, cb)=>{
  cb(null, user.id);
});

passport.deserializeUser((id, cb)=> {
  User.findById(id).then((user)=>{
    cb(null, user);
  });
});

app.post('/login', passport.authenticate('local', { 
  failureRedirect: '/',
  successRedirect: '/login',
}))

// build authentication

app.all("*", (req, res) => {
    res.sendFile(path.resolve('./client/dist/index.html'));
  });

app.listen(port, ()=> console.log('Listening on Port 3000!!'))