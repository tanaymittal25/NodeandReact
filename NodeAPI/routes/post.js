const express = require('express');
const { getPost, createPost, getPostByUser } = require("../controllers/post");
const { requireSignIn } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const { createPostValidator } = require("../validators/index");

const router = express.Router();

router.get("/", getPost);
router.post("/post/new/:userId", requireSignIn, createPost, createPostValidator);
router.get("/posts/by/:userId", requireSignIn, getPostByUser);

router.param("userId", userById);

module.exports = router;