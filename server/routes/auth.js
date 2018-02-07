const passport = require('passport');

module.exports = app => {
    app.get('/', (req, res) => {
        res.send('resume stuff');
    });

    app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));
  
  app.get('/auth/google/callback', 
    passport.authenticate('google'),
    function(req, res) {
      //If the oauth goes through Successful redirect root.
      res.redirect('/');
    }); 

    

    
}