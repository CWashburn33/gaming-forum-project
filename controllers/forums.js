const { Forums } = require('../models');
const requireAuth = require('../services/passport').requireAuth;


const createForum = (req, res) => {
	const post = new Forums(req.body);
	post.save((err, forum) => {
		if (err) return res.send(err);
		res.send(forum);
	});
};

const getForums = (req, res) => {
	Forums.find({}, (err, forums) => {
		if (err) return res.send(err);
		res.send(forums);
	});
};

const getPosts = (req, res) => {
	Forums.find({}, (err, forum) => {
		if (err) return res.send(err);
		res.send(forum);
	});
};


module.exports = (app) => {
	app.post('/newforum', requireAuth, createPost);
	app.get('/forums', getForums);
	app.get('/forums/posts', getPosts);
}