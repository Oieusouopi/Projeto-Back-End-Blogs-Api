const router = require('express').Router();
// const routerCategoryPost = require('./routerCategoryPost');
const routerCategory = require('./routerCategory');
// const routerBlogsPosts = require('./routerBlogsPosts');
const routerUser = require('./routerUser');

router.use('/user', routerUser);

// router.use('/categoryPost', routerCategoryPost);

router.use('/category', routerCategory);

// router.use('/blogPosts', routerBlogsPosts);

module.exports = router;