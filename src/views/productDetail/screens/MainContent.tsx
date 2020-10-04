import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { typo } from "~/styles";

interface Props {
  title: string;
  category: string;
  description: string;
  view: number;
  likeCount: number;
}

const MainContent: React.FC<Props> = ({
  title,
  category,
  description,
  view,
  likeCount,
}) => {
  return (
    <View style={styles.container}>
      <Text style={[typo.title, styles.title]}>{title}</Text>
      <Text style={[typo.listAddress, styles.category]}>{category}</Text>
      <Text style={[typo.description, styles.decription]}>{description}</Text>
      <View style={styles.likes}>
        <Text style={typo.listAddress}>
          관심 {likeCount} 조회 {view}
        </Text>
      </View>
      <TouchableOpacity style={styles.report}>
        <Text style={[typo.description, { fontWeight: "600" }]}>
          이 게시글 신고하기
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainContent;

const styles = StyleSheet.create({
  container: {
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
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.05)",
  },
  report: {
    paddingVertical: 20,
    alignItems: "flex-start",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.05)",
  },
});
