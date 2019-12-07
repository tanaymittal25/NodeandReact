const express = require('express');
const { userById, allUsers, getUser } = require('../controllers/user.js');
const { requireSignIn } = require("../controllers/auth");

router = express.Router();

router.get("/users", allUsers);
router.get("/user/:userId", requireSignIn, getUser);

router.param("userId", userById);

module.exports = router;