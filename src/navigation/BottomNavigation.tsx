import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {HomeStack} from './Stacks/HomeStack';
import {ProfileStack} from './Stacks/ProfileStack';

import Icon from 'react-native-vector-icons/Ionicons';
import {RecipesStack} from './Stacks/RecipesStack';

export type RootTabParamList = {
  Home: HomeParamList;
  Profile: ProfileParamList;
  Recipes: RecipesParamList;
};

const TabStack = createBottomTabNavigator<RootTabParamList>();

const tabOption: BottomTabNavigationOptions = {
  tabBarActiveTintColor: '#FF9800',
  tabBarStyle: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    height: 60,
    position: 'absolute',
  },
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
};

const tabButton = (activeIcon: string, inActiveIcon: string) => {
  const tabButtomOption: BottomTabNavigationOptions = {
    tabBarIcon: ({focused, color}): any => (
      <Icon
        name={focused ? activeIcon : inActiveIcon}
        size={focused ? 29 : 24}
        color={color}
      />
    ),
    headerShown: false,
  };
  return tabButtomOption;
};

export const BottomNavigation = () => {
  return (
    <TabStack.Navigator screenOptions={tabOption}>
      <TabStack.Screen
        name={'Home'}
        component={HomeStack}
        options={tabButton('home', 'home-outline')}
      />
      <TabStack.Screen
        name={'Profile'}
        component={ProfileStack}
        options={tabButton('person', 'person-outline')}
      />
      <TabStack.Screen
        name="Recipes"
        component={RecipesStack}
        options={tabButton('book', 'book-outline')}
      />
    </TabStack.Navigator>
  );
};
