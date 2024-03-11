import { StyleSheet, View } from "react-native"
import { UserGoalItem } from "../ProfileComponents/UserComponents/UserGoalItem"
import { useState } from "react"
import { AppText } from "../components/AppText"
import { Button } from "../components/Button"
import { COLORS } from "../../themes/COLORS"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AuthParamList } from "../../navigation/AuthStackNavigation"

type Navigation = NativeStackScreenProps<AuthParamList>

export const RegGoal = ({navigation}: Navigation) => {
    const [value, setValue] = useState<Number>()

    return (
        <View style={styles.mainView}>
            <AppText style={styles.headerText} fontWeight='medium'>Какая у вас цель?</AppText>
            <View>
                <UserGoalItem
                    header="Снижение веса" 
                    description="Снижайте свой вес без проблем"  
                    onPress={() => setValue(0)}
                    status={value === 0 ? true : false}
                />
                <UserGoalItem 
                    header="Поддержание веса"
                    description="Сохраняйте свой вес без проблем"  
                    onPress={() => setValue(1)}
                    status={value === 1 ? true : false}
                />
                <UserGoalItem 
                    header="Набор веса" 
                    description="Набирайте свой вес без проблем" 
                    onPress={() => setValue(2)}
                    status={value === 2 ? true : false}
                />
            </View>
            <Button 
                style={styles.button} 
                title="Далее" 
                onPress={() => navigation.navigate('RegGenderSelect', {purpose: value as number})} 
                color={COLORS.orange}
                textColor={COLORS.black} 
                disabled={!value}/>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20
    },
    button: {
        width: '70%'
    },
    headerText: {
        fontSize: 24
    }
})