const passport = require('passport');

module.exports = app => {
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: ['profile', 'email'],
		})
	);

	//route to handle google callback url
	app.get('/auth/google/callback', passport.authenticate('google'));

	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});
};
