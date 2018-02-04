// Get mongoose
const mongoose = require('mongoose);
let Schema = mongoose.Schema;

// create schema

let application_schema = new Schema({
	
	Company:String,
	Position:String,
	Status: String,
	Submitted:String,
	Pending:Boolean,
}); 

let application_item = mongoose.model('application_item', application_schema);

module.exports = application_item;
