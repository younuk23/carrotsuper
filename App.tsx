import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  ProductDetailContainer,
  MoreUserItemsContainer,
} from "~/views/productDetail";
import { LoginContainer } from "~/views/login";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootReducer from "~/modules";
import { Provider } from "react-redux";
import { BottomTap } from "~/components/common";
import { CameraScreen } from "~/views/postPage";

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
          <Stack.Screen name="login" component={LoginContainer} />
          <Stack.Screen
            name="productList"
            component={BottomTap}
            options={{ headerShown: false }}
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
          <Stack.Screen name="Camera" component={CameraScreen} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
