import axios from "axios";
import { getUserSales, getDetailData } from "./productDetail";

const LIMIT = 10;
const API = `192.168.1.23`;

export const fetchUserSales = (userId: number = 1) => {
  return async (dispatch: any) => {
    try {
      const productData = await axios.get(
        `http://${API}:4000/products/${userId}`
      );
      dispatch(getUserSales(productData.data.productDetail));
    } catch (e) {
      console.error("ERROR!!!", e);
    }
  };
};

//store type은 추후 적용 예정
export const addFetchData = (offset: number = 10) => async (
  dispatch: any,
  getState: () => { productDetail: any }
) => {
  const {
    productDetail: { userSales },
  } = getState();
  try {
    const productData = await axios.post(`http://${API}:4000`, {
      offset: offset,
      limit: LIMIT,
    });
    dispatch(getUserSales([...userSales, ...productData.data.productDetail]));
  } catch (e) {
    console.error("ERROR!!!", e);
  }
};

export const fetchDetailData = (id: number = 1) => async (dispatch: any) => {
  try {
    const productData = await axios.get(`http://${API}:4000/product/${id}`);
    dispatch(getDetailData(productData.data.productDetail));
  } catch (e) {
    console.error("ERROR!!!", e);
  }
};
