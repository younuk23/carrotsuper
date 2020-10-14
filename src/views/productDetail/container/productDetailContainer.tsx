import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useGetDetailData, useGetUserSales } from "~/hooks/useGetData";
import { ProductDetailScreen } from "../screens/ProductDetailScreen";
import { fetchDetailData, fetchUserSales } from "~/modules/productDetail/thunk";

export function ProductDetailContainer({ route, navigation }: any) {
  const dispatch = useDispatch();
  const userSales = useGetUserSales();
  const detailData = useGetDetailData();

  useEffect(() => {
    setDetailData();
  }, []);

  const setDetailData = () => {
    dispatch(fetchDetailData(route.params.id));
  };

  if (Object.keys(detailData).length < 1) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>요청에 실패했습니다. 재접속 해주세요</Text>
      </View>
    );
  }

  return <ProductDetailScreen navigation={navigation} />;
}
