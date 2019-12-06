const express = require('express');
const { getPost, createPost } = require("../controllers/post");
const { requireSignIn } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const { createPostValidator } = require("../validators/index");

const router = express.Router();

router.get("/", getPost);
router.post("/post", requireSignIn, createPostValidator, createPost);

router.param("userId", userById);

module.exports = router;