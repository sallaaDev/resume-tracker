'use strict'

const app = require('express')();

const mongoose = require('mongoose');
const keys = require('./config/devKeys');

mongoose.connect(keys.mongoKeay,function(error){
	
	console.log(mongoose.connection.readyState);

});

app.get('/', (req, res) => {
    res.send('resume stuff');
});


app.listen('5000', () => {
    console.log('The server is running on localhost:5000');
});
