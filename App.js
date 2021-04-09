import React from "react";
import Home from "./screens/Home";
import InputScreen from "./screens/InputScreen";
import ResultScreen from "./screens/ResultScreen";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Image } from "react-native";
import styles from "./styles";

var HomePic = require("./assets/HomePic.png");
const Stack = createStackNavigator();
let customHeader = {
  headerTransparent: false,
  // eslint-disable-next-line react/display-name
  headerBackground: () => (
    <Image flex={2} source={HomePic} style={styles.imageHead} />
  ),
  headerTitleStyle: {
    fontWeight: "bold",
  },
  headerTintColor: "#fff",
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={customHeader}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Information" component={InputScreen} />
        <Stack.Screen name="Results" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
