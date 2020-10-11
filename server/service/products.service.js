const { products, product_images, categories, users } = require("../models");

class ProductService {
  getProductList = async (offset, limit) => {
    const productList = await products.findAll({
      attributes: [`id`, `title`, `price`, `view`, `like_count`],
      include: [
        {
          model: product_images,
          attributes: ["image_url"],
          limit: 1,
        },
        { model: categories, attributes: ["name"] },
        {
          model: users,
          attributes: ["address"],
        },
      ],
      offset: Number(offset) || 0,
      limit: Number(limit) || 10,
    });
    return productList;
  };
}

module.exports = ProductService;
