const Router = require('express');
const router = new Router();
const controller = require('../controllers/controllers');

router.get('/booking', controller.getBookings);
router.get('/booking/:id', controller.getOneBooking);

router.get('/', (req, res) => { res.send('Hello blyat') })
module.exports = router;