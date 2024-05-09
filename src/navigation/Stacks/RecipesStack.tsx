import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {Recipes} from 'components/containers/Recipes/Recipes';
import React from 'react';

const nativeStackOption: NativeStackNavigationOptions = {
  headerShown: false,
  headerShadowVisible: false,
};

const Stack = createNativeStackNavigator<RecipesParamList>();

export const RecipesStack = () => {
  return (
    <Stack.Navigator screenOptions={nativeStackOption}>
      <Stack.Screen name="RecipesStack" component={Recipes} />
    </Stack.Navigator>
  );
};
