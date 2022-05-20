const routerCategory = require('express').Router();

routerCategory.get('/');

routerCategory.get('/:id');

routerCategory.put('/:id');

routerCategory.post('/');

routerCategory.delete('/:id');

module.exports = routerCategory;