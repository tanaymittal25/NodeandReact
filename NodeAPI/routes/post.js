const express = require('express');
const { getPost, createPost } = require("../controllers/post");
const validator = require("../validators/index");

const router = express.Router();

router.get("/", getPost);
router.post("/post", validator.createPostValidator, createPost);

module.exports = router;