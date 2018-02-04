// get mongoose
const mongoose = require('mongoose');

// Create schema 
let User = mongoose.Schema({
	name: {
	
	firstName: String,
	lastName: String
	
	},

	ApplicationCount: Number,
	AccountCreated: Date,
		
});

//export user schema
module.exports = User;

