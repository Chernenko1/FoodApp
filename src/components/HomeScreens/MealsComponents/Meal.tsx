import { StyleSheet, View, Text } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'

import { COLORS } from "../../../themes/COLORS"

interface Props {
    title: string,
    kcal: number,
    maxKcal: number
}

export const Meal = ({title, kcal = 0, maxKcal = 0}: Props) => {

    return (
        <View style={styles.mainView}>
            <View style={styles.frameView}>
                <Text style={styles.titleText}>{title}</Text>
                <Text style = {styles.kcalText}>
                    <Text style={styles.countText}>{kcal} </Text> 
                     ккал из 
                    <Text style={styles.countText}> {maxKcal} </Text> 
                     ккал
                    </Text>
            </View>
            <View style={styles.iconView}>
                <Icon name='add-outline' size={35} color='black'/>
            </View>
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
        backgroundColor: COLORS.white,
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
    countText: {
        color: COLORS.orange
    },
    titleText: {
        fontFamily: 'Rubik-Medium',
        fontSize: 24,
        color: COLORS.black
    },
    kcalText: {
        fontFamily: 'Rubik-Regular',
        color: COLORS.black,
        fontSize: 18
    }
})