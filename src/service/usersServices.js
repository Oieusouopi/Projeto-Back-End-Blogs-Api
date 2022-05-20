const { User } = require('../database/models');

const getAllUsers = async () => {
    const users = await User.findAll();
    return users;
};

const getIdUser = async (id) => {
    const userId = await User.findPk(id);
    return userId;
};

// const postUser = async () => {
//     const postUser = 
// };

module.exports = {
    getAllUsers,
    getIdUser,
};