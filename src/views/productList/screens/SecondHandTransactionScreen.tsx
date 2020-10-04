import React, { useState } from "react";
import { View, FlatList, Text } from "react-native";
import { ListItem } from "~/components/productList";

export const SecondHandTransactionScreen = () => {
  const arr = Array(10).fill(1);
  const [list, setList] = useState(arr);

  return (
    <View style={{ flex: 1, justifyContent: "flex-start" }}>
      <FlatList
        data={list}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <ListItem />}
        onEndReached={() => {
          console.log("reached");
          setList([...list, arr]);
        }}
        onEndReachedThreshold={1}
        ListEmptyComponent={<Text>"렌더중"</Text>}
      />
    </View>
  );
};
