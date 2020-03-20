const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
require('dotenv').config({ path: __dirname + '/.env' })
const User = require('./models/model-user');


passport.serializeUser(function (user, cb) {    
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

passport.use(new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: process.env.URL + "/auth/google/callback"
},

  function (accessToken, refreshToken, profile, cb) {        
    User.findOne({id: profile.id}, function (err, user) {
      if (err) {
        return cb(err);
      }
      if(!user) {
        user = new User({id: profile.id,  name: profile.displayName, journeys: []});
        user.save((err) => {
          if (err) console.log(err);
          return cb(err ,user);
          
        });
      } else {
        return cb(err, user);
      }
    })
  }
));
module.exports = passport