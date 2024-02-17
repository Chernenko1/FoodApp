import React, { useEffect, useState } from "react";
import { View, StyleSheet} from "react-native";
import { BasicEnergyInfo } from "./EnergyInfoComonents/BasicEnergyInfo";
import { MealList } from "./MealsComponents/MealList";
import { DatePicker } from "./DatePicker";
import { MealContext } from "./Context/MealContext";
import { getMealData } from "../../http/mealAPI";

export const Home = () => {

    const [date, setDate] = useState('')

    const getDate = async (date: string) => {
       setDate(date)
    }
    return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.mainView}>
            <MealContext.Provider value={{date: date}}>
                <BasicEnergyInfo />
                <DatePicker handleDate={getDate}/>
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