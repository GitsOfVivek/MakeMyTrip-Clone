const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
	from: {
		type: String,
		required: [true, 'A flight must have from'],
	},
	to: {
		type: String,
		required: [true, 'A flight must have to'],
	},
	departure: {
		departureTime: {
			type: String,
			required: [true, 'A flight must have departureTime'],
		},
		departureDate: {
			type: String,
			required: [true, 'A flight must have departureDate'],
		},
	},
	return: {
		returnTime: {
			type: String,
			required: [true, 'A flight must have returnTime'],
		},
		returnDate: {
			type: String,
			required: [true, 'A flight must have returnDate'],
		},
	},
	airlineName: {
		type: String,
		required: [true, 'A flight must have airlineName'],
	},
	via: [String],
	price: {
		type: Number,
		required: [true, 'A flight must have price'],
	},
	duration: {
		type: String,
		required: [true, 'A flight must have duration'],
	},
});

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;
