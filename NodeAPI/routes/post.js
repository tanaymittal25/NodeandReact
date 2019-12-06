const express = require('express');
const { getPost, createPost } = require("../controllers/post");
const { requireSignIn } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const validator = require("../validators/index");

const router = express.Router();

router.get("/", requireSignIn, getPost);
router.post("/post", validator.createPostValidator, createPost);

router.param("userId", userById);

module.exports = router;