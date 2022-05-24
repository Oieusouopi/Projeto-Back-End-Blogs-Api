const routerCategory = require('express').Router();

const categoriesControllers = require('../controllers/categoriesControllers');
const validateJWT = require('../middleware/validateJWT');

routerCategory.get('/', categoriesControllers.getAllCategories);

routerCategory.get('/:id');

routerCategory.put('/:id');

routerCategory.post('/', validateJWT, categoriesControllers.postCategories);

routerCategory.delete('/:id');

module.exports = routerCategory;