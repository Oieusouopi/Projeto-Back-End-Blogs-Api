const routerLogin = require('express').Router();

const loginController = require('../controllers/loginController');

routerLogin.post('/', loginController);

module.exports = routerLogin;