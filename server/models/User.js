// get mongoose
const mongoose = require('mongoose');

// Create schema 
let User = mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String,
	lastActive: Date,
	AccountCreated: Date,
});

//export user schema
module.exports = User;

