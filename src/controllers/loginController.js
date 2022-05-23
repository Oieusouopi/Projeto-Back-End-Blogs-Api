const loginService = require('../service/loginService');
const httpCode = require('../helpers/httpCode');

const loginController = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const token = await loginService(email, password);
      res.status(httpCode.OK).json({ token });
    } catch (error) {
      next(error);
    }
};

module.exports = loginController;