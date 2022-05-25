const routerBlogPosts = require('express').Router();
// const postsCategoriesControllers = require('../controllers/postsCategoriesControllers');
const blogsPostsControllers = require('../controllers/blogsPostsControllers');
const validateJWT = require('../middleware/validateJWT');

routerBlogPosts.get('/', validateJWT, blogsPostsControllers.allBlogsPosts);

routerBlogPosts.get('/:id', validateJWT, blogsPostsControllers.getIdBlogsPosts);

routerBlogPosts.put('/:id', validateJWT, blogsPostsControllers.putIdBlogPost);

routerBlogPosts.post('/', validateJWT, blogsPostsControllers.postBlogCreation);

// routerPostCategory.delete('/:id');

module.exports = routerBlogPosts;