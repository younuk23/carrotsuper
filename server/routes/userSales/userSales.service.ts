const { products, product_images, categories, users } = require("../../models");

class UserSalesService {
  getProducts = async (userId = "1") => {
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
