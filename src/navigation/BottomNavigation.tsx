import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {HomeStack} from './Stacks/HomeStack';
import {ProfileStack} from './Stacks/ProfileStack';

import Icon from 'react-native-vector-icons/Ionicons';

export type RootTabParamList = {
  Home: HomeParamList;
  Profile: ProfileParamList;
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
export const BottomNavigation = () => {
  return (
    <TabStack.Navigator screenOptions={tabOption}>
      <TabStack.Screen
        name={'Home'}
        component={HomeStack}
        options={({route}) => ({
          tabBarIcon: ({focused, color, size}): any => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              size={focused ? 29 : 24}
              color={color}
            />
          ),
          headerShown: false,
        })}
      />
      <TabStack.Screen
        name={'Profile'}
        component={ProfileStack}
        options={{
          tabBarIcon: ({focused, size, color}): any => (
            <Icon
              name={focused ? 'person' : 'person-outline'}
              size={focused ? 29 : 24}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
    </TabStack.Navigator>
  );
};
