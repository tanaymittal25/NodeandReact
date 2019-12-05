const Post = require('../models/post');

exports.getPost = ( req, res ) => {
    res.json({
        posts: [
            {title: "First Post"},
            {title: "Second Post"}
        ]
    });
};

exports.createPost = (req, res) => {
	const post = new Post(req.body);
	console.log(post);
};