var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	local: {
		author_username: String,
        author_name: String
	},
    name: String,
    username: String,
    banner: String,
	info: {
		name: String,
		about: String,
		description: String,
        category: String,
        price: String,
        location: String,
        images: [String],
        quantity: String
	},
	rank: { type: String, default: '0' },
    target: { type: String, default: 'public'},
    privacy: { type: String, default: 'public'},
    
	social: {
		facebook: String,
		twitter: String,
		google: String
	},
	meta: {
		likes: [String],
	    followers: [String],
		comment: [{
            username: String,
            message: String,
            time: String
        }]
	},
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: '' }
});

//module.exports = mongoose.model('User', userSchema);

var Product = mongoose.model('product', userSchema);
module.exports = Product;