const { users } = require("../models");
const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = require("../config/jwt.config");

class LoginService {
  getUserData = async (phoneNumber, name) => {
    try {
      const user = await users.findOne({
        attributes: ["id", "phone_number", "name"],
        where: { phone_number: phoneNumber, name },
      });
      return user;
    } catch (err) {
      console.log(err);
    }
  };

  getToken = (user) => {
    return jwt.sign({ user_id: user.id }, JWT_SECRET_KEY);
  };
}

module.exports = LoginService;
