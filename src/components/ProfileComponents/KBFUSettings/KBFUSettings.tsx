import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useEffect, useState } from "react"
import { StyleSheet, Text, TextInput, View } from "react-native"
import { ProfileParamList } from "../../../screens/ProfileStack"
import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import { COLORS } from "../../../themes/COLORS"
import { HorizontalRule } from "../../components/HorizontalRule"
import { KBFUSsettingsItem } from "./KBFUSettingsItem"
import { updateUserBFUUsingCalories, updateUserCaloriesUsingBFU } from "../../../http/userAPI"
import { updateReqMacros } from "../../../store/slices/userSlice"
import { TextButton } from "../../components/TextButton"
import { AppText } from "../../components/AppText"
import { useTheme } from "@react-navigation/native"

type Navigation = NativeStackScreenProps<ProfileParamList, 'KBFUSettings'>

export const KBFUSettings = ({navigation}: Navigation) => {

    const {colors} = useTheme()
    
    const {required_macros, _id} = useAppSelector(state => state.user.user)

    const [calories, setCalories] = useState(String(required_macros.calories))
    const [protein, setProtein] = useState(String(required_macros.protein))
    const [fat, setFat] = useState(String(required_macros.fat))
    const [carbohydrates, setCarbohydrates] = useState(String(required_macros.carbohydrates))

    const dispatch = useAppDispatch()

    async function sendCaloriesAmount () {
        await updateUserBFUUsingCalories(_id, calories)
        .then((data: User) => dispatch(updateReqMacros(data)))
    }

    async function sendBFUAmount() {
        let macros = {
            protein,
            fat,
            carbohydrates
        }
        await updateUserCaloriesUsingBFU(_id, macros)
        .then((data: User) => dispatch(updateReqMacros(data)))
    }

    useEffect(() => {
        navigation.setOptions({headerTitle: 'Настройка КБЖУ'})
    }, [])

    return (
        <View style={styles.mainView}>
            <AppText style={styles.titleText}>Калории</AppText>
                <KBFUSsettingsItem title='Калории' onChangeText={setCalories} value={calories}/>
                <TextButton style={styles.textButton} title="Сохранить" onPress={sendCaloriesAmount}/>
            <HorizontalRule />
            <AppText style={styles.titleText}>БЖУ</AppText>
                <View style ={styles.bfuView}>
                    <KBFUSsettingsItem title="Белки" value={protein} onChangeText={setProtein}/>
                    <KBFUSsettingsItem title="Жиры"  value={fat} onChangeText={setFat}/>
                    <KBFUSsettingsItem title="Углеводы" value={carbohydrates} onChangeText={setCarbohydrates}/>
                    <TextButton style={styles.textButton} title="Сохранить" onPress={sendBFUAmount}/>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        paddingVertical: 20,
        paddingHorizontal: 15,
        rowGap: 20
    },
    titleText: {
        fontSize: 18
    },
    inputView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input: {
        fontSize: 20,
        backgroundColor: COLORS.lightGray,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderRadius: 1,
        minWidth: '20%'
    },
    inputText: {
        fontSize: 24,
        color: COLORS.black
    },
    bfuView: {
        rowGap: 15
    },
    textButton: {
        textAlign: 'right',
        color: COLORS.deepOrange
    }
})