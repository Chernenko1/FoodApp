import { Pressable, StyleSheet, View } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import { COLORS } from "../../themes/COLORS"

interface Props {
    size?: number,
    backgroundColor?: string
    name: string
    onPress: () => void
}

export const ButtonIcon = ({backgroundColor, size, name, onPress}: Props) => {
    return (
        <Pressable style={styles.iconView} onPress={onPress}>
            <Icon style ={[styles.iconView, {backgroundColor}]} name={name} size={size} color={COLORS.black}/>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    iconView: {
        padding: 5,
        borderRadius: 10
    },
})