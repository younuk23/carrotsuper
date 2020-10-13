import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, View, FlatList } from "react-native";
import { ListItem } from "~/components/productList/";
import { addFetchData } from "~/modules/productDetail/thunk";
import { useGetUserSales } from "~/hooks/useGetData";

const LIMIT = 10;

interface IProps {
  id: number;
  title: string;
  price: number;
  product_images: { image_url: string }[];
  user: { address: string };
  like_count: number;
}

export default function TradingItems({ navigation }: any) {
  const userSales = useGetUserSales();
  const [offset, setOffset] = useState(10);

  useEffect(() => {
    addFetchData(offset);
  }, [offset]);
  // 추후 offset을 쓸 경우 코드 추가 예정

  const renderItem: React.FC<{ item: IProps }> = ({
    item: { id, title, price, product_images, user, like_count },
  }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("productDetail", {
            id: id,
          })
        }
      >
        <ListItem
          title={title}
          productId={id}
          price={price}
          imgUrl={product_images[0].image_url}
          address={user.address}
          likeCount={like_count}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: "flex-start" }}>
      <FlatList
        data={userSales}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        onEndReached={() => {
          setOffset(offset + LIMIT);
        }}
        onEndReachedThreshold={0.8}
        ListEmptyComponent={<Text>"렌더중"</Text>}
      />
    </View>
  );
}
