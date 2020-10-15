import { IProductImage } from "../productlist/productlist.interface";

export interface IProductDetail {
  id: number;
  title: string;
  price: number;
  view: number;
  like_count: number;
  userId: number;
  description: string;
  categories: {
    name: string;
  };
  users: {
    address: string;
    name: string;
    manner: number;
  };
  product_images: IProductImage[];
}
