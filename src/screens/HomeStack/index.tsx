import React from "react";

import {
    createNativeStackNavigator,
    NativeStackNavigationOptions,
  } from '@react-navigation/native-stack';
import { Home } from "../../components/HomeScreens/Home";
import Icon from 'react-native-vector-icons/Ionicons'
import { COLORS } from "../../themes/COLORS";
import { Search } from "../../components/SearchComponents/Search";
import { MealInfo } from "../../components/HomeScreens/MealsComponents/MealInfo";
import { ProductInfo } from "../../components/ProductComponent/ProductInfo";

  const nativeStackOption: NativeStackNavigationOptions = {
    headerShown: true,
    headerShadowVisible: false
  };

  export type HomeParamList ={
    StackHome: undefined,
    Search: {
      backScreen: string,
      screenParams?: {
        mealType?: string 
      }
    },
    MealInfo: {
      headerTitle: string,
      type: string
    }
    ProductInfo: {
      backScreen?: string,
      productData: Product,
      mealType: string,
      func: "add" | "update"
    }
  }

  const Stack = createNativeStackNavigator<HomeParamList>();

  export const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={nativeStackOption}>
            <Stack.Screen name="StackHome" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="Search" component={Search} options={{headerShown: false}}/>
            <Stack.Screen name='MealInfo' component={MealInfo}/>
            <Stack.Screen name='ProductInfo' component={ProductInfo}/>
        </Stack.Navigator>
    )
  }