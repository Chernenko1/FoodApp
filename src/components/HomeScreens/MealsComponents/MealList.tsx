import { ScrollView, StyleSheet, View } from "react-native"
import { Meal } from "./Meal"
import { useAppSelector } from "../../../store/hooks"
import { MealContext } from "../Context/MealContext"

export const MealList = () => {
    const {breakfast, dinner, snack, lunch} = useAppSelector(state => state.meals.meals)

    return (
        <MealContext.Provider value={''}>
            <View style={styles.mainView}>
                <Meal title="Завтрак" kcal={breakfast.calories} type="breakfast"/>
                <Meal title="Обед" kcal={lunch.calories} type="lunch"/>
                <Meal title="Ужин" kcal={dinner.calories} type="dinner"/>
                <Meal title="Перекус" kcal={snack.calories} type="snack"/>
            </View>
        </MealContext.Provider>
    )
}

const styles = StyleSheet.create({
    mainView: {
        paddingHorizontal: 25,
        paddingVertical: 5,
        rowGap: 20,
    }
})