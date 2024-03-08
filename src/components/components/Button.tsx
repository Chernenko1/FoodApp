import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native"
import { AppText } from "./AppText"
import { COLORS } from "../../themes/COLORS"

interface Props {
    title: string
    onPress: () => void
    color?: string
    textColor?: string,
    size?: number,
    style?: StyleProp<ViewStyle>,
    disabled?: boolean
}

export const Button = ({title, onPress, color, textColor, size, style, disabled = false}: Props) => {
    return (
        <Pressable style={[styles.pressable, {backgroundColor:disabled ? COLORS.gray : color}, style]} onPress={onPress} disabled={disabled}>
                <AppText style={[{color: textColor, fontSize: size ?? 18}]}>{title}</AppText>
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
})