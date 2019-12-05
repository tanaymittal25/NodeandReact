const express = require('express');
const { signUp, signIn, signOut } = require('../controllers/auth');
const validation = require('../validators/index');

const router = express.Router();

router.post("/signup", validation.userSignupValidator, signUp);
router.post("/signin", signIn);
router.get("/signout", signOut);

module.exports = router;