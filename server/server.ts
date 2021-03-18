import App from "./index";
import {
  LoginController,
  ProductListController,
  ProductDetailController,
  UserSalesController,
} from "./routes";

const app = new App(
  {
    login: new LoginController(),
    productList: new ProductListController(),
    productDetail: new ProductDetailController(),
    userSales: new UserSalesController(),
  },
  4000
);

app.listen();
