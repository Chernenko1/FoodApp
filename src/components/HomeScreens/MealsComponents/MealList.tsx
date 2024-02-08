import { StyleSheet, View } from "react-native"
import { Meal } from "./Meal"

export const MealList = () => {
    return (
        <View style={styles.mainView}>
            <Meal title="Завтрак" kcal={138} maxKcal={500}/>
            <Meal title="Обед" kcal={261} maxKcal={700}/>
            <Meal title="Ужин" kcal={357} maxKcal={900}/>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 0.7,
        paddingHorizontal: 25,
        rowGap: 20,
        justifyContent: 'center'
    }
})