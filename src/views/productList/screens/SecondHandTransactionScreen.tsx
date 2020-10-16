import React, { useState, useEffect, useRef } from "react";
import { View, FlatList, Text } from "react-native";
import { ListItem } from "~/components/productList";
import { TouchableOpacity } from "react-native-gesture-handler";
import { IProductItem, IProductList } from "../../../../server/routes";
import { requestProductList } from "~/api/productList";

export const SecondHandTransactionScreen = ({ navigation }: any) => {
  const [products, setProducts] = useState<IProductList>([]);
  const offset = useRef(0);
  const limit = useRef(10);
  const isLoading = useRef(false);

  useEffect(() => {
    (async () => {
      try {
        const { productList } = await requestProductList();
        setProducts(productList);
        offset.current = offset.current + 10;
      } catch (e) {
        console.log(e);
        alert("요청에 실패했습니다.");
      }
    })();
  }, []);

  const pagenation = async () => {
    if (isLoading.current) {
      return;
    }

    try {
      isLoading.current = true;
      const { productList } = await requestProductList(
        offset.current,
        limit.current
      );
      setProducts([...products, ...productList]);
      offset.current = (offset.current + 10) % 20;
    } catch (err) {
      console.log(err);
    } finally {
      isLoading.current = false;
    }
  };

  const renderItem = ({ item }: { item: IProductItem }) => {
    const {
      id,
      title,
      price,
      like_count,
      product_images,
      user: { address },
    } = item;
    const { image_url } = product_images[0];
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("productDetail", {
            id: id,
          })
        }
      >
        <ListItem
          productId={id}
          title={title}
          imgUrl={image_url}
          price={price}
          likeCount={like_count}
          address={address}
        />
      </TouchableOpacity>
    );
  };

  if (!products) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>요청에 실패했습니다. 재접속 해주세요</Text>
      </View>
    );
  }

  return (
    <>
      <View style={{ flex: 1, justifyContent: "flex-start" }}>
        <FlatList
          data={products}
          keyExtractor={(item, idx) => idx.toString()}
          renderItem={renderItem}
          onEndReached={pagenation}
          onEndReachedThreshold={0.7}
          ListEmptyComponent={<Text>"렌더중"</Text>}
        />
      </View>
    </>
  );
};
