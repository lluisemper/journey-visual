const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
require('dotenv').config({ path: __dirname + '/.env' })
const userSchema = require('./models/model-user');


passport.serializeUser(function (user, cb) {  
  console.log('user', user);
  
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  console.log("deserialize", obj);

  cb(null, obj);
});

passport.use(new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: process.env.URL + "/auth/google/callback"
},

  function (accessToken, refreshToken, profile, cb) { 
    console.log('profile',profile);
    console.log('cb',cb);
       
    userSchema.findOne({id: profile.id}, function (err, user) {
      if (err) {
        return cb(err);
      }
      if(!user) {
        user = new userSchema({id: profile.id,  displayName: profile.displayName});
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