const { products, product_images, categories, users } = require("../../models");
import { IUserSales } from "./userSales.interface";

class UserSalesService {
  getProducts = async (userId: string | number = "1"): Promise<IUserSales> => {
    const productList = await products.findAll({
      attributes: [`id`, `title`, `price`, `user_id`, `view`, `like_count`],
      where: {
        user_id: Number(userId),
      },
      include: [
        {
          model: product_images,
          attributes: ["image_url"],
          limit: 1,
        },
        { model: categories, attributes: ["name"] },
        {
          model: users,
          attributes: ["address", "name"],
        },
      ],
    });
    return productList;
  };
}

export default UserSalesService;
