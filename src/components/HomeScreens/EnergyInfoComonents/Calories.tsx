import { StyleSheet, Text, View } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import { COLORS } from "../../../themes/COLORS"

interface Props {
    count: string | number,
    type: string
    icon?: string
}

export const Calories = ({count, type, icon}: Props) => {
    return (
        <View style={styles.mainView}>
            <View style={styles.textView}>
                <Text style={styles.text}>{count}</Text>
                <Text style={[styles.text, {marginTop: -7, fontSize: 14}]}>ккал</Text>
                {icon === undefined ? null : <Icon name={icon} size={18}/>}
                <Text style={styles.text}>{type}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {

    },
    textView: {
        alignItems: 'center'
    },
    text: {
        fontSize: 15,
        fontFamily: 'Rubik-Regular',
        paddingVertical: 0,
        color: COLORS.black,
    }
})