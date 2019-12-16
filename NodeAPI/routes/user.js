const express = require('express');
const { userById, allUsers, getUser, updateUser } = require('../controllers/user.js');
const { requireSignIn } = require("../controllers/auth");

router = express.Router();

router.get("/users", allUsers);
router.get("/user/:userId", requireSignIn, getUser);
router.put("/user/:userId", requireSignIn, updateUser);

router.param("userId", userById);

module.exports = router;