import { Router, Response, Request } from "express";
import ProductDetailService from "./productDetail.service";

class ProductDetailController {
  public router = Router();
  public path = "/products";
  public service: ProductDetailService;

  constructor() {
    this.service = new ProductDetailService();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get(`${this.path}/:id`, this.sendProductList);
  }

  sendProductList = async (req: Request, res: Response) => {
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

export { ProductDetailController };
