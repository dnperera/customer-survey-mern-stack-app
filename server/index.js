const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
	res.send({ hi: 'This is survey app ....' });
});

app.listen(PORT, () => {
	console.log(`Server started listening on port ${PORT}`);
});
