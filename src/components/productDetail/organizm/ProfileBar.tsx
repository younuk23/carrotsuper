import React from "react";
import { StyleSheet, View } from "react-native";
import { Manner, Profile } from "../";

export function ProfileBar() {
  return (
    <View style={styles.container}>
      <Profile />
      <Manner />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 15,
    paddingVertical: 13,
    borderColor: "rgba(0,0,0,0.1)",
    borderBottomWidth: 1,
  },
});
