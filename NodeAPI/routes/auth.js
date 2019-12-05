const express = require('express');
const { signUp } = require('../controllers/auth');
const validation = require('../validators/index');

const router = express.Router();

router.post("/signup", validation.userSignupValidator, signUp);

module.exports = router;