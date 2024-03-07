import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Start } from '../components/StartComponents/Start'

export type StartParamList = {
    StackHome: undefined
}

const Stack =  createNativeStackNavigator<StartParamList>()

export const StartStackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='StackHome' component={Start}/>
        </Stack.Navigator>
    )
}