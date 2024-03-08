import { NativeStackNavigationOptions, createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Start } from '../components/StartComponents/Start'
import { Login } from '../components/StartComponents/Login'
import { RegGoal } from '../components/StartComponents/RegGoal'
import { RegGenderSelect } from '../components/StartComponents/RegGenderSelect'
import { RegUserBirth } from '../components/StartComponents/RegUserBirth'


export type AuthParamList = {
    StackHome: undefined
    Login: undefined
    RegGoal: undefined
    RegGenderSelect: undefined
    RegUserBirth: undefined
}

const nativeStackOption: NativeStackNavigationOptions = {
    headerShown: true,
    headerShadowVisible: false
  };

const Stack =  createNativeStackNavigator<AuthParamList>()

export const StartStackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={nativeStackOption}>
            <Stack.Screen name='StackHome' component={Start} options={{headerShown: false}}/>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name = 'RegGoal' component={RegGoal} />
            <Stack.Screen name='RegGenderSelect' component={RegGenderSelect} />
            <Stack.Screen name='RegUserBirth' component={RegUserBirth} />
        </Stack.Navigator>
    )
}