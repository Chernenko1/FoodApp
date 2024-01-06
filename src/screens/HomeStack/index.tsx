import React from "react";

import {
    createNativeStackNavigator,
    NativeStackNavigationOptions,
  } from '@react-navigation/native-stack';
import { Home } from "../../components/HomeScreens/Home";
import {  RecipeCards } from "../../components/HomeScreens/TopRecipes/RecipeCards";
import { Recipe } from "../../components/HomeScreens/TopRecipes/Recipe";

  const nativeStackOption: NativeStackNavigationOptions = {
    headerShown: true,
    headerStyle: {backgroundColor: 'rgb(242,242,242)'},
    headerShadowVisible: false
  };

  export type HomeParamList ={
    StackHome: undefined,
    Recipes: undefined,
    Recipe: any
  }

  const Stack = createNativeStackNavigator<HomeParamList>();

  export const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={nativeStackOption}>
            <Stack.Screen name="StackHome" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name='Recipes' component={RecipeCards}/>
            <Stack.Screen name="Recipe" component={Recipe}/>
        </Stack.Navigator>
    )
  }