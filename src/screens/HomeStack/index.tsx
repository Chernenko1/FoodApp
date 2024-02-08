import React from "react";

import {
    createNativeStackNavigator,
    NativeStackNavigationOptions,
  } from '@react-navigation/native-stack';
import { Home } from "../../components/HomeScreens/Home";
import {  RecipeCards } from "../../components/HomeScreens/_TopRecipes/RecipeCards";
import { Recipe } from "../../components/HomeScreens/_TopRecipes/Recipe";
import Icon from 'react-native-vector-icons/Ionicons'
import { COLORS } from "../../themes/COLORS";
import { Search } from "../../components/SearchComponents/Search";
import { MealInfo } from "../../components/HomeScreens/MealsComponents/MealInfo";

  const nativeStackOption: NativeStackNavigationOptions = {
    headerShown: true,
    headerStyle: {backgroundColor: 'rgb(242,242,242)'},
    headerShadowVisible: false
  };

  export type HomeParamList ={
    StackHome: undefined,
    Recipes: undefined,
    Recipe: any
    Search: undefined,
    MealInfo: {
      headerTitle: string
    }
  }

  const Stack = createNativeStackNavigator<HomeParamList>();

  export const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={nativeStackOption}>
            <Stack.Screen name="StackHome" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name='Recipes' component={RecipeCards}/>
            <Stack.Screen name="Recipe" component={Recipe} />
            <Stack.Screen name="Search" component={Search} options={{headerShown: false}}/>
            <Stack.Screen name='MealInfo' component={MealInfo}/>
        </Stack.Navigator>
    )
  }