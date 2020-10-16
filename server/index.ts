import * as express from "express";
import * as bodyParser from "body-parser";
import * as morgan from "morgan";
import {
  LoginController,
  ProductListController,
  ProductDetailController,
  UserSalesController,
} from "./routes";

interface IControllers {
  login: LoginController;
  productList: ProductListController;
  productDetail: ProductDetailController;
  userSales: UserSalesController;
}

class App {
  private app: express.Application;
  private port: number;

  constructor(controllers: IControllers, port: number) {
    this.app = express();
    this.port = port;
    this.initializeMiddleware();
    this.initializeControllers(controllers);
  }

  private initializeMiddleware() {
    this.app.use(bodyParser.json());
    this.app.use(morgan("dev"));
  }

  private initializeControllers(controllers: IControllers) {
    this.app.use("/", controllers.login.router);
    this.app.use("/", controllers.productList.router);
    this.app.use("/", controllers.productDetail.router);
    this.app.use("/", controllers.userSales.router);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}

export default App;
