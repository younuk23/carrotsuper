import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { typo, theme } from "../../../styles";

export function BottomBar() {
  return (
    <View style={styles.topContainer}>
      <View style={styles.container}>
        <View style={styles.heartAndPrice}>
          <TouchableOpacity style={styles.heartContainer}>
            <AntDesign name="hearto" size={24} color="rgba(0,0,0,0.5)" />
          </TouchableOpacity>
          <Text style={typo.price}>100,000원</Text>
        </View>
        <View style={styles.requestContainer}>
          <Text style={typo.requestDeal}>거래요청하기!</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    marginBottom: 30,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    borderColor: "rgba(0,0,0,0.05)",
    borderTopWidth: 1,
  },
  heartContainer: {
    paddingLeft: 5,
    paddingRight: 15,
    paddingVertical: 10,
    marginVertical: 10,
    marginRight: 15,
    borderColor: "rgba(0,0,0,0.1)",
    borderRightWidth: 1,
  },
  heartAndPrice: {
    flexDirection: "row",
    alignItems: "center",
  },
  requestContainer: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 5,
    backgroundColor: theme.orange,
  },
});
