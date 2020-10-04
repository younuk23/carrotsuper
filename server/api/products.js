const express = require("express");
const ProductService = require("../service/products.service");

class ProductController {
  router = express.Router();
  path = "/products";

  constructor() {
    this.service = new ProductService();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post(`${this.path}`, this.sendProductList);
  }

  sendProductList = async (req, res) => {
    const { offset, limit } = req.body;
    const productList = await this.service.getProductList(offset, limit);
    if (!productList) {
      return res.status(400).json({
        message: "request is failed",
      });
    }
    return res.status(200).json({ productList });
  };
}

module.exports = ProductController;
