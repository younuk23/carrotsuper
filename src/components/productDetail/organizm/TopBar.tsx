import React from "react";
import { Feather, Ionicons, Entypo } from "@expo/vector-icons";
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";

export function TopBar() {
  return (
    <SafeAreaView style={styles.topContainer}>
      <View style={styles.topbar}>
        <TouchableOpacity>
          <Ionicons name="md-arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.center}>
          <TouchableOpacity style={styles.iconStyle}>
            <Feather name="share" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconStyle}>
            <Entypo name="dots-three-vertical" size={13} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    borderBottomColor: "rgba(0,0,0,0.2)",
    borderBottomWidth: 1,
  },
  topbar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  center: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconStyle: {
    padding: 10,
  },
});
