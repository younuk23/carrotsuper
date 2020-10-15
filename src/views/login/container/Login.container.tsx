import React, { useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { Login } from "../screens/Login";
import { requestLogin } from "~/api/login";

export const LoginContainer: React.FunctionComponent = ({
  navigation,
}: any) => {
  const [formData, setFormData] = useState({
    mobile: "",
    name: "",
  });

  const handleChange = (text: string, target: "mobile" | "name") => {
    setFormData({ ...formData, [target]: text });
  };

  const handleSubmit = async () => {
    try {
      const { message, token } = await requestLogin(formData);
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
    <Login
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      navigation={navigation}
    />
  );
};
