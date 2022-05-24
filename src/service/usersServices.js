const { User } = require('../database/models');
const httpCode = require('../helpers/httpCode');
const message = require('../helpers/message');
const createToken = require('./createToken');
const validMessageCode = require('./validMessageCode');

const getAllUsers = async () => {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    return users;
};

const validUserExist = (user) => {
  if (!user) throw validMessageCode(httpCode.NOT_FOUND, message.USER_NOT_EXIST);
};

const getIdUser = async (id) => {
    const userId = await User.findByPk(id, { attributes: { exclude: ['password'] } });
    validUserExist(userId);
    return userId;
};

const validDisplayNameSize = (displayName) => {
    if (displayName.length < 8) {
        throw validMessageCode(httpCode.BAD_REQUEST, message.DISPLAYNAME_SIZE);
    }
};

const validEmail = (email) => {
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const test = regexEmail.test(email);
    if (!test) throw validMessageCode(httpCode.BAD_REQUEST, message.EMAIL_INVALID);
};

const validUser = (user) => {
    if (user) throw validMessageCode(httpCode.CONFLICT, message.USER_EXIST);
};

const validPassword = (password) => {
  if (password.length < 6) throw validMessageCode(httpCode.BAD_REQUEST, message.PASSWORD_SIZE);
};

const postUser = async (displayName, email, password, image) => {
    validDisplayNameSize(displayName);
    validEmail(email);
    validPassword(password);
    const findUser = await User.findOne({ where: { email } });
    validUser(findUser);
    await User.create({ displayName, email, password, image });
    const user = await User.findOne({ where: { email } });
    const token = createToken(user);
    return token;
};

const deleteUser = async (id) => {
    const userDeleted = await User.destroy({ where: { id } });
    return userDeleted;
};

module.exports = {
    getAllUsers,
    getIdUser,
    postUser,
    deleteUser,
};