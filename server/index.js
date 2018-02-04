const app = require('express')();
const 
app.get('/', (req, res) => {
    res.send('resume stuff');
});


app.listen('5000', () => {
    console.log('The server is running on localhost:5000');
});