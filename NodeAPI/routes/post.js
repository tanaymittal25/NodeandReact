const express = require('express');
const { getPost, createPost, getPostByUser, postById, isPoster, updatePost, deletePost } = require("../controllers/post");
const { requireSignIn } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const { createPostValidator } = require("../validators/index");

const router = express.Router();

router.get("/posts", getPost);
router.post("/post/new/:userId", requireSignIn, createPost, createPostValidator);
router.get("/posts/by/:userId", requireSignIn, getPostByUser);
router.put("/post/:postId", requireSignIn, isPoster, updatePost);
router.delete("/post/:postId", requireSignIn, isPoster, deletePost);

router.param("userId", userById);
router.param("postId", postById);

module.exports = router;