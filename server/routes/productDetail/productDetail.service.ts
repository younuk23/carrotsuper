const { products, product_images, categories, users } = require("../../models");

class ProductDetailService {
  getProductDetail = async (id = "1") => {
    const product = await products.findOne({
      attributes: [
        `id`,
        `title`,
        `price`,
        `user_id`,
        `description`,
        `view`,
        `like_count`,
      ],
      where: {
        id: Number(id),
      },
      include: [
        {
          model: product_images,
          attributes: ["image_url"],
        },
        { model: categories, attributes: ["name"] },
        {
          model: users,
          attributes: ["address", "name", "manner"],
        },
      ],
    });
    return product;
  };
}

export default ProductDetailService;
