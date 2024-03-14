import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView} from "react-native";
import { BasicEnergyInfo } from "./EnergyInfoComonents/BasicEnergyInfo";
import { MealList } from "./MealsComponents/MealList";
import { DatePicker } from "./DatePicker";
import { MealContext } from "./Context/MealContext";

import { formatDate } from "../../utils/formDate";
import { mealsAPI } from "../../store/services/mealsService";
import { useAppSelector } from "../../store/hooks";

export const Home = () => {

    const [date, setDate] = useState(formatDate(new Date()))

    const {_id}= useAppSelector(state => state.user.user)

    const {refetch} = mealsAPI.useFetchDayMealsQuery({id: _id, date})

    const getDate = async (date: string) => {
       setDate(date)
    }

    useEffect(() => {
        refetch()
     }, [date])

    return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.mainView}>
            <MealContext.Provider value={date}>
                <BasicEnergyInfo />
                <ScrollView>
                    <DatePicker handleDate={getDate}/>
                    <MealList />
                </ScrollView>
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