const Train = require('./../models/trainModel');

exports.getAllTrains = async (req, res) => {
	try {
		const trains = await Train.find({});
		res.status(200).json({
			status: 'success',
			total: trains.length,
			data: trains,
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err.message,
		});
	}
};

exports.getTrain = async (req, res) => {
	try {
		const id = req.params.id;

		const train = await Train.find({ _id: id });

		if (!train) {
			return res.status(404).json({
				status: 'fail',
				message: 'Train not found',
			});
		}

		res.status(200).json({
			status: 'success',
			data: train,
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err.message,
		});
	}
};
