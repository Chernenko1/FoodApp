import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import { COLORS } from "../../../themes/COLORS"
import { AppText } from "../../components/AppText"
import { ACTIVITY, GOAL } from "./constants"


interface Props {
    username: string,
    email: string,
    weight: number,
    goal: number,
    activity: number
}


export const UserInfo = ({username, email, weight, goal, activity }: Props) => {
    return (
        <SafeAreaView style={styles.mainView}> 
            <View>
                <AppText style={styles.text}>Username: {username}</AppText>
                <AppText style={styles.text}>Вес: {weight} кг</AppText>
                <AppText style={styles.text}>Цель: {GOAL[goal]}</AppText>
                <AppText style={styles.text}>Активность: {ACTIVITY[activity]}</AppText>
                <AppText></AppText>
            </View>
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.white
    },
    text: {
        fontSize: 20,
        color: COLORS.black
    }
})