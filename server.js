const mongoose = require('mongoose');

const app = require('./app');

const port = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI;

mongoose.connect(DB_URI).then(() => {
	console.log('DB connection successfull!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
