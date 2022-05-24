const routerPostCategory = require('express').Router();
// const postsCategoriesControllers = require('../controllers/postsCategoriesControllers');
const blogsPostsControllers = require('../controllers/blogsPostsControllers');
const validateJWT = require('../middleware/validateJWT');

// routerPostCategory.get('/');

// routerPostCategory.get('/:id');

// routerPostCategory.put('/:id');

routerPostCategory.post('/', validateJWT, blogsPostsControllers.postBlogCreation);

// routerPostCategory.delete('/:id');

module.exports = routerPostCategory;