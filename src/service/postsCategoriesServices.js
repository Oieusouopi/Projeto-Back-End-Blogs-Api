const { postCategory } = require('../database/models');

const getAllPostCategories = async () => {
    const allPostCategories = await postCategory.findAll();
    return allPostCategories;
};

module.exports = {
    getAllPostCategories,
};