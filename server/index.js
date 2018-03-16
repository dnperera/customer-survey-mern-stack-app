const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();
//Google Client ID  207912861586-njdbp0qr74gkkg2guiejjo1nmf8nvgee.apps.googleusercontent.com
//Google Client Secret RlzJnKTMb3jiyHCOCiT2a6uA
//passport.use(new GoogleStrategy());

app.get('/', (req, res) => {
	res.send({ project: 'Customer feedback survey MERN Stack App..' });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server started listening on port ${PORT}`);
});
