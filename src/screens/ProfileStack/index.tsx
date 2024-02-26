import React from "react";

import {
    createNativeStackNavigator,
    NativeStackNavigationOptions,
  } from '@react-navigation/native-stack';
import { Profile } from "../../components/ProfileComponents/Profile";
import { UserDetails } from "../../components/ProfileComponents/UserComponents/UserDetails";
import { COLORS } from "../../themes/COLORS";
import {UserGoal } from "../../components/ProfileComponents/UserComponents/UserGoal";
import { UserActivity } from "../../components/ProfileComponents/UserComponents/UserActivity";
import { KBFUSettings } from "../../components/ProfileComponents/KBFUSettings/KBFUSettings";

  const nativeStackOption: NativeStackNavigationOptions = {
    headerShown: true,
    headerStyle: {backgroundColor: COLORS.white},
    headerShadowVisible: false
  };

  export type ProfileParamList ={
    StackProfile: undefined,
    UserDetails: undefined,
    UserGoal: undefined,
    UserActivity: undefined,
    KBFUSettings: undefined,
  }

  const Stack = createNativeStackNavigator<ProfileParamList>();

  export const ProfileStack = () => {
    return (
        <Stack.Navigator screenOptions={nativeStackOption}>
            <Stack.Screen name="StackProfile" component={Profile} options={{headerShown: false}}/>
            <Stack.Screen name='UserDetails' component={UserDetails} />
            <Stack.Screen name='UserGoal' component={UserGoal} />
            <Stack.Screen name='UserActivity' component={UserActivity} />
            <Stack.Screen name='KBFUSettings' component={KBFUSettings} />
        </Stack.Navigator>
    )
  }