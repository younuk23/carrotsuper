import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { typo } from "~/styles";

interface Props {
  name: string;
  address: string;
}

const Profile: React.FC<Props> = ({ name, address }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileImg}>
        <MaterialCommunityIcons name="face-profile" size={24} color="black" />
      </View>
      <View>
        <Text style={typo.author}>{name}</Text>
        <Text style={typo.listAddress}>{address}</Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImg: {
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: 30,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    marginRight: 8,
  },
});
