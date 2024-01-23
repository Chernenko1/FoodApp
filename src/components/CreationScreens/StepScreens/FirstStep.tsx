import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Pressable, Button } from "react-native";
import { COLORS } from "../../../themes/COLORS";

export const FirstStep = ({firstData}) => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

    
    const isInputEmpty = (): boolean => {
        if(name.length === 0 || description.length === 0) return true
        else return false
      }

      firstData(name, description)

    return (
        <KeyboardAvoidingView style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
                <View style={styles.titleContainer}>
                        <Text style={styles.textTitle}>Шаг 1. Введите данные рецепта</Text>
                </View>
                <View style={styles.textInputContainer}> 
                        <TextInput  placeholder="Название рецепта" onChangeText={text => setName(text)}/>
                        <TextInput  placeholder="Описание" onChangeText={text => setDescription(text)}/>
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