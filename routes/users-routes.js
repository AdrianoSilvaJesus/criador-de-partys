const express = require('express');
const { check } = require('express-validator');

const router = express.Router();

const usersControllers = require('../controllers/users-controllers');

router.post('/signup',
	[
		check('name').not().isEmpty(),
		check('email').isEmail(),
		check('password').isLength({ min: 8 })
	],
	usersControllers.signup
);

router.post('/signin',[
		check('email').isEmail(),
		check('password').isLength({ min: 8 })
	],
	usersControllers.signin)
;

module.exports = router;