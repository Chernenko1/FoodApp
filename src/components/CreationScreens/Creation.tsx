import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { FirstStep } from "./StepScreens/FirstStep";
import { HeaderButton } from "../components/HeaderButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CreationParamList } from "../../screens/CreationStack";
import { InputText } from "../components/InputText";

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

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderButton title="следущий шаг" disabled={isInputEmpty()} onPress={nextStep}/>
            )
        })
    }, [isInputEmpty])

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView style={{flex: 1}}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.inner}>
                        <View style={styles.titleContainer}>
                                <Text style={styles.textTitle}>Шаг 1. Введите данные рецепта</Text>
                        </View>
                        <View style={styles.textInputContainer}> 
                                <InputText  placeholder="Название рецепта" onChangeText={text => setName(text)}/>
                                <InputText  placeholder="Описание" onChangeText={text => setDescription(text)}/>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
    inner: {
        flex: 1
    },
    textInputContainer: {
        rowGap: 10
    },
    titleContainer: {
        marginVertical: 10
    },
    textTitle: {
        fontFamily: 'Rubik-Medium',
        fontSize: 20
    }
})