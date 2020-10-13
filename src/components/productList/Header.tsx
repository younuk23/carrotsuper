import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { typo } from "~/styles";

interface IProps {
  location: string;
}

export const Header: React.FunctionComponent<IProps> = ({ location }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.titleWrapper}>
        <Text style={typo.title}>{location}</Text>
        <View style={styles.iconWrapper}>
          <AntDesign name="search1" size={24} color="black" />
          <MaterialCommunityIcons
            name="reorder-horizontal"
            size={24}
            color="black"
          />
          <FontAwesome name="bell-o" size={24} color="black" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
  },
  titleWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "white",
  },

  iconWrapper: {
    flex: 0.4,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
