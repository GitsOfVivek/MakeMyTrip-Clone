const mongoose = require('mongoose');

const app = require('./app');

const port = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI;

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(DB_URI);
		console.log(`DB connection successfull! : ${conn.connection.host}`);
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};
connectDB().then(() => {
	app.listen(port, () =>
		console.log(`Example app listening on port ${port}!`)
	);
});
