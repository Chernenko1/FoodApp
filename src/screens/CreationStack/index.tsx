import React from "react";

import {
    createNativeStackNavigator,
    NativeStackNavigationOptions,
  } from '@react-navigation/native-stack';
import { Home } from "../../components/HomeScreens/Home";

  const nativeStackOption: NativeStackNavigationOptions = {
    headerShown: false,
  };

  export type CreationParamList ={
    StackCreation: undefined
  }

  const Stack = createNativeStackNavigator<CreationParamList>();

  export const CreationStack = () => {
    return (
        <Stack.Navigator screenOptions={nativeStackOption}>
            <Stack.Screen name="StackCreation" component={Home}/>
        </Stack.Navigator>
    )
  }