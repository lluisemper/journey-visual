const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./router');
require('./database');
const cookieParser = require('cookie-parser');
const passport = require('passport');

const PORT = 4000;

const GoogleStrategy = require('passport-google-oauth20').Strategy;
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
  callbackURL: "/auth/google/callback"
},

  function (accessToken, refreshToken, profile, cb) { 
    console.log('profile',profile);
    console.log('cb',cb);
    console.log('userSchema.Model',userSchema.Model);
       
    userSchema.Model.findOne({id: profile.id}, function (err, user) {
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

app.use(passport.initialize());
app.use(passport.session());

require("./middlewares")(app, passport)

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());

app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});