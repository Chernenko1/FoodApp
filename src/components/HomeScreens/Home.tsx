import React from "react";
import { View, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { BasicEnergyInfo } from "./EnergyInfoComonents/BasicEnergyInfo";
import { MealList } from "./MealsComponents/MealList";
import { DatePicker } from "./DatePicker";
import { MealContext } from "./Context/MealContext";

export const Home = () => {
    return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.mainView}>
            <MealContext.Provider value={{}}>
                <BasicEnergyInfo />
                <DatePicker />
                <MealList />
            </MealContext.Provider>
        </View>
    // </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex:1,
    }
})