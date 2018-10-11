var express = require('express')
var app = express();
var mongoose = require('mongoose')
var passport = require ('passport')
var path = require ('path')
var session = require('express-session')
var bodyparser = require('body-parser')
var port = process.env.PORT || 3000
var config = require('./config/database')

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use (express.static(path.join(__dirname,'./client/dist/')));

// require('./config/passport')(passport)
// require('./routes/routes')(app, passport)
// mongoose.connect(config.db,{
//   useNewUrlParser: true
// })

mongoose.connect(config.db,{
  useNewUrlParser: true
}).then(res=>{
  console.log('Successfully connected to DB!')
}).catch(err=>{
  res.send(401).send({error:true, msg:'error connecting to DB'})
})

app.use(session({
  secret:"keyboard cat",
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge:6000}
}))

app.use(passport.initialize());
app.use(session());
app.use(passport.session());
app.use(require('./routes/routes'))


app.all("*", (req, res) => {
    res.sendFile(path.resolve('./client/dist/index.html'));
  });

app.listen(port, ()=> console.log('Listening on Port 3000!!'))