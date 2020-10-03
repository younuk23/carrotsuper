import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Header } from "~/components/productList";
import { ProductListScreen } from "~/views/productList";
import { ProductDetailScreen } from "~/views/productDetail";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="productList"
          component={ProductListScreen}
          options={{
            headerTitle: () => <Header location="서울시 강남구" />,
            // 추후 백엔드 데이터와 redux로 연동해서 location부분 선택기능 추가할 예정
            headerTitleContainerStyle: {
              flex: 1,
            },
          }}
        /> */}
        <Stack.Screen
          name="productDetail"
          component={ProductDetailScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
