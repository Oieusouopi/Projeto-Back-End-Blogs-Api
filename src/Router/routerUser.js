const routerUser = require('express').Router();

const usersControllers = require('../controllers/usersControllers');

routerUser.get('/', usersControllers.getAllUsers);

routerUser.get('/:id', usersControllers.getIdUser);

// routerUser.put('/:id');

routerUser.post('/', usersControllers.postUser);

routerUser.delete('/:id', usersControllers.deleteUser);

module.exports = routerUser;