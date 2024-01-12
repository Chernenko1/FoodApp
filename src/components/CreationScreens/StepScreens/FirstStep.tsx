import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from "react-native";
import { COLORS } from "../../../themes/COLORS";
import { InputText } from "../../components/InputText";

export const FirstStep = () => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

    

    return (
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
    )
}

const styles = StyleSheet.create({
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
}
)