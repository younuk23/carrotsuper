import React, { useState } from "react";
import axios from "axios";
import {
  StyleSheet,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { FontAwesome5 } from "@expo/vector-icons";
import { typo, theme } from "~/styles";

const API = `192.168.1.23`;

export const Login: React.FunctionComponent = ({ navigation }: any) => {
  const [formData, setFormData] = useState({
    mobile: "",
    name: "",
  });
  const { mobile, name } = formData;

  const handleSubmit = async () => {
    try {
      const { data } = await axios.post(`http://${API}:4000/login`, {
        ...formData,
      });
      const { message, token } = data;
      message === "SUCCESS" && successLogin(token);
    } catch (err) {
      alert(err);
    }
  };

  const successLogin = async (token: string) => {
    try {
      await AsyncStorage.setItem("user", token);
      navigation.navigate("productList");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <SafeAreaView style={styles.view}>
      <View style={styles.inputContainer}>
        <TextInput
          style={[typo.title, styles.input]}
          placeholder={"핸드폰 번호를 입력하세요"}
          onChangeText={(text) => setFormData({ ...formData, mobile: text })}
          defaultValue={mobile}
        />
        <TextInput
          style={[typo.title, styles.input]}
          placeholder={"이름을 입력하세요"}
          onChangeText={(text) => setFormData({ ...formData, name: text })}
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
