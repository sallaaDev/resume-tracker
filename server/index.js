const app = require('express')();
const mongooes = require('mongoose');
const keys = require('./config/devKey.js');

mongooes.connect(keys.mongoKey);

app.get('/', (req, res) => {
    res.send('resume stuff');
});


app.listen('5000', () => {
    console.log('The server is running on localhost:5000');
});