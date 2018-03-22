//keys.js will determine whether to return/use production or development keys

if (process.env.NODE_ENV === 'production') {
	//we are in production - return production keys
	module.exports = require('./prod');
} else {
	//we are in development - renturn dev keys
	module.exports = require('./dev');
}
