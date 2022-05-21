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

const postUser = async (req, res, next) => {
 try {
   const { displayName, password, email, image } = req.body;
   const createUser = await usersServices.postUser(displayName, email, password, image);
   return res.status(httpCode.CREATED).json(createUser);
 } catch (error) {
   next(error);
 }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userDeleted = await usersServices.deleteUser(id);
    return res.status(httpCode.NO_CONTENT).json(userDeleted);
  } catch (error) {
    next(error);
  }
};

module.exports = {
    getAllUsers,
    getIdUser,
    postUser,
    deleteUser,
};