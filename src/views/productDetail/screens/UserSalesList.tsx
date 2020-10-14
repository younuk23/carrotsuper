import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { UserSaleItem } from "~/components/productDetail";
import { typo } from "~/styles";

interface Props {
  data: Item[];
  navigation: any;
}
interface Item {
  product_images: any;
  title: string;
  price: string;
  id: number;
  user: { name: string };
}

interface UserItemList {
  item: Item;
}

export default function UserSalesList({ data, navigation }: Props) {
  const goToMore = () => {
    navigation.navigate("moreUserItems");
  };

  const goToProductDetail = (id: number) => {
    navigation.push("productDetail", {
      id: id,
    });
  };

  const renderItem = ({
    item: { product_images, title, price, id },
  }: UserItemList) => {
    return (
      <TouchableOpacity onPress={() => goToProductDetail(id)}>
        <UserSaleItem
          imgSource={product_images[0].image_url}
          title={title}
          price={`${price.toLocaleString()}원`}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <View style={styles.topBar}>
        <Text style={[typo.tabTitle, { fontWeight: "600" }]}>
          {data[0]?.user.name}님의 판매 상품
        </Text>
        <TouchableOpacity onPress={goToMore}>
          <Text style={styles.showMore}>더보기</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={styles.flatList}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  showMore: {
    fontSize: 18,
    fontWeight: "700",
    color: "#868E96",
    marginVertical: 20,
  },
  flatList: {
    justifyContent: "space-between",
  },
});
