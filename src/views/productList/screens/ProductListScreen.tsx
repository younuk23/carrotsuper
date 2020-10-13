import React from "react";
import { StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SecondHandTransactionScreen } from "./SecondHandTransactionScreen";
import { VillageLifeScreen } from "./VillageLifeScreen";
import { typo, theme } from "~/styles";
import { BottomTap } from "~/components/common/BottomTap";

const Tab = createMaterialTopTabNavigator();

export const ProductListScreen = ({ navigation }: any) => {
  const callSecondHandScreen = () => {
    return <SecondHandTransactionScreen navigation={navigation} />;
  };

  return (
    <>
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
    </>
  );
};
