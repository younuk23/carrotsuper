export interface IProductImage {
  image_url: string;
}

export interface IProductItem {
  id: number;
  title: string;
  price: number;
  view: number;
  like_count: number;
  category: {
    name: string;
  };
  user: {
    address: string;
  };
  product_images: IProductImage[];
}

export type IProductList = IProductItem[];
