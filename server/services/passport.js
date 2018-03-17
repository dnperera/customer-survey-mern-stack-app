const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

//configure passport to use Google Oauth
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
		},
		(accessToken, refreshToken, profile, done) => {
			//once google grant acces via token . then take details of the user
			console.log('accessToken', accessToken);
			console.log('refresh Token', refreshToken);
			console.log('profile', profile);
		}
	)
);
