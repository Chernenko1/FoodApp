import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {MainPage} from 'components/containers/Friends/MainPage';
import {FriendsList} from 'components/containers/Friends/FriendsList';
import {FriendPage} from 'components/containers/Friends/FriendPage';

const nativeStackOption: NativeStackNavigationOptions = {
  headerShown: false,
  headerShadowVisible: false,
};

const Stack = createNativeStackNavigator<FriendsParamList>();

export const FriendsStack = () => {
  return (
    <Stack.Navigator screenOptions={nativeStackOption}>
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen name="FriendsList" component={FriendsList} />
      <Stack.Screen name="FriendPage" component={FriendPage} />
    </Stack.Navigator>
  );
};
