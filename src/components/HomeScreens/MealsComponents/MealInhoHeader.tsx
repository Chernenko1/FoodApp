import { StyleSheet, View, Text } from "react-native"
import { Calories } from "../EnergyInfoComonents/Calories"
import { COLORS } from "../../../themes/COLORS"
import { AppText } from "../../components/AppText"

export const MealInfoHeader = () => {
    return (
        <View style={styles.headerView}>
                <View style={styles.progressView}>
                        <View style={{width: 110, height: 110, borderRadius: 55, backgroundColor: COLORS.white, justifyContent: 'center'}}>
                            <Calories type="Осталось" count={2440}/>
                        </View>
                </View>
                <View style={styles.dateView}>
                    <AppText style={styles.dateText}>08 месяц 2024</AppText>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    progressView: {
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: COLORS.orange,
        width: 140,
        height: 140,
        borderRadius: 70,
    },
    headerView: {
        alignItems: 'center',
        paddingBottom: 20,
        backgroundColor: COLORS.deepOrange
    },
    dateView: {
        top: 15,
    },
    dateText: {
        fontSize: 20,
        color: COLORS.white
    },
})