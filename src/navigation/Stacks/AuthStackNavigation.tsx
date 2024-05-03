import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React from 'react';

import {Start} from '../../components/containers/Start/Start';
import {Login} from '../../components/containers/Start/Login';
import {RegGoal} from '../../components/containers/Start/RegGoal';
import {RegGenderSelect} from '../../components/containers/Start/RegGenderSelect';
import {RegUserInfo} from '../../components/containers/Start/RegUserInfo';
import {RegUserActivity} from '../../components/containers/Start/RegUserActivity';
import {Registration} from '../../components/containers/Start/Registration';

const nativeStackOption: NativeStackNavigationOptions = {
  headerShown: true,
  headerShadowVisible: false,
};

const Stack = createNativeStackNavigator<AuthParamList>();

export const StartStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={nativeStackOption}>
      <Stack.Screen
        name="StackHome"
        component={Start}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="RegGoal" component={RegGoal} />
      <Stack.Screen name="RegGenderSelect" component={RegGenderSelect} />
      <Stack.Screen name="RegUserInfo" component={RegUserInfo} />
      <Stack.Screen name="RegActivity" component={RegUserActivity} />
      <Stack.Screen name="Registration" component={Registration} />
    </Stack.Navigator>
  );
};
