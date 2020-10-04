import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { typo } from "../../../styles";

export function MainContent() {
  return (
    <View style={styles.container}>
      <Text style={[typo.title, styles.title]}>맥북 팔아요~!!</Text>
      <Text style={[typo.listAddress, styles.category]}>디지털/가전</Text>
      <Text style={[typo.description, styles.decription]}>
        새거같은 맥북같은 삼성 노트북 팔아요 ㅎㅎ{"\n"}
        아무대서나 구할 수 없는 노트북!{"\n"}
        안사시면 후회합니당
      </Text>
      <Text style={[typo.listAddress, styles.likes]}>관심 0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 13,
    justifyContent: "flex-start",
  },
  title: {
    paddingVertical: 10,
  },
  category: {
    paddingVertical: 5,
  },
  decription: {
    paddingVertical: 10,
    lineHeight: 25,
  },
  likes: {
    paddingVertical: 5,
  },
});
