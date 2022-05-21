const routerCategory = require('express').Router();

const categoriesControllers = require('../controllers/categoriesControllers');

routerCategory.get('/', categoriesControllers.getAllCategories);

routerCategory.get('/:id');

routerCategory.put('/:id');

routerCategory.post('/');

routerCategory.delete('/:id');

module.exports = routerCategory;