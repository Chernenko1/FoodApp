import { StyleSheet, Text, View } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import { COLORS } from "../../../themes/COLORS"
import { AppText } from "../../components/AppText"

interface Props {
    count: string | number,
    type: string
    icon?: string
}

export const Calories = ({count, type, icon}: Props) => {
    return (
        <View style={styles.mainView}>
            <View style={styles.textView}>
                <AppText style={styles.text}>{count}</AppText>
                <AppText style={[styles.text, {marginTop: -7, fontSize: 14}]}>ккал</AppText>
                {icon === undefined ? null : <Icon name={icon} size={18}/>}
                <AppText style={styles.text}>{type}</AppText>
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
        paddingVertical: 0,
        color: COLORS.black,
    }
})