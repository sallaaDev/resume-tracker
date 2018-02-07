// get mongoose
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Create schema 
const User = mongoose.Schema({
		firstName: String,
		lastName: String,
		email: String,
		googleId: String,
		lastActive: Date,
});

//model user schema
mongoose.model('users', User);


