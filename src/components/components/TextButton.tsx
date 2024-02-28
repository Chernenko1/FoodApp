import { Pressable, StyleProp, StyleSheet, Text, TextStyle, ViewStyle } from "react-native"
import { COLORS } from "../../themes/COLORS"
import { AppText } from "./AppText"

interface Props {
    title: string,
    onPress?: () => void,
    color?: string,
    style?: StyleProp<TextStyle>
}

export const TextButton = ({title, onPress, style}:Props) => {
    return (
        <Pressable onPress={onPress}>
            <AppText style={[styles.text, style]} fontWeight="regular">{title}</AppText>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
    }
})