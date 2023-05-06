const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
	city: {
		type: String,
		required: [true, 'A hotel must have city'],
	},
	hotel_name: {
		type: String,
		required: [true, 'A hotel must have hotel_name'],
	},
	check_in: {
		type: String,
		required: [true, 'A hotel must have check_in'],
	},
	check_out: {
		type: String,
		required: [true, 'A hotel must have check_out'],
	},
	room_type: {
		type: String,
		required: [true, 'A hotel must have room_type'],
	},
	price_per_night: {
		type: Number,
		required: [true, 'A hotel must have price_per_night'],
	},
	guests: {
		type: String,
		required: [true, 'A hotel must have guests'],
	},
	rating: {
		type: Number,
		required: [true, 'A hotel must have rating'],
		min: 1,
		max: 10,
	},
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
