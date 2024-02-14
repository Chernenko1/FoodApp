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
    headerStyle: {backgroundColor: 'rgb(242,242,242)'},
    headerShadowVisible: false
  };

  export type HomeParamList ={
    StackHome: undefined,
    Search: {
      backScreen: string,
    },
    MealInfo: {
      headerTitle: string
    }
    ProductInfo: {
      backScreen?: string,
      productData: Product
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