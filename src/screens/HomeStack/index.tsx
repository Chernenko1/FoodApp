import React from "react";

import {
    createNativeStackNavigator,
    NativeStackNavigationOptions,
  } from '@react-navigation/native-stack';
import { Home } from "../../components/HomeScreens/Home";

  const nativeStackOption: NativeStackNavigationOptions = {
    headerShown: false,
  };

  export type HomeParamList ={
    StackHome: undefined
  }

  const Stack = createNativeStackNavigator<HomeParamList>();

  export const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={nativeStackOption}>
            <Stack.Screen name="StackHome" component={Home}/>
        </Stack.Navigator>
    )
  }