const express = require('express');

const router = express.Router();

const usersControllers = require('../controllers/users-controllers');

router.post('/signup', usersControllers.signup);

module.exports = router;