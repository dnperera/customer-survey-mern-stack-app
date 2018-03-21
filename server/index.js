const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport'); //since passport files deoes not return anything . just require.

//connect to mongo
mongoose.connect(keys.mongoURI);

//create server
const app = express();

//create cookies and set in express
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey],
	})
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/oauthRoutes')(app); //Require the file, then execute immediately bt passing express app object

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server started listening on port ${PORT}`);
});
