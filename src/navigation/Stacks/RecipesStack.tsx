import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React from 'react';

import {FoodCard} from 'components/common/Cards/FoodCard/FoodCard';
import {Recipe} from 'components/containers/Recipes/Recipe';
import {Recipes} from 'components/containers/Recipes/Recipes';

const nativeStackOption: NativeStackNavigationOptions = {
  headerShown: true,
  headerShadowVisible: true,
};

const Stack = createNativeStackNavigator<RecipesParamList>();

export const RecipesStack = () => {
  return (
    <Stack.Navigator screenOptions={nativeStackOption}>
      <Stack.Screen
        name="RecipesStack"
        component={Recipes}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Recipe"
        component={Recipe}
        options={{headerShown: true, headerShadowVisible: true}}
      />
      <Stack.Screen name="FoodCard" component={FoodCard} />
    </Stack.Navigator>
  );
};
