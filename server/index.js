const app = require('express')();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const keys = require('./config/keys');

require('./models/User');
require('./services/passport');
mongoose.connect(keys.mongoURI);

app.use(bodyParser.json()); 

app.use(passport.initialize());
app.use(passport.session());

require('./routes/auth')(app);

mongoose.connect(keys.mongoURI,function(error) {
	console.log(mongoose.connection.readyState);
});

app.listen('5000', () => {
    console.log('The server is running on localhost:5000');
});
