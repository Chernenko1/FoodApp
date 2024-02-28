import { Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native"
import { COLORS } from "../../../themes/COLORS"
import { AppText } from "../../components/AppText"

interface Props {
    header: string,
    description: string,
    onPress: () => void,
    status?: boolean
}



export const UserGoalItem = ({header, description, onPress, status}: Props) => {

    const {width} = useWindowDimensions()
    return (
        <Pressable style={[styles.textView, {width: width * 0.8, backgroundColor: status ? COLORS.orange : COLORS.white}]} onPress={onPress}>
                <AppText style={styles.headerText}>{header}</AppText>
                <AppText style={styles.descriptText}>{description}</AppText>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    textView: {
        backgroundColor: COLORS.white,
        marginBottom: 15,
        paddingVertical: 20,
        paddingHorizontal: 30,
        borderRadius: 30,
        elevation: 3,
    },
    headerText: {
        fontSize: 24,
        textAlign: 'center',
        color: COLORS.deepOrange
    },
    descriptText: {
        fontSize: 18,
        textAlign: 'center',
    }
})