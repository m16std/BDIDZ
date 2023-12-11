const Router = require('express');
const router = new Router();
const controller = require('../controllers/booking_controllers');
const express = require('express');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(
    bodyParser.urlencoded({
        extended: false,
    }),
);

router.use(express.urlencoded({ extended: true }))
router.get('/', controller.getBookings);
router.post('/find', controller.findBooking);
router.post('/add', controller.addBooking);

module.exports = router;
