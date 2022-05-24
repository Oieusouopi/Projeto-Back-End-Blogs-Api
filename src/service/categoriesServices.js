const { Category } = require('../database/models');
const httpCode = require('../helpers/httpCode');
const message = require('../helpers/message');
const validMessageCode = require('./validMessageCode');

const getAllCategories = async () => {
  const allCategories = await Category.findAll();
  return allCategories;
};

const validNameCategory = (name) => {
  if (!name) throw validMessageCode(httpCode.BAD_REQUEST, message.NAME_REQUIRED);
};

const postCategories = async (name) => {
  validNameCategory(name);
  const postCategory = await Category.create({ name });
  return postCategory;
};

module.exports = {
    getAllCategories,
    postCategories,
};