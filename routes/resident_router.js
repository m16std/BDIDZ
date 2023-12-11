const Router = require('express');
const residtrouter = new Router();
const residcontroller = require('../controllers/resident_controllers');

residtrouter.get('/', residcontroller.getResidents);
residtrouter.get('/:id', residcontroller.getOneResident);

module.exports = residtrouter;
