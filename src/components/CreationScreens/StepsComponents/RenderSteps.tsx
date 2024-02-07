import React, { useState } from 'react'
import { View } from 'react-native'
import { FirstStep } from './FirstStep'
import { SecondStep } from './SecondStep'
import { ThirdStep } from './ThirdStep'
import { Button } from 'react-native'

interface Props {
    handleRecipeData: () => void
    params: {}
    stepCount: number
}

export const RenderSteps = ({handleRecipeData, params, stepCount}: Props) => {
    return (
        <View>
            <FirstStep handleData ={handleRecipeData}/>
            {
                stepCount > 0 && <SecondStep handleData ={handleRecipeData}/>
            }
            {
                stepCount > 1 && <ThirdStep handleData ={handleRecipeData} params={params}/>
            }
        </View>
    )
}