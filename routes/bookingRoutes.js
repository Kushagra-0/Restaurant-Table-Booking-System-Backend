const express = require('express');
const { createBooking, getBookings, deleteBooking } = require('../controllers/bookingController');

const router = express.Router();

router.post('/', createBooking);
router.get('/', getBookings);
router.delete('/:id', deleteBooking);

module.exports = router;