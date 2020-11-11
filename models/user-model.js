const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.schema;

const userSchema = new Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required : true, minLength: 8 },
})


userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);