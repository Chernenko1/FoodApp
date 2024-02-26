import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { RadioButton } from "../../components/RadioButtons"
import { COLORS } from "../../../themes/COLORS"

interface Props {
    title: string,
    description: string,
    status: boolean,
    onPress: () => void
}

export const UserActivityItem = ({title, description, status, onPress}: Props) => {
    return (
        <TouchableOpacity style={styles.activityItem} activeOpacity={0.7} onPress={onPress}>
            <RadioButton status={status}/>
            <View style={styles.textView}>
                <Text style={styles.titleText}>{title}</Text>
                <Text style={styles.descriptionText}>{description}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    activityItem:{ 
        flexDirection: 'row',
        marginBottom: 15,
    },
    textView: {
        paddingHorizontal: 15,
    },
    titleText: {
        fontFamily: 'Rubik-Medium',
        fontSize: 20,
        color: COLORS.black
    },
    descriptionText: {
        fontFamily: 'Rubik-Regular',
        fontSize: 16,
        textAlign: 'left',
        color: COLORS.gray,
    }
})