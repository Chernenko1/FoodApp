import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {HomeStack} from './Stacks/HomeStack';
import {RecipesStack} from './Stacks/RecipesStack';
import {FriendsStack} from './Stacks/FriendsStack';

import Icon from 'react-native-vector-icons/Ionicons';
import {StatisticStack} from './Stacks/StatisticStackNavigation';

export type RootTabParamList = {
  Home: HomeParamList;
  Recipes: RecipesParamList;
  Friends: FriendsParamList;
  Statistic: StatisticParamList;
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
    <TabStack.Navigator screenOptions={tabOption} initialRouteName="Home">
      <TabStack.Screen
        name={'Friends'}
        component={FriendsStack}
        options={tabButton('person', 'person-outline')}
      />
      <TabStack.Screen
        name={'Home'}
        component={HomeStack}
        options={tabButton('home', 'home-outline')}
      />
      <TabStack.Screen
        name="Statistic"
        component={StatisticStack}
        options={tabButton('stats-chart', 'stats-chart-outline')}
      />
      <TabStack.Screen
        name="Recipes"
        component={RecipesStack}
        options={tabButton('book', 'book-outline')}
      />
    </TabStack.Navigator>
  );
};
