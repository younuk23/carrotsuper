import React from "react";
import { StyleSheet, Text, View } from "react-native";
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
  );
};

const styles = StyleSheet.create({
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  iconWrapper: {
    flex: 0.4,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
