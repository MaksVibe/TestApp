import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Gallery from "./Screens/GalleryScreen/GalleryScreen";
import Photo from "./Screens/PhotoScreen/PhotoScreen";

const MainStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = isAuth => {
  if (!isAuth) {
    return (
      <MainStack.Navigator initialRouteName="Gallery">
        <MainStack.Screen
          name="Gallery"
          component={Gallery}
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
      <MainTab.Screen name="Gallery" component={Gallery} />
      <MainTab.Screen name="Photo" component={Photo} />
    </MainTab.Navigator>
  );
};
