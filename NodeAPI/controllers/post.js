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

	post.save().then(result => {
		return res.status(200).json({
			post: result
		});
	});
};