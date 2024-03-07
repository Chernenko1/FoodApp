import { NativeStackNavigationOptions, createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Start } from '../components/StartComponents/Start'
import { Login } from '../components/StartComponents/Login'


export type AuthParamList = {
    StackHome: undefined
    Login: undefined
}

const nativeStackOption: NativeStackNavigationOptions = {
    headerShown: false,
    headerShadowVisible: false
  };

const Stack =  createNativeStackNavigator<AuthParamList>()

export const StartStackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={nativeStackOption}>
            <Stack.Screen name='StackHome' component={Start}/>
            <Stack.Screen name='Login' component={Login} options={{headerShown: true}}/>
        </Stack.Navigator>
    )
}