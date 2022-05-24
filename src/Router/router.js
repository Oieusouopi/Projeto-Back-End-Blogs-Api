const router = require('express').Router();
const routerBlogsPosts = require('./routerBlogPosts');
const routerCategory = require('./routerCategory');
const routerUser = require('./routerUser');
const routerLogin = require('./routerLogin');

router.use('/login', routerLogin);

router.use('/user', routerUser);

router.use('/post', routerBlogsPosts);

router.use('/categories', routerCategory);

module.exports = router;