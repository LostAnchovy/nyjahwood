var express = require('express')
   app = express();
   mongoose = require('mongoose')
   passport = require ('passport')
   path = require ('path')
   session = require('express-session')
   bodyparser = require('body-parser')
   port = process.env.PORT || 8080
  //  config = require('./config/database')
   require('dotenv').config()

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use (express.static(path.join(__dirname,'./client/dist/')));

// require('./config/passport')(passport)
// require('./routes/routes')(app, passport)
// mongoose.connect(config.db,{
//   useNewUrlParser: true
// })

mongoose.connect(process.env.CONFIG_DB,{
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

app.listen(port, ()=> console.log('Listening on Port 8080!!'))