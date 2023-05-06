const mongoose = require('mongoose');

const app = require('./app');

const port = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI;

mongoose.connect(DB_URI).then(conn => {
	console.log(`DB connection successfull! : ${conn.connection.host}`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
