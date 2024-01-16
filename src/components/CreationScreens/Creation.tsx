import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native";
import { FirstStep } from "./StepScreens/FirstStep";
import { HeaderButton } from "../components/HeaderButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CreationParamList } from "../../screens/CreationStack";
import { InputText } from "../components/InputText";
import { CreationHeader } from "./StepScreens/CreationHeader";
import { SecondStep } from "./StepScreens/SecondStep";
import { HorizontalRule } from "../components/HorizontalRule";
import { ThirdStep } from "./StepScreens/ThirdStep";

type Navigation = NativeStackScreenProps<CreationParamList, 'StackCreation'>

export const Creation = ({navigation}: Navigation) => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

    const isInputEmpty = (): boolean => {
      if(name.length === 0 || description.length === 0) return true
      else return false
    }

    const nextStep = () => {
        navigation.push('SecondStep', {name, description})
    }

    // useEffect(() => {
    //     navigation.setOptions({
    //         headerRight: () => (
    //             <HeaderButton title="следующий шаг" disabled={isInputEmpty()} onPress={nextStep}/>
    //         )
    //     })
    // }, [isInputEmpty])

    return (
        <View style ={styles.container}>
            <CreationHeader />
                <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}> 
                    <FirstStep />
                        <HorizontalRule />
                    <SecondStep />
                    <HorizontalRule />
                    <ThirdStep />
                </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
})