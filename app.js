const express = require('express');
var cors = require('cors');
const env = require('dotenv');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
env.config();

const flightRouter = require('./router/flightRouter');
const hotelRouter = require('./router/hotelRouter');
const trainRouter = require('./router/trainRouter');

const DB_URI = process.env.DB_URI;
mongoose.connect(DB_URI).then(conn => {
	console.log(`DB connection successfull! : ${conn.connection.host}`);
});

app.use('/api/v1/flights', flightRouter);
app.use('/api/v1/trains', trainRouter);
app.use('/api/v1/hotels', hotelRouter);

app.all('*', (req, res) => {
	res.status(400).json({
		status: 'error',
		message: `Can't find ${req.originalUrl} on this server!`,
	});
});

module.exports = app;
