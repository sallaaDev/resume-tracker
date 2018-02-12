const passport = require('passport');

module.exports = app => {
    app.get('/', (req, res) => {
        res.send('its me');
    });

    app.get('/api/user', (req, res) => {
        res.send(req.user);
    });

// add permissions for email reading and writing
    app.get('/auth/google', 
    passport.authenticate('google', { 
        scope: [
        'https://mail.google.com/' ,
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/gmail.modify']
        ,accessType: 'offline', approvalPrompt: 'force' 
    }));
      
  app.get('/auth/google/callback', 
    passport.authenticate('google'),
    function(req, res) {
     //If the oauth goes through Successful redirect root.
      res.redirect('/');
    }); 

    

    
}
