import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import {Home} from 'components/containers/Home/Home';
import {Search} from 'components/containers/Search/Search';
import {MealInfo} from 'components/containers/Home/Meals/MealInfo';
import {ProductInfo} from 'components/containers/Product/ProductInfo';
import {NewProduct} from 'components/containers/Product/CreateProduct/NewProduct';
import {FoodCard} from 'components/containers/Food/FoodCard';
import {FoodAddCard} from 'components/containers/Food/FoodAddCard';
import {FoodChangeCard} from 'components/containers/Food/FoodChangeCard';

const nativeStackOption: NativeStackNavigationOptions = {
  headerShown: true,
  headerShadowVisible: false,
};

const Stack = createNativeStackNavigator<HomeParamList>();

export const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={nativeStackOption}>
      <Stack.Screen
        name="StackHome"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
      <Stack.Screen name="MealInfo" component={MealInfo} />
      <Stack.Screen name="ProductCreate" component={NewProduct} />
      <Stack.Screen name="FoodAdd" component={FoodAddCard} />
      <Stack.Screen name="FoodChange" component={FoodChangeCard} />
    </Stack.Navigator>
  );
};
