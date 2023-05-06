const mongoose = require('mongoose');

const app = require('./app');

const port = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB = DB_URI.replace('<PASSWORD>', DB_PASSWORD);

mongoose.connect(DB).then(() => {
	console.log('DB connection successfull!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
