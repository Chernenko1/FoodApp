import React from "react";

import {
    createNativeStackNavigator,
    NativeStackNavigationOptions,
  } from '@react-navigation/native-stack';
import { Home } from "../../components/HomeScreens/Home";

  const nativeStackOption: NativeStackNavigationOptions = {
    headerShown: false,
  };

  export type FavouriteParamList ={
    StackFavourite: undefined
  }

  const Stack = createNativeStackNavigator<FavouriteParamList>();

  export const FavouriteStack = () => {
    return (
        <Stack.Navigator screenOptions={nativeStackOption}>
            <Stack.Screen name="StackFavourite" component={Home}/>
        </Stack.Navigator>
    )
  }