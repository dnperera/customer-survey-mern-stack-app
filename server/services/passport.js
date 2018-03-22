const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users'); // fetch User model or schema from mongoose

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});
//configure passport to use Google Oauth
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
			proxy: true,
		},
		(accessToken, refreshToken, profile, done) => {
			//First check user already registered in db
			User.findOne({ googleId: profile.id }).then(existingUser => {
				if (existingUser) {
					//user already registered.
					console.log('User is already registered ..!');
					done(null, existingUser);
				} else {
					//create new user and then inform passport , operation done by calling done
					new User({ googleId: profile.id }).save().then(user => {
						done(null, user);
					});
				}
			});
		}
	)
);
