const express = require("express");
const UserSalesService = require("../service/userSales.service");

class UserSalesController {
  router = express.Router();
  path = "/products";

  constructor() {
    this.service = new UserSalesService();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get(`${this.path}/:userId`, this.sendProductList);
  }

  sendProductList = async (req, res) => {
    const { userId } = req.params;
    const productDetail = await this.service.getProducts(userId);
    if (!productDetail) {
      return res.status(400).json({
        message: "request is failed",
      });
    }
    return res.status(200).json({ productDetail });
  };
}

module.exports = UserSalesController;
