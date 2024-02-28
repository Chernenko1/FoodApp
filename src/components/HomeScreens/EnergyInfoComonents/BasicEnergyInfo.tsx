import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import { COLORS } from "../../../themes/COLORS"
import { Calories } from "./Calories"
import { CBFU } from "./CBFU"
import { useTheme } from "@react-navigation/native"


export const BasicEnergyInfo = () => {

    const {colors} = useTheme()

    return (
        <SafeAreaView style={[styles.mainView, {backgroundColor: colors.background}]}>
            <View style={styles.caloriesView}>
                <Calories type="Съедено" count={1273} icon="open"/>
                <View style={styles.progressView}>
                    <View style={{width: 110, height: 110, borderRadius: 55, backgroundColor: COLORS.white, justifyContent: 'center'}}>
                        <Calories type="Осталось" count={2440}/>
                    </View>
                </View>
                <Calories type="Сожено" count={536} icon="open"/>
            </View>
            <View style={styles.cbfuView}>
                <CBFU count={50} maxCount={400} title="Углеводы"/>
                <CBFU count={50} maxCount={100} title="Белки"/>
                <CBFU count={70} maxCount={60} title="Жиры"/>
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
        backgroundColor: COLORS.orange,
        width: 140,
        height: 140,
        borderRadius: 70
    },
    cbfuView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})