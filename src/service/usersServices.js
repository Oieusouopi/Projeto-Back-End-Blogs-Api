const { User } = require('../database/models');

const getAllUsers = async () => {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    return users;
};

const getIdUser = async (id) => {
    const userId = await User.findByPk(id);
    return userId;
};

const postUser = async (displayName, email, password, image) => {
    const createUser = await User.create({ displayName, email, password, image });
    return createUser;
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