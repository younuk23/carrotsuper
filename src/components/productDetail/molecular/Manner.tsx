import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { typo } from "~/styles";

interface Props {
  manner: number;
}

const Manner: React.FC<Props> = ({ manner }) => {
  return (
    <View>
      <View style={styles.iconContainer}>
        <Text style={typo.mannerNormal}>{manner}</Text>
        <View style={{ marginLeft: 10 }}>
          <FontAwesome5 name="smile" size={24} color="#319E45" />
        </View>
      </View>
      <Text style={styles.text}>매너온도</Text>
    </View>
  );
};
export default Manner;

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    color: "#868E96",
    textAlign: "right",
    marginRight: 3,
  },
});
