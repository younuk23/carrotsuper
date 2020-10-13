import React from "react";
import { StyleSheet, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SecondHandTransactionScreen } from "./SecondHandTransactionScreen";
import { VillageLifeScreen } from "./VillageLifeScreen";
import { typo, theme } from "~/styles";
import { Header } from "~/components/productList";
import { StatusBar } from "expo-status-bar";

const Tab = createMaterialTopTabNavigator();

export const ProductListScreen = ({ navigation }: any) => {
  const callSecondHandScreen = () => {
    return <SecondHandTransactionScreen navigation={navigation} />;
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <View style={{ flexDirection: "row" }}>
        <Header location="서울시 강남구" />
      </View>
      <Tab.Navigator
        initialRouteName="secondHandTransaction"
        tabBarOptions={{
          labelStyle: { ...typo.tabTitle },
          style: {
            backgroundColor: theme.backgroundColor,
            borderBottomColor: theme.borderColor,
            borderBottomWidth: StyleSheet.hairlineWidth,
          },
          indicatorStyle: { backgroundColor: "black" },
        }}
      >
        <Tab.Screen
          name="secondHandTransaction"
          component={callSecondHandScreen}
          options={{ tabBarLabel: "중고거래" }}
        />
        <Tab.Screen
          name="villageLife"
          component={VillageLifeScreen}
          options={{ tabBarLabel: "동네생활" }}
        />
      </Tab.Navigator>
    </View>
  );
};
