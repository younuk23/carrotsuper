import { get, post } from "./service";

const LIMIT = 10;

export const fetchUserSales = (userId: number) => {
  return get(`/users/${userId}`);
};

export const addFetchData = (offset: number) => {
  return post("/products", {
    offset: offset,
    limit: LIMIT,
  });
};

export const fetchDetailData = (id: number) => {
  return get(`/products/${id}`);
};
