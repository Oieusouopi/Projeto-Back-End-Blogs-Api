const router = require('express').Router();
const routerBlogsPosts = require('./routerCategoryPost');
const routerCategory = require('./routerCategory');
// const routerBlogsPosts = require('./routerBlogsPosts');
const routerUser = require('./routerUser');
const routerLogin = require('./routerLogin');

router.use('/login', routerLogin);

router.use('/user', routerUser);

router.use('/post', routerBlogsPosts);

router.use('/categories', routerCategory);

// router.use('/blogPosts', routerBlogsPosts);

module.exports = router;