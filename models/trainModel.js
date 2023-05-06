const mongoose = require('mongoose');

const trainSchema = new mongoose.Schema({
	from: {
		type: String,
		required: [true, 'A train must have from'],
	},
	to: {
		type: String,
		required: [true, 'A train must have to'],
	},
	departure: {
		departureTime: {
			type: String,
			required: [true, 'A train must have departureTime'],
		},
		departureDate: {
			type: String,
			required: [true, 'A train must have departureDate'],
		},
	},
	duration: {
		type: String,
		required: [true, 'A train must have duration'],
	},
	kilometers: {
		type: String,
		required: [true, 'A train must have kilometers'],
	},
	price: {
		type: Number,
		required: [true, 'A train must have price'],
	},
	train_number: {
		type: String,
		required: [true, 'A train must have train_number'],
	},
	return: {
		returnTime: {
			type: String,
			required: [true, 'A train must have returnTime'],
		},
		returnDate: {
			type: String,
			required: [true, 'A train must have returnDate'],
		},
	},
	airlineName: {
		type: String,
		required: [true, 'A train must have airlineName'],
	},
	via: [String],
});

const Train = mongoose.model('Train', trainSchema);

module.exports = Train;
