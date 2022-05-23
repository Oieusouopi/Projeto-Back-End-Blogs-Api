const jwt = require('jsonwebtoken');
const { User } = require('../database/models');
const httpCode = require('../helpers/httpCode');
const message = require('../helpers/message');
const validMessageCode = require('../service/validMessageCode');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const validToken = (token) => {
  if (token === null) throw validMessageCode(httpCode.UNAUTHORIZED, message.TOKEN_NOT_FOUND);
};

const validateJWT = async (req, __res, next) => {
  try {
    // console.log(req.headers.authorization);
    const token = req.headers.authorization;
    validToken(token);
    const newToken = token.split('Bearer ').join('');
    const decoded = jwt.verify(newToken, secret);
    const user = await User.findOne({ where: { displayName: decoded.data.displayName } });
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = validateJWT;