import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import { COLORS } from "../../../themes/COLORS"


interface Props {
    username: string,
    email: string,
    weight: number,
    goal: number,
    activity: number
}

const GOAL: {} = {
    0: 'Снижение',
    1: 'Поддержка',
    2: 'Набор'
}
const ACTIVITY = {
    0:'Нет',
    1: 'Малая',
    2: 'Средняя',
    3: 'Высокая',
    4: 'Очень высокая'
}

export const UserInfo = ({username, email, weight, goal, activity }: Props) => {
    return (
        <SafeAreaView style={styles.mainView}> 
            <View>
                <Text style={styles.text}>Username: {username}</Text>
                <Text style={styles.text}>Вес: {weight} кг</Text>
                <Text style={styles.text}>Цель: {GOAL[goal]}</Text>
                <Text style={styles.text}>Активность: {ACTIVITY[activity]}</Text>
                <Text></Text>
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
        fontFamily: 'Rubik-Regular',
        fontSize: 20,
        color: COLORS.black
    }
})