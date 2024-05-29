import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import {Profile} from '../../components/containers/Profile/Profile';
import {UserDetails} from '../../components/containers/Profile/UserComponents/UserDetails';
import {UserGoal} from '../../components/containers/Profile/UserComponents/UserGoal';
import {UserActivity} from '../../components/containers/Profile/UserComponents/UserActivity';
import {KBFUSettings} from '../../components/containers/Profile/KBFUSettings/KBFUSettings';

const nativeStackOption: NativeStackNavigationOptions = {
  headerShown: true,
  headerShadowVisible: false,
};

const Stack = createNativeStackNavigator<SettingsParamList>();

export const SettingStack = () => {
  return (
    <Stack.Navigator screenOptions={nativeStackOption}>
      <Stack.Screen name="SettingsStack" component={Profile} />
      <Stack.Screen name="UserDetails" component={UserDetails} />
      <Stack.Screen name="UserGoal" component={UserGoal} />
      <Stack.Screen name="UserActivity" component={UserActivity} />
      <Stack.Screen name="KBFUSettings" component={KBFUSettings} />
    </Stack.Navigator>
  );
};
