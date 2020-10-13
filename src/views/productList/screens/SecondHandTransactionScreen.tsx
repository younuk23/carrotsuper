import React, { useState, useEffect, useRef } from "react";
import axios, { AxiosResponse } from "axios";
import { View, FlatList, Text } from "react-native";
import { ListItem } from "~/components/productList";
import { TouchableOpacity } from "react-native-gesture-handler";
import { BottomTap } from "~/components/common/BottomTap";

type ProductImg = {
  image_url: string;
};

interface IProduct {
  id: number;
  title: string;
  price: number;
  view: number;
  like_count: number;
  user: {
    address: string;
  };
  product_images: Array<ProductImg>;
}

const API = `192.168.1.23`;

export const SecondHandTransactionScreen = ({ navigation }: any) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const offset = useRef(0);
  const limit = useRef(10);
  const isLoading = useRef(false);

  useEffect(() => {
    (async () => {
      try {
        const productList = await requestProductList();
        setProducts(productList);
        offset.current = offset.current + 10;
      } catch (e) {
        console.log(e);
        alert("요청에 실패했습니다.");
      }
    })();
  }, []);

  const requestProductList = async (offset?: number, limit?: number) => {
    try {
      const { data } = await axios.post(`http://${API}:4000/products`, {
        offset,
        limit,
      });
      return data.productList;
    } catch (e) {
      console.log(e);
      alert("요청에 실패했습니다.");
    }
  };

  const pagenation = async () => {
    if (isLoading.current) {
      return;
    }

    try {
      isLoading.current = true;
      const productList = await requestProductList(
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
          renderItem={({ item }) => {
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
          }}
          onEndReached={pagenation}
          onEndReachedThreshold={1}
          ListEmptyComponent={<Text>"렌더중"</Text>}
        />
      </View>
      {/* <BottomTap /> */}
    </>
  );
};
