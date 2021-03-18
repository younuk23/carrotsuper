import App from "./index";
import { LoginController } from "./routes/login";
import { ProductListController } from "./routes/productlist";
import { ProductDetailController } from "./routes/productDetail";
import { UserSalesController } from "./routes/userSales";

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
