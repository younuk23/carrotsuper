const express = require("express");
const LoginService = require("../service/login.service");

class LoginController {
  router = express.Router();
  path = "/login";

  constructor() {
    this.service = new LoginService();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post(`${this.path}`, this.login);
  }

  login = async (req, res) => {
    const { mobile, name } = req.body;
    const user = await this.service.getUserData(mobile, name);
    if (!user) {
      return res.json(400, {
        message: "this user is not exist",
      });
    }
    const token = this.service.getToken(user);
    return res.json({
      message: "SUCCESS",
      token,
    });
  };
}

module.exports = LoginController;
