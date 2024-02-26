import { Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native"
import { COLORS } from "../../../themes/COLORS"

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
                <Text style={styles.headerText}>{header}</Text>
                <Text style={styles.descriptText}>{description}</Text>
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
        fontFamily: 'Rubik-Regular',
        fontSize: 24,
        textAlign: 'center',
        color: COLORS.deepOrange
    },
    descriptText: {
        fontFamily: 'Rubik-Regular',
        fontSize: 18,
        textAlign: 'center',
    }
})