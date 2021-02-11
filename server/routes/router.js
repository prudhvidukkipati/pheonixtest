var express = require('express');
var router = express.Router();
var User = require('../controller/user.js');

router.post('/signin',User.signIn)

router.post('/signup',User.signUp)

module.exports = router;