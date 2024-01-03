import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { AppNavigator } from "./src/navigation";

export const App = () => {
  return (
<NavigationContainer>
  <AppNavigator />
</NavigationContainer>
  )
}