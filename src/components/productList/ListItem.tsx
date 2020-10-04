import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { typo } from "~/styles";

interface IProps {
  onClick?: Function;
  productId?: number;
  title?: string;
  imgUrl?: string;
  address?: string;
  price?: number;
  likeCount?: number;
}

export const ListItem: React.FunctionComponent<IProps> = ({
  onClick,
  productId,
  title = "맥북팝니다. 맥북팝니다. 맥북팝니다.",
  imgUrl = "~/images/macbook.jpeg",
  address = "대치 4동",
  price = 45000,
  likeCount = 2,
}) => {
  const { listTitle, listAddress, listLike } = typo;
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={require("~/images/macbook.jpeg")} />
      <View style={styles.description}>
        <View>
          <Text style={[listTitle, styles.text]}>{title}</Text>
          <Text style={[listAddress, styles.text]}>{address}</Text>
          <Text style={typo.price}>{price}</Text>
        </View>
        <View style={styles.likeWrapper}>
          <EvilIcons name="heart" size={24} color="black" />
          <Text style={listLike}>{likeCount}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  image: {
    flex: 1,
    height: "90%",
    maxWidth: 120,
    borderRadius: 5,
    marginRight: 20,
  },

  description: {
    flex: 1,
    height: "90%",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },

  text: {
    marginBottom: 4,
  },

  likeWrapper: {
    alignSelf: "flex-end",
    flexDirection: "row",
    paddingBottom: 10,
  },
});
