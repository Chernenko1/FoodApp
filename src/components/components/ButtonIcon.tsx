import { StyleSheet, View } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import { COLORS } from "../../themes/COLORS"

interface Props {
    size?: number,
    backgroundColor?: string
    name: string
}

export const ButtonIcon = ({backgroundColor, size, name}: Props) => {
    return (
        <View style={styles.iconView}>
            <Icon style ={[styles.iconView, {backgroundColor}]} name={name} size={size} color={COLORS.black}/>
        </View>
    )
}

const styles = StyleSheet.create({
    iconView: {
        padding: 5,
        borderRadius: 10
    },
})