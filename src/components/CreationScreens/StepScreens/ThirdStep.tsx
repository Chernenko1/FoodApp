import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import { COLORS } from "../../../themes/COLORS";
import { InputText } from "../../components/InputText";

export const ThirdStep = () => {
    return (
        <View style={styles.inner}>
        <View style={styles.titleContainer}>
                <Text style={styles.textTitle}>Шаг 3. Введите детали</Text>
        </View>
        <View style={styles.textInputContainer}>
            <View style={styles.inputContainer}>
                <Icon name="happy-outline" size={24} color={COLORS.deepOrange}/>
                <InputText keyboardType="numeric" placeholder="Количество порций" onChangeText={text => {}}/>
            </View>
            <View style={styles.inputContainer}>
                <Icon name="stopwatch-outline" size={24} color={COLORS.deepOrange}/>
                <InputText keyboardType="numeric" placeholder="Время подготовки" onChangeText={text => {}}/>
            </View>
            <View style={styles.inputContainer}>
                <Icon name="stopwatch-outline" size={24} color={COLORS.deepOrange}/>
                <InputText keyboardType="numeric" placeholder="Время приготовления" onChangeText={text => {}}/>
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