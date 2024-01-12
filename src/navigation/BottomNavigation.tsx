import React from 'react';
import {
    BottomTabNavigationOptions,
    createBottomTabNavigator,
  } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'

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

const tabOption: BottomTabNavigationOptions = {
  tabBarActiveTintColor: "#FF9800",
  tabBarStyle: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    height: 60,
    position: 'absolute',
  },
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true
}
export const BottomNavigation = () => {

return (
  <TabStack.Navigator screenOptions={tabOption}>
  <TabStack.Screen name={'Home'} component={HomeStack} options={{tabBarIcon: ({focused, color, size}): any => (
    <Icon name={focused ? 'home' : 'home-outline'} size={focused ? 29 : 24} color={color}/>
  ), headerShown: false}}/>
  <TabStack.Screen name={'Favourite'} component={FavouriteStack} options={{tabBarIcon: ({focused,  size, color}): any => (
    <Icon name={focused ? 'heart' : 'heart-outline'} size={focused ? 29 : 24} color={color}/>
  ), headerShown: false}}/>
  <TabStack.Screen name={'Creation'} component={CreationStack} options={{tabBarIcon: ({focused,  size, color}): any => (
    <Icon name={focused ? 'document-text' : 'document-text-outline'} size={focused ? 29 : 24} color={color}/>
  ), headerShown: false}}/>
  <TabStack.Screen name={'Profile'} component={ProfileStack} options={{tabBarIcon: ({focused,  size, color}): any => (
    <Icon name={focused ? 'person' : 'person-outline'} size={focused ? 29 : 24} color={color}/>
  ), headerShown: false}}/>
</TabStack.Navigator>
)

}