import React from "react";

import {
    createNativeStackNavigator,
    NativeStackNavigationOptions,
  } from '@react-navigation/native-stack';
import { Creation } from "../../components/CreationScreens/Creation";

  const nativeStackOption: NativeStackNavigationOptions = {
    headerShown: false,
    headerStyle: {backgroundColor: 'rgb(242,242,242)'},
    headerShadowVisible: false
  };

  export type CreationParamList ={
    StackCreation: undefined
  }

  const Stack = createNativeStackNavigator<CreationParamList>();

  export const CreationStack = () => {
    return (
        <Stack.Navigator screenOptions={nativeStackOption}>
            <Stack.Screen name="StackCreation" component={Creation}/>
        </Stack.Navigator>
    )
  }