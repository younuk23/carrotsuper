import React from "react";
import { Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { typo, theme } from "~/styles";

export const PostPage = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ flexDirection: "row" }}>
        <FontAwesome5 name="carrot" size={24} color={theme.orange} />
        <Text style={[typo.title, { marginLeft: 10 }]}>
          준비 중인 서비스입니다.
        </Text>
      </View>
    </View>
  );
};
