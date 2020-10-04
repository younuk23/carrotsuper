import React, { useState, useRef } from "react";
import Axios from "axios";
import {
  StyleSheet,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { typo, theme } from "~/styles";

export const Login: React.FunctionComponent = () => {
  const [mobile, setMobile] = useState("");
  const [pw, setPw] = useState("");
  const formData = useRef({
    mobile,
    pw,
  });

  const handleSubmit = () => {
    // axios.post({ loginData: formData.current });
  };

  return (
    <SafeAreaView style={styles.view}>
      <View style={styles.inputContainer}>
        <TextInput
          style={[typo.title, styles.input]}
          placeholder={"핸드폰 번호를 입력하세요"}
          onChangeText={(text) => setMobile(text)}
          defaultValue={mobile}
        />
        <TextInput
          style={[typo.title, styles.input]}
          placeholder={"비밀번호를 입력하세요"}
          onChangeText={(text) => setPw(text)}
          defaultValue={pw}
        />
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <View style={{ position: "relative", right: 20 }}>
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
});
