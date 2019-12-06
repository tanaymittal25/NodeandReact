const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
require('dotenv').config();
const User = require('../models/user');

exports.signUp = async (req, res) => {
    const userExist = await User.findOne({
        email: req.body.email
    });
    if (userExist) 
    	return res.status(403).json({
    		error: "Email already taken"
    	});

    const user = await new User(req.body);
    await user.save();
    res.status(200).json({ 
    	message: "SignUp Success, Please Login!" 
    });
};

exports.signIn = (req, res) => {
	// validate email

	const { email, password } = req.body;
	User.findOne({ email }, (err, user) => {
		if (err || !user)
			return res.status(401).json({
				error: "User Not Found"
			});

		if (!user.authenticate(password))
			return res.status(401).json({
				error: "Incorrect Password"
			});

		// Create Token
		const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

		// Create Cookie
		res.cookie("t", token, { expire: new Date() + 99999});

		// Send Response
		const { _id, name, email } = user;
		return res.json({ token, user: { _id, email, name }});
	});
};

exports.signOut = (req, res) => {
	res.clearCookie("t");
	return res.json({
		message: "Signout Success"
	});
};

exports.requireSignIn = expressJwt({
	secret: process.env.JWT_SECRET
});