import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import { COLORS } from "../../../themes/COLORS"
import { Calories } from "./Calories"
import { CBFU } from "./CBFU"
import { useTheme } from "@react-navigation/native"
import { mealsAPI } from "../../../store/services/mealsService"
import { useAppSelector } from "../../../store/hooks"
import { useContext, useEffect } from "react"
import { MealContext } from "../Context/MealContext"


export const BasicEnergyInfo = () => {

    const {colors} = useTheme()
    const {_id, required_macros} = useAppSelector(state => state.user.user)
    const date = useContext(MealContext)
    const {data, refetch} = mealsAPI.useFetchDayMealsQuery({id: _id, date})

    

    useEffect(() => {
       refetch()
    }, [date])

    return (
        <SafeAreaView style={[styles.mainView, {backgroundColor: colors.card}]}>
            <View style={styles.caloriesView}>
                <Calories type="Съедено" count={data?.info.totalCalories ?? 0} icon="open"/>
                <View style={[styles.progressView, {backgroundColor:colors.primary}]}>
                    <View style={{width: 110, height: 110, borderRadius: 55, backgroundColor: COLORS.white, justifyContent: 'center'}}>
                        <Calories type="Осталось" count={(data?.info.necessaryCalories ?? 0) - (data?.info.totalCalories ?? 0)}/>
                    </View>
                </View>
                <Calories type="Сожжено" count={536} icon="open"/>
            </View>
            <View style={styles.cbfuView}>
                <CBFU count={data?.info.carbohydrates ?? 0} maxCount={required_macros.carbohydrates} title="Углеводы"/>
                <CBFU count={data?.info.protein ?? 0} maxCount={required_macros.protein} title="Белки"/>
                <CBFU count={data?.info.fat ?? 0} maxCount={required_macros.fat} title="Жиры"/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 0.3,
        justifyContent: 'space-around',
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        elevation: 5
    },
    caloriesView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    progressView: {
        alignItems:'center',
        justifyContent: 'center',
        width: 140,
        height: 140,
        borderRadius: 70
    },
    cbfuView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})