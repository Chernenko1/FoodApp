import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React from 'react';

import {Recipe} from 'components/containers/Recipes/Recipe';
import {Recipes} from 'components/containers/Recipes/Recipes';
import {FoodAddCard} from 'components/containers/Food/FoodAddCard';
import {Search} from 'components/containers/Search/Search';

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
      <Stack.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
      <Stack.Screen name="FoodAdd" component={FoodAddCard} />
    </Stack.Navigator>
  );
};
