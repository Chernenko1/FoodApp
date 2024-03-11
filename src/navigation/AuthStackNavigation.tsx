import { NativeStackNavigationOptions, createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Start } from '../components/StartComponents/Start'
import { Login } from '../components/StartComponents/Login'
import { RegGoal } from '../components/StartComponents/RegGoal'
import { RegGenderSelect } from '../components/StartComponents/RegGenderSelect'
import { RegUserInfo} from '../components/StartComponents/RegUserInfo'
import { RegUserActivity } from '../components/StartComponents/RegUserActivity'
import { Registration } from '../components/StartComponents/Registration'


interface RegInfo {
    purpose?: number,
    gender?: boolean, 
    age?: string, 
    weight?: string, 
    height?: string, 
    fatPercentage?: string,
    activity?: number
}

export type AuthParamList = {
    StackHome: undefined
    Login: undefined,
    RegGoal: RegInfo,
    RegGenderSelect: RegInfo,
    RegUserInfo: RegInfo,
    RegActivity: RegInfo,
    Registration: RegInfo
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
            <Stack.Screen name='RegUserInfo' component={RegUserInfo} />
            <Stack.Screen name='RegActivity' component={RegUserActivity} />
            <Stack.Screen name="Registration" component={Registration} />
        </Stack.Navigator>
    )
}