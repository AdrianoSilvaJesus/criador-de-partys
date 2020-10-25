const mongoose = require('mongoose');

const Schema = mongoose.schema;

const userSchema = new Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required : true, minLength: 8 },
	tickets: [ { type: mongoose.Types.ObjectId, required: true, ref: 'Ticket' } ]
})

module.exports = mongoose.model('User', userSchema);