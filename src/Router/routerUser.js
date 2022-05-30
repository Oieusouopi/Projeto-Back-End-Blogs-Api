const routerUser = require('express').Router();

const usersControllers = require('../controllers/usersControllers');
const validateJWT = require('../middleware/validateJWT');

routerUser.get('/', validateJWT, usersControllers.getAllUsers);

routerUser.get('/:id', validateJWT, usersControllers.getIdUser);

routerUser.delete('/me', validateJWT, usersControllers.deleteMeUser);

routerUser.post('/', usersControllers.postUser);

routerUser.delete('/:id', usersControllers.deleteUser);

module.exports = routerUser;