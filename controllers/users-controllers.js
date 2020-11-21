const bcrypt = require('bcrypt');
const jsonWebToken = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const User = require('../models/user-model');
const HttpError = require('../models/http-error');

const signup = async(request, response, next) => {
	const errors = validationResult(request);

	if(!errors.isEmpty()){
		const error = new HttpError(
			'Entrada inválida, por favor verifique suas informações.',
			422
		);
		return next(error);
	}

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
		hashedPassword = await bcrypt.hash(password, 12);
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
		token = jsonWebToken.sign({ userId: createdUser.id, email: createdUser.email }, `${process.env.JWT_KEY}`, { expiresIn: "1h" });
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

const login = async(request, response, next) => {
	const errors = validationResult(request);

	if(!errors.isEmpty()){
		const error = new HttpError(
			'Entrada inválida, por favor verifique suas informações.',
			422
		);
		return next(error);
	}

	const { email, password } = request.body;
	
	let existingUser;
	try{
		existingUser = await User.findOne({ email: email });
	}catch(err){
		const error = new HttpError(
			'Falha ao iniciar a sessão, por favor tente novamente mais tarde.',
			500
		);
		return next(error);
	}

	if(!existingUser){
		const error = new HttpError(
			'Credenciais inválidas, verifique seu e-mail ou senha e tente novamente.',
			401
		);
		return next(error);
	}

	let isValidPassword;
	try{
		isValidPassword = await bcrypt.compare(password, existingUser.password);
	}catch(err){
		const error = new HttpError(
			'Falha ao iniciar a sessão, por favor tente novamente mais tarde.',
			500
		);
		return next(erro);
	}

	if(!isValidPassword){
		const error = new HttpError(
			'Credenciais inválidas, verifique seu e-mail ou senha e tente novamente.',
			403
		);
		return next(error);
	}

	let token;
	try{
		token = jsonWebToken.sign({ id: existingUser.id, email: existingUser.email }, `${process.env.JWT_KEY}`, { expiresIn:'1h' });
	}catch(err){
		const error = new HttpError(
			'Credenciais inválidas, verifique seu e-mail ou senha e tente novamente.',
			401
		);
		return next(erro);
	}

	response.json({ id:existingUser.id, email: existingUser.email, token: token });
}

exports.signup = signup;
exports.login = login;