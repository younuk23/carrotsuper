import { Router, Request, Response } from "express";
import ProductListService from "./productlist.service";

class ProductListController {
  public router = Router();
  public path = "/productlist";
  public service: ProductListService;

  constructor() {
    this.service = new ProductListService();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post(`${this.path}`, this.sendProductList);
  }

  sendProductList = async (req: Request, res: Response) => {
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

export { ProductListController };
