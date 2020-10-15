const { products, product_images, categories, users } = require("../../models");
import { IProductDetail } from "./productDetail.interface";

class ProductDetailService {
  getProductDetail = async (
    id: string | number = "1"
  ): Promise<IProductDetail> => {
    const product = await products.findOne({
      attributes: [
        `id`,
        `title`,
        `price`,
        `view`,
        `like_count`,
        `user_id`,
        `description`,
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
