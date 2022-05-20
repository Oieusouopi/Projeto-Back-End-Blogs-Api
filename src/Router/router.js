const router = require('express').Router();

const usersControllers = require('../controllers/usersControllers');

router.get('/users', usersControllers.getAllUsers);

router.get('/users/:id', usersControllers.getIdUser);

router.post('/users');

router.put('/users/:id');

router.delete('/users/:id');

module.exports = router;