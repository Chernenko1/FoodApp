import { Pressable, StyleProp, StyleSheet, Text, TextStyle, ViewStyle } from "react-native"
import { COLORS } from "../../themes/COLORS"

interface Props {
    title: string,
    onPress?: () => void,
    color?: string,
    style?: StyleProp<TextStyle>
}

export const TextButton = ({title, onPress, style}:Props) => {
    return (
        <Pressable onPress={onPress}>
            <Text style={[styles.text, style]}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        fontFamily: 'Rubik-Regular'
    }
})