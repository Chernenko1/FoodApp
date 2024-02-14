import React from "react";
import { View, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { BasicEnergyInfo } from "./EnergyInfoComonents/BasicEnergyInfo";
import { MealList } from "./MealsComponents/MealList";
import { DatePicker } from "./DatePicker";

export const Home = () => {
    return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.mainView}>

                <BasicEnergyInfo />
                <DatePicker />
                <MealList />

        </View>
    // </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex:1,
    }
})