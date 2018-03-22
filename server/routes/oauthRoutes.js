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

	app.get('/api/logout', (req, res) => {
		req.logout();
		res.send('req.user');
	});

	app.get('/api/current_user', (req, res) => {
		console.log(req.user);
		res.send(req.user);
	});
};
