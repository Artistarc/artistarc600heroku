var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

var User            = require('../app/models/user');
var configAuth = require('./auth');

module.exports = function(passport) {


	passport.serializeUser(function(user, done){
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done){
		User.findById(id, function(err, user){
			done(err, user);
		});
	});


	passport.use('local-signup', new LocalStrategy({
		usernameField: 'username',
		passwordField: 'password',
		passReqToCallback: true
	},
	function(req, username, password, done){
		process.nextTick(function(){
			User.findOne({'local.username': username}, function(err, user){
				if(err)
					return done(err);
				if(user){
					return done(null, false, req.flash('signupMessage', 'That email already taken'));
				} 
				if(!req.user) {
	    		//user is not logged in yet
					var newUser = new User();
					
					newUser.local.username = username;
					newUser.local.password = newUser.generateHash(password);
					newUser.fname = req.body.fname;
					newUser.email = req.body.email;
					newUser.meta.dob = req.body.dob;
					newUser.aclass = req.body.aclass;
					newUser.mobile = req.body.mobile;


					newUser.save(function(err){
						if(err)
							throw err;
						return done(null, newUser);
					})
				}else {
					var user = req.user;
					user.local.username = username;
					user.email = req.body.email;
					user.local.password = user.generateHash(password);

					user.save(function(err){
						if(err)
							throw err;
						return done(null, user);
					})
				}
			})

		});
	}));

	passport.use('local-login', new LocalStrategy({
			usernameField: 'username',
			passwordField: 'password',
			passReqToCallback: true
		},
		function(req, username, password, done){
			process.nextTick(function(){
				User.findOne({ 'local.username': req.body.username}, function(err, user){
					if(err)
						return done(err);
					if(!user)
						return done(null, false, req.flash('loginMessage', 'No User found'));
					if(!user.validPassword(password)){
						return done(null, false, req.flash('loginMessage', 'inavalid password'));
					}
					console.log(req.body.username);
					return done(null, user);

				});
			});
		}
	));

    passport.use(new FacebookStrategy({
	    clientID: configAuth.facebookAuth.clientID,
	    clientSecret: configAuth.facebookAuth.clientSecret,
	    callbackURL: configAuth.facebookAuth.callbackURL,
        profileFields: ["emails", "name"],
	    passReqToCallback: true
	  },
	  function(req, accessToken, refreshToken, profile, done) {
	    	process.nextTick(function(){
	    		//user is not logged in yet
	    			if(!req.user){
					User.findOne({'facebook.id': profile.id}, function(err, user){
		    			if(err)
		    				return done(err);
		    			if(user){
		    				console.log('Old User!');
		    				if(!user.facebook.token){
		    					user.facebook.token = accessToken;
		    					user.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;
		    					user.facebook.email = profile.emails[0].value;
		    					user.save(function(err){
		    						if(err)
		    							throw err;
		    					});

		    				}
		    				return done(null, user);
		    			}
		    			else {
		    				console.log('New User!');
		    				var newUser = new User();
		    				newUser.facebook.id = profile.id;
		    				newUser.facebook.token = accessToken;
		    				newUser.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;
		    				newUser.facebook.email = profile.emails[0].value;

		    				newUser.save(function(err){
		    					if(err)
		    						throw err;
		    					return done(null, newUser);
		    				})
		    			}
		    		});
	    		}

	    		//user is logged in already, and needs to be merged
	    		else {
	    			var user = req.user;
	    			user.facebook.id = profile.id;
	    			user.facebook.token = accessToken;
	    			user.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;
	    			user.facebook.email = profile.emails[0].value;

	    			user.save(function(err){
	    				if(err)
	    					throw err
	    				return done(null, user);
	    			})
	    		}
	    	});
	    }

	));

	passport.use(new GoogleStrategy({
	    clientID: configAuth.googleAuth.clientID,
	    clientSecret: configAuth.googleAuth.clientSecret,
	    callbackURL: configAuth.googleAuth.callbackURL,
	    passReqToCallback: true
	  },
	  function(req, accessToken, refreshToken, profile, done) {
	    	process.nextTick(function(){
	    		User.findOne({'google.id': profile.id}, function(err, user){
	    			if(!req.user){
	    			User.findOne({'google.id': profile.id}, function(err, user){
		    			if(err)
		    				return done(err);
		    			if(user){
		    				if(!user.google.token){
		    					user.google.token = accessToken;
		    					user.google.name = profile.displayName;
		    					user.google.email = profile.emails[0].value;
		    					user.save(function(err){
		    						if(err)
		    							throw err;
		    					});
		    				}
		    				return done(null, user);
		    			}
		    			else {
		    				var newUser = new User();
		    				newUser.google.id = profile.id;
		    				newUser.google.token = accessToken;
		    				newUser.google.name = profile.displayName;
		    				newUser.google.email = profile.emails[0].value;

		    				newUser.save(function(err){
		    					if(err)
		    						throw err;
		    					return done(null, newUser);
		    				})
		    			}
		    		});
		    		} else {
		    			var user = req.user;
		    			user.google.id = profile.id;
						user.google.token = accessToken;
						user.google.name = profile.displayName;
						user.google.email = profile.emails[0].value;

						user.save(function(err){
							if(err)
								throw err;
							return done(null, user);
						});
		    		}
	    		});
	    	});
	    }

	));


	


};