const express = require('express');
const { signUp, signIn, signOut } = require('../controllers/auth');
const { userById } = require('../controllers/user');
const validation = require('../validators/index');

const router = express.Router();

router.post("/signup", validation.userSignupValidator, signUp);
router.post("/signin", signIn);
router.get("/signout", signOut);

router.param("userId", userById);

module.exports = router;