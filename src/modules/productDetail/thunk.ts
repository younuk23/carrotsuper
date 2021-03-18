import axios from "axios";
import { getUserSales, getDetailData } from "./productDetail";
import {
  fetchUserSales,
  addFetchData,
  fetchDetailData,
} from "~/api/productDetail";

export const dispatchUserSales = (userId: number = 1) => {
  return async (dispatch: any) => {
    try {
      const productData = await fetchUserSales(userId);
      dispatch(getUserSales(productData.productDetail));
    } catch (e) {
      console.error("ERROR!!!", e);
    }
  };
};

//store type은 추후 적용 예정
export const dispatchFetchData = (offset: number = 10) => async (
  dispatch: any,
  getState: () => { productDetail: any }
) => {
  const {
    productDetail: { userSales },
  } = getState();
  try {
    const productData = await addFetchData(offset);
    dispatch(getUserSales([...userSales, ...productData.productDetail]));
  } catch (e) {
    console.error("ERROR!!!", e);
  }
};

export const dispatchDetailData = (id: number = 1) => async (dispatch: any) => {
  try {
    const productData = await fetchDetailData(id);
    dispatch(getDetailData(productData.productDetail));
  } catch (e) {
    console.error("ERROR!!!", e);
  }
};
