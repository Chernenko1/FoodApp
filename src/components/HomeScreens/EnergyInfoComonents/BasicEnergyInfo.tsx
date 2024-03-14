import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import { COLORS } from "../../../themes/COLORS"
import { Calories } from "./Calories"
import { CBFU } from "./CBFU"
import { useTheme } from "@react-navigation/native"
import { mealsAPI } from "../../../store/services/mealsService"
import { useAppSelector } from "../../../store/hooks"
import { useContext, useEffect } from "react"
import { MealContext } from "../Context/MealContext"
import {CircleProgressBar} from "../../components/Charts/CircleProgressBar"


export const BasicEnergyInfo = () => {

    const {colors} = useTheme()

    const {required_macros} = useAppSelector(state => state.user.user)
    const data = useAppSelector(state => state.meals.meals)

    const progress = Math.round(((data?.info.totalCalories ?? 1) * 100) / (data?.info.necessaryCalories ?? 1)) 

    return (
        <SafeAreaView style={[styles.mainView, {backgroundColor: colors.card}]}>
            <View style={styles.caloriesView}>
                <Calories type="Съедено" count={data?.info.totalCalories ?? 0} icon="open"/>
                <View style={[styles.progressBarWrapper]}>
                    
                    <CircleProgressBar progress={progress ? progress : 0.1} />   
                    <View style={styles.progressText}>
                        <Calories  type="Осталось" count={(data.info.necessaryCalories ?? 0) - (data?.info.totalCalories ?? 0)}/>
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
        rowGap: 20,
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
    cbfuView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    progressBarWrapper: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
      },
      progressText: {
        position: 'absolute',
        textAlign: 'center',
        fontSize: 20,
        color: '#000',
        bottom: '25%',
        left: '44%',
        transform: [{ translateX: -20 }, { translateY: -12 }],
      },
})