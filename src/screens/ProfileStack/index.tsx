import React from "react";

import {
    createNativeStackNavigator,
    NativeStackNavigationOptions,
  } from '@react-navigation/native-stack';
import { Profile } from "../../components/ProfileScreens/Profile";

  const nativeStackOption: NativeStackNavigationOptions = {
    headerShown: false,
    headerStyle: {backgroundColor: 'rgb(242,242,242)'},
    headerShadowVisible: false
  };

  export type ProfileParamList ={
    StackProfile: undefined
  }

  const Stack = createNativeStackNavigator<ProfileParamList>();

  export const ProfileStack = () => {
    return (
        <Stack.Navigator screenOptions={nativeStackOption}>
            <Stack.Screen name="StackProfile" component={Profile}/>
        </Stack.Navigator>
    )
  }