import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import { FirstStep } from "./StepScreens/FirstStep";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CreationParamList } from "../../screens/CreationStack";
import { CreationHeader } from "./StepScreens/CreationHeader";
import { SecondStep } from "./StepScreens/SecondStep";
import { HorizontalRule } from "../components/HorizontalRule";
import { ThirdStep } from "./StepScreens/ThirdStep";
import { createRecipe } from "../../http/recipeAPI";

type Navigation = NativeStackScreenProps<CreationParamList, 'StackCreation'>

export const Creation = ({navigation, route}: Navigation) => {
    const f = {
        name: '',
        description: '',
        ingrediants: [],
        cookTime: "",
        service: "",
        rating: "5.0",
        instruction: [], 
        category: []
    }
    
    const firstData = (name: string, description: string) => {
        f.description = description,
        f.name = name
        // console.log(f)
   }

   const secondData = (service: string, cookTime: string) => {
    f.cookTime = cookTime,
    f.service = service
    // console.log(f)
   }

   const firdData = (ingrediants: [], instruction: [], categories: []) => {
    f.ingrediants = ingrediants
    f.instruction = instruction
    f.category = categories
    // console.log(f)
   }

   const handlePress = () => {
       console.log(1)
    const formData = new FormData()
    formData.append("name", f.name)
    formData.append("cookTime", f.cookTime)
    formData.append("service", f.service)
    formData.append("description", f.description)
    formData.append("rating", f.rating)
    formData.append("instruction", f.instruction)
    formData.append("ingrediants", f.ingrediants)
    formData.append("category", f.category)
    formData.append('rating', f.rating)
    // console.log(formData)
     createRecipe(f)
   }

    return (
        <View style ={styles.container}>
            <CreationHeader handlePress={handlePress}/>
                <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}> 
                    <FirstStep firstData={firstData}/>
                        <HorizontalRule />
                    <SecondStep secondData={secondData}/>
                    <HorizontalRule />
                    <ThirdStep params={route.params} firdData = {firdData}/>
                    {/* <Test /> */}
                </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginBottom: Dimensions.get('screen').width * 0.3
    },
})