const routerCategoryPost = require('express').Router();

routerCategoryPost.get('/');

routerCategoryPost.get('/:id');

routerCategoryPost.put('/:id');

routerCategoryPost.post('/');

routerCategoryPost.delete('/:id');

module.exports = routerCategoryPost;