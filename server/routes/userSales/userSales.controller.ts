import { Router, Request, Response } from "express";
import UserSalesService from "./userSales.service";

class UserSalesController {
  public router = Router();
  public path = "/users";
  public service: UserSalesService;

  constructor() {
    this.service = new UserSalesService();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get(`${this.path}/:userId`, this.sendProductList);
  }

  sendProductList = async (req: Request, res: Response) => {
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

export { UserSalesController };
