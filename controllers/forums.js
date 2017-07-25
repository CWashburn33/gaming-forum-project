const { Forums } = require('../models');
const requireAuth = require('../services/passport').requireAuth;


const createPost = (req, res) => {
	const post = new Forums(req.body);
	post.save((err, forum) => {
		if (err) return res.send(err);
		res.send(forum);
	});
};

const getPosts = (req, res) => {
	Forums.find({}, (err, forums) => {
		if (err) return res.send(err);
		res.send(forums);
	});
};


module.exports = (app) => {
	app.post('/newpost', requireAuth, createPost);
	app.get('/posts', getPosts);
}