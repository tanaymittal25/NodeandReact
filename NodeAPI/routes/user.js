const express = require('express');
const { userById, allUsers, getUser, updateUser,deleteUser } = require('../controllers/user.js');
const { requireSignIn } = require("../controllers/auth");

router = express.Router();

router.get("/users", allUsers);
router.get("/user/:userId", requireSignIn, getUser);
router.put("/user/:userId", requireSignIn, updateUser);
router.delete("/user/:userId", requireSignIn, deleteUser);

router.param("userId", userById);

module.exports = router;