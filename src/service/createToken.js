// const { User } = require('../database/models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const createToken = (user) => {
    const jwtConfig = {
        expiresIn: '2h',
        algorithm: 'HS256',
      };

    const token = jwt.sign({ data: user }, secret, jwtConfig);
    return token;
};

module.exports = createToken;