import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native"
import { AppText } from "./AppText"

interface Props {
    title: string
    onPress: () => void
    color?: string
    textColor?: string,
    size?: number,
    style?: StyleProp<ViewStyle>
}

export const Button = ({title, onPress, color, textColor, size, style}: Props) => {
    return (
        <Pressable style={[styles.pressable, {backgroundColor: color}, style]} onPress={onPress}>
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