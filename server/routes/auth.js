const passport = require('passport');

module.exports = app => {
    app.get('/', (req, res) => {
        res.send('resume stuff');
    });
	


app.get('/auth/google',passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email','https://www.googleapis.com/auth/gmail.modify'],accessType: 'offline', approvalPrompt: 'force' }));
      
  app.get('/auth/google/callback', 
    passport.authenticate('google'),
    function(req, res) {
      //If the oauth goes through Successful redirect root.
      res.redirect('/');
    }); 

    

    
}
