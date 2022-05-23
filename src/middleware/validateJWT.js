const jwt = require('jsonwebtoken');
const { User } = require('../database/models');
const httpCode = require('../helpers/httpCode');
const message = require('../helpers/message');
const validMessageCode = require('../service/validMessageCode');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const validToken = (token) => {
  if (!token) throw validMessageCode(httpCode.UNAUTHORIZED, message.TOKEN_NOT_FOUND);
};

const validUser = (user) => {
 if (!user) throw validMessageCode(httpCode.UNAUTHORIZED, message.EXPERID_INVALID_TOKEN);
};

const validateJWT = async (req, __res, next) => {
  try {
    const token = req.headers.authorization;
    validToken(token);
    const decoded = jwt.verify(token, secret, (error, messageDecoded) => {
      if (error) throw validMessageCode(httpCode.UNAUTHORIZED, message.EXPERID_INVALID_TOKEN);
      return messageDecoded;
    });
    const user = await User.findOne({ where: { displayName: decoded.data.displayName } });
    validUser(user);
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = validateJWT;