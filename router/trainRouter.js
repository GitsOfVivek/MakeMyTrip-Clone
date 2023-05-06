const express = require('express');
const { getAllTrains, getTrain } = require('./../controller/trainController');

const router = express.Router();

router.route('/').get(getAllTrains);
router.route('/:id').get(getTrain);

module.exports = router;
