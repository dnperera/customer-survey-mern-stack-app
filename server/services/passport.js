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
		async (accessToken, refreshToken, profile, done) => {
			//First check user already registered in db
			const existingUser = await User.findOne({ googleId: profile.id });
			if (existingUser) {
				//user already registered.
				console.log('User is already registered ..!');
				done(null, existingUser);
			} else {
				//create new user and then inform passport , operation done by calling done
				const user = await new User({ googleId: profile.id }).save();
				done(null, user);
			}
		}
	)
);
