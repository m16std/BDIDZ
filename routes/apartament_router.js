const Router = require('express');
const apartrouter = new Router();
const apartcontroller = require('../controllers/apartament_controllers');

apartrouter.get('/', apartcontroller.getApartaments);
apartrouter.post('/find', apartcontroller.findApartaments);
apartrouter.get('/:id', apartcontroller.getOneApartament);

module.exports = apartrouter;
