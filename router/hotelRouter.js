const express = require('express');
const { getAllHotels, getHotel } = require('./../controller/hotelController');

const router = express.Router();

router.route('/').get(getAllHotels);
router.route('/:id').get(getHotel);

module.exports = router;
