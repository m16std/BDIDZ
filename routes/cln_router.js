const Router = require('express');
const router = new Router();
const controller = require('../controllers/cln_controllers');

router.get('/', controller.getCleening);
router.get('/:id', controller.getOneCleening);
router.post('/find', controller.findCleening);

module.exports = router;
