const express = require('express');
const { getPost, createPost } = require("../controllers/post");
const { requireSignIn } = require("../controllers/auth");
const validator = require("../validators/index");

const router = express.Router();

router.get("/", requireSignIn, getPost);
router.post("/post", validator.createPostValidator, createPost);

module.exports = router;