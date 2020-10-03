import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { typo } from "../../../styles";

export function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.profileImg}>
        <MaterialCommunityIcons name="face-profile" size={24} color="black" />
      </View>
      <View>
        <Text style={typo.author}>Name</Text>
        <Text style={typo.listAddress}>address</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImg: {
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: 30,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    marginRight: 8,
  },
});
