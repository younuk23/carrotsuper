import React from "react";
import { StyleSheet, View } from "react-native";

interface IProps {
  children: React.ReactNode;
  style?: any;
  container?: any;
}

export const FormRow: React.FC<IProps> = ({ children, style, container }) => {
  return (
    <View style={[styles.container, container]}>
      <View style={[{ flex: 1 }, style]}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomColor: "rgba(0,0,0,0.2)",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
