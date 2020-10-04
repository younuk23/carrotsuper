const express = require("express");
const ProductDetailService = require("../service/productDetail.service");

class ProductDetailController {
  router = express.Router();
  path = "/product";

  constructor() {
    this.service = new ProductDetailService();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get(`${this.path}/:id`, this.sendProductList);
  }

  sendProductList = async (req, res) => {
    const { id } = req.params;
    const productDetail = await this.service.getProductDetail(id);
    if (!productDetail) {
      return res.status(400).json({
        message: "request is failed",
      });
    }
    return res.status(200).json({ productDetail });
  };
}

module.exports = ProductDetailController;
