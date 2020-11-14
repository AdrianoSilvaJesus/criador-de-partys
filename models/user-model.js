const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required : true, minLength: 8 },
})


userSchema.plugin(uniqueValidator);

userSchema.methods.checkExistingUser = (callback) => {
	return mongoose.model('User').findOne({ email: this.email }, callback);
}

module.exports = mongoose.model('User', userSchema);