import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { theme } from "~/styles";

export default function TradedItems() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.text}>거래된 상품이 없네요 ㅠㅠ</Text>
        <FontAwesome5 name="carrot" size={24} color={theme.orange} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 21,
    fontWeight: "600",
    marginRight: 10,
  },
});
