var passport = require('passport');
var JwtStrategy = require('passport-jwt').Strategy
var ExtractJwt = require('passport-jwt').ExtractJwt

var User = require('../models/user')
var config = require('../config/database') // get db config files

module.exports = function(passport) {
  var opts = {};
//   opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = config.secret;
  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.id}, function(err, user) {
        console.log(jwt_payload)
          if (err) {
              return done(err, false);
          }
          if (user) {
              done(null, user);
          } else {
              done(null, false);
          }
      });
  }));
};

passport.serializeUser((user, cb) => {
	cb(null, user.id);
});

passport.deserializeUser((id, cb) => {
	models.user.findOne(id, (err, user) => {
		cb(err, user);
	});
});

// module.exports = function(passport){
//     let opts = {};
//     opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
//     opts.secretOrKey = config.secret;
//     passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
//       User.findOne({id: jwt_payload.id}, (err, User) => {
//         if(err){
//           return done(err, false);
//         }
//         if(User){
//           return done(null, User);
//         } else {
//           return done(null, false);
//         }
//       });
//     }));
//   }
