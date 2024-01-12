import React from "react";

import {
    createNativeStackNavigator,
    NativeStackNavigationOptions,
  } from '@react-navigation/native-stack';
import { Favourite } from "../../components/FavouritesScreens/Favourite";

  const nativeStackOption: NativeStackNavigationOptions = {
    headerShown: true,
    headerStyle: {backgroundColor: 'rgb(242,242,242)'},
    headerShadowVisible: false
  };

  export type FavouriteParamList ={
    StackFavourite: undefined
  }

  const Stack = createNativeStackNavigator<FavouriteParamList>();

  export const FavouriteStack = () => {
    return (
        <Stack.Navigator screenOptions={nativeStackOption}>
            <Stack.Screen name="StackFavourite" component={Favourite} options={{headerTitle: 'Favourites'}}/>
        </Stack.Navigator>
    )
  }