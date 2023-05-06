const express = require('express');
const {
	getAllFlights,
	getFlight,
} = require('./../controller/flightController');

const router = express.Router();

router.route('/').get(getAllFlights);
router.route('/:id').get(getFlight);

module.exports = router;
