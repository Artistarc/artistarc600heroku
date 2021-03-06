var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	local: {
		author_username: String,
        author_name: String,
        author_id: String,
        day: { type: Date, default: Date.now }
	},
	notifications: [{ 
        subject: String,
        body: String,
        title: String,
        pic: String,
        time: { type: Date, default: Date.now }
    }]
});

//module.exports = mongoose.model('User', userSchema);

var NotfProject = mongoose.model('notfproject', userSchema);
module.exports = NotfProject;