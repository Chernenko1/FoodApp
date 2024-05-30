import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React from 'react';

import {Recipe} from 'components/containers/Recipes/Recipe';
import {Recipes} from 'components/containers/Recipes/Recipes';
import {FoodAddCard} from 'components/containers/Food/FoodAddCard';
import {Search} from 'components/containers/Search/Search';
import {NewRecipe} from 'components/containers/Recipes/RecipeCreate/NewRecipe';
import {FoodForRecipeCard} from 'components/containers/Food/FoodForRecipe';
import {SearchProductForRecipe} from 'components/containers/Recipes/RecipeCreate/SearchProductForRecipe';
import {RecipeSearch} from 'components/containers/Search/RecipeSearch';

const nativeStackOption: NativeStackNavigationOptions = {
  headerShown: false,
};

const Stack = createNativeStackNavigator<RecipesParamList>();

export const RecipesStack = () => {
  return (
    <Stack.Navigator screenOptions={nativeStackOption}>
      <Stack.Screen
        name="RecipesStack"
        component={Recipes}
        options={nativeStackOption}
      />
      <Stack.Screen
        name="Recipe"
        component={Recipe}
        options={{headerShown: true, headerShadowVisible: true}}
      />
      <Stack.Screen
        name="Search"
        component={RecipeSearch}
        options={nativeStackOption}
      />
      <Stack.Screen
        name="RecipeCreate"
        component={NewRecipe}
        options={{headerShown: true}}
      />
      <Stack.Screen name="FoodAdd" component={FoodAddCard} />
      <Stack.Screen name="ProductAdd" component={FoodForRecipeCard} />
      <Stack.Screen
        name="SearchProductForRecipe"
        component={SearchProductForRecipe}
        options={nativeStackOption}
      />
    </Stack.Navigator>
  );
};
