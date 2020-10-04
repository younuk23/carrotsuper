import React, { useEffect } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { ProductDetailScreen } from "../screens/ProductDetailScreen";
import { fetchDetailData, fetchUserSales } from "~/modules/productDetail/thunk";

export function ProductDetailContainer({ route, navigation }: any) {
  const dispatch = useDispatch();
  const { userSales, detailData } = useSelector(
    ({ productDetail: { userSales, detailData } }: any) => ({
      userSales: userSales,
      detailData: detailData,
    })
  );
  useEffect(() => {
    setDetailData();
  }, []);

  const setDetailData = () => {
    dispatch(fetchDetailData(route.params?.id || 1));
  };

  if (Object.keys(detailData).length < 1) return <View />;
  return <ProductDetailScreen navigation={navigation} />;
}
