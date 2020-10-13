import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { typo } from "~/styles";

interface UserSaleItemType {
  imgSource: string;
  title: string;
  price: string;
}

const UserSaleItem: React.FC<UserSaleItemType> = ({
  imgSource,
  title,
  price,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: imgSource,
          }}
          loadingIndicatorSource={{
            uri: "https://www.analogouscolors.com/png/dcdcdc.png",
          }}
          resizeMode="cover"
        />
      </View>
      <View style={{ maxWidth: CONTENT_SIZE - 20 }}>
        <Text
          style={[typo.detailMoreListTitle, styles.textMargin]}
          ellipsizeMode="tail"
          numberOfLines={1}
        >
          {`${title} `}
        </Text>
        <Text style={[typo.price, styles.textMargin]}>{price}</Text>
      </View>
    </View>
  );
};

const CONTENT_SIZE = Dimensions.get("window").width / 2 - 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
    marginVertical: 10,
  },
  imageContainer: {
    width: CONTENT_SIZE,
    height: CONTENT_SIZE,
  },
  image: {
    flex: 1,
    borderRadius: 5,
  },
  textMargin: {
    marginTop: 10,
  },
});

export { UserSaleItem };
