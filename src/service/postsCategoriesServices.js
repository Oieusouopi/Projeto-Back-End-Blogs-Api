const { PostCategory } = require('../database/models');
// const httpCode = require('../helpers/httpCode');
// const message = require('../helpers/message');
// const validMessageCode = require('./validMessageCode');

const getAllPostCategories = async () => {
    const allPostCategories = await PostCategory.findAll();
    return allPostCategories;
};

const postCategoryCreation = async (postId, categoryIds) => {
    await Promise.all(categoryIds.map((categoryId) => PostCategory.create({ postId, categoryId })));
};

module.exports = {
    getAllPostCategories,
    postCategoryCreation,
};