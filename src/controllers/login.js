const jwt = require('jsonwebtoken');
const { User } = require('../database/models');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const validMessageCode = require('../service/validMessageCode');
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

const login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      validEmpty(email, password);
      const user = await User.findOne({ where: { email } });
      validUser(user, Number(password));
      const jwtConfig = {
        expiresIn: '2h',
        algorithm: 'HS256',
      };
      const token = jwt.sign({ data: user }, secret, jwtConfig);
      res.status(httpCode.OK).json({ token });
    } catch (error) {
      next(error);
    }
};

module.exports = login;