import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { RadioButton } from "../../components/RadioButtons"
import { COLORS } from "../../../themes/COLORS"
import { AppText } from "../../components/AppText"

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
                <AppText style={styles.titleText} fontWeight="medium">{title}</AppText>
                <AppText style={styles.descriptionText}>{description}</AppText>
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
        fontSize: 20,
        color: COLORS.black
    },
    descriptionText: {
        fontSize: 16,
        textAlign: 'left',
        color: COLORS.gray,
    }
})