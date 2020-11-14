const bcrypt = require('bcrypt');
const jsonWebToken = require('jsonwebtoken');

const User = require('../models/user-model');
const HttpError = require('../models/http-error');

const signup = async(request, response, next) => {
	const { name, email, password } = request.body;

	let existingUser;
	try{
		existingUser = await User.findOne({ email: email });
	}catch(err){
		const error = new HttpError(
			'Falha no cadastramento, tente novamente mais tarde...',
			500
		);
		return next(error);
	}

	if(existingUser){
		const error = new HttpError(
			'Usuario já esta cadastrado, tente logar na sua sessão',
			422
		);
		return next(error);
	}

	let hashedPassword;
	try{
		hashedPassword = await bcrypt.hash(password, 15);
	}catch(err){
		const error = new HttpError(
			'Falha no cadastramento, tente novamente mais tarde...',
			500
		);
		return next(error);
	}

	const createdUser = new User({
		name,
		email,
		password : hashedPassword
	});

	let token;
	try{
		token = jsonWebToken.sign({ userId: createdUser, email: email }, `${process.env.JWT_KEY}`, { expiresIn: "1h" });
	}catch(err){
		console.log(err);
		const error = new HttpError(
			'Falha no cadastramento, tente novamente mais tarde...',
			500
		);
		return next(error);
	}

	try{
		createdUser.save();
	}catch(err){
		const error = new HttpError(
			'Falha no cadastramento, tente novamente mais tarde...',
			500
		);
		return next(error);
	}

	response.status(201).json({ userId: createdUser.id, email: createdUser.email, token: token });
}

exports.signup = signup;