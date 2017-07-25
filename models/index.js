const mongoose = require('mongoose');

module.exports = {
	User: mongoose.model('User', require('./user')),
	Forums: mongoose.model('Forums', require('./forums')),
};