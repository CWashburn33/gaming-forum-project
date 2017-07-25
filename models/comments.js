const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
	body: {
		type: String,
		required: true,
	}
});

module.exports = CommentSchema;