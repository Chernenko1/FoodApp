import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { AppNavigator } from "./src/navigation";
import {store, persistor} from './src/store/store'
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

export const App = () => {
  return (
    <PersistGate persistor={persistor} loading={null}>
      <Provider store={store}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer> 
      </Provider>
    </PersistGate>
  )
}