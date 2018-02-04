'use strict'

const app = require('express')();

const mongoose = require('mongoose');
const keys = require('./config/devKey.js');

mongoose.connect(keys.mongoKey);
let connectionStatus = mongoose.connection.readyState;
console.log(connectionStatus);

apptate would return 1 if already connected.get('/', (req, res) => {
    res.send('resume stuff');
});


app.listen('5000', () => {
    console.log('The server is running on localhost:5000');
});
