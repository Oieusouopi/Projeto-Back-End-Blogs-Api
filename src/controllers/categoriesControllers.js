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

module.exports = {
    getAllCategories,
};