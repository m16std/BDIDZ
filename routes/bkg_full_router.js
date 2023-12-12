const Router = require('express');
const router = new Router();
const controller = require('../controllers/bkg_full_controllers');
const express = require('express');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(
    bodyParser.urlencoded({
        extended: false,
    }),
);

router.use(express.urlencoded({ extended: true }))
router.get('/', controller.getFullBkg);
router.post('/find', controller.findFullBkg);
router.post('/findCheck', controller.findFullBkgCheck);


module.exports = router;
