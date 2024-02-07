import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert, Button } from "react-native";
import { useFormik } from "formik";
import * as Yup from 'yup'
import { InputText } from "../../components/TextInput";
import { COLORS } from "../../../themes/COLORS";

interface Props {
    handleData: ({}) => void
}

export const FirstStep = ({handleData}: Props) => {
    const LoginSchema = Yup.object().shape({
        name: Yup.string().min(1, 'Должен быть хотя бы один символ').required('Обязательно!'),
        description: Yup.string().min(1, 'Хотя бы один символ!').required("Обязательно для заполения")
    })

    const {handleChange, handleSubmit, values, handleBlur, errors, touched} = useFormik({
        validationSchema: LoginSchema,
        initialValues: {name: '', description: ''},
        onSubmit: values => handleData({name: values.name, description: values.description})
    })

    useEffect(() => {
        handleSubmit()
    }, [values.name, values.description])

    return (
        <KeyboardAvoidingView style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
                <View style={styles.titleContainer}>
                        <Text style={styles.textTitle}>Шаг 1. Введите данные рецепта</Text>
                </View>
                <View style={styles.textInputContainer}> 
                        <InputText placeholder="Название рецепта" onChangeText={handleChange('name')} onBlur={handleBlur('name')} error={errors.name} touched ={touched.name}/>
                        <InputText placeholder="Описание" onChangeText={handleChange('description')} onBlur={handleBlur('description')} error={errors.description} touched ={touched.description}/>
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
        padding: 5,
        rowGap: 10,
    },
    titleContainer: {
        marginVertical: 10,
    },
    textTitle: {
        fontFamily: 'Rubik-Medium',
        fontSize: 20
    }
}
)