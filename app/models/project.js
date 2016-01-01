var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	local: {
		author_username: String,
        author_name: String
	},
    name: String,
    username: String,
    email: String,
    category: String,
    about: String,
    website: String,
    location: String,
    mobile: String,
	members: [{ 
        username: String,
        name: String,
        userpic: String,
        userid: String,
        time: { type: Date, default: Date.now }
    }],  
    troupes: [{ 
        username: String,
        name: String,
        userpic: String,
        userid: String,
        members: [{ 
            username: String,
            name: String,
            userpic: String,
            userid: String,
            time: { type: Date, default: Date.now }
        }],
        time: { type: Date, default: Date.now }
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

var Project = mongoose.model('project', userSchema);
module.exports = Project;