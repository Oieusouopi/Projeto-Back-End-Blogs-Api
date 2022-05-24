const categoriesServices = require('../service/categoriesServices');

const httpCode = require('../helpers/httpCode');

const getAllCategories = async (req, res, next) => {
    try {
      const allCategories = await categoriesServices.getAllCategories();
      return res.status(httpCode.OK).json(allCategories);
    } catch (error) {
      next(error);
    }
};

const postCategories = async (req, res, next) => {
  try {
    const { name } = req.body;
    const createCategory = await categoriesServices.postCategories(name);
    res.status(httpCode.CREATED).json(createCategory);
  } catch (error) {
    next(error);
  }
};

module.exports = {
    getAllCategories,
    postCategories,
};