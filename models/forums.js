const mongoose = require('mongoose');
const PostSchema = require('./posts');

const ForumSchema = mongoose.Schema({
	category: {
		type: String,
		required: true,
		unique: true,
	},
	description: {
		type: String,
		required: true,
	},
	posts: [
		PostSchema
	],
});

module.exports = ForumSchema;