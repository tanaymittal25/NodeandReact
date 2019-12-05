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

exports.userSignupValidator = (req, res, next) => {
	//name
	req.check('name', 'Name is Required').notEmpty();

	//email
	req.check('email', 'Email is Required').notEmpty();
	req.check('email', 'Email length should be between 4-32').isLength({
		min: 4,
		max: 32
	});
	req.check('email', 'Email not Valid').matches(/.+\@.+\..+/)
	
	//password
	req.check('password', 'Password Required').notEmpty();
	req.check('password', 'Password length should be between 8-32').isLength({
		min: 8,
		max: 32
	});
	req.check('password', 'Password should contain a number (0-9)').matches(/\d/);
	
	//errors
	const errors = req.validationErrors();

	if (errors) {
		const firstError = errors.map(error => error.msg)[0];
		return res.status(400).json({
			error: firstError
		});
	}

	next();
}