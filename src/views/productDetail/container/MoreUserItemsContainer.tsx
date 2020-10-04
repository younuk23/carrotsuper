import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Header } from "~/components/productDetail";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TotalUserSales from "../screens/TotalUserSales";
import TradingItems from "../screens/TradingItems";
import TradedItems from "../screens/TradedItems";
import { typo, theme } from "~/styles";

export function MoreUserItemsContainer({ navigation }: any) {
  const Tab = createMaterialTopTabNavigator();

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <View style={{ flexDirection: "row" }}>
        <Header navigation={navigation} title={"판매 상품 보기"} />
      </View>
      <Tab.Navigator
        initialRouteName="TotalUserSales"
        tabBarOptions={{
          labelStyle: typo.listTitle,
          style: {
            backgroundColor: theme.backgroundColor,
            borderBottomColor: theme.borderColor,
            borderBottomWidth: StyleSheet.hairlineWidth,
          },
          indicatorStyle: { backgroundColor: "black" },
        }}
      >
        <Tab.Screen
          name="TotalUserSales"
          component={TotalUserSales}
          options={{ tabBarLabel: "전체" }}
        />
        <Tab.Screen
          name="TradingItems"
          component={TradingItems}
          options={{ tabBarLabel: "거래중" }}
        />
        <Tab.Screen
          name="TradedItems"
          component={TradedItems}
          options={{ tabBarLabel: "거래완료" }}
        />
      </Tab.Navigator>
    </View>
  );
}
