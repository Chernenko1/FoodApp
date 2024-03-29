import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView} from "react-native";
import { BasicEnergyInfo } from "./EnergyInfoComonents/BasicEnergyInfo";
import { MealList } from "./MealsComponents/MealList";
import { DatePicker } from "./DatePicker";

import { formatDate } from "../../utils/formDate";
import { mealsAPI } from "../../store/services/mealsService";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setAppDate } from "../../store/slices/appSettings";

export const Home = () => {

    const [date, setDate] = useState(formatDate(new Date()))

    const {_id}= useAppSelector(state => state.user.user)

    const dispatch = useAppDispatch()

    const {refetch} = mealsAPI.useFetchDayMealsQuery({id: _id, date})

    const getDate = async (date: string) => {
       setDate(date)
       dispatch(setAppDate(date))
    }

    useEffect(() => {
        refetch()
     }, [date])

    return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.mainView}>
                <BasicEnergyInfo />
                <ScrollView>
                    <DatePicker handleDate={getDate}/>
                    <MealList />
                </ScrollView>
        </View>
    // </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex:1,
    }
})