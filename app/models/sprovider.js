var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	local: {
		author_username: String,
        author_name: String
	},
    banner: String,
    title: String,
    about: String,
    description: String,
    spcategory: String,
    website: String,
    location: String,
    mobile: String,
	product: [{ 
        name: String,
        username: String,
        price: String,
        description: String,
        category: String,
        location: String,
        tags: [String],
        image: [String],
        time: { type: Date, default: Date.now }
    }],
    offer: [{
        title: String,
        description: String,
        image: String,
        discount: String
    }],
	rank: { type: String, default: '0' },
    tags: [String],
    target: { type: String, default: 'public'},
    privacy: { type: String, default: 'public'},
    posts: { type: String, default: '0' },
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

var Sprovider = mongoose.model('sprovider', userSchema);
module.exports = Sprovider;