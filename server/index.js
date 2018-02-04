const app = require('express')();
<<<<<<< HEAD
const mongooes = require('mongoose');
const keys = require('./config/devKey.js');

mongooes.connect(keys.mongoKey);

=======
>>>>>>> f4ecd28cb49636b021a52ad2fecf99abb8a991c5
app.get('/', (req, res) => {
    res.send('resume stuff');
});


app.listen('5000', () => {
    console.log('The server is running on localhost:5000');
});
