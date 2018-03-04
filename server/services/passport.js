const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys'); 
const Gmail = require('node-gmail-api');
const app = require('express')();
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
}); 

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const alreadyUser = await User.findOne({googleId: profile.id});
      require('./parser')(accessToken);

      // get email test
      if(alreadyUser) {
          return done(null, alreadyUser);
      } 

      const user = await new User({ 
        firstname: profile.name.givenname,
        lastname: profile.name.familyname, 
        email: profile.emails[0].value,
        googleId: profile.id 
      }).save();
	
      done(null, user);
    }
  )
);






