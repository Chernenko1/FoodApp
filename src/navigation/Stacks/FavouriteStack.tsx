import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {Favourite} from '../../components/containers/Favourites/Favourite';

const nativeStackOption: NativeStackNavigationOptions = {
  headerShown: true,
  headerShadowVisible: false,
};

export type FavouriteParamList = {
  StackFavourite: undefined;
};

const Stack = createNativeStackNavigator<FavouriteParamList>();

export const FavouriteStack = () => {
  return (
    <Stack.Navigator screenOptions={nativeStackOption}>
      <Stack.Screen
        name="StackFavourite"
        component={Favourite}
        options={{headerTitle: 'Favourites'}}
      />
    </Stack.Navigator>
  );
};
