const app = require('express')();
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

require('./routes/auth')(app);


mongoose.connect(keys.mongoURI,function(error){
	
	console.log(mongoose.connection.readyState);

});

app.listen('5000', () => {
    console.log('The server is running on localhost:5000');
});
