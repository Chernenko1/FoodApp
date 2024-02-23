import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import { COLORS } from "../../themes/COLORS"

interface Props {
    value: string,
    status: boolean,
    onPress: () => void
}

export const RadioButton = ({value ='Asfd', status, onPress}:Props) => { 
    return (
        <View style={styles.radioButtonView}>
            <TouchableOpacity activeOpacity={0.7} style={styles.radioButton} onPress={onPress}>
                <Icon name={status ? 'ellipse' : 'ellipse-outline'} size={24} color={status ? COLORS.orange : COLORS.black }/>
                <Text style={styles.text}>{value}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({ 
    radioButtonView: {
        // width: '100%'
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
    }, 
    text: {
        fontFamily: 'Rubik-Regular',
        fontSize: 24,
        marginLeft: 16,
        color: COLORS.black
    }
})