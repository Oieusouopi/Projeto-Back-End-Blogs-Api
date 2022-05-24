const { BlogPost } = require('../database/models');
const { Category } = require('../database/models');
const { User } = require('../database/models');
const httpCode = require('../helpers/httpCode');
const message = require('../helpers/message');
const postsCategoriesServices = require('./postsCategoriesServices');
const validMessageCode = require('./validMessageCode');

const validCategoryIds = async (categoryId) => {
    const category = await Category.findOne({ where: { id: categoryId } });
    if (!category) throw validMessageCode(httpCode.BAD_REQUEST, message.CATEGORYID_NOT_FOUND);
};

const validEmpty = (title, content, categoryIds) => {
    if (!title || !content || !categoryIds) {
        throw validMessageCode(httpCode.BAD_REQUEST, message.FIELDS_EMPTY);
    }
};

const postBlogCreation = async (title, content, userId, categoryIds) => {
    validEmpty(title, content, categoryIds);
    await Promise.all(categoryIds.map((categoryId) => validCategoryIds(categoryId)));
    const newBlogPost = await BlogPost.create({ title, content, userId });
    const postId = newBlogPost.id;
    await postsCategoriesServices.postCategoryCreation(postId, categoryIds);
    return newBlogPost;
};

const allBlogsPosts = async () => {
    const getPostsBlogs = await BlogPost.findAll({
        include: [
            { model: User, as: 'users' },
            // { model: Category, as: 'categories', through: { attributes: { exclude: ['PostCategory'] } } },
        ],
    });
    return getPostsBlogs;
};

const idPostsBlogs = async (id) => {
    const getPostBlogs = await BlogPost.findPk({ id });
    return getPostBlogs;
};

module.exports = {
    postBlogCreation,
    allBlogsPosts,
    idPostsBlogs,
};