import { Pressable, StyleProp, StyleSheet, Text, View } from "react-native"
import { AppText } from "./AppText"

interface Props {
    title: string
    onPress: () => void
    color?: string
    textColor?: string
}

export const Button = ({title, onPress, color, textColor}: Props) => {
    return (
        <Pressable style={[styles.pressable, {backgroundColor: color}]} onPress={onPress}>
                <AppText style={[styles.text, {color: textColor}]}>{title}</AppText>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressable: {
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 7,
        borderRadius: 5
    },
    text: {

    }
})