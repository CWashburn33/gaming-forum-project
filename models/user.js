const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const UserSchema = mongoose.Schema({
	email: {
		type: String,
		unique: true,
		lowercase: true,
		required: true,
		validate: {
			validator: (email) => {
				return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
			}
		}
	},
	username: {
		type: String,
		unique: true,
		required: true,
		lowercase: true,
	},
	password: {
		type: String,
		required: true,
	},
	posts: [
		PostSchema,
	],
});

UserSchema.pre('save', function(next) {
	bcrypt.genSalt(10, (err, salt) => {
		if (err) return next(err);
		bcrypt.hash(this.password, salt, null, (err, hash) => {
			if (err) return next(err);
			this.password = hash;
			next();
		});
	});
});

UserSchema.methods.checkPassword = function(passwordToCheck, cb) {
	bcrypt.compare(passwordToCheck, this.password, (err, isMatch) => {
		if (err) return cb(err);
		cb(null, isMatch);
	});
};

module.exports = UserSchema;
