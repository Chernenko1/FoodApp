import React from "react";

import {
    createNativeStackNavigator,
    NativeStackNavigationOptions,
  } from '@react-navigation/native-stack';
import { Favourite } from "../../components/FavouritesScreens/Favourite";

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
            <Stack.Screen name="StackFavourite" component={Favourite}/>
        </Stack.Navigator>
    )
  }