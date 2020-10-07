const express = require("express");
const app = express();
const morgan = require("morgan");
const { sequelize } = require("./models/index");
const LoginController = require("./api/login");
const ProductController = require("./api/products");

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("database연동 성공");
  })
  .catch((err) => console.log(err));

app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const login = new LoginController();
const product = new ProductController();

app.use("/login", login.router);
app.use("/products", product.router);

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
  res.status(err.status || 500);
  res.send(err);
});

app.listen(4000, () => {
  console.log("listenning 4000");
});
