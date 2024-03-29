import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import { COLORS } from "../../../themes/COLORS";

export const SecondStep = ({handleData}) => {
    const [service, setService] = useState('0')
    const [cookTime, setCookTime] = useState('0')

    handleData({service,cookTime})

    return (
        <View style={styles.inner}>
                <View style={styles.titleContainer}>
                        <Text style={styles.textTitle}>Шаг 2. Введите числовые показатели</Text>
                </View>
                <View style={styles.textInputContainer}>
                    <View style={styles.inputContainer}>
                        <Icon name="happy-outline" size={24} color={COLORS.deepOrange}/>
                        <TextInput keyboardType="numeric" value={service} placeholder="Количество порций" onChangeText={text => {setService(text)}}/>
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon name="stopwatch-outline" size={24} color={COLORS.deepOrange}/>
                        <TextInput keyboardType="numeric" value={cookTime} placeholder="Время приготовления" onChangeText={text => {setCookTime(text)}}/>
                    </View>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    inner: {
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
    },
    inputContainer:{
        flexDirection: 'row', 
        alignItems:'center', 
        columnGap: 10
    }
})