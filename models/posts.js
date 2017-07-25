const mongoose = require('mongoose');
const CommentSchema = require('./comments');

const PostSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	body: {
		type: String,
		required: true,
	},
	comments: [
		CommentShcema
	],
});

PostSchema.pre('save', function(next) {
	console.log('Post pending...');
	console.log(this);
	next();
});

module.exports = PostSchema;