import { IProductImage } from "../productlist/productlist.interface";

export interface IUserSale {
  id: number;
  title: string;
  price: number;
  user_id: number;
  view: number;
  like_count: number;
  categories: {
    name: string;
  };
  users: {
    address: string;
    name: string;
  };
  product_images: IProductImage[];
}

export type IUserSales = IUserSale[];
