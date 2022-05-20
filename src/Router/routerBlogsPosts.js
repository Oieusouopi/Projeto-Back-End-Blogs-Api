const routerBlogsPosts = require('express').Router();

routerBlogsPosts.get('/');

routerBlogsPosts.get('/:id');

routerBlogsPosts.put('/:id');

routerBlogsPosts.post('/');

routerBlogsPosts.delete('/:id');

module.exports = routerBlogsPosts;