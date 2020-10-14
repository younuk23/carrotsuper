import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  GestureResponderEvent,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { typo, theme } from "~/styles";

interface IProps {
  navigation: any;
  formData: {
    mobile: string;
    name: string;
  };
  handleChange: Function;
  handleSubmit: (event: GestureResponderEvent) => void;
}

export const Login: React.FunctionComponent<IProps> = ({
  formData,
  handleChange,
  handleSubmit,
}) => {
  const { mobile, name } = formData;

  return (
    <SafeAreaView style={styles.view}>
      <View style={styles.inputContainer}>
        <TextInput
          style={[typo.title, styles.input]}
          placeholder={"핸드폰 번호를 입력하세요"}
          onChangeText={(text) => {
            handleChange(text, "mobile");
          }}
          defaultValue={mobile}
        />
        <TextInput
          style={[typo.title, styles.input]}
          placeholder={"이름을 입력하세요"}
          onChangeText={(text) => {
            handleChange(text, "name");
          }}
          defaultValue={name}
        />
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <View style={styles.iconWrapper}>
            <FontAwesome5 name="carrot" size={24} color={theme.orange} />
          </View>
          <Text style={typo.title}>로그인</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "flex-start",
  },

  inputContainer: {
    marginTop: 50,
    paddingHorizontal: 20,
    borderBottomWidth: 0,
  },

  input: {
    height: 40,
    marginBottom: 30,
    paddingHorizontal: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    fontWeight: "normal",
  },

  button: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    backgroundColor: theme.backgroundColor,
  },

  iconWrapper: {
    position: "relative",
    right: 20,
  },
});
