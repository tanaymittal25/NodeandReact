const express = require('express');
const postController = require("../controllers/post");
const validator = require("../validators/index");

const router = express.Router();

router.get("/", postController.getPost);
router.post("/post", validator.createPostValidator, postController.createPost);

module.exports = router;