import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Header } from "~/components/productList";
import { ProductListScreen } from "~/views/productList";
import {
  ProductDetailContainer,
  MoreUserItemsContainer,
} from "~/views/productDetail";
import { Login } from "~/views/login";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootReducer from "~/modules";
import { Provider } from "react-redux";
import { BottomTap } from "~/components/common";

const Stack = createStackNavigator();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(ReduxThunk, sagaMiddleware)
);

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator initialRouteName="login">
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen
            name="productList"
            component={BottomTap}
            options={{
              headerTitle: () => <Header location="서울시 강남구" />,
              // 추후 백엔드 데이터와 redux로 연동해서 location부분 선택기능 추가할 예정
              headerTitleContainerStyle: {
                flex: 1,
              },
            }}
          />
          <Stack.Screen
            name="productDetail"
            component={ProductDetailContainer}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="moreUserItems"
            component={MoreUserItemsContainer}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
