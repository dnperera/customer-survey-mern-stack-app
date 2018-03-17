const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport'); //since passport files deoes not return anything . just require.

//connect to mongo
mongoose.connect(keys.mongoURI);

//create server
const app = express();
require('./routes/aouthRoutes')(app); //Require the file, then execute immediately bt passing express app object

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server started listening on port ${PORT}`);
});
