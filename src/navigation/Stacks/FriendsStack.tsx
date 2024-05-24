import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {MainPage} from 'components/containers/Friends/MainPage';
import {FriendsList} from 'components/containers/Friends/FriendsList';
import {FriendPage} from 'components/containers/Friends/FriendPage';
import {UserSearch} from 'components/containers/Search/UserSearch';
import {FriendRequests} from 'components/containers/Friends/FriendRequests';
import {SettingStack} from './ProfileStack';

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
      <Stack.Screen name="SearchUsers" component={UserSearch} />
      <Stack.Screen
        name="FriendRequests"
        component={FriendRequests}
        options={{headerShown: true, headerTitle: 'Заявки в друзья'}}
      />
      <Stack.Screen name="Settings" component={SettingStack} />
    </Stack.Navigator>
  );
};
