import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { ListItem } from "~/components/productList/";
import { addFetchData } from "~/modules/productDetail/thunk";
import { useGetUserSales } from "~/hooks/useGetData";

const LIMIT = 10;

export default function TotalUserSales() {
  const userSales = useGetUserSales();
  const [offset, setOffset] = useState(10);

  useEffect(() => {
    addFetchData(offset);
  }, [offset]);
  // 추후 offset을 쓸 경우 코드 추가 예정

  return (
    <View style={{ flex: 1, justifyContent: "flex-start" }}>
      <FlatList
        data={userSales}
        keyExtractor={(item, index) => index.toString()}
        renderItem={() => <ListItem />}
        onEndReached={() => {
          setOffset(offset + LIMIT);
        }}
        onEndReachedThreshold={1}
        ListEmptyComponent={<Text>"렌더중"</Text>}
      />
    </View>
  );
}
