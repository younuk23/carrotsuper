import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SimpleLineIcons, FontAwesome } from "@expo/vector-icons";
import { ProductListScreen } from "~/views/productList";
import { PostPageContainer } from "~/views/postPage";
import { UserManagementContainer } from "~/views/userManagement";
import { theme } from "~/styles";

const Tab = createBottomTabNavigator();

export const BottomTap = ({ navigation }: any) => {
  const callPostPage = () => {
    return <PostPageContainer navigation={navigation} />;
  };

  return (
    <Tab.Navigator
      initialRouteName="ProductList"
      tabBarOptions={{ activeTintColor: theme.orange }}
    >
      <Tab.Screen
        name="ProductList"
        component={ProductListScreen}
        options={{
          tabBarLabel: "홈",
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="PostPage"
        component={callPostPage}
        options={{
          tabBarLabel: "글쓰기",
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="pencil" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="UserManagement"
        component={UserManagementContainer}
        options={{
          tabBarLabel: "나의 당근",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-o" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
