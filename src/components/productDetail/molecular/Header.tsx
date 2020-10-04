import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export function Header({ navigation, title }: any) {
  return (
    <SafeAreaView
      style={{ flex: 1, flexDirection: "row", backgroundColor: "white" }}
    >
      <View style={styles.topBarContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ padding: 10 }}
        >
          <Ionicons name="md-arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <View style={{ width: 24, marginRight: 10 }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topBarContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 10,
    borderBottomColor: "rgba(0,0,0,0.1)",
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
  },
});
