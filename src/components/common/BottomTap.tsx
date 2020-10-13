import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SimpleLineIcons, FontAwesome } from "@expo/vector-icons";
import { ProductListScreen } from "~/views/productList";
import { PostPageContainer } from "~/views/postPage";
import { UserManagementContainer } from "~/views/userManagement";
import { theme } from "~/styles";

const Tab = createBottomTabNavigator();

export const BottomTap = () => {
  return (
    <Tab.Navigator
      initialRouteName="ProductList"
      tabBarOptions={{ activeTintColor: theme.orange }}
    >
      <Tab.Screen
        name="ProductList"
        component={ProductListScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="PostPage"
        component={PostPageContainer}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="pencil" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="UserManagement"
        component={UserManagementContainer}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-o" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
