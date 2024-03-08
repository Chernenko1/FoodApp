import { StyleSheet, Text, View } from "react-native"
import { UserActivityItem } from "../ProfileComponents/UserComponents/UserActivityItem"
import { useState } from "react"
import { AppText } from "../components/AppText"
import { Button } from "../components/Button"


export const RegUserActivity = () => {
    const [value, setValue] = useState<Number>()

    return (
        <View style={styles.mainView}>
            <AppText style={styles.text}>Ваша ежедневная активность</AppText>
            <View style={styles.activityView}>
                <UserActivityItem 
                    title="Низкая активность"
                    description="Легкие физические нагрузки либо занятия 1-3 раз в неделю, 5к шагов"
                    status = {value === 0 ? true : false}
                    onPress={() => setValue(0)}
                />
                <UserActivityItem 
                    title="Умеренная активность"
                    description="Занятия 6 раз в неделю, 10к шагов"
                    status = {value === 1 ? true : false}
                    onPress={() => setValue(1)}
                />
                <UserActivityItem 
                    title="Высокая активность"
                    description="Интенсивные нагрузки, занятия 7 раз в неделю, 25к шагов"
                    status = {value === 2 ? true : false}
                    onPress={() => setValue(2)}
                />
                <UserActivityItem 
                    title="Очень высокая активность"
                    description="Олимпийские спортсмены и люди, выполняющие сходные нагрузки"
                    status = {value === 3 ? true : false}
                    onPress={() => setValue(3)}
                />
            </View>
            <Button title="Далее" onPress={() => {}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: 25
    },
    activityView: {
        marginTop: 15,
        paddingHorizontal: 15,
        rowGap: 10
    },
    text: {
        fontSize: 25,
    }
})