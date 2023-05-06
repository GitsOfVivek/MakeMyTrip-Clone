const Hotel = require('./../models/hotelModel');

exports.getAllHotels = async (req, res) => {
	try {
		const hotels = await Hotel.find({});
		res.status(200).json({
			status: 'success',
			total: hotels.length,
			data: hotels,
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err.message,
		});
	}
};

exports.getHotel = async (req, res) => {
	try {
		const id = req.params.id;

		const hotel = await Hotel.find({ _id: id });

		if (!hotel) {
			return res.status(404).json({
				status: 'fail',
				message: 'Hotel not found',
			});
		}

		res.status(200).json({
			status: 'success',
			data: hotel,
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err.message,
		});
	}
};
