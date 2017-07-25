const { Users } = require('../models');

const makeUser = (req, res) => {
	const newUser = new Users(req.body);
	newUser.save((err, user) => {
		if (err) res.send(err);
		res.send(user);
	});
};


module.exports = (app) => {
	app.post('/signup', makeUser);
};