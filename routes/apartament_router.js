const Router = require('express');
const apartrouter = new Router();
const apartcontroller = require('../controllers/cln_controllers');

apartrouter.get('/', apartcontroller.getCleening);
apartrouter.get('/:id', apartcontroller.getOneCleening);

module.exports = apartrouter;
