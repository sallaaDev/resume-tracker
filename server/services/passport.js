const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
//const keys = require('../config/keys');
const Google = require('googleapis');
const  Gmail = Google.gmail('v1');
const OAuth2 = Google.auth.OAuth2;

const User = mongoose.model('users');

let keys = {

    googleClientID:'640684890317-nkhoih5ul10v8er5408bfai5esqq0j59.apps.googleusercontent.com'
,
    googleClientSecret:'ewQCdLCb3I9axpzjHMbogdo6'

}

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
      
      // get email test

      console.log(accessToken + "   TOKEN   " + refreshToken);	

      const authClient = new OAuth2(keys.googleClientID, keys.googleClientSecret, "/");
      authClient.setCredentials({ access_token: accessToken, refresh_token: refreshToken });
      Gmail.users.messages.list({ userId: 'me', auth:authClient }, function err(err, response){
     // console.log("RESPONSE" + "   "  + response);
      });


      console.log(profile);

      if(alreadyUser) {
      const authclient = new OAuth2(keys.googleClientID,keys.googleClientSecret, "/");
      console.log(accessToken + "   TOKEN   " + refreshToken);	

      authclient.setCredentials({ access_token: accessToken, refresh_token: refreshToken });
      Gmail.users.messages.list({ userId:'me', auth: authclient, maxResults:10 }, function err(err, response){
        
        //First get list of iDs from messages.list (founde in response object)) Store all ids in idArray. 
        // Then we will use Gmail.messages.users.get to get a message with id.

    


      let idArray = new Array();
      let data = response.data.messages;
      for(let i = 0; i < data.length; i++){
          idArray.push(data[i].id);
      }
      // idArray contains all the ids of messages. We use the ids to look up messages.
        getMessage('me',idArray[4],authclient,function(response){
        console.log("Response was \n")
        console.log(response);

       });
    });

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


function getMessage(userid,messageid,authclient,callback){
  Gmail.users.messages.get({userId:userid,id:messageid,auth:authclient}, function result(err,response){
      if(response != null || response != undefined){
        callback(response);
      };

  });
}




