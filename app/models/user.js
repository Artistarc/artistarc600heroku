var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var userSchema = mongoose.Schema({
	local: {
		username: String,
		password: String
	},
	fname: { type: String, default: '' },
	mobile: { type: String, default: '' },
    category:  String,
	gender: { type: String, default: '' },
	about: { type: String, default: '' },
	email: { type: String, default: '' },
	admin: { type: Boolean, default: false },       //{ type: Boolean, default: Date.now },
	address: { type: String, default: '' },
    followers: [String],
    following: [String],
    like: [String],
    art: [String],
    tags: [String],
	meta: {
	  age: { type: Number, default: 0 },
	  dob: Date
	},
	pursuit: {
		primary: String,
		secondary: String
	},
	location: {
	  country: String,
	  city: String
	},
	meta: {
	  age: { type: Number, default: 0 },
	  dob: Date
	},
	social: {
        website: String,
		facebook: String,
		twitter: String,
		google: String
	},
	facebook: {
		id: String,
		token: String,
		email: String,
		name: String
	},
	google: {
		id: String,
		token: String,
		email: String,
		name: String
	},
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: '' }
});

userSchema.methods.generateHash = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
}

userSchema.methods.validPassword = function(password){
	return bcrypt.compareSync(password, this.local.password);
}

//module.exports = mongoose.model('User', userSchema);

var User = mongoose.model('user', userSchema);
module.exports = User;