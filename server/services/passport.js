const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

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
      console.log(profile);
      if(alreadyUser) {
        return done(null, alreadyUser);
      }

      const user = await new User({ 
        firstName: profile.name.givenName,
        lastName: profile.name.familyName, 
        email: profile.emails[0].value,
        googleId: profile.id 
      }).save();

      done(null, user);
    }
  )
);