import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import { COLORS } from "../../../themes/COLORS"
import { AppText } from "../../components/AppText"
import { ACTIVITY, GOAL } from "./constants"
import { useTheme } from "@react-navigation/native"


interface Props {
    username: string,
    email: string,
    weight: number,
    goal: number,
    activity: number
}


export const UserInfo = ({username, email, weight, goal, activity }: Props) => {

    const {colors} = useTheme()

    return (
        <SafeAreaView style={[styles.mainView, {backgroundColor: colors.card}]}> 
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
    },
    text: {
        fontSize: 20,
    }
})