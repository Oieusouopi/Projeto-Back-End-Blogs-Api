const { User } = require('../database/models');
const createToken = require('./createToken');

const validMessageCode = require('./validMessageCode');
const httpCode = require('../helpers/httpCode');
const message = require('../helpers/message');

const validEmpty = (email, password) => {
    if (!email || !password) throw validMessageCode(httpCode.BAD_REQUEST, message.FIELDS_EMPTY);
};

const validUser = (user, password) => {
    if (!user || user.password !== password) {
        throw validMessageCode(httpCode.BAD_REQUEST, message.INVALID_FIELDS);
    }
};

const loginService = async (email, password) => {
    validEmpty(email, password);
    const user = await User.findOne({ where: { email } });
    validUser(user, password);
    const token = createToken(user);
    return token;
};

module.exports = loginService;