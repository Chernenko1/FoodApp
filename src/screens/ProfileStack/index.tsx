import React from "react";

import {
    createNativeStackNavigator,
    NativeStackNavigationOptions,
  } from '@react-navigation/native-stack';
import { Profile } from "../../components/ProfileComponents/Profile";
import { UserDetails } from "../../components/ProfileComponents/UserComponents/UserDetails";
import { COLORS } from "../../themes/COLORS";
import {UserGoal } from "../../components/ProfileComponents/UserComponents/UserGoal";

  const nativeStackOption: NativeStackNavigationOptions = {
    headerShown: true,
    headerStyle: {backgroundColor: COLORS.white},
    headerShadowVisible: false
  };

  export type ProfileParamList ={
    StackProfile: undefined,
    UserDetails: undefined,
    UserGoal: undefined
  }

  const Stack = createNativeStackNavigator<ProfileParamList>();

  export const ProfileStack = () => {
    return (
        <Stack.Navigator screenOptions={nativeStackOption}>
            <Stack.Screen name="StackProfile" component={Profile} options={{headerShown: false}}/>
            <Stack.Screen name='UserDetails' component={UserDetails} />
            <Stack.Screen name='UserGoal' component={UserGoal} />
        </Stack.Navigator>
    )
  }