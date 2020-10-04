import { useSelector } from "react-redux";

export const useGetDetailData = () => {
  const detailData = useSelector(
    ({ productDetail: { detailData } }: any) => detailData
  );

  return detailData;
};

export const useGetUserSales = () => {
  const userSales = useSelector(
    ({ productDetail: { userSales } }: any) => userSales
  );

  return userSales;
};
