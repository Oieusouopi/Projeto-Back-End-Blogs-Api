const usersServices = require('../service/usersServices');

// HELPERS
const httpCode = require('../helpers/httpCode');

const getAllUsers = async (__req, res, next) => {
  try {
    const users = await usersServices.getAllUsers();
    res.status(httpCode.OK).json(users);
  } catch (error) {
    next(error);
  }
};

const getIdUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = await usersServices.getIdUser(id);
    res.status(httpCode.OK).json(userId);
  } catch (error) {
    next(error);
  }
};

module.exports = {
    getAllUsers,
    getIdUser,
};