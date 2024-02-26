import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useEffect, useState } from "react"
import { StyleSheet, Text, TextInput, View } from "react-native"
import { ProfileParamList } from "../../../screens/ProfileStack"
import { useAppSelector } from "../../../store/hooks"
import { COLORS } from "../../../themes/COLORS"
import { HorizontalRule } from "../../components/HorizontalRule"
import { KBFUSsettingsItem } from "./KBFUSettingsItem"

type Navigation = NativeStackScreenProps<ProfileParamList, 'KBFUSettings'>

export const KBFUSettings = ({navigation}: Navigation) => {
    const {calories,carbohydrates,fat,protein} = useAppSelector(state => state.user.user.required_macros)

    useEffect(() => {
        navigation.setOptions({headerTitle: 'Ккалории'})
    }, [])
    return (
        <View style={styles.mainView}>
            <Text style={styles.titleText}>Калории</Text>
               <KBFUSsettingsItem title="Калории" amount={String(calories)} onPress={() => {}}/>
            <HorizontalRule />
            <Text style={styles.titleText}>БЖУ</Text>
                <View style ={styles.bfuView}>
                <KBFUSsettingsItem title="Белки" amount={String(protein)} onPress={() => {}}/>
                <KBFUSsettingsItem title="Жиры" amount={String(fat)} onPress={() => {}}/>
                <KBFUSsettingsItem title="Углеводы" amount={String(carbohydrates)} onPress={() => {}}/>
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
        fontFamily: 'Rubik-Regular',
        fontSize: 24,
        color: COLORS.black
    },
    bfuView: {
        rowGap: 15
    }
})