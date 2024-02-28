import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text, View, useColorScheme } from "react-native";
import { AppNavigator } from "./src/navigation";
import {store, persistor} from './src/store/store'
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import { LightTheme } from "./src/themes/lightTheme";
import { DarkTheme } from "./src/themes/darkTheme";

export const App = () => {

  const scheme = useColorScheme()

  return (
    <PersistGate persistor={persistor} loading={null}>
      <Provider store={store}>
        <NavigationContainer theme={scheme === 'dark' ? LightTheme : DarkTheme}>
          <AppNavigator />
        </NavigationContainer> 
      </Provider>
    </PersistGate>
  )
}