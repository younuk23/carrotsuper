import { post } from "./service";

export const requestProductList = (offset?: number, limit?: number) => {
  return post("/productlist", { offset, limit });
};
