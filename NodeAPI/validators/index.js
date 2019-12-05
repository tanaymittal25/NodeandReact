exports.createPostValidator = (req, res, next) => {
	//title
	req.check('title', 'Enter a title').notEmpty();
	req.check('title', 'Title Length should be between 4-150').isLength({
		min: 4,
		max: 150
	});

	//body
	req.check('body', 'Enter a body').notEmpty();
	req.check('body', 'Body Length should be between 4-150').isLength({
		min: 4,
		max: 2000
	});

	//Print Errors 
	const errors = req.validationErrors();

	if (errors) {
		const firstError = errors.map(error => error.msg)[0];
		return res.status(400).json({
			error: firstError
		});
	}

	next();
};