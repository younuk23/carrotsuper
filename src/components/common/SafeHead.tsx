import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { typo } from "~/styles";

export const SafeHead = ({ title }: { title: string }) => {
  return (
    <SafeAreaView style={styles.topBar}>
      <View style={styles.titleBox}>
        <Text style={typo.tabTitle}>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
    borderBottomColor: "rgba(0,0,0,0.3)",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  titleBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 15,
  },
});
