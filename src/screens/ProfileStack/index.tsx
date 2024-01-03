import React from "react";

import {
    createNativeStackNavigator,
    NativeStackNavigationOptions,
  } from '@react-navigation/native-stack';
import { Home } from "../../components/HomeScreens/Home";

  const nativeStackOption: NativeStackNavigationOptions = {
    headerShown: false,
  };

  export type ProfileParamList ={
    StackProfile: undefined
  }

  const Stack = createNativeStackNavigator<ProfileParamList>();

  export const ProfileStack = () => {
    return (
        <Stack.Navigator screenOptions={nativeStackOption}>
            <Stack.Screen name="StackProfile" component={Home}/>
        </Stack.Navigator>
    )
  }