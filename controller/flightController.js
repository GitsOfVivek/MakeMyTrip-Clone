const Flight = require('./../models/flightModel');

exports.getAllFlights = async (req, res) => {
	try {
		const flights = await Flight.find({});
		res.status(200).json({
			status: 'success',
			total: flights.length,
			data: flights,
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err.message,
		});
	}
};
exports.getFlight = async (req, res) => {
	try {
		const id = req.params.id;

		const flight = await Flight.find({ _id: id });

		if (!flight) {
			return res.status(404).json({
				status: 'fail',
				message: 'Flight not found',
			});
		}

		res.status(200).json({
			status: 'success',
			data: flight,
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err.message,
		});
	}
};
