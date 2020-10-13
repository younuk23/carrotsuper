import React from "react";
import { StyleSheet, View } from "react-native";
import Manner from "../molecular/Manner";
import Profile from "../molecular/Profile";

type User = {
  name: string;
  address: string;
  manner: number;
};

interface Props {
  User: User;
}

export const ProfileBar: React.FC<Props> = ({
  User: { name, address, manner },
}) => {
  return (
    <View style={styles.container}>
      <Profile name={name} address={address} />
      <Manner manner={manner} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 13,
    borderColor: "rgba(0,0,0,0.05)",
    borderBottomWidth: 1,
  },
});
