import { StyleSheet, View, Text, Pressable, TouchableHighlight } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'

import { COLORS } from "../../../themes/COLORS"
import { StackNavigationState, useNavigation, useTheme } from "@react-navigation/native"
import {NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types"
import { HomeParamList } from "../../../screens/HomeStack"
import { AppText } from "../../components/AppText"
import { ButtonIcon } from "../../components/ButtonIcon"

interface Props {
    title: string,
    type: string,
    kcal: number,
}

type Navigation = NativeStackNavigationProp<HomeParamList, 'MealInfo'>

export const Meal = ({title, kcal = 0, type}: Props) => {

    const {colors} = useTheme()

    const navigation = useNavigation<Navigation>()

    return (
        <View style={[styles.mainView, {backgroundColor: colors.card}]}>
            <Pressable onPress={() => navigation.navigate('MealInfo', {headerTitle: title, type})}>
                <View style={styles.frameView}>
                    <AppText style={styles.titleText} fontWeight="medium">{title}</AppText>
                    <AppText style = {styles.kcalText}>
                        Употреблено 
                        <AppText style={[{color: colors.primary}]}> {kcal} </AppText> 
                        ккал
                    </AppText>
                </View>
            </Pressable>    
            <ButtonIcon 
                name="add-outline" 
                size={40} 
                backgroundColor={COLORS.lightGray} 
                onPress={() => navigation.navigate('Search', {backScreen: 'StackHome', screenParams: {mealType: type} })}/>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 15,
        elevation: 3
    },
    frameView: {
    },
    iconView: {
        backgroundColor: COLORS.lightGray,
        padding: 5,
        borderRadius: 10
    },
    titleText: {
        fontSize: 24,
    },
    kcalText: {
        fontSize: 18
    }
})