import React from 'react';
import {
    BottomTabNavigationOptions,
    createBottomTabNavigator,
  } from '@react-navigation/bottom-tabs';
import { HomeParamList, HomeStack } from '../screens/HomeStack';
import { CreationParamList, CreationStack } from '../screens/CreationStack';
import { FavouriteParamList, FavouriteStack } from '../screens/FavouriteStack';
import { ProfileParamList, ProfileStack } from '../screens/ProfileStack';

export type RootTabParamList = {
    Home: HomeParamList
    Creation: CreationParamList
    Favourite: FavouriteParamList
    Profile: ProfileParamList
  }

const TabStack = createBottomTabNavigator<RootTabParamList>()

export const BottomNavigation = () => {

return (
  <TabStack.Navigator>
  <TabStack.Screen name={'Home'} component={HomeStack}/>
  <TabStack.Screen name={'Favourite'} component={FavouriteStack} />
  <TabStack.Screen name={'Creation'} component={CreationStack} />
  <TabStack.Screen name={'Profile'} component={ProfileStack} />
</TabStack.Navigator>
)

}