const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = require("../config/jwt.config");

const verifyToken = (req, res, next) => {
  try {
    const token = jwt.verify(req.headers.authorization, JWT_SECRET_KEY);
    const { user_id } = token;
    if (user_id) {
      req.user = user_id;
    }
  } catch (e) {
    req.user = null;
  }
  return next();
};

module.exports = verifyToken;
