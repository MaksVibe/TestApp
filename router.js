import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PhotoList from "./Screens/PhotoListScreen/PhotoListScreen";
import Photo from "./Screens/PhotoScreen/PhotoScreen";

const MainStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = isAuth => {
  if (!isAuth) {
    return (
      <MainStack.Navigator initialRouteName="Photos">
        <MainStack.Screen
          name="Photos"
          component={PhotoList}
          options={{ headerShown: false }}
        />
      </MainStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          shadowOffset: { width: 0, height: -0.3 },
          shadowOpacity: 0.3,
          shadowRadius: -27.1828,
          paddingTop: 4,
        },
      }}
    >
      <MainTab.Screen name="Photos" component={PhotoList} />
      <MainTab.Screen name="Photo" component={Photo} />
    </MainTab.Navigator>
  );
};
