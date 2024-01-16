import React from "react";

import {
    createNativeStackNavigator,
    NativeStackNavigationOptions,
  } from '@react-navigation/native-stack';
import { Creation } from "../../components/CreationScreens/Creation";
import { SecondStep } from "../../components/CreationScreens/StepScreens/SecondStep";

  const nativeStackOption: NativeStackNavigationOptions = {
    headerStyle: {backgroundColor: 'rgb(242,242,242)'},
    headerShadowVisible: false,
    headerShown: false
  };

  export type CreationParamList ={
    StackCreation: undefined
    SecondStep: {}
  }

  const Stack = createNativeStackNavigator<CreationParamList>();

  export const CreationStack = () => {
    return (
        <Stack.Navigator screenOptions={nativeStackOption}>
            <Stack.Screen name="StackCreation" component={Creation} options={{headerTitle: 'Новый рецепт'}}/>
            <Stack.Screen name="SecondStep" component={SecondStep} options={{headerTitle: 'Новый рецепт'}}/>
        </Stack.Navigator>
    )
  }